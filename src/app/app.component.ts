import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable, Subscriber} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Dollar sign to annotate it as Observable
  courses$: Observable<Course[]>;
  
  // Here, injecting the HttpClient in the constructor makes Angular to create the appropriate instance. Similar to what Spring does apparently.
  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {

    console.log(this.coursesService);
    const params = new HttpParams()
                        .set("page", "1")
                        .set("pageSize", "10");

    this.courses$ = this.coursesService.loadCourses();
    
    // Since the get() method returns an Observable, we need to subscribe to trigger it.
    // this.http.get('/api/courses', {params: params})
    //   .subscribe(
    //     courses => this.courses = courses
    //   );

  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log("Course Saved!")
    );
  }

}
