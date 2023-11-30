# Typechecked JavaScript demo

> A barebones demonstration of using the [TypeScript](https://www.typescriptlang.org/) compiler to typecheck JavaScript.

## Key files

#### [`src/index.js`](./src/index.js)
An example JavaScript source file that gets typechecked.

It contains a type error, which is [reported by the TypeScript compiler](https://github.com/guardian/typechecked-javascript-demo/actions/runs/7046933698/job/19179718998#step:5:9).

> [!NOTE]
> It is still valid JavaScript, and runs without error (run `npm start` to it in action).
>
> By checking it with TypeScript, we are catching exactly the kind of accidental misuse we want to avoid.


#### [`package.json`](./package.json)
The package configuration file. It contains the necessary dependencies.


#### [`tsconfig.json`](./tsconfig.json)
The TypeScript configuration file. This is where we configure the TypeScript compiler to typecheck JavaScript files.
