
import { Component, OnInit } from '@angular/core';
import { GenralService } from 'src/app/service/genral.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-apidetail',
  templateUrl: './apidetail.component.html',
  styleUrls: ['./apidetail.component.scss']
})
export class ApidetailComponent implements OnInit{

  posts:any;
  id: string | null | undefined;
  // post1:[]=[];


  constructor(private service:GenralService, private route:ActivatedRoute) {}

  ngOnInit() {
  
    this.displayData();
    this.id = this.route.snapshot.paramMap.get('id');
}



// displayData() {
//   this.service.getAllData().subscribe(response => {
//     this.posts = response;
//     console.log(this.posts);
//   });
// }


displayData() {
  this.service.getAllData().subscribe((x) => {
    this.posts = x;
    console.log(this.posts);
  });
}


}
