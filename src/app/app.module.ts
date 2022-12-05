import { NgModule } from '@angular/core';
import {Component} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuItemUpdateDialogComponent } from './MenuItemUpdateDialog/MenuItemUpdateDialog.component';
import { MenuItemAddDialogComponent } from './menu-item-add-dialog/menu-item-add-dialog.component';
import { RestaurantSchemeComponent } from './restaurant-scheme/restaurant-scheme.component';
import { TableDialogComponent } from './table-dialog/table-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';





@NgModule({
  declarations: [
    AppComponent,
       MenuComponent,
       MenuItemUpdateDialogComponent,
       MenuItemAddDialogComponent,
       RestaurantSchemeComponent,
       TableDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
