import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import authors from "./authors";
import books from "./books";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

//app = hono. hono가 Overwrite를 한다.
const app = new Hono().basePath("/api");
app.onError((err, c) => {
	if (err instanceof HTTPException) {
		return err.getResponse();
	}
});
const routes = app.route("/accounts", accounts);
export const GET = handle(app);
//Get =()=>{ return NextResponse} 이런 코드가 필요없게됨.
export const POST = handle(app);

export type AppType = typeof routes;