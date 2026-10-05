<!-- ELUCENIA technical documentation · findrisc · zh · no clinical/professional/rights approval -->

# FINDRISC

[条件、来源与许可](https://elucenia.org/zh/tools/findrisc)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 年龄

`idade`

- `0` — \< 45 岁
- `2` — 45 至 54
- `3` — 55 至 64
- `4` — \> 64

### 体重指数（BMI）

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 至 30
- `3` — \> 30

### 腹围

`cintura`

- `0` — 男性\<94 cm · 女性\<80 cm
- `3` — 男性94至102 cm · 女性80至88 cm
- `4` — 男性\>102 cm · 女性\>88 cm

### 您每天是否进行至少 30 分钟身体活动（工作或休闲）？

`ativ`

- `0` — 是
- `2` — 否

### 您多常吃蔬菜或水果？

`veg`

- `0` — 每天
- `1` — 并非每天

### 您是否曾规律服用降压药？

`antihip`

- `0` — 否
- `2` — 是

### 您是否曾血糖偏高（检测、疾病或妊娠期间）？

`glic`

- `0` — 否
- `5` — 是

### 亲属患糖尿病（1 型或 2 型）

`familia`

- `0` — 否
- `3` — 是：祖父母、叔伯姑舅姨或堂表兄弟姐妹
- `5` — 是：父母、兄弟姐妹或子女

## 方法版本

FINDRISC 8项/Saaristo 2005：含家族史，总计0–26；不含原始20分简版

## 已记录的公式

分数相加: 年龄 (0 至 4), BMI (0 至 3), 腰围 (0 至 4), 体力活动 (0 或 2), 水果蔬菜 (0 或 1), 降压药 (0 或 2), 既往高血糖 (0 或 5), 家族史 (0, 3 或 5). 总计0至26分。

## 限制与适用人群

2003年的原始FINDRISC在基线未接受降糖治疗的35–64岁成人中推导，结局为十年内开始接受药物治疗的2型糖尿病。本地扩展版八项/0–26分须核对对应的后续来源；它不是原始七变量/0–20分的总和。评分不能确诊糖尿病，也不能自动推广至儿科。

## 参考文献

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
