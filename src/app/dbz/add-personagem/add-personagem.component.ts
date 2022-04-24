import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personagem } from 'src/app/interfaces/personagem';

@Component({
  selector: 'app-add-personagem',
  templateUrl: './add-personagem.component.html',
  styleUrls: ['./add-personagem.component.css'],
})
export class AddPersonagemComponent implements OnInit {

  @Output() emitterPersonagem: EventEmitter<FormGroup> = new EventEmitter();

  public formPersonagem: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    poder: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  public add() {
    if( this.formPersonagem.valid ) {
      this.emitterPersonagem.emit(this.formPersonagem);
    }
  }

}
