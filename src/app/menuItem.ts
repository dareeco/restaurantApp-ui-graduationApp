export class MenuItem {
  id: number;
  name!: string;
  description: string | undefined;
  price!: number;

  constructor(name:string, description:string, price:number){
    this.name=name;
    this.description=description;
    this.price=price;
  }
}
