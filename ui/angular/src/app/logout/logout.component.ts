import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

@Injectable()
export class LogoutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  logout() {
    this.clear();
  }

  private clear() {
    return this.http.post('/clear',null)
      .subscribe(
        () => {
          console.log("Cleared!");
        }, (err) => {
          console.log("Clearing Error:", err);
        }
      );
  }
}
