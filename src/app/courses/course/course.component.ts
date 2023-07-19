import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesService]
})
export class CourseComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
              private service : CoursesService,
              private router : Router) { }

  courseID;
  course;
  routeParamObs;
  editMode: boolean = false;

  ngOnInit(): void {
    // this.courseID = this.activatedRoute.snapshot.paramMap.get("id")
    // this.course = this.service.courses.find((course) => course.id == this.courseID)
    // console.log(this.course);
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseID = param.get("id");
      this.course = this.service.courses.find((course) => course.id == this.courseID)
    })

    this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get("edit"));
    })
  }

  ngOnDestroy(){
    this.routeParamObs.unsubscribe();
  }
  appendQueryParamater(){
    // this.editMode = true;
    this.router.navigate(["Courses/Course", this.courseID], {
      queryParams: {edit : true},
    })
  }
}
