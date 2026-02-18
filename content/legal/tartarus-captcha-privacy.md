+++
title = "Tartarus Captcha Privacy Policy for End Users"
template = "page.html"
date = 2026-02-18
description = "How the Tartarus Captcha service handles end user data."
+++

**Effective as of: February 18th, 2026**

The United States Internet Preservation Society ("USIPS", "the Society", "we", "us", or "our") operates the Tartarus Captcha service, a proof-of-work challenge system that protects websites from abuse and automated attacks. This Privacy Policy describes the information we collect from individuals who encounter the Tartarus Captcha through the websites and applications of our customers, and how that information is used.

This policy applies specifically to the Tartarus Captcha service. For information about how USIPS handles data collected through its own website, please see our [general Privacy Policy](/legal/privacy).

## Definitions

**Service Users** are the website operators who integrate the Tartarus Captcha service into their websites or applications.

**End Users** are individuals who encounter the Tartarus Captcha while visiting a Service User's website or application. If you have been presented with a proof-of-work challenge while browsing a website, you are an End User.

## Our Role

USIPS operates the Tartarus Captcha infrastructure on behalf of Service Users. The Service User who deployed Tartarus Captcha on their website is responsible for their own privacy practices and for providing their visitors with applicable privacy disclosures about their use of this service.

This Privacy Policy describes the data handling practices of the Tartarus Captcha service itself. For information about how a specific website uses Tartarus Captcha, please refer to that website's own privacy policy.

## How Tartarus Captcha Works

When you visit a website protected by Tartarus Captcha, your browser may be asked to solve a brief computational puzzle (a "proof-of-work challenge"). This puzzle typically takes about one second to complete and runs automatically in your browser. Once solved, you are issued a clearance token that allows you to browse the website without repeated challenges.

The difficulty of the challenge may be adjusted based on signals that indicate whether a connection appears to originate from an automated system, a known attack source, or an anonymizing proxy.

## Information We Collect

When you encounter the Tartarus Captcha, the following information is collected and processed:

**Connection Information**

* **IP address.** Your IP address is collected to identify the origin of requests, apply rate limiting, and query third-party reputation services.
* **Connection fingerprint.** When your browser establishes a secure connection, technical characteristics of the connection are used to generate a fingerprint. This fingerprint helps identify the type of software making the connection but does not identify you personally. It is immediately hashed using a one-way cryptographic function and the original value is not stored.

**Browser Information**

* **User-Agent header.** The User-Agent string sent by your browser is used to classify requests and verify legitimate search engine crawlers.
* **Standard HTTP request data.** This includes request headers, the requested URL path, and query parameters. This data is used for routing, caching, and security purposes.

**Challenge Data**

* **Proof-of-work solution.** When your browser solves a challenge, the solution (a numeric value called a "nonce") is submitted to verify that the computational work was performed.

**Device Intelligence (where enabled by Service User)**

Some Service Users may enable enhanced device analysis through a third-party service called Spur Monocle. When enabled, a script runs in your browser that collects information about your device and network configuration. This information is encrypted in your browser and sent to Spur Intelligence, Inc. for analysis. The analysis determines whether your connection exhibits characteristics of a VPN, proxy, or other anonymizing service. USIPS receives only the result of this analysis, not the underlying device data. See the "Third-Party Services" section below for more information.

## Information We Do Not Collect

* **Tartarus Captcha does not collect keystroke, mouse movement, scroll, or touch data.** Unlike some challenge services, we do not analyze your interaction patterns.
* **Tartarus Captcha does not collect or process data for advertising, marketing, or profiling purposes.**
* **USIPS does not sell or rent End User information.**

## How We Use Information

All information collected through the Tartarus Captcha is used solely for security purposes:

