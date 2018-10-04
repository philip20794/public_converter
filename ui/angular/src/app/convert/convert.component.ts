import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {HttpClient} from "@angular/common/http";
import {RequestService} from "../services/request.service";
import {catchError} from "rxjs/operators";
import {ErrorService} from "../services/error.service";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})

@Injectable()
export class ConvertComponent implements OnInit {

  @Input() public fileConverted: boolean;
  @Output() changeFileConvertedEvent = new EventEmitter<boolean>();
  @Output() errorEvent = new EventEmitter<String>();
  @Input() fileName: string;

  constructor(private http: HttpClient, private requestService: RequestService,
              private spinnerService: Ng4LoadingSpinnerService,
              private error:ErrorService) { }

  ngOnInit() {
    this.fileConverted = false;
    this.changeFileConvertedEvent.emit(this.fileConverted);
  }

  convertFile() {
    this.fileConverted = false;
    this.changeFileConvertedEvent.emit(this.fileConverted);
    this.spinnerService.show();
    this.requestService.convert(this.http, this.fileName)
      .pipe(catchError(err => {
        this.errorEvent.emit("Error while converting file");
        this.spinnerService.hide();
        return this.error.handleError(err);
      }))
      .subscribe(response => {
        if (response.status === 200) {
          console.log("Converted");
          this.fileConverted = true;
          this.changeFileConvertedEvent.emit(this.fileConverted);
        }
        this.spinnerService.hide();
      });
  }


}

