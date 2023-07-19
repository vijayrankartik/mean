import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './Services/courses.service';
import { CourseComponent } from './courses/course/course.component';
import { Routes, RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { CourseGuardService } from './Services/courseGuard.service';


const appRoute: Routes = [{path: "", component: HomeComponent},
  {path: "Home", component: HomeComponent},
  {path: "About", component: AboutComponent},
  {path: "Contact", component: ContactComponent, canDeactivate: [CourseGuardService]},
  {path: "Courses", component: CoursesComponent, canActivate: [CourseGuardService], canActivateChild:[CourseGuardService]},
  {path: "Courses",
    children: [{path: "Course/:id", component:CourseComponent}]
    // path: "Courses/Course/:id", component: CourseComponent
    },
  {path: "**", component: ErrorComponent}
  ];
  
@NgModule({
    imports: [
        BrowserModule, 
        RouterModule.forRoot(appRoute),FormsModule
      ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}