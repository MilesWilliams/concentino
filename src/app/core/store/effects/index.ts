import { RouterEffects } from './router.effects';
import { NavEffects } from '../../core-components/store/effects';
export const Effects: any[] = [RouterEffects, ...NavEffects];

export * from './router.effects';

