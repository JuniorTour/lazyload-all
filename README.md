# [lazyload-all](https://github.com/JuniorTour/lazyload-all)

> [《前端工程体验优化实战》](https://juejin.cn/book/7306163555449962533) 第15节配套项目

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JuniorTour/lazyload-all/blob/master/LICENSE)
[![CI](https://github.com/JuniorTour/lazyload-all/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/JuniorTour/lazyload-all/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/lazyload-all)
[![NPM downloads](http://img.shields.io/npm/dm/lazyload-all.svg?style=flat-square)](http://www.npmtrends.com/lazyload-all)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/JuniorTour/lazyload-all.svg)](http://isitmaintained.com/project/JuniorTour/lazyload-all 'Percentage of issues still open')

## :star: 特性

- 懒加载 `<img>`、`<iframe>`、`<video>`、`<picture>`、CSS `background-image`等各类元素和CSS属性。
- 体积极小：源码仅**4.7 KB**，GZip压缩后**2 KB**
- 浏览器兼容性好：支持`IE11`
- 支持多环境、多种模块化方案运行：Node.js `CJS`模块，浏览器平台`UMD`模块、`ES Module`

## :rocket: 使用指南

### 1. 安装

通过NPM下载安装代码

```bash
$ npm install --save lazyload-all
```

### 2. 运行

#### 1. Node.js 环境

```js
const { initLazyloadAll } = require('lazyload-all');

const lazyLoadeAllInstance = initLazyloadAll({
  // mode: MODES.scroll,
  // mode: MODES.intersectionObserver,
  once: true,
});
```

#### 1. Webpack 环境

```js
import { initLazyloadAll } from 'lazyload-all';

const lazyLoadeAllInstance = initLazyloadAll({
  // mode: MODES.scroll,
  // mode: MODES.intersectionObserver,
  once: true,
});
```

#### 3. 浏览器环境

```html
<script src="node_modules/lazyload-all/dist/index.aio.js"></script>
<script>
  const lazyLoadeAllInstance = window.LazyLoadAll.initLazyloadAll({
    // mode: MODES.scroll,
    // mode: MODES.intersectionObserver,
    once: true,
  });
</script>
```

### 3. 初始化参数

| 参数属性名 | 简介                                                                     | 默认值                   | 可选值                                          |
| ---------- | ------------------------------------------------------------------------ | ------------------------ | ----------------------------------------------- |
| `mode`     | 懒加载使用的API，支持基于`scroll 事件`和`IntersectionObserver API` 2种。 | `'intersectionObserver'` | 1. `'intersectionObserver'` <br/> 2. `'scroll'` |
| `once`     | 触发加载后，是否不再对目标元素执行监听逻辑。                             | `true`                   | 1. `true` <br/> 2. `false`                      |

### 4. 实例方法

#### 1. `update()`

用于懒加载元素增加后调用，从而监视新出现的懒加载目标元素。

```js
const lazyLoadeAllInstance = initLazyloadAll({
  // mode: MODES.scroll,
  // mode: MODES.intersectionObserver,
  once: true,
});

// 懒加载元素增减后，更新监视目标
lazyLoadeAllInstance.update();
```

## 本地开发

#### 1. 运行开发环境

```bash
$ npm run dev
```

打开练习场地：`/lazyload-all/demo/demo-amd.html`

#### 2. 打包生产代码

```bash
$ npm run build
```

#### 3. 运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

#### 4. 发布新版本

修改 package.json 中的版本号，将新版本发布到NPM

```bash
$ npm publish
```

## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
```
