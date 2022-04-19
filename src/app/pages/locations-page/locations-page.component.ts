import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

  constructor(private locationService: LocationsService) { }

  locations: any;

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((res: any) => {
      console.log(res);
      this.locations = res.results;
    });
}
}
