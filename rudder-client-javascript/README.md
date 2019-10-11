# Rudder JS-SDK

This repo contains **builds** and **source-code** to integrate with your web-app and node applications. Use this to send analytics data from your applications to ever evolving destinations such as (HubSpot, Google Analytics and many more...)

# How to get started

Under the **analytics** folder, navigate to **dist** where you can find the minified and unminified versions of the sdk. There are two builds for working with browser based applications and node applications, mainly **browser.js** and **node.js**.

Few sample usage of the sdk can be found under **tests** directory for vanilla html, Angular, and node integrations. 

## Code Structure

- The whole code development is under the **analytics** folder. 
- **analytics.js** handles the core functionality for tapping your **identify**, **page** and **track** calls.
- **integrations** contains the native loading and invocation of different destinations. 
- **HubSpot** and **Google Analytics** integrations have been in development recently. 

***We try to support both browser and node versions of these integrations. It may so happen that integrations doesn't have a node sdk, in that case routing data through our **data-plane** is one of the options to send data to these destinations*
- The **dist** folder contains the minified and unminified versions of the sdk.
- **tests** contains various flavours for how to use the sdk in applications
- We use *rollup* and *babel* for transpiling and generating the specific builds.

## Contribute

One can start adding integrations like *Mixpanel*, *Facebook ads* and others for sending data through their *js* and *node* sdks.

For building the sdk,

 - Look for run scripts in the *package.json* file for getting browser and node specific builds.
 - For adding or removing integrations, modify the *imports* in *index.js* under **integrations** folder.