export interface Servicio {
    slug: string;
    titulo: string;
    descripcion?: string;
    categoria?: string;
    imagenPrincipal?: string; // <— portada
    galeria: string[];
}

export const servicios: Servicio[] = [
    {
        slug: "letreros-camineros",
        titulo: "Letreros camineros",
        categoria: "Señalética vial",
        imagenPrincipal: "/Servicios/portadas/Demarcaciones.png", // <— desde /public
        galeria: [
            "/servicios/galeria/letreros-camineros-1.webp",
            "/servicios/galeria/letreros-camineros-2.webp",
        ],
    },
    // ...
];
