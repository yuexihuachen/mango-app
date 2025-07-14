import { Context, Next } from 'hono';
import { bearerAuth } from 'hono/bearer-auth';
import CONSTANTS from '@/lib/constants';
import { verifyToken } from '@/lib/utils';
import { TUser } from '@/types/index';

export const authMiddleware = async (c: Context, next: Next) => {
  let token = '';
  if (
    c.req.header('Authorization') &&
    c.req.header('Authorization')?.startsWith('Bearer')
  ) {
    token = c.req.header('Authorization')?.replace(/Bearer\s+/i, '') as string;
  }
  const failed = CONSTANTS.FAILED;
  failed.msg = CONSTANTS.INVALID_ACCESS_TOKEN;
  const bearer = bearerAuth({ 
    token,
    noAuthenticationHeaderMessage: async (c) => {
      return failed
    },
    invalidAuthenticationHeaderMessage: async (c) => {
      return failed
    },
    invalidTokenMessage: async (c) => {
      return failed
    },
    hashFunction: async (t: string) => {
      let user: Partial<TUser> = {}
      try {
        user = await verifyToken(t, Bun.env.AT_SECRET);
      } catch(error) {
      }
      return user?.id;
    }
  })
  return bearer(c, next);
};
