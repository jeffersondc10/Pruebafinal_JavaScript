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
var resultado = 0
var operacion = 0
var numDisplay = [ ]
var pantalla = []
var contador = 0
var contadorSigno = 0



var Calculadora = {
  //inicializar funciones
  init: function(){
    this.presionarTecla()
  },

  presionarTecla: function(){
    display = document.getElementById('display')
    var self = this

    uno.onmousedown = function(e){
      uno.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "1")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }

    }
    uno.onmouseup = function(e){
      e.preventDefault()
      uno.style.transform = "scale(1, 1)"
    }
    dos.onmousedown = function(e){
      e.preventDefault()
      dos.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "2")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    dos.onmouseup = function(e){
      e.preventDefault()
      dos.style.transform = "scale(1, 1)"
    }
    tres.onmousedown = function(e){
      e.preventDefault()
      tres.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length > 7){

      }else{
        numDisplay.push(display.innerHTML = "3")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    tres.onmouseup = function(e){
      e.preventDefault()
      tres.style.transform = "scale(1, 1)"
    }
    cuatro.onmousedown = function(e){
      e.preventDefault()
      cuatro.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "4")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    cuatro.onmouseup = function(e){
      e.preventDefault()
      cuatro.style.transform = "scale(1, 1)"
    }
    cinco.onmousedown = function(e){
      e.preventDefault()
      cinco.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "5")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    cinco.onmouseup = function(e){
      e.preventDefault()
      cinco.style.transform = "scale(1, 1)"
    }
    seis.onmousedown = function(e){
      e.preventDefault()
      seis.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "6")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    seis.onmouseup = function(e){
      e.preventDefault()
      seis.style.transform = "scale(1, 1)"
    }
    siete.onmousedown = function(e){
      e.preventDefault()
      siete.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "7")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    siete.onmouseup = function(e){
      e.preventDefault()
      siete.style.transform = "scale(1, 1)"
    }
    ocho.onmousedown = function(e){
      e.preventDefault()
      ocho.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "8")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    ocho.onmouseup = function(e){
      e.preventDefault()
      ocho.style.transform = "scale(1, 1)"
    }
    nueve.onmousedown = function(e){
      e.preventDefault()
      nueve.style.transform = "scale(0.9, 0.9)"
      if (pantalla.length >= 8){
      }else{
        numDisplay.push(display.innerHTML = "9")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    nueve.onmouseup = function(e){
      e.preventDefault()
      nueve.style.transform = "scale(1, 1)"
    }
    cero.onmousedown = function(e){
      e.preventDefault()
      cero.style.transform = "scale(0.9, 0.9)"
      if (display.innerHTML == "0"){

      }else{
        if (pantalla.length >= 8){
        }else{
          numDisplay.push(display.innerHTML = "0")
          pantalla = numDisplay.join("")
          display.innerHTML = pantalla
        }
      }
    }
    cero.onmouseup = function(e){
      e.preventDefault()
      cero.style.transform = "scale(1, 1)"
    }
    on.onmousedown = function(e){
      e.preventDefault()
      on.style.transform = "scale(0.9, 0.9)"
      pantalla = 0
      numDisplay = []
      contador = 0
      resultado = 0
      contadorSigno = 0
      display.innerHTML = "0"
    }
    on.onmouseup = function(e){
      e.preventDefault()
      on.style.transform = "scale(1, 1)"
    }
    sign.onmousedown = function(e){
      e.preventDefault()
      sign.style.transform = "scale(0.9, 0.9)"
      if (display.innerHTML == "0"){

      }else{
        contadorSigno = contadorSigno + 1
        if (contadorSigno % 2 == 0 ) {
          pantalla = pantalla.substring(1)
          display.innerHTML = pantalla
          numDisplay.shift()
        }else{
          numDisplay.unshift(display.innerHTML = "-")
         pantalla = numDisplay.join("")
         //signo = pantalla
          display.innerHTML = pantalla
        }
      }
    }
    sign.onmouseup = function(e){
      e.preventDefault()
      sign.style.transform = "scale(1, 1)"

    }
    suma.onmousedown = function(e){
      e.preventDefault()
      suma.style.transform = "scale(0.9, 0.9)"

      operando = 0
      numDisplay = []
      operando = pantalla
      operador = 1
      pantalla = []
      display.innerHTML = []
    }
    suma.onmouseup = function(e){
      e.preventDefault()
      suma.style.transform = "scale(1, 1)"

    }
    resta.onmousedown = function(e){
      e.preventDefault()
      resta.style.transform = "scale(0.9, 0.9)"

      operando = 0
      numDisplay = []
      operando = pantalla
      operador = 2
      pantalla = []
      display.innerHTML = []
    }
    resta.onmouseup = function(e){
      e.preventDefault()
      resta.style.transform = "scale(1, 1)"
    }
    por.onmousedown = function(e){
      e.preventDefault()
      por.style.transform = "scale(0.9, 0.9)"

      operador = 3
      operando = 0
      numDisplay = []
      operando = pantalla
      display.innerHTML = []
      pantalla = []
    }
    por.onmouseup = function(e){
      e.preventDefault()
      por.style.transform = "scale(1, 1)"
    }
    dividido.onmousedown = function(e){
      e.preventDefault()
      dividido.style.transform = "scale(0.9, 0.9)"

      operador = 4
      operando = 0
      numDisplay = []
      operando = pantalla
      display.innerHTML = []
    }
    dividido.onmouseup = function(e){
      e.preventDefault()
      dividido.style.transform = "scale(1, 1)"
    }
    igual.onmousedown = function(e){
      e.preventDefault()
      igual.style.transform = "scale(0.9, 0.9)"

      if (operador == 1){
        a = parseFloat(operando)
        b = parseFloat(pantalla)
        Calculadora.operSumar(a, b, resultado)
        a = 0
        b = 0
        pantalla = 0
        resultado = resultado.toString()
        resultado = resultado.substring(0, 8)
        display.innerHTML = resultado
        resultado = parseFloat(resultado)


      }else if (operador  == 2) {
        a = parseFloat(operando)
        b = parseFloat(pantalla)
        //resultado = 0
        if (resultado == 0){
          self.operRestar(a, b)
        }else{
          self.operRestar(resultado, b)
        }
        pantalla = 0
        operando = 0
        resultado = resultado.toString()
        resultado = resultado.split()
        if (resultado.length >= 8){

        }else{
          display.innerHTML = resultado
        }
      }else if (operador == 3){
        a = parseFloat(operando)
        b = parseFloat(pantalla)
        if (resultado == 0){
          self.operMultiplicar(a, b)
        }else{
          self.operMultiplicar(resultado, b)
      }
        operando = 0
        pantalla = 0
        resultado = resultado.toString()
        resultado = resultado.substring(0, 8)
        display.innerHTML = resultado
        resultado = parseFloat(resultado)

      } else{
        a = parseFloat(operando)
        b = parseFloat(pantalla)
        if (resultado == 0){
          self.operDivision(a, b)
        }else {
          self.operDivision(resultado, b)
        }
        operando = 0
        pantalla = 0
        resultado = resultado.toString()
        resultado = resultado.substring(0, 8)
        display.innerHTML = resultado
        resultado = parseFloat(resultado)
      }
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
      contador = contador + 1
      if (contador == 1 && display.innerHTML !== "0" ){
        numDisplay.push(display.innerHTML = ".")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }else if (display.innerHTML == "0" && contador == 1 ){
        numDisplay.push(display.innerHTML = "0.")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }else if (display.innerHTML == "0" || contador > 1){
        numDisplay.push(display.innerHTML = ".")
        pantalla = numDisplay.join("")
        display.innerHTML = pantalla
      }
    }
    punto.onmouseup = function(e){
      e.preventDefault()
      punto.style.transform = "scale(1, 1)"
    }
  },

  operSumar: function(num1, num2, num3){
    resultado = num1 + num2 + num3
  },

  operRestar: function(num1, num2){
    resultado = num1 - num2
  },

  operMultiplicar: function(num1, num2){
    resultado = num1 * num2
  },

  operDivision: function(num1, num2){
    resultado = num1 / num2
  }
}


Calculadora.init()
