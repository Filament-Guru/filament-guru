import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css',
})
export class StartpageComponent {}
