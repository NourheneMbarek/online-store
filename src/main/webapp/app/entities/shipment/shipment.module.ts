import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { Exemple2SharedModule } from 'app/shared';
import {
  ShipmentComponent,
  ShipmentDetailComponent,
  ShipmentUpdateComponent,
  ShipmentDeletePopupComponent,
  ShipmentDeleteDialogComponent,
  shipmentRoute,
  shipmentPopupRoute
} from './';

const ENTITY_STATES = [...shipmentRoute, ...shipmentPopupRoute];

@NgModule({
  imports: [Exemple2SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ShipmentComponent,
    ShipmentDetailComponent,
    ShipmentUpdateComponent,
    ShipmentDeleteDialogComponent,
    ShipmentDeletePopupComponent
  ],
  entryComponents: [ShipmentComponent, ShipmentUpdateComponent, ShipmentDeleteDialogComponent, ShipmentDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Exemple2ShipmentModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
