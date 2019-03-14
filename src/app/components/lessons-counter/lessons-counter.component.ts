import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from '../event-bus/event-bus';
import {Lesson} from '../shared/models/lesson.model';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements OnInit {

  lessonsCounter = 0;

  constructor() {
    console.log('lesson list compoente is registred as observer');
    globalEventBus.registerEventBusObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerEventBusObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1,
    });
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  }

}
