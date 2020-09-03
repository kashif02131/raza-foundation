import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  books = [
    {
      author: 'Edwards, Henry Sutherland',
      name: 'https://book-cover-kashif.s3.ap-south-1.amazonaws.com/a.png',
      title: 'Old and new Paris: its history, its people, and its places ',
    },
    {
      author: 'De Moncan, Patrice',
      name: 'https://book-cover-kashif.s3.ap-south-1.amazonaws.com/c.png',
      title: 'Les jardins du Baron Haussmann (in French)',
    },
    {
      author: 'Jarrassé, Dominique',
      name: 'https://book-cover-kashif.s3.ap-south-1.amazonaws.com/a.png',
      title: 'Grammaire des jardins Parisiens',
    },
  ];
}
