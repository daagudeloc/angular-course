import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Course} from '../model/course'

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseView() {
    console.log("Card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return this.course.category?.toLocaleLowerCase();
  }

  // cardStyles() {
  //   return {
  //     'background-image': 'url(' + this.course.iconUrl + ')'
  //   };
  // }

}
