webpackJsonp([2,8],{242:function(t,s,e){var i=e(0)(e(249),e(255),null,null);t.exports=i.exports},249:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{tab:0,displayList:[]}},activated:function(){this.$store.commit("SET_SHOWTABBAR",!0),this.onFetchMessage()},computed:{minHeight:function(){return document.body.clientHeight>=400&&document.body.clientHeight<=736?document.body.clientHeight:window.screen.height},isShowTip:function(){return!(this.displayList&&this.displayList.length)}},methods:{onSwitchTab:function(t){this.tab=t,this.onFetchMessage()},onFetchMessage:function(){var t=this;this.checkLogin()&&this.$axios.get("/messages",{params:{accesstoken:this.$store.getters.accessToken}}).then(function(s){console.log(s),t.displayList=0===t.tab?s.data.data.hasnot_read_messages:s.data.data.has_read_messages}).catch(function(s){console.log(s),t.$vux.toast.show({text:"获取消息失败"})})},onClickMessage:function(t){var s=this;this.$axios.post("/message/mark_all",{accesstoken:this.$store.getters.accessToken}).then(function(t){console.log(t)}).catch(function(t){console.log(t),s.$vux.toast.show({text:"标记全部已读失败"})}),this.$router.push({name:"detail",query:{id:t}})},checkLogin:function(){var t=this.$store.getters.accessToken;return!!t||(this.$vux.toast.show({text:"请先登录"}),this.$router.replace("/login"),!1)}}}},255:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message-box",style:{minHeight:t.minHeight-50+"px"}},[e("tab",[e("tab-item",{attrs:{selected:""},nativeOn:{click:function(s){t.onSwitchTab(0)}}},[t._v("未读消息")]),t._v(" "),e("tab-item",{nativeOn:{click:function(s){t.onSwitchTab(1)}}},[t._v("已读消息")])],1),t._v(" "),t._l(t.displayList,function(s){return e("div",{staticClass:"message-li",on:{click:function(e){t.onClickMessage(s.topic.id)}}},[e("div",{staticClass:"message-head"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.author.avatar_url,alt:"headImgUrl"}})]),t._v(" "),e("div",{staticClass:"message-head-right"},[e("div",{staticClass:"message-name"},[t._v("\n          "+t._s(s.author.loginname)+"\n          "),e("span",[t._v(t._s(t._f("timeAgo")(s.create_at)))])]),t._v(" "),e("div",{staticClass:"message-intro"},[t._v("\n          回复了您的话题\n        ")])])]),t._v(" "),e("div",{staticClass:"message-content",domProps:{innerHTML:t._s(s.reply.content)}}),t._v(" "),e("div",{staticClass:"message-topic"},[t._v("\n      话题："+t._s(s.topic.title)+"\n    ")])])}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTip,expression:"isShowTip"}],staticClass:"message-tip",style:{minHeight:t.minHeight-100+"px"}},[t._m(0),t._v(" "),e("div",{staticClass:"message-text"},[t._v("\n      暂无消息\n    ")])])],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"message-icon"},[e("i",{staticClass:"icon-comment-alt"})])}]}}});
//# sourceMappingURL=2.f3df060b39de9988368f.js.map