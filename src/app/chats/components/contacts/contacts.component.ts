import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  count = [1,2,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  constructor() { }

  ngOnInit(): void {
  }

}
