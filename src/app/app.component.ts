import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,RouterOutlet,FooterComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // This will initialize the theme based on the saved preference
    this.themeService.getDarkMode().subscribe();
  }
}
