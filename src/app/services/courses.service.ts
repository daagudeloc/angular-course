import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  // The providedIn config property means that we create just one instance of CoursesService, available at the root of the Dep. Injecter (Perhaps Context?). 
  // a.k.a: Application Singleton
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
                        .set("page", "1")
                        .set("pageSize", "10");

    return this.http.get<Course[]>('/api/courses', {params: params});
  }

  saveCourse(course: Course) {

    const headers = new HttpHeaders()
                       .set("X-Auth", "userId");

    return this.http.put(`/api/courses/${course.id}`,
                         course,
                         {headers});
  }

}
