import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
// añadimos un título
  title = 'Bienvenido a Angular'
  usuarios=['pepe', 'juan', 'tomás', 'león']

  constructor() { }

  ngOnInit(): void {
  }

}
