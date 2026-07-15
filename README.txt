BRIGHTSCORE PREP — ISEE PRACTICE, ALL LEVELS
Host-ready static website (no server, no build step, no database)

DESIGN APPROACH
- Preserves the original ReadySetPrep navigation and screen flow.
- Adds the full ISEE level catalog without replacing the original home-page navigation.
- Uses a cleaner Inter + Nunito Sans type system and a restrained teal, navy, coral, and gold palette.

LEVELS INCLUDED
- Primary 2 — full practice test included
- Primary 3 — level shell ready for content
- Primary 4 — level shell ready for content
- Lower — level shell ready for content
- Middle — level shell ready for content
- Upper — level shell ready for content

FILES
- index.html   original app shell/navigation with refreshed visual styling
- app.js       original navigation, timer, scoring, storage, and test flow
- data.js      all level definitions and test content
- privacy.html plain-language privacy notice

DEPLOYMENT
Upload all four files to the root of GitHub Pages, Netlify, or Vercel.

ADDING A NEW TEST
Add the new test object under TESTS[levelId] in data.js. The original navigation
will automatically list it under that level without requiring a redesign.

DATA MODEL
- Progress and attempt history remain in each browser's localStorage.
- There is no central database, login, or teacher dashboard.
- Use initials, a nickname, or a student code instead of a child's full legal name.

PRACTICE STANINE
The existing practice-stanine estimate remains unchanged and is clearly labeled
as an unofficial raw-accuracy estimate.


CLASSIC NAVIGATION REVISION
- The expedition/trail-map home panel was removed.
- The original three-card navigation is restored:
  Timed Full Test, Untimed Full Test, and Untimed by Section.
- A compact level tab row was added above the original navigation so all ISEE levels remain accessible.
- Question navigation, audio, timers, scoring, history, and results were not changed.
