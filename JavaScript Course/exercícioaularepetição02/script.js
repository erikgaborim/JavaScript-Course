function clicar(){
    var numer = document.getElementById('numid')
    var print = document.getElementById('selectid')
    var transf = Number(numer.value)
    print.innerHTML = ''
    for(var i = 0; i <= 10; i++){
        var tab = i * transf
        var valor = document.createElement('option')
        valor.innerHTML = `${transf} x ${i} = ${tab}`
        print.appendChild(valor)
        valor.value = `print${i}`
    }
}