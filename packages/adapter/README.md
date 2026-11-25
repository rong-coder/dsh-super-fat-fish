# dsh-super-fat-fish-adapter

[dsh-super-fat-fish](../..) 的远端执行适配插件，以 DSH bundle 形式发布。

## 安装

```bash
dsh plugin --profile <name> add dsh-super-fat-fish-adapter
```

`cordis.patch.yml` 向 profile 插入插件行 `super-fat-fish-adapter`。

## 兼容性

- DSH `>=0.2.0 <0.3.0`
- Node.js `^24.22.3 || >=26.13.1`

## 开发

```bash
npm run build
npm run typecheck
```
