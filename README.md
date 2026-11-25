# super-fat-fish

dsh-super-fat-fish 的 npm monorepo。

## 包

| 包名 | 目录 | 说明 |
| --- | --- | --- |
| dsh-super-fat-fish-frontend | packages/frontend | 前端 |
| dsh-super-fat-fish-daemon | packages/daemon | 常驻守护进程 |
| dsh-super-fat-fish-adapter | packages/adapter | 适配层 |

## 开发

要求 Node.js >= 22。

```bash
npm install
npm run typecheck
npm run build
npm run clean
```

构建产物输出到各包的 `dist/`。

## CI

`.github/workflows/ci.yml` 在推送到 `main` 和 pull request 时运行 `typecheck` 与 `build`（Node 22 / 24）。
