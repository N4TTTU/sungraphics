// src/assets/data/proyectos.ts

export type Proyecto = {
    id: string
    slug: string        // URL amigable del proyecto (se usa para generar la página)
    title: string
    image: string
    description: string
    client?: string
    category?: string
    year?: number
}

export const proyectos = [
    {
        id: "aconcagua",
        slug: "aconcagua",
        title: "Aconcagua",
        image: "/img/proyectos/Aconcagua.png",
        description:
            "Instalación de letras router en acceso principal. Renovación estética y refuerzo de identidad visual.",
        client: "Aconcagua",
        category: "Señalética",
        year: 2024,
    },
    {
        id: "hotel-santa-barbara",
        slug: "hotel-santa-barbara",
        title: "Hotel Santa Bárbara",
        image: "/img/proyectos/HotelSantaBarbara.png",
        description:
            "Letrero con grabado en madera + sistema de señalética interior. Coherencia estética en todo el hotel.",
        client: "Hotel Santa Bárbara",
        category: "Interior",
        year: 2023,
    },
    {
        id: "pingueral",
        slug: "pingueral",
        title: "Pingueral",
        image: "/img/proyectos/Pingueral.png",
        description:
            "Letras router y actualización de imagen institucional con una estética moderna y sobria.",
        client: "Pingueral",
        category: "Exterior",
        year: 2023,
    },
    {
        id: "universidad-del-mar",
        slug: "universidad-del-mar",
        title: "Universidad del Mar",
        image: "/img/proyectos/UniversidadDelMar.png",
        description:
            "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
        client: "Universidad del Mar",
        category: "Educación",
        year: 2024,
    },
    {
        id: "inmoviliaria-dhelos",
        slug: "inmoviliaria-dhelos",
        title: "Inmobiliaria Dhelos",
        image: "/img/proyectos/InmobiliariaDhelos.webp",
        description:
            "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
        client: "Inmobiliaria Dhelos",
        category: "Educación",
        year: 2024,
    },
    {
        id: "metro-ferrovial",
        slug: "metro-ferrovial",
        title: "Metro Ferrovial",
        image: "/img/proyectos/MetroFerrovial.webp",
        description:
            "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
        client: "Metro Ferrovial",
        category: "Educación",
        year: 2024,
    },
    {
        id: "sala-capacitacion-cocacola",
        slug: "sala-capacitacion-cocacola",
        title: "Sala de Capacitación Coca-Cola",
        image: "/img/proyectos/SalaCapacitacionCocaCola.webp",
        description:
            "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
        client: "Coca-Cola",
        category: "Educación",
        year: 2024,
    },
    {
        id: "municipalidad-vina-del-mar",
        slug: "municipalidad-vina-del-mar",
        title: "Municipalidad de Viña del Mar",
        image: "/img/proyectos/MunicipalidadVinaDelMar.webp",
        description:
            "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
        client: "Municipalidad de Viña del Mar",
        category: "Educación",
        year: 2024,
    },
    {
        id: "ansaldo",
        slug: "ansaldo",
        title: "Ansaldo",
        image: "/img/proyectos/Ansaldo.webp",
        description:
            "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
        client: "Ansaldo",
        category: "Educación",
        year: 2024,
    },
    // {
    //     id: "",
    //     slug: "",
    //     title: "",
    //     image: "/img/proyectos/",
    //     description:
    //         "Empavonado y señalética integral para orientar visitantes y unificar la identidad del campus.",
    //     client: "Metro Ferrovial",
    //     category: "Educación",
    //     year: 2024,
    // },
]
