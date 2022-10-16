import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ChatBoardComponent } from './components/chat-board/chat-board.component';


@NgModule({
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatBoardComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
