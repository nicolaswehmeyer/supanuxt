#  Nuxtabase - A Nuxt Supabase Starter Pack

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

This starter pack is using Vite, Nuxt 3, Pinia, Vuetify and Supabase and provides with all configurations required to get you started as fast as possible within your next project.

## Technical Stack

- Vite
- Nuxt 3
- Pinia
- Vuetify
- Supabase

# Installation & Setup

Initially make sure to setup your Supabase instance accordingly:
- Login to https://supabase.com/
- Create a new Supabase project or use an existing project of your choice
- If not done yet, setup your preferred auth providers (Email, Github, Facebook)
- Rename the ```.env.example``` file to ```.env```
- Insert your projects Supabase URL and API key into the ```.env``` file

Within Supabase, create a new profiles table, enable row level security, create a new policy and a new bucket to store users profile photos. 

*To do this, simply paste the following lines into the SQL editor within your Supabase project and you're done:*
```sql
-- Create a new profiles table to store users profile details
create table public.profiles (
  id uuid primary key references auth.users (id),
  created_at timestamp with time zone default now() not null,
  firstname text,
  lastname text,
  username text,
  street text,
  postcode bigint,
  city text,
  country text,
  photo text
);

-- Enable Row-Level-Security policies
alter table public.profiles enable row level security;

-- Create a new RLS policy enabling authenticated users to CRUD their profiles
create policy "Allow authenticated users to CRUD their own profiles"
  on "public"."profiles" as permissive
  for all
  to authenticated
  using ((auth.uid() = id)) with check ((auth.uid() = id));

-- Create a new public storage bucket to store users profile photos
insert into storage.buckets
  (id, name, public, file_size_limit)
values
  ('avatars', 'avatars', true, 5242880);
```

*Finally, make sure to install all required dependencies within your projects folder within your terminal:*
```bash
# npm
npm install

# yarn
yarn install
```

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

## Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.