import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    sentencia = "0"
    n1: number
    op: String = "0"
    resultado: number
    calculo: String

    obtenerNumero(numero: number){
      if((numero == 0 && this.op == '0')){
        return
      } else {
        if (this.n1 == undefined && this.op == '0'){
          this.sentencia = ''+numero
          this.op = ''+numero
        }else if(this.n1 != 0 && this.op == "0"){
          this.sentencia = this.sentencia + numero
          this.op = ''+numero
        } else{
          this.sentencia = this.sentencia + numero
          this.op = this.op + ""+numero
        }
      }
    }

    operacion(operador: String){
      if(this.op != "0"){
        if(operador == "="){
          this.igual();
        }else{
          this.calculo = operador
          this.n1 = +this.op
          this.op = "0"
          this.sentencia = this.sentencia + ' ' + operador + ' '
        }
      }
    }

    limpiar(){
      this.sentencia = "0"
          this.n1 = null
          this.op = "0"
          this.resultado = null
          this.calculo = ""
    }

    igual(){
      let n2: number = +this.op
      switch (this.calculo){
        case "+":
          this.resultado = this.n1 + n2
          break;
        case "-":
          this.resultado = this.n1 - n2
          break;
        case "x":
          this.resultado = this.n1 * n2
          break;
        case "/": 
          this.resultado = this.n1 / n2
          break;
        default:
          this.igual();
      }
      this.sentencia = '' + (this.resultado)
    }

    restar(){
        
    }

    multiplicar(){
        
    }

    dividir(){
        
    }
}
