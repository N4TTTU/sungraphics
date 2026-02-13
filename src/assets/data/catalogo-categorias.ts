// src/assets/data/catalogo-categorias.ts
export type CategoriaSlug =
    | "trofeos-plasticos"
    | "trofeos-resina"
    | "trofeos-metalicos"
    | "copas-plasticas"
    | "copas-metalicas"
    | "mix-de-copas"
    | "tazones-botellas-mugs"
    | "sets-de-copas"
    | "sublimacion"
    | "sublimacion-llaveros"
    | "trofeos-vidrio"
    | "medallas-accesorios"
    | "cuadernos-libretas"
    | "memo-set-ecologico"
    | "libretas-ecologicas"
    | "cristales"
    | "otros";

export interface CategoriaCatalogo {
    slug: CategoriaSlug;
    nombre: string;
    grupo?: string; // opcional, para agrupar en la portada, ej. "Trofeos", "Copas", "Regalos", etc.
}

export const categoriasCatalogo: CategoriaCatalogo[] = [
    { slug: "trofeos-plasticos", nombre: "Trofeos plásticos", grupo: "Trofeos" },
    { slug: "trofeos-resina", nombre: "Trofeos de resina", grupo: "Trofeos" },
    { slug: "trofeos-metalicos", nombre: "Trofeos metálicos", grupo: "Trofeos" },
    { slug: "copas-plasticas", nombre: "Copas plásticas", grupo: "Copas" },
    { slug: "copas-metalicas", nombre: "Copas metálicas", grupo: "Copas" },
    { slug: "mix-de-copas", nombre: "Mix de copas", grupo: "Copas" },
    { slug: "tazones-botellas-mugs", nombre: "Tazones, botellas y mugs", grupo: "Regalos" },
    { slug: "sets-de-copas", nombre: "Sets de copas", grupo: "Regalos" },
    { slug: "sublimacion", nombre: "Sublimación", grupo: "Sublimación" },
    { slug: "sublimacion-llaveros", nombre: "Sublimación en llaveros", grupo: "Sublimación" },
    { slug: "trofeos-vidrio", nombre: "Trofeos de vidrio", grupo: "Trofeos" },
    { slug: "medallas-accesorios", nombre: "Medallas y accesorios", grupo: "Trofeos" },
    { slug: "cuadernos-libretas", nombre: "Cuadernos y libretas", grupo: "Papelería" },
    { slug: "memo-set-ecologico", nombre: "Memo set ecológico (post-it)", grupo: "Papelería" },
    { slug: "libretas-ecologicas", nombre: "Libretas ecológicas", grupo: "Papelería" },
    { slug: "cristales", nombre: "Cristales", grupo: "Trofeos" },
    { slug: "otros", nombre: "Otros", grupo: "Otros" },
];
