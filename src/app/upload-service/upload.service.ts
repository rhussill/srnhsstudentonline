import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, retry, toArray } from 'rxjs/operators';
import { throwError} from 'rxjs';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  uploadUrl= environment.apiURL + 'api/v1/upload';
  fileUrl = environment.apiURL + 'api/filter'

  constructor(private http: HttpClient ) { }



  imageUpload(form) {
    console.log('image uploading');
    console.log(form)
    return this.http.post(this.uploadUrl,form);
    
  }

  
  sendFiledata(form){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post<any>(this.fileUrl,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Email not found');
  }
//   return throwError(
//     'Something bad happened; please try again later.');
// }


}

