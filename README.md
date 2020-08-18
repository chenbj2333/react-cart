## 本项目是对 react hooks 的练习

> 参考[React Hook + TS 购物车实战（性能优化、闭包陷阱、自定义 hook）](https://juejin.im/post/6844904079181905927)

## 安装步骤

- 创建 react 项目 `yarn create react-app react-cart --template typescript`
- 安装 antd `yarn add antd`
- 为了修改 react 的默认配置安装 craco `yarn add @craco/craco`
- 修改 package.json 中的 scripts 命令

```
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

- 创建 craco.config.js 用于修改默认配置
- 引用 less，并修改 craco.config.js 中的配置 `yarn add craco-less`
- 在 app.less 中引用 antd 样式

## 使用

- yarn start
