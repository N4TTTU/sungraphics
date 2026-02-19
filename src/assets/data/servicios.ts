export type GallerySection = {
    title: string;
    images: { src: string; alt?: string }[];
};

export type Servicio = {
    slug: string;
    titulo: string;
    claim: string;          // 👈 nuevo (texto del cuadro gris)
    descripcion?: string;
    imagenPrincipal: string;
    sections?: {
        title: string;
        images: { src: string; alt?: string }[];
    }[];
};


export const servicios: Servicio[] = [
    {
        slug: "gigantografias-bastidores",
        titulo: "GIGANTOGRAFÍAS\nY BASTIDORES",
        descripcion:
            "Destaca tu marca con gigantografías y bastidores de gran formato, resistentes y con acabado profesional.",
        imagenPrincipal: "/img/servicios/portadas/GigantografiaBastidores.webp",
        claim: "Destaca tu marca con gigantografías y bastidores de gran formato, resistentes y con acabado profesional.",
        sections: [
            {
                title: "LETREROS Camineros",
                images: [
                    { src: "/img/servicios/gigantografias/gigantografia-1.webp", alt: "Letrero caminero 1" },
                    { src: "/img/servicios/gigantografias/gigantografia-2.webp", alt: "Letrero caminero 2" },
                    { src: "/img/servicios/gigantografias/gigantografia-3.webp", alt: "Letrero caminero 3" },
                    { src: "/img/servicios/gigantografias/gigantografia-4.webp", alt: "Letrero caminero 4" },
                    { src: "/img/servicios/gigantografias/gigantografia-5.webp", alt: "Letrero caminero 5" },
                    { src: "/img/servicios/gigantografias/gigantografia-6.webp", alt: "Letrero caminero 6" },
                ],
            },
            {
                title: "Bastidores",
                images: [
                    { src: "/img/servicios/gigantografias/bastidores-1.webp", alt: "Bastidor 1" },
                    { src: "/img/servicios/gigantografias/bastidores-2.webp", alt: "Bastidor 2" },
                    { src: "/img/servicios/gigantografias/bastidores-3.webp", alt: "Bastidor 3" },
                    { src: "/img/servicios/gigantografias/bastidores-4.webp", alt: "Bastidor 4" },
                    { src: "/img/servicios/gigantografias/bastidores-5.webp", alt: "Bastidor 5" },
                    { src: "/img/servicios/gigantografias/bastidores-6.webp", alt: "Bastidor 6" },
                ],
            },
        ],
    },
    {
        slug: "letreros-luminosos",
        titulo: "LETREROS\nLUMINOSOS",
        descripcion:
            "Haz brillar tu marca con letreros luminosos que atraen miradas día y noche.",
        imagenPrincipal: "/img/servicios/portadas/LetrerosLuminosos.webp",
        claim: "Haz brillar tu marca con letreros luminosos que atraen miradas día y noche.",
        sections: [
            {
                title: "LETREROS LUMINOSOS",
                images: [
                    { src: "/img/servicios/letrerosluminosos/LetrerosLuminosos-1.webp", alt: "Letrero luminoso 1" },
                    { src: "/img/servicios/letrerosluminosos/LetrerosLuminosos-2.webp", alt: "Letrero luminoso 2" },
                    { src: "/img/servicios/letrerosluminosos/LetrerosLuminosos-3.webp", alt: "Letrero luminoso 3" },
                    { src: "/img/servicios/letrerosluminosos/LetrerosLuminosos-4.webp", alt: "Letrero luminoso 4" },
                    { src: "/img/servicios/letrerosluminosos/LetrerosLuminosos-5.webp", alt: "Letrero luminoso 5" },
                    { src: "/img/servicios/letrerosluminosos/LetrerosLuminosos-6.webp", alt: "Letrero luminoso 6" },
                ],
            },
            {
                title: "LETREROS VOLUMÉTRICOS LUMINOSOS",
                images: [
                    { src: "/img/servicios/letrerosluminosos/LetreroVolumetricoLuminoso-1.webp", alt: "Letrero volumétrico 1" },
                    { src: "/img/servicios/letrerosluminosos/LetreroVolumetricoLuminoso-2.webp", alt: "Letrero volumétrico 2" },
                    { src: "/img/servicios/letrerosluminosos/LetreroVolumetricoLuminoso-3.webp", alt: "Letrero volumétrico 3" },
                    { src: "/img/servicios/letrerosluminosos/LetreroVolumetricoLuminoso-4.webp", alt: "Letrero volumétrico 4" },
                    { src: "/img/servicios/letrerosluminosos/LetreroVolumetricoLuminoso-5.webp", alt: "Letrero volumétrico 5" },
                    { src: "/img/servicios/letrerosluminosos/LetreroVolumetricoLuminoso-6.webp", alt: "Letrero volumétrico 6" },
                ],
            },
        ],
    },
    {
        slug: "senaleticas",
        titulo: "SEÑALÉTICA",
        descripcion:
            "Señaléticas que informan y guían con estilo y profesionalismo.",
        imagenPrincipal: "/img/servicios/portadas/Senaletica.webp",
        claim: "Señaléticas que informan y guían con estilo y profesionalismo.",
        sections: [
            {
                title: "SEÑALÉTICAS VIDRIO",
                images: [
                    { src: "/img/servicios/senaletica/senaleticavidrio-1.webp", alt: "Señalética 1" },
                    { src: "/img/servicios/senaletica/senaleticavidrio-2.webp", alt: "Señalética 2" },
                    { src: "/img/servicios/senaletica/senaleticavidrio-3.webp", alt: "Señalética 3" },
                    { src: "/img/servicios/senaletica/senaleticavidrio-4.webp", alt: "Señalética 4" },
                    { src: "/img/servicios/senaletica/senaleticavidrio-5.webp", alt: "Señalética 5" },
                    { src: "/img/servicios/senaletica/senaleticavidrio-6.webp", alt: "Señalética 6" },
                ],
            },
            {
                title: "SEÑALÉTICAS METAL",
                images: [
                    { src: "/img/servicios/senaletica/senaleticametal-1.webp", alt: "Señalética metal 1" },
                    { src: "/img/servicios/senaletica/senaleticametal-2.webp", alt: "Señalética metal 2" },
                    { src: "/img/servicios/senaletica/senaleticametal-3.webp", alt: "Señalética metal 3" },
                    { src: "/img/servicios/senaletica/senaleticametal-4.webp", alt: "Señalética metal 4" },
                    { src: "/img/servicios/senaletica/senaleticametal-5.webp", alt: "Señalética metal 5" },
                    { src: "/img/servicios/senaletica/senaleticametal-6.webp", alt: "Señalética metal 6" },
                ],
            },
            {
                title: "SEÑALÉTICAS MADERA",
                images: [
                    { src: "/img/servicios/senaletica/senaleticamadera-1.webp", alt: "Señalética madera 1" },
                    { src: "/img/servicios/senaletica/senaleticamadera-2.webp", alt: "Señalética madera 2" },
                    { src: "/img/servicios/senaletica/senaleticamadera-3.webp", alt: "Señalética madera 3" },
                    { src: "/img/servicios/senaletica/senaleticamadera-4.webp", alt: "Señalética madera 4" },
                    { src: "/img/servicios/senaletica/senaleticamadera-5.webp", alt: "Señalética madera 5" },
                    { src: "/img/servicios/senaletica/senaleticamadera-6.webp", alt: "Señalética madera 6" },
                ],
            },
        ],
    },
    {
        slug: "grabados",
        titulo: "GRABADOS",
        descripcion:
            "Grabados en madera, metal, vidrio y más, que aportan distinción, durabilidad y acabado profesional.",
        imagenPrincipal: "/img/servicios/portadas/Grabados.webp",
        claim: "Grabados en madera, metal, vidrio y más, que aportan distinción, durabilidad y acabado profesional.",
        sections: [
            {
                title: "Grabado en acrilico",
                images: [
                    { src: "/img/servicios/grabados/grabadoacrilico-1.webp", alt: "Grabados en acrilico 1" },
                    { src: "/img/servicios/grabados/grabadoacrilico-2.webp", alt: "Grabados en acrilico 2" },
                    { src: "/img/servicios/grabados/grabadoacrilico-3.webp", alt: "Grabados en acrilico 3" },
                    { src: "/img/servicios/grabados/grabadoacrilico-4.webp", alt: "Grabados en acrilico 4" },
                    { src: "/img/servicios/grabados/grabadoacrilico-5.webp", alt: "Grabados en acrilico 5" },
                    { src: "/img/servicios/grabados/grabadoacrilico-6.webp", alt: "Grabados en acrilico 6" },
                ],
            },
            {
                title: "Grabado en madera",
                images: [
                    { src: "/img/servicios/grabados/grabadomadera-1.webp", alt: "Grabados en madera 1" },
                    { src: "/img/servicios/grabados/grabadomadera-2.webp", alt: "Grabados en madera 2" },
                    { src: "/img/servicios/grabados/grabadomadera-3.webp", alt: "Grabados en madera 3" },
                    { src: "/img/servicios/grabados/grabadomadera-4.webp", alt: "Grabados en madera 4" },
                    { src: "/img/servicios/grabados/grabadomadera-5.webp", alt: "Grabados en madera 5" },
                    { src: "/img/servicios/grabados/grabadomadera-6.webp", alt: "Grabados en madera 6" },
                ],
            },
            // {
            //     title: "Grabado en vidrio",
            //     images: [
            //         { src: "/img/servicios/Grabados/GrabadoEnVidrio-1.webp", alt: "Grabados en vidrio 1" },
            //         { src: "/img/servicios/Grabados/GrabadoEnVidrio-2.webp", alt: "Grabados en vidrio 2" },
            //         { src: "/img/servicios/Grabados/GrabadoEnVidrio-3.webp", alt: "Grabados en vidrio 3" },
            //         { src: "/img/servicios/Grabados/GrabadoEnVidrio-4.webp", alt: "Grabados en vidrio 4" },
            //         { src: "/img/servicios/Grabados/GrabadoEnVidrio-5.webp", alt: "Grabados en vidrio 5" },
            //         { src: "/img/servicios/Grabados/GrabadoEnVidrio-6.webp", alt: "Grabados en vidrio 6" },
            //     ],
            // },
        ],
    },
    {
        slug: "demarcaciones",
        titulo: "DEMARCACIONES",
        descripcion:
            "Demarcaciones de piso que ordenan, guían y brindan seguridad con imagen profesional.",
        imagenPrincipal: "/img/servicios/portadas/Demarcaciones.webp",
        claim: "Demarcaciones de piso que ordenan, guían y brindan seguridad con imagen profesional.",
        sections: [
            {
                title: "DEMARCACIONES",
                images: [
                    { src: "/img/servicios/demarcaciones/demarcaciones-1.webp", alt: "Demarcaciones 1" },
                    { src: "/img/servicios/demarcaciones/demarcaciones-2.webp", alt: "Demarcaciones 2" },
                    { src: "/img/servicios/demarcaciones/demarcaciones-3.webp", alt: "Demarcaciones 3" },
                    { src: "/img/servicios/demarcaciones/demarcaciones-4.webp", alt: "Demarcaciones 4" },
                    { src: "/img/servicios/demarcaciones/demarcaciones-5.webp", alt: "Demarcaciones 5" },
                    { src: "/img/servicios/demarcaciones/demarcaciones-6.webp", alt: "Demarcaciones 6" },
                ],
            },
        ],
    },
    {
        slug: "exhibidores-publicitarios",
        titulo: "EXHIBIDORES PUBLICITARIOS",
        descripcion:
            "Exhibidores publicitarios que destacan y comunican con imagen profesional.",
        imagenPrincipal: "/img/servicios/portadas/ExhibidoresPublicitarios.webp",
        claim: "Exhibidores publicitarios que destacan y comunican con imagen profesional.",
        sections: [
            {
                title: "Exhibidores publicitarios",
                images: [
                    { src: "/img/servicios/empavonados/empavonadosinterior-1.webp", alt: "Empavonados de interior 1" },
                    { src: "/img/servicios/empavonados/empavonadosinterior-2.webp", alt: "Empavonados de interior 2" },
                    { src: "/img/servicios/empavonados/empavonadosinterior-3.webp", alt: "Empavonados de interior 3" },
                    { src: "/img/servicios/empavonados/empavonadosinterior-4.webp", alt: "Empavonados de interior 4" },
                    { src: "/img/servicios/empavonados/empavonadosinterior-5.webp", alt: "Empavonados de interior 5" },
                    { src: "/img/servicios/empavonados/empavonadosinterior-6.webp", alt: "Empavonados de interior 6" },
                ],
            },
            {
                title: "EMPAVONADO Exterior",
                images: [
                    { src: "/img/servicios/empavonados/empavonadosexterior-1.webp", alt: "Empavonados de exterior 1" },
                    { src: "/img/servicios/empavonados/empavonadosexterior-2.webp", alt: "Empavonados de exterior 2" },
                    { src: "/img/servicios/empavonados/empavonadosexterior-3.webp", alt: "Empavonados de exterior 3" },
                    { src: "/img/servicios/empavonados/empavonadosexterior-4.webp", alt: "Empavonados de exterior 4" },
                    { src: "/img/servicios/empavonados/empavonadosexterior-5.webp", alt: "Empavonados de exterior 5" },
                    { src: "/img/servicios/empavonados/empavonadosexterior-6.webp", alt: "Empavonados de exterior 6" },
                ],
            },
        ],
    },
    {
        slug: "one-way-vision",
        titulo: "ONE WAY VISION",
        descripcion:
            "Gráficas One Way Vision que combinan privacidad, visibilidad y atractivo visual para tu negocio.",
        imagenPrincipal: "/img/servicios/portadas/OneWayVision.webp",
        claim: "Gráficas One Way Vision que combinan privacidad, visibilidad y atractivo visual para tu negocio.",
        sections: [
            {
                title: "One Way vision",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-1.webp", alt: "Empavonados de interior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-2.webp", alt: "Empavonados de interior 2" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-3.webp", alt: "Empavonados de interior 3" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-4.webp", alt: "Empavonados de interior 4" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-5.webp", alt: "Empavonados de interior 5" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-6.webp", alt: "Empavonados de interior 6" },
                ],
            },
            {
                title: "EMPAVONADO Exterior",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-1.webp", alt: "Empavonados de exterior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-2.webp", alt: "Empavonados de exterior 2" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-3.webp", alt: "Empavonados de exterior 3" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-4.webp", alt: "Empavonados de exterior 4" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-5.webp", alt: "Empavonados de exterior 5" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-6.webp", alt: "Empavonados de exterior 6" },
                ],
            },
        ],
    },
    {
        slug: "empavonados",
        titulo: "EMPAVONADOS",
        descripcion:
            "Empavonado para interiores y exteriores que aporta elegancia, privacidad y profesionalismo.",
        imagenPrincipal: "/img/servicios/portadas/Empavonados.webp",
        claim: "Empavonado para interiores y exteriores que aporta elegancia, privacidad y profesionalismo.",
        sections: [
            {
                title: "EMPAVONADO Interior",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-1.webp", alt: "Empavonados de interior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-2.webp", alt: "Empavonados de interior 2" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-3.webp", alt: "Empavonados de interior 3" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-4.webp", alt: "Empavonados de interior 4" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-5.webp", alt: "Empavonados de interior 5" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-6.webp", alt: "Empavonados de interior 6" },
                ],
            },
            {
                title: "EMPAVONADO Exterior",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-1.webp", alt: "Empavonados de exterior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-2.webp", alt: "Empavonados de exterior 2" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-3.webp", alt: "Empavonados de exterior 3" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-4.webp", alt: "Empavonados de exterior 4" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-5.webp", alt: "Empavonados de exterior 5" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-6.webp", alt: "Empavonados de exterior 6" },
                ],
            },
        ],
    },
    {
        slug: "rotulacion-vehicular",
        titulo: "ROTULACIÓN VEHICULAR",
        descripcion:
            "Rotulación para vehículos y superficies que destaca tu marca y proyecta profesionalismo.",
        imagenPrincipal: "/img/servicios/portadas/RotulacionVehicular.webp",
        claim: "Rotulación para vehículos y superficies que destaca tu marca y proyecta profesionalismo.",
        sections: [
            {
                title: "ROTULACIÓN VEHICULAR Interior",
                images: [
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularInterior-1.webp", alt: "Rotulación vehicular de interior 1" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularInterior-2.webp", alt: "Rotulación vehicular de interior 2" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularInterior-3.webp", alt: "Rotulación vehicular de interior 3" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularInterior-4.webp", alt: "Rotulación vehicular de interior 4" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularInterior-5.webp", alt: "Rotulación vehicular de interior 5" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularInterior-6.webp", alt: "Rotulación vehicular de interior 6" },
                ],
            },
            {
                title: "ROTULACIÓN VEHICULAR Exterior",
                images: [
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularExterior-1.webp", alt: "Rotulación vehicular de exterior 1" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularExterior-2.webp", alt: "Rotulación vehicular de exterior 2" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularExterior-3.webp", alt: "Rotulación vehicular de exterior 3" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularExterior-4.webp", alt: "Rotulación vehicular de exterior 4" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularExterior-5.webp", alt: "Rotulación vehicular de exterior 5" },
                    { src: "/img/servicios/RotulacionVehicular/RotulacionVehicularExterior-6.webp", alt: "Rotulación vehicular de exterior 6" },
                ],
            },
        ],
    },
    {
        slug: "letras-volumetricas",
        titulo: "LETRAS VOLUMÉTRICAS",
        descripcion:
            "Letras volumétricas para interiores y exteriores que aportan elegancia, privacidad y profesionalismo.",
        imagenPrincipal: "/img/servicios/portadas/LetrasVolumetricas.webp",
        claim: "Letras volumétricas para interiores y exteriores que aportan elegancia, privacidad y profesionalismo.",
        sections: [
            {
                title: "Letras volumetricas",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-1.webp", alt: "Empavonados de interior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-2.webp", alt: "Empavonados de interior 2" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasInterior-3.webp", alt: "Letras volumetricas de interior 3" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasInterior-4.webp", alt: "Letras volumetricas de interior 4" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasInterior-5.webp", alt: "Letras volumetricas de interior 5" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasInterior-6.webp", alt: "Letras volumetricas de interior 6" },
                ],
            },
            {
                title: "Letras volumetricas Exterior",
                images: [
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasExterior-1.webp", alt: "Letras volumetricas de exterior 1" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasExterior-2.webp", alt: "Letras volumetricas de exterior 2" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasExterior-3.webp", alt: "Letras volumetricas de exterior 3" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasExterior-4.webp", alt: "Letras volumetricas de exterior 4" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasExterior-5.webp", alt: "Letras volumetricas de exterior 5" },
                    { src: "/img/servicios/LetrasVolumetricas/LetrasVolumetricasExterior-6.webp", alt: "Letras volumetricas de exterior 6" },
                ],
            },
        ],
    },
    {
        slug: "impresion-cuatricromia",
        titulo: "IMPRESIÓN CUATRICROMÍA",
        descripcion:
            "Impresión cuatricromía para interiores y exteriores que aporta elegancia, privacidad y profesionalismo.",
        imagenPrincipal: "/img/servicios/portadas/ImpresionCuatricromia.webp",
        claim: "Impresión cuatricromía para interiores y exteriores que aporta elegancia, privacidad y profesionalismo.",
        sections: [
            {
                title: "EMPAVONADO Interior",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-1.webp", alt: "Empavonados de interior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-2.webp", alt: "Empavonados de interior 2" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-3.webp", alt: "Empavonados de interior 3" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-4.webp", alt: "Empavonados de interior 4" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-5.webp", alt: "Empavonados de interior 5" },
                    { src: "/img/servicios/Empavonados/EmpavonadosInterior-6.webp", alt: "Empavonados de interior 6" },
                ],
            },
            {
                title: "EMPAVONADO Exterior",
                images: [
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-1.webp", alt: "Empavonados de exterior 1" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-2.webp", alt: "Empavonados de exterior 2" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-3.webp", alt: "Empavonados de exterior 3" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-4.webp", alt: "Empavonados de exterior 4" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-5.webp", alt: "Empavonados de exterior 5" },
                    { src: "/img/servicios/Empavonados/EmpavonadosExterior-6.webp", alt: "Empavonados de exterior 6" },
                ],
            },
        ],
    },

    // ...los otros servicios aquí
];
