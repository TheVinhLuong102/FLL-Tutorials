if (self.CavalryLogger) { CavalryLogger.start_js(["aQ9ZV"]); }

__d("PagesMessagingSettingsInputRow.react",["ix","cx","fbt","Image.react","LeftFillRightFitLayout.react","React","XUIButton.react","XUITextInput.react","prop-types","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PureComponent;d=babelHelpers.inherits(a,c);j=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.$1=function(a){a&&a.target&&(a.target.value||a.target.value==="")&&this.props.onInput(String(a.target.value))}.bind(this),b}a.prototype.render=function(){var a=null,c=null;this.props.canDelete&&(a=b("React").createElement(b("XUIButton.react"),{className:"_66k6",image:b("React").createElement(b("Image.react"),{src:g("130092")}),label:i._("Delete"),labelIsHidden:!0,onClick:this.props.onDelete,size:"medium"}));this.props.showCounter&&(c=b("React").createElement("div",{className:"_66k4"},this.props.value.length+"/"+this.props.charLimit));return b("React").createElement(b("LeftFillRightFitLayout.react"),{fitColumnClassName:this.props.canDelete?"_66k5":""},b("React").createElement("div",null,b("React").createElement(b("LeftFillRightFitLayout.react"),{fitColumnClassName:"_66k3"},b("React").createElement("div",{className:"_66k0"},this.props.label),b("React").createElement("div",null,c)),b("React").createElement("div",{className:"_66k7"},b("React").createElement(b("XUITextInput.react"),{className:"_66k8",maxLength:this.props.charLimit,onInput:this.$1,placeholder:this.props.placeholder,type:"text",value:this.props.value}))),b("React").createElement("div",null,a))};a.propTypes={canDelete:b("prop-types").bool.isRequired,charLimit:b("prop-types").number.isRequired,label:b("prop-types").node.isRequired,onDelete:b("prop-types").func.isRequired,onInput:b("prop-types").func.isRequired,placeholder:b("prop-types").node,showCounter:b("prop-types").bool,value:b("prop-types").string.isRequired};e.exports=a}),null);
__d("PagesMessagingSettingsIcebreakerFreeTextComposer.react",["cx","fbt","Link.react","PagesMessagingSettingsInputRow.react","PagesMessagingSettingsSaveCancelView.react","React","immutable","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j;c=b("React").PureComponent;var k=60;i=babelHelpers.inherits(a,c);i&&i.prototype;a.prototype.render=function(){var a=this.props.questions.map(function(a,c){return b("React").createElement("div",{className:"_66lx",key:"free_text_row"+c},b("React").createElement(l,{canDelete:c>=this.props.minQuestions,deleteRow:this.props.onDeleteQuestion,index:c,updateValue:this.props.onUpdateQuestion,value:a}))}.bind(this));return b("React").createElement("div",{className:"_3zun _3rea"},b("React").createElement("div",{className:"_3yvt"},h._("People who send you a message organically or from an ad will see 2 to 4 questions, depending on how many you write. If you add more than 4, the questions shown will be selected randomly.")),b("React").createElement("div",{className:"_666o"},b("React").createElement("div",{className:"_30pk"},a),b("React").createElement(b("Link.react"),{className:"_30pn"+(this.props.disableAddRow?" _4dt5":""),disabled:this.props.disableAddRow,href:"#",onClick:this.props.onAddRow},h._("Add a Question"))),b("React").createElement(b("PagesMessagingSettingsSaveCancelView.react"),{className:"_666m",onCancel:this.props.onCancel,onSave:this.props.onSave,shouldDisableSave:this.props.disableSave}))};function a(){i.apply(this,arguments)}a.propTypes={disableAddRow:b("prop-types").bool,disableSave:b("prop-types").bool.isRequired,minQuestions:b("prop-types").number.isRequired,onAddRow:b("prop-types").func,onDeleteQuestion:b("prop-types").func,onCancel:b("prop-types").func,onSave:b("prop-types").func,questions:b("prop-types").instanceOf(b("immutable").List),onUpdateQuestion:b("prop-types").func};d=babelHelpers.inherits(l,c);j=d&&d.prototype;function l(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.$1=function(a){this.props.updateValue(this.props.index,a)}.bind(this),this.$2=function(){this.props.deleteRow(this.props.index)}.bind(this),b}l.prototype.render=function(){return b("React").createElement(b("PagesMessagingSettingsInputRow.react"),{canDelete:this.props.canDelete,charLimit:k,label:h._({"*":"Question #{current question number}"},[h._param("current question number",this.props.index+1,[0])]),onDelete:this.$2,onInput:this.$1,placeholder:h._("Type your question..."),showCounter:!0,value:this.props.value})};l.propTypes={canDelete:b("prop-types").bool.isRequired,deleteRow:b("prop-types").func.isRequired,index:b("prop-types").number.isRequired,updateValue:b("prop-types").func.isRequired,value:b("prop-types").string.isRequired};e.exports=a}),null);
__d("PresmaMessagingIcebreakerFreeTextSection.react",["cx","fbt","AsyncRequest","PageContextualCtaNUX.react","PagesMessagingSettingsIcebreakerDemo.react","PagesMessagingSettingsIcebreakerFreeTextComposer.react","PresmaMessagingToggleWithEditButtonColumn.react","PresmaSettingFrameworkUtils","PresmaSettingsTwoColumnLayout.react","Random","React","immutable","prop-types","XBasicFBNuxDismissController","XBasicFBNuxViewController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PureComponent;var j=4,k=100,l=2,m=h._("Turn on frequently asked questions so people can easily start a conversation with you in Messenger."),n=h._("Customize the questions that people might want to ask you."),o=h._("OK");d=babelHelpers.inherits(a,c);i=d&&d.prototype;function a(a){__p&&__p();i.constructor.call(this,a),this.$2=function(a){b("PresmaSettingFrameworkUtils").updateGenericSettingValue({presmaSettingsKey:this.props.presmaSettingsKey,sectionKey:this.props.sectionKey,fieldKey:"isEnabled",pageID:this.props.pageID},a),this.setState(function(b){return{isFeatureEnabled:a,isEditViewVisible:a?b.isEditViewVisible:!1}})}.bind(this),this.$3=function(){this.setState({isEditViewVisible:!0,isEditing:!0,isFeatureEnabled:!0})}.bind(this),this.$4=function(){this.setState({demoQuestionIndices:this.$1(this.savedQuestions),isEditViewVisible:!1,isEditing:!1,isFeatureEnabled:!0,questions:this.savedQuestions})}.bind(this),this.$5=function(){var a=this.state.questions.map(function(a){return a.trim()}).filter(function(a){return a!==""});if(a.size<l)return;b("PresmaSettingFrameworkUtils").updateGenericSettingValue({presmaSettingsKey:this.props.presmaSettingsKey,sectionKey:this.props.sectionKey,fieldKey:"questions",pageID:this.props.pageID},a);this.savedQuestions=a;this.setState({demoQuestionIndices:this.$1(a),isEditViewVisible:!1,isEditing:!1,isFeatureEnabled:!0,questions:a})}.bind(this),this.$6=function(){this.setState(function(a){return a.questions.size>=k?{}:{isEditViewVisible:!0,isEditing:!0,isFeatureEnabled:!0,questions:a.questions.push("")}})}.bind(this),this.$7=function(a){this.setState(function(b){b=b.questions["delete"](a);return{demoQuestionIndices:this.$1(b),isEditViewVisible:!0,isEditing:!0,isFeatureEnabled:!0,questions:b}}.bind(this))}.bind(this),this.$8=function(a,b){this.setState(function(c){var d=c.questions.set(a,b),e=c.demoQuestionIndices;(c.questions.get(a).trim()===""||b==="")&&(e=this.$1(d));return{demoQuestionIndices:e,isEditViewVisible:!0,isEditing:!0,isFeatureEnabled:!0,questions:d}}.bind(this))}.bind(this),this.$10=function(a){a||this.setState({showNux:!1})}.bind(this),this.$11=function(){this.setState(function(a){this.setState({showNux:!1})}.bind(this)),new(b("AsyncRequest"))().setURI(b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",this.props.nuxID).getURI()).send()}.bind(this),this.savedQuestions=b("immutable").List(a.questions),this.state={demoQuestionIndices:this.$1(b("immutable").List(a.questions)),isEditing:!1,isEditViewVisible:!1,isFeatureEnabled:a.isEnabled,questions:b("immutable").List(a.questions),showNux:!1}}a.prototype.componentDidMount=function(){this.setState({showNux:this.props.showNux}),this.props.showNux&&new(b("AsyncRequest"))().setURI(b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",this.props.nuxID).getURI()).send()};a.prototype.$1=function(a){__p&&__p();var c=[];for(var d=0;d<a.size;d++)a.get(d).trim()!==""&&c.push(d);d=Math.min(j,c.length);a=null;var e;-1;for(var f=0;f<d;f++)a=c[f],e=Math.floor((c.length-f)*b("Random").random())+f,c[f]=c[e],c[e]=a;return b("immutable").List(c.slice(0,d))};a.prototype.$9=function(){return b("immutable").List(this.state.demoQuestionIndices.map(function(a){return this.state.questions.get(a)}.bind(this)))};a.prototype.render=function(){var a=b("React").createElement("div",null,b("React").createElement(b("PresmaMessagingToggleWithEditButtonColumn.react"),{hideActionButton:this.state.isEditing||!this.state.isFeatureEnabled,isToggleOn:this.state.isFeatureEnabled,onToggle:this.$2,onActionButtonClick:this.$3,sectionKey:this.props.sectionKey,ref:"secondary_column_ref"}),b("React").createElement(b("PageContextualCtaNUX.react"),{alignment:"right",body:this.props.isEnabled?n:m,contextRef:function(){return this.refs.secondary_column_ref}.bind(this),maxWidth:"300px",onRightButtonClick:this.$11,onToggle:this.$10,position:this.props.isEnabled?"below":"above",rightButtonLabel:o,shown:this.state.showNux})),c=b("React").createElement("div",{className:this.state.isFeatureEnabled?"":"hidden_elem"},b("React").createElement("div",{className:"_5gio _3-8y"},b("React").createElement(b("PagesMessagingSettingsIcebreakerDemo.react"),{pageID:this.props.pageID,questions:this.$9(),shouldPauseAnimation:!this.state.isEditViewVisible,viewerID:this.props.viewerID}),b("React").createElement(b("PagesMessagingSettingsIcebreakerFreeTextComposer.react"),{disableAddRow:this.state.questions.size>=k,disableSave:this.state.demoQuestionIndices.size<l,minQuestions:l,onAddRow:this.$6,onDeleteQuestion:this.$7,onCancel:this.$4,onSave:this.$5,questions:this.state.questions,onUpdateQuestion:this.$8})));return b("React").createElement(b("PresmaSettingsTwoColumnLayout.react"),babelHelpers["extends"]({},this.props,{editingView:c,isEditing:this.state.isEditing,secondaryColumnComponent:a,subtitle:this.props.subtitle,title:this.props.title,useFullWidthReadonlyView:!1}))};a.propTypes={isEnabled:b("prop-types").bool.isRequired,nuxID:b("prop-types").number.isRequired,pageID:b("prop-types").string.isRequired,questions:b("prop-types").arrayOf(b("prop-types").string).isRequired,sectionKey:b("prop-types").string.isRequired,subtitle:b("prop-types").string.isRequired,title:b("prop-types").node.isRequired,viewerID:b("prop-types").string.isRequired};e.exports=a}),null);