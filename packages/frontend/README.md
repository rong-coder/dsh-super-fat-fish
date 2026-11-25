# dsh-super-fat-fish-frontend

[dsh-super-fat-fish](../..) 的前端插件，以 DSH bundle 形式发布。

当前包含 Host 侧插件骨架和最小浏览器半侧：`package.json` 声明 `dsh.client`，`./client` 指向按 DSH 客户端模块 lazy-CJS 工厂格式编写的 `lib/client.js`。正式 UI 与构建流程后续补齐。

## 安装

```bash
dsh plugin --profile <name> add dsh-super-fat-fish-frontend
```

`cordis.patch.yml` 向 profile 插入插件行 `super-fat-fish-frontend`。

## 兼容性

- DSH `>=0.2.0 <0.3.0`
- Node.js `^24.22.3 || >=26.13.1`

## 开发

```bash
npm run build
npm run typecheck
```
