import { Component, OnInit } from '@angular/core';
import {EventBusObserver, globalEventBus, LESSONS_LIST_AVAILABLE} from '../event-bus/event-bus';
import {Lesson} from '../shared/models/lesson.model';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit, EventBusObserver {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lesson List Component is registred as observer...');
    globalEventBus.registerEventBusObserver(LESSONS_LIST_AVAILABLE, this);
  }


  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('LessonsListComponent RECEIVED DATA...');
    this.lessons = data;
  }

}
