# [Search Engine Optimization (SEO)](http://marcobiedermann.github.io/search-engine-optimization/)

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Join the chat at https://gitter.im/marcobiedermann/search-engine-optimization](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/marcobiedermann/search-engine-optimization?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A helpful checklist / collection of Search Engine Optimization (SEO) tips and technics.

## Table of Contents
* [URL](#url)
* [Accessibility](#accessibility)
* [Meta Information](#meta-information)
* [Keywords](#keywords)
* [Content](#content)
* [Images](#images)
* [Videos](#videos)
* [Links](#links)
* [Mobile](#mobile)
* [Sitemap](#sitemap)
* [Social Media](#social-media)
* [Tools & Services](#tools--services)
* [Books](#books)

## URL
* **Descriptive URLs:** use a descriptive page url, which should reflect your targeted keyword
* **[Subdomain or subfolder](https://www.youtube.com/watch?v=_MswMYk05tk):** subdomains are seen as separate domains
* **[Hyphens](https://www.youtube.com/watch?v=AQcSFsQyct8):** split words using hyphens
* **[www or no-www](https://support.google.com/webmasters/answer/44231):** provide both domains, but set a prefered version in Google Webmaster Tools
* **[Localisation](https://support.google.com/webmasters/answer/62399):** chookse a country-specific domain, for better local search results
* **[HTTPS](http://googlewebmastercentral.blogspot.be/2014/08/https-as-ranking-signal.html):** Security is a top priority for Google
* **[URL builder](https://support.google.com/analytics/answer/1033867):** Use this tool to add custom compaign parameters to your URLs
* **[File extension](https://www.youtube.com/watch?v=dSG6C33GwsE)**: do not strip out the file extension on URLs

## Accessibility
* **403:** provide a 403 - Access denied page
* **404:** provide a 404 - Page not found page
* **Robots:** block pages which should not be indexed via the `robots.txt` file or  
`<meta name="robots" content="">`
* **File not found:** avoid `404 FILE_NOT_FOUND` errors
* **Redirects:** Avoid redirects if possible. Use 301 redirect instead of 302
* **[Pagination](https://support.google.com/webmasters/answer/1663744):** implement the `rel="next"` and `rel="prev"` attributes to links
* **Moving a website:** redirect all your links to the new location via `.htaccess`
* **[Performance](https://developers.google.com/webmasters/mobile-sites/mobile-seo/common-mistakes/slow-mobile-pages):** performance and loading time is important
* **Validation:** write valid code ([HTML Validator](http://validator.w3.org/) [CSS Validator](http://jigsaw.w3.org/css-validator/))
* **[WAI-Aria](http://www.w3.org/TR/wai-aria/):** use WAI-Aria tags to help machines understanding your code
* **[RichSnippets](http://schema.org/):** markup your code with rich snippets, they show up on the search results page
* **[Custom Search](https://developers.google.com/structured-data/slsb-overview):** with sitelink Google Sitelink search box, people can reach your content more quickly
* **Layout:** Use `divs` instead of `tables` for layout. Using `tables` is semantically not correct.

## Meta Information
* **Title:** each page shound have a unique speaking title (60 - 100 characters)  
`<title>Website Title</title>`
* **[Description](https://www.youtube.com/watch?v=W4gr88oHb-k):** each page should have a unique description (max. 160 characters)  
`<meta name="description" content="">`

## Keywords
* **Single:** every page shound have a single unique targeted keyword
* **Research:** rank for keywords with high traffic and less competition
* **[URL](https://www.youtube.com/watch?v=rAWFv43qubI):** keyword should appear in URL name
* **Title:** keyword should appear in page title
* **Heading:** keyword should appear in headings
* **Content:** keyword should apear in ~3% of article length
* **[Meta Tag](https://www.youtube.com/watch?v=jK7IPbnmvVU):** you can ommit the `<meta name="keywords" content="">`,  
search engines do not use this meta tag

## Content
* **Content:** Content matters the most in SEO
* **Headings:** Clear structure `H1` -` H6` max. 70 characters long
* **Strong:** use `strong` tag to highlight your targeted keyword
* **[Uniqueness](https://www.youtube.com/watch?v=mQZY7EmjbMA):** do not provide duplicated content, use unique content types
* **Length:** article should be at least 300 words
* **Freshness:** new content is important. Updating pages or regulary posting is recommended
* **Flash:** avoid Flash content and flash pages. They are not accessible on mobile phones and will be ranked lower

## Images
* **[File name](https://www.youtube.com/watch?v=h2SWuUobbr0):** use a short descriptive name
* **[Alt tag](https://support.google.com/webmasters/answer/114016):** add an alt-tag this a description of the image (60 - 70 characters)
* **Dimentions:** add the `width=""` and `height=""` attributes to the image
* **[Responsive Images](http://www.w3.org/TR/html-picture-element/):** serve the most optimized image corresponding to the window size
* **Size:** keep the filesize as low as possible
* **[Optimization](https://imageoptim.com/):** Optimize images by removing some meta information

## Videos
* **Controls:** Add controls to playback and control you video
* **Embed:** Allow others to embed you videos
* **Transcriptions:** use transcriptions for indexing, usability & content
* **[Unplayable content](https://developers.google.com/webmasters/mobile-sites/mobile-seo/common-mistakes/unplayable-content):** Avoid unplayable video content. Use HTML5 `<video>` tag instead of Flash

## Links
* **Title:** add the title attribute to links
* **Backlinks:** Only add external links if you got a backlink to your site
* **[nofollow](https://support.google.com/webmasters/answer/96569):** add `rel="nofollow"` attribute to external links only to prevent spam and bad links
* **Internal links:** add ~3 internal links to your content
* **Naming:** Use a descriptive link name: “Click here” or “Read more” are bad link text. Better “Read more about SEO and Web Accessibility”

## Mobile
* **Viewport:** tell browsers how to adjust the page's dimension and scaling to suit the device  
`<meta name="viewport" content="width=device-width, initial-scale=1">`
* **[mobile friendly](http://googlewebmastercentral.blogspot.be/2014/11/helping-users-find-mobile-friendly-pages.html):** mobile optimized sites are marked in search results. Test for [mobile friendly site](https://www.google.com/webmasters/tools/mobile-friendly/)
* **[AppLinks](http://applinks.org/documentation/):** apps that link to your content can then use this metadata to deep-link into your app
* **[Tap targets](https://developers.google.com/speed/docs/insights/SizeTapTargetsAppropriately):** clickable links should not be too small
* **[Smart App Banner](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html):** Safari has a Smart App Banner feature that provides a standardized method of promoting apps on the App Store from a website.

## Sitemap
* **[HTML sitemap](https://www.youtube.com/watch?v=hi5DGOu1uA0):** An HTML sitemap allows site visitors to easily navigate a website.
* **[XML sitemap](https://support.google.com/webmasters/answer/183668):** Help search engines to index your pages
* **[Image sitemap](https://support.google.com/webmasters/answer/178636):** Increase that your images can be found in Image Search results
* **[Video sitemap](https://support.google.com/webmasters/answer/80471):** Make sure, search engines know about all the video content on your site
* **[Mobile sitemap](https://support.google.com/webmasters/answer/6082207):** For feature phones, you can create a mobile sitemap

## Social Media
* **Social Shares:** provide sharing options for your site
* **[Social Profiles](https://developers.google.com/webmasters/structured-data/customize/social-profiles):** add social profiles to your Google search results
* **[OpenGraph](http://ogp.me/):** The Open Graph protocol enables any web page to become a rich object in a social graph.
* **[Facebook](https://developers.facebook.com/docs/sharing/best-practices):** Sharing Best Practices for Websites & Mobile Apps
* **[Twitter](https://dev.twitter.com/cards/getting-started):** with Twitter cards, you can attach photos, videos and media experience to you Tweets
* Authorship information
* **[Google+ Authorship](https://www.youtube.com/watch?v=FgFb6Y-UJUI):** add Google+ authorship information to your page  
`<link rel="author" href="https://plus.google.com/u/0/[GOOGLE+ ID]">`  or  
`<a href="https://plus.google.com/u/0/[GOOGLE+ ID]" rel=author">Google+ Profile</a>` or  
`<a href="https://plus.google.com/u/0/[GOOGLE+ ID]" rel=me">Google+ Profile</a>` or  
`<a href="https://plus.google.com/u/0/[GOOGLE+ ID]" rel=publisher">Google+ Profile</a>`

## Tools & Services

### Webmasters
* **[Google Search Console (GWT)](https://www.google.com/webmasters/):** allows webmasters to check indexing status and optimize visibility ot their websites
* **[Bing Webmasters](http://www.bing.com/toolbox/webmaster):** allows webmasters to add their websites to the Bing index crawler.

### Analytics
* **[Google Analytics](http://www.google.com/analytics/):** generate detailed statistics about a website's traffic
* **[Piwik](http://piwik.org/):** is an open analytics platform
* **[Yahoo Web Analytics](http://web.analytics.yahoo.com):** is Yahoo!’s alternative to the dominant Google Analytics.

### Optimization
* **[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/):** Page Speed Insights measures the performance of a page for mobile devices and desktop devices.
* **[feedthebot seo tool](http://www.feedthebot.com/tools/):** displays: domain strength, links, image seo, social counts & mentions, page/technical seo, pagespeed and more.
* **[Webpagetest.org](http://www.webpagetest.org/):** Web Page Test gives you an overall performance waterfall as well as rendering timeline for sites. It also provides critical insight into time to first byte and what could be holding back web page performance

### Keywords
* **[AdWords Keyword Tool](https://adwords.google.com/KeywordPlanner):** plan your Search Network campaigns and learn what your customers are looking for
* **[Google Trends](http://www.google.com/trends/):** explore Google trending search topics with Google Trends.

### Structured Data
* **[Google+ Snippet Creator](https://developers.google.com/+/web/snippet/):** customize the snippet people see when your page is shared. 
* **[Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/):** past in you rich snippets or url to test it
* **[Twitter card validator](https://cards-dev.twitter.com/validator):** Enter the URL of the page with the meta tags to validate
* **[Facebook Debugger](https://developers.facebook.com/tools/debug):** Enter the URL you want to scrape to see how the page's markup appears to Facebook.
* **[Pinterest](https://developers.pinterest.com/rich_pins/validator/):** Validate your Rich Pins and apply to get them on Pinterest

### Bookmarklets
* **[OuiSEO](https://github.com/carlsednaoui/seo-bookmarklet):** An open-source bookmarklet that shows you on-page SEO and social meta data information.
* **[SEO Bookmarklet](http://twkm.ca/projects/seo-bookmarklet):** A One-Stop SEO Bookmarklet to Quickly Review On-Site SEO

## Books
* **[SEO Warrior](http://shop.oreilly.com/product/9780596157081.do):** Essential Techniques for Increasing Web Visibility
* **[The Art of SEO](http://shop.oreilly.com/product/9780596518875.do):** Mastering Search Engine Optimization

## License
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
