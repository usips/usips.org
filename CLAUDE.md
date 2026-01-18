# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the United States Internet Preservation Society, built with Zola 0.22.0 (Rust-based static site generator).

## Build and Development Commands

```bash
# Local development
zola serve                       # Dev server at http://127.0.0.1:1111
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

## Deployment

GitHub Actions (`.github/workflows/github-pages.yml`) automatically deploys to GitHub Pages on push to `master` when content/, themes/, or config.toml changes.
