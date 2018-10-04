import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }


  uploadFile(http: HttpClient, file: File){
    let formData = new FormData();
    formData.append('file', file, file.name);
    return http.post('/', formData, {observe: 'response', responseType: 'text'});
  }


  convert(http: HttpClient, fileName: string) {
    return http.post('/convert/'+fileName, null, {observe: 'response', responseType: 'text'});
  }

  download(http: HttpClient, fileName: String, result) {
    return http.post('/download/'+fileName, {location: result}, {responseType: 'blob'});
  }


}
