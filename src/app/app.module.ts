import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WorkingComponent } from './working/working.component';
import { NgOtpInputModule } from  'ng-otp-input';
@NgModule({
  declarations: [
    AppComponent,
    WorkingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOtpInputModule,
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
