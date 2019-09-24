import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureName } from './state/counter.state';
import { reducer } from './reducer/counter.reducer';
import { CounterEffects } from './effect/counter.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([CounterEffects])
  ]
})
export class CounterStoreModule {}
