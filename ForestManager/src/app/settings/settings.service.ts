import { Injectable } from '@angular/core';
import { Drone } from '../drone-api.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private drone?: Drone;

  constructor() { }


  getDrone(): Drone | undefined {
    return this.drone;
  }

  setDrone(drone: Drone) {
    this.drone = drone;
  }
}
