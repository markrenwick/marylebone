import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MaryleboneService {

  constructor(private http: HttpClient) { }

  getPrimeNumbersBetween(start: number, end:number): Observable<any> {
    return this.http.get<any>(`https://localhost:7047/api/primes/getPrimeNumbersBetween?start=${start}&end=${end}`)
      .pipe(map(response => {
        return response;
      }));
  }

}
