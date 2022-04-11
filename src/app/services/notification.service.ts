import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationComponent } from '../components/layout/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    notificationInstance:NotificationComponent;

  constructor(private httpClient:HttpClient) {

   }

}
