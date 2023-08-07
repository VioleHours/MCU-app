import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Countdown } from './countdown';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiCountdownUrl = 'https://www.whenisthenextmcufilm.com/api';
  private publicKey = 'process.env.PUBLIC_KEY';
  private privateKey = 'process.env.PRIVATE_KEY';
  private apiComicUrl = 'developer.marvel.com';

  constructor(private http: HttpClient) { }

  getNextMovie(): Observable<Countdown[]> {
    return this.http
      .get<any>(this.apiCountdownUrl)
      .pipe(
        map((response: any) => response.countdowns),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Error during API request:', error);
    return throwError('An error occurred during the API request. Please try again later.');
  }
}

