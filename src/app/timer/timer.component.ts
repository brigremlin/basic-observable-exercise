import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.count, 1000);
    console.log(this.count);
  }


}
