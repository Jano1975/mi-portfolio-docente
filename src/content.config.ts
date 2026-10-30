import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod"; // <-- ¡La importación correcta para las últimas versiones de Astro!

const proyectosCollection = defineCollection({
  // Usamos un patrón universal simplificado para que no falle según el sistema operativo
  loader: glob({
    pattern: "*.md",
    base: "./src/content/proyectos",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    nivelEducativo: z.string(),
    metodologias: z.array(z.string()),
    tagsTecnicos: z.array(z.string()),
  }),
});

export const collections = {
  proyectos: proyectosCollection,
};
