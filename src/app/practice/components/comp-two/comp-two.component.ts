import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit, OnDestroy{

  @Output() outputData = new EventEmitter<string>()
  @Input() dataFromParent = 'dataFromParent'

  inputGroup = new FormGroup({
    inputData: new FormControl('')
  })


  ngOnInit(): void {
    this.inputGroup.valueChanges.subscribe((data) => {
      this.outputData.emit(data.inputData as string);
    })
  }

  ngOnDestroy(): void {
    
  }

}
