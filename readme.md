# [Search Engine Optimization (SEO)](//marcobiedermann.github.io/search-engine-optimization/)

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](//github.com/sindresorhus/awesome)
[![Join the chat at https://gitter.im/marcobiedermann/search-engine-optimization](https://badges.gitter.im/Join%20Chat.svg)](//gitter.im/marcobiedermann/search-engine-optimization?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
  * [Webmasters](#webmasters)
  * [Analytics](#analytics)
  * [Optimization](#optimization)
  * [Keywords](#keywords-1)
  * [Links](#links)
  * [Structured Data](#structured-data)
  * [Bookmarklets](#bookmarklets)
  * [Browser Extensions](#browser-extensions)
  * [WordPress Plugins](#wordpress-plugins)
* [Books](#books)
* [Courses](#courses)

## URL
* **Descriptive URLs:** use a descriptive page url, which should reflect your targeted keyword
* **[Subdomain or subfolder](//www.youtube.com/watch?v=_MswMYk05tk):** subdomains are seen as separate domains
* **[Hyphens](//www.youtube.com/watch?v=AQcSFsQyct8):** split words using hyphens
* **[www or no-www](//support.google.com/webmasters/answer/44231):** provide both domains, but set a prefered version in Google Webmaster Tools
* **[Localisation](//support.google.com/webmasters/answer/62399):** choose a country-specific domain, for better local search results
* **[HTTPS](//googlewebmastercentral.blogspot.be/2014/08/https-as-ranking-signal.html):** Security is a top priority for Google
* **[URL builder](//support.google.com/analytics/answer/1033867):** Use this tool to add custom compaign parameters to your URLs
* **[File extension](//www.youtube.com/watch?v=dSG6C33GwsE)**: do not strip out the file extension on URLs

## Accessibility
* **403:** provide a 403 - Access denied page
* **404:** provide a 404 - Page not found page
* **Robots:** block pages which should not be indexed via the `robots.txt` file or
`<meta name="robots" content="">`
* **File not found:** avoid `404 FILE_NOT_FOUND` errors
* **Redirects:** Avoid redirects if possible. Use 301 redirect instead of 302
* **[Pagination](//support.google.com/webmasters/answer/1663744):** implement the `rel="next"` and `rel="prev"` attributes to links
* **Moving a website:** redirect all your links to the new location via `.htaccess`
* **[Performance](//developers.google.com/webmasters/mobile-sites/mobile-seo/common-mistakes/slow-mobile-pages):** performance and loading time is important
* **Validation:** write valid code ([HTML Validator](//validator.w3.org/) [CSS Validator](//jigsaw.w3.org/css-validator/))
* **[WAI-Aria](//www.w3.org/TR/wai-aria/):** use WAI-Aria tags to help machines understanding your code
* **[RichSnippets](//schema.org/):** markup your code with rich snippets, they show up on the search results page
* **[Custom Search](//developers.google.com/structured-data/slsb-overview):** with sitelink Google Sitelink search box, people can reach your content more quickly
* **Layout:** Use `divs` instead of `tables` for layout. Using `tables` is semantically not correct.

## Meta Information
* **Title:** each page should have a unique speaking title (60 - 100 characters)
`<title>Website Title</title>`
* **[Description](//www.youtube.com/watch?v=W4gr88oHb-k):** each page should have a unique description (max. 160 characters)
`<meta name="description" content="">`

## Keywords
* **Single:** every page should have a single unique targeted keyword
* **Research:** rank for keywords with high traffic and less competition
* **[URL](//www.youtube.com/watch?v=rAWFv43qubI):** keyword should appear in URL name
* **Title:** keyword should appear in page title
* **Heading:** keyword should appear in headings
* **Content:** keyword should apear in ~3% of article length
* **[Meta Tag](//www.youtube.com/watch?v=jK7IPbnmvVU):** you can ommit the `<meta name="keywords" content="">`,
search engines do not use this meta tag

## Content
* **Content:** Content matters the most in SEO
* **Headings:** Clear structure `H1` -` H6` max. 70 characters long
* **Strong:** use `strong` tag to highlight your targeted keyword
* **[Uniqueness](//www.youtube.com/watch?v=mQZY7EmjbMA):** do not provide duplicated content, use unique content types
* **Length:** article should be at least 300 words
* **Freshness:** new content is important. Updating pages or regulary posting is recommended
* **Flash:** avoid Flash content and flash pages. They are not accessible on mobile phones and will be ranked lower

## Images
* **[File name](//www.youtube.com/watch?v=h2SWuUobbr0):** use a short descriptive name
* **[Alt tag](//support.google.com/webmasters/answer/114016):** add an alt-tag this a description of the image (60 - 70 characters)
* **Dimentions:** add the `width=""` and `height=""` attributes to the image
* **[Responsive Images](//www.w3.org/TR/html-picture-element/):** serve the most optimized image corresponding to the window size
* **Size:** keep the filesize as low as possible
* **[Optimization](//imageoptim.com/):** Optimize images by removing some meta information

## Videos
* **Controls:** Add controls to playback and control your video
* **Embed:** Allow others to embed your videos
* **Transcriptions:** use transcriptions for indexing, usability & content
* **[Unplayable content](//developers.google.com/webmasters/mobile-sites/mobile-seo/common-mistakes/unplayable-content):** Avoid unplayable video content. Use HTML5 `<video>` tag instead of Flash

## Links
* **Title:** add the title attribute to links
* **Backlinks:** Only add external links if you got a backlink to your site
* **[nofollow](//support.google.com/webmasters/answer/96569):** add `rel="nofollow"` attribute to external links only to prevent spam and bad links
* **Internal links:** add ~3 internal links to your content
* **[Languages](//moz.com/learn/seo/hreflang-tag):** The hreflang tag tells Google which language you are using on a specific page, so the search engine can serve that result to users searching in that language `<link rel="alternate" href="example.com/fr/" hreflang="fr-fr" />`
* **Naming:** Use a descriptive link name: “Click here” or “Read more” are bad link text. Better “Read more about SEO and Web Accessibility”

## Mobile
* **Viewport:** tell browsers how to adjust the page's dimension and scaling to suit the device
`<meta name="viewport" content="width=device-width, initial-scale=1">`
* **[mobile friendly](//googlewebmastercentral.blogspot.be/2014/11/helping-users-find-mobile-friendly-pages.html):** mobile optimized sites are marked in search results. Test for [mobile friendly site](//www.google.com/webmasters/tools/mobile-friendly/)
* **[AppLinks](//applinks.org/documentation/):** apps that link to your content can then use this metadata to deep-link into your app
* **[Tap targets](//developers.google.com/speed/docs/insights/SizeTapTargetsAppropriately):** clickable links should not be too small
* **[Smart App Banner](//developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html):** Safari has a Smart App Banner feature that provides a standardized method of promoting apps on the App Store from a website.

## Sitemap
* **[HTML sitemap](//www.youtube.com/watch?v=hi5DGOu1uA0):** An HTML sitemap allows site visitors to easily navigate a website.
* **[XML sitemap](//support.google.com/webmasters/answer/183668):** Help search engines to index your pages
* **[Image sitemap](//support.google.com/webmasters/answer/178636):** Increase that your images can be found in Image Search results
* **[Video sitemap](//support.google.com/webmasters/answer/80471):** Make sure, search engines know about all the video content on your site
* **[Mobile sitemap](//support.google.com/webmasters/answer/6082207):** For feature phones, you can create a mobile sitemap

## Social Media
* **Social Shares:** provide sharing options for your site
* **[Social Profiles](//developers.google.com/webmasters/structured-data/customize/social-profiles):** add social profiles to your Google search results
* **[OpenGraph](//ogp.me/):** The Open Graph protocol enables any web page to become a rich object in a social graph.
* **[Facebook](//developers.facebook.com/docs/sharing/best-practices):** Sharing Best Practices for Websites & Mobile Apps
* **[Twitter](//dev.twitter.com/cards/getting-started):** with Twitter cards, you can attach photos, videos and media experience to you Tweets
* Authorship information
* **[Google+ Authorship](//www.youtube.com/watch?v=FgFb6Y-UJUI):** add Google+ authorship information to your page
`<link rel="author" href="//plus.google.com/u/0/[GOOGLE+ ID]">`  or
`<a href="//plus.google.com/u/0/[GOOGLE+ ID]" rel=author">Google+ Profile</a>` or
`<a href="//plus.google.com/u/0/[GOOGLE+ ID]" rel=me">Google+ Profile</a>` or
`<a href="//plus.google.com/u/0/[GOOGLE+ ID]" rel=publisher">Google+ Profile</a>`

## Tools & Services

### Webmasters
* **[Bing Webmasters](//www.bing.com/toolbox/webmaster):** allows webmasters to add their websites to the Bing index crawler.
* **[Google Search Console (GWT)](//www.google.com/webmasters/):** allows webmasters to check indexing status and optimize visibility ot their websites
* **[Google Tag Manager](//www.google.com/analytics/tag-manager/):** Learn about Google Analytics Tag Manager and how it can help simplify your life and need for IT requests. Launch new tags with a few clicks.

### Analytics
* **[Ahrefs](//ahrefs.com/):** Analyze websites, track social media, build backlinks - Ahrefs has you covered. Try our marketing and SEO tools Site Explorer and Content Explorer today!
* **[BuzzSumo](//app.buzzsumo.com/research/most-shared):** Find the most shared content for any topic or domain.
* **[Followerwonk](//moz.com/followerwonk):** Tools for Twitter Analytics, Bio Search and More
* **[Google Analytics](//www.google.com/analytics/):** generate detailed statistics about a website's traffic
* **[Open Site Explorer](//moz.com/researchtools/ose/):** Use Open Site Explorer to identify link building opportunities. Research backlinks, identify top pages, view social activity, and analyze anchor text.
* **[Piwik](//piwik.org/):** is an open analytics platform
* **[SEMrush](//www.semrush.com/):** SEMrush is a powerful and versatile competitive intelligence suite for online marketing, from SEO and PPC to social media and video advertising research.
* **[SimilarWeb](//www.similarweb.com/):** Compare website traffic with SimilarWeb.com's advanced traffic estimator tool. See any website's traffic sources & uncover their online marketing strategies.
* **[Twitter Analytics](//analytics.twitter.com/):** Measure and boost your impact on Twitter.
* **[Yahoo Web Analytics](//web.analytics.yahoo.com):** is Yahoo!’s alternative to the dominant Google Analytics.

### Optimization
* **[PageSpeed Insights](//developers.google.com/speed/pagespeed/insights/):** Page Speed Insights measures the performance of a page for mobile devices and desktop devices.
* **[Varvy Seo tool](//varvy.com/tools/):** displays: domain strength, links, image seo, social counts & mentions, page/technical seo, pagespeed and more.
* **[Webpagetest.org](//www.webpagetest.org/):** Web Page Test gives you an overall performance waterfall as well as rendering timeline for sites. It also provides critical insight into time to first byte and what could be holding back web page performance
* **[WooRank](//www.woorank.com/):** WooRank will help you to address issues on your site & identify opportunities to push you ahead of the competition.

### Keywords
* **[AdWords Keyword Tool](//adwords.google.com/KeywordPlanner):** plan your Search Network campaigns and learn what your customers are looking for
* **[Google Trends](//www.google.com/trends/):** explore Google trending search topics with Google Trends.
* **[Keyword Tool](//keywordtool.io/):** Best FREE alternative to Google Keyword Tool for SEO & PPC keyword research! Get 750+ relevant long-tail keywords from Google Suggest in seconds!
* **[Rankscanner](//www.rankscanner.com/):** Easily track your keyword positions (SERPs) on Google for free. Unlimited websites and 100 % ranking accuracy. The best SEO tool and SERP monitor online.

### Links
* **[OpenLinkProfiler](//www.openlinkprofiler.org/):** Get an in-depth analysis of the freshest live backlinks.
* **[Screaming Frog SEO Spider Tool & Crawler Software](//www.screamingfrog.co.uk/seo-spider/):** The Screaming Frog SEO Spider is a small desktop program (PC or Mac) which crawls websites’ links, images, CSS, script and apps from an SEO perspective.
* **[Search Engine Spider Simulator](//tools.seochat.com/tools/search-spider-simulator):** This tool simulates a search engine by displaying the contents of a web page in exactly the way the search engine bot would see it when it crawls the page: See most prominent or inaccessible page elements.

### Structured Data
* **[Google+ Snippet Creator](//developers.google.com/+/web/snippet/):** customize the snippet people see when your page is shared.
* **[Structured Data Testing Tool](//developers.google.com/structured-data/testing-tool/):** past in you rich snippets or url to test it
* **[Twitter card validator](//cards-dev.twitter.com/validator):** Enter the URL of the page with the meta tags to validate
* **[Facebook Debugger](//developers.facebook.com/tools/debug):** Enter the URL you want to scrape to see how the page's markup appears to Facebook.
* **[Pinterest](//developers.pinterest.com/rich_pins/validator/):** Validate your Rich Pins and apply to get them on Pinterest

### Bookmarklets
* **[OuiSEO](//github.com/carlsednaoui/seo-bookmarklet):** An open-source bookmarklet that shows you on-page SEO and social meta data information.
* **[SEO Bookmarklet](//twkm.ca/projects/seo-bookmarklet):** A One-Stop SEO Bookmarklet to Quickly Review On-Site SEO

### Browser Extensions
* **[MozBar](//moz.com/tools/seo-toolbar):** The SEO Toolbar from Moz gives you quick access to many on-page SEO factors, Domain & Page Authority plus a quick nofollow toggle. Download the Free Toolbar today!

### WordPress Plugins
* **[All in One SEO Pack](//wordpress.org/plugins/all-in-one-seo-pack/):** The most downloaded plugin for WordPress (almost 30 million downloads). Use All in One SEO Pack to automatically optimize your site for Search Engines
* **[Yoast SEO](//wordpress.org/plugins/wordpress-seo/):** Improve your WordPress SEO: Write better content and have a fully optimized WordPress site using Yoast SEO plugin.

## Books
* **[SEO 2016: Learn Search Engine Optimization](//www.amazon.com/dp/1512275069/ref=cm_sw_su_dp):** A Comprehensive Must-Have Guide to SEO in Today's Competitive Search Environment
* **[SEO For Dummies, 6th Edition](//shop.oreilly.com/product/9781119129554.do):** Your fully updated guide to search engine optimization
* **[SEO Warrior](//shop.oreilly.com/product/9780596157081.do):** Essential Techniques for Increasing Web Visibility
* **[Search engine optimization 2016: Learn SEO with smart internet marketing strategies](//www.amazon.com/dp/151534567X/ref=cm_sw_su_dp):** Learn SEO strategies to rank at the top of Google with SEO 2016
* **[The Art of SEO, 3rd Edition](//shop.oreilly.com/product/0636920032908.do):** Mastering Search Engine Optimization

## Courses
* **[Analyzing Your Website to Improve SEO](//www.lynda.com/Marketing-Small-Business-Marketing-tutorials/Analyzing-Your-Website-Improve-SEO/82409-2.html):** Walks step-by-step through the process of reviewing the content and markup of a web site to improve its ranking in search engine results. With Peter Kent by Lynda.com
* **[ClickMinded Search Engine Optimization Training](//www.udemy.com/seo-training/):** ClickMinded Search Engine Optimization Training with Tommy Griffith by udemy
* **[Ecommerce SEO 101 Video Series](//www.shopify.com/videos/ecommerce-seo-101):** Ecommerce SEO 101 Video Series with Helen Overland by shopify
* **[Improving SEO Using Accessibility Techniques](//www.lynda.com/HTML-5-tutorials/Improving-SEO-Using-Accessibility-Techniques/89051-6.html):** Make web sites more accessible and search engine friendly through proper markup and web standards compliance. With Morten Rand-Hendriksen by Lynda.com
* **[International SEO Fundamentals](//www.lynda.com/Analytics-tutorials/International-SEO-Fundamentals/377449-6.html):** Attract international visitors to your websites with these SEO tips. Learn how to determine target markets and optimize your website's technical aspects and content for countries and languages around the world. With David Booth by Lynda.com
* **[Learning Search Engine Optimization (SEO): A Video Introduction](//www.video2brain.com/en/courses/learning-search-engine-optimization-seo-a-video-introduction):** Learning Search Engine Optimization (SEO): A Video Introduction with Matt Bailey by video2brain
* **[Learning Web Analytics](//www.video2brain.com/en/courses/learning-web-analytics):** Learning Web Analytics with Matt Bailey by video2brain
* **[SEO Fundamentals](//www.lynda.com/Analytics-tutorials/SEO-Fundamentals/187858-2.html):** SEO Fundamentals with David Booth by Lynda.com
* **[SEO Fundamentals](//www.pluralsight.com/courses/seo-fundamentals):** SEO Fundamentals with Paul Wilson by Pluralsight
* **[SEO Tools Fundamentals](//www.lynda.com/Buzzstream-tutorials/SEO-Tools-Fundamentals/368917-2.html):** Learn about today's top SEO tools for technical optimization, content optimization, offsite optimization, and competitive research. With Brad Batesole by Lynda.com
* **[SEO Training Course by Moz](//www.udemy.com/whiteboard-seo/):** SEO Training Course with Moz by udemy
* **[SEO for Beginners](//seoforbeginners.com/):** SEO for Beginners: A Video Guide Introduction
* **[SEO for Ecommerce](//www.lynda.com/Google-Analytics-tutorials/SEO-Ecommerce/386884-2.html):** SEO for ecommerce is different. Get strategies tailored for optimizing an online store to improve page rankings and build traffic. With Steven Harris by Lynda.com
* **[SEO for Local Visibility](//www.lynda.com/Google-Maps-tutorials/SEO-Local-Visibility/178132-2.html):** Achieve maximum visibility in search rankings with these local SEO strategies. With Brad Batesole by Lynda.com
* **[SEO for Web Designers](//webdesign.tutsplus.com/courses/seo-for-web-designers):** SEO for Web Designers with Craig Campbell by TutsPlus
* **[SEO: Keyword Strategy in Depth](//www.lynda.com/Business-Online-Marketing-tutorials/SEO-Keyword-Strategy-Depth/147030-6.html):** Learn how to research keywords, apply them to your website, and create ad campaigns around keywords. Increase your site traffic and better understand your user's intent with keywords. With Matt Bailey by Lynda.com
* **[SEO: Link Building in Depth](//www.lynda.com/Business-Online-Marketing-tutorials/SEO-Link-Building-Depth/95253-6.html):** Investigates the anatomy of a link, how links affect page ranking, and the properties that make an excellent inbound link. With Peter Kent by Lynda.com
* **[Spying with SEO Tools](//www.lynda.com/Marketing-PPC-tutorials/Spying-SEO-Tools/371730-6.html):** Learn how to use SEO tools and techniques to research the competition online. Find out what keywords your competitors are optimizing for—and then outrank them on search engine results pages. With Anson Alexander by Lynda.com
* **[Video SEO Basics](//www.lynda.com/Business-Web-Video-tutorials/Video-SEO-Basics/118217-6.html):** Optimize your videos for search engines and convert the traffic to achieve your business goals. With Ian Lurie by Lynda.com
* **[WordPress Plugins: SEO](//www.lynda.com/WordPress-tutorials/WordPress-Plugins-SEO/140779-2.html):** Drive more visitors to your WordPress site by performing search engine optimization, or SEO, with the help of two powerful plugins. With Morten Rand-Hendriksen by Lynda.com

## License
[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](//creativecommons.org/publicdomain/zero/1.0/)
