import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Brand } from '../interfaces/brand.interface';
import { Observable } from 'rxjs';

const API_ROUTE = '/api/brand';

@Injectable({
  providedIn: 'root',
})
export class AdminBrandService {
  brands = signal<Brand[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  private apiGet(id: number): Observable<Brand | Brand[]> {
    return this.httpClient.get<Brand>(`${API_ROUTE}/${id}`);
  }

  private apiGetMany(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(API_ROUTE);
  }

  getMany() {
    this.apiGetMany().subscribe((data) => {
      this.brands.update(() => data);
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
