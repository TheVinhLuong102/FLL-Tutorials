if (self.CavalryLogger) { CavalryLogger.start_js(["SnqWT"]); }

__d("MessengerTypeaheadUtils",["fbt","ix","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","WorkModeConfig","gkx","immutable","mapObject"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").OrderedMap,j=500,k=100,l=b("WorkModeConfig").is_work_user||b("gkx")("AT62Bmuf0c-b-qsSo41XTNJvFn7VwRrjwsI0onsrzyJ35XDxvhLHgPbXt3hZorqUAYplG7jtkngT9YqyGngqDfMq")?[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]:[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE],m=(a={},a[b("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},a[b("MercuryTypeaheadConstants").FRIEND_TYPE]={header:g._("Contacts")},a[b("MercuryTypeaheadConstants").FB4C_TYPE]={header:g._("Coworkers")},a[b("MercuryTypeaheadConstants").THREAD_TYPE]={header:g._("Group Conversations")},a[b("MercuryTypeaheadConstants").PAGE_TYPE]={header:g._("Businesses")},a[b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:g._("Meeting Rooms")},a[b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:g._("Bots")},a[b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:g._("More People")},a.game={header:g._("Games")},a);c={sortEntries:function(a,c){__p&&__p();var d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[];a.forEach(function(a){__p&&__p();switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:g.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:case b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:i.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:h.push(a);break;case b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:j.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:k.push(a);break;case b("MercuryTypeaheadConstants").SEARCH_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").GAME_TYPE:l.push(a);break}});return d.concat(e,f,g,j,k,i,l,h)},sortEntriesWithoutPages:function(a){__p&&__p();var c=[],d=[],e=[],f=[];a.forEach(function(a){switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return c.concat(d,e,f)},sortEntriesWithoutGroupsOrViewer:function(a,c){__p&&__p();var d=[],e=[],f=[];a.forEach(function(a){if(a.getUniqueID()===c)return;switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return d.concat(e,f)},getEntryOrder:function(a,b){b===void 0&&(b=l);return b},orderEntries:function(a,c){var d=[];this.getEntryOrder(c).filter(function(a){return a!==b("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(b("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(b){return d.push.apply(d,a.filter(function(a){return this.areSectionsEqual(a.getType(),b)}.bind(this)))}.bind(this));return d},buildSingleSection:function(a){return i([["",a]])},buildListSections:function(a,c,d){__p&&__p();if(!a.length)return i();d=this.getEntryOrder(c,d);var e=b("mapObject")(m,function(a){return babelHelpers["extends"]({},a,{entries:[]})});e[b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=e[b("MercuryTypeaheadConstants").PAGE_TYPE];a.forEach(function(a){var b=a.getType();e[b]&&e[b].entries.push(a)});return i(d.filter(function(a){return e[a].entries.length}).map(function(a){return[e[a].header,e[a].entries]}))},buildCustomSection:function(a,b){var c;return c={},c[a]=b,c},areSectionsEqual:function(a,c){return a===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE?c===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||c===b("MercuryTypeaheadConstants").PAGE_TYPE:a===c},scrollEntryIntoView:function(a,c){var d=b("ReactDOM").findDOMNode(c),e=c.getScrollTop(),f=a.offsetTop-e;d=d.offsetHeight-a.offsetHeight;a=Math.abs(d-f);f>=d&&a<=k?c.scrollToPosition(e+f-d,!0,{duration:j}):f<0&&a<=d+k&&c.scrollToPosition(e+f,!0,{duration:j})},getMessageSearchEntry:function(a){return!b("MessengerEnvironment").messengerui||a.length<2?null:new(b("SearchableEntry"))({uniqueID:"__special_search_entry__",title:g._("Search Messages for \"{queryString}\"",[g._param("queryString",a)]),photo:h("86924"),type:b("MercuryTypeaheadConstants").SEARCH_TYPE})}};e.exports=c}),null);
__d("InstantGameContextType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK"})}),null);
__d("MessengerSpinnerReact.bs",["cx","ix","fbt","ImageReact.bs","ReasonReact.bs","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=h("86853"),k=h("86857"),l=h("86854"),m=b("ReasonReact.bs").statelessComponent("MessengerSpinnerReact");function n(a,c,d,e){__p&&__p();var f=a?a[0]:"",g=c?c[0]:"blue",h=d?d[0]:24,n=function(){var a=h===24;if(a){a=g==="blue";if(a)return j;else return k}else return l};return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],function(){return b("ReasonReact.bs").element(0,0,b("ImageReact.bs").make([b("joinClasses")(f,"_3u55 _3qh2")],0,[i._("Loading...")],[!0],[n(0)],[h],0,[h],0,[]))},m[9],m[10],m[11],m[12]]}a=b("ReasonReact.bs").wrapReasonForJs(m,function(a){var b=a.className,c=a.color;a=a.size;return n([b==null?"":b],[c==null?"blue":c],[a==null?24:a],[])});c=32;d=24;f.large_size=c;f.medium_size=d;f.blue_src=j;f.grey_src=k;f.large_blue_src=l;f.component=m;f.make=n;f.jsComponent=a}),null);
__d("MessengerSpinner.react",["MessengerSpinnerReact.bs"],(function(a,b,c,d,e,f){e.exports=b("MessengerSpinnerReact.bs").jsComponent,e.exports.large_size=b("MessengerSpinnerReact.bs").large_size,e.exports.medium_size=b("MessengerSpinnerReact.bs").medium_size}),null);
__d("MercuryThreadTimestampReact.bs",["React","formatDate","ReasonReact.bs","joinClasses","bs_js_primitive"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReasonReact.bs").statelessComponent("MercuryThreadTimestampReact");function h(a,c,d,e,f){var h=e?e[0]:"";return[g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],function(){if(a){var e=a[0],f=new Date(e),g=c?c[0]:f.toLocaleDateString();f=d?d[0]:b("formatDate")(f,"g:ia");return b("React").cloneElement(b("React").createElement("abbr",{className:b("joinClasses")(h,"timestamp"),title:g},f),{"data-utime":e/1e3})}else return b("React").createElement("abbr",undefined)},g[9],g[10],g[11],g[12]]}a=b("ReasonReact.bs").wrapReasonForJs(g,function(a){return h(b("bs_js_primitive").null_undefined_to_opt(a.time),b("bs_js_primitive").null_undefined_to_opt(a.title),b("bs_js_primitive").null_undefined_to_opt(a.text),[a.className],[])});f.component=g;f.make=h;f.jsComponent=a}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALOHA_GAMEHOST:"aloha_gamehost",EMBEDDED_PLAYER:"embedded_player",FB_CANVAS:"fb_canvas",FB_CANVAS_MIGRATION:"fb_canvas_migration",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_GROUP_CHALLENGE_EDGE_STORY:"fb_feed_group_challenge_edge_story",FB_FEED_PLAY_FROM_POST_EDGE_STORY:"fb_feed_play_from_post_edge_story",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_AD:"fb_ad",FB_GROUP_CHALLENGE:"fb_group_challenge",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_MESSENGER_AD:"fb_messenger_ad",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",FB_STORY_ATTRIBUTION_LINK:"fb_story_attribution_link",FB_NON_MESSENGER_WAP_INVITE_NOTIF:"fb_non_messenger_wap_invite_notif",FB_TURN_REMINDER_NOTIF:"fb_turn_reminder_notif",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",GAME_SWITCH:"game_switch",BIG_BLUE_IG_SEARCH:"big_blue_ig_search",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",STREAMER_DASHBOARD:"streamer_dashboard",CUSTOM_SHARE:"in_game_custom_share",M_ME_LINK:"m_me_link",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BBALL_EMOJI:"bball_emoji",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_COMPOSER:"composer",MESSENGER_COMPOSER_SMS:"composer_sms",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_BOT_NULL_STATE:"game_bot_null_state_cta",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_PUSH_NOTIFICATION:"game_push_notification",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_M_SUGGESTION:"game_m_suggestion",MESSENGER_MORE_DRAWER_CHAT_EXTENSION:"more_drawer_chat_extension",MESSENGER_NEW_FRIEND_BUMP:"new_friend_bump",MESSENGER_ONE_LINE_COMPOSER:"one_line_composer",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MESSENGER_SOCCER_EMOJI:"soccer_emoji",MESSENGER_STALE_THREAD_QUICK_REPLY:"stale_thread_quick_reply",MESSENGER_STICKER:"sticker",PRESENCE_ON_MESSENGER:"presence_on_messenger",THREAD_ACTIVITY_BANNER:"thread_activity_banner",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MSITE:"msite",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_HUB_BOOKMARKS:"www_games_hub_bookmarks",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_URL:"www_play_url",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_APP_BOOKMARK:"www_app_bookmark",WWW_PROFILE_HOVERCARD:"www_profile_hovercard",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",FB_GG_SEARCH:"fb_gg_search",FB_GG_URL:"fb_gg_url",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",GAME_CTA:"game_cta",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",THREAD_SETTINGS:"thread_settings",UNKNOWN:"unknown"})}),null);
__d("MessengerTabIndices",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({NEW_MESSAGE_TOKENIZER:9998,COMPOSER_INPUT:9999});e.exports=a}),null);
__d("MessengerComposeViewHeader.react",["cx","fbt","MessengerGraphQLTokenizer.react","MessengerTabIndices","React","clearImmediate","gkx","immutable","joinClasses","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=320;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={tokenizerContext:null,excludeGroups:!1,excludePages:!1,forGroup:!1},this.$1=null,this.$2=function(){this.$1=b("setImmediate")(function(){this.refs.tokenizer&&this.refs.tokenizer.focusInput()}.bind(this))}.bind(this),c}a.prototype.componentDidMount=function(){this.$2(),this.setState({tokenizerContext:this.refs.tokenizerContext})};a.prototype.componentDidUpdate=function(a){this.props.recipients!==a.recipients&&this.props.onResize()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){a.recipients!==this.props.recipients&&(a.recipients.size===0?this.setState({excludeGroups:!1,excludePages:!1,forGroup:!1}):a.isWorkUser?this.setState({excludeGroups:!0,excludePages:!1,forGroup:!0}):this.setState({excludeGroups:!0,excludePages:!0,forGroup:!0}))};a.prototype.componentWillUnmount=function(){this.$1&&b("clearImmediate")(this.$1)};a.prototype.render=function(){var a={enableMessageSearch:!1,hasHoverState:!0,originalEntryIDs:b("immutable").Set(),scrollableViewClassName:"_2y8_",shouldQueryInternalBot:!0,shouldQueryVCEndpoint:!1,width:j};return b("React").createElement("div",{className:b("joinClasses")("_2y8y _5l-3",this.props.className),onClick:this.$2,role:"presentation"},b("React").createElement("div",{className:"_2y8z",ref:b("gkx")("AT6Yilkln5f96nRXioOq13cDPCObGBXyvgYqCAnQUaX65pRAKq-nGqLOprquxXuHzv81m5wzzj4tuAiPBqV-ffQ_qlTKHg2SAFcZxWCm3nT90A")?"tokenizerContext":""},h._("To:")),b("React").createElement("div",{className:"_66s6"},b("React").createElement(b("MessengerGraphQLTokenizer.react"),babelHelpers["extends"]({autoFocus:!0,className:"_2y8-",context:this.state.tokenizerContext,entries:this.props.recipients,excludeGroups:this.state.excludeGroups,excludePages:this.state.excludePages,forGroup:this.state.forGroup,forceHideClearButton:this.props.forceHideClearButton,onAddEntryAttempt:this.props.onAddRecipient,onClear:this.props.onClear,onRemoveEntryAttempt:this.props.onRemoveRecipient,placeholder:h._("Type the name of a person or group"),ref:"tokenizer",tabIndex:b("MessengerTabIndices").NEW_MESSAGE_TOKENIZER,useLayer:!0,viewer:this.props.viewer},a)),b("gkx")("AT6Yilkln5f96nRXioOq13cDPCObGBXyvgYqCAnQUaX65pRAKq-nGqLOprquxXuHzv81m5wzzj4tuAiPBqV-ffQ_qlTKHg2SAFcZxWCm3nT90A")?null:b("React").createElement("div",{ref:"tokenizerContext"})))};a.propTypes={forceHideClearButton:c.bool.isRequired,onAddRecipient:c.func.isRequired,onClear:c.func,onRemoveRecipient:c.func.isRequired,onResize:c.func.isRequired,recipients:c.instanceOf(b("immutable").List).isRequired,viewer:c.string.isRequired,isWorkUser:c.bool.isRequired};a.defaultProps={isWorkUser:!1};e.exports=a}),null);
__d("MessengerPopoverMenu.react",["cx","ContextualDialogArrow","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","PopoverMenu.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.showPopover=function(){this.refs.menu&&this.refs.menu.showPopover()};a.prototype.render=function(){var a=this.props,c=a.children,d=a.className,e=a.isOpen;a=babelHelpers.objectWithoutProperties(a,["children","className","isOpen"]);c=b("React").Children.only(c);return b("React").createElement(b("PopoverMenu.react"),babelHelpers["extends"]({className:b("joinClasses")(d,!a.disableArrowKeyActivation||e?"_150g":""),enableActivationOnEnter:!0,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualLayerUpdateOnScroll"),b("ContextualDialogArrow")]},a,{ref:"menu"}),c)};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(event){var a=b("ReactDOM").findDOMNode(this),c=b("Vector").getEventPosition(event.nativeEvent),d=b("Vector").getElementPosition(a);a=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(a).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(c)?clearTimeout(this.timer):this._onMouseEnter());c=c.x-d.x;d=c/a;b("Locale").isRTL()?c=d>1-this.PAGE_TO_PREV_PERCENTAGE:c=d<this.PAGE_TO_PREV_PERCENTAGE;c?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(event){var a=this.state.currentActiveSection==this.sections.FORWARD,c=event.target;b("Parent").bySelector(c,"._51an")||this.props.onClick&&this.props.onClick(a,event)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("VisualPollVoteListener",["cx","Arbiter"],(function(a,b,c,d,e,f,g){"use strict";var h="visual_poll_vote_";a={EVENT_KEY:h,initCTAListener:function(a,c){b("Arbiter").subscribe(h+a,function(){c.classList.remove("_62z6")})}};e.exports=a}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractDialogFitHeight"));g&&g.prototype;a.prototype.getHeightProperty=function(){"use strict";return"height"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","StickersActions","StickersConfig","StickersDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("QuestionPollType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHOOSE_ONE:"CHOOSE_ONE",CHOOSE_MULTIPLE:"CHOOSE_MULTIPLE",GIF_CHOOSE_ONE:"GIF_CHOOSE_ONE",IMAGE_CHOOSE_ONE:"IMAGE_CHOOSE_ONE",VISUAL_TEXT_CHOOSE_ONE:"VISUAL_TEXT_CHOOSE_ONE",IMAGE_CHOOSE_MULTIPLE:"IMAGE_CHOOSE_MULTIPLE"})}),null);
__d("create-react-class",["create-react-class/factory","react"],(function(a,b,c,d,e,f){"use strict";if(typeof b("react")==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new(b("react").Component)().updater;e.exports=b("create-react-class/factory")(b("react").Component,b("react").isValidElement,a)}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);
__d("getErrorNameFromWebGLErrorCode",[],(function(a,b,c,d,e,f){var g={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};function a(a){return!(a in g)?"UNKNOWN_ERROR":g[a]}e.exports=a}),null);
__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);