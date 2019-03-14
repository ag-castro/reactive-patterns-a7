import { Component, OnInit } from '@angular/core';
import {globalEventBus, LESSONS_LIST_AVAILABLE} from './event-bus';
import {testLessons} from '../shared/models/lessons-dumb-data';

@Component({
  selector: 'event-bus',
  templateUrl: './event-bus.component.html',
  styleUrls: ['./event-bus.component.scss']
})
export class EventBusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('TOP LEVEL COMPONENT BROADCASTED ALL LESSONS!!!');
    globalEventBus.notifyEventBusObserver(LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

}