* **Verifying challenges.** We verify that proof-of-work solutions are valid and were computed in a timely manner.
* **Issuing and validating clearance tokens.** After a successful challenge, we issue a cryptographically signed token so you are not challenged again for a period of time. The token is bound to your connection fingerprint to prevent it from being stolen and reused by an attacker.
* **Adjusting challenge difficulty.** We use IP reputation data and connection characteristics to set an appropriate challenge difficulty. Connections from known attack infrastructure receive harder challenges. Connections from known datacenter IP ranges may be blocked entirely.
* **Rate limiting.** We track request rates by IP address and connection fingerprint to detect and mitigate abuse.
* **Caching.** We cache content from Service User origin servers to reduce load and improve response times.

## Cookies

Tartarus Captcha sets a single cookie:

| Name | Purpose | Duration |
|---|---|---|
| `ttrs_clearance` | Contains a cryptographically signed clearance token that proves you have completed a challenge. The token includes an expiration timestamp, an access scope, a hashed connection fingerprint, and a cryptographic signature. It does not contain your IP address, name, or any other personally identifiable information. | 24 hours |

Tartarus Captcha does not use any other cookies and does not store data in your browser's local storage, session storage, or IndexedDB.

## Third-Party Services

### Spur Intelligence (IP Reputation)

USIPS uses Spur Intelligence, Inc. ("Spur") to assess the reputation of IP addresses. When you connect to a website protected by Tartarus Captcha, your IP address may be sent to Spur's API to determine whether it is associated with VPN services, proxy networks, Tor exit nodes, botnets, data centers, or AI scraping activity. Spur returns a risk assessment that Tartarus uses to adjust challenge difficulty or block the request.

Spur's use of this data is governed by the [Spur Privacy Policy](https://spur.us/privacy/).

IP reputation results are cached by USIPS for up to 24 hours locally and up to 30 days across our infrastructure to minimize repeated queries to Spur.

### Spur Monocle (Device Intelligence)

Where enabled by the Service User, Spur Monocle collects device and network configuration data from your browser using a JavaScript agent. This data is encrypted in your browser and transmitted to Spur for analysis. Spur returns a determination of whether your connection appears to use a VPN, proxy, or other anonymizing technology. USIPS receives only this determination, not the underlying device data collected by Monocle.

Spur Monocle assessment results are cached by USIPS for up to 7 days per IP address.

For more information, see the [Spur Privacy Policy](https://spur.us/privacy/) and [Spur Terms of Service](https://spur.us/terms/).

## Data Retention

USIPS retains End User data as follows:

* **IP addresses** are held in memory for rate limiting and caching purposes and are not written to persistent storage except in server logs, which are retained for up to 7 days.
* **Connection fingerprints** are hashed immediately upon extraction and the hash is held in memory for token validation. The original values are not stored.
* **IP reputation data** from Spur is cached for up to 24 hours locally and up to 30 days in our distributed infrastructure.
* **Monocle assessment results** are cached for up to 7 days per IP address.
* **Clearance tokens** are stored only in your browser's cookies and expire after 24 hours. USIPS does not maintain a server-side record of issued tokens.
* **Server logs** may contain IP addresses, request paths, and timestamps. These logs are retained for up to 7 days for diagnostic and security purposes and are then deleted.

## Data Security

USIPS employs industry-standard security measures to protect the information processed by Tartarus Captcha. All connections to protected websites are encrypted using TLS. Clearance tokens are cryptographically signed to prevent forgery. Connection fingerprints are stored only in hashed form.

Although we make good faith efforts to protect End User information, no system can be guaranteed to be completely secure.

## Children

The Tartarus Captcha service is not directed at children under the age of 13. USIPS does not knowingly collect personal information from children. The service operates as transparent security infrastructure and does not collect information beyond what is described in this policy.

## Changes to This Policy

We may update this Privacy Policy from time to time. If we make substantive changes, we will post notice on our website. The current version of this policy will always be available at this URL.

___

<addr>
United States Internet Preservation Society<br />
PO Box 27009<br />
Washington, DC 20006<br />
Phone: (423) 973-9793<br />
<a href="mailto:privacy@usips.org">privacy@usips.org</a>
</addr>
