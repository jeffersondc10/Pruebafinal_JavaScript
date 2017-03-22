//Declaración de variables
var  suma, resta, multip, div
var teclas
var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, on, sign, raiz, mas, menos, por, dividido, punto, igual

uno = document.getElementById("1")
dos = document.getElementById("2")
tres = document.getElementById("3")
cuatro = document.getElementById("4")
cinco = document.getElementById("5")
seis = document.getElementById("6")
siete = document.getElementById("7")
ocho = document.getElementById("8")
nueve = document.getElementById("9")
cero = document.getElementById("0")
on =  document.getElementById("on")
sign = document.getElementById("sign")
raiz = document.getElementById("raiz")
suma = document.getElementById("mas")
resta = document.getElementById("menos")
por = document.getElementById("por")
dividido = document.getElementById("dividido")
punto = document.getElementById("punto")
igual = document.getElementById("igual")


//window.onmousedown = tamañoTeclaDown;
//window.onmouseup = tamañoTeclaUp;



var Calculadora = {
  //inicializar funciones
  init: function(){
    this.presionarTecla()
  },


  presionarTecla: function(){
    display = document.getElementById('display')
    uno.onmousedown = function(e){
      e.preventDefault()
      uno.style.transform = "scale(0.9, 0.9)"
      display.innerHTML = "1"
    }
    uno.onmouseup = function(e){
      e.preventDefault()
      uno.style.transform = "scale(1, 1)"
    }
    dos.onmousedown = function(e){
      e.preventDefault()
      dos.style.transform = "scale(0.9, 0.9)"
      display.innerHTML = "2"
    }
    dos.onmouseup = function(e){
      e.preventDefault()
      dos.style.transform = "scale(1, 1)"
    }
    tres.onmousedown = function(e){
      e.preventDefault()
      tres.style.transform = "scale(0.9, 0.9)"
    }
    tres.onmouseup = function(e){
      e.preventDefault()
      tres.style.transform = "scale(1, 1)"
    }
    cuatro.onmousedown = function(e){
      e.preventDefault()
      cuatro.style.transform = "scale(0.9, 0.9)"
    }
    cuatro.onmouseup = function(e){
      e.preventDefault()
      cuatro.style.transform = "scale(1, 1)"
    }
    cinco.onmousedown = function(e){
      e.preventDefault()
      cinco.style.transform = "scale(0.9, 0.9)"
    }
    cinco.onmouseup = function(e){
      e.preventDefault()
      cinco.style.transform = "scale(1, 1)"
    }
    seis.onmousedown = function(e){
      e.preventDefault()
      seis.style.transform = "scale(0.9, 0.9)"
    }
    seis.onmouseup = function(e){
      e.preventDefault()
      seis.style.transform = "scale(1, 1)"
    }
    siete.onmousedown = function(e){
      e.preventDefault()
      siete.style.transform = "scale(0.9, 0.9)"
    }
    siete.onmouseup = function(e){
      e.preventDefault()
      siete.style.transform = "scale(1, 1)"
    }
    ocho.onmousedown = function(e){
      e.preventDefault()
      ocho.style.transform = "scale(0.9, 0.9)"
    }
    ocho.onmouseup = function(e){
      e.preventDefault()
      ocho.style.transform = "scale(1, 1)"
    }
    nueve.onmousedown = function(e){
      e.preventDefault()
      nueve.style.transform = "scale(0.9, 0.9)"
    }
    nueve.onmouseup = function(e){
      e.preventDefault()
      nueve.style.transform = "scale(1, 1)"
    }
    cero.onmousedown = function(e){
      e.preventDefault()
      cero.style.transform = "scale(0.9, 0.9)"
    }
    cero.onmouseup = function(e){
      e.preventDefault()
      cero.style.transform = "scale(1, 1)"
    }
    on.onmousedown = function(e){
      e.preventDefault()
      on.style.transform = "scale(0.9, 0.9)"
    }
    on.onmouseup = function(e){
      e.preventDefault()
      on.style.transform = "scale(1, 1)"
    }
    sign.onmousedown = function(e){
      e.preventDefault()
      sign.style.transform = "scale(0.9, 0.9)"
    }
    sign.onmouseup = function(e){
      e.preventDefault()
      sign.style.transform = "scale(1, 1)"
    }
    suma.onmousedown = function(e){
      e.preventDefault()
      suma.style.transform = "scale(0.9, 0.9)"
    }
    suma.onmouseup = function(e){
      e.preventDefault()
      suma.style.transform = "scale(1, 1)"
    }
    resta.onmousedown = function(e){
      e.preventDefault()
      resta.style.transform = "scale(0.9, 0.9)"
    }
    resta.onmouseup = function(e){
      e.preventDefault()
      resta.style.transform = "scale(1, 1)"
    }
    por.onmousedown = function(e){
      e.preventDefault()
      por.style.transform = "scale(0.9, 0.9)"
    }
    por.onmouseup = function(e){
      e.preventDefault()
      por.style.transform = "scale(1, 1)"
    }
    dividido.onmousedown = function(e){
      e.preventDefault()
      dividido.style.transform = "scale(0.9, 0.9)"
    }
    dividido.onmouseup = function(e){
      e.preventDefault()
      dividido.style.transform = "scale(1, 1)"
    }
    igual.onmousedown = function(e){
      e.preventDefault()
      igual.style.transform = "scale(0.9, 0.9)"
    }
    igual.onmouseup = function(e){
      e.preventDefault()
      igual.style.transform = "scale(1, 1)"
    }
    raiz.onmousedown = function(e){
      e.preventDefault()
      raiz.style.transform = "scale(0.9, 0.9)"
    }
    raiz.onmouseup = function(e){
      e.preventDefault()
      raiz.style.transform = "scale(1, 1)"
    }
    punto.onmousedown = function(e){
      e.preventDefault()
      punto.style.transform = "scale(0.9, 0.9)"
    }
    punto.onmouseup = function(e){
      e.preventDefault()
      punto.style.transform = "scale(1, 1)"
    }

  }

}
Calculadora.init()
