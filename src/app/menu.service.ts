import { MenuItem } from './menuItem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class MenuService
{
  constructor(
    private http: HttpClient   //This is private because it will only be used in this module
  ) { }


  // public getMenuItems(){
  //   return this.http.get<MenuItem[]>('http://localhost:9999/api/menu');
  // }
  public getMenuItems(){
    return this.http.get('http://localhost:9999/api/menu');
  }

  public getMenuItem(menuId: number){ //I am not sure, check, because id is long

    return this.http.get('http://localhost:9999/api/menu/' + menuId);
  }

  public createMenuItem(body: any){

    return this.http.post('http://localhost:9999/api/menu/add',body);
  }

  public deleteMenuItem(menuId: number){
    return this.http.delete('http://localhost:9999/api/menu/delete/' + menuId);
  }

  public updateMenuItem(menuId:number, body:any){
    console.log("Dojdov i tuka");
    return this.http.post('http://localhost:9999/api/menu/edit/' + menuId,body);
  }

}
