import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ice-and-fire-book',
  templateUrl: './ice-and-fire-book.component.html',
  styleUrls: ['./ice-and-fire-book.component.css']
})
export class IceAndFireBookComponent implements OnInit {

  @Input() book: any;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
