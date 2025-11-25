const path = require("path");
const fs = require("fs");

const targetDir = path.resolve(__dirname, "assets");
const targetFilePath = path.resolve(targetDir, "hugesizefile.txt");

// 确保目录存在
fs.mkdirSync(targetDir, { recursive: true });

// 创建一个 1MB 的 Buffer，填充 "1"
const chunkSize = 1024 * 1024; // 1MB
const chunk = Buffer.alloc(chunkSize, "1");

// 写入 1GB 文件
const totalSize = 1024 * 4; // 1024 MB = 1GB
const fd = fs.openSync(targetFilePath, "w");

for (let i = 0; i < totalSize; i++) {
  fs.writeSync(fd, chunk);
}

fs.closeSync(fd);
console.log("1GB 文件已生成:", targetFilePath);
