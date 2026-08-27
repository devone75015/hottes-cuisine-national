<?php
/**
 * Point de réception des demandes de devis et de dépannage.
 *
 * Le site étant exporté en statique, il n'y a plus de serveur Node : ce script
 * PHP joue le rôle du point de réception. Il fonctionne tel quel sur un
 * hébergement mutualisé Hostinger, qui exécute PHP.
 *
 * ============================================================================
 *  À FAIRE AVANT MISE EN LIGNE
 * ============================================================================
 *  1. DEST_EMAIL et ALLOWED_ORIGIN sont renseignés. Vérifier qu'ALLOWED_ORIGIN
 *     correspond exactement à la forme servie du domaine (avec ou sans www).
 *  2. Vérifier que leads.log n'est pas servi publiquement — le .htaccess livré
 *     à la racine en refuse l'accès.
 *
 *  La fonction mail() de PHP passe souvent en indésirable. Si les demandes
 *  n'arrivent pas, basculer sur le SMTP authentifié de la boîte Hostinger :
 *  c'est le cas le plus fréquent et la seule correction fiable.
 * ============================================================================
 */

declare(strict_types=1);

const DEST_EMAIL     = 'devis@reparationhottecuisinenettoyage.fr';
const ALLOWED_ORIGIN = 'https://reparationhottecuisinenettoyage.fr';
const LOG_FILE       = __DIR__ . '/../leads.log';
const MAX_BODY_BYTES = 20000;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/* -- Seules les requêtes POST venant du site sont acceptées ---------------- */
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && $origin !== ALLOWED_ORIGIN) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Origine non autorisée']);
    exit;
}

/* -- Lecture et décodage du corps ----------------------------------------- */
$raw = file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
if ($raw === false || strlen($raw) > MAX_BODY_BYTES) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'error' => 'Requête trop volumineuse']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Format invalide']);
    exit;
}

/* -- Validation côté serveur ---------------------------------------------- *
 * La validation du navigateur ne compte pas : n'importe qui peut poster ici
 * directement. C'est ce bloc qui fait foi.
 * ------------------------------------------------------------------------- */
function field(array $d, string $key, int $max = 500): string
{
    $v = isset($d[$key]) && is_scalar($d[$key]) ? (string) $d[$key] : '';
    $v = trim(strip_tags($v));
    // Neutralise l'injection d'en-têtes : un retour à la ligne dans un champ
    // repris tel quel dans un en-tête de courriel permettrait d'en ajouter.
    $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v);
    return mb_substr($v, 0, $max);
}

$phone = field($data, 'phone', 30);
$city  = field($data, 'city', 120);
$stage = field($data, 'stage', 20);

if ($phone === '' || !preg_match('/^(?:\+33|0)\s?[1-9](?:[\s.-]?\d{2}){4}$/', $phone)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Numéro de téléphone invalide']);
    exit;
}
if ($city === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Ville manquante']);
    exit;
}

$email = field($data, 'email', 160);
if ($stage === 'complete' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Adresse e-mail invalide']);
    exit;
}

/* -- Composition du message ----------------------------------------------- */
$kind     = field($data, 'kind', 20) === 'repair' ? 'DÉPANNAGE' : 'DEVIS';
$state    = field($data, 'state', 60);
$urgent   = ($kind === 'DÉPANNAGE' && stripos($state, 'arrêt complet') !== false);

$symptoms = '';
if (isset($data['symptoms']) && is_array($data['symptoms'])) {
    $clean = array_map(
        static fn($s): string => trim(strip_tags((string) $s)),
        array_slice($data['symptoms'], 0, 15)
    );
    $symptoms = implode(', ', array_filter($clean));
}

$lines = [
    'Type de demande  : ' . $kind . ($urgent ? '  ***  CUISINE À L\'ARRÊT  ***' : ''),
    'Étape            : ' . ($stage === 'complete' ? 'complète' : 'partielle (rappel possible)'),
    '',
    'Téléphone        : ' . $phone,
    'Ville            : ' . $city . ' ' . field($data, 'postalCode', 10),
    'E-mail           : ' . $email,
    'Nom              : ' . field($data, 'name', 120),
    'Société          : ' . field($data, 'company', 160),
    'Établissement    : ' . field($data, 'establishment', 80),
    '',
    'Prestation       : ' . field($data, 'service', 120),
    'État constaté    : ' . $state,
    'Symptômes        : ' . $symptoms,
    'Marque / modèle  : ' . field($data, 'brand', 80) . ' ' . field($data, 'model', 80),
    'Nombre de hottes : ' . field($data, 'hoods', 10),
    'Réseau           : ' . field($data, 'network', 80),
    'Délai souhaité   : ' . field($data, 'urgency', 60),
    'Photos / vidéo   : ' . (!empty($data['hasMedia']) ? 'oui' : 'non'),
    '',
    'Message          : ' . field($data, 'message', 2000),
    '',
    'Page d\'origine   : ' . field($data, 'source', 300),
    'Reçu le          : ' . date('d/m/Y H:i:s'),
];

$body = implode("\n", $lines);

$subject = sprintf(
    '[%s]%s %s - %s',
    $kind,
    $urgent ? ' URGENT' : '',
    $city,
    field($data, 'establishment', 40)
);

/* -- Journalisation : le courriel peut échouer, pas la trace --------------- */
@file_put_contents(
    LOG_FILE,
    "=== " . date('c') . " ===\n" . $body . "\n\n",
    FILE_APPEND | LOCK_EX
);

/* -- Envoi ---------------------------------------------------------------- */
$headers = implode("\r\n", [
    'From: Site web <no-reply@' . parse_url(ALLOWED_ORIGIN, PHP_URL_HOST) . '>',
    'Reply-To: ' . ($email !== '' ? $email : DEST_EMAIL),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
]);

$sent = @mail(DEST_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers);

/**
 * On répond OK même si mail() échoue : la demande est journalisée, le prospect
 * ne doit pas voir d'erreur alors que ses coordonnées sont bien enregistrées.
 * La supervision se fait sur leads.log, pas sur le retour HTTP.
 */
http_response_code(200);
echo json_encode(['ok' => true, 'mailed' => (bool) $sent]);
