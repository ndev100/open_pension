import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'op-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filters;
  constructor() { }

  ngOnInit() {
    this.filters = [1, 2, 3, 4, 5];
  }

}
