import { Component, OnInit } from '@angular/core';
import {testLessons} from '../shared/models/lessons-dumb-data';
import {Lesson} from '../shared/models/lesson.model';
import {store} from './app-data';


@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.scss']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('TOP LEVEL COMPONENT BROADCASTED ALL LESSONS!!!');

    store.initLessonsList(testLessons.slice(0));

    setTimeout(() => {
      const newLesson: Lesson = {
        id: Math.random(),
        description: 'New lesson arriving from the backend'
      };
      store.addLesson(newLesson);
    }, 10000);
  }

  addLesson(lessonText: string) {
    const newLesson: Lesson = {
      id: Math.random(),
      description: lessonText
    };
    store.addLesson(newLesson);
  }


}
