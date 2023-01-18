import { Component, OnInit } from '@angular/core';
import { Drone, DroneAPIService } from './drone-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForestManager';
}
