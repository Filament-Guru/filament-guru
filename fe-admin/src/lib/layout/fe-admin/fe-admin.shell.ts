import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar.component';
import { AdminNavbarComponent } from '../admin-navbar.component';

@Component({
  selector: 'admin-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminSidebarComponent, AdminNavbarComponent],
  template: `
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <admin-navbar />
    <admin-sidebar />
    <main class="p-4 md:ml-64 h-auto pt-20">
      <router-outlet />
    </main>
  </div>
  `
})
export class FeAdminShell {
}
