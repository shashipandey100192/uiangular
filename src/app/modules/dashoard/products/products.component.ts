import { Component, OnInit } from '@angular/core';
import { GenralService } from 'src/app/service/genral.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  id:any;
constructor( private myservice: GenralService, private myroute1:ActivatedRoute){}
singled:any = [];

ngOnInit():void
{
 this.id = this.myroute1.snapshot.paramMap.get('id');
 console.log(this.id);
 this.singledata();
}


singledata() {
  this.myservice.getsingledata(this.id).subscribe((x) => {
    this.singled = x;
    console.log(this.singled);
    // console.log(typeof(this.singled));
  });
}





}
