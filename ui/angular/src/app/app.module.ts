import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ConvertComponent } from './convert/convert.component';
import { DownloadComponent } from './download/download.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ConvertComponent,
    DownloadComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  exports: [MatStepperModule, MatFormFieldModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
