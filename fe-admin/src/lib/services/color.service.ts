import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Color } from '../interfaces/color.interface';
import { Observable } from 'rxjs';

const API_ROUTE = '/api/color';

@Injectable({
  providedIn: 'root',
})
export class AdminColorService {
  colors = signal<Color[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  private apiGet(id: number): Observable<Color | Color[]> {
    return this.httpClient.get<Color>(`${API_ROUTE}/${id}`);
  }

  private apiGetMany(): Observable<Color[]> {
    return this.httpClient.get<Color[]>(API_ROUTE);
  }

  getMany() {
    this.apiGetMany().subscribe((data) => {
      this.colors.update(() => data);
    });
  }

  create(data: any) {
    return this.httpClient.post(API_ROUTE, data);
  }

  update(id: number, data: any) {
    return this.httpClient.put(`${API_ROUTE}/${id}`, data);
  }

  delete(id: number) {
    return this.httpClient.delete(`${API_ROUTE}/${id}`);
  }
}
