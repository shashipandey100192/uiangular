import { Component ,Input, Output} from '@angular/core';

@Component({
  selector: 'app-mychild',
  templateUrl: './mychild.component.html',
  styleUrls: ['./mychild.component.scss']
})
export class MychildComponent {
 
@Input() abcd:string | undefined
@Input() myarray:number[]=[];

@Output() myoutput:string = "this is output data";

}
