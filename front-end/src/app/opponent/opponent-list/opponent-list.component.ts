import { OpponentService } from './../opponent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opponent-list',
  templateUrl: './opponent-list.component.html',
  styleUrls: ['./opponent-list.component.scss']
})
export class OpponentListComponent implements OnInit {

  opponents : any = []

  constructor(private opponentSrv: OpponentService) { }

  async ngOnInit() {
    this.opponents = await this.opponentSrv.listar()
    console.log(this.opponents)
  }

}
