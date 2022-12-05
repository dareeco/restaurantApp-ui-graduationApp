import { TableService } from './../table.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { MenuItem } from '../menuItem';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss']
})
export class TableDialogComponent implements OnInit {
  public dataSource = new MatTableDataSource<MenuItem>(); //we need to import datasource variable if we want the table in the html to work
  public displayedColumns: string[] = ['name', 'description', 'price', 'actions']; //what columns are we displaying
  menuItems: MenuItem[];  //In order this to not throw error in tsconfig.json I added "strictPropertyInitialization": false,
  //Below we get only the menu Items that are on this table
  public dataSource2=new MatTableDataSource<MenuItem>();
  public displayedColumns2: string[] = ['name',  'price'];
  menuItems2:MenuItem[];
  public totalSum:number;
  public table:any;

  constructor(
    public menuService: MenuService,
    public tableService: TableService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: { tableId: number }
  ) { }

  ngOnInit(): void {
    //Get all things on the menu
    this.menuService.getMenuItems().subscribe((data:any) => {
      this.menuItems=data;
      console.log(data);
      this.dataSource.data=data;
    });
    //Get foods/drinks for this table
    const tableid=this.data.tableId;
    this.tableService.findMenuItemsForGivenTable(tableid).subscribe((data:any) => {
      this.menuItems2=data;
      console.log(data);
      this.dataSource2.data=data;
    })

    this.route.params.subscribe((params: any) => {
      this.tableService.findTableById(tableid).subscribe((table) => {
        this.table=table;
        this.TotalSum();
      })
    })

  }

  addDrink(name: string){
    const tableid=this.data.tableId;
    this.tableService.addMenuItemToGivenTable(tableid,name).subscribe(()=>{
        this.refreshTable();
    });

  }

  private TotalSum(){
    this.totalSum=this.table.totalSum;
  }

  refreshTable(){   //Function for updating Drinks and total sum of the current table
    //Get foods/drinks for this table
    const tableid=this.data.tableId;
    this.tableService.findMenuItemsForGivenTable(tableid).subscribe((data:any) => {
      this.menuItems2=data;
      console.log(data);
      this.dataSource2.data=data;
    });

    this.route.params.subscribe((params: any) => {
      this.tableService.findTableById(tableid).subscribe((table) => {
        this.table=table;
        this.TotalSum();
      })
    });
  }

  clearTable(){
    const tableid=this.data.tableId;
    this.tableService.clearTableOfMenuItems(tableid).subscribe(() => {});
  }



}