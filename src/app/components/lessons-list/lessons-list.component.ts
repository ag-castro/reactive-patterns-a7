import { Component } from '@angular/core';
import {Lesson} from '../shared/models/lesson.model';
import {store, ObserverEventBus} from '../event-bus/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements ObserverEventBus {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lesson List Component is registred as observer...');
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('LessonsListComponent RECEIVED DATA...');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    console.log('togglin lesson...');
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

}
