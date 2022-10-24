import {Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Output() chatSelected = new EventEmitter<any>();

  count = [1,2,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  isSideOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSide() {
    this.isSideOpen = !this.isSideOpen;
  }


  chatClicked(i: number) {
    console.log(i)
    this.chatSelected.emit({i, stat: true});
  }
}
