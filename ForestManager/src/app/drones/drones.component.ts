import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Drone, DroneAPIService } from '../drone-api.service';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css']
})
export class DronesComponent {

  drones?: Drone[];

  constructor(private router: Router, private droneService: DroneAPIService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.droneService.getDrones().subscribe(drones => {
      this.drones = drones;
    });
  }

  onSettingsButton(id: number) {
    let drone = this.drones!.find(drone => drone.id === id);

    if (drone) {
      console.log(`Settings button clicked for drone ${id}`);
      this.settingsService.setDrone(drone);
      this.router.navigateByUrl('/settings');
    }
  }
}
