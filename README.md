# Bootstrap Tree shaking issue



Size *without* tree shaking:

```sh
➜  tree-shake-issue git:(main) ✗ ls -alh dist/js
total 200
-rw-r--r--  1 andreastagi  staff    99K 27 Dec 15:39 demo.bundle.min.js
```

Size *with* tree shaking:

```sh
➜  fixed git:(main) ✗ ls -alh dist/js
total 112
-rw-r--r--  1 andreastagi  staff    55K 27 Dec 16:42 demo.bundle.min.js
```

