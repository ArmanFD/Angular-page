import { Component, OnInit } from '@angular/core';
import { Database,DatabaseReference,query,list,ref} from '@angular/fire/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss']
})
export class PagesListComponent implements OnInit {
  pagesObservable!: Observable<any[]>;
  dbref: DatabaseReference = ref(this.db, 'cms-database-8b231-default-rtdb')

  constructor(private db: Database) { }

  ngOnInit(): void {
    this.getPages();
  }
  getPages() {
    const q = query(this.dbref);
    const data = list(q);
    data.subscribe( (data) => {
      return (data)
    })
  }

}
