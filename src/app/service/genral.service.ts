import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenralService {
  id: string | null | undefined;

  constructor(private abc:HttpClient) { }

  private url = 'http://jsonplaceholder.typicode.com/posts';

  
getAllData(){
  return this.abc.get(this.url);
}


getsingledata(id:any){
    return this.abc.get<any>(`${this.url}/${id}`)
}



}
