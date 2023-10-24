function executar(){

    input1 = document.getElementById("num1")
    input2 = document.getElementById("num2")
    somar = document.getElementById("soma")
    subst = document.getElementById("subtrar")
    produto = document.getElementById("produto")
    dividir = document.getElementById("divisão")

    val1 = Number(input1.value)
    val2 = Number(input2.value)


    if (somar.checked) {
        console.log(val1 + val2)
        
    } else if (subst.checked){
        console.log(val1 - val2)

    } else if (produto.checked){
        console.log(val1 * val2)
    } else
    console.log(val1 / val2)

}