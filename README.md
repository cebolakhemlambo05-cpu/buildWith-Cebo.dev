# buildWithCebo.dev Portfolio

Static HTML, CSS and JavaScript portfolio for Cebolakhe Mlambo.

## Deploy

Recommended host: Netlify.

There is no build step. Deploy the repository root as the publish directory.

Netlify settings:

- Build command: leave blank
- Publish directory: `.`

## Contact Form

The contact form uses EmailJS from the browser. File attachments are not enabled because the current EmailJS plan blocks attachment features, so project briefs should be sent directly by email.

## SQL Database Storage

Contact submissions can also be stored in Supabase Postgres.

Setup:

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run the SQL in `database.sql`.
4. Open `db-config.js`.
5. Replace the placeholder values with your Supabase project URL and anon public key.

The form saves a browser backup before sending, then stores the submission in the `contact_submissions` SQL table, then sends the EmailJS notification.

Use the Supabase anon public key only. Do not put a service role key in frontend code.
