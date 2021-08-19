import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  // b64toBlob(b64Data, contentType, sliceSize) {
  //   contentType = contentType || '';
  //   sliceSize = sliceSize || 512;
  
  //   var byteCharacters = window.atob(b64Data);
  //   var byteArrays = [];
  
  //   for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //     var slice = byteCharacters.slice(offset, offset + sliceSize);
  
  //     var byteNumbers = new Array(slice.length);
  //     for (var i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }
  
  //     var byteArray = new Uint8Array(byteNumbers);
  
  //     byteArrays.push(byteArray);
  //   }
      
  //   var blob = new Blob(byteArrays, {type: contentType});
  //   return blob;
  // }

  /**
   * Turn base 64 image into a blob, so we can send it using multipart/form-data posts
   * @param b64Data
   * @param contentType
   * @param sliceSize
   * @return {Blob}
  */
  public getBlob(b64Data: string, contentType: string, sliceSize: number= 512): Blob {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    let blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
  
}
