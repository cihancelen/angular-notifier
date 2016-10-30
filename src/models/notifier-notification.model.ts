import { NotifierNotificationComponent } from './../components/notifier-notification.component';

/**
 * Notification model
 */
export class NotifierNotification {

	public type: string;

	public message: string;

	public component: NotifierNotificationComponent;

	public constructor( options: any ) {
		this.type = options.type;
		this.message = options.message;
		this.component = null;
	}

}