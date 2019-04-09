##### RED Interactive Agency - Ad Technology

[![npm
(tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-useragent.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-useragent)
[![GitHub
issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent)
[![npm
downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-useragent.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-useragent)

[![GitHub
contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent/graphs/contributors/)
[![GitHub
commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent/commits/master)
[![npm
license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-useragent.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-useragent/blob/master/LICENSE)
[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Useragent

## Classes

<dl>
<dt><a href="#ad-useragent">ad-useragent</a></dt>
<dd></dd>
<dt><a href="#ad-useragent">ad-useragent</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#agentString">agentString</a> : <code>string</code></dt>
<dd><p>Current user agent of browser.</p>
</dd>
<dt><a href="#pixelRatio">pixelRatio</a> : <code>string</code></dt>
<dd><p>Pixel ratio of device viewport.</p>
</dd>
<dt><a href="#agentString">agentString</a> : <code>string</code></dt>
<dd><p>Current user agent of browser.</p>
</dd>
<dt><a href="#pixelRatio">pixelRatio</a> : <code>string</code></dt>
<dd><p>Pixel ratio of device viewport.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getOrientation">getOrientation()</a> ⇒ <code>string</code></dt>
<dd><p>Orientaion of device viewport: landscape or portrait.</p>
</dd>
<dt><a href="#getDimensions">getDimensions()</a> ⇒ <code>object</code></dt>
<dd><p>The current dimensions of the device&#39;s viewport, returns an object with a width &amp; height 
        value that are direct returns of windowWidth and windowHeight.</p>
</dd>
<dt><a href="#report">report()</a></dt>
<dd><p>Called from within the pipeline, logs out the useragent string &amp; all available pasered data for 
        brand, product, device, OS &amp; version, browser &amp; version, dimensions, orientation, &amp; pixel ratio</p>
</dd>
<dt><a href="#getOrientation">getOrientation()</a> ⇒ <code>string</code></dt>
<dd><p>Orientaion of device viewport: landscape or portrait.</p>
</dd>
<dt><a href="#getDimensions">getDimensions()</a> ⇒ <code>object</code></dt>
<dd><p>The current dimensions of the device&#39;s viewport, returns an object with a width &amp; height 
        value that are direct returns of windowWidth and windowHeight.</p>
</dd>
<dt><a href="#report">report()</a></dt>
<dd><p>Called from within the pipeline, logs out the useragent string &amp; all available pasered data for 
        brand, product, device, OS &amp; version, browser &amp; version, dimensions, orientation, &amp; pixel ratio</p>
</dd>
</dl>

<a name="ad-useragent"></a>

## ad-useragent
**Kind**: global class  

* [ad-useragent](#ad-useragent)
    * [.getBrand()](#ad-useragent.getBrand) ⇒ <code>string</code>
    * [.getProduct()](#ad-useragent.getProduct) ⇒ <code>string</code>
    * [.getOS()](#ad-useragent.getOS) ⇒ <code>string</code>
    * [.getOSVersion()](#ad-useragent.getOSVersion) ⇒ <code>string</code>
    * [.isOS()](#ad-useragent.isOS) ⇒ <code>boolean</code>
    * [.isBrowser(name)](#ad-useragent.isBrowser) ⇒ <code>boolean</code>
    * [.getBrowser()](#ad-useragent.getBrowser) ⇒ <code>string</code>
    * [.getBrowserVersion()](#ad-useragent.getBrowserVersion) ⇒ <code>string</code>
    * [.isDevice(type)](#ad-useragent.isDevice) ⇒ <code>boolean</code>
    * [.getDevice()](#ad-useragent.getDevice) ⇒ <code>string</code>

<a name="ad-useragent.getBrand"></a>

### ad-useragent.getBrand() ⇒ <code>string</code>
Brand of device, possible values are: 
		<code>microsoft</code>, 
		<code>apple</code>, 
		<code>android</code>, 
		<code>rim</code>, 
		<code>unknown</code>. 
		<codeblock>
			import { getBrand } from 'ad-useragent'
			const osVersion = getBrand() // 'apple'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getProduct"></a>

### ad-useragent.getProduct() ⇒ <code>string</code>
Brand subtype, possible values are: 
		<code>windows phone</code>, 
		<code>windows</code>, 
		<code>iphone</code>, 
		<code>ipad</code>, 
		<code>ipod</code>, 
		<code>mac</code>, 
		<code>android</code>, 
		<code>pixel 2</code>, 
		<code>blackberry</code>. 
		<codeblock>
			import { getProduct } from 'ad-useragent'
			const osVersion = getProduct() // 'mac'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOS"></a>

### ad-useragent.getOS() ⇒ <code>string</code>
Operating system of device.
		<codeblock>
			import { getOS } from 'ad-useragent'
			const os = getOS() // 'osx'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOSVersion"></a>

### ad-useragent.getOSVersion() ⇒ <code>string</code>
Version of operating system of device.
		<codeblock>
			import { getOSVersion } from 'ad-useragent'
			const osVersion = getOSVersion() // '10.12.6'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.isOS"></a>

### ad-useragent.isOS() ⇒ <code>boolean</code>
Shorthand for getOS(), then check if is equal to string
		<codeblock>
			import { isOS } from 'ad-useragent'
			const isIOS = isDevice('ios') // false
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.isBrowser"></a>

### ad-useragent.isBrowser(name) ⇒ <code>boolean</code>
Shorthand for getBrowser(), then check if is equal to string
		<codeblock>
			import { isBrowser } from 'ad-useragent'
			isBrowser('ie')
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The browser name as a string, eg: 'chrome', 'ie' |

<a name="ad-useragent.getBrowser"></a>

### ad-useragent.getBrowser() ⇒ <code>string</code>
Brand of browser, eg: chrome, safari, ie, firefox, edge
		<codeblock>
			import { getBrowser } from 'ad-useragent'
			const browserName = getBrowser() // 'chrome'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getBrowserVersion"></a>

### ad-useragent.getBrowserVersion() ⇒ <code>string</code>
Version of the browser. 
		<codeblock>
			import { getBrowserVersion } from 'ad-useragent'
			const browserVersion = getBrowserVersion() // '73.0.3683.103'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.isDevice"></a>

### ad-useragent.isDevice(type) ⇒ <code>boolean</code>
Shorthand for getDevice(), then check if is equal to string
		<codeblock>
			import { isDevice } from 'ad-useragent'
			const isDesktop = isDevice('desktop') // true
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The device type as a string, eg: 'mobile', 'tablet', or 'desktop' |

<a name="ad-useragent.getDevice"></a>

### ad-useragent.getDevice() ⇒ <code>string</code>
The device type as a string, possible values are: 
		<code>mobile</code>, 
		<code>tablet</code>, 
		<code>desktop</code>. 
		<br><br>
		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. 
		<codeblock>
			import { getDevice } from 'ad-useragent'
			const deviceType = getDevice() // 'desktop'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent"></a>

## ad-useragent
**Kind**: global class  

* [ad-useragent](#ad-useragent)
    * [.getBrand()](#ad-useragent.getBrand) ⇒ <code>string</code>
    * [.getProduct()](#ad-useragent.getProduct) ⇒ <code>string</code>
    * [.getOS()](#ad-useragent.getOS) ⇒ <code>string</code>
    * [.getOSVersion()](#ad-useragent.getOSVersion) ⇒ <code>string</code>
    * [.isOS()](#ad-useragent.isOS) ⇒ <code>boolean</code>
    * [.isBrowser(name)](#ad-useragent.isBrowser) ⇒ <code>boolean</code>
    * [.getBrowser()](#ad-useragent.getBrowser) ⇒ <code>string</code>
    * [.getBrowserVersion()](#ad-useragent.getBrowserVersion) ⇒ <code>string</code>
    * [.isDevice(type)](#ad-useragent.isDevice) ⇒ <code>boolean</code>
    * [.getDevice()](#ad-useragent.getDevice) ⇒ <code>string</code>

<a name="ad-useragent.getBrand"></a>

### ad-useragent.getBrand() ⇒ <code>string</code>
Brand of device, possible values are: 
		<code>microsoft</code>, 
		<code>apple</code>, 
		<code>android</code>, 
		<code>rim</code>, 
		<code>unknown</code>. 
		<codeblock>
			import { getBrand } from 'ad-useragent'
			const osVersion = getBrand() // 'apple'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getProduct"></a>

### ad-useragent.getProduct() ⇒ <code>string</code>
Brand subtype, possible values are: 
		<code>windows phone</code>, 
		<code>windows</code>, 
		<code>iphone</code>, 
		<code>ipad</code>, 
		<code>ipod</code>, 
		<code>mac</code>, 
		<code>android</code>, 
		<code>pixel 2</code>, 
		<code>blackberry</code>. 
		<codeblock>
			import { getProduct } from 'ad-useragent'
			const osVersion = getProduct() // 'mac'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOS"></a>

### ad-useragent.getOS() ⇒ <code>string</code>
Operating system of device.
		<codeblock>
			import { getOS } from 'ad-useragent'
			const os = getOS() // 'osx'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOSVersion"></a>

### ad-useragent.getOSVersion() ⇒ <code>string</code>
Version of operating system of device.
		<codeblock>
			import { getOSVersion } from 'ad-useragent'
			const osVersion = getOSVersion() // '10.12.6'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.isOS"></a>

### ad-useragent.isOS() ⇒ <code>boolean</code>
Shorthand for getOS(), then check if is equal to string
		<codeblock>
			import { isOS } from 'ad-useragent'
			const isIOS = isDevice('ios') // false
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.isBrowser"></a>

### ad-useragent.isBrowser(name) ⇒ <code>boolean</code>
Shorthand for getBrowser(), then check if is equal to string
		<codeblock>
			import { isBrowser } from 'ad-useragent'
			isBrowser('ie')
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The browser name as a string, eg: 'chrome', 'ie' |

<a name="ad-useragent.getBrowser"></a>

### ad-useragent.getBrowser() ⇒ <code>string</code>
Brand of browser, eg: chrome, safari, ie, firefox, edge
		<codeblock>
			import { getBrowser } from 'ad-useragent'
			const browserName = getBrowser() // 'chrome'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getBrowserVersion"></a>

### ad-useragent.getBrowserVersion() ⇒ <code>string</code>
Version of the browser. 
		<codeblock>
			import { getBrowserVersion } from 'ad-useragent'
			const browserVersion = getBrowserVersion() // '73.0.3683.103'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.isDevice"></a>

### ad-useragent.isDevice(type) ⇒ <code>boolean</code>
Shorthand for getDevice(), then check if is equal to string
		<codeblock>
			import { isDevice } from 'ad-useragent'
			const isDesktop = isDevice('desktop') // true
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The device type as a string, eg: 'mobile', 'tablet', or 'desktop' |

<a name="ad-useragent.getDevice"></a>

### ad-useragent.getDevice() ⇒ <code>string</code>
The device type as a string, possible values are: 
		<code>mobile</code>, 
		<code>tablet</code>, 
		<code>desktop</code>. 
		<br><br>
		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. 
		<codeblock>
			import { getDevice } from 'ad-useragent'
			const deviceType = getDevice() // 'desktop'
		</codeblock>

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="agentString"></a>

## agentString : <code>string</code>
Current user agent of browser.

**Kind**: global variable  
<a name="pixelRatio"></a>

## pixelRatio : <code>string</code>
Pixel ratio of device viewport.

**Kind**: global variable  
<a name="agentString"></a>

## agentString : <code>string</code>
Current user agent of browser.

**Kind**: global variable  
<a name="pixelRatio"></a>

## pixelRatio : <code>string</code>
Pixel ratio of device viewport.

**Kind**: global variable  
<a name="getOrientation"></a>

## getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait.

**Kind**: global function  
<a name="getDimensions"></a>

## getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.

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

**Kind**: global function  
<a name="getOrientation"></a>

## getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait.

**Kind**: global function  
<a name="getDimensions"></a>

## getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.

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

**Kind**: global function  

* * *

&copy; 2019 RED