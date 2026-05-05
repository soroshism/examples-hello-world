import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
    return serveFile(req, "./deno_deploy.ts");
});