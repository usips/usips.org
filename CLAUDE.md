# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the United States Internet Preservation Society, built with Zola 0.22.0 (Rust-based static site generator).

## Build and Development Commands

```bash
# Install dependencies (first time or after package.json changes)
npm install

# TypeScript compilation
npm run build:ts                 # Compile TS to themes/usips/static/js/
npm run watch:ts                 # Watch mode for development

# Local development (compile TS first, then serve)
npm run build:ts && zola serve  # Dev server at http://127.0.0.1:1111
zola serve --drafts              # Include draft posts

# Building
zola build                       # Build to public/
zola build --drafts              # Include drafts
zola build --minify              # Minified HTML

# Validation
zola check                       # Validate build and check links
zola check --skip-external-links # Skip external link validation
```

## Architecture

### Content Structure (Markdown with TOML front matter)
- `content/us/` - Organization pages (mission, board, contact)
- `content/issues/` - Advocacy topics
- `content/blog/` - Blog posts
- `content/legal/` - Legal documents (terms, privacy)
- `content/support/` - Support page

### Theme Structure (`themes/usips/`)
- `templates/` - Tera HTML templates
  - `base.html` - Base layout
  - `page.html` - Standard page template
  - `index.html` - Homepage
  - `blog.html` / `blog-post.html` - Blog templates
  - `macros/` - Reusable header/footer components
- `sass/` - SCSS stylesheets (compiled automatically by Zola)
  - `abstracts/` - Mixins and functions
  - `base/` - Reset, typography, layout
  - `components/` - Buttons, cards, forms, social
  - `layout/` - Header, footer, navigation
  - `pages/` - Home, blog, content page styles
  - `vendors/` - Third-party overrides (HubSpot)
- `static/` - Images, fonts, PGP keys

### Configuration
- `config.toml` - Main Zola config (base_url, title, theme, SASS compilation)
- `themes/usips/theme.toml` - Theme metadata

## Front Matter Format

```toml
+++
title = "Page Title"
description = "Meta description"
template = "page.html"
+++
```

For blog sections, use `page_template = "blog-post.html"` and `sort_by = "date"`.

## TypeScript

- Source: `src/ts/` - TypeScript source files
- Output: `themes/usips/static/js/` - Compiled JS (gitignored)
- Config: `tsconfig.json` - Targets ES2020 modules

## Deployment

GitHub Actions (`.github/workflows/github-pages.yml`) automatically:
1. Compiles TypeScript
2. Builds site with Zola
3. Checks HTML file sizes (14KB limit, /legal/ exempt, for TCP initial congestion window)
4. Deploys to GitHub Pages

Triggers on push to `master` when content/, themes/, src/, config.toml, package.json, or tsconfig.json changes.
