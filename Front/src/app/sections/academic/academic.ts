import { Component } from '@angular/core';

@Component({
  selector: 'app-academic',
  imports: [],
  templateUrl: './academic.html',
  styleUrl: './academic.css',
})
export class Academic {

  currentAcademicIndex = 0;
  visibleCards = 1;

  academic = [
    {
      title: 'Tecnicatura Universitaria en Programación',
      description:
        'Formación universitaria orientada al desarrollo de software, bases de datos, arquitectura de sistemas, análisis de datos y gestión de proyectos.',
      period: '2023 - 2025',
      color: 'text-emerald-400',
      subjects: [
        'Arquitectura y Sistemas Operativos',
        'Base de Datos I',
        'Inglés I',
        'Matemática',
        'Organización Empresarial',
        'Probabilidad y Estadística',
        'Programación I',
        'Programación II',
        'Base de Datos II',
        'Gestión de Desarrollo de Software',
        'Inglés II',
        'Introducción al Análisis de Datos',
        'Legislación',
        'Metodología de Sistemas I',
        'Metodología de Sistemas II',
        'Programación III',
        'Programación IV',
        'Trabajo Final Integrador'
      ]
    },
    {
      title: 'Licenciatura en Ciencia de Datos',
      description:
        'Formación avanzada orientada al análisis de datos, arquitecturas modernas, business intelligence, seguridad de la información y desarrollo de soluciones inteligentes.',
      period: '2026 - Presente',
      color: 'text-sky-300',
      subjects: [
        'Minería de Datos',
        'Gestión de Proyectos',
        'Seguridad de la Información',
        'Bases de Datos',
        'Análisis de Datos II',
        'Programación Avanzada',
        'Internet de las Cosas (IoT)',
        'Business Intelligence',
        'Innovación Digital',
        'Arquitecturas de Datos',
        'Análisis de Datos I',
        'Probabilidad y Estadística',
        'Estructuras de Datos',
        'Análisis Matemático',
        'Herramientas de Análisis'
      ],
      image: 'assets/images/academic/licenciatura.png'
    }
  ];

  nextAcademic() {
    if (this.currentAcademicIndex < this.academic.length - this.visibleCards) {
      this.currentAcademicIndex++;
    }
  }

  prevAcademic() {
    if (this.currentAcademicIndex > 0) {
      this.currentAcademicIndex--;
    }
  }
}
