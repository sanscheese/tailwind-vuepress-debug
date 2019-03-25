# Hello Big World

Trying to resolve issue to import the TailwindCSS config into a component in Vuepress.

## Local dev

Clone repo and run `yarn dev`

## Issue

When using `const tailwind = require("./../../tailwind.config")` and trying to use `tailwind` am getting the error:

```
vue.runtime.esm.js?2b0e:619 [Vue warn]: Failed to resolve async component: function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./.vuepress/components/test.vue */ "./.vuepress/components/test.vue"));
}
Reason: TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
```

Issue seems to occur when using the spread of the default config: e.g. `...defaultTheme.colors`

<test />

Example `test` component is in `.vuepress/components`
