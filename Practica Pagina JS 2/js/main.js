
class Numeros{
  regresar(){
    window.history.back()
  }
      //calcular el total por medio del evento del teclado
    //pertenece al metodo dar vuelto
    //el evento 'onkeyup' es un evento que dectecta cuando el teclado del usuario
    //se deja de precionar una tecla
    
    calcularTotal() {
      let cantidad_o = parseInt(document.getElementById("cantidad").value);
      let precio = parseFloat(document.getElementById("precio").value);
      if (cantidad_o && precio) {
          const iva=document.getElementById("checkbox");
          if (iva.checked) {
              let valorTotal = cantidad_o * precio
              let total_iva = valorTotal + (valorTotal*0.12);
              document.getElementById("Total").value = total_iva.toFixed(2);
          }else {
              document.getElementById("Total").value = (cantidad_o * precio).toFixed(2);
          }
      }else {
          document.getElementById("Total").value = 0.0;
      }
      
  } 
  //calcula el iva al momento de darle click al checkbox :D
  calcularIva() {
      let cantidad_o = parseInt(document.getElementById("cantidad").value);
      let precio = parseFloat(document.getElementById("precio").value);
      if (cantidad_o && precio) {
          let valorTotal = cantidad_o * precio
          let total_iva = valorTotal + (valorTotal*0.12);
          document.getElementById("Total").value = total_iva.toFixed(2);
      }
  }
  //metodo que devuelve el valor del vuelto 
  vuelto(){
      let cantidad_o=document.getElementById("cantidad").value
      cantidad_o=parseInt(cantidad_o)
      let precio=document.getElementById("precio").value
      precio=parseFloat(precio)
      let pago=document.getElementById("pago").value
      pago=parseFloat(pago)
      const iva=document.getElementById("checkbox");
      let vuelto=document.getElementById("resp")
      let valorTotal=cantidad_o*precio
      let totalIva=0
      let valorFinal=0

      if (iva.checked) {
         totalIva=valorTotal+valorTotal*0.12
      }else{
          totalIva=valorTotal
      }
      
      if(totalIva==pago){
          console.log("pago exacto")
          vuelto.textContent=`Pago exacto`
      }else{
          if(totalIva>pago){
              console.log("Pago insuficiente")
              vuelto.textContent=`Pago incompleto`
          }else{
              if(totalIva<pago){
                  valorFinal=pago-totalIva
                  valorFinal=valorFinal.toFixed(2)
                  vuelto.textContent=`Su vuelto es ${valorFinal}`
                  console.log("Su vuelto es",valorFinal)
              }
          }
      }
  }

    divisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let divisores = "";
        for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            divisores += i + " ";
          }
        }
        resp.textContent = `${divisores}`
    }
    ObtenerSumaD(num){
      let sumaDivisores=0
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          sumaDivisores = sumaDivisores + i
        }
      }
      return sumaDivisores;
    }
    sumaDivisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let sumaD = this.ObtenerSumaD(num);
        resp.textContent = `La suma de los divisores de ${num} es : ${sumaD}`
    }
    cantidadDivisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let c = 0
      
        for (let i = 1; i <= num; i++) {
          if (num % i === 0) {
            c = c + 1;
          }
        }
        resp.textContent = `La cantidad de divisores de ${num} es : ${c}`
    }
    perfecto(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let suma = 0;
        
        for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            suma += i;
          }
        }
        
        if (suma === num) {
          resp.textContent = `El número ${num} es perfecto.`;
        } else {
          resp.textContent = `El número ${num} no es perfecto.`;
        }
    }
    invertido(){
        let num = parseInt(document.getElementById("inv").value);
        let resp = document.getElementById("resp");
        resp.textContent = ""
        let numeroInvertido = 0;
      
        while (num > 0) {
          numeroInvertido = numeroInvertido * 10 + (num % 10);
          num = Math.trunc(num / 10);
        }
        resp.textContent = `El numero invertido es: ${numeroInvertido}`;
    }
    amigos(){
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resp = document.getElementById("resp");
      let sumaDivisores1 = this.ObtenerSumaD (num1);
      let sumaDivisores2 = this.ObtenerSumaD (num2);

      if (sumaDivisores1 === sumaDivisores2) {
        resp.textContent = `El numero ${num1} y el numero ${num2} son amigos`;
      } else{
        resp.textContent = `El numero ${num1} y el numero ${num2} no son amigos`;

      }
    }
    cantidadD(){
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");
      let contador = 0;
      let numAbs = Math.abs(num); // Tomamos el valor absoluto del número para asegurarnos de contar los dígitos correctamente
    
      while (numAbs >= 1) {
        contador++;
        numAbs = Math.floor(numAbs / 10);
      }
    
      resp.textContent = `El número ${num} tiene ${contador} dígitos`;
    }
    exponente(){
      let num = parseInt(document.getElementById("num").value);
      let exp = parseInt(document.getElementById("exp").value);
      let resp = document.getElementById("resp");
      let resultado = 1;

      for (let i = 0; i < exp; i++) {
        resultado *= num;
      }
      resp.textContent = `El numero ${num} elevado a ${exp} es igual a :  ${resultado}`;
    }
    factorial(){
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");

      let factorial = 1;

      for(let i = 1 ; i <= num ; i++){
        factorial *= i;
      }
      resp.textContent = `El factorial de ${num} es : ${factorial}`;
    }
    fibonaci(){
      let a = 0;
      let b = 1;
      let c = 0;
      let cont = 2;
      let num = parseInt(document.getElementById('num').value);
      let resp = document.getElementById('resp');
      let serie = a.toString()+ "<br>" + b.toString() //"0 1"
    
      while(cont < num){
        c = a + b;
        serie = serie + "<br> " + c.toString() // "0 1 1 2 3 5"
        a = b;
        b = c;
        cont++
      }
      resp.innerHTML = serie;
    }
    ObtenerP(num1){
      let c = 0;
      for (let i = 1; i <= num1; i++){
        if (num1 % i === 0){
          c++;
        }
      }
      return c;
    }
    primo(){
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");
      let c1 = this.ObtenerP(num);
      if(c1 === 2){
        resp.textContent = `El numero ${num} es primo`;
      } else{
        resp.textContent = `El numero ${num} no es primo`;
      }
    }
    primoG(){
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resp = document.getElementById("resp");
      let c1 = this.ObtenerP (num1);
      let c2 = this.ObtenerP (num2);

      if (c1 && c2 && Math.abs(num1-num2)===2){
        resp.textContent = `El numero ${num1} y El numero ${num2} son primo gemelos`;
      } else{
        resp.textContent = `El numero ${num1} y El numero ${num2} no son primo gemelos`;
      }
    }
    tablaM(){
      let num1 = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");
      resp.textContent = "";
    
      let c1 = 1;
      while (c1 <= 12) {
        let resultado = num1 * c1;
        resp.textContent += `${num1} x ${c1} = ${resultado}\n`;
        c1++;
      }
    }
    multiplo() {
      let num = parseInt(document.getElementById("num1").value);
      let multi = parseInt(document.getElementById("multi").value);
      let resp = document.getElementById("resp");
    
      if (num % multi == 0) {
        resp.textContent = `${multi} Es múltiplo de ${num}`;
      } else {
        resp.textContent = `${multi} No es múltiplo de ${num}`;
      }
    }
}
const numero = new Numeros();
numero.multiplo();
// numero.vuelto();
numero.divisores();
numero.sumaDivisores();
numero.cantidadDivisores();
numero.perfecto();
numero.invertido();
numero.amigos();
numero.cantidadD();
numero.exponente();
numero.factorial();
numero.fibonaci();
numero.primo();
numero.primoG();
numero.tablaM();

