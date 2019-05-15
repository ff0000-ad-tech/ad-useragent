##### RED Interactive Agency - Ad Technology

[![npm (tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-useragent.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-useragent)
[![GitHub issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent)
[![npm downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-useragent.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-useragent)

[![GitHub contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent/graphs/contributors/)
[![GitHub commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent/commits/master)
[![npm license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

* * *

# ad-useragent

Collection of methods and vars that parse the useragent to reveal information about the device on which the code is currently executing. Developed for the digital ad environment, lightwieght is the focus without sacrificing accuracy. If utilizing the entire package, it still comes in at ~2k babel/minified.

## API 

* [agentString](#agentString) : <code>string</code>
* [pixelRatio](#pixelRatio) : <code>string</code>
* [getOrientation()](#getOrientation) ⇒ <code>string</code>
* [getDimensions()](#getDimensions) ⇒ <code>object</code>
* [report()](#report)
* [getBrand()](#getBrand) ⇒ <code>string</code>
* [getProduct()](#getProduct) ⇒ <code>string</code>
* [getOS()](#getOS) ⇒ <code>string</code>
* [getOSVersion()](#getOSVersion) ⇒ <code>string</code>
* [isOS()](#isOS) ⇒ <code>boolean</code>
* [isBrowser(name)](#isBrowser) ⇒ <code>boolean</code>
* [getBrowser()](#getBrowser) ⇒ <code>string</code>
* [getBrowserVersion()](#getBrowserVersion) ⇒ <code>string</code>
* [isDevice(type)](#isDevice) ⇒ <code>boolean</code>
* [getDevice()](#getDevice) ⇒ <code>string</code>
* [isDualGestureIE()](#isDualGestureIE) ⇒ <code>boolean</code>

<a name="agentString"></a>

## agentString : <code>string</code>
Current user agent of browser, unmodified or parsed. 
		<pre class="sunlight-highlight-javascript">
import { agentString } from 'ad-useragent'
console.log(agentString) // 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
</pre>

**Kind**: global variable  
<a name="pixelRatio"></a>

## pixelRatio : <code>string</code>
Pixel ratio of device viewport. 
		<pre class="sunlight-highlight-javascript">
import { pixelRatio } from 'ad-useragent'
console.log(pixelRatio) // 1
</pre>

**Kind**: global variable  
<a name="ad-useragent"></a>

## ad-useragent : <code>object</code>
**Kind**: global namespace  
<a name="getOrientation"></a>

## getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait. 
		<pre class="sunlight-highlight-javascript">
import { getOrientation } from 'ad-useragent'
getOrientation() // 'landscape'
</pre>

**Kind**: global function  
<a name="getDimensions"></a>

## getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.
		<pre class="sunlight-highlight-javascript">
import { getDimensions } from 'ad-useragent'
getDimensions() // '{ width: 1024, height: 768 }'
</pre>

**Kind**: global function  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | window inner-width |
| height | <code>number</code> | window inner-height |

<a name="report"></a>

## report()
Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio
		<pre class="sunlight-highlight-javascript">
import { report } from 'ad-useragent'
report() // full output in console
</pre>

**Kind**: global function  
<a name="getBrand"></a>

## getBrand() ⇒ <code>string</code>
Brand of device, possible values are: 
		<code>microsoft</code>, 
		<code>apple</code>, 
		<code>android</code>, 
		<code>rim</code>, 
		<code>unknown</code>. 
		<pre class="sunlight-highlight-javascript">
import { getBrand } from 'ad-useragent'
getBrand() // 'apple'
</pre>

**Kind**: global function  
<a name="getProduct"></a>

## getProduct() ⇒ <code>string</code>
Brand subtype, possible values are?: 
		<code>windows phone</code>, 
		<code>windows</code>, 
		<code>iphone</code>, 
		<code>ipad</code>, 
		<code>ipod</code>, 
		<code>mac</code>, 
		<code>android</code>, 
		<code>pixel 2</code>, 
		<code>blackberry</code>. 
		<pre class="sunlight-highlight-javascript">
import { getProduct } from 'ad-useragent'
getProduct() // 'mac'
</pre>

**Kind**: global function  
<a name="getOS"></a>

## getOS() ⇒ <code>string</code>
Operating system of device.
		<pre class="sunlight-highlight-javascript">
import { getOS } from 'ad-useragent'
getOS() // 'osx'
</pre>

**Kind**: global function  
<a name="getOSVersion"></a>

## getOSVersion() ⇒ <code>string</code>
Version of operating system of device.
		<pre class="sunlight-highlight-javascript">
import { getOSVersion } from 'ad-useragent'
getOSVersion() // '10.12.6'
</pre>

**Kind**: global function  
<a name="isOS"></a>

## isOS() ⇒ <code>boolean</code>
Shorthand for getOS(), then check if is equal to string
		<pre class="sunlight-highlight-javascript">
import { isOS } from 'ad-useragent'
isDevice('ios') // false
</pre>

**Kind**: global function  
<a name="isBrowser"></a>

## isBrowser(name) ⇒ <code>boolean</code>
Shorthand for getBrowser(), then check if is equal to string
		<pre class="sunlight-highlight-javascript">
import { isBrowser } from 'ad-useragent'
isBrowser('ie') // false
</pre>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The browser name as a string, eg: 'chrome', 'ie' |

<a name="getBrowser"></a>

## getBrowser() ⇒ <code>string</code>
Brand of browser, eg: chrome, safari, ie, firefox, edge
		<pre class="sunlight-highlight-javascript">
import { getBrowser } from 'ad-useragent'
getBrowser() // 'chrome'
</pre>

**Kind**: global function  
<a name="getBrowserVersion"></a>

## getBrowserVersion() ⇒ <code>string</code>
Version of the browser. 
		<pre class="sunlight-highlight-javascript">
import { getBrowserVersion } from 'ad-useragent'
getBrowserVersion() // '73.0.3683.103'
</pre>

**Kind**: global function  
<a name="isDevice"></a>

## isDevice(type) ⇒ <code>boolean</code>
Shorthand for getDevice(), then check if is equal to string
		<pre class="sunlight-highlight-javascript">
import { isDevice } from 'ad-useragent'
const isDesktop = isDevice('desktop') // true
</pre>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The device type as a string, eg: 'mobile', 'tablet', or 'desktop' |

<a name="getDevice"></a>

## getDevice() ⇒ <code>string</code>
The device type as a string, possible values are: 
		<code>mobile</code>, 
		<code>tablet</code>, 
		<code>desktop</code>. 
		<br><br>
		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. 
		<pre class="sunlight-highlight-javascript">
import { getDevice } from 'ad-useragent'
getDevice() // 'desktop'
</pre>

**Kind**: global function  
<a name="isDualGestureIE"></a>

## isDualGestureIE() ⇒ <code>boolean</code>
Special test case method. When on a hybrid tablet-laptop running Windows 7 or 8 using Internet Explorer 11 or under,
		<code>getDevice()</code> will return "tablet", however that can lead to conflicting desired results when wanting mouse based
		interactions rather than touch. Run this <i>BEFORE</i> using <code>getDevice()</code> as it will re-assign device type to
		'desktop' if all conditions are met.
		<br><br>
		NOTE: This test required the entire package to test against the device, os, os version, browser, and browser version
		<pre class="sunlight-highlight-javascript">
import { isDualGestureIE, getDevice } from 'ad-useragent'
isDualGestureIE()
getDevice() // 'desktop'
</pre>

**Kind**: global function  


* * *