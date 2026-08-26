import type { PriceLine } from "@/data/pricing";
import s from "./PriceTable.module.scss";

/**
 * Tableau de tarification.
 * Tant que les fourchettes ne sont pas renseignées dans `data/pricing.ts`,
 * la colonne prix affiche « Sur devis » — jamais un montant inventé.
 */
export function PriceTable({ lines, caption }: { lines: PriceLine[]; caption: string }) {
  const hasPrices = lines.some((l) => l.range !== null);

  return (
    <div className={s.wrap}>
      <table>
        <caption className="srOnly">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Configuration</th>
            <th scope="col">Ce que cela recouvre</th>
            <th scope="col" className={s.priceCol}>
              {hasPrices ? "Fourchette HT" : "Tarif"}
            </th>
          </tr>
        </thead>
        <tbody>
          {lines.map((l) => (
            <tr key={l.label}>
              <th scope="row">{l.label}</th>
              <td>{l.detail}</td>
              <td className={s.priceCol}>
                {l.range ? (
                  <span className={s.price}>
                    {l.range.from} – {l.range.to} €
                  </span>
                ) : (
                  <span className={s.quote}>Sur devis</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
