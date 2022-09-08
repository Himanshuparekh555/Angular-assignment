import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageSrc = 'assets/image/exela_logo.png'  
  imageAlt = 'Logo'

  classActive = false;

  public toggleField() {
    this.classActive = !this.classActive;  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
