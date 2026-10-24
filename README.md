# ReQuisite

Public archive of ReQuisite, Chelsea Wilson's daily daily read on data, AI and people, styled to match requstudio.com and published with GitHub Pages (Jekyll).
Each ReQuisite is a Markdown file in `_posts/` named `YYYY-MM-DD-requisite.md`. The daily scheduled task adds one file per day.

URLs once GitHub Pages is on:
- Archive of all ReQuisites: https://presadiva.github.io/requisite/
- Always the newest ReQuisite: https://presadiva.github.io/requisite/latest/
- RSS, all ReQuisites: https://presadiva.github.io/requisite/feed.xml
- RSS, newest ReQuisite only: https://presadiva.github.io/requisite/latest.xml

`hostinger-embed.html` is the card for the ReQuired Reading page (paste into a Hostinger "Embed code" element). It is not part of the site build.

## Email newsletter

The sign-up forms post to Buttondown (https://buttondown.com). To turn email delivery on:
1. Create a Buttondown newsletter named ReQuisite. If the username is not `requisite`, change `newsletter.username` in `_config.yml` and the two URLs in `hostinger-embed.html`.
2. Add Buttondown's RSS-to-email feature and point it at https://presadiva.github.io/requisite/latest.xml so each new edition is emailed automatically.
3. In Buttondown, pick the plainest email template so its own header and footer don't double up with ReQuisite's. Buttondown still adds its unsubscribe footer.

### How the email is designed

`latest.xml` builds the email with `_includes/email-edition.html`, styled to match requstudio.com. Each section gets its own color, icon and one-line description from `_data/requisite_sections.yml`; the icons are in `assets/img/icons/`. To check how the newest edition will look as an email, open https://presadiva.github.io/requisite/email-preview/.

The layout reads the edition's existing Markdown format, so the daily task does not need to change. It relies on: `## Section name` headings, a bulleted list under "Top 3 today", each story starting with a bold headline on its own line, and lines beginning `Why it matters:` and `Source:`. A section whose heading matches nothing in the data file appears in purple.


The daily task may add an optional "## Off the beaten path" section for credible research and reporting outside the mainstream news cycle. It has its own color, icon and description in the email (`_data/requisite_sections.yml`, `assets/img/icons/offbeat.png`) and on the site (`assets/js/brief.js`, `assets/css/brief.css`).

### Look and feel

The email and the website share one brand language taken from requstudio.com: warm paper background, ink header bar, Manrope headlines, mono numbered labels, white cards and small corner radii (6 to 8px). Sections are told apart by the full-width page background, which alternates two muted tones (#F1EEF2 and #F3F0EA), with a bold 3px ink line across the top of each section. Only the footer is dark, so dark always means the end. Each section's own colour, taken only from the requstudio.com palette, appears as accents: the 3px top line on each card, its icon tile, card tag and story number. The email masthead and section icons are images in `assets/img/` so they look the same in every mail app. Section accents are in `_data/requisite_sections.yml` (email) and the `[data-topic]` rules in `assets/css/brief.css` (site); the background alternation is in `_includes/email-edition.html` and `assets/js/brief.js`.

### Checks and safeguards

- `.github/scripts/check_posts.py` validates every post (front matter, the allowed section headings, no raw HTML, no em dashes, no empty sections). Run it locally with `python3 .github/scripts/check_posts.py`.
- `ci/build.yml.example` is a GitHub Actions workflow that runs that check, builds the site with the Pages builder, and checks the email feed. To turn it on, move it to `.github/workflows/build.yml` (GitHub's web editor can do this; the automated task cannot push workflow files).
- `future: true` in `_config.yml` makes sure a post dated 07:30 later the same day is still published when the task runs earlier in the morning.
- Sections with no news are left out of the edition. The home page archive list is paginated (10 per page, `assets/js/archive.js`).
- Section looks: `_data/requisite_sections.yml` (email) and `assets/js/brief.js` plus `assets/css/brief.css` (site). Unknown headings fall back to a neutral grey "More" look in the email.
