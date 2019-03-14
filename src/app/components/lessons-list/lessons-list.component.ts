import { Component } from '@angular/core';
import {ADD_NEW_LESSON, EventBusObserver, globalEventBus, LESSONS_LIST_AVAILABLE} from '../event-bus/event-bus';
import {Lesson} from '../shared/models/lesson.model';
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements EventBusObserver {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lesson List Component is registred as observer...');
    globalEventBus.registerEventBusObserver(LESSONS_LIST_AVAILABLE, this);
    globalEventBus.registerEventBusObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText,
          duration: '9:00'
        });
      }
    });
  }

  notify(data: Lesson[]) {
    console.log('LessonsListComponent RECEIVED DATA...');
    this.lessons = data.slice(0);
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('togglin lesson...');
    lesson.completed = !lesson.completed;
  }

  delete(deleted: Lesson) {
    this.lessons = _.remove(this.lessons,
        lessonItem => lessonItem.id === deleted.id);
  }

}
