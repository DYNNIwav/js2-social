# Lurkr - JS2 Course Assignment

A front-end social media app built with vanilla TypeScript and the Noroff v2 API. Built with Vite.

Course: JavaScript 2 (Noroff)
Author: Pål Omland Eilevstjønn

## Features

- Register and log in (Noroff student email)
- View, create, edit and delete posts
- View user profiles and follow / unfollow
- Search posts

## Running locally

You need Node.js (18+) and a `@stud.noroff.no` email to register a user.

```bash
git clone https://github.com/DYNNIwav/js2-social.git
cd js2-social
npm install
npm run dev
```

Then open the URL printed in the terminal.

## Deployment

Deployed on Vercel: https://js2-social.vercel.app

## Notes

- AI usage is documented in `AI_LOG.md`.
- The `api.ts` and `auth.ts` files are adapted from my JS1 exam (Rettlinja), with TypeScript types and the `X-Noroff-API-Key` header added.
