import { FavouritesModule } from './favourites.module';

describe('FavouritesModule', () => {
  let favouritesModule: FavouritesModule;

  beforeEach(() => {
    favouritesModule = new FavouritesModule();
  });

  it('should create an instance', () => {
    expect(favouritesModule).toBeTruthy();
  });
});
