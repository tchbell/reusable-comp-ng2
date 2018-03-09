import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService{
  getCurrentLocation(): [number, number]{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos => {
        console.log("Position: " + pos.coords.latitude, "," , pos.coords.longitude);//TODO REMOVE
        return [pos.coords.latitude, pos.coords.longitude];
      },
      err => console.error("Unable to get the location"))
    }else{
      console.error("Geolocation is not available");
      return [0,0];
    }
  }
}
