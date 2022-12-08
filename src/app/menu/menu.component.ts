
import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MenuItem } from '../menuItem';
import { MenuItemUpdateDialogComponent } from '../menu-item-update-dialog/MenuItemUpdateDialog.component';
import { MenuItemAddDialogComponent } from '../menu-item-add-dialog/menu-item-add-dialog.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public dataSource = new MatTableDataSource<MenuItem>(); //we need to import datasource variable if we want the table in the html to work
  public displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions']; //what columns are we displaying
  menuItems: MenuItem[];  //In order this to not throw error in tsconfig.json I added "strictPropertyInitialization": false,
  constructor(
    public menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe((data:any) => {
        this.menuItems=data;
        console.log(data);
        this.dataSource.data=data;

    })
  }
  openUpdateDialog(id: number) {
    let dialogRef=this.dialog.open(MenuItemUpdateDialogComponent, {
      data: {
        id:id
      },
      width: '768px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshPage();
    })
  }
  openAddDialog() {
    //this.dialog.open(DialogExampleComponent);
    let dialogRef=this.dialog.open(MenuItemAddDialogComponent, {
        width: '768px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshPage();


    })

  }
  deleteDetails(id: number){
    this.menuService.deleteMenuItem(id).subscribe(() => {
      const data = this.dataSource.data;
      const index = data.findIndex((item: any) => item.id === id);
      data.splice(index, 1);
      this.dataSource.data = data;
    });
  }

  refreshPage(){ //function for refrehing page
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route
    })

  }


}
