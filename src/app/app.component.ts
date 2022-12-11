import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uiangular';
  a = "8000";
  b =false;
 c:number = 50
abc = ()=>
{
  alert("hello");
}



  


}
