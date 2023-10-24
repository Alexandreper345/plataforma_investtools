function main(){
    va = document.getElementById("number")
    va2 = document.getElementById("number2")
    val = va.value
    val2 = va2.value
    resto = 0   
    
    while (val2 != 0){
        resto = val % val2
        val = val2
        val2 = resto 

    }
    console.log('o mdc é ' + val)    
}