# frontend_develop_environment

## command

``` terminal
// npm install
$ yarn

// start dev server and watch pug/css/js
$ yarn start

// mode development
$ yarn dev

// mode production
$ yarn build
```

## develop list

- webpackでbundle
    - ES6(@babel)
    - Sass
    - PostCSSでautoprefixer
    - productionモードでcss/jsファイル圧縮
    - imageファイル圧縮
    - WebFont対応(woff、eot等)
    - media対応(mp4、webm等)
    - jQueryに依存したライブラリに対応
- npm scriptsでタスクランナー
- jQuery
- font「NotoSansJP」設定
- pugでHTMLコーディング
    - _include
    - index.pug
    - buildすると`_include`を削除
- cssファイル(smacss設計)
    - base
    - function
    - layout
    - mixin
    - module
    - responsive
    - state
    - variable
    - animation
- Lint
    - ESLint
    - StyleLint
    
## 参考サイト

- [stylelint.config.js](https://gist.github.com/buchiya4th/f4ca1be2ab98ee5a8098fa68a93e752c)
    

