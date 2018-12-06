# qshell-bin

> 将七牛命令行工具作为 Node.js 依赖使用

## 安装

```sh
yarn add qshell-bin -D
```

## 使用

在`package.json`中增加以下内容：

```json
"scripts": {
  "deploy": "qshell qupload .qshell.json"
}
```

创建`.qshell.json`文件，并填写配置：

```json
{
  "access_key": "",
  "secret_key": "",
  "src_dir": "",
  "bucket": "",
  "key_prefix": "",
  "rescan_local": true,
  "skip_suffixes": ".html"
}
```

在项目编译完成后，执行以下命令上传文件到七牛 CDN：

```sh
yarn deploy
```

## 版本

qshell v1.8.5
