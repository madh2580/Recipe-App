import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-App';

  loadedFeature = 'recipe';

  // onNavigate(eve: any) {
  //   this.loadedFeature = eve;
  //   console.log('allu eve = ', eve)

  // }
}
