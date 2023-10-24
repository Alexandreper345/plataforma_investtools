function executar(){
    var i = document.getElementById("tabu")
    var res = document.getElementById("res")
    var val = i.value 
   

    for(var valor = 0; valor < 11 ; valor++){
        console.log(` ${val} x ${ valor } = ${+ valor*val}`) 
    }

}




