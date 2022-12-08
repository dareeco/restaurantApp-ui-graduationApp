import { Component, Inject, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-MenuItemDeleteDialog',
  templateUrl: './MenuItemUpdateDialog.component.html',
  styleUrls: ['./MenuItemUpdateDialog.component.css']
})
export class MenuItemUpdateDialogComponent implements OnInit {

  public nameFormControl: FormControl= new FormControl();
  public descriptionFormControl: FormControl= new FormControl();
  public priceFormControl: FormControl= new FormControl();
  //You need this in order to use this.menuItems
  public menuItem: any;
  constructor(
    private MenuService: MenuService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<MenuItemUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = this.data.id;
      this.MenuService.getMenuItem(id).subscribe((menuItem) => {
        this.menuItem = menuItem;
        this.initFormControls();
      })

    })
  }
  updateMenuItem(){
    this.menuItem.name=this.nameFormControl.value;
    this.menuItem.description=this.descriptionFormControl.value;
    this.menuItem.price=this.priceFormControl.value;
    this.MenuService.updateMenuItem(this.data.id,this.menuItem).subscribe(() =>{

    });



  }

  private initFormControls() {
    this.nameFormControl = new FormControl(this.menuItem.name);
    this.descriptionFormControl= new FormControl(this.menuItem.description);
    this.priceFormControl=new FormControl(this.menuItem.price);
  }



}
