import { Injectable } from '@angular/core';
import { Device } from './device';
import { DEVICES } from './mock-devices';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    const devices = of(DEVICES);
    return devices;
  }

  getDevice(id: number): Observable<Device> {
    // TODO: add error handling for null id
    const device = DEVICES.find(d => d.id === id)!;
    
    return of(device);
  }
}
