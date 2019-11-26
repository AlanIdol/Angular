import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})


  export class PosteosComponent implements OnInit {

    posteo: posteo = {
      texto: 'Probando los posteos'
      };



  constructor() { }

  ngOnInit() {
  }

}
