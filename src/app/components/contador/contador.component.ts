import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  ngOnInit(): void {

  }
  public title = 'Contador App';
  public n: number = 0;
  public base: number = 5;


  add(){
    this.base++
  }

  rem(){
    if( this.base > 0) {
      this.base--;
    }
  }

  public acumular(v: number){
    this.base += v;
  }

}
