import "dotenv/config"
import { defineConfig } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx data/seed.ts",
  },
  datasource: {
    url: process.env.DIRECT_URL,
  },
})
