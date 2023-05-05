import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('https://localhost:7231/api/values').subscribe({
      next: (res) => (this.values = res),
      error: (e) => console.log(e),
    });
  }
}
