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
  mystorage:any;
  form = new FormGroup({
    // username: new FormControl('ooo',Validators.required),
    username: new FormControl('ooo',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('sing',[Validators.required])
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
    // localStorage.setItem("mydata","[{name:'ravi',age:'50',height:'10ft'}]");
    localStorage.setItem("mydatas",JSON.stringify(this.form.value));
  }

  getValues()
  {
    this.mystorage=localStorage.getItem('mydatas');
    console.log(this.mystorage);
  }




 

  
  


}
