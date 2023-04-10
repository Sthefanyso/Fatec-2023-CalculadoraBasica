import { Component } from '@angular/core';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent {
  //Atributos da Classe/Componente
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  somar(){
    this.result = this.num1 + this.num2;
  }
  subtrair(){
    this.result = this.num1 - this.num2;
  }
  multiplicar(){
    this.result = this.num1 * this.num2;
  }
  dividir(){
    this.result = this.num1 / this.num2;
  }
}
