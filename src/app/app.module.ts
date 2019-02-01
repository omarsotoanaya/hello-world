import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCastingComponent } from './title-casting/title-casting.component';
import { from } from 'rxjs';
import { TitleCasePipe } from './title-case.pipe';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArraySampleComponent } from './form-array-sample/form-array-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCastingComponent,
    TitleCasePipe,
    SignupFormComponent,
    FormArraySampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
