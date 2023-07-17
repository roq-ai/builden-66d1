import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { siteValidationSchema } from 'validationSchema/sites';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getSites();
    case 'POST':
      return createSite();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSites() {
    const data = await prisma.site
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'site'));
    return res.status(200).json(data);
  }

  async function createSite() {
    await siteValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.material?.length > 0) {
      const create_material = body.material;
      body.material = {
        create: create_material,
      };
    } else {
      delete body.material;
    }
    if (body?.task?.length > 0) {
      const create_task = body.task;
      body.task = {
        create: create_task,
      };
    } else {
      delete body.task;
    }
    const data = await prisma.site.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
