import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkMode = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getDarkMode().subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
