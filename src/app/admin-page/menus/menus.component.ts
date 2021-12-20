import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { Menu, MenusService } from 'src/app/service/menus/menus.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  menuDetails: Menu = {
    title: "",
    url: "",
  }
  dataSource = new MatTableDataSource();
  displayedColumns = ["id", "title", "url", "actions"];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private srvMenus: MenusService, public dialog: MatDialog) { }

  ngOnInit() {
    this.srvMenus.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    })
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  addMenu() {
    this.srvMenus.addMenu(this.menuDetails);
  }
  editMenu(menuId: string, menu: Menu) {
    this.srvMenus.updateMenu(menuId, menu);
  }
  deleteMenu(menuId: string) {
    this.srvMenus.deleteMenu(menuId);
  }

  openDialog(menuId: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        console.log('The dialog was closed' + menuId);
        this.deleteMenu(menuId)
      }
    });
  }

  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: { title, url },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The Edit dialog was closed');
        this.editMenu(menuId, result)
      }
    });
  }
}
