import { Controller, Get } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('/groups')
export class GroupsController {
  @Client({ transport: Transport.TCP, options: { port: 3002 } })
  private client: ClientProxy;

  @Get()
  public find(): Observable<any[]> {
    return this.client.send({ cmd: 'find' }, '');
  }
}
