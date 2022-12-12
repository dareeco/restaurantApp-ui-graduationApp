import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private http: HttpClient   //This is private because it will only be used in this module
  ) { }

  public findTableById(tableId: number){
    return this.http.get('http://localhost:9999/api/table/' + tableId);
  }

  public findMenuItemsForGivenTable(tableId:number){
    return this.http.get('http://localhost:9999/api/table/' + tableId +'/menuItems');
  }

  public addMenuItemToGivenTable(tableId:number, menuItemName: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name",menuItemName);
    //it has to be, null, because  the RequestParameter will be given as body and function
    //Will return code 400
    return this.http.post('http://localhost:9999/api/table/add/menuItems/' + tableId,null,{params: queryParams});
  }

  public removeMenuItemFromGivenTable(tableId:number, menuItemName:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name",menuItemName);
    //Here we mustn't send null for body because it's delete http call and after the id (path) we send the request parameters!
    return this.http.delete('http://localhost:9999/api/table/delete/menuItems/'+ tableId,{params: queryParams});
  }

  public clearTableOfMenuItems(tableId: number){
    return this.http.get('http://localhost:9999/api/table/clear/' + tableId);
  }
}
