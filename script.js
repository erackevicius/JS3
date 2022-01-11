/*
Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

"Įveskite prekės kainą";
"Ar reikalingas pristatymas į namus? (taip/ne)";
"Į kurį miestą reiks pristatyti?"

Galiausiai atspausdintų tokią informaciją:

---

1 variantas (be pristatymo)

Prekės kaina: xx.xx €
Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

---

2 variantas (su pristatymu)

Prekės kaina : xx.xx €
Pristatymas: xx.xx €
Iš viso: xx.xx €
Prekę pristatysime į "įvestas miestas" per 1-3 dienas.
*/


"use strict";

var kaina = prompt("Įveskite prekės kainą");
var ivestis = Number(kaina);
var pristatymoKaina = 3;
var kainasupristatymu = kaina + pristatymoKaina;


while (isNaN(ivestis) || ivestis <= 0){
	var kaina = prompt("Įveskite prekės kainą");
	var ivestis = Number(kaina);
}


var pristatymas = prompt("Ar reikalingas pristatymas į namus?");
if (pristatymas == "taip" ) {
	var miestas = prompt("Į kurį miestą reikės pristatyi?");	
	alert("Prekės kaina: " + kaina + " €. " + "Pristatymo kaina: " + pristatymoKaina + " €." + " Iš viso: " + kainasupristatymu +" €." + " Prekę pristatysime į " + miestas + " per 1-3 dienas." );
}
else {
	alert("Prekės kaina: " + kaina + " €." + " Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a") 
}




