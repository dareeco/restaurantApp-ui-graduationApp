import { OrderAddDialogComponent } from './../order-add-dialog/order-add-dialog.component';
import { OrderService } from './../order.service';
import { Order } from './../order';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderUpdateDialogComponent } from '../order-update-dialog/order-update-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public dataSource = new MatTableDataSource<Order>(); //we need to import datasource variable if we want the table in the html to work
  public displayedColumns: string[] = ['orderType', 'orderSpecificName', 'quantity', 'quantityType', 'actions']; //what columns are we displaying
  orders: Order[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    public orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; //to refresh table and put on other pages
  }
  
  ngOnInit(): void {
   this.orderService.getOrders().subscribe((data:any) => {
      this.orders=data;
      this.dataSource.data=data;
   });
  }

  openUpdateDialog(id: number) {
    let dialogRef=this.dialog.open(OrderUpdateDialogComponent, {
      data: {
        id:id
      },
      width: '768px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshPage();
    })
  }

  openAddDialog(){
    let dialogRef=this.dialog.open(OrderAddDialogComponent,{
      width: '768px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshPage();
    })
  }

  deleteDetails(id: number){
    this.orderService.deleteOrder(id).subscribe(() => {
      const data = this.dataSource.data;  //Update table that hide the picked for deletion element
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

  navigateToBar(){
    this.router.navigate(['bar']);

  }

  navigateToMenuItems(){
    this.router.navigate(['menu']);

  }


}
