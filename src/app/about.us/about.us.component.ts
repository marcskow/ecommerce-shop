import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about.us',
  templateUrl: './about.us.component.html',
  styleUrls: ['./about.us.component.css']
})
export class AboutUsComponent implements OnInit {

  kraje = [{ country: "Polska", population: "38mln"}, { country: "Niemcy", population: "64mln"}]

  constructor() { }

  ngOnInit() {
  }

}
