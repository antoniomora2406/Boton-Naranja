import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  public map: mapboxgl.Map | undefined;
  public style = 'mapbox://styles/mapbox/streets-v12';
  public ubicacionActual: any;

  constructor() {
    (mapboxgl as any).accessToken = environment.MAPBOX_KEY;
  }

  ngOnInit() { }

  ionViewWillEnter() {
    if (!this.map) {
      this.buildMap();
    }
  }

  buildMap() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.ubicacionActual = position.coords;

      this.map = new mapboxgl.Map({
        container: 'mapa-mapbox',
        style: this.style,
        center: [this.ubicacionActual.longitude, this.ubicacionActual.latitude],
        zoom: 17.5,
      });

      const marker1 = new mapboxgl.Marker({color: "orange",draggable: true})
        .setLngLat([this.ubicacionActual.longitude, this.ubicacionActual.latitude])
        .addTo(this.map);

      console.log(`Ubicación actual: ${this.ubicacionActual.latitude}, ${this.ubicacionActual.longitude}`);
    });
  }
}