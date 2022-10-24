import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  isSideOpen = false;
  openNav = false;
  // data = {id, stat}
  constructor() { }

  ngOnInit(): void {
  }

  toggleSide() {
    this.isSideOpen = !this.isSideOpen;
  }

  toggleOpenNav() {
    this.openNav = !this.openNav;
  }
}
