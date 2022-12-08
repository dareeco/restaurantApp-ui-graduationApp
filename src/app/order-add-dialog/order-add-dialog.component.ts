import { Order } from './../order';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-add-dialog',
  templateUrl: './order-add-dialog.component.html',
  styleUrls: ['./order-add-dialog.component.scss']
})
export class OrderAddDialogComponent implements OnInit {

  public orderTypeFormControl: FormControl= new FormControl();
  public orderSpecificNameFormControl: FormControl= new FormControl();
  public quantityFormControl: FormControl= new FormControl();
  public quantityTypeFormControl: FormControl= new FormControl();
  public order !: Order;
  constructor(
    public orderService: OrderService,
    public dialogRef: MatDialogRef<OrderAddDialogComponent>
  ) { }

  ngOnInit(): void {
    this.initFormControls(); //create form group when started
  }

  addOrder(){
    console.log("Add");
    this.order=new Order(
      this.orderTypeFormControl.value,
      this.orderSpecificNameFormControl.value,
      this.quantityFormControl.value,
      this.quantityTypeFormControl.value
    )

    if(this.orderTypeFormControl.valid && this.quantityFormControl.valid){
      this.orderService.createOrder(this.order).subscribe(() =>{
        this.dialogRef.close();
      })
    }
    else{
      alert("Please fill the required fields");
    }
  }

  initFormControls(){
    this.orderTypeFormControl=new FormControl('', Validators.required);
    this.orderSpecificNameFormControl=new FormControl('');
    this.quantityFormControl=new FormControl('', Validators.required);
    this.quantityTypeFormControl=new FormControl('');
  }

}
