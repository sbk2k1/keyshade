import { Module } from '@nestjs/common'
import { AuthService } from './service/auth.service'
import { AuthController } from './controller/auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
        issuer: 'keyshade.xyz',
        algorithm: 'HS256'
      }
    }),
    UserModule
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
