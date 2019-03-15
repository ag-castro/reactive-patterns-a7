import { Component } from '@angular/core';
import {Lesson} from '../shared/models/lesson.model';
import {store, ObserverEventBus} from '../event-bus/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements ObserverEventBus {

  lessonsCounter = 0;

  constructor() {
    console.log('lesson list compoente is registred as observer');
    store.lessonsList$.subscribe(this);

  }

  next(data: Lesson[]) {
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  }
}
