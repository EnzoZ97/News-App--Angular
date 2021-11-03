import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.css']
})
export class ListOfNewsComponent implements OnInit {
  @Input() List: any[] = []
  p: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
