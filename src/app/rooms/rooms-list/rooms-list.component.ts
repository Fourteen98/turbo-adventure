import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnInit {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = ' '
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  ngOnInit(): void {
    /* comments */
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['title']) {
      this.title = String(changes['title'].currentValue).toUpperCase()
    }
  }

}
