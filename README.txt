BRIGHTSCORE PREP — ISEE PRACTICE FOR EVERY LEVEL
Host-ready static website (no server, no build step, no database)

WHAT IS INCLUDED
- BrightScore Prep branding and a more colorful, accessible visual system
- Level selector for Primary 2, Primary 3, Primary 4, Lower, Middle, and Upper
- Correct section order, question-count blueprint, and standard timing for every level
- One complete Primary 2 full-length practice test
- Timed and untimed modes, section-only practice, answer review, local history, and estimated practice stanine
- Visible Primary 2 auditory transcript with unlimited audio replay

FILES
- index.html       app shell and visual styling
- app.js           navigation, timer, scoring, local storage, and rendering
- data.js          level definitions and all test content
- data-template.js copy-ready example showing how to add another test
- privacy.html     plain-language privacy notice

ADDING CONTENT FOR ANOTHER LEVEL
1. Open data.js.
2. Add a new test object beneath TESTS.primary3, TESTS.primary4, TESTS.lower, TESTS.middle, or TESTS.upper.
3. Follow the schema in data-template.js.
4. Keep every question ID unique across the site.
5. Commit the changed data.js file and redeploy.

CURRENT CONTENT STATUS
- Primary 2: Practice Test #1 loaded
- Primary 3: engine and official blueprint ready; questions not yet loaded
- Primary 4: engine and official blueprint ready; questions not yet loaded
- Lower: engine, five-section flow, and essay editor ready; questions not yet loaded
- Middle: engine, five-section flow, and essay editor ready; questions not yet loaded
- Upper: engine, five-section flow, and essay editor ready; questions not yet loaded

DEPLOYMENT
Upload all files in this folder to the root of a GitHub Pages repository, or drag the ZIP/folder into Netlify or Vercel.

DATA AND PRIVACY
The site has no login or central database. Names, answers, timing, and attempt history remain in the student's current browser via localStorage. Use initials, a nickname, or an assigned code rather than a child's full legal name.

PRACTICE STANINE
The stanine shown after a complete test is a transparent estimate based on raw percentage. It is not an official ERB/ISEE stanine, which requires grade-level scaled scores and national norm data.
