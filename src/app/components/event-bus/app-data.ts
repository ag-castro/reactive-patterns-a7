import * as _ from 'lodash';
import {Lesson} from '../shared/models/lesson.model';


export interface ObserverEventBus {
  next(data: any);
}

export interface ObservableEventBus {
  subscribe(obs: ObserverEventBus);
  unsubscribe(obs: ObserverEventBus);
}

interface SubjectEventBus extends ObserverEventBus, ObservableEventBus {}

class SubjectImplementation implements SubjectEventBus {

  private observers: ObserverEventBus[] = [];

  next(data: any) {
    this.observers.forEach(obs => obs.next(data));
  }

  subscribe(obs: ObserverEventBus) {
    this.observers.push(obs);
  }

  unsubscribe(obs: ObserverEventBus) {
    _.remove(this.observers, item => item === obs);
  }

}


class DataStore implements ObservableEventBus {

  private lessons: Lesson[] = [];
  private lessonsListSubject = new SubjectImplementation();

  subscribe(obs: ObserverEventBus) {
    this.lessonsListSubject.subscribe(obs);
    obs.next(this.lessons);
  }

  unsubscribe(obs: ObserverEventBus) {
    this.lessonsListSubject.unsubscribe(obs);
  }

  initLessonsList(newList: Lesson[]) {
    this.lessons = _.cloneDeep(newList);
    this.broadcast();
  }

  addLesson(newLesson: Lesson) {
    this.lessons.push(_.cloneDeep(newLesson));
    this.broadcast();
  }

  toggleLessonViewed(toggled: Lesson) {
    const lesson = _.find(this.lessons,
        lessonItem => lessonItem.id === toggled.id);
    lesson.completed = !lesson.completed;
    this.broadcast();
  }

  deleteLesson(deleted: Lesson) {
    _.remove(this.lessons,
        lesson => lesson.id === deleted.id);
    this.broadcast();
  }

  broadcast() {
    this.lessonsListSubject.next(_.cloneDeep(this.lessons));
  }


}

export const store = new DataStore();
