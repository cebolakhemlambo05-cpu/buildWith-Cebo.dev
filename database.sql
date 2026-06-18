create table if not exists public.contact_submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  from_name text not null,
  from_email text not null,
  from_phone text,
  company text,
  subject text not null,
  message text not null,
  source_page text,
  user_agent text,
  email_status text not null default 'pending'
);

alter table public.contact_submissions enable row level security;

drop policy if exists "Allow public contact form inserts" on public.contact_submissions;

create policy "Allow public contact form inserts"
on public.contact_submissions
for insert
to anon
with check (true);
