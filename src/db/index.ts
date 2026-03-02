// import { neon } from "@neondatabase/serverless";
// import { env } from "@/env.js";

// export const sql = neon(env.DATABASE_URL);

import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/env";

export const db = drizzle(env.DATABASE_URL);
