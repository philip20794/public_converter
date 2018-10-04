import {Component, Injectable, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UploadComponent} from "../upload/upload.component";
import { saveAs } from 'file-saver';
import {throwError} from "rxjs";
import {AppComponent} from "../app.component";
import {RequestService} from "../services/request.service";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})

@Injectable()
export class DownloadComponent implements OnInit {

  @Input() fileName: String;

  constructor(private http: HttpClient, private requestService: RequestService) { }

  ngOnInit() {
  }

  downloadFile() {
    const mediaType = 'application/msword';
    const fileToDownload = this.fileName.replace(".pdf", ".doc");
    this.requestService.download(this.http, this.fileName, fileToDownload)
      .subscribe(
        (response) => {
          const blob = new Blob([response], { type: mediaType });
          saveAs(blob, fileToDownload);
        },
        e => { throwError(e); }
      );
  }
}
