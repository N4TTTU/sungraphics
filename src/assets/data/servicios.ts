export interface Servicio {
    slug: string;
    titulo: string;
    descripcion?: string;
    categoria?: string;
    imagenPrincipal?: string; // portada (desde /public)
    galeria: string[];
}

export const servicios: Servicio[] = [
    {
        slug: "letreros-camineros",
        titulo: "Letreros camineros",
        categoria: "Señalética vial",
        imagenPrincipal: "/img/servicios/portadas/LetrerosCamineros.webp",
        galeria: [
            "/img/servicios/galeria/letreros-camineros-1.webp",
            "/img/servicios/galeria/letreros-camineros-2.webp",
        ]
    },
    {
        slug: "letreros-luminosos",
        titulo: "Letreros luminosos",
        categoria: "Iluminación / Publicidad",
        imagenPrincipal: "/img/servicios/portadas/LetrerosLuminosos.webp",
        galeria: [],
    },
    {
        slug: "letreros-volumetricos-luminosos",
        titulo: "Letreros volumétricos luminosos",
        categoria: "Corpóreos / Iluminación",
        imagenPrincipal: "/img/servicios/portadas/LetrerosVolumetricosLuminosos.webp",
        galeria: [],
    },
    {
        slug: "cerco-publicitario",
        titulo: "Cerco publicitario",
        imagenPrincipal: "/img/servicios/portadas/CercoPublicitario.webp",
        galeria: [],
    },
    {
        slug: "demarcaciones",
        titulo: "Demarcaciones",
        imagenPrincipal: "/img/servicios/portadas/Demarcaciones.webp",
        galeria: [],
    },
    {
        slug: "empavonados",
        titulo: "Empavonados",
        imagenPrincipal: "/img/servicios/portadas/Empavonados.webp",
        galeria: [],
    },
    {
        slug: "exhibidores-publicitarios",
        titulo: "Exhibidores publicitarios",
        imagenPrincipal: "/img/servicios/portadas/ExhibidoresPublicitarios.webp",
        galeria: [],
    },
    {
        slug: "gigantografia-bastidores",
        titulo: "Gigantografía y bastidores",
        imagenPrincipal: "/img/servicios/portadas/GigantografiaBastidores.webp",
        galeria: [],
    },
    {
        slug: "grabados",
        titulo: "Grabados",
        imagenPrincipal: "/img/servicios/portadas/Grabados.webp",
        galeria: [],
    },
    {
        slug: "impresion-cuatricromia",
        titulo: "Impresión cuatricromía",
        imagenPrincipal: "/img/servicios/portadas/ImpresionCuatricromia.webp",
        galeria: [],
    },
    {
        slug: "letras-volumetricas",
        titulo: "Letras volumétricas",
        imagenPrincipal: "/img/servicios/portadas/LetrasVolumetricas.webp",
        galeria: [],
    },
    {
        slug: "letrero",
        titulo: "Letrero",
        imagenPrincipal: "/img/servicios/portadas/Letrero.webp",
        galeria: [],
    },
    {
        slug: "one-way-vision",
        titulo: "One Way Vision",
        imagenPrincipal: "/img/servicios/portadas/OneWayVision.webp",
        galeria: [],
    },
    {
        slug: "rotulacion-vehicular",
        titulo: "Rotulación vehicular",
        imagenPrincipal: "/img/servicios/portadas/RotulacionVehicular.webp",
        galeria: [],
    },
    {
        slug: "senaleticas",
        titulo: "Señaléticas",
        imagenPrincipal: "/img/servicios/portadas/Senaleticas.webp",
        galeria: [],
    },
    {
        slug: "Otros-servicios",
        titulo: "Otros servicios",
        imagenPrincipal: "/img/servicios/portadas/",
        galeria: [],
    },
];
