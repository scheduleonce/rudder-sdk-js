"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var XMLHttpRequestNode=require("Xmlhttprequest");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function replacer(e,t){return t&&""!==t?t:void 0}function generateUUID(){var e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var s=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?s:3&s|8).toString(16)}))}function getCurrentTimeFormatted(){var e=(new Date).toISOString();return e.split("T")[0]+" "+e.split("T")[1].split("Z")[0].split(".")[0]+"+"+e.split("Z")[0].split(".")[1]}function getJSONTrimmed(e,t,s){var r,n=s.bind(e);(r=new XMLHttpRequestNode).open("GET",t,!0),r.onload=function(){var e=r.status;200==e?n(200,r.responseText):n(e)},r.send()}var MessageType={TRACK:"track",PAGE:"page",IDENTIFY:"identify"},ECommerceEvents={PRODUCTS_SEARCHED:"Products Searched",PRODUCT_LIST_VIEWED:"Product List Viewed",PRODUCT_LIST_FILTERED:"Product List Filtered",PROMOTION_VIEWED:"Promotion Viewed",PROMOTION_CLICKED:"Promotion Clicked",PRODUCT_CLICKED:"Product Clicked",PRODUCT_VIEWED:"Product Viewed",PRODUCT_ADDED:"Product Added",PRODUCT_REMOVED:"Product Removed",CART_VIEWED:"Cart Viewed",CHECKOUT_STARTED:"Checkout Started",CHECKOUT_STEP_VIEWED:"Checkout Step Viewed",CHECKOUT_STEP_COMPLETED:"Checkout Step Completed",PAYMENT_INFO_ENTERED:"Payment Info Entered",ORDER_UPDATED:"Order Updated",ORDER_COMPLETED:"Order Completed",ORDER_REFUNDED:"Order Refunded",ORDER_CANCELLED:"Order Cancelled",COUPON_ENTERED:"Coupon Entered",COUPON_APPLIED:"Coupon Applied",COUPON_DENIED:"Coupon Denied",COUPON_REMOVED:"Coupon Removed",PRODUCT_ADDED_TO_WISHLIST:"Product Added to Wishlist",PRODUCT_REMOVED_FROM_WISHLIST:"Product Removed from Wishlist",WISH_LIST_PRODUCT_ADDED_TO_CART:"Wishlist Product Added to Cart",PRODUCT_SHARED:"Product Shared",CART_SHARED:"Cart Shared",PRODUCT_REVIEWED:"Product Reviewed"},BASE_URL="http://18.222.145.124:5000/dump",CONFIG_URL="https://api.rudderlabs.com",FLUSH_QUEUE_SIZE=30,FLUSH_INTERVAL_DEFAULT=5e3;function ScriptLoader(e,t){var s=document.createElement("script");s.src=t,s.type="text/javascript",s.id=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(s,r)}var HubSpot=function(){function e(t){_classCallCheck(this,e),this.hubId=t}return _createClass(e,[{key:"init",value:function(){ScriptLoader("hubspot-integration","http://js.hs-scripts.com/"+this.hubId+".js")}},{key:"identify",value:function(e){var t=e.message.context.traits,s={};for(var r in t){if(Object.getOwnPropertyDescriptor(t,r)&&t[r])s[r.startsWith("")?r.substring(3,r.length):r]=t[r]}if(s.address){var n=s.address;for(var i in delete s.address,n)if(Object.getOwnPropertyDescriptor(n,i)&&n[i]){var o=i.startsWith("")?i.substring(3,i.length):i;s[o="street"==o?"address":o]=n[i]}}var a=e.message.context.user_properties;for(var u in a){if(Object.getOwnPropertyDescriptor(a,u)&&a[u])s[u.startsWith("")?u.substring(3,u.length):u]=a[u]}void 0!==("undefined"==typeof window?"undefined":_typeof(window))&&(window._hsq=window._hsq||[]).push(["identify",s])}},{key:"track",value:function(e){var t=window._hsq=window._hsq||[],s={};s.id=e.message.event,e.message.properties&&e.message.properties.revenue&&(s.value=e.message.properties.revenue),t.push(["trackEvent",s])}},{key:"page",value:function(e){var t=window._hsq=window._hsq||[];e.message.properties&&e.message.properties.path&&t.push(["setPath",e.message.properties.path]),t.push(["trackPageView"])}},{key:"loaded",value:function(){return!(!window._hsq||window._hsq.push===Array.prototype.push)}}]),e}(),index=HubSpot,integrations={HS:index},RudderApp=function e(){_classCallCheck(this,e),this.build="1.0.0",this.name="RudderLabs JavaScript SDK",this.namespace="com.rudderlabs.javascript",this.version="1.0.0"},RudderLibraryInfo=function e(){_classCallCheck(this,e),this.name="RudderLabs JavaScript SDK",this.version="1.0.0"},RudderOSInfo=function e(){_classCallCheck(this,e),this.name="",this.version=""},RudderScreenInfo=function e(){_classCallCheck(this,e),this.density=0,this.width=0,this.height=0},RudderContext=function e(){_classCallCheck(this,e),this.app=new RudderApp,this.traits=null,this.library=new RudderLibraryInfo;var t=new RudderOSInfo;t.version="";var s=new RudderScreenInfo;s.width=0,s.height=0,s.density=0,t.version="",t.name="",this.user_agent=null,this.locale=null,this.screen=s,this.device=null,this.network=null},RudderMessage=function(){function e(){_classCallCheck(this,e),this.channel="web",this.context=new RudderContext,this.type=null,this.action=null,this.message_id=generateUUID().toString(),this.timestamp=(new Date).getTime(),this.anonymous_id=generateUUID().toString(),this.user_id=null,this.event=null,this.properties={},this.integrations={},this.integrations.All=!0}return _createClass(e,[{key:"getProperty",value:function(e){return this.properties[e]}},{key:"addProperty",value:function(e,t){this.properties[e]=t}},{key:"validateFor",value:function(e){if(!this.properties)throw new Error("Key properties is required");switch(e){case MessageType.TRACK:if(!this.event)throw new Error("Key event is required for track event");if(this.event in Object.values(ECommerceEvents))switch(this.event){case ECommerceEvents.CHECKOUT_STEP_VIEWED:case ECommerceEvents.CHECKOUT_STEP_COMPLETED:case ECommerceEvents.PAYMENT_INFO_ENTERED:this.checkForKey("checkout_id"),this.checkForKey("step");break;case ECommerceEvents.PROMOTION_VIEWED:case ECommerceEvents.PROMOTION_CLICKED:this.checkForKey("promotion_id");break;case ECommerceEvents.ORDER_REFUNDED:this.checkForKey("order_id")}else this.properties.category||(this.properties.category=this.event);break;case MessageType.PAGE:break;case MessageType.SCREEN:if(!this.properties.name)throw new Error("Key 'name' is required in properties")}}},{key:"checkForKey",value:function(e){if(!this.properties[e])throw new Error("Key '"+e+"' is required in properties")}}]),e}(),RudderElement=function(){function e(){_classCallCheck(this,e),this.message=new RudderMessage}return _createClass(e,[{key:"setType",value:function(e){this.message.type=e}},{key:"setProperty",value:function(e){this.message.properties=e}},{key:"setUserProperty",value:function(e){this.message.user_properties=e}},{key:"setUserId",value:function(e){this.message.user_id=e}},{key:"setEventName",value:function(e){this.message.event=e}},{key:"updateTraits",value:function(e){this.message.context.traits=e}},{key:"getElementContent",value:function(){return this.message}}]),e}(),RudderElementBuilder=function(){function e(){_classCallCheck(this,e),this.rudderProperty=null,this.rudderUserProperty=null,this.event=null,this.userId=null,this.channel=null,this.type=null}return _createClass(e,[{key:"setProperty",value:function(e){return this.rudderProperty=e,this}},{key:"setPropertyBuilder",value:function(e){return this.rudderProperty=e.build(),this}},{key:"setUserProperty",value:function(e){return this.rudderUserProperty=e,this}},{key:"setUserPropertyBuilder",value:function(e){return this.rudderUserProperty=e.build(),this}},{key:"setEvent",value:function(e){return this.event=e,this}},{key:"setUserId",value:function(e){return this.userId=e,this}},{key:"setChannel",value:function(e){return this.channel=e,this}},{key:"setType",value:function(e){return this.type=e,this}},{key:"build",value:function(){var e=new RudderElement;return e.setUserId(this.userId),e.setType(this.type),e.setEventName(this.event),e.setProperty(this.rudderProperty),e.setUserProperty(this.rudderUserProperty),e}}]),e}(),RudderTraits=function(){function e(){_classCallCheck(this,e),this.address=null,this.age=null,this.birthday=null,this.company=null,this.createdat=null,this.description=null,this.email=null,this.firstname=null,this.gender=null,this.id=null,this.lastname=null,this.name=null,this.phone=null,this.title=null,this.username=null}return _createClass(e,[{key:"setAddress",value:function(e){return this.address=e,this}},{key:"setAge",value:function(e){return this.age=e,this}},{key:"setBirthday",value:function(e){return this.birthday=e,this}},{key:"setCompany",value:function(e){return this.company=e,this}},{key:"setCreatedAt",value:function(e){return this.createdat=e,this}},{key:"setDescription",value:function(e){return this.description=e,this}},{key:"setEmail",value:function(e){return this.email=e,this}},{key:"setFirstname",value:function(e){return this.firstname=e,this}},{key:"setId",value:function(e){return this.id=e,this}},{key:"setLastname",value:function(e){return this.lastname=e,this}},{key:"setName",value:function(e){return this.name=e,this}},{key:"setPhone",value:function(e){return this.phone=e,this}},{key:"setTitle",value:function(e){return this.title=e,this}},{key:"setUsername",value:function(e){return this.username=e,this}}]),e}(),defaults={user_storage_key:"rl_user_id",user_storage_trait:"rl_trait"},Storage=function(){function e(){_classCallCheck(this,e),this.storage=window.localStorage}return _createClass(e,[{key:"setItem",value:function(e,t){var s="";"string"==typeof t&&(s=t),"object"==_typeof(t)&&(s=JSON.stringify(t)),this.storage.setItem(e,s)}},{key:"setUserId",value:function(e){"string"==typeof e&&this.storage.setItem(defaults.user_storage_key,e)}},{key:"setUserTraits",value:function(e){"object"==_typeof(e)&&this.storage.setItem(defaults.user_storage_trait,JSON.stringify(e))}},{key:"getItem",value:function(e){var t=this.storage.getItem(e);return JSON.parse(t)}},{key:"getUserId",value:function(){return this.storage.getItem(defaults.user_storage_key)}},{key:"getUserTraits",value:function(){return JSON.parse(this.storage.getItem(defaults.user_storage_trait))}},{key:"removeItem",value:function(e){this.storage.removeItem(e)}},{key:"clear",value:function(){this.storage.removeItem(defaults.user_storage_key),this.storage.removeItem(defaults.user_storage_trait)}}]),e}(),Storage$1=Storage,RudderPayload=function e(){_classCallCheck(this,e),this.batch=null,this.write_key=null},EventRepository=function(){function e(){_classCallCheck(this,e),this.eventsBuffer=[],this.url=BASE_URL,this.state="READY",setInterval(this.preaparePayloadAndFlush,FLUSH_INTERVAL_DEFAULT,this)}return _createClass(e,[{key:"preaparePayloadAndFlush",value:function(e){if(0!=e.eventsBuffer.length&&"PROCESSING"!==e.state){var t,s=e.eventsBuffer.slice(0,FLUSH_QUEUE_SIZE),r=new RudderPayload;r.batch=s,r.write_key=e.write_key,r.sent_at=getCurrentTimeFormatted(),(t=new XMLHttpRequestNode).open("POST",e.url,!0),t.setRequestHeader("Content-Type","application/json"),t.onreadystatechange=function(){4===t.readyState&&200===t.status?e.eventsBuffer=e.eventsBuffer.slice(FLUSH_QUEUE_SIZE):4===t.readyState&&t.status,e.state="READY"},t.send(JSON.stringify(r,replacer)),e.state="PROCESSING"}}},{key:"flush",value:function(e){this.eventsBuffer.push(e.getElementContent())}}]),e}(),eventRepository=new EventRepository,RudderProperty=function(){function e(){_classCallCheck(this,e),this.propertyMap={}}return _createClass(e,[{key:"getPropertyMap",value:function(){return this.propertyMap}},{key:"getProperty",value:function(e){return this.propertyMap[e]}},{key:"setProperty",value:function(e,t){this.propertyMap[e]=t}},{key:"setPropertyMap",value:function(e){var t=this;this.propertyMap?Object.keys(e).forEach((function(s){t.propertyMap[s]=e[s]})):this.propertyMap=e}}]),e}(),PromotionEvent=function(){function e(){_classCallCheck(this,e),this.promotion=null}return _createClass(e,[{key:"setPromotion",value:function(e){return this.promotion=e,this}},{key:"build",value:function(){var e=new RudderProperty;return e.setPropertyMap(this.promotion),e}}]),e}(),PromotionViewedEvent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))}return _inherits(t,PromotionEvent),_createClass(t,[{key:"event",value:function(){return ECommerceEvents.PROMOTION_VIEWED}}]),t}(),ECommercePromotion=function(){function e(){_classCallCheck(this,e),this.promotion_id="",this.creative="",this.name="",this.position=0}return _createClass(e,[{key:"setPromotionId",value:function(e){return this.promotion_id=e,this}},{key:"setCreative",value:function(e){return this.creative=e,this}},{key:"setName",value:function(e){return this.name=e,this}},{key:"setPosition",value:function(e){return this.position=e,this}}]),e}();function flush(e){this.eventRepository||(this.eventRepository=eventRepository),this.eventRepository.flush(e)}var Analytics=function(){function e(){_classCallCheck(this,e),this.ready=!1,this.writeKey="",this.eventsBuffer=[],this.clientIntegrations=[],this.configArray=[],this.clientIntegrationObjects=void 0,this.toBeProcessedArray=[],this.toBeProcessedByIntegrationArray=[],this.storage=new Storage$1,this.userId=null!=this.storage.getUserId()?this.storage.getUserId():generateUUID(),this.userTraits=null!=this.storage.getUserTraits()?this.storage.getUserTraits():{},this.storage.setUserId(this.userId),this.eventRepository=eventRepository}return _createClass(e,[{key:"processResponse",value:function(e,t){(t=JSON.parse(t)).source.destinations.forEach((function(e,t){e.enabled&&e.config.useNativeSDK&&(this.clientIntegrations.push(e.destinationDefinition.name),this.configArray.push(e.config))}),this),this.init(this.clientIntegrations,this.configArray)}},{key:"init",value:function(e,t){var s=this;if(this.clientIntegrationObjects=[],e&&0!=e.length){e.forEach((function(e){var r=integrations[e];if("HS"===e){t[0].hubId;"6405167";var n=new r("6405167");n.init(),s.clientIntegrationObjects.push(n)}}));for(var r=function(e){s.toBeProcessedByIntegrationArray.forEach((function(t){var r,n=t[0];t.shift(),(r=s.clientIntegrationObjects[e])[n].apply(r,_toConsumableArray(t))}))},n=0;n<this.clientIntegrationObjects.length;n++)r(n);this.toBeProcessedByIntegrationArray=[]}else this.toBeProcessedByIntegrationArray=[]}},{key:"page",value:function(e,t,s,r,n){"function"==typeof r&&(n=r,r=null),"function"==typeof s&&(n=s,r=s=null),"function"==typeof t&&(n=t,r=s=t=null),"object"===_typeof(e)&&(r=t,s=e,t=e=null),"object"===_typeof(t)&&(r=s,s=t,t=null),"string"==typeof e&&"string"!=typeof t&&(t=e,e=null),this.processPage(e,t,s,r,n)}},{key:"track",value:function(e,t,s,r){"function"==typeof s&&(r=s,s=null),"function"==typeof t&&(r=t,s=null,t=null),this.processTrack(e,t,s,r)}},{key:"identify",value:function(e,t,s,r){"function"==typeof s&&(r=s,s=null),"function"==typeof t&&(r=t,s=null,t=null),"object"==_typeof(e)&&(s=t,t=e,e=this.userId),this.processIdentify(e,t,s,r)}},{key:"processPage",value:function(e,t,s,r,n){this.userId||(this.userId=generateUUID(),this.storage.setUserId(this.userId));var i=(new RudderElementBuilder).setType("page").build();t&&(i.message.name=t),e&&(s||(s={}),s.category=e),s&&(i.message.properties=s),i.message.context.traits=this.userTraits,i.message.anonymous_id=i.message.user_id=i.message.context.traits.anonymous_id=this.userId,this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){e.page(i)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["page",i]),flush.call(this,i),n&&n()}},{key:"processTrack",value:function(e,t,s,r){this.userId||(this.userId=generateUUID(),this.storage.setUserId(this.userId));var n=(new RudderElementBuilder).setType("track").build();e&&n.setEventName(e),t&&n.setProperty(t),n.message.context.traits=this.userTraits,n.message.anonymous_id=n.message.user_id=n.message.context.traits.anonymous_id=this.userId,this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){e.track(n)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["track",n]),flush.call(this,n),r&&r()}},{key:"processIdentify",value:function(e,t,s,r){this.userId=e,this.storage.setUserId(this.userId);var n=(new RudderElementBuilder).setType("identify").build();new RudderTraits;t&&(this.userTraits=t,this.storage.setUserTraits(this.userTraits)),n.message.context.traits=this.userTraits,n.message.anonymous_id=n.message.user_id=n.message.context.traits.anonymous_id=this.userId,this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){e.identify(n)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["identify",n]),flush.call(this,n),r&&r()}},{key:"identifyUser",value:function(e,t){this.userId=userId,this.storage.setUserId(this.userId),e&&e.message&&e.message.context&&e.message.context.traits&&(this.userTraits=traits,this.storage.setUserTraits(this.userTraits)),e.message.context.traits=this.userTraits,e.message.anonymous_id=e.message.user_id=e.message.context.traits.anonymous_id=this.userId,this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(t){t.identify(e)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["identify",e]),flush.call(this,e),t&&t()}},{key:"trackPage",value:function(e,t){this.userId||(this.userId=generateUUID(),this.storage.setUserId(this.userId)),e.message.context.traits=this.userTraits,e.message.anonymous_id=e.message.user_id=e.message.context.traits.anonymous_id=this.userId,this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(t){t.page(e)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["page",e]),flush.call(this,e),t&&t()}},{key:"trackEvent",value:function(e,t){this.userId||(this.userId=generateUUID(),this.storage.setUserId(this.userId)),e.message.context.traits=this.userTraits,e.message.anonymous_id=e.message.user_id=e.message.context.traits.anonymous_id=this.userId,this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(t){t.track(e)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["track",e]),flush.call(this,e),t&&t()}},{key:"reset",value:function(){this.userId="",this.userTraits={},this.storage.clear()}},{key:"load",value:function(e){this.writeKey=e,getJSONTrimmed(this,CONFIG_URL+"/source-config?write_key="+e,this.processResponse)}}]),e}(),instance=new Analytics,eventsPushedAlready=!!window.analytics&&window.analytics.push==Array.prototype.push,methodArg=window.analytics?window.analytics[0]:[];if(methodArg.length>0&&"load"==methodArg[0]&&instance[methodArg[0]](methodArg[1]),eventsPushedAlready){for(var i=1;i<window.analytics.length;i++)instance.toBeProcessedArray.push(window.analytics[i]);for(var _i2=0;_i2<instance.toBeProcessedArray.length;_i2++){var event=_toConsumableArray(instance.toBeProcessedArray[_i2]),method=event[0];event.shift(),instance[method].apply(instance,_toConsumableArray(event))}instance.toBeProcessedArray=[]}var identify=instance.identify.bind(instance),page=instance.page.bind(instance),track=instance.track.bind(instance),trackEvent=instance.trackEvent.bind(instance),trackPage=instance.trackPage.bind(instance),identifyUser=instance.identifyUser.bind(instance),reset=instance.reset.bind(instance),load=instance.load.bind(instance);exports.ECommerceEvents=ECommerceEvents,exports.ECommercePromotion=ECommercePromotion,exports.PromotionViewedEvent=PromotionViewedEvent,exports.RudderElementBuilder=RudderElementBuilder,exports.identify=identify,exports.identifyUser=identifyUser,exports.load=load,exports.page=page,exports.reset=reset,exports.track=track,exports.trackEvent=trackEvent,exports.trackPage=trackPage;
