import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo";
import s from "./Breadcrumb.module.scss";

/** Fil d'Ariane + BreadcrumbList JSON-LD. Présent sur 100 % des pages. */
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  const full: Crumb[] = [{ name: "Accueil", path: "/" }, ...crumbs];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(full)} />
      <nav aria-label="Fil d'Ariane" className={s.wrap}>
        <div className="container">
          <ol className={s.list}>
            {full.map((c, i) => {
              const last = i === full.length - 1;
              return (
                <li key={c.path} className={s.item}>
                  {last ? (
                    <span aria-current="page">{c.name}</span>
                  ) : (
                    <>
                      <Link href={c.path}>{c.name}</Link>
                      <span className={s.sep} aria-hidden="true">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
