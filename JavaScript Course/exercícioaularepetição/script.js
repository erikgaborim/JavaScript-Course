function clicar(){
    let ini = document.getElementById('inicio')
    let final = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let mens = document.getElementById('div2')
    mens.innerHTML = "Contando né: "
    if(ini.value.length == 0 || final.value.length == 0 || pas.value.length == 0){
        alert("[ERRO] Um dos campos não foi preenchido")
        mens.innerHTML = "Impossível contar!"
    }
    else{
        var i = Number(ini.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert("[ERRO] O 'passo' não pode ser igual a 0")
            p = 1
         }
        if(i<f){
            for(var c = i; c <= f; c += p){
                mens.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                mens.innerHTML += `${c} \u{1F449}`
            }
        }
        mens.innerHTML += " \u{1F633}"
    }
}