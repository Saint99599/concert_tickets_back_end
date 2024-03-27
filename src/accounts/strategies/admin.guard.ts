import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // ไม่มีการกำหนดบทบาท ให้ผ่านการตรวจสอบ
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user; // user จะถูกเซตให้โดย AuthGuard หลังจากผู้ใช้ผ่านการยืนยันตัวตน
    return user && user.role === 'admin'; // ตรวจสอบบทบาทของผู้ใช้ว่าเป็น admin หรือไม่
  }
}
