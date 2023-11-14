import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  // { path: '', component: AppComponent},
  // { path: 'home', component: HomeComponent},

  { 
    path: '',
     component: HomeComponent
    },
  // { 
  //     path: 'home',
  //      component: HomeComponent
  //   },
  { 
    path: 'course',
     component: CourseComponent 
    },
  { 
    path: 'about',
     component: AboutComponent
    },
  { 
    path: 'contact',
     component: ContactComponent
    },
  {
    path:"**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
