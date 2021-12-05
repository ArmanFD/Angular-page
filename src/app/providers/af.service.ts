import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../providers/user';
import {
  Auth,
  authState,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import {
  Firestore,
  DocumentReference,
  doc,
  setDoc,
  docData,
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<any>;
  constructor(public afAuth: Auth,private fs:Firestore) {
    this.user$ = authState(this.afAuth).pipe(
      switchMap((user) => {
        if (user) {
          return docData(doc(this.fs, `users/${user.uid}`));
        } else return of(null);
      })
    );

  }

  async loginWithgoogle() {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(this.afAuth, provider)
    console.log(credentials)
    this.updateUser(credentials.user)
  }
  updateUser(user: User) {
    const userRef: DocumentReference = doc(this.fs, `users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        admin: true, 
        subscriber: true,
      },
    };
    setDoc(userRef, userData, { merge: true });
  }
  logout() {
    this.afAuth.signOut();
  }
}
