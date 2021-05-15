# example-update-aws-lambda-fast

AWS Lambda を高速にアップデートするサンプルです。

## ブログ記事

[esbuild を使って AWS Lambda (Node.js) を2秒でアップデートする](https://zenn.dev/mryhryki/articles/2021-05-16-update-aws-lambda-fast)

## 実行方法

### S3バケットの作成

デプロイ＆API用に適当な名前の S3 バケットを作成してください。

作成後 `serverless.yml` の [この部分](https://github.com/mryhryki/example-update-aws-lambda-fast/blob/5617769fdc6195380a8c0dce46e27ee711ca83a3/serverless.yml#L5) を作成したバケット名に変更してください。

### Serverless Framework を使ったデプロイ

※初回は必ずこちらを実行してください。必要な AWS リソースが作成されます。

```bash
$ time npm run aws:deploy
```

### Serverless Framework を使った関数のみのアップデート

```bash
$ time npm run deploy:byServerless
```

### 自前処理での Lambda アップデート

```bash
$ time npm run deploy
```

### AWS環境の削除

```bash
$ npm run aws:remove
```
