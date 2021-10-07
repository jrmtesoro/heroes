import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditLogService {
  auditLog: string[] = [];

  constructor() {}

  add(auditLog: string) {
    this.auditLog.push(auditLog);
  }

  clear() {
    this.auditLog = [];
  }
}
