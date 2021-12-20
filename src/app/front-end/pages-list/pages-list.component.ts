import { Component, OnInit } from '@angular/core';
import { Database, DatabaseReference, query, listVal, ref } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss']
})
export class PagesListComponent implements OnInit {
  pages!: Observable<any[] | null>;
  dbRef: DatabaseReference = ref(this.db, 'pages');

  title = 'First-app'

  constructor(private db: Database) { }

  ngOnInit() {
    this.pages = this.getPages()
  };

  getPages(): Observable<any[] | null> {
    const pagesQuery = query(this.dbRef);
    return listVal(pagesQuery);
  };
}
