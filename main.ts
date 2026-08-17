// Deno Deploy entrypoint: phục vụ thư mục public/ như một website tĩnh.
// Đầu tư nhà đất - site vệ tinh (dofollow, HTML thô do mình viết).
import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req) => serveDir(req, { fsRoot: "public", quiet: true }));
