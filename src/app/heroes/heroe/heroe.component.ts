import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public name: string = 'Iron Man'
  public old: number = 27;

  constructor() { }

  ngOnInit(): void {
  }

  get nameCapitalizado(): string{
    return this.name.toUpperCase();
  }
  public getName(): string {
    return `${this.nameCapitalizado} => ${this.old}`;
  }

}
