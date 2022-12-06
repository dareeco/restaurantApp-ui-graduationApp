import { OrderService } from './../order.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-update-dialog',
  templateUrl: './order-update-dialog.component.html',
  styleUrls: ['./order-update-dialog.component.scss']
})
export class OrderUpdateDialogComponent implements OnInit {

  public orderTypeFormControl: FormControl= new FormControl();
  public orderSpecificNameFormControl: FormControl= new FormControl();
  public quantityFormControl: FormControl= new FormControl();
  public quantityTypeFormControl: FormControl= new FormControl();
  public order:any;
  constructor(
    public orderService: OrderService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<OrderUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = this.data.id;
      this.orderService.getOrder(id).subscribe((order) => {
          this.order=order;
          this.initFormControls();
      })
    });

  }

  updateOrder(){
    this.order.orderType=this.orderTypeFormControl.value;
    this.order.orderSpecificName=this.orderSpecificNameFormControl.value;
    this.order.quantity=this.quantityFormControl.value;
    this.order.quantityType=this.quantityTypeFormControl.value;
    this.orderService.updateOrder(this.data.id, this.order).subscribe(()=> {});
  }

  private initFormControls(){
      this.orderTypeFormControl=new FormControl(this.order.orderType);
      this.orderSpecificNameFormControl=new FormControl(this.order.orderSpecificName);
      this.quantityFormControl=new FormControl(this.order.quantity);
      this.quantityTypeFormControl=new FormControl(this.order.quantityType);
  }

}
