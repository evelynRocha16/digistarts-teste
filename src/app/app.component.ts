import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testeDigistarts';

  public formNumeros: FormGroup;
  public numeros = [];
  public n: Number;


  constructor(private formBuilder: FormBuilder) {
    this.formNumeros = this.formBuilder.group({
      num: [this.n]
    });
  }
  
  // Adiciona um número por vez no array através do formulário
  adicionarArray() {
    
  }

  // Faz o cálculo, não trazendo os valores repetidos e ordem crescente
  adicionar() {
    let n = this.numeros[0];
    let variosN = this.numeros.filter(i => i != n);

    variosN.forEach(n => 1<=n && n<=1000);

    let k = variosN.filter((i,p) => variosN.indexOf(i) === p).sort((a,b) => a - b);
    console.log(k);
  }
}


