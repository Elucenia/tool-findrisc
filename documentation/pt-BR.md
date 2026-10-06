<!-- ELUCENIA technical documentation · findrisc · pt-BR · no clinical/professional/rights approval -->

# FINDRISC

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/findrisc)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Idade

`idade`

- `0` — \< 45 anos
- `2` — 45 a 54
- `3` — 55 a 64
- `4` — \> 64

### IMC

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 a 30
- `3` — \> 30

### Circunferência abdominal

`cintura`

- `0` — Homem \< 94 cm · mulher \< 80 cm
- `3` — Homem 94 a 102 cm · mulher 80 a 88 cm
- `4` — Homem \> 102 cm · mulher \> 88 cm

### Faz ao menos 30 minutos de atividade física por dia (trabalho ou lazer)?

`ativ`

- `0` — Sim
- `2` — Não

### Com que frequência come verduras, legumes ou frutas?

`veg`

- `0` — Todos os dias
- `1` — Não todos os dias

### Já usou regularmente remédio para pressão alta?

`antihip`

- `0` — Não
- `2` — Sim

### Já teve glicemia alta (em exame, doença ou gestação)?

`glic`

- `0` — Não
- `5` — Sim

### Familiares com diabetes (tipo 1 ou 2)

`familia`

- `0` — Não
- `3` — Sim: avós, tios ou primos de primeiro grau
- `5` — Sim: pais, irmãos ou filhos

## Edição do método

FINDRISC 8 itens/Saaristo 2005:história familiarincluída, total 0–26; sem versão original abreviada 20 pontos

## Fórmula documentada

Soma de pontos: idade (0 a 4), IMC (0 a 3), cintura (0 a 4), atividade física (0 ou 2), frutas e verduras (0 ou 1), anti-hipertensivo (0 ou 2), glicemia alta prévia (0 ou 5) e história familiar (0, 3 ou 5). Total de 0 a 26 pontos.

## Limites e população

O FINDRISC original de 2003 foi derivado em adultos de 35–64 anos sem tratamento antidiabético no início, para diabetes tipo 2 que passou a receber tratamento farmacológico em dez anos. A versão ampliada local de oito itens/0–26 deve ser conferida na fonte posterior correspondente; não é a soma de sete variáveis/0–20 do original. O escore não confirma diabetes nem permite extrapolação automática à pediatria.

## Referências

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Risco baixo: cerca de 1 em 100 desenvolverá diabetes em 10 anos


### 2

Risco levemente elevado: cerca de 1 em 25 em 10 anos

Orientar alimentação e atividade física.


### 3

Risco moderado: cerca de 1 em 6 em 10 anos

Considerar glicemia de jejum ou HbA1c e mudança intensiva do estilo de vida.


### 4

Risco muito alto: cerca de 1 em 2 em 10 anos

Investigar diabetes não diagnosticado.

