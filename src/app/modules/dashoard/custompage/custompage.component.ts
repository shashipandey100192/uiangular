import { Component } from '@angular/core';

@Component({
  selector: 'app-custompage',
  templateUrl: './custompage.component.html',
  styleUrls: ['./custompage.component.scss']
})
export class CustompageComponent {

mydate:any = new Date().getDate();
currentyear:any = new Date().getFullYear();

}
