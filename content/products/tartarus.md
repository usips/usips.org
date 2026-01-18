+++
title = "Tartarus"
template = "page.html"
date = 2025-02-07
description = "A free, open-source shield protecting independent websites from attacks."
+++

The Internet has gone from tens of thousands of independent websites to a clearly stratified landscape. In our current environment, there is very little competition, and big businesses benefit monopolize the resources needed to handle large-scale attacks.

The "Upper Internet" consists of major platforms like Google, Facebook, and Amazon. These companies have billions of dollars to spend on infrastructure and security. When someone tries to attack them, it is simply the cost of doing business.

Then there's the "Lower Internet": small forums, independent news sites, hobbyist communities, and personal blogs. These websites often run on shoestring budgets with volunteer administrators. They can't afford enterprise security solutions, but due to their significance, they find themselves under attack on all fronts by those who want to silence them. Hackers, government censors, spammers, bad actors, and political activists all target these small sites, knowing they are vulnerable. A small forum faces the problems as large corporations, but without the resources to defend itself.

Many of these small sites punch far above their weight in cultural importance. They're where subcultures form, where controversial ideas are debated, and where communities gather outside the watchful eye of Big Tech. They're the spiritual successors to early Internet message boards and the birthplace of countless memes, movements, and innovations.

But they're also fragile. A single determined attacker can knock an independent site offline for days or weeks. Traditional DDoS protection services cost hundreds or thousands of dollars per month - money these sites simply don't have. And even when they can afford protection, or when it is offered for "free", they're often denied service because their content is too controversial for corporate providers.

**Tartarus exists to solve this problem.** It is our solution for the Lower Internet's security problems, and it is born out of necessity by the very communities it aims to protect.

## What it does

Tartarus sits between your website and the Internet, inspecting every visitor before they reach your server. It uses a combination of techniques to distinguish real humans from malicious bots:

- **Proof-of-Work Challenges**: Before accessing a protected site, visitors solve a brief computational puzzle. This takes about a second for humans but makes large-scale automated attacks prohibitively expensive.

- **Fingerprint Analysis**: Tartarus examines the technical details of each connection to identify patterns consistent with attack tools, botnets, and automated scripts.

- **Reputation Intelligence**: Known bad actors, VPN abuse networks, and compromised systems are identified before they can cause harm.

- **Intelligent Caching**: Legitimate content is stored and served efficiently, reducing load on the origin server even under heavy traffic.

When an attack comes, Tartarus absorbs the blow. Your website stays online.

## Why it's different

Unlike commercial DDoS protection services:

- **No content restrictions.** We don't police what websites we protect. If it's US legal, we defend it.

- **Built for the little guy.** Tartarus is designed to run cheaply and efficiently, not to maximize profit.

- **Community-supported.** Development is funded by donations and contributions, not by selling user data or charging premium fees.

## Get involved

Tartarus is under active development. If you're a developer interested in helping protect the Lower Internet, check out the source code on [GitHub](https://github.com/usips/tartarus-rs). If you would like to financially support our development, please sponsor us on [GitHub Sponsors](https://github.com/sponsors/usips)!

If you run an independent website and need help, [reach out to Joshua Moon](/us/board).