import type { Context, Next } from 'hono';

const timeMonitoring = () => {
    return async (c: Context, next: Next) => {
        const clientTime = c.req.header('X-Request-Time');
        const start = Date.now();
        let serverStartTime = start;
        if (clientTime) {
            const time = clientTime as unknown as number;
            serverStartTime = serverStartTime - time;
        }
        c.res.headers.set('X-Response-Time', `${serverStartTime}`);
        await next()
        const end = Date.now();
        c.res.headers.set('X-Response-Middleware-Time', `${end - start}`);
        c.res.headers.set('X-Response-Env', `${Bun.env.NODE_ENV}`);
    }
};

export {
    timeMonitoring
};
