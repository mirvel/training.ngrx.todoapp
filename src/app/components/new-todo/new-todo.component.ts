import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import * as ToDoActions from 'actions/item.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css'],
})
export class NewTodoComponent implements OnInit, AfterViewInit {
  @ViewChild('inputTask') inputTaskElementRef!: ElementRef;
  constructor() {}
  @HostListener('document:keydown.enter', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    console.log('Enter pressed');
    console.log(event.code);
    ToDoActions.addItem({
      item: {
        title: this.inputTaskElementRef.nativeElement.value,
        completed: false,
      },
    });
  }
  ngAfterViewInit() {}

  ngOnInit() {}
}
