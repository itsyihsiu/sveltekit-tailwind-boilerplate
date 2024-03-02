import { text, json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    const min = Number(url.searchParams.get('min') ?? '0');
    const max = Number(url.searchParams.get('max') ?? '1');

    const diff = max - min;

    if (isNaN(diff) || diff < 0) {
        error(400, 'min and max must be numbers, and min must be less than max');
    }

    const random = min + Math.random() * diff;

    let data = {
        answer: random,
        code: 200,
        author: 'SvelteKit'
    }

    return new Response(JSON.stringify(data));
}

export const POST: RequestHandler = async ({ request }) => {
    const { a, b } = await request.json();
    return json({ answer: a + b });
};

// This handler will respond to PUT, PATCH, DELETE, etc.

export const fallback: RequestHandler = async ({ request }) => {
    return text(`I caught your ${request.method} request!`);
}