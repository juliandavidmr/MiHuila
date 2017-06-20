import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SitiosPage } from "../sitios/sitios";
import { DestacadosPage } from "../destacados/destacados";
import { MapsPage } from "../maps/maps";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Sitios = SitiosPage;
  tab5Destacados = DestacadosPage;
  tab6Mapa = MapsPage;

  constructor() {

  }
}