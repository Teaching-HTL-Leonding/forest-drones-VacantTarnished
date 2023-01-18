import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DroneAPIService, Position, ScanResult } from '../drone-api.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  id?: number;
  scanResult?: ScanResult;

  constructor(private droneService: DroneAPIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.droneService.scanArea(this.id!).subscribe(scanResult => {
        this.scanResult = scanResult;
      })
    })
  }
}
