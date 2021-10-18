# Webpack5-React-TypeScript-Jest-Template

* 使用 Webpack5 自行從零搭建 React + TS + Jest 項目環境，並用來開發一個 TODO LIST 項目。
* 這裡主要說明 Webpack5 項目環境，有關 TODO LIST 項目說明，可以點擊 [TODO LIST 項目說明](https://github.com/WeiWeiWe/react-ts-jest-todolist)。

## 功能
* 支持 Webpack + Babel 基本環境搭建
* 支持 css、sass、less 樣式檔案編譯
* 支持 EditorConfig 統一不同 IDE 的程式碼風格
* 支持 Prettier 維持程式碼格式
* 支持 ESLint、StyleLint 維持程式碼品質
* 支持 lint-staged 搭配 husky，在提交 commit 以前進行程式碼檢驗
* 支持 React(Hooks) + TypeScript 組件開發
* 支持 Jest 測試環境，並可以使用 React-Testing-Library 撰寫 React(Hooks) 組件測試
* 支持 GitHub Actions 進行 CI/CD 構建

## 使用方式

### 開發環境

```sh
npm run start   
```

接著進入 [localhost:8080](http://localhost:8080) 即可。

### 打包專案

```sh
npm run build
```

打包的專案會在 dist 目錄下。
