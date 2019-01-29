# qshell-bin

> 简化 qshell 安装过程

## 作为命令行工具

### 安装

```sh
npm i -g qshell-bin
```

### 使用

[官方文档](https://github.com/qiniu/qshell)

## 作为项目依赖

### 安装

```sh
npm i -D qshell-bin
```

### 使用

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
npm run deploy
```

## 版本

qshell v1.8.5
