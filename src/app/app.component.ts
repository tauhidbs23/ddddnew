import { Component, OnInit } from '@angular/core';
import { TestService } from "./services/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'newtec';
  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.testService.getData().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
      this.title = error.message;
    });

  }
}
