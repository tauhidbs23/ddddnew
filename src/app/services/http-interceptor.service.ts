// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import * as Sentry from "@sentry/browser";

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpIntercept implements HttpInterceptor {
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error instanceof HttpErrorResponse) {
//           Sentry.captureException(error);
//           return throwError(error);
//         } else {
//           // Sentry.captureException(error);
//           return throwError(error);
//         }
//       })
//     );
//   }
// }
