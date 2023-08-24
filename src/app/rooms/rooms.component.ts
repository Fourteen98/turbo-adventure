import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'room-root',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked{
  hotelName = 'hotelinventoryapp';
  numberOfRooms = 10;

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] = [];

  // roomsService = new RoomsService(); // mostly dont do this

  constructor(private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  title : string = "Room List";
  selectedRoom!: RoomList
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(this.selectedRoom);
  }

  addRoom() {
    console.log('Add room called')
    const room: RoomList = {
      roomNumber: 6,
      roomType: 'Best Suite Room',
      amenities: "Air Conditionr, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 1000,
      photos: "https://unsplash.com/photos/s4yfYIz964U",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 4.9
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }

  ngDoCheck(): void {
      console.log("onChanges is called!  ")
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    // this.headerComponent.title = "Rooms View";
  }

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View";
  }
}
