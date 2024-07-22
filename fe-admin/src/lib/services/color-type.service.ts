import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ColorType } from '../interfaces/color-type.interface';
import { Observable } from 'rxjs';

const API_ROUTE = '/api/color';

@Injectable({
  providedIn: 'root',
})
export class AdminColorTypeService {
  colorTypes = signal<ColorType[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  private apiGet(id: number): Observable<ColorType | ColorType[]> {
    return this.httpClient.get<ColorType>(`${API_ROUTE}/${id}`);
  }

  private apiGetMany(): Observable<ColorType[]> {
    return this.httpClient.get<ColorType[]>(API_ROUTE);
  }

  getMany() {
    this.apiGetMany().subscribe((data) => {
      this.colorTypes.update(() => data);
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
