/* Extrait les valeurs produites dans la page Web et par le simulateur
 * et d�clanche l'affichage des valeurs dans la page
*/


/*Code jquery qui affiche un glisseur dans le conteneur ayant
 *l'identifiant #thermostat, qui initalise sa position et ses valeurs
 *par d�faut et qui affiche la valeur s�lectionn�e dans un conteneur
 *ayant l'identifiant #valeurThermostat
 *
 *Pour d�marrer le chauffage, il faut cliquer le curseur de d�filement
 */
/*********************Ne pas modifier***********************/
 $(document).ready(function() {
  $("#thermostat").slider(
  {
    orientation: 'vertical',
    max: 40 ,
    value:temperatureThermostat,
    min: -10 ,
    step: 1
  });
  $("#thermostat").slider({
    change: function(event, ui) {
      $("#tdValeurThermostat").text( ui.value );
    }
  });
});
/*********************Ne pas modifier***********************/

$(document).ready(function(){
  console.log(temperatureInterieure);
  console.log("debut boucle");
  chrono();
})

function chrono(){
  window.setTimeout(function() {
    recalculerTemp();
    chrono();
  }, intervalleTemps);
}

function recalculerTemp(){
    ticTac();
    document.getElementById("tempInterieure").innerHTML = temperatureInterieure;
}



