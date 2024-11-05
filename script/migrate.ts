//next project 외부에 존재. nextjs는 모른다ㅏ.
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { text, pgTable } from "drizzle-orm/pg-core";
config({
	path: ".env.local",
});

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);
const main = async () => {
	try {
		await migrate(db, {
			migrationsFolder: "drizzle",
		});
	} catch (error) {
		console.error("error during migration", error);
		process.exit(1);
	}
};
main();
