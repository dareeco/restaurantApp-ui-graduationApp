export class Table {
  id:number;
  totalSum:number;
  tableName:string;

  constructor(totalSum:number, tableName:string){
    this.tableName=tableName;
    this.totalSum=totalSum;
    
  }
}
