import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  todos = [
    {
      _id: "599c43ec7f0a9e690453ebe3",
      text: "Eat the lunch",
      completedAt: null,
      completed: false
    },
    {
      _id: "000c43ec7f0a9e690453ebe3",
      text: "Dog walk",
      completedAt: null,
      completed: false
    },
    {
      _id: "599c43ec7f0a9e690453ebe3",
      text: "Eat the lunch",
      completedAt: null,
      completed: false
    },
    {
      _id: "000c43ec7f0a9e690453ebe3",
      text: "Dog walk",
      completedAt: null,
      completed: false
    },
    {
      _id: "599c43ec7f0a9e690453ebe3",
      text: "Eat the lunch",
      completedAt: null,
      completed: false
    },
    {
      _id: "000c43ec7f0a9e690453ebe3",
      text: "Dog walk",
      completedAt: null,
      completed: false
    },
    {
      _id: "599c43ec7f0a9e690453ebe3",
      text: "Eat the lunch",
      completedAt: null,
      completed: false
    },
    {
      _id: "000c43ec7f0a9e690453ebe3",
      text: "Dog walk",
      completedAt: null,
      completed: false
    },
    {
      _id: "599c43ec7f0a9e690453ebe3",
      text: "Eat the lunch",
      completedAt: null,
      completed: false
    },
    {
      _id: "000c43ec7f0a9e690453ebe3",
      text: "Dog walk",
      completedAt: null,
      completed: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
