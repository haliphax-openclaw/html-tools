import { readFileSync, writeFileSync } from "fs";
import markdownit from "markdown-it";

const md = markdownit({ html: true });
const content = readFileSync("README.md", { encoding: "utf-8" });
const html = /*html*/`
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>HTML Tools</title>
</head>
<body>
${md.render(content)}
</body>
</html>`;

writeFileSync("index.html", html, { encoding: "utf-8" });
