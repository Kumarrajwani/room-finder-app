import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { addUser } from "./src/Controllers/addUser.ts";

const router = new Router();
const app = new Application();
const PORT = 3000;

router.post("/addUser", addUser);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
