/**
 * トップページ（http://localhost:3000）のレンダリングテスト
 * $ node rendering.test.js
 *
 * 下層ページは、URL引数にパスを渡す
 * URL="http://localhost:3000/mydir/example.html" node rendering.test.js
 *
 * レンダリング結果は、_rendering_test/ディレクトリ内に出力される
 *
 * 絶賛改良中！
 */


const puppeteer = require('puppeteer');
const fs = require("fs");

const URL = process.env.URL || 'http://localhost:3000';
const PATH = new RegExp('http://localhost:3000/');
const OUTPUT_DIR = '_rendering_test';
const DATA = URL.replace(PATH, '').replace(/\//g, '-');
const FILE_NAME = (DATA === 'http:--localhost:3000')? 'top.html' : DATA;

const color = col => str => `\u001b[${col}m${str}\u001b[0m`;
const colors = {green: color('36')};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  const text = await page.content();

  fs.mkdir(OUTPUT_DIR, function () {
    fs.writeFile(`${OUTPUT_DIR}/${FILE_NAME}`, text, function (err) {
      const message = (err === null)? `Rendering done! Let's check the "_rendering_test" directory!` : err;
      console.log(`${colors.green(message)}`);
    });
  });

  await browser.close();
})();