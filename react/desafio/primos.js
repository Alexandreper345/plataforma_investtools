function main() {
    number = document.getElementById("number")
    valor = number.value

    if ((valor % 2 != 0 || valor == 2) && valor >1 ){
        console.log('é primo')
    
    
    } else
        console.log("não é primo")
}
