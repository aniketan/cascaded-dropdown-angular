import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeodataService} from './geodata.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpModule
  ],
  providers: [GeodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
