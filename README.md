# Bootstrap Tree shaking issue

This is an experimental repo to show and fix tree shaking issues on Bootstrap.
This repository contains two folders with the same project, a simple page
with an `Alert` and some `Tooltip`s:

- `tree-shake-issue` that shows the current behavior (tree shake is not working)
- `fixed` that contains a patched version of Bootstrap to make tree shake working

## Setup

Go to `tree-shake-issue` or `fixed` folder, then run

```sh
npm i
```

and build the whole app using

```sh
npm run build
```

Then you can serve the app on [http://localhost:8080](http://localhost:8080/) 
using

```sh
npm run serve
```

## Results

Inside `dist` folder for each project you can see the js bundle. As you can
see with the command

```sh
ls -alh dist/js
```

you'll get different sizes for the final bundle.

👎 Bundle size *without* tree shaking (~99K):

```sh
➜  tree-shake-issue git:(main) ✗ ls -alh dist/js
total 200
-rw-r--r--  1 andreastagi  staff    99K 27 Dec 15:39 demo.bundle.min.js
```

👍 Bundle size *with* tree shaking (~55K):

```sh
➜  fixed git:(main) ✗ ls -alh dist/js
total 112
-rw-r--r--  1 andreastagi  staff    55K 27 Dec 16:42 demo.bundle.min.js
```

