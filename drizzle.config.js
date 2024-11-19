import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/configs/schema.js",
 dbCredentials :{
    url : 'postgresql://neondb_owner:1SgM3sfzxwWj@ep-hidden-moon-a5hnxif8.us-east-2.aws.neon.tech/neondb?sslmode=require'
 }
});
