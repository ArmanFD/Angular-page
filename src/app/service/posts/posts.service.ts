import { Injectable } from '@angular/core';
import { Firestore,doc,collection, collectionSnapshots, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Post {
  title: string,
  url: string,
  id?: string,
};

@Injectable({
  providedIn: 'root',
})

export class PostsService {

  collectionref = collection(this.afs, 'posts')

  constructor(private afs: Firestore) { }
  getPosts() {
    return collectionSnapshots(this.collectionref).pipe(
      map(posts => {
        return posts.map(post => {
          const id = post.id
          const info = post.data()
          return {
            id: id,
            ...info,
          }
        })
      })
    )
  }
  addPost(post: Post) {
    addDoc(this.collectionref, post)
  }
  deletePost(postId: string) {
    const post_doc_ref = doc(this.afs, `posts/${postId}`)
    deleteDoc(post_doc_ref);
  }
  updatePost(postId: string, post: any) {
    const post_doc_ref = doc(this.afs, `posts/${postId}`)
    updateDoc(post_doc_ref, post);
  }

}
