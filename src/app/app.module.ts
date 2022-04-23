import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WorkingComponent } from './working/working.component';
@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
     {
       path:"working",
       component:WorkingComponent
     },
     {
       path:'',
       redirectTo:'/working',
       pathMatch:'full'
     }

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
