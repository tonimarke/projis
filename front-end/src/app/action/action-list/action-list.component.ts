import { ActionService } from './../action.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {

  actions : any = [] // vetor vazio
  displayedColumns: any = ['actionName', 'customer', 'opponent']
 
  constructor(private actionSrv: ActionService) { }

  async ngOnInit() {
    this.actions = await this.actionSrv.listar()
    console.log(this.actions)
  }

}
