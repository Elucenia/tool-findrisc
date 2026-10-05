<!-- ELUCENIA technical documentation · findrisc · de · no clinical/professional/rights approval -->

# FINDRISC

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/findrisc)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Alter

`idade`

- `0` — \< 45 Jahre
- `2` — 45 bis 54
- `3` — 55 bis 64
- `4` — \> 64

### BMI

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 bis 30
- `3` — \> 30

### Taillenumfang

`cintura`

- `0` — Mann \< 94 cm · Frau \< 80 cm
- `3` — Mann 94 bis 102 cm · Frau 80 bis 88 cm
- `4` — Mann \> 102 cm · Frau \> 88 cm

### Sind Sie täglich mindestens 30 Minuten körperlich aktiv (Arbeit oder Freizeit)?

`ativ`

- `0` — Ja
- `2` — Nein

### Wie häufig essen Sie Gemüse oder Obst?

`veg`

- `0` — Täglich
- `1` — Nicht täglich

### Haben Sie jemals regelmäßig Medikamente gegen Bluthochdruck eingenommen?

`antihip`

- `0` — Nein
- `2` — Ja

### Hatten Sie jemals erhöhten Blutzucker (bei Untersuchung, Krankheit oder Schwangerschaft)?

`glic`

- `0` — Nein
- `5` — Ja

### Familienangehörige mit Diabetes (Typ 1 oder 2)

`familia`

- `0` — Nein
- `3` — Ja: Großeltern, Tanten/Onkel oder Cousins/Cousinen ersten Grades
- `5` — Ja: Eltern, Geschwister oder Kinder

## Fassung der Methode

FINDRISC 8 Items/Saaristo 2005: Familienanamnese enthalten, Gesamt 0–26; ohne ursprüngliche verkürzte 20-Punkte-Version

## Dokumentierte Formel

Punktesumme: Alter (0 bis 4), BMI (0 bis 3), Taillenumfang (0 bis 4), körperliche Aktivität (0 oder 2), Obst und Gemüse (0 oder 1), Antihypertensivum (0 oder 2), frühere hohe Glukose (0 oder 5), Familienanamnese (0, 3 oder 5). Gesamt 0 bis 26 Punkte.

## Grenzen und Population

Der ursprüngliche FINDRISC von 2003 wurde bei Erwachsenen von 35–64 Jahren ohne anfängliche antidiabetische Behandlung für innerhalb von zehn Jahren medikamentös behandelten Typ-2-Diabetes entwickelt. Die erweiterte lokale Version mit acht Items/0–26 muss in der passenden späteren Quelle geprüft werden; sie ist nicht die Summe von sieben Variablen/0–20 des Originals. Der Score bestätigt keinen Diabetes und erlaubt keine automatische Übertragung auf Kinder.

## Referenzen

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
