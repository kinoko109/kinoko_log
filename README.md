# kinoko_log 

## Setup

```
yarn install
```

## Usage

```
// 開発
yarn dev

// 本番環境で使用するアプリケーションを構築
yarn build

// 本番サーバーを起動
yarn start

// 型チェック
yarn type-check
```

## ブランチ戦略
### 記事について
`main` から `article/hogehoge` を切り `main` に戻す

### 機能修正追加などについて
`main` から `feature/hogehoge` を切り `main` に戻す

## 記事公開方法

1. 拡張子を`.mdx`でファイルを用意して、マークダウン記法で執筆する。  
   (ファイル名がURLのパスに設定される。)
1. 執筆したファイルを`src/posts`直下に格納する。
1. リロードで自動的にページが生成される。

## 記事を書くときのルール
### 記事情報設定

- .mdxファイルの先頭に下記の形式で記述する。  
  順番不同。
  
```
---
title: Hello World
description: hello-worldの記事です
tag: Hello, World
ogp_image: https://placehold.jp/1200x630.png
created: 2020/11/20
---
```
- title  
  titleタグ、記事のh1、記事一覧の記事タイトルに設定。  

- description  
  metaタグのdescription、記事一覧の記事説明に設定。  

- tag  
  記事詳細のページ上部に表示するタグ。
  「,」区切りで記述。

- ogp_image  
  OGP画像に設定する画像のパス。

- created  
  記事公開日の設定。（記事一覧のソートと記事詳細画面で使用）
  
### 画像表示
- 元画像の横幅が700px以上の場合
```
<ImageComponent
  src="画像のURL"
  width={画像の横幅を書く}
  height={画像の縦幅を書く}
  alt="テキスト"
  title="テキスト"
/>
```

- 元画像の横幅が700px未満の場合
```
<ImageComponent
  src="画像のURL"
  width={画像の横幅を書く}
  height={画像の縦幅を書く}
  alt="テキスト"
  title="テキスト"
  layout={"intrinsic"}
/>
```

### 記事にツイート、Youtubeを載せたい場合
- 下記のように.mdxファイルでコンポーネントを読み込む。  
  propsに対象のidを設定する。
  
```
// ツイート表示コンポーネント
<TwitterTweet id={"841418541026877441"} />

// Youtube表示コンポーネント
<YouTubeComponent id={"tPFdteXQvgs"} />
```
