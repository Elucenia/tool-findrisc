<!-- ELUCENIA technical documentation · findrisc · fr · no clinical/professional/rights approval -->

# FINDRISC

[conditions, sources et autorisations](https://elucenia.org/fr/outils/findrisc)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Âge

`idade`

- `0` — \< 45 ans
- `2` — 45 à 54
- `3` — 55 à 64
- `4` — \> 64

### IMC

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 à 30
- `3` — \> 30

### Tour de taille

`cintura`

- `0` — Homme \< 94 cm · femme \< 80 cm
- `3` — Homme 94 à 102 cm · femme 80 à 88 cm
- `4` — Homme \> 102 cm · femme \> 88 cm

### Faites-vous au moins 30 minutes d’activité physique par jour (travail ou loisirs) ?

`ativ`

- `0` — Oui
- `2` — Non

### À quelle fréquence mangez-vous des légumes ou des fruits ?

`veg`

- `0` — Tous les jours
- `1` — Pas tous les jours

### Avez-vous déjà pris régulièrement un médicament contre l’hypertension ?

`antihip`

- `0` — Non
- `2` — Oui

### Avez-vous déjà eu une glycémie élevée (analyse, maladie ou grossesse) ?

`glic`

- `0` — Non
- `5` — Oui

### Parents atteints de diabète (type 1 ou 2)

`familia`

- `0` — Non
- `3` — Oui : grands-parents, oncles/tantes ou cousins germains
- `5` — Oui : parents, frères/sœurs ou enfants

## Édition de la méthode

FINDRISC 8 items/Saaristo 2005 : antécédents familiaux inclus, total 0–26 ; sans version originale abrégée 20 points

## Formule documentée

Somme des points: âge (0 à 4), IMC (0 à 3), tour de taille (0 à 4), activité physique (0 ou 2), fruits et légumes (0 ou 1), antihypertenseur (0 ou 2), glycémie élevée antérieure (0 ou 5), antécédents familiaux (0, 3 ou 5). Total de 0 à 26 points.

## Limites et population

Le FINDRISC original de 2003 a été développé chez des adultes de 35–64 ans sans traitement antidiabétique initial, pour un diabète de type 2 ayant commencé à recevoir un traitement médicamenteux au cours de dix ans. La version locale élargie à huit items/0–26 doit être vérifiée dans la source ultérieure correspondante ; ce n’est pas la somme des sept variables/0–20 de l’original. Le score ne confirme pas un diabète et ne permet pas une extrapolation automatique à la pédiatrie.

## Références

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
