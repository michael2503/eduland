import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'michael';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  scrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      // document.querySelector('').scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }

}
