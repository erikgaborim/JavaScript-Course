function carregar(){
    var msg = document.getElementById('mens')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if(hora >= 0 && hora <= 12){
        img.src = 'manha.jpg'
        document.body.style.background = 'green';
    }else if(hora > 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'blue';
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = 'black';
    }
}