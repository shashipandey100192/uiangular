import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-myreactiveform',
  templateUrl: './myreactiveform.component.html',
  styleUrls: ['./myreactiveform.component.scss']
})
export class MyreactiveformComponent {
  myform=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    cusdate:new FormControl(''),
  })


  mysubmit()
  {
    console.log(this.myform.value);

  }

}
