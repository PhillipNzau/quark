import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatsComponent } from './chats.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ChatBoardComponent } from './components/chat-board/chat-board.component';
import {PickerModule} from "@ctrl/ngx-emoji-mart";
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    ChatsComponent,
    ContactsComponent,
    ChatBoardComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    PickerModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ChatsModule { }
