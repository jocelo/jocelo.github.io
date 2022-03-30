import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { s3VideoURL } from '../constants';

import { faLanguage, faLaptopCode } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-borrar-lineas-vs-code',
  templateUrl: './borrar-lineas-vs-code.component.html',
  styleUrls: ['./borrar-lineas-vs-code.component.scss']
})
export class BorrarLineasVsCodeComponent implements OnInit {
  @ViewChild('deletecodeline') deletecodeline: ElementRef;

  faLaptopCode = faLaptopCode;
  faLanguage = faLanguage;
  postTitle = 'Eliminando lineas de código en VSCode';

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
