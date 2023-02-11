import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

@Input() xyz: string | undefined

@Output() newItemEvent = new EventEmitter<string>();
addNewItem(value: string) {
  this.newItemEvent.emit(value);
}

}
