# qshell-bin

> 一键安装 qshell

## 作为命令行工具

### 全局

**安装**

```sh
npm i -g qshell-bin
```

**使用**

[官方文档](https://github.com/qiniu/qshell)

### 本地

**安装**

```sh
npm i -D qshell-bin
```

**使用**

在`package.json`中增加以下内容：

```json
"scripts": {
  "deploy": "qshell account $ACCESS_KEY $SECRET_KEY user_qshell && qshell qupload .qsh
 ell.json"
}
```

创建`.qshell.json`文件，并填写配置：

```json
{
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

## 作为项目依赖

**安装**

```sh
npm i -D qshell-bin
```

**使用**

在代码中引入：

```js
const qshell = require('qshell-bin')

qshell(['--version'])
```
