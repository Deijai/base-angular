import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [HeroeComponent, ListarComponent],
  imports: [
    CommonModule
  ],
  exports:[HeroeComponent, ListarComponent]
})
export class HeroesModule { }
