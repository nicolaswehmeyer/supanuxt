#  Nuxtabase - A Nuxt Supabase Starter Pack

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

This starter pack is using Vite, Nuxt 3, Pinia, Vuetify and Supabase and provides with all configurations required to get you started as fast as possible within your next project.

# Technical Stack

- Vite
- Nuxt 3
- Pinia
- Vuetify
- Supabase

## Setup

Make sure to install all dependencies first:

```bash
# npm
npm install

# yarn
yarn install
```

Now setup your Supabase instance:
- Login to https://supabase.com/
- Create a Supabase project
- Setup your auth providers (Email, Github, Facebook) accordingly
- Rename the ```.env.example``` file to ```.env```
- Copy your Supabase URL and API-KEY into the ```.env``` file accordingly

# Setup your users profiles table to enable managing your users details
```CREATE TABLE public.profiles (
  id uuid,
  created_at timestamptz,
  firstname text,
  lastname text,
  username text,
  street text,
  postcode int8,
  city text,
  country text,
  photo text
);```

# Now go ahead and enable Row-Level-Security Policies and paste the following code into the Supabase SQL editor
```create policy "Allow authenticated users to CRUD their own profiles" on "public"."profiles" as permissive for all to authenticated using ((auth.uid() = id))with check ((auth.uid() = id));```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
