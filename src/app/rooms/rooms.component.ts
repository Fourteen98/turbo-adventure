import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'room-root',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'hotelinventoryapp';
  numberOfRooms = 10;

  rooms: Room = {
    availableRooms: 20,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: "Air Conditionr, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 500,
      photos: "https://unsplash.com/photos/s4yfYIz964U",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: "Air Conditionr, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 500,
      photos: "https://unsplash.com/photos/s4yfYIz964U",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 4.5
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: "Air Conditionr, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 1000,
      photos: "https://unsplash.com/photos/s4yfYIz964U",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 4.5
    },
    {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: "Air Conditionr, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 1000,
      photos: "https://unsplash.com/photos/s4yfYIz964U",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 4.5
    },
    {
      roomNumber: 5,
      roomType: 'Private Room',
      amenities: "Air Conditionr, Free Wi-Fi, Tv, Bathroom, Kitchen",
      price: 1000,
      photos: "https://unsplash.com/photos/s4yfYIz964U",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Dec-2021'),
      rating: 4.5
    }
  ];

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
}
