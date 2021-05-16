import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationSubject: Subject<Notification> = new Subject<Notification>();
  constructor() {}
  get notification$(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }

  emitNotification(notification: Notification): void {
    this.notificationSubject.next(notification);
  }
}
