import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Exemple2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Exemple2SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Exemple2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Exemple2SharedModule {
  static forRoot() {
    return {
      ngModule: Exemple2SharedModule
    };
  }
}
