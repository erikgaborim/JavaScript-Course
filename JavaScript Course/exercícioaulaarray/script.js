let transf = document.getElementById('num')
let sel = document.getElementById('select')
let res = document.getElementById('div2')
let vet = []
function TestaCem(x){
    if(x >= 1 && x <= 100){
        return true
    }else{
        return false
    }
}
function Clicar(){
    if(TestaCem(transf.value)){
        vet.push(Number(transf.value))
        if(transf.value == 0){
            window.alert("[ERRO!] Digite um número, por favor.")
        } else{
            let op = document.createElement('option')
            op.innerHTML = `O valor digitado foi ${transf.value}`
            sel.appendChild(op)
            res.innerHTML = ''
        }
    }else{
        window.alert("[Erro!] O número digitado não está dentro dos parâmetros")
    }
    transf.value = ''
    transf.focus()
}
let total = 0
let tot = 0
let maior = 0
let menor = 0
function executar(){
    if(vet.length == 0){
        window.alert("Não da pra executar se não tem numero nenhum kkkj")
    }else{
        window.alert("Sinal de vida kkkkj")
        tot = vet.length
        menor = vet[0]
        for(let i = 0; i < tot; i++){
            total += vet[i]
            if(vet[i] < menor){
                menor = vet[i]
            }
            if(vet[i] > maior){
                maior = vet[i]
            }
        }
    }
    let media = total / tot
    res.innerHTML = ''
    res.innerHTML += `<p>A média dos números digitados é: ${media}</p>`  
    res.innerHTML += `<p>A soma dos números digitados é: ${total}</p>`  
    res.innerHTML += `<p>O menor número digitado foi o: ${menor}</p>`  
    res.innerHTML += `<p>O maior número digitado foi o: ${maior}</p>`  
    }
