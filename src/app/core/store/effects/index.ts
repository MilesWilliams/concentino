import { RouterEffects } from './router.effects';
import { NavEffects } from '../../core-components/sidebar/store/effects';
export const Effects: any[] = [RouterEffects, ...NavEffects];

export * from './router.effects';

