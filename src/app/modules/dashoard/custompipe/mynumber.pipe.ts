import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mynumber'
})
export class MynumberPipe implements PipeTransform {

  transform(value:any): any {
    // console.log(value+"ooooo");
    let days:any = 5;
    let second:any = value;
    let third:any = second - days;
    return third;
   
  }

}
