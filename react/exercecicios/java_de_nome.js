function printar(){
    var chamando = document.getElementById("txtnom")
    var res = document.querySelector("div#res")
    var ve = chamando.value
    res.innerHTML = `meu nome é ${ve}`
    console.log(`meu nome é ${ve}`)
}
