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
import { AppRoutingModule } from './routing.module';
import { CourseGuardService } from './Services/courseGuard.service';
import { AutheService } from './Services/auth.service';
import { CourseResolveService } from './Services/course-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CourseComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [CoursesService, CourseGuardService, AutheService, CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
