import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {

mydata=[
  {
    name:'ravi',
    age:20
  },
  {
    name:'mohan',
    age:40
  },
  {
    name:'rohit',
    age:60
  },
  {
    name:'pankaj',
    age:25
  },
  {
    name:'pooja',
    age:30
  },
  {
    name:'pandey',
    age:40
  }
]

name='mohan';



}

