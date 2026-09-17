# kavinsky.net

Personal research index for Fernando “Kavinsky” Silveira. The site is a static, dependency-free HTML/CSS project deployed with Firebase Hosting.

## Structure

- `index.html` — homepage content and metadata
- `styles.css` — responsive editorial design system
- `404.html` — matching not-found page
- `assets/images/` — portraits, research figures, and project imagery
- `firebase.json` — Firebase Hosting configuration and cache rules

## Local preview

Serve the repository root with any static HTTP server. For example:

```bash
npx serve .
```

The layout is designed around 375 px, 768 px, and 1440 px+ viewports. No client-side JavaScript or third-party UI/font dependencies are required.

## Deploy

```bash
firebase deploy
```
