import { TopChartsModule } from './top-charts.module';

describe('TopChartsModule', () => {
  let topChartsModule: TopChartsModule;

  beforeEach(() => {
    topChartsModule = new TopChartsModule();
  });

  it('should create an instance', () => {
    expect(topChartsModule).toBeTruthy();
  });
});
