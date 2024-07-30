import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // private dataUrl = 'assets/data.json'; // Ścieżka do pliku JSON

  constructor(private http: HttpClient) { }

  // getData(): Observable<any[]> {
  //   return this.http.get<any[]>(this.dataUrl);
  // }
  private apiUrl = 'http://localhost:3000/api/venues';

  

  addVenue(venue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, venue);
  }
}