<!-- ELUCENIA technical documentation · findrisc · it · no clinical/professional/rights approval -->

# FINDRISC

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/findrisc)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Età

`idade`

- `0` — \< 45 anni
- `2` — 45 a 54
- `3` — 55 a 64
- `4` — \> 64

### IMC

`imc`

- `0` — \< 25 kg/m²
- `1` — 25 a 30
- `3` — \> 30

### Circonferenza addominale

`cintura`

- `0` — Uomo \< 94 cm · donna \< 80 cm
- `3` — Uomo da 94 a 102 cm · donna da 80 a 88 cm
- `4` — Uomo \> 102 cm · donna \> 88 cm

### Svolge almeno 30 minuti di attività fisica al giorno (lavoro o tempo libero)?

`ativ`

- `0` — Sì
- `2` — No

### Con quale frequenza mangia verdura o frutta?

`veg`

- `0` — Ogni giorno
- `1` — Non ogni giorno

### Ha mai assunto regolarmente farmaci per l’ipertensione?

`antihip`

- `0` — No
- `2` — Sì

### Ha mai avuto glicemia elevata (agli esami, durante malattia o gravidanza)?

`glic`

- `0` — No
- `5` — Sì

### Familiari con diabete (tipo 1 o 2)

`familia`

- `0` — No
- `3` — Sì: nonni, zii o cugini di primo grado
- `5` — Sì: genitori, fratelli/sorelle o figli

## Edizione del metodo

FINDRISC 8 item/Saaristo 2005: familiarità inclusa, totale 0–26; senza versione originale abbreviata 20 punti

## Formula documentata

Somma punti: età (0 a 4), IMC (0 a 3), vita (0 a 4), attività fisica (0 o 2), frutta e verdura (0 o 1), antipertensivo (0 o 2), precedente glicemia alta (0 o 5), familiarità (0, 3 o 5). Totale da 0 a 26 punti.

## Limiti e popolazione

Il FINDRISC originale del 2003 è stato derivato in adulti di 35–64 anni senza trattamento antidiabetico iniziale, per diabete di tipo 2 che ha successivamente ricevuto trattamento farmacologico entro dieci anni. La versione locale ampliata di otto item/0–26 deve essere verificata nella corrispondente fonte successiva; non è la somma originale di sette variabili/0–20. Il punteggio non conferma il diabete e non consente l’estrapolazione automatica alla pediatria.

## Riferimenti

- [Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care, 2003.](https://doi.org/10.2337/diacare.26.3.725)

- [Saaristo T et al. Cross-sectional evaluation of the Finnish Diabetes Risk Score: a tool to identify undetected type 2 diabetes, abnormal glucose tolerance and metabolic syndrome. Diab Vasc Dis Res, 2005.](https://doi.org/10.3132/dvdr.2005.011)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Rischio basso: circa 1 su 100 svilupperà il diabete in 10 anni


### 2

Rischio leggermente elevato: circa 1 su 25 in 10 anni

Orientare su alimentazione e attività fisica.


### 3

Rischio moderato: circa 1 su 6 in 10 anni

Considerare glicemia a digiuno o HbA1c e un cambiamento intensivo dello stile di vita.


### 4

Rischio molto alto: circa 1 su 2 in 10 anni

Indagare il diabete non diagnosticato.

