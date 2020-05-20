import { Account } from "./account.model";
import { DatePipe } from "@angular/common";

export class FundTransfer{
 fundTransferId:number;
 accountNumber:string;
 tranferAmount:number;
 transactionType:string;
 transactionDate:Date;
 account:Account;
}