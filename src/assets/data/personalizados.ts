export interface Personalizado {
    slug: string;
    titulo: string;
    descripcion?: string;
    categoria?: string;
    imagenPrincipal?: string;
    galeria: string[];
}

export const personalizados: Personalizado[] = [
    {
        slug: "boligrafos",
        titulo: "Bolígrafos",
        imagenPrincipal: "/personalizados/Boligrafos.webp",
        galeria: [
            // "/img/personalizados/galeria/llaveros-1.webp",
            // "/img/personalizados/galeria/llaveros-2.webp",
        ],
    },
    {
        slug: "tazones",
        titulo: "Tazones",
        imagenPrincipal: "/personalizados/Tazones.webp",
        galeria: [],
    },
    {
        slug: "estampados",
        titulo: "Estampados",
        imagenPrincipal: "/personalizados/Estampados.webp",
        galeria: [],
    },
    {
        slug: "copas",
        titulo: "Copas",
        imagenPrincipal: "/personalizados/Copas.webp",
        galeria: [],
    },
    {
        slug: "cristales",
        titulo: "Cristales",
        imagenPrincipal: "/personalizados/Cristales.webp",
        galeria: [],
    },
    {
        slug: "grabados",
        titulo: "Grabados",
        imagenPrincipal: "/personalizados/Grabados.webp",
        galeria: [],
    },
    {
        slug: "mascotas",
        titulo: "Mascotas",
        imagenPrincipal: "/personalizados/Mascotas.webp",
        galeria: [],
    },
    {
        slug: "quincho",
        titulo: "Quincho",
        imagenPrincipal: "/personalizados/Quincho.webp",
        galeria: [],
    },
    {
        slug: "suculentas",
        titulo: "Suculentas",
        imagenPrincipal: "/personalizados/Suculentas.webp",
        galeria: [],
    },
    {
        slug: "papeleria",
        titulo: "Papeleria",
        imagenPrincipal: "/personalizados/Papeleria.webp",
        galeria: [],
    },
    {
        slug: "termos",
        titulo: "Termos",
        imagenPrincipal: "/personalizados/Termos.webp",
        galeria: [],
    },
    {
        slug: "trofeos",
        titulo: "Trofeos",
        imagenPrincipal: "/personalizados/Trofeos.webp",
        galeria: [],
    },
];
