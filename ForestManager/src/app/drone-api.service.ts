import { HttpClient, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Drone {
  id: number;
  isActive: boolean;
  position?: Position;
}

export interface Position {
  x: number;
  y: number;
}

export interface ScanResult {
  dronePosition: Position;
  damagedTrees: Position[];
}

@Injectable({
  providedIn: 'root'
})
export class DroneAPIService {

  constructor(private httpClient: HttpClient) { }

  getDrones(): Observable<Drone[]> {
    return this.httpClient.get<Drone[]>('http://localhost:5110/drones', {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    });
  }

  activateDrone(id: number): Observable<unknown> {
    return this.httpClient.post(`http://localhost:5110/drones/${id}/activate`, null);
  }

  deactivateDrone(id: number): Observable<unknown> {
    return this.httpClient.post(`http://localhost:5110/drones/${id}/shutdown`, null);
  }

  flyTo(id: number, x: number, y: number): Observable<Position> {
    return this.httpClient.post<Position>(`http://localhost:5110/drones/${id}/flyTo`, { x, y });
  }

  scanArea(id: number): Observable<ScanResult> {
    return this.httpClient.get<ScanResult>(`http://localhost:5110/drones/${id}/scan`);
  }
}
