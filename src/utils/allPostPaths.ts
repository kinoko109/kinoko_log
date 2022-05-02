import * as fs from "fs";
import path from "path";
import { TargetPostData } from "../types/shared";

export const POSTS_PATH = path.join(process.cwd(), "src/posts");

/**
 * @desc posts直下のディレクトリ名から記事ファイル名までを取得する関数
 * @return TargetPostData[]
 * 例) [{
 *        year: "2021",
 *        month: "03",
 *        slug: "hello-world",
 *     }]
 */
export const allPostPaths = () => {
  // 記事ファイルのディレクトリ用の配列を初期化
  const targetPostsData: TargetPostData[] = [];

  const yearDirectories = fs.readdirSync(POSTS_PATH, { withFileTypes: true });

  yearDirectories.forEach((yearDirectory) => {
    const { name: year } = yearDirectory;
    // TODO: エラー時の処理
    if (yearDirectory.isDirectory()) {
      const monthDirectories = fs.readdirSync(`${POSTS_PATH}/${year}`, {
        withFileTypes: true,
      });

      monthDirectories.forEach((monthDirectory) => {
        const { name: month } = monthDirectory;
        // TODO: エラー時の処理
        if (monthDirectory.isDirectory()) {
          const mdxFiles = fs.readdirSync(`${POSTS_PATH}/${year}/${month}`);

          mdxFiles.forEach((mdxFile) => {
            targetPostsData.push({
              year,
              month,
              slug: mdxFile.replace(/\.mdx?$/, ""),
            });
          });
        }
      });
    }
  });

  return targetPostsData;
};
