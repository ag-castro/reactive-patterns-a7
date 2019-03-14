import * as _ from 'lodash';

export const LESSONS_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';
export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';

export interface EventBusObserver {
  notify(data: any);
}

interface EventBusSubject {
  registerEventBusObserver(eventType: string, obs: EventBusObserver);
  unregisterEventBusObserver(eventType: string, obs: EventBusObserver);
  notifyEventBusObserver(eventType: string, data: any);

}

class EnventBus implements EventBusSubject  {

  private eventBusObservers: {[key: string]: EventBusObserver[]} = {};

  registerEventBusObserver(eventType: string, obs: EventBusObserver) {
    this.observerPerEventType(eventType).push(obs);
  }

  unregisterEventBusObserver(eventType: string, obs: EventBusObserver) {
    _.remove(this.observerPerEventType(eventType), item => item === obs);
  }

  notifyEventBusObserver(eventType: string, data: any) {
    this.observerPerEventType(eventType)
      .forEach(obs => obs.notify(data));
  }

  private observerPerEventType(eventType: string): EventBusObserver[] {
    const observerPerType = this.eventBusObservers[eventType];
    if (!observerPerType) {
      this.eventBusObservers[eventType] = [];
    }
    return this.eventBusObservers[eventType];
  }
}

export const globalEventBus = new EnventBus();
