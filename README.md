## 開発環境サンプル
開発環境のサンプルです。

### ディレクトリ
```
src/ 開発用
dist/ 本番用（ルート）
autoprefixer.config.js autoprefixerの設定
browser-sync.js browserSyncの設定
gulpfile.js svgスプライト作成用
rendering.test.js レンダリングテスト
tsconfig.json TypeScriptの設定
webpack.config.js webpackの設定
ts/sfc.d.ts Vue単一ファイルコンポーネントでTypeScriptを使用するための型定義ファイル
```

### yarn scripts
#### よく使うもの
```
"watch": src/ 内ファイルのwatchの開始
"serve": src/ 内ファイルのwatchの開始 & 開発用サーバー立ち上げ
"serve:pro": ステージング用ビルド & 開発用サーバー立ち上げ（watchなし）
"build": 開発用ビルド
"build:pro": ステージング用ビルド
"build:rel": リリース用ビルド
"svg": SVGスプライトシート作成
"inlinecss": インライン用CSSをビルドし、HTMLへ反映
```

#### 上記「よく使うもの」で使用される、細かいタスク
```
"csscomb": .csscomb.jsonの設定を反映（ソートのみ）
"webpack": webpackのビルド
"webpack:watch": webpackのwatch
"webpack:pro": webpackのステージング用ビルド
"webpack:rel": webpackのリリース用ビルド
"webpack:inlinecss": webpackによるインラインCSSビルド
"webpack:inlinecss:watch": webpackによるインラインCSSビルドのwatch
"webpack:inlinecss:pro": webpackによるインラインCSSビルド（ステージング用）
"webpack:inlinecss:pug": webpackによるインラインCSSビルド（本番用）
"browsersync": browserSync立ち上げ
"browsersync:watch": browserSync立ち上げ（watch）
"remove:inlinecss": 不要ファイル削除
"remove:inlinecss:pug": 不要ファイル削除
```
- 基本は「よく使うもの」だけでなんとかなるはず
- ステージング用と本番用の違いは、gtagがダミーか否か

### 各ファイルの説明
#### Pug
- 各パーツをコンポーネントと呼ぶ
- コンポーネントは2種類
  - layouts-component
    - layouts/
    - レイアウトを管理する
    - 定数： const = L_{NAME};
  - pages-component
    - pages/
    - ディレクトリ構造が、そのままサイトディレクトリになる
    - 定数： const = P_{NAME};
- 画像ファイルは、可能な限り各コンポーネント単位で管理する
  - 直接 /dist/内に入れる
  - OG画像、Twitterカード、favicon除く
- グローバル定数、各ページのメタ情報は、global/_config.pugで管理
- mixinは、global/_mixin.pugで管理

#### Vue単一ファイルコンポーネント（SFC）
- sfc/pages/{NAME}.vue
  - ページ用コンポーネント
- sfc/components/{NAME}.vueの形で作成
  - 共通コンポーネント
- <template></template>, <script></script>は直接既述
- 定数：C_{NAME}（Pugのグローバル設定とバッティングしないように）
- スタイルは基本直接既述せず、scss/components/内に作成し、src属性で指定
  - 記述量が少なければ、直接書いても良い
  - scopedさせるか否かは、そのときどきで判断（大体の場合、したほうがいい）

#### TypeScript
- メインライブラリにVue.jsを採用
- entries/
  - webpackのエントリーポイント
  - {NAME}.ts
  - Vue.jsのルートインスタンス（ルートコンポーネント）を作成（const VM = new Vue({});）
  - vueコンポーネントは、<c-{name}></c-{name}>（cName）で作成
- modules/
  - Classベースで開発
  - 機能毎に作成
  - 基本的にentries/で開発はせず、modules/をimportして使用

#### SCSS
- config/config.scss
  - 設定ファイル（_setting.scss, _mixin.scss, _function.scss）
- override/override.scss
  - CSS初期化（_base.scss, _reset.scss）
- global/global.scss
  - 共通CSS（_modules.scss, _print.scss, _utilities.scss）
- layout/{NAME}.scss
  - layouts用スタイル
  - .l-{NAME}-{Block}_{Element} -{modifire}
- components/{NAME}.scss
  - vue単一コンポーネント用スタイル
  - .c-{NAME}-{Block}_{Element} -{modifire}
- pages/{NAME}.scss
  - 各ページ用のスタイルを既述
  - .p-{NAME}-{Block}_{Element} -{modifire}
- inline/inline_css.scss
  - 初回読み込み用インラインCSS

##### その他
- {NAME}部分がBlockになっても、まあ良いとする
  - 命名規則は参考までに
- 使いたいところに、てきにimportする。
- 読み込みたい順番で既述する
  - vue単一ファイルコンポーネントやCSSをimportしているES moduleも順番に入れる
- 背景画像は、同じ階層に同じ名前のディレクトリを作り、格納する
  - 8KB以下のの画像はbase64エンコードされる