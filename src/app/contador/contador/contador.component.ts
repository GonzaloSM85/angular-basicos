import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{titulo}} </h1>

        <button (click)="sumar()"> + 1 (fx )</button>
        <button (click)="numero = numero + 1;"> + 1 </button>
        <button (click)="acumular(1)"> Acumular + 1 </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-1)"> Decrementar - 1 </button>
        <button (click)="numero = numero - 1;"> - 1 </button>
        <button (click)="restar()"> - 1 (fx) </button>

        <br><br>

        <h3>La base es: <strong>{{base}}</strong> </h3>
        <button (click)="acumular(base)"> Acumular Base {{base}}</button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)"> Decrementar Base {{base}}</button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador app';
    numero: number = 10;
    base: number = 5;
  
    sumar() {
      this.numero += 1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular(valor: number){
      this.numero += valor;  
    }
}
