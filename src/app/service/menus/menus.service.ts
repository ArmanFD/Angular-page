import { Injectable } from '@angular/core';
import { Firestore, doc, collection, collectionSnapshots, addDoc, deleteDoc, updateDoc, query, where, WhereFilterOp, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Menu {
  title: string,
  url: string,
  id?: string,
};

@Injectable({
  providedIn: 'root',
})

export class MenusService {

  collectionref = collection(this.afs, 'menus')

  constructor(private afs: Firestore) { }

  getMenus() {

    return collectionSnapshots(this.collectionref).pipe(
      map(menus => {
        return menus.map(menu => {
          const id = menu.id
          const info = menu.data()
          return {
            id: id,
            ...info,
          }
        })
      })
    )
  }
  getConditionalMenus(field: string, condition: WhereFilterOp, value: string) {
    const menuquery = query(this.collectionref, where(field, condition, value))
    return collectionSnapshots(menuquery).pipe(
      map(menus => {
        return menus.map(menu => {
          const id = menu.id
          const info = menu.data()
          return {
            id: id,
            ...info,
          }
        })
      })
    )
  }

  addMenu(menu: Menu) {
    addDoc(this.collectionref, menu)
  }

  deleteMenu(menuId: string) {
    const menu_doc_ref = doc(this.afs, `menus/${menuId}`)
    deleteDoc(menu_doc_ref);
  }

  updateMenu(menuId: string, menu: Menu) {
    const menu_doc_ref: DocumentReference<any> = doc(this.afs, `menus/${menuId}`)
    updateDoc<Menu>(menu_doc_ref, menu);
  }
}

