import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent {
  sidebarItems = [
    {
      name: $localize`:@@adminSidebar.startpage:Startpage`,
      path: '/admin/index',
    },
    { name: $localize`:@@adminSidebar.producer:Producer`, path: '/admin/producer' },
    { name: $localize`:@@adminSidebar.color:Color`, path: '/admin/color' },
    { name: $localize`:@@adminSidebar.colorType:Color Type`, path: '/admin/color-type' },
    { name: $localize`:@@adminSidebar.filamentType:Filament Type`, path: '/admin/filament-type' },
  ];
}
