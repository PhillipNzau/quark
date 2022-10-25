import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.scss']
})
export class ChatBoardComponent implements OnInit {
  count = [1,2,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  textArea: string = '';
  isEmojiPickerVisible: boolean = false;
  isSearchOpen = false;
  searchText: any;
  heroes = [
    { id: 11, message: 'And BTW the refund issue was triggered by a', time: '2:56' },
    { id: 12, message: 'suggestion that the funds be used to ' ,  time: '2:56' },
    { id: 13, message: 'block the club. No show stopping. ' ,  time: '2:56' },
    { id: 14, message: 'They can both be handled concurrently' ,  time: '2:56' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addEmoji($event: any) {
    this.textArea = `${this.textArea}${$event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  sendMessage() {
    // const date = Date.now().ge
  }
}
