import { Component } from '@angular/core';
import { Services } from '../../sections/services/services';
import { Projects } from '../../sections/projects/projects';
import { Companies } from '../../sections/companies/companies';
import { Academic } from '../../sections/academic/academic';

@Component({
  selector: 'app-home',
  imports: [Services, Projects, Companies, Academic],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
