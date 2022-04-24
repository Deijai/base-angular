import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonagesComponent } from './personages/personages.component';
import { AddPersonagemComponent } from './add-personagem/add-personagem.component';



@NgModule({
  declarations: [MainPageComponent, PersonagesComponent, AddPersonagemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [MainPageComponent, PersonagesComponent, AddPersonagemComponent]
})
export class DbzModule { }
