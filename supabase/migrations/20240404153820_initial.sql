create table public.profiles (
  id uuid primary key references auth.uid(),
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
