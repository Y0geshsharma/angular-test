import { TestBed } from '@angular/core/testing';
import {AppModule} from '../app.module';

import { CommunicateService } from './communicate.service';

describe('CommunicateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicateService = TestBed.get(CommunicateService);
    expect(service).toBeTruthy();
  });
});
