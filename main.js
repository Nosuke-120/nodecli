// commanderモジュールをprogramとしてインポートする
const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする")

// コマンドライン引数をcommanderでパースする
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// ファイルを非同期で読み込む
fs.readFile(filePath, {encoding: "utf-8"}, (err, file) => {
  if(err) {
    console.log(err.message);
    process.exit(1);
    return;
  }
  const html = md2html(file, cliOptions);
  console.log(html);
});