# Vue3 highlight-code

[![license](https://img.shields.io/github/license/gluons/vue-highlight.js.svg?style=flat-square)](https://github.com/gluons/vue-highlight.js/blob/master/LICENSE)

[![vue 3](https://img.shields.io/badge/vue-3-42b983.svg?style=flat-square)](https://vuejs.org)

## ⚙️ Installation

**Via [npm](https://www.npmjs.com):**

[![npm](https://nodei.co/npm/vue3-highlight-code.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue3-highlight-code)

```bash
npm install highlight.js vue3-highlight-code text-loader
```

**Or [Yarn](https://yarnpkg.com):**

```bash
yarn add highlight.js vue3-highlight-code text-loader
```

### Usage

There are way to import Highlight.js languages.

```js
import { createApp } from 'vue'
import App from './App.vue'
import code from 'vue3-highlight-code'
import 'vue3-highlight-code/dist/vue3-highlight-code.css'
import 'highlight.js/styles/atom-one-dark.css'
const app = createApp(App)
app.use(code)
app.mount('#app')
```

**Vue file**

```vue
// App.vue
<template>
  <drag-code :code="currentCode" suffix="vue"></drag-code>
  <drag-code :code="currentCode1" suffix="vue"></drag-code>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
      currentCode() { 
        return require('!!text-loader!./' + 'components/HelloWorld')
      },
      currentCode1() { 
        return require('!!text-loader!./' + 'components/demo/index')
      }
    },
}
</script>
```

> The important thing，I suggest that you use the **File path**. Even it is a small amount of code. 

![wecom-temp-5a6759e5948a604eb470c052062a0ce3](https://user-images.githubusercontent.com/68687740/150127033-33cb187c-5b4f-4453-b4d3-02dfd5c35c3c.png)


## 📚 API

### `<hg-code>`  `<drag-code>` 

Highlight.js code block.

#### 🔰 suffix

**Type:** `String`

File suffix type

#### 🔰 :code

##### code

**Type:** `String`

Highlight the route of the code file


#### result

**<hg-code>**

that is same as the drag-code,but it only has the code,No drag

`<drag-code>` 

![wecom-temp-dfb957e29284ac14367e3fd899ed27ac](https://user-images.githubusercontent.com/68687740/150127066-1c60f123-d108-4ea9-9f23-960910960499.png)
