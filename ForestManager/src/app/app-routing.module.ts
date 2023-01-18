import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DronesComponent } from './drones/drones.component';
import { SettingsComponent } from './settings/settings.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'drones' },
  { path: 'drones', component: DronesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'scan/:id', component: ScanComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
