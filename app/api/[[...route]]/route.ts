import { Hono } from "hono";
import { handle } from "hono/vercel";

import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

//app = hono. hono가 Overwrite를 한다.
const app = new Hono().basePath("/api");

const routes = app.route("/accounts", accounts);
export const GET = handle(app);
//Get =()=>{ return NextResponse} 이런 코드가 필요없게됨.
export const POST = handle(app);

export type AppType = typeof routes;