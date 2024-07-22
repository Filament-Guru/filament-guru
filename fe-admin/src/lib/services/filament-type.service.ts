import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FilamentType } from '../interfaces/filament-type.interface';
import { Observable } from 'rxjs';

const API_ROUTE = '/api/filament-type';

@Injectable({
  providedIn: 'root',
})
export class AdminFilamentTypeService {
  filamentTypes = signal<FilamentType[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  private apiGet(id: number): Observable<FilamentType | FilamentType[]> {
    return this.httpClient.get<FilamentType>(`${API_ROUTE}/${id}`);
  }

  private apiGetMany(): Observable<FilamentType[]> {
    return this.httpClient.get<FilamentType[]>(API_ROUTE);
  }

  getMany() {
    this.apiGetMany().subscribe((data) => {
      this.filamentTypes.update(() => data);
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
