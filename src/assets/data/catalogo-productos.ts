// src/assets/data/catalogo-productos.ts
import type { CategoriaSlug } from "./catalogo-categorias";

export interface VarianteProducto {
    id: string;          // ID interno opcional
    codigo: string;      // código que NO se muestra pero viaja en la cotización
    etiqueta?: string;   // "Tamaño 16 cm", etc.
    tamanoCm?: number;
    color?: string;
    material?: string;
}

export interface ColorProducto {
    id: string;
    nombre: string;
    hex: string;
}

export interface ProductoCatalogo {
    slug: string;
    nombre: string;
    categoria: CategoriaSlug;
    imagen: string;          // desde /public
    descripcionCorta?: string;
    variantes: VarianteProducto[];  // tamaños / combinaciones
    colores?: ColorProducto[];      // NUEVO (opcional)
}

export const productosCatalogo: ProductoCatalogo[] = [
    // LLAMA CON SELLO
    {
        slug: "llama-con-sello",
        nombre: "Llama con sello",
        categoria: "trofeos-plasticos",
        imagen: "/catalogo/trofeos/Llama-con-sello.png",
        descripcionCorta: "Trofeo plástico con base de mármol sintético.",
        variantes: [
            { id: "llama-12", codigo: "591095168", etiqueta: "12 cm", tamanoCm: 12 },
            { id: "llama-16", codigo: "591095169", etiqueta: "16 cm", tamanoCm: 16 },
            { id: "llama-18", codigo: "591095170", etiqueta: "18 cm", tamanoCm: 18 },
        ],
        colores: [
            { id: "oro", nombre: "Oro", hex: "#FFD700" },
            { id: "plata", nombre: "Plata", hex: "#C1C1C1" },
        ],
    },

    // VICTORIA
    {
        slug: "victoria",
        nombre: "Victoria",
        categoria: "trofeos-plasticos",
        imagen: "/catalogo/trofeos/Victoria.png",
        descripcionCorta: "Trofeo plástico con base de mármol sintético.",
        variantes: [
            { id: "victoria-13", codigo: "591095110", etiqueta: "13 cm", tamanoCm: 13 },
            { id: "victoria-16", codigo: "591095115", etiqueta: "16 cm", tamanoCm: 16 },
            { id: "victoria-18", codigo: "591095120", etiqueta: "18 cm", tamanoCm: 18 },
        ],
    },

    // Abanico
    {
        slug: "abanico",
        nombre: "Abanico",
        categoria: "trofeos-plasticos",
        imagen: "/catalogo/trofeos/Abanico.png",
        descripcionCorta: "Trofeo plástico con base de mármol sintético.",
        variantes: [
            { id: "abanico-12", codigo: "591095171", etiqueta: "13 cm", tamanoCm: 13 },
            { id: "abanico-16", codigo: "591095172", etiqueta: "16 cm", tamanoCm: 16 },
            { id: "abanico-18", codigo: "591095173", etiqueta: "18 cm", tamanoCm: 18 },
        ],
        colores: [
            { id: "oro", nombre: "Oro", hex: "#FFD700" },
            { id: "plata", nombre: "Plata", hex: "#C1C1C1" },
        ],
    },

    // Estrella curva
    {
        slug: "estrella-curva",
        nombre: "Estrella curva",
        categoria: "trofeos-plasticos",
        imagen: "/catalogo/trofeos/Estrella-curva.png",
        descripcionCorta: "Trofeo plástico con base de mármol sintético.",
        variantes: [
            { id: "estrella-13", codigo: "591095168", etiqueta: "13 cm", tamanoCm: 13 },
            { id: "estrella-16", codigo: "591095169", etiqueta: "16 cm", tamanoCm: 16 },
            { id: "estrella-18", codigo: "591095170", etiqueta: "18 cm", tamanoCm: 18 },
        ],
        colores: [
            { id: "oro", nombre: "Oro", hex: "#FFD700" },
            { id: "plata", nombre: "Plata", hex: "#C1C1C1" },
        ],
    },

    // Portasello
    {
        slug: "portasello",
        nombre: "Portasello",
        categoria: "trofeos-plasticos",
        imagen: "/catalogo/trofeos/Portasello.png",
        descripcionCorta: "Trofeo plástico con base de mármol sintético.",
        variantes: [
            { id: "portasello-14", codigo: "591094144", etiqueta: "14 cm", tamanoCm: 14 },
            { id: "portasello-18", codigo: "591095030", etiqueta: "18 cm", tamanoCm: 18 },
            { id: "portasello-19", codigo: "591095004", etiqueta: "19 cm", tamanoCm: 19 },
        ],
        colores: [
            { id: "oro", nombre: "Oro", hex: "#FFD700" },
            { id: "plata", nombre: "Plata", hex: "#C1C1C1" },
        ],
    },



];
