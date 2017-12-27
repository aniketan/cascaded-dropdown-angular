import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { environment } from '../environments/environment';
@Injectable()
export class GeodataService {

  public  BASE =  environment.apiBaseUrl;
  
  constructor(private http: Http) { }
  
  getAllCountries() {
        return this.http.get(this.BASE+"countries").map((response: any) => response.json());
    }

  getAllStates(countryId) {
        return this.http.get(this.BASE+"states&country_id="+countryId).map((response: any) => response.json());
    }
	
  getAllCities(stateId) {
        return this.http.get(this.BASE+"cities&state_id="+stateId).map((response: any) => response.json());
    }
}
