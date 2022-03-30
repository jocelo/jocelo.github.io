import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { s3VideoURL } from '../constants';

import { faLanguage, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-whole-line-vs-code',
  templateUrl: './delete-whole-line-vs-code.component.html',
  styleUrls: ['./delete-whole-line-vs-code.component.scss']
})
export class DeleteWholeLineVsCodeComponent implements OnInit {
  @ViewChild('deletecodeline') deletecodeline: ElementRef;

  faLaptopCode = faLaptopCode;
  faLanguage = faLanguage;
  postTitle = 'Deleting code lines in VS Code';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Jocelo blog');
  }

  public onVisible() {
    const videoName = `delete_code_line_720.mp4`;
    const fullUrl = `${s3VideoURL}${videoName}`;
    let videoElement: HTMLVideoElement;

    videoElement = this.deletecodeline.nativeElement;

    videoElement.src = fullUrl;
    videoElement.load();
    videoElement.play();
  }

}
