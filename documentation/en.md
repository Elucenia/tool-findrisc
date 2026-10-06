<!-- ELUCENIA technical documentation · findrisc · en · no clinical/professional/rights approval -->

# FINDRISC

[conditions, sources and permissions](https://elucenia.org/en/tools/findrisc)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Age

`idade`

- `0` — \< 45 years
- `2` — 45 to 54
- `3` — 55 to 64
- `4` — \> 64

### BMI

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 to 30
- `3` — \> 30

### Waist circumference

`cintura`

- `0` — Man \< 94 cm · woman \< 80 cm
- `3` — Man 94 to 102 cm · woman 80 to 88 cm
- `4` — Man \> 102 cm · woman \> 88 cm

### Do you do at least 30 minutes of physical activity daily (at work or during leisure)?

`ativ`

- `0` — Yes
- `2` — No

### How often do you eat vegetables or fruit?

`veg`

- `0` — Every day
- `1` — Not every day

### Have you ever regularly taken medication for high blood pressure?

`antihip`

- `0` — No
- `2` — Yes

### Have you ever had high blood glucose (on testing, during illness or pregnancy)?

`glic`

- `0` — No
- `5` — Yes

### Family members with diabetes (type 1 or 2)

`familia`

- `0` — No
- `3` — Yes: grandparents, aunts/uncles or first cousins
- `5` — Yes: parents, siblings or children

## Method edition

FINDRISC 8 items/Saaristo 2005: family history included, total 0–26; excludes original shortened 20-point version

## Documented formula

Sum of points: age (0 to 4), BMI (0 to 3), waist (0 to 4), physical activity (0 or 2), fruit and vegetables (0 or 1), antihypertensive medication (0 or 2), previous high glucose (0 or 5), family history (0, 3 or 5). Total 0 to 26 points.

## Limits and population

The original 2003 FINDRISC was derived in adults aged 35–64 years without antidiabetic treatment at baseline, for type 2 diabetes subsequently receiving drug treatment within ten years. The expanded local eight-item/0–26 version must be checked against the corresponding later source; it is not the original seven-variable/0–20 sum. The score does not confirm diabetes or permit automatic extrapolation to children.

## References

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Low risk: about 1 in 100 will develop diabetes in 10 years


### 2

Slightly elevated risk: about 1 in 25 in 10 years

Advise diet and physical activity.


### 3

Moderate risk: about 1 in 6 in 10 years

Consider fasting glucose or HbA1c and intensive lifestyle change.


### 4

Very high risk: about 1 in 2 in 10 years

Investigate undiagnosed diabetes.

