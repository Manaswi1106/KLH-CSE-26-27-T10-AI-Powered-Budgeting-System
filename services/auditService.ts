//Records system and payment events
//keeping track of important actions
//AuditLog interface
export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  status: "SUCCESS" | "FAILED";
  user: string;
  details: any;
}
//Audit log storage
const auditLogs: AuditLog[] = [];
//creates audit log
export function createAuditLog(
  action: string,
  status: "SUCCESS" | "FAILED",
  user: string,
  details: any
): AuditLog {
//create log
  const log: AuditLog = {
    id: "AUDIT_" + Date.now(),
    timestamp: new Date().toISOString(),
    action,
    status,
    user,
    details
  };

  auditLogs.unshift(log);

  return log;
}

export function getAuditLogs(): AuditLog[] {
  return auditLogs;
}

export function getRecentAuditLogs(limit: number = 20): AuditLog[] {
  return auditLogs.slice(0, limit);
}

export function clearAuditLogs() {
  auditLogs.length = 0;
}