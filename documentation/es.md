<!-- ELUCENIA technical documentation · findrisc · es · no clinical/professional/rights approval -->

# FINDRISC

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/findrisc)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Edad

`idade`

- `0` — \< 45 años
- `2` — 45 a 54
- `3` — 55 a 64
- `4` — \> 64

### IMC

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 a 30
- `3` — \> 30

### Circunferencia abdominal

`cintura`

- `0` — Hombre \< 94 cm · mujer \< 80 cm
- `3` — Hombre de 94 a 102 cm · mujer de 80 a 88 cm
- `4` — Hombre \> 102 cm · mujer \> 88 cm

### ¿Realiza al menos 30 minutos de actividad física al día (trabajo u ocio)?

`ativ`

- `0` — Sí
- `2` — No

### ¿Con qué frecuencia come verduras, hortalizas o frutas?

`veg`

- `0` — Todos los días
- `1` — No todos los días

### ¿Ha tomado regularmente medicación para la hipertensión?

`antihip`

- `0` — No
- `2` — Sí

### ¿Ha tenido glucemia alta (en una prueba, durante enfermedad o embarazo)?

`glic`

- `0` — No
- `5` — Sí

### Familiares con diabetes (tipo 1 o 2)

`familia`

- `0` — No
- `3` — Sí: abuelos, tíos o primos hermanos
- `5` — Sí: padres, hermanos o hijos

## Edición del método

FINDRISC 8 ítems/Saaristo 2005: historia familiar incluida, total 0–26; no versión original abreviada de 20 puntos

## Fórmula documentada

Suma de puntos: edad (0 a 4), IMC (0 a 3), cintura (0 a 4), actividad física (0 o 2), frutas y verduras (0 o 1), antihipertensivo (0 o 2), glucemia alta previa (0 o 5), historia familiar (0, 3 o 5). Total de 0 a 26 puntos.

## Límites y población

El FINDRISC original de 2003 se derivó en adultos de 35–64 años sin tratamiento antidiabético al inicio, para diabetes tipo 2 que posteriormente recibió tratamiento farmacológico en diez años. La versión local ampliada de ocho ítems/0–26 debe comprobarse en la fuente posterior correspondiente; no es la suma de siete variables/0–20 del original. La puntuación no confirma diabetes ni permite extrapolar automáticamente a la pediatría.

## Referencias

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Riesgo bajo: alrededor de 1 de cada 100 desarrollará diabetes en 10 años


### 2

Riesgo ligeramente elevado: alrededor de 1 de cada 25 en 10 años

Orientar sobre alimentación y actividad física.


### 3

Riesgo moderado: alrededor de 1 de cada 6 en 10 años

Considerar glucemia en ayunas o HbA1c y un cambio intensivo del estilo de vida.


### 4

Riesgo muy alto: alrededor de 1 de cada 2 en 10 años

Investigar diabetes no diagnosticada.

