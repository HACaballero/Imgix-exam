import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http.get(
      'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json'
    );
  }
}
