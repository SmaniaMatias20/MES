import { Component } from '@angular/core';
import { Services } from '../../sections/services/services';
import { Technologies } from '../../sections/technologies/technologies';
import { Projects } from '../../sections/projects/projects';
import { Companies } from '../../sections/companies/companies';

@Component({
  selector: 'app-home',
  imports: [Services, Technologies, Projects, Companies],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
