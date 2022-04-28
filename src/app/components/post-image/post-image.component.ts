import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {
  @Input() src: string;
  @Input() desc: string;
  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
