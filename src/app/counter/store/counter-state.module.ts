import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureName } from './counter/counter.state';
import { reducer } from './counter/counter.reducer';
import { CounterEffects } from './counter/counter.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([CounterEffects])
  ]
})
export class CounterStoreModule {}
