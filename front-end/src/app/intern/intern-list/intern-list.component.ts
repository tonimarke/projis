import { InternService } from './../intern.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.scss']
})
export class InternListComponent implements OnInit {

  interns : any = []

  constructor(private internSrv: InternService) { }

  async ngOnInit() {
    this.interns = await this.internSrv.listar()
    console.log(this.interns)
  }

}
