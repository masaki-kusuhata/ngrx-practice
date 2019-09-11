import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureName } from './states/counter.state';
import { reducer } from './reducers/counter.reducer';
import { CounterEffects } from './effects/counter.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([CounterEffects])
  ]
})
export class CounterStoreModule {}
