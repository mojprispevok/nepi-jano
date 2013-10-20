Nepi Jano! Kango based browser extension
=======

Nepi Jano! is a Chromium/Google Chrome/Firefox/Safari/Opera extension that allows to use paid features on [www.sme.sk](http://www.sme.sk), [www.hnonline.sk](http://hnonline.sk/) or [www.etrend.sk](http://etrend.sk/).

# Build extensions
* this extension is written with (Kango - cross-browser extension framework)[http://kangoextensions.com/]
* the main code resides in /src/common/nepi-jano*.js files
* to produce installation bundles for different browsers you need to:
** install Python 2.7 (http://www.python.org/download/)
** download (Kango here)[http://kangoextensions.com/kango/kango-framework-latest.zip] and extract the archive with framework to any directory
** get source code from https://github.com/mojprispevok/nepi-jano/tree/kango-extension (git clone https://github.com/mojprispevok/nepi-jano.git)
** in nepi-jano folder execude: python2 %KANGO_FOLDER%/kango.py build ./
** extensions will be generated to nepi-jano/output folder

# Installation

Before installation make sure that you uninstalled older version of this extension (if you have it).

##Chromium/Google Chrome installation
* Download .crx extension from https://github.com/mojprispevok/nepi-jano/tree/kango-extension/output/
* Type chrome://extensions in your Google Chrome browser
* Drag and drop .crx file to Chromium/Google Chrome extensions tab

##Firefox installation
TODO

##Safari installation
TODO

##Opera installation
TODO

##How to use it
Just install extension and click on some paid link on [www.sme.sk](http://www.sme.sk) and wait for it...

##How it works
Read my blog posts about it: [2013.04.21](http://blog.ejci.net/2013/04/21/piano-and-sme-sk/), [2013.05.19](http://blog.ejci.net/2013/05/19/paid-content-for-free-on-slovak-news-portals/)


##Disclaimer
This extension was made only for test purposes.
Buy [Piano](http://www.pianomedia.sk) subscription. You wil save hungry children in Africa! Seriously. Don't be an asshole and buy subscription.


Author: [Miroslav Magda](http://ejci.net)

##License
All code is open source and dual licensed under GPL and MIT. Check the individual licenses for more information.


###Change log
####0.10.0
* Chrome extension converted to Kango framework to work under multiple browsers (Chrome/Firefox/Safari/Opera)
* code not fixed, so it works only for Chromium/Google Chrome at this moment

####0.9.5
* another fix for hnonline.sk 

####0.9.4
* fix for hnonline.sk
     - after my report to hnonline.sk they fixed it so i made a simple workaround
* etrend.sk support (piano paid content, content for subscribers)

####0.9.3
* partial support for hnonline.sk

####0.9.2
* jQuery 2.0.0
* Bugfix (change link s.sme.sk/export/phone/?c=XXX to www.sme.sk/c/XXX/)

####0.9.1
* Bugfixes
* Rewriting extension
* View paid videos with custom HTML5 video player

####0.9.0
* View paid articles

####0.1.2
* Proof of concept working on Windows

####0.1.1
* Proof of concept (stand alone extension)
