import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Countdown } from './countdown';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiCountdownUrl = 'https://www.whenisthenextmcufilm.com/';
  private publicKey = 'process.env.PUBLIC_KEY';
  private privateKey = 'process.env.PRIVATE_KEY';
  private apiComicUrl = 'developer.marvel.com';

  constructor(private http: HttpClient) { }

  getNextMovie(): Observable<Countdown[]> {
    return this.http
      .get<Countdown[]>(this.apiCountdownUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(error);
  }
}

