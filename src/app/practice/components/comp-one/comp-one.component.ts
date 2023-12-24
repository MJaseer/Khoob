import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit{

  dataFromParent = 'dataFromParent'
  dataFromChild!:string 

  onDataChanged(newData: string) {
    this.dataFromChild = newData;
  }

  ngOnInit(): void {

  }

  

}
