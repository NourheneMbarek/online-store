import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './product/product.module#Exemple2ProductModule'
      },
      {
        path: 'product-category',
        loadChildren: './product-category/product-category.module#Exemple2ProductCategoryModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#Exemple2CustomerModule'
      },
      {
        path: 'product-order',
        loadChildren: './product-order/product-order.module#Exemple2ProductOrderModule'
      },
      {
        path: 'order-item',
        loadChildren: './order-item/order-item.module#Exemple2OrderItemModule'
      },
      {
        path: 'invoice',
        loadChildren: './invoice/invoice.module#Exemple2InvoiceModule'
      },
      {
        path: 'shipment',
        loadChildren: './shipment/shipment.module#Exemple2ShipmentModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Exemple2EntityModule {}
