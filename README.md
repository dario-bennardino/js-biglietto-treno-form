calcolo del prezzo del biglietto del treno
===
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.
**MILESTONE 2:**
Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento
1. dichiaro le variabili che mi servono: let age,km,message, message discount,price,final price.
2. dichiaro i dati di partenza: prezzo al km, sconto under 18, sconto over 65.
3. prompt numero di km da percorrere
4. prompt età passeggero
5. criteri calcolo prezzo biglietto
6. prezzo = km * prezzo al km
7. prezzo finale = prezzo finale (di default ugale al prezzo senza sconti)
8. calcolo sconti
9. if età < 18 prezzo finale *= 1 -(scontoYoung/ 100)
10. inserire messaggio sconto
11. if età >=65 prezzo finale *= 1 -(scontoSenior / 100)
12. inserire messaggio sconto
13. inserire risultato con due decimali con toFixed(2)
14. stampa biglietto
15. in html creare due input e un bottone
16. output in console
17. realizzare il form in pagina
18. stampare il prezzo finale con due decimali con toFixed(2)