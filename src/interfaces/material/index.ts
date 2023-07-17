import { SiteInterface } from 'interfaces/site';
import { GetQueryInterface } from 'interfaces';

export interface MaterialInterface {
  id?: string;
  name: string;
  quantity: number;
  site_id?: string;
  created_at?: any;
  updated_at?: any;

  site?: SiteInterface;
  _count?: {};
}

export interface MaterialGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  site_id?: string;
}
