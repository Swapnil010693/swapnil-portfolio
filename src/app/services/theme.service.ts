import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);

  constructor() {
    // Load the theme preference from localStorage on initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setDarkMode(savedTheme === 'dark');
    }
  }

  getDarkMode() {
    return this.isDarkMode.asObservable();
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode.next(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }

  toggleTheme() {
    this.setDarkMode(!this.isDarkMode.value);
  }
}