import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterStoreModule } from './store';
import { CounterRoutingModule } from './counter-routing.module';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, CounterRoutingModule, CounterStoreModule],
  exports: [CounterComponent]
})
export class CounterModule {}
