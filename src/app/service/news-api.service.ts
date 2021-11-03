import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  GetNews(category:string,country:string):Observable<any>{
    const URL = "https://newsapi.org/v2/top-headlines?country=" + country + "&category="
     + category + "&apiKey=6feeeaec49f74b2c9c82ed8d7addc142";
    return this.http.get(URL);
  }
}
