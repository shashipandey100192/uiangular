import { Component, OnInit } from '@angular/core';
import { GenralService } from 'src/app/service/genral.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
constructor( private myservice: GenralService){}
singled:any;

ngOnInit():void
{
  this.singledata();
}


singledata()
{
  this.myservice.getsingledata().subscribe((y)=>{
    this.singled = y;
    console.log(this.singled);

  })
}



}
