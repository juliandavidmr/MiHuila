import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SitiosPage } from "../sitios/sitios";
import { DestacadosPage } from "../destacados/destacados";
import { MapsPage } from "../maps/maps";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Sitios = SitiosPage;
  tab5Destacados = DestacadosPage;
  tab6Mapa = MapsPage;

  constructor() {

  }
}
