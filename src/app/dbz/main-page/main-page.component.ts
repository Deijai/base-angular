import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personagem } from 'src/app/interfaces/personagem';
import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public ps: Personagem[] = [];
  public novoPersonagem: Personagem = {
    name: '',
    poder: 0
  };

  constructor(private dbz: DbzService){}

  ngOnInit(): void {}

  public receberEmitter(form: FormGroup) {
    if( form.valid ){
      this.novoPersonagem.name = form.value.name;
      this.novoPersonagem.poder = form.value.poder;
      this.ps.push(...[this.novoPersonagem])
      debugger;
      form.reset();

    }

  }

  public receberEmitterPersonagem(personagem: Personagem): void{
   console.log('Remove: ', personagem)
  }
}
