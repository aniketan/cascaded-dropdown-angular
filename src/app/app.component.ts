import { Component,OnInit } from '@angular/core';
import { GeodataService} from './geodata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cascaded Dropdown';
  
  cal_country : any[];
  cal_state: any[];
  cal_city: any[];
  
  constructor(private ApiService: GeodataService) {}
  
  ngOnInit() {
	  this.ApiService.getAllCountries().subscribe(data => {		
      //console.log(data);	
			this.cal_country = data;			
		});
  }
  
  onCountryCSelect(countryId){
	  this.ApiService.getAllStates(countryId).subscribe(data => {
			this.cal_state = data;
		});
  }
  
  onStateSelect(stateId){
	  this.ApiService.getAllCities(stateId).subscribe(data => {	
			this.cal_city = data;	
		});
  }
  
}
