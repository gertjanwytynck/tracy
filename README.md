# Tracy

Track & Trace component for Dropon planner app.

## Table of contents

* [Getting Started](#gettings-started)
* [Properties](#properties)
* [Languages](#languages)
* [Copyright and license](#copyright-and-license)

## Getting Started

This plugin requires [jQuery](http://jquery.com/download/) ```>=1.11.3```

Include tracy.min.js / tracy.min.css and jQuery

```
<link rel="stylesheet" href="tracy.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="tracy.min.js"></script>
```

Add the html component in your preferred file.

```
<div id="tracy-container" data-url="url" data-phone="phone-number"></div>
```

## Properties

### Required
- ```data-url="url"``` This is the url to access Dropon.
- ```data-phone="phone-number"``` Here do you need to place your customer help phone number.

### Optional
- ```data-background="url-to-image"``` This will set a background image.
- ```data-logo="url-to-logo"``` This will add a logo.
- ```data-language="language"``` This will set a language. When empty, it will take the client browsers language.

## Languages
- ```English```
- ```French```
- ```Dutch```

## Copyright and license

Code and documentation copyright 2016 Bubble Post.
