# AGENTS.js — JS-DSA

Compact guidance for OpenCode sessions. Every line below answers "Would an agent likely miss this without help?"

## Commands

| Action | Command |
|---|---|
| Run all tests (UI) | `pnpm test` |
| Run tests headless | `vitest run` |
| Run a single test file | `vitest run src/.../file.test.ts` |
| Type-check | `pnpm typecheck` |
| Lint | `pnpm lint` |
| Format | `pnpm format` |
| Start dev server | `pnpm start` (nodemon watches `src/index.js` for `.js, .mjs, .ts`) |
| Run tsx on a file | `pnpm tsx ./path/to/file` (resolves to `pnpm exec tsx watch`) |
| Run a TS script per readme | `pnpm tsx ./path/to/ts-script/file` |

## Import conventions

- **Bare specifiers** like `from 'utils/string'`, `from 'ds/deque'`, `from 'numstree'` rely on tsconfig `paths: "*": ["./src/*"]`, **not** relative paths. Do not search for `src/utils/string.ts` when you see `from 'utils/string'`.
- Mix of relative (`./`) and bare specifiers both used. Check existing imports in the same directory.

## Directory structure

- `src/arrays/` — array algorithm implementations
- `src/search/` — binary search
- `src/sliding_window/` — sliding window algorithms
- `src/leetcode/` — LeetCode solutions grouped by number range (e.g., `1400-1499/`, `native-js/`, `2400-2499/`)
- `src/ds/` — data structures (binary-heap, deque, doubly-linked-list, graph, heap, LRUCache, priority-queue, queue, set, stack, trie). Importable as `from 'ds/<name>'`.
- `src/fp/` — functional programming (curry, compose)
- `src/typescript/` — TypeScript-specific demos
- `src/explore-es-features/` — ES feature explorations
- `src/codekata/` — code katas

## Testing quirks

- Test files use `vitest` with `globals: true` (from `vitest.config.ts`). Files end in `.test.ts`.
- Some test files import from bare specifiers (`ds/deque`, `utils/string`) — same path-resolution rules apply.
- No external services required; all tests are pure unit tests.

## Lint / Typecheck / Test order

Recommended order (matches `package.json` scripts): `format -> lint -> typecheck -> test`. Running only `pnpm test` skips lint/typecheck.

## Biome notes

- Some recommended rules disabled: `noNonNullAssertion`, `noParameterAssign`, `useTemplate`, `useImportType` (all `"off"` in `biome.json`).
- Formatter uses tab indent, LF line ending, lineWidth 100, single quotes for attributes.

## Git / Gitignore

- `out/` and `coverage/` are gitignored (build artifacts).
- `.gitignore` also ignores `node_modules`, `.zed/*`, `*.DS_Store`.
