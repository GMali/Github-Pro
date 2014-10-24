# Github Pro

A chrome extension for Pro Github users

Inspired by: https://github.com/Timothee/CommitFilter

## Getting Started

- Make sure that you have [Node](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed.
- [Google Chrome Extension Docs](https://developer.chrome.com/extensions)
- [Yo Chrome Extension Docs](https://github.com/yeoman/generator-chrome-extension)

## Test Chrome Extension

To test, go to: `chrome://extensions`, enable Developer mode and load app as an unpacked extension.

## Debug

LiveReload is supported! This means that any change in the codebase (on save) will automatically reload the extension in the browser. You just have to refresh the page that you are testing out.

Example:
```bash
grunt debug
```

![](http://recordit.co/H5y0XHYwgf.gif)
*Source: https://github.com/yeoman/generator-chrome-extension*

## Build & Package

By default, generators compress the file that was created by building a js/css/html/resource file. You can distribute the compressed file using the Chrome Developer Dashboard to publish to the Chrome Web Store.

Run this command to build your Chrome Extension project.

Example:
```bash
grunt build
```

## Contribution

Create an issue, PR, or Wiki pages. Standard Github stuff.

Also checkout the [Wiki page](https://github.com/GMali/Github-Pro/wiki) for additional docs.