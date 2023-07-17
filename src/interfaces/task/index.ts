import { SiteInterface } from 'interfaces/site';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  status: string;
  site_id?: string;
  construction_worker_id?: string;
  created_at?: any;
  updated_at?: any;

  site?: SiteInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  site_id?: string;
  construction_worker_id?: string;
}
