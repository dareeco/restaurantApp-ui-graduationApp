export class Order {
  id:number;
  orderType: string;
  orderSpecificName:string;
  quantity:number;
  quantityType:string;

  constructor(orderType:string, orderSpecificName:string, quantity:number, quantityType:string){
    this.orderType=orderType;
    this.orderSpecificName=orderSpecificName;
    this.quantity=quantity;
    this.quantityType=quantityType;
  }
}
