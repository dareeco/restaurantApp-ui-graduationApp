import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';
import { MenuItem } from '../menuItem';

@Component({
  selector: 'app-menu-item-add-dialog',
  templateUrl: './menu-item-add-dialog.component.html',
  styleUrls: ['./menu-item-add-dialog.component.scss']
})
export class MenuItemAddDialogComponent implements OnInit {
  public nameFormControl: FormControl= new FormControl();
  public descriptionFormControl: FormControl= new FormControl();
  public priceFormControl: FormControl= new FormControl();
  //You need this in order to use this.menuItems
  public menuItem!: MenuItem;
  constructor(
    private menuItemService: MenuService,
    public dialogRef: MatDialogRef<MenuItemAddDialogComponent>
  ) { }

  ngOnInit(){
    this.initFormControls(); //create form group when started
  }
  addMenuItem(){
    this.menuItem= new MenuItem(
      this.nameFormControl.value,
      this.descriptionFormControl.value,
      this.priceFormControl.value
    );

    if(this.nameFormControl.valid && this.priceFormControl.valid){
      this.menuItemService.createMenuItem(this.menuItem).subscribe(() =>{
        this.dialogRef.close();
      })
    }
    else{
      alert("Error while creating new item for the menu.");
    }
  }

  private initFormControls() {
    this.nameFormControl=new FormControl('', Validators.required);
    this.descriptionFormControl=new FormControl();
    this.priceFormControl=new FormControl('', Validators.required);

  }

}
