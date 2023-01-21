import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-myform1',
  templateUrl: './myform1.component.html',
  styleUrls: ['./myform1.component.scss']
})
export class Myform1Component {
  // myform1=new FormGroup({
  //   firstname:new FormControl('kumar',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
  //   lastname:new FormControl('singh',Validators.required),
  //   email:new FormControl('kumar@gmail.com',Validators.required),
  //   cusdate:new FormControl(''),
  // })
  submitted = false;

  form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  });
  
  
  get f(): any {
    return this.form.controls;
  }
  
  loginsubmit():void{
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  
    console.log(this.form.value);
  }
  
  


}
