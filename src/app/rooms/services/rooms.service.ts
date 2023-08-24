import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

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

  getRooms() {
    return this.roomList;
  }
}
