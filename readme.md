# Search Engine Optimization (SEO)
A helpful checklist / collection of Search Engine Optimization (SEO) tips and technics.

## Table of Contents
* [URL](#url)
* [Title](#title)
* [Keywords](#keywords)
* [Description](#description)
* [Content](#content)
* [Headings](#headings)
* [Images](#images)
* [Links](#links)
* [Social Media](#social-media)
* [Sitemap](#sitemap)
* [Errors and access](#errors-and-access)
* [HTAccess](#htaccess)
* [Performance](#performance)
* [UX](#ux)
* [Mobile](#mobile)
* [Validation and accessibility](#Vvlidation-and-accessibility)
* [Security](#security)
* [Search](#search)
* [Tools](#tools)

### URL
* Descriptive URLs: use a descriptive page url, which should reflect your targeted keyword
* Subdomain or subfolder: subdomains are seen as separate domains
* Hyphans: split words using hyphans
* www or no-www: provide both domains, but set a prefered version in Google Webmaster Tools
* Localisation: chookse a country-specific domain, for better local search results

### Title
* every page shound have a unique speaking title (60 - 100 characters)

```
<title>Website Title goes here</title>
```

### Keywords
* select specific keywords
* every page shound have unique keywords
* max. 10 keywords

```
<meta name="keywords" content="10 words">
```

### Description
* every page shound have a unique description
* max. 160 characters

```
<meta name="description" content="max 160 Chars">
```

### Content
* Content matters the most
* Page Title should appear 3% of content length
* add ~ 3 internal links
* use `strong` tag
* do not provide duplicated content
* article should be at least 300 words

### Headings
* Clear structure `H1` -` H6`

### Images
* Alt tag (60 - 70 characters)
* Use a CDN or a subdomain to allow parallal http-requests

### Links
* add meaningful title
* Only add external links if you got a backlink to your site
* add `rel="nofollow"` attribute to external links

### Social Media
* Social link rank up your site
* use social snippets [OpenGraph](http://ogp.me/), [Facebook](https://developers.facebook.com/docs/sharing/best-practices), [Twitter](https://dev.twitter.com/cards/getting-started)
* Authorship information

  `<link rel="author" href="https://plus.google.com/u/0/[GOOGLE+ ID]">`

  `<a href="https://plus.google.com/u/0/[GOOGLE+ ID]?rel=author">Google</a>`
* [social profiles](https://developers.google.com/webmasters/structured-data/customize/social-profiles)

  ```
  <span itemscope itemtype="http://schema.org/Organization">
    <link itemprop="url" href="http://www.your-company-site.com">
    <a itemprop="sameAs" href="http://www.facebook.com/your-company">Facebook</a>
    <a itemprop="sameAs" href="http://www.twitter.com/YourCompany">Twitter</a>
  </span>
  ```

### Sitemap
* provide a `.xml` sitemap

### Errors and access
* provide 403 - Acced denied page
* provide 404 - Page not found page
* add a `robots.txt` file
* Avoid `FILE_NOT_FOUND` errors

### HTAccess
* enable GZip
* enable caching

### Performance
* Performance and loading time matters
* only serve concatenated and minified files
* if possible no redirects
* compress images ([ImageOptim](https://imageoptim.com/))

### UX
* User friendly site
* clickable links should not be too small

### Mobile
* add viewport tag

```
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">
 ```

* create a mobile-friendly site ([shown in search results](http://googlewebmastercentral.blogspot.be/2014/11/helping-users-find-mobile-friendly-pages.html))
* [Mobile-Friendly Test](https://www.google.com/webmasters/tools/mobile-friendly/)
* [AppLinks](http://applinks.org/documentation/)

### Validation and accessibility
* Write valid markup ([HTML Validator](http://validator.w3.org/) [CSS Validator](http://jigsaw.w3.org/css-validator/))
* use [WAI-Aria](http://www.w3.org/TR/wai-aria/) tags
* use [RichSnippets](http://schema.org/)

### Security
* [HTTPS as a ranking signal](http://googlewebmastercentral.blogspot.be/2014/08/https-as-ranking-signal.html)

### Search
* [Provide a custom search](https://developers.google.com/custom-search/) ([schema.org/SearchAction](http://schema.org/SearchAction), [RichSnippet](https://developers.google.com/webmasters/richsnippets/sitelinkssearch?utm_source=wmc-blog&utm_medium=direct-referral&utm_campaign=sitelinks-searchbox))

### Tools
* [Google Webmasters](https://www.google.com/webmasters/)
* [Bing Webmasters](http://www.bing.com/toolbox/webmaster)
* [Google Analytics](http://www.google.com/analytics/)
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [AdWords Keyword Tool](https://adwords.google.com/KeywordPlanner)
* [Google Trends](http://www.google.com/trends/)
* [Structured Data Testing Tool](http://www.google.com/webmasters/tools/richsnippets)
* [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/)
* [Google+ Snippet Creator](https://developers.google.com/+/web/snippet/)
* [seo tool by feedthebot](http://www.feedthebot.com/tools/)
* [Twitter card validator](https://cards-dev.twitter.com/validator)
* [Facebook Debugger](https://developers.facebook.com/tools/debug)
