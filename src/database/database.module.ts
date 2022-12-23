import { HttpModule, HttpService } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? 'prod123' : 'dev123',
    },
    // Don't use on real project
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
          // Fix error: unexpected end of file
          // https://stackoverflow.com/questions/74713476/getting-unexpected-end-of-file-axios-error-while-making-a-get-request-in-this
          {
            headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
          },
        );
        const data = await (await firstValueFrom(tasks)).data;

        return data;
      },
      inject: [HttpService],
    },
  ],
  exports: ['API_KEY', 'TASKS'],
})
export class DatabaseModule {}
