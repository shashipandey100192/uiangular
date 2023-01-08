import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-myreactiveform',
  templateUrl: './myreactiveform.component.html',
  styleUrls: ['./myreactiveform.component.scss']
})
export class MyreactiveformComponent {
  myform=new FormGroup({
    firstname:new FormControl('kumar'),
    lastname:new FormControl('singh'),
    email:new FormControl('kumar@gmail.com'),
    cusdate:new FormControl(''),
  })

public a:string ='';

  mysubmit()
  {
    console.log(this.myform.value);
    
  }

}
