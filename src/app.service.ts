import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    private _configService: ConfigService,
  ) {}

  getHello(): string {
    console.log(this.tasks[0]);
    const apiKey = this._configService.get('API_KEY');
    return `Hello World! ${apiKey}`;
  }
}
