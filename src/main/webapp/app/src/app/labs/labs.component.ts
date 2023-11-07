import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {

  @Input() ads: AdItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
