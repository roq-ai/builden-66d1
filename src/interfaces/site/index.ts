import { MaterialInterface } from 'interfaces/material';
import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SiteInterface {
  id?: string;
  name: string;
  status: string;
  organization_id?: string;
  site_manager_id?: string;
  created_at?: any;
  updated_at?: any;
  material?: MaterialInterface[];
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    material?: number;
    task?: number;
  };
}

export interface SiteGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  organization_id?: string;
  site_manager_id?: string;
}
