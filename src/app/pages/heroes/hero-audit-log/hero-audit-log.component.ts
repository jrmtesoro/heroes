import { Component, OnInit } from '@angular/core';

import { AuditLogService } from '../../../core/audit-log.service';

@Component({
  selector: 'app-hero-audit-log',
  templateUrl: './hero-audit-log.component.html',
  styleUrls: ['./hero-audit-log.component.css']
})
export class HeroAuditLogComponent implements OnInit {

  constructor(public auditLogService: AuditLogService) { }

  ngOnInit(): void {
  }

}
