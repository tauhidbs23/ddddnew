import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as Sentry from "@sentry/browser";


@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiurl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiurl).pipe(catchError(this.HandleError));
  }
  HandleError(err) {
    if (err instanceof HttpErrorResponse) {
      // server side error 
      Sentry.captureException(err);
      return throwError(err);
    } else {
      // this is client side error 
    }
    return throwError(err);
  }
}
