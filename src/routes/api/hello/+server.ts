import { text, json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    const name = url.searchParams.get('name') ?? 'not found';

    // error(400, 'Bad request');

    let data = {
        message: `Hello, ${name}!`,
    }

    return json({ message: `Hello, ${name}!` });
}

export const POST: RequestHandler = async ({ request }) => {
    const { name, age } = await request.json();
    return json({ message: `Hello, ${name}!` });
};

// This handler will respond to PUT, PATCH, DELETE, etc.

export const fallback: RequestHandler = async ({ request }) => {
    return text(`I caught your ${request.method} request!`);
}