function getEnfrentamientos() {
    var equipos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        equipos[_i] = arguments[_i];
    }
    var equipos2 = shuffle(equipos);
    var enfrentamientos = "";
    for (var i = 0; i < equipos2.length - 1; i++) {
        enfrentamientos += equipos2[i] + " vs " + equipos2[i + 1] + "\n";
        if (i == 0) { }
        i++;
        if (equipos.length % 2 != 0 && i == equipos2.length - 2) {
            enfrentamientos += equipos2[i + 1] + " pasa a la siguiente ronda";
        }
    }
    console.log(enfrentamientos);
}
function shuffle(equipos) {
    equipos.sort(function () { return Math.random() - 0.5; });
    return equipos;
}
getEnfrentamientos('R. Madrid', 'Betis', 'Valencia', 'Villareal', 'Atleti');
