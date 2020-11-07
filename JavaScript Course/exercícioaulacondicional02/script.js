function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var transf = document.getElementById('txtano')
    var nasc = Number(transf.value)
    var idade = ano - nasc
    var mens = document.getElementById('div2')
    if(nasc.legth == 0 || nasc > ano){
        window.alert("Isso não é possível")
    }else{
        var escolha = document.getElementsByName('escsex')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style="border-radius: 50%"
        img.width = img.width+250
        img.height = img.height+250
        if(escolha[0].checked){
            gen = "homem"
            if(idade >= 0 && idade <= 18){
                //dimeno
                img.setAttribute('src', 'messin.jpg')
            }else if(idade <= 60){
                //adultin
                img.setAttribute('src', 'messi.jpg')
            }else{
                //vei
                img.setAttribute('src', 'messivei.jpg')
            }
        }else if(escolha[1].checked){
            gen = "mulher"
            if(idade >= 0 && idade <= 18){
                //dimeno
                img.setAttribute('src', 'elizakid.jpg')
            }else if(idade <= 60){
                //adultin
                img.setAttribute('src', 'elizajovem.jpg')
            }else{
                //vei
                img.setAttribute('src', 'elizaveia.jpg')
            }
        }
    }
    mens.style.textAlign = "center"
    mens.innerHTML = `Você é ${gen} e tem ${idade} anos <br/> <br/>`
    mens.appendChild(img)
}