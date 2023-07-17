interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Project Manager'],
  customerRoles: [],
  tenantRoles: ['Site Manager', 'Construction Worker', 'Project Manager'],
  tenantName: 'Organization',
  applicationName: 'Builden',
  addOns: ['notifications'],
};
