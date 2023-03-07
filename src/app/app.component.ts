import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public task: any = {
    title: 'Do laundry',
    description: 'Wash and dry clothes',
    completed: false,
  };

  constructor() {}

  ngOnInit() {}
}
