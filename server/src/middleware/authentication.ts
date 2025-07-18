import type { Context, Next } from 'hono';
import { verifyToken } from '@/lib/utils';
import {
  deleteCookie
} from 'hono/cookie'

const authentication = () => {
    return async (c: Context, next: Next) => {
        let token = '';
        if (
            c.req.header('Authorization') &&
            c.req.header('Authorization')?.startsWith('Bearer')
        ) {
            token = c.req.header('Authorization')?.replace(/Bearer\s+/i, '') as string;
        }
        if (token) {
            try {
                const user = await verifyToken(token, Bun.env.AT_SECRET);
                c.set('user', user)
            } catch (error) {
                c.set('user', {});
                deleteCookie(c, 'at');
            }
        }
        await next()
    }
};

export {
    authentication
};
