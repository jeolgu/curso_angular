import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso1';
  resultado = '';
  res = 0;
  operador = "";
  operadores = ["+", "-", "*", "/"];
  borrar = false;

  BtnClick(valor: string | number) {
    console.log("clicado");

    if (this.borrar) {
      this.res = 0;
      this.resultado = "";
      this.borrar = false;
    }

    // this.title = "Holiiii mundo222!!!";
    if (valor.toString() == "=") {
      this.resultado = this.res.toString();
      this.operador = "";
      this.res = 0;
      this.borrar = true;
    }
    else if (this.operadores.includes(valor.toString())) {
      this.operador = valor.toString();
      this.resultado += valor.toString();
    }
    else if (valor.toString() == "C") {
      this.operador = "";
      this.res = 0;
      this.resultado = "";
      this.borrar = true;
    }
    else {
      this.resultado += valor.toString() != 'neg' ? valor.toString() : "-";
      switch (this.operador) {
        case "+":
          this.res += Number(valor.toString());
          break;
        case "-":
          debugger;
          this.res -= Number(valor.toString());
          debugger;
          break;
        case "*":
          this.res = this.res * Number(valor.toString());
          break;
        case "/":
          this.res = this.res / Number(valor.toString());
          break;
        case "neg":
          this.res = this.res * (-1);
          break;
        default:
          this.res = Number(valor.toString());
      }
      this.operador = "";
    }
  }
}
