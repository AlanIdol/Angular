import { Component, OnInit } from '@angular/core';
import { USUARIOS } from '../mock-users';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {

  usuarios = USUARIOS;



  constructor() { }

  ngOnInit() {
  }

}
