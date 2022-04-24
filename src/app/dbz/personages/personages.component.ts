import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personagem } from 'src/app/interfaces/personagem';

@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html',
  styleUrls: ['./personages.component.css']
})
export class PersonagesComponent implements OnInit {
  @Output() emitterPersonagem: EventEmitter<Personagem> = new EventEmitter();

  @Input() personagens: Personagem[] = [];


  public personagem: Personagem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  removePersonagem(index: number){
    this.emitterPersonagem.emit(this.personagem);
    console.log('Personagem: ', this.personagens[index]);
  }

}
