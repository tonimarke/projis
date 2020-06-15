import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers : any = []

  constructor(private customerSrv: CustomerService) { }

  async ngOnInit() {
    this.customers = await this.customerSrv.listar()
    console.log(this.customers)
  }

}
