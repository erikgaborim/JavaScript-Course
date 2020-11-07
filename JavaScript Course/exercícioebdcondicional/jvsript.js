function clicar(){
    var nome = document.getElementById('ler')
    var nome2 = String(nome.value)
    var mensa = document.getElementById('bot')
    var anula = document.getElementById('mens')
    var data = new Date()
    var hora = data.getHours()
    var dia = new Array('domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado')
    //0-6 (zero=domingo)
    anula.innerHTML = " "
    if (hora == 18 && dia == 3){
        mensa.innerHTML = `Eae ${nome2}, hj é quarta-feira e são 18 hrs, então ta na hora da nossa aula`
        document.body.style.background = "green"
    }else{
        mensa.innerHTML = `Eae ${nome2}, hj é ${dia[data.getDay()]} e são ${hora} horas, então não ta na hora da aula`
        document.body.style.background = "red"
    }
}