import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private _config: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    console.log(this.tasks[0]);
    const apiKey = this._config.apiKey;
    return `Hello World! ${apiKey}`;
  }
}
