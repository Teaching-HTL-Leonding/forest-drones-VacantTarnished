import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drone, DroneAPIService, Position } from '../drone-api.service';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  newPos: Position = { x: 0, y: 0 };
  drone?: Drone;

  constructor(private router: Router, private droneService: DroneAPIService, private settingsService: SettingsService) {}

  ngOnInit() {
    this.drone = this.settingsService.getDrone();
  }

  onSwitchState(id: number) {
    console.log(`Switch state clicked for drone ${id}`);
    if (this.drone!.isActive) {
      this.droneService.deactivateDrone(id).subscribe(() => {
        this.drone!.isActive = false;
        this.drone!.position = undefined;
      });
    } else {
      this.droneService.activateDrone(id).subscribe(() => {
        this.drone!.isActive = true;
      });
    }
  }


  flyTo(id: number) {
    console.log(`Fly to clicked for drone ${id}`);
    this.droneService.flyTo(id, this.newPos.x, this.newPos.y).subscribe(pos => {
      this.drone!.position = pos;
    });

    this.newPos = {x: 0, y: 0};
  }

  scanDroneArea(id: number) {
    this.router.navigateByUrl(`/scan/${id}`);
  }
}
