import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  isMobile = false;

  toggleSidebar(){
    this.isMobile = !this.isMobile;
    console.log(this.isMobile);
  }
}
