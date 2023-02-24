import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  activeRecents: number = -1;
  activeFolders: number = -1;
  recents: any = [
    { id: 1, title: 'Reflection on the Month of June' },
    { id: 2, title: 'Project Proposal' },
    { id: 3, title: 'Travel Itinerary' },
  ];

  folders: any = [
    { id: 1, title: 'Personal' },
    { id: 2, title: 'Work' },
    { id: 3, title: 'Travel' },
    { id: 3, title: 'Events' },
    { id: 3, title: 'Finances' },
  ];
}
