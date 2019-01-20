import { NewReleasesModule } from './new-releases.module';

describe('NewReleasesModule', () => {
  let newReleasesModule: NewReleasesModule;

  beforeEach(() => {
    newReleasesModule = new NewReleasesModule();
  });

  it('should create an instance', () => {
    expect(newReleasesModule).toBeTruthy();
  });
});
