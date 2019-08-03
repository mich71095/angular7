import { Component, OnInit } from '@angular/core';

// services
import { MessageService } from '../.././services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(  	
  	public messageService: MessageService // public since you will bind this to template
  ) { }

  ngOnInit() {
  }

}
