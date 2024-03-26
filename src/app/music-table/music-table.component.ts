import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrls: ['./music-table.component.css']
})
export class MusicTableComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  displayedColumns: string[] = ['id', 'name', 'filename'];
  dataSource = [
    {id: 1, name: 'Sam Smith - Dancing with a stranger', filename: 'dancing_with_a_stranger'},
    {id: 2, name: 'Sam Smith - Fire on fire', filename: 'fire_on_fire'},
    {id: 3, name: 'Sam Smith - Too good at goodbyes', filename: 'too_good_at_goodbyes'},
  ];
  selectedRow: { id: number, name: string, filename: string };

  constructor() {
  }

  ngOnInit(): void {
  }

  selectRow(row) {
    this.selectedRow = row;
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      let audio = this.audioPlayer.nativeElement;
      audio.load();
      audio.play();
    }
  }

  playAudio() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.play();
    }
  }

  pauseAudio() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.pause();
    }
  }

}
