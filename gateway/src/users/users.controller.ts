import { Controller, Get } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('/users')
export class UsersController {
  @Client({ transport: Transport.TCP, options: { port: 3001 } })
  private client: ClientProxy;

  @Get()
  public find(): Observable<any[]> {
    return this.client.send({ cmd: 'find' }, '');
  }
}
