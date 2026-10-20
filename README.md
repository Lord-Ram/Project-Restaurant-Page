# Restaurant Page

A simple tabbed restaurant website built with Webpack for The Odin Project.

## Run locally

```bash
npm install
npx webpack serve
```

Open http://localhost:8080

## Build

```bash
npx webpack
```

## Deploy to GitHub Pages

Commit all changes on `main`, then:

```bash
git branch gh-pages
git checkout gh-pages
git merge main --no-edit
npx webpack
git add dist -f
git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

Then set GitHub Pages source to the `gh-pages` branch in your repository settings.
