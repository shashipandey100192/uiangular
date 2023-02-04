import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GenralService {
  id: string | null | undefined;

  constructor(private abc:HttpClient, private myroute:ActivatedRoute) { }

  private url = 'http://jsonplaceholder.typicode.com/posts';

  
getAllData(){
  return this.abc.get(this.url);
}
ngOnInit():void
{
  this.id = this.myroute.snapshot.paramMap.get('id');
  alert(this.id);
}


getsingledata(){
    return this.abc.get(this.url+"/"+this.id);
}



}
