// commanderモジュールをprogramとしてインポートする
const program = require("commander");
const fs = require("fs");

// コマンドライン引数をcommanderでパースする
program.parse(process.argv);
const filePath = program.args[0];

// ファイルを非同期で読み込む
fs.readFile(filePath, (err, file) => {
  console.log(file);
});