import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenralService {

  constructor(private abc:HttpClient) { }

  private url = 'http://jsonplaceholder.typicode.com/posts';

  
getAllData(){
  return this.abc.get(this.url);
}


}
