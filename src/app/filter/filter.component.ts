import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categoryselected = "general";
  countryselected = "ar";
  list_of_category:any[] = [
    {value: "general", category: "general"},
    {value: "entertainmet", category: "entertainmet"},
    {value: "health", category: "health"},
    {value: "science", category: "science"},
    {value: "sports", category: "sports"},
    {value: "technology", category: "technology"}
  ];

  list_of_country:any[] = [
    {value: "ar", country: "Argentina"},
    {value: "co", country: "Colombia"},
    {value: "us", country: "United State"},
    {value: "gb", country: "United Kingdom"},
    {value: "fr", country: "France"},
    {value: "br", country: "Brazil"}
  ];

  list_of_news: any[] = [];
  
  constructor(private api: NewsApiService) {

   }

  ngOnInit(): void {
  }

  ShowNews():void{
   this.api.GetNews(this.categoryselected,this.countryselected).subscribe(data => {
    this.list_of_news = data.articles;
    console.log(this.list_of_news);
   });
    
  }

}
