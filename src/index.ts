import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
    const origin = c.req.header('origin');
    const referer = c.req.header('referer');

    return c.text(`origin: ${origin}, referer: ${referer}`);
});

export default app;
