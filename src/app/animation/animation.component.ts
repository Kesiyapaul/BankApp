import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("openclose",[
      state('open',
      style({
        height:'200px',
        width : '250px',
        backgroundColor: 'blue'
      })),
      state('close',
      style({
        height:'100px',
        width : '220px',
        backgroundColor: 'red'
      })),
      transition('open=>close',[
        animate('2s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  isOpen = true
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.isOpen = !this.isOpen
}
}
