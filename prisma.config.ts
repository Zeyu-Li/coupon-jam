import { defineConfig } from "prisma/config";

// Prisma 7 no longer reads .env by itself; load it for local CLI use when present.
try {
  process.loadEnvFile();
} catch {
  // No .env file: rely on the environment (e.g. Vercel).
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: { url: process.env.DATABASE_URL },
});
