# dsh-super-fat-fish

DeepSeek Harness (DSH) 插件 monorepo，包含远端 daemon、执行适配层与前端三个包。

## 包

| 包名 | 目录 | 说明 |
| --- | --- | --- |
| dsh-super-fat-fish-daemon | packages/daemon | 常驻 daemon 插件 |
| dsh-super-fat-fish-adapter | packages/adapter | 远端执行适配插件 |
| dsh-super-fat-fish-frontend | packages/frontend | 前端插件 |

每个包都是可安装的 DSH bundle：`package.json` 声明 `dsh.bundle.patch`，`cordis.patch.yml` 向 profile 插入一个插件行。

## 开发

要求 Node.js 24.22.3+ 或 26.13.1+（与 DSH 一致）。

```bash
npm install
npm run typecheck
npm run build
npm test
npm run clean
```

构建产物输出到各包的 `lib/`。

## 安装到 DSH

发布到 npm 后：

```bash
dsh plugin --profile <name> add dsh-super-fat-fish-daemon
dsh plugin --profile <name> add dsh-super-fat-fish-adapter
dsh plugin --profile <name> add dsh-super-fat-fish-frontend
```

## 文档

`docs/dsh-docs/` 是 DeepSeek Harness 开发文档的本地快照，仅供本地参考；它被 gitignore，不进入仓库。
