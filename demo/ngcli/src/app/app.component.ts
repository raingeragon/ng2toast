import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager, Toast} from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vRef);
  }
  audio = new Audio();
  showAddUser() {
    let NotificationTitle:string = "User Name";
    let NotificationMessage:string = "Wants to add you to friendlist";
    this.audio.src="assets/1.mp3";
    this.audio.play();
    let htmlmessage: string = 
    "<div>"+
      "<img src=\"assets/add_user.png\""+
      "style=\"width:30px; height:30px;\"></img>"+
      "<span style=\"font-weight:bold; font-size:14pt; margin-left: 10px;\">"+NotificationTitle+"</span>"+
    "</div>"+
    "<div>"+NotificationMessage +"</div>";

    this.toastr.custom(htmlmessage, null,
                      {
                        enableHTML: true
                      });
  }
  showAddChat() {
    this.audio.src="assets/1.mp3";
    this.audio.play();
    let NotificationTitle:string = "User Name";
    let NotificationMessage:string = "Invites you to Chat Name";
    let htmlmessage: string = 
    "<div>"+
      "<img src=\"assets/new_chat.png\""+
      "style=\"width:30px; height:30px;\"></img>"+
      "<span style=\"font-weight:bold; font-size:14pt; margin-left: 10px;\">"+NotificationTitle+"</span>"+
    "</div>"+
    "<div>"+NotificationMessage +"</div>";

    this.toastr.custom(htmlmessage, null,
                      {
                        enableHTML: true
                      });
  }
  showNewMessage() {
    this.audio.src="assets/1.mp3";
    this.audio.play();
    let NotificationTitle:string = "Sender Name";
    let NotificationMessage:string = "Long Message Long Message Long Message Long Message Long Message ";
    let htmlmessage: string = 
    "<div>"+
      "<img src=\"assets/message.png\""+
      "style=\"width:30px; height:30px;\"></img>"+
      "<span style=\"font-weight:bold; font-size:14pt; margin-left: 10px;\">"+NotificationTitle+"</span>"+
    "</div>"+
    "<div>"+NotificationMessage +"</div>";

    this.toastr.custom(htmlmessage, null,
                      {
                        enableHTML: true
                      });
  }
  showNewMessageInChat() {
    this.audio.src="assets/1.mp3";
    this.audio.play();
    let NotificationTitle:string = "Chat Name";
    let NotificationMessage:string = "Short Message";
    let htmlmessage: string = 
    "<div>"+
      "<img src=\"assets/message_in_chat.png\""+
      "style=\"width:30px; height:30px;\"></img>"+
      "<span style=\"font-weight:bold; font-size:14pt; margin-left: 10px;\">"+NotificationTitle+"</span>"+
    "</div>"+
    "<div>"+NotificationMessage +"</div>";

    this.toastr.custom(htmlmessage, null,
                      {
                        enableHTML: true
                      });
  }

  
}
