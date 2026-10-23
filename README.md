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

