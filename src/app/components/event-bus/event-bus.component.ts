import { Component, OnInit } from '@angular/core';
import {ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE} from './event-bus';
import {testLessons} from '../shared/models/lessons-dumb-data';
import {Lesson} from '../shared/models/lesson.model';


@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.scss']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  private lessons: Lesson[] = [];

  ngOnInit() {
    console.log('TOP LEVEL COMPONENT BROADCASTED ALL LESSONS!!!');
    this.lessons = testLessons.slice(0);
    setTimeout(() => {
      this.lessons.push({
        id: Math.random(),
        description: 'New lesson arrifing from the backend',
        completed: false,
        duration: '1000'
      });
      globalEventBus.notifyEventBusObserver(LESSONS_LIST_AVAILABLE, this.lessons);
    }, 10000);
  }

  addLesson(lessonText: string) {
    globalEventBus.notifyEventBusObserver(ADD_NEW_LESSON, lessonText);
  }


}
