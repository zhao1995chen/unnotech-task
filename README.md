# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Version

- Node >= 12, NPM >= 7

## Starting

```bash
cd unnotech-task

pnpm install

pnpm run dev
```

## Structure

```bash
.
├── README.md ## 說明文件 ##
├── index.html 
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.vue 
│   ├── assets ## 素材庫 ##
│   │   ├── add.svg
│   │   ├── arrow.svg
│   │   ├── delete.svg
│   │   ├── edit.svg
│   │   └── vue.svg
│   ├── components ## 元件 ##
│   │   ├── BookCard.vue
│   │   ├── BookDetail.vue
│   │   ├── BookList.vue
│   │   ├── common ## 共用元件 ##
│   │   │   └── TIcon.vue
│   │   └── dialogs ## 彈跳視窗元件 ##
│   │       └── CreateBook.vue
│   ├── main.js
│   ├── router ## Vue Router 路由設定 ##
│   │   └── index.js
│   ├── services ## API 操作設定 ##
│   │   └── api.js
│   ├── store ## Vuex 設定 ##
│   │   ├── index.js
│   │   └── modules ## 模組化 ##
│   │       ├── api.js
│   │       ├── index.js
│   │       └── route
│   │           └── books.js
│   └── utils ## 通用設定 ##
│       ├── apipath.js
│       └── config.js
└── vite.config.js ## Vite Config 設定 ##

```

## 頁面切換邏輯

### 書籍列表頁面

點擊右上方藍色新增按鈕，打開新增書籍視窗。
點擊 BookCard 中灰色刪除按鈕，書籍被刪除，送出請求後，無論成功失敗，返回主頁面並刷新。

### 書籍詳情頁面

點擊 BookCard 進入書籍詳情頁面，輸入格為唯讀。
點擊左上方 arrow icon 返回 BookList 主頁面。
點擊右上方藍色編輯按鈕，進入編輯頁面，輸入格可輸入。
再編輯頁面點擊左上方 arrow icon 返回 BookDetail，書入格為唯讀。
點擊修改會對資料進行驗證，確認資料有修改且書籍名稱、作者名稱有值，送出請求。
點擊右上方灰色刪除按鈕，書籍被刪除，送出請求後，無論成功失敗，返回主頁面並刷新。

### 新增書籍視窗

新增書籍前，進行資料檢驗，確認書籍名稱、作者名稱有值，送出請求。
送出請求後無論成功失敗，關閉新增書籍頁面，返回主頁面並刷新。
點擊左上方 arrow icon 返回 BookList 主頁面。

## Third Party Library

### Axios

發送 HTTP 請求，對資料進行操作請求。

### Sass

CSS 預處理器。

### WindiCSS

TailwindCSS 的上位替代，CSS class 命名更直覺。

### vite-plugin-svg-icons

載入 svg / icon，加載後可直接在任意區域被取得及顯示。

### Vue Router

前端路由管理，透過位址設定，切換顯示不同頁面資料，並可以依照權限表去給予不同權限設定。

### Vuex

集中式管理元件狀態，在中大型的後台網站，可以更好地取得並管理元件資料。

### vuex-map-fields

解決 vuex 無法在 mutation 以外對 state 做更改的限制，vuex-map-fields 將 vuex 官方 getter & setter 方法拉出來做成共用 library，可以在元件內對 state 做修改。

## Problem

### Vue Router not working

Need to add `<router-view>` tag

```html
<template>
  <router-view></router-view>
</template>
```

### Vuex not working

```javascript
// main.js

// correct
createApp(App).use(store).use(router).mount('#app')

// incorrect
createApp(App).use(router, store).mount('#app')
```

## Next Step

- Composition API
- i18n
- API 請求及後續函式模組化