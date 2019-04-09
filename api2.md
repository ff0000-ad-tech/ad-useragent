[![view on npm](http://img.shields.io/npm/v/example.svg)](https://www.npmjs.org/package/example)

## Modules

<dl>
<dt><a href="#module_ad-useragent">ad-useragent</a></dt>
<dd></dd>
<dt><a href="#module_ad-useragent">ad-useragent</a></dt>
<dd></dd>
</dl>

<a name="module_ad-useragent"></a>

## ad-useragent
<a name="module_ad-useragent"></a>

## ad-useragent

* * *

BRO

&copy; 1942-2016 Muhammad Ali[![view on npm](http://img.shields.io/npm/v/example.svg)](https://www.npmjs.org/package/example)

## Classes

<dl>
<dt><a href="#ad-useragent">ad-useragent</a></dt>
<dd></dd>
<dt><a href="#ad-useragent">ad-useragent</a></dt>
<dd></dd>
</dl>

<a name="ad-useragent"></a>

## ad-useragent
**Kind**: global class  

* [ad-useragent](#ad-useragent)
    * [.agentString](#ad-useragent.agentString) : <code>string</code>
    * [.pixelRatio](#ad-useragent.pixelRatio) : <code>string</code>
    * [.agentString](#ad-useragent.agentString) : <code>string</code>
    * [.pixelRatio](#ad-useragent.pixelRatio) : <code>string</code>
    * [.getOrientation()](#ad-useragent.getOrientation) ⇒ <code>string</code>
    * [.getDimensions()](#ad-useragent.getDimensions) ⇒ <code>object</code>
    * [.report()](#ad-useragent.report)
    * [.getOrientation()](#ad-useragent.getOrientation) ⇒ <code>string</code>
    * [.getDimensions()](#ad-useragent.getDimensions) ⇒ <code>object</code>
    * [.report()](#ad-useragent.report)
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

<a name="ad-useragent.agentString"></a>

### ad-useragent.agentString : <code>string</code>
Current user agent of browser.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.pixelRatio"></a>

### ad-useragent.pixelRatio : <code>string</code>
Pixel ratio of device viewport.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.agentString"></a>

### ad-useragent.agentString : <code>string</code>
Current user agent of browser.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.pixelRatio"></a>

### ad-useragent.pixelRatio : <code>string</code>
Pixel ratio of device viewport.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOrientation"></a>

### ad-useragent.getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getDimensions"></a>

### ad-useragent.getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | window inner-width |
| height | <code>number</code> | window inner-height |

<a name="ad-useragent.report"></a>

### ad-useragent.report()
Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOrientation"></a>

### ad-useragent.getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getDimensions"></a>

### ad-useragent.getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | window inner-width |
| height | <code>number</code> | window inner-height |

<a name="ad-useragent.report"></a>

### ad-useragent.report()
Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
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
    * [.agentString](#ad-useragent.agentString) : <code>string</code>
    * [.pixelRatio](#ad-useragent.pixelRatio) : <code>string</code>
    * [.agentString](#ad-useragent.agentString) : <code>string</code>
    * [.pixelRatio](#ad-useragent.pixelRatio) : <code>string</code>
    * [.getOrientation()](#ad-useragent.getOrientation) ⇒ <code>string</code>
    * [.getDimensions()](#ad-useragent.getDimensions) ⇒ <code>object</code>
    * [.report()](#ad-useragent.report)
    * [.getOrientation()](#ad-useragent.getOrientation) ⇒ <code>string</code>
    * [.getDimensions()](#ad-useragent.getDimensions) ⇒ <code>object</code>
    * [.report()](#ad-useragent.report)
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

<a name="ad-useragent.agentString"></a>

### ad-useragent.agentString : <code>string</code>
Current user agent of browser.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.pixelRatio"></a>

### ad-useragent.pixelRatio : <code>string</code>
Pixel ratio of device viewport.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.agentString"></a>

### ad-useragent.agentString : <code>string</code>
Current user agent of browser.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.pixelRatio"></a>

### ad-useragent.pixelRatio : <code>string</code>
Pixel ratio of device viewport.

**Kind**: static property of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOrientation"></a>

### ad-useragent.getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getDimensions"></a>

### ad-useragent.getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | window inner-width |
| height | <code>number</code> | window inner-height |

<a name="ad-useragent.report"></a>

### ad-useragent.report()
Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getOrientation"></a>

### ad-useragent.getOrientation() ⇒ <code>string</code>
Orientaion of device viewport: landscape or portrait.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
<a name="ad-useragent.getDimensions"></a>

### ad-useragent.getDimensions() ⇒ <code>object</code>
The current dimensions of the device's viewport, returns an object with a width & height 
		value that are direct returns of windowWidth and windowHeight.

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | window inner-width |
| height | <code>number</code> | window inner-height |

<a name="ad-useragent.report"></a>

### ad-useragent.report()
Called from within the pipeline, logs out the useragent string & all available pasered data for 
		brand, product, device, OS & version, browser & version, dimensions, orientation, & pixel ratio

**Kind**: static method of [<code>ad-useragent</code>](#ad-useragent)  
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

* * *

BRO

&copy; 1942-2016 Muhammad Ali