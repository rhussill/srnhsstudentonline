import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  uploadUrl= environment.apiURL + 'api/v1/upload';

  constructor(private http: HttpClient ) { }



  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    console.log(imageForm)
    return this.http.post(this.uploadUrl, imageForm);
    
  }



  uploadFile(file) {
//     const contentType = file.type;
//     const bucket = new S3(
//           {
//               accessKeyId: 'AKIA4ZTU664SOLPDQ5W4',
//               secretAccessKey: '55pPIeQsjIxyrHPsAonbUHI2rfVS5HlbaHiD3M',
//               region: 'ap-southeast-1'
//           }
//       );
//       const params = {
//           Bucket: 'aionco-s3-bucket',
//           Key: file.name,
//           Body: file,
//           ACL: 'public-read',
//           ContentType: 'multipart/form-data'
//       };
//       bucket.upload(params, function (err, data) {
//           if (err) {
//               console.log('There was an error uploading your file: ', err);
//               return false;
//           }
//           console.log('Successfully uploaded file.', data);
//           return true;
//       });

// //for upload progress   
// bucket.upload(params).on('httpUploadProgress', function (evt) {
//           console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
//       }).send(function (err, data) {
//           if (err) {
//               console.log('There was an error uploading your file: ', err);
//               return false;
//           }
//           console.log('Successfully uploaded file.', data);
//           return true;
//       });
}
}

