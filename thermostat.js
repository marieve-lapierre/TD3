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

var ObservableChambre = {
  observers: []
, addObserver: function(observer) {
    this.observers.push(observer)
  }
, removeObserver: function(observer) {
    var index = this.observers.indexOf(observer)

    if (~index) {
      this.observers.splice(index, 1)
    }
  }
, notifyObservers: function(message) {
    for (var i = this.observers.length - 1; i >= 0; i--) {
      this.observers[i](message)
    };
  }
}



