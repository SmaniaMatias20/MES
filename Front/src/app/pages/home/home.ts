import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  currentIndex = 0;
  visibleCards = 2;

  proyectos = [
    {
      titulo: 'Sistema de gestión',
      descripcion: 'Plataforma desarrollada en C# y SQL Server para control financiero.',
      color: 'text-emerald-400'
    },
    {
      titulo: 'Landing empresarial',
      descripcion: 'Sitio corporativo moderno para consultora de recursos humanos.',
      color: 'text-sky-300'
    },
    {
      titulo: 'Registro de materias',
      descripcion: 'Aplicación en Python con SQLite para seguimiento académico.',
      color: 'text-purple-300'
    },
    {
      titulo: 'Simulador financiero',
      descripcion: 'Simulador de plazo fijo y cotización en Java.',
      color: 'text-pink-300'
    }
  ];

  next() {
    if (this.currentIndex < this.proyectos.length - this.visibleCards) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get transformValue() {
    return `translateX(-${this.currentIndex * 50}%)`;
  }

}
