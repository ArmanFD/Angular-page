import { Injectable } from '@angular/core';
import { Firestore,doc,collection, collectionSnapshots, addDoc, deleteDoc, updateDoc, where, query, WhereFilterOp, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Post {
  title: string,
  menu_id: string,
  id?: string,
  content: string,
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

  getConditionalPosts(field: string, condition: WhereFilterOp, value: string) {
    const postquery = query(this.collectionref, where(field, condition, value))
    console.log(postquery)
    return collectionSnapshots(postquery).pipe(
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

  updatePost(postId: string, post: Post) {
    const post_doc_ref: DocumentReference<any> = doc(this.afs, `posts/${postId}`)
    updateDoc<Post>(post_doc_ref, post);
  }

}
