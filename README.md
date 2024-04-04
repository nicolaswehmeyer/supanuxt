#  SupaNuxt - A Nuxt Supabase Starter Pack
SupaNuxt is your go to starter pack to speed up your development time on your next full-stack web application.

SupaNuxt is based on Vue & Nuxt 3, Pinia, Vuetify, Supabase and Vite. SupaNuxt comes with authentication backed in and provides you with all configurations required to get you started as fast as possible within your next project.

![SupaNuxt Header Image](image.png)

Housekeeping: Please have a look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to ensure you follow the most recent best practices on Vue, Nuxt, Pinia, Supabase and Vuetify.

## Features
- Complete UI based on Vuetify with light and dark mode
- Loading indicators
- Error and success indicators
- Global state using Pinia
- Security and auth proviers backed in: Email, Github and Facebook
- Login Page
- Registration Page
- Example Welcome Page
- User Profile Page
- Password Reset Page
- Applications Setting Page
- Logout functionality

## Technical Stack
- Vite
- Vue 3 / Nuxt 3
- Pinia
- Vuetify
- Supabase

# Screenshots

## Login
![SupaNuxt Login Screen Image](login-screen.png)

## Home
![SupaNuxt Home Screen Image](home-screen.png)

# Automatic installation
Initially make sure to setup your Supabase instance accordingly:
- Login to https://supabase.com/
- Create a new Supabase project or use an existing project of your choice
- If not done yet, setup your preferred auth providers (Email, Github, Facebook)
- Rename the ```.env.example``` file to ```.env```
- Insert your projects Supabase URL and API key into the ```.env``` file

**Now run the following commands in your terminal in your desired location:**
```bash
# Clone the repository
git clone https://github.com/nicolaswehmeyer/supanuxt && cd supanuxt
# Setup all dependencies and update your Supabase automatically
bash <(curl -Ls https://raw.githubusercontent.com/nicolaswehmeyer/supanuxt/main/install.sh)
# Start the application
yarn run dev
```

Done.

# Manual installation
Initially make sure to setup your Supabase instance accordingly:
- Login to https://supabase.com/
- Create a new Supabase project or use an existing project of your choice
- If not done yet, setup your preferred auth providers (Email, Github, Facebook)
- Rename the ```.env.example``` file to ```.env```
- Insert your projects Supabase URL and API key into the ```.env``` file

Within Supabase, create a new profiles table, enable row level security, create a new policy and a new bucket to store users profile photos. 

**To do this, simply paste the following lines into the SQL editor within your Supabase project and you're done:**
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

**Finally, make sure to install all required dependencies within your projects folder within your terminal:**
```bash
# Clone the repository
git clone https://github.com/nicolaswehmeyer/supanuxt

# Change directories
cd supanuxt

# yarn
yarn install

# npm
npm install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev

# npm
npm run dev
```

## Production
Build the application for production:

```bash
# yarn
yarn build

# npm
npm run build
```

## Locally preview production build:
```bash
# yarn
yarn preview

# npm
npm run preview
```
