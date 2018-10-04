import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestService} from "../services/request.service";
import {catchError} from "rxjs/operators";
import {ErrorService} from "../services/error.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

@Injectable()
export class UploadComponent implements OnInit {
  @Input() public fileUploaded: boolean;
  @Input() public fileName: String;
  @Output() changeFileNameEvent = new EventEmitter<String>();
  @Output() changeFileUploadedEvent = new EventEmitter<boolean>();
  @Output() changeFileConvertedEvent = new EventEmitter<boolean>();
  @Output() errorEvent = new EventEmitter<String>();
  public uploadTitle: String;

  constructor(private http: HttpClient, private requestService: RequestService,
              private error:ErrorService) {
  }

  ngOnInit() {
    this.uploadTitle = "Upload";
    this.fileUploaded = false;
    this.changeFileUploadedEvent.emit(this.fileUploaded);
    this.changeFileConvertedEvent.emit(false);
    this.fileName = "";
    this.changeFileNameEvent.emit(this.fileName);
  }

  onFileChange(event) {
    this.fileUploaded = false;
    this.changeFileUploadedEvent.emit(this.fileUploaded);
    this.changeFileConvertedEvent.emit(false);
    this.uploadFile(event.target.files);
  }


  uploadFile(files: FileList) {
    if (files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = files[0];
    this.fileName = file.name;
    this.changeFileNameEvent.emit(this.fileName);

    this.requestService.uploadFile(this.http, file)
      .pipe(catchError(err => {
        this.errorEvent.emit(err.error);
        return this.error.handleError(err);
      }))
      .subscribe(response => {
        if (response.status === 200) {
          console.log("Upload done");
          this.fileUploaded = true;
          this.changeFileUploadedEvent.emit(this.fileUploaded);
          this.fileName = file.name;
          this.changeFileNameEvent.emit(this.fileName);
        }
      });
  }
}
