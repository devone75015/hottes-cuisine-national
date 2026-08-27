/**
 * Point d'entrée Node pour l'hébergement Hostinger (plan Business).
 *
 * hPanel demande un « Entry file » se terminant par .js — ce fichier joue ce
 * rôle. Il fait exactement ce que fait `next start` : il monte le gestionnaire
 * de requêtes de Next et l'expose sur le port fourni par l'hébergeur.
 *
 * Deux points qui comptent sur un hébergement mutualisé :
 *
 *  - Le port n'est PAS choisi par nous. Hostinger l'injecte dans process.env.PORT.
 *    Écrire un port en dur ferait échouer le démarrage.
 *  - L'écoute doit se faire sur 0.0.0.0 et non sur 127.0.0.1, sans quoi le
 *    reverse proxy de l'hébergeur ne peut pas joindre le processus.
 *
 * Le fichier est en CommonJS : package.json ne déclare pas "type": "module".
 */

const { createServer } = require("node:http");

// Selon la version, `require("next")` renvoie la fonction ou un module ESM
// interopérable. On couvre les deux cas.
const nextImport = require("next");
const next = nextImport.default ?? nextImport;

const port = Number.parseInt(process.env.PORT ?? "", 10) || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res).catch((err) => {
        console.error("Erreur de traitement de la requête :", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      });
    }).listen(port, hostname, () => {
      console.log(`Prêt sur http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Le serveur Next n'a pas pu démarrer :", err);
    process.exit(1);
  });
