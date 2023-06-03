import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

const useRoutes = async (app: any) => {
  const files = await fs.promises.readdir(currentDir);
  const fileNames = files.map((file) => file.replace(/\.[^.]+$/, ""));
  for (const file of fileNames) {
    try {
      const router = await import(`./${file}`);
      if (file === "index") continue;
      app.use(router.default.routes());
      app.use(router.default.allowedMethods());
    } catch (err) {
      console.log(err);
    }
  }
};

export default useRoutes;
