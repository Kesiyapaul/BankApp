import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  //child property should be hold by decarator 
@Input() item:string|undefined

@Output() oncancel = new EventEmitter()
  
constructor() { 

    console.log(this.item);
    
  }

ngOnInit(): void {
  }
  //emit is the method in the emitter class to occur the event
  cancel()
  {
    this.oncancel.emit()
  }

}
