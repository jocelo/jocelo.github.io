import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { s3VideoURL } from '../constants';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vscode-format-on-save',
  templateUrl: './vscode-format-on-save.component.html',
  styleUrls: ['./vscode-format-on-save.component.scss']
})
export class VscodeFormatOnSaveComponent implements OnInit {
  @ViewChild('formatonsave') formatonsave: ElementRef;
  @ViewChild('codesettings') codesettings: ElementRef;
  @ViewChild('jsonsettings') jsonsettings: ElementRef;

  faLaptopCode = faLaptopCode;
  postTitle = 'Formatting source files with VSCode';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.postTitle + ' - Alfredo blog');
  }

  public onVisible(videoId: string) {
    const videoName = `${videoId}_720.mp4`;
    const fullUrl = `${s3VideoURL}${videoName}`;

    let videoElement: HTMLVideoElement;

    if (videoId === 'formatonsave') {
      videoElement = this.formatonsave.nativeElement;
    } else if (videoId === 'codesettings') {
      videoElement = this.codesettings.nativeElement;
    } else if (videoId === 'jsonsettings') {
      videoElement = this.jsonsettings.nativeElement;
    }

    videoElement.src = fullUrl;
    videoElement.load();
    videoElement.play();
  }

}
