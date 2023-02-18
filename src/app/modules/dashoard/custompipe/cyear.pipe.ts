import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cyear'
})
export class CyearPipe implements PipeTransform {

  transform(value:any): any {

let oldyear:any = 1992;
let newyear:any = value;
    return newyear-oldyear;
  }

}
