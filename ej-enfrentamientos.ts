function getEnfrentamientos(...equipos:Array<string>){
     const equipos2 =  shuffle(equipos)
     let enfrentamientos: string = ""
    
    for (let i = 0; i < equipos2.length-1 ; i++){
            enfrentamientos += equipos2[i] + " vs " + equipos2[i+1] + "\n"
            if (i== 0){} i++

            if (equipos.length % 2 != 0 && i == equipos2.length-2){
            enfrentamientos += equipos2[i+1] + " pasa a la siguiente ronda"
            }
    }
    console.log(enfrentamientos)
}

function shuffle(equipos:Array<string>){
    equipos.sort(function() { return Math.random() - 0.5})
    return equipos
}

getEnfrentamientos('R. Madrid', 'Betis', 'Valencia', 'Villareal', 'Atleti')
