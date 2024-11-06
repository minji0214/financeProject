import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { db } from "@/db/drizzle";
import { accounts, insertAccountSchema } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";

const app = new Hono()
	.get("/", clerkMiddleware(), async (c) => {
		const auth = getAuth(c);
		if (!auth?.userId) {
			return c.json({ error: "Not authenticated" });
			// throw new HTTPException(401, {
			// 	res: c.json({ error: "Not authenticated" }, 401),
			// });
		}
		const data = await db
			.select({
				id: accounts.id,
				name: accounts.name,
			})
			.from(accounts)
			.where(eq(accounts.userId, auth.userId));
		return c.json({ data });
	})
	.post(
		"/",
		clerkMiddleware(),
		zValidator("json", insertAccountSchema),
		async (c) => {
			const auth = getAuth(c);
			if (!auth?.userId) {
				return c.json({ error: "Not authenticated" }, 401);
			}
			return c.json({});
		}
	);
export default app;
