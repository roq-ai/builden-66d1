const mapping: Record<string, string> = {
  materials: 'material',
  organizations: 'organization',
  sites: 'site',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
