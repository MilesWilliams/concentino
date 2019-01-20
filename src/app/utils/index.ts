import { Type } from './middleware/action-checker.middleware';
import * as fromFormatting from './formating';
import { Pipes } from './pipes';
import * as fromAnimations from './animations';
import * as fromForms from './forms';
import * as fromHelpers from './helpers';

export const Utils = {
	Animations: { ...fromAnimations },
	Format: { ...fromFormatting },
	Forms: fromForms,
	Helpers: { ...fromHelpers },
	Pipes: { ...Pipes },
	Type,
};
