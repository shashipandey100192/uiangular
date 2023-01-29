
import { Component, OnInit } from '@angular/core';
import { GenralService } from 'src/app/service/genral.service';


@Component({
  selector: 'app-apidetail',
  templateUrl: './apidetail.component.html',
  styleUrls: ['./apidetail.component.scss']
})
export class ApidetailComponent implements OnInit{

  posts:any;

  constructor(private service:GenralService) {}

  ngOnInit() {
  
    this.displayData();
}



displayData() {
  this.service.getAllData().subscribe(response => {
    this.posts = response;
    console.log(this.posts);
  });
}

}
