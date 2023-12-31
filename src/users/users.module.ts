import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserDevicesService } from 'src/user-devices/user-devices.service';
import { UserDevicesModule } from 'src/user-devices/user-devices.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // JwtModule.register({
    //   global: true,
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '1d' },
    // }),
    UserDevicesModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
