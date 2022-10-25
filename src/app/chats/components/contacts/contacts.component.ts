import {Component, EventEmitter, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Output() chatSelected = new EventEmitter<any>();

  isSideOpen = false;
  searchText: any;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];
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
