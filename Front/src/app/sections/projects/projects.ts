import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  currentIndex = 0;
  visibleCards = 1;

  projects = [
    {
      title: 'Bucle Infinito',
      description: 'App Mobile para la gestión de restaurantes.',
      color: 'text-emerald-400',
      year: 2026,
      technologies: ['Angular', 'Node.js', 'Supabase', 'Tailwind CSS'],
      images: [
        'assets/images/projects/elbucle/1.png',
        'assets/images/projects/elbucle/2.png',
        'assets/images/projects/elbucle/3.png'
      ]
    },
    {
      title: 'Mes Cotizaciones',
      description: 'Bot de Instagram para la cotización de monedas extranjeras.',
      color: 'text-sky-300',
      year: 2025,
      technologies: ['Node', 'Javascript', 'Cloudinary', 'Github Actions'],
      images: [
        'assets/images/projects/mescotizacion/1.png',
        'assets/images/projects/mescotizacion/2.png',
        'assets/images/projects/mescotizacion/3.png',
        'assets/images/projects/mescotizacion/4.png'
      ]
    },
    {
      title: 'Gestor de Dinero',
      description: 'App de escritorio para la gestión de dinero personal.',
      color: 'text-emerald-400',
      year: 2024,
      technologies: ['C#', '.NET', 'SQL Server'],
      images: [
        'assets/images/projects/gestor/1.png',
        'assets/images/projects/gestor/2.png',
        'assets/images/projects/gestor/3.png'
      ]
    }
  ];

  next() {
    if (this.currentIndex < this.projects.length - this.visibleCards) {
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
