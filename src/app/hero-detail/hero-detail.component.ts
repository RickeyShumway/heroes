import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() done = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  whenDone(): void {
    console.log('clicked');
    this.done.emit(this.hero?.name);
  }

}
