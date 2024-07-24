import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.css',
})
export class StartpageComponent {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient.get('/api').subscribe((data) => {
      console.log(data);
    });
  }
}
