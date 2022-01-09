import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MoreComponent } from './more/more.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { CountPipe } from './count.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FooterComponent,
    MoreComponent,
    FormComponent,
    CountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
