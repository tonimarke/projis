import { SupervisorService } from './../supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss']
})
export class SupervisorListComponent implements OnInit {

  supervisors : any = []

  constructor(private supervisorsSrv: SupervisorService) { }

  async ngOnInit() {
    this.supervisors = await this.supervisorsSrv.listar()
    console.log(this.supervisors)
  }

}
