import { Component, OnInit } from '@angular/core';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-restaurant-scheme',
  templateUrl: './restaurant-scheme.component.html',
  styleUrls: ['./restaurant-scheme.component.scss'],
})
export class RestaurantSchemeComponent implements OnInit {
  statusClass = 'active';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog(tableId: number) {
    let dialogRef = this.dialog.open(TableDialogComponent, {
      data: {
        tableId: tableId
      },
      width: '768px',
      panelClass: 'table-dialog'
    });
  }

  setReservedClass(name: string){

    document.getElementById(name)?.style.setProperty('background-color', 'yellow');
    }

  setFreedClass(){
    document.getElementById('table3')?.style.setProperty('background-color', 'green');

  }
  setTakenClass(){

    document.getElementById('table3')?.style.setProperty('background-color', 'red');

  }
}
