const fs = require("fs");
const chokidar = require("chokidar");

const docPath = "./docs";

const mdxTemplate = (htmlPath) =>
  `import { Frame } from '/src/components/Frame'\n<Frame src="${htmlPath}" />`;

chokidar.watch(docPath).on("add", (path) => {
  // addDir docs/tutorial-basics
  // add docs/tutorial-basics/开发中的代理设置.html
  const filePath = path.split(".");
  if (filePath.pop() === "html") {
    fs.writeFile(
      [...filePath, "mdx"].join("."),
      mdxTemplate(`./${path.split("/").pop()}`),
      (err) => {
        if (err) {
          console.err(err);
          return;
        }
      }
    );
  }
});
