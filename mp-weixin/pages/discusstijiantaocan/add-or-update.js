(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/discusstijiantaocan/add-or-update"],{4640:function(e,t,n){"use strict";(function(e){n("0875");r(n("66fd"));var t=r(n("f9de"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},4889:function(e,t,n){},6184:function(e,t,n){"use strict";n.r(t);var r=n("c830"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},6770:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"6e14":function(e,t,n){"use strict";var r=n("4889"),a=n.n(r);a.a},c830:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("a98e"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{ruleForm:{refid:"",userid:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:o},computed:{},onLoad:function(t){var n=this;return i(r.default.mark((function a(){var u,i,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,n.$api.session(u);case 3:if(i=a.sent,n.user=i.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("discusstijiantaocan",n.ruleForm.id);case 11:i=a.sent,n.ruleForm=i.data;case 13:if(!t.cross){a.next=40;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 16:if((a.t1=a.t0()).done){a.next=40;break}if(c=a.t1.value,"refid"!=c){a.next=22;break}return n.ruleForm.refid=o[c],n.ro.refid=!0,a.abrupt("continue",16);case 22:if("userid"!=c){a.next=26;break}return n.ruleForm.userid=o[c],n.ro.userid=!0,a.abrupt("continue",16);case 26:if("nickname"!=c){a.next=30;break}return n.ruleForm.nickname=o[c],n.ro.nickname=!0,a.abrupt("continue",16);case 30:if("content"!=c){a.next=34;break}return n.ruleForm.content=o[c],n.ro.content=!0,a.abrupt("continue",16);case 34:if("reply"!=c){a.next=38;break}return n.ruleForm.reply=o[c],n.ro.reply=!0,a.abrupt("continue",16);case 38:a.next=16;break;case 40:n.styleChange();case 41:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.refid){t.next=3;break}return e.$utils.msg("关联表id不能为空"),t.abrupt("return");case 3:if(e.ruleForm.userid){t.next=6;break}return e.$utils.msg("用户id不能为空"),t.abrupt("return");case 6:if(e.ruleForm.content){t.next=9;break}return e.$utils.msg("评论内容不能为空"),t.abrupt("return");case 9:if(!e.ruleForm.id){t.next=14;break}return t.next=12,e.$api.update("discusstijiantaocan",e.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,e.$api.add("discusstijiantaocan",e.ruleForm);case 16:e.$utils.msgBack("提交成功");case 17:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},f9de:function(e,t,n){"use strict";n.r(t);var r=n("6770"),a=n("6184");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("6e14");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"6d6c2a72",null,!1,r["a"],i);t["default"]=c.exports}},[["4640","common/runtime","common/vendor"]]]);