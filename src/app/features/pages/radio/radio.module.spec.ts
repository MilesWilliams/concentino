import { RadioModule } from './radio.module';

describe('RadioModule', () => {
  let radioModule: RadioModule;

  beforeEach(() => {
    radioModule = new RadioModule();
  });

  it('should create an instance', () => {
    expect(radioModule).toBeTruthy();
  });
});
