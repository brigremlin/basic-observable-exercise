import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  foodSearch: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(map(data=> {
      return "The food you searched for " + data["search"].toUpperCase();
    })).subscribe((data: string) => {
      this.foodSearch = data
    });
  }
}
