import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UploadsService {

  uploadPostImage($key, postTitle, imageFile) {
    return firebase.storage().ref(`/posts/${postTitle}.${$key}/${imageFile.name}`).put(imageFile);
  }
}
