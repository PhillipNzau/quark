import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.scss']
})
export class ChatBoardComponent implements OnInit {
  count = [1,2,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
