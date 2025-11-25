"use client";
import { ChangeEvent } from "react";
import SparkMD5 from "spark-md5";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDataType = (data: any) =>
  Object.prototype.toString.call(data).slice(8, -1);

export default function UploadPage() {
  const preHandleFile = (
    file: File,
    sizePerChunk: number = 10 * 1024 * 1024
  ) => {
    return new Promise((resolve) => {
      const spark = new SparkMD5.ArrayBuffer();
      const fileReader = new FileReader();
      const chunkCount = Math.ceil(file.size / sizePerChunk);
      const chunks: Blob[] = [];
      let i = 0;
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (getDataType(result) !== "ArrayBuffer") return;
        spark.append(result as ArrayBuffer);
        if (i < chunkCount) {
          pushSlice();
        } else {
          const hash = spark.end();
          resolve({ hash, chunks });
        }
      };

      const pushSlice = () => {
        const start = i++ * sizePerChunk;
        const slice = file.slice(start, start + sizePerChunk);
        fileReader.readAsArrayBuffer(slice);
        chunks.push(slice);
      };
      pushSlice();
    });
  };

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.time("preHandleFile");
    const res = await preHandleFile(file);
    console.timeEnd("preHandleFile");
    console.log(res);
  };
  return (
    <div>
      <h1>UploadPage</h1>
      <input type="file" name="" id="" onChange={onChangeHandler} />
    </div>
  );
}
