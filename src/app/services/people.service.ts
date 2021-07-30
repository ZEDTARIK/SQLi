import { Ipeople } from './../class/ipeople';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  // Method : Get All Peoples from  Back end
  getAllPeopls(): Observable<Ipeople[]> {
    return this.http.get<Ipeople[]>(this.url);
  }

  // Method : GET ONE People From Back end
  getPeopleDetail(id: number): Observable<Ipeople> {
    return this.http.get<Ipeople>(this.url + id);
  }

}
