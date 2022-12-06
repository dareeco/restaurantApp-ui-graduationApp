import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  public getOrders() {
    return this.http.get('http://localhost:9999/api/order');
  }

  public getOrder(orderId: number){
    return this.http.get('http://localhost:9999/api/order/' + orderId);
  }

  public createOrder(body:any){
    return this.http.post('http://localhost:9999/api/order/add',body);
  }

  public deleteOrder(orderId: number){
    return this.http.delete('http://localhost:9999/api/order/delete/' + orderId);
  }

  public updateOrder(orderId:number,body:any){
    return this.http.post('http://localhost:9999/api/order/edit/' + orderId,body);
  }
}
