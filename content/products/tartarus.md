+++
title = "Tartarus"
template = "page.html"
date = 2025-02-07
description = "A free, open-source shield protecting independent websites from attacks."
+++

The Internet has two layers. The "Upper Internet" consists of major platforms like Google, Facebook, and Amazon. These companies have billions of dollars to spend on infrastructure and security. When someone tries to attack them, they shrug it off.

Then there's the "Lower Internet" - small forums, independent news sites, hobbyist communities, and personal blogs. These websites often run on shoestring budgets with volunteer administrators. They can't afford enterprise security solutions. Yet they're frequently under attack from trolls, hacktivists, and bad actors who want to silence them.

Many of these small sites punch far above their weight in cultural importance. They're where subcultures form, where controversial ideas are debated, and where communities gather outside the watchful eye of Big Tech. They're the spiritual successors to early internet message boards and the birthplace of countless memes, movements, and innovations.

But they're also fragile. A single determined attacker can knock an independent site offline for days or weeks. Traditional DDoS protection services cost hundreds or thousands of dollars per month - money these sites simply don't have. And even when they can afford protection, they're often denied service because their content is too controversial for corporate providers.

**Tartarus exists to solve this problem.**

## What it does

Tartarus sits between your website and the Internet, inspecting every visitor before they reach your server. It uses a combination of techniques to distinguish real humans from malicious bots:

- **Proof-of-Work Challenges**: Before accessing a protected site, visitors solve a brief computational puzzle. This takes about a second for humans but makes large-scale automated attacks prohibitively expensive.

- **Fingerprint Analysis**: Tartarus examines the technical details of each connection to identify patterns consistent with attack tools, botnets, and automated scripts.

- **Reputation Intelligence**: Known bad actors, VPN abuse networks, and compromised systems are identified before they can cause harm.

- **Intelligent Caching**: Legitimate content is stored and served efficiently, reducing load on the origin server even under heavy traffic.

When an attack comes, Tartarus absorbs the blow. Your website stays online.

## Why it's different

Unlike commercial DDoS protection services:

- **It's free and open source.** The code is public. Anyone can inspect it, improve it, or run their own instance.

- **No content restrictions.** We don't police what websites we protect. If it's legal, we'll help defend it.

- **Built for the little guy.** Tartarus is designed to run cheaply and efficiently, not to maximize profit.

- **Community-supported.** Development is funded by donations and contributions, not by selling user data or charging premium fees.

## The name

In Greek mythology, Tartarus was the deepest dungeon of the underworld - a place where threats were imprisoned and kept away from the world above. Our Tartarus does the same for the Internet, trapping malicious traffic before it can reach the sites and communities you care about.

## Get involved

Tartarus is under active development. If you're a developer interested in helping protect the Lower Internet, check out the source code on [GitHub](https://github.com/usips/tartarus-rs).

If you run an independent website and need protection, [contact us](/us/contact) to learn about getting started.
