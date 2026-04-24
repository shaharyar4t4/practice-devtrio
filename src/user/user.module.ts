import { Module } from '@nestjs/common';
import { ProvidesService } from './provides/provides.service';
import { UserController } from './user.controller';

@Module({
  providers: [ProvidesService],
  controllers: [UserController]
})
export class UserModule {}
