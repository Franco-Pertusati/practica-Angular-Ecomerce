import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {
  title = 'storeTest';
}
