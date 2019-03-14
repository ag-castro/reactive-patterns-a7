import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event',
  templateUrl: './browser-event.component.html',
  styleUrls: ['./browser-event.component.scss']
})
export class BrowserEventComponent implements OnInit {

  constructor() { }

  hoverSection: HTMLElement;

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', this.onMouseMove);
    this.hoverSection.addEventListener('click', this.onClick);
  }

  onMouseMove = (event: MouseEvent) => {
    console.log(event);
  }

  onClick = (event: Event) => {
    console.log('Click', event);
  }

  unsubscribe = () => {
    console.log('Called Method!');
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove);
  }

}
