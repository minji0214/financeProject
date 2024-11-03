import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import authors from "./authors";
import books from "./books";

export const runtime = "edge";

//app = hono. hono가 Overwrite를 한다.
const app = new Hono().basePath("/api");
app.route("/authors", authors);
app.route("/books", books);
// app
// 	.get("/hello", clerkMiddleware(), (c) => {
// 		const auth = getAuth(c);
// 		if (!auth?.userId) {
// 			return c.json({
// 				error: "Unauthorized",
// 			});
// 		}
// 		//c : context
// 		return c.json({
// 			message: "Hello Next.js!",
// 		});
// 	})
// 	.get("/hello/:test", (c) => {
// 		return c.json({
// 			message: "hello world",
// 		});
// 	})
// 	.post(
// 		"/create/:postId",
// 		zValidator(
// 			"json",
// 			z.object({
// 				name: z.string(),
// 				userId: z.number(),
// 			})
// 		),
// 		zValidator(
// 			"param",
// 			z.object({
// 				postId: z.number(),
// 			})
// 		),
// 		(c) => {
// 			const { name, userId } = c.req.valid("json");
// 			const { postId } = c.req.valid("param");
// 			return c.json({});
// 		}
// 	);

export const GET = handle(app);
//Get =()=>{ return NextResponse} 이런 코드가 필요없게됨.
export const POST = handle(app);
