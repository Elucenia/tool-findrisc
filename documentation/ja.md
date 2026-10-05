<!-- ELUCENIA technical documentation · findrisc · ja · no clinical/professional/rights approval -->

# FINDRISC

[条件・出典・許諾](https://elucenia.org/ja/tools/findrisc)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 年齢

`idade`

- `0` — \< 45 歳
- `2` — 45 ～ 54
- `3` — 55 ～ 64
- `4` — \> 64

### 体格指数（BMI）

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 ～ 30
- `3` — \> 30

### 腹囲

`cintura`

- `0` — 男性\<94 cm · 女性\<80 cm
- `3` — 男性94～102 cm · 女性80～88 cm
- `4` — 男性\>102 cm · 女性\>88 cm

### 毎日少なくとも30分の身体活動をしますか（仕事・余暇）？

`ativ`

- `0` — はい
- `2` — いいえ

### どのくらいの頻度で野菜や果物を食べますか？

`veg`

- `0` — 毎日
- `1` — 毎日ではない

### 降圧薬を定期的に使ったことがありますか？

`antihip`

- `0` — いいえ
- `2` — はい

### 血糖が高かったことがありますか（検査、疾患、妊娠時）？

`glic`

- `0` — いいえ
- `5` — はい

### 糖尿病（1型または2型）の家族

`familia`

- `0` — いいえ
- `3` — はい：祖父母，おじ・おば，またはいとこ
- `5` — はい：親，兄弟姉妹，または子

## 方法の版

FINDRISC 8項目/Saaristo 2005：家族歴を含む，合計0–26；元の短縮20点版を含まない

## 記載された計算式

点数合計: 年齢 (0 〜 4), BMI (0 〜 3), 腹囲 (0 〜 4), 身体活動 (0 または 2), 果物・野菜 (0 または 1), 降圧薬 (0 または 2), 高血糖の既往 (0 または 5), 家族歴 (0, 3 または 5). 合計0〜26点。

## 限界・対象集団

2003年の原FINDRISCは、開始時に糖尿病治療を受けていない35–64歳の成人から導出され、十年以内に薬物治療を受けるようになった2型糖尿病を対象としました。ローカルの拡張版の八項目/0–26は、対応する後年の出典で確認する必要があり、原版の七変数/0–20の合計ではありません。スコアは糖尿病を確定せず、小児への自動的な外挿も認めません。

## 参考文献

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
