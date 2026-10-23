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
