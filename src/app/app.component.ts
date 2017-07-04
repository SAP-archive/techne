import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    PageScrollConfig.defaultDuration = 100;
  }

}
