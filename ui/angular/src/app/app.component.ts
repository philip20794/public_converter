import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material';
import {UploadComponent} from "./upload/upload.component";
import {ConvertComponent} from "./convert/convert.component";
import {st} from "@angular/core/src/render3";
import {VALID} from "@angular/forms/src/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(UploadComponent) uploader;
  @ViewChild(ConvertComponent) converter;

  fileName: String;
  fileUploaded: boolean;
  fileConverted: boolean;
  error: boolean;
  errorMessage: string;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  logo:String;
  logo_ag:String;
  message: String;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.logo = 'assets/images/Adesso_logo.png';
    this.logo_ag = 'assets/images/adesso_full_logo.png';
    this.fileUploaded = false;
    this.error = false;
    this.fileName = "";
    this.message = "";
    this.fileConverted = false;
    this.resetFirstFormGroup();
    this.resetSecondFormGroup();
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ''
    });
  }

  showError(errorMessage){
    this.errorMessage = errorMessage;
    this.error = true;
  }

  resetFirstFormGroup(){
    this.error = false;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.firstFormGroup.statusChanges.subscribe(
      status => {
        if (status === 'VALID') {
          this.stepper.next();
        }
      }
    );
  }
  resetSecondFormGroup(){
    this.error = false;
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.secondFormGroup.statusChanges.subscribe(
      status => {
        if (status === 'VALID') {
          this.stepper.next();
        }
      }
    );
  }


  changeFileName($event ,stepper:MatStepper) {
    this.stepper.reset();
    this.fileName = $event;
  }

  isPDF(): boolean{
    return this.fileName.endsWith('.pdf');
  }

  changeFileUploaded($event ,stepper:MatStepper) {
    this.fileUploaded = $event;
    if (this.fileUploaded){
      if (this.isPDF()){
        this.message = "Uploaded: "+this.fileName;
        this.firstFormGroup.removeControl('firstCtrl');
      } else {
        this.message = "Select a .pdf file";
      }
    } else {
      this.message = "";
      this.resetFirstFormGroup();
    }
  }

  changeFileConverted($event) {
    this.fileConverted = $event;
    if (this.fileConverted){
      this.message = "Converted: "+this.fileName;
      this.secondFormGroup.removeControl('secondCtrl');
    } else {
      this.message = "";
      this.resetSecondFormGroup();
    }
  }


}
