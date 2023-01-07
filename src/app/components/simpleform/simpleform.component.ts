import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.scss']
})
export class SimpleformComponent {

  myform(xyz:NgForm)
  {
    console.log(xyz.value);
  }

  public mydata:any={};

  myform1(xyz:NgForm)
  {
    console.log(xyz.value);
    console.log(this.mydata);
  }


}
