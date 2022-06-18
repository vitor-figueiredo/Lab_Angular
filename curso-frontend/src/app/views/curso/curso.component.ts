import { Observable } from 'rxjs';
import { CursoService } from './../../services/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos : Curso[] = [
    {id:1, descricao:"Angular", cargaHoraria:20}
    ,
    {id:2, descricao:"HTML", cargaHoraria:40}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
