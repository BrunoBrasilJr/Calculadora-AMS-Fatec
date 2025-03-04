import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  //somar
  onClickSoma(){
    this.resultado = this.num1 + this.num2;
  }
  onClickSubtrair(){
    this.resultado = this.num1 - this.num2;
  }
  onClickDividir(){
    this.resultado = this.num1 / this.num2;
  }
  onClickMultiplicar(){
    this.resultado = this.num1 * this.num2;
  }
  onClickPotenciar(){
    this.resultado = Math.pow(this.num1, this.num2);
  }
  onClickMedia(){
    this.resultado = (this.num1 + this.num2) / 2;
  }

}
