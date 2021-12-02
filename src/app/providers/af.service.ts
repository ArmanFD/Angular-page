import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth,authState,GoogleAuthProvider,signInWithPopup } from '@angular/fire/auth';




@Injectable({
  providedIn: 'root'
})
export class AfService {
  user!: Observable<any>;
  constructor(public afAuth: Auth) { 
   this.user=authState(afAuth);
   
  }

  async loginWithgoogle(){
    const provider = new GoogleAuthProvider();
    const userinfo = await signInWithPopup(this.afAuth,provider) 
  }
  logout(){
    this.afAuth.signOut();
  }
}
