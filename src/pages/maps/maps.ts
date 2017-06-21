import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import L from 'leaflet';
import moment from 'moment';
/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  stylemap: string = 'height:80%;'
  map: any = {};
  center: Array<Number> = [
    1.719863, -75.634241
  ]
  zoom: Number = 11;

  // Configuracion del mapa
  greenIcon = L.icon({
    iconUrl: 'assets/images/pin2.png',
    iconSize: [43, 45], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  // Load map only after view is initialize
  ngAfterViewInit() {
    this.loadMap();
  }

  doRefresh(refresher) {
    console.log("Map element:", this.map);

    this.map.eachLayer(layer => {
      // console.log("Layer", layer);
      this.map.removeLayer(layer)
    })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://200.21.7.94/sat">SAT Florencia</a> GIECOM'
    }).addTo(this.map);

    L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
  }

  /**
   * Carga el elemento del mapa
   */
  loadMap() {
    this.map = L.map('map').setView(this.center, this.zoom);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://200.21.7.94/sat">SAT Florencia</a> GIECOM'
    }).addTo(this.map);

    L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';

    // Marcador por defecto
    // this.addMarker(this.center, 'Florencia, Caquetá');
  }

  /**
   * Añade un marcador al mapa
   * @param coord Coordenadas
   * @param message Mensaje a mostrar en popup
   */
  addMarker(coord: Array<Number | String>, message: string = 'Mensaje'): void {
    // L.marker([50.5, 30.5]).addTo(this.map);
    let mark = L.marker(coord, { icon: this.greenIcon }).addTo(this.map)
      .bindPopup(message)
      .openPopup();

    mark.on('click', (event) => {
      console.log("Click", event);      
    })
  }

}
