import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnInit, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = ''
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  ngOnInit(): void {
    /* comments */
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = String(changes['title'].currentValue).toUpperCase()
    }
  }

  ngOnDestroy(): void {
    console.log('Room List On destroy is called!!!');
  }

}
