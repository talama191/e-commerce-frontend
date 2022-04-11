import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    isShowing: boolean;
    isStartingAnimation: boolean;
    isDisappearing: boolean;
    message: string;

    timeOut1: any;
    timeOut2: any;
    timeOut3: any;
    constructor(private notificationService: NotificationService, private router: Router) {
        this.isShowing = false;
        this.isDisappearing = false;
        this.isStartingAnimation = false;
        this.message = "Test";
        notificationService.notificationInstance = this;
    }
    ngOnInit(): void {

    }

    showNotification(message: string) {

        if(this.timeOut1!=undefined){
            clearTimeout(this.timeOut1);
            clearTimeout(this.timeOut2);
            clearTimeout(this.timeOut3);
        }
        this.isStartingAnimation = false
        this.isDisappearing = false;
        this.message = message;
        this.isShowing = true;
        this.timeOut1 = setTimeout(() => { this.isStartingAnimation = true, this.message = "" }, 1500)
        this.timeOut2 = setTimeout(() => {
            this.isDisappearing = true;
        }, 3000)
        this.timeOut3 = setTimeout(() => {
            this.isShowing = false;
            this.isStartingAnimation = false
            this.isDisappearing = false;
        }, 4000)
    }



}
