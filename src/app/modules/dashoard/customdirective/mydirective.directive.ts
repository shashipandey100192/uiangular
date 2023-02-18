import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective{

  constructor(myelement:ElementRef) {
    myelement.nativeElement.style.color="red";
    myelement.nativeElement.style.backgroundColor="green";
    
   }

}
