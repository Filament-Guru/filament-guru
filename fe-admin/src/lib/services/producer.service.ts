import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Producer } from '../interfaces/producer.interface';
import { Observable } from 'rxjs';

const API_ROUTE = '/api/producer';

@Injectable({
  providedIn: 'root',
})
export class AdminProducerService {
  producers = signal<Producer[]>([]);

  constructor(private readonly httpClient: HttpClient) {}

  private apiGet(id: number): Observable<Producer | Producer[]> {
    return this.httpClient.get<Producer>(`${API_ROUTE}/${id}`);
  }

  private apiGetMany(): Observable<Producer[]> {
    return this.httpClient.get<Producer[]>(API_ROUTE);
  }

  getMany() {
    this.apiGetMany().subscribe((data) => {
      this.producers.update(() => data);
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
