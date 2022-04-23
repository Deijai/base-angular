import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Iroman', 'Superman', 'Thor']
  heroesDel: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public deletar(index: number): void {
    this.heroesDel = [...this.heroesDel, ...this.heroes.splice(index, 1)];
  }

  public add(): void {
    this.heroes.push('Add Heroe');
  }

}
