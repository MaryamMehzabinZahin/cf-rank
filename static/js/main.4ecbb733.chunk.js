(this["webpackJsonpcf-rank"]=this["webpackJsonpcf-rank"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),a=n(28),c=n.n(a),i=(n(53),n(54),n(7)),o=n(12),l=n(13),d=n(15),h=n(14),u=n(6),j=n.n(u),p=n(10),b=n(78),f=n(73),O=n(74),x=(n(56),n(57),n(1));function v(e){return void 0===e||null===e?"":e}function m(e){var t=e.data,n=e.localRank,s=e.userInfo;if(null==t)return Object(x.jsx)("tr",{children:Object(x.jsx)("td",{children:"called with null"})});var r=function(e){return e in s?s[e].rank:""},a=function(e){return Object(x.jsxs)("div",{className:"rank-main-content",children:[Object(x.jsxs)("span",{className:"cell-points",children:[e.points," "]}),Object(x.jsx)("span",{className:"cell-time",children:e.bestSubmissionTimeSeconds&&new Date(1e3*e.bestSubmissionTimeSeconds).toISOString().substr(11,8)})]})},c=function(e){return Object(x.jsx)("span",{className:"cell-rejected",children:-e.rejectedAttemptCount})},i=t.rank>0&&t.penalty>0;return Object(x.jsxs)("tr",{className:"rank-font",children:[Object(x.jsx)("td",{style:{"text-align":"left"},children:Object(x.jsx)("span",{className:"hash-rank",children:t.rank>0&&n})}),Object(x.jsx)("td",{style:{"text-align":"center"},children:t.rank>0&&t.rank}),Object(x.jsx)("td",{style:{"text-align":"left"},children:Object(x.jsxs)("div",{className:"handle-cell-div",children:["CONTESTANT"!==t.party.participantType&&Object(x.jsx)("span",{style:{color:"#fff"},children:"*"}),t.party.members.map((function(e){return Object(x.jsxs)("div",{className:"handle "+(n=r(e.handle),n.replace(/\s/g,"")),children:[" ",Object(x.jsx)("a",{target:"_blank",href:"https://codeforces.com/profile/"+e.handle,title:r(e.handle)+" "+(t=e.handle,t in s?v(s[t].firstName)+" "+v(s[t].lastName):""),children:Object(x.jsxs)("div",{children:[" ",Object(x.jsx)("span",{className:"firstLetter",children:e.handle.substr(0,1)}),e.handle.substr(1)," "]})})]});var t,n}))," "]})}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"rank-cell-div",children:[i&&Object(x.jsx)("div",{className:"rank-side-content"}),Object(x.jsxs)("div",{className:"rank-main-content",children:[Object(x.jsx)("span",{className:"total-points",title:"total points",children:t.points})," "]}),i&&Object(x.jsxs)("div",{className:"rank-side-content",children:[Object(x.jsxs)("span",{title:"total penalty",className:"cell-rejected",children:[t.penalty," "]})," "]})]})}),Object(x.jsx)("td",{}),t.problemResults.map((function(e){return Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"rank-cell-div",children:[e.points>0&&Object(x.jsx)("div",{className:"rank-side-content"}),e.points>0&&a(e),Object(x.jsx)("div",{className:"rank-side-content",children:e.rejectedAttemptCount>0&&c(e)})]})})}))]})}var g=n(20),k=n(76),y=n(45),N=n(72),C=n(75),w=n(77),S=n(25);n(59);function I(e,t){for(var n=e.substring(1).split("&"),s=0;s<n.length;s++){var r=n[s].split("=");if(decodeURIComponent(r[0])==t)return decodeURIComponent(r[1])}return""}function R(e){var t=I(e.location.search,"handles");t.length>0&&";"!=t.slice(-1)&&(t+=";");var n=I(e.location.search,"parsedHandles");return n.length>0&&";"!=n.slice(-1)&&(n+=";"),{url:I(e.location.search,"url"),contestID:e.match.params.contestID,handles:t,parsedHandles:n,unofficial:"true"==I(e.location.search,"unofficial")}}function F(e){var t=R(e);return function(e){var t,n=0;if(0===e.length)return n;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return n}(t.url+t.contestID+t.handles+t.parsedHandles+t.unofficial.toString())}function D(e,t){return F(e)==F(t)}function H(e,t,n,s,r,a){var c=e;return c.length>0&&"/"!=c.slice(-1)&&(c+="/"),t||(t="1541"),c=c+t+"?",""!==n&&void 0!=n?c=c+"url="+n+"&":r="",a&&"true"==a.toString()&&(c+="unofficial=true&"),""!==s&&void 0!=s&&(c=c+"handles="+s+"&"),""!==r&&void 0!=r&&(c=c+"parsedHandles="+r+"&"),c.length>0&&"&"===c.slice(-1)&&(c=c.slice(0,-1)),c}function T(e,t,n,s,r){return H("/contest",e,t,n,s,r)}function A(e){var t=e.url,n=e.contestID,r=e.handles,a=e.unofficial,c=Object(s.useState)(t),i=Object(g.a)(c,2),o=i[0],l=i[1],d=Object(s.useState)(n),h=Object(g.a)(d,2),u=h[0],j=h[1],p=Object(s.useState)(r),b=Object(g.a)(p,2),f=b[0],O=b[1],v=Object(s.useState)(a),m=Object(g.a)(v,2),I=m[0],R=m[1],F=Object(s.useState)(!1),D=Object(g.a)(F,2),A=D[0],U=D[1],L=Object(x.jsx)("div",{className:A?"hide-me":"parent-input-div one-elm-flex",children:Object(x.jsx)(k.a,{className:"width-hundred one-elm-flex",children:Object(x.jsxs)("div",{className:"width-hundred flex-input-div",children:[Object(x.jsxs)("div",{className:"handles-div min-width one-elm-flex",children:[Object(x.jsx)(k.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Handles"}),Object(x.jsx)(y.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"handles seperated by ;",value:f,onChange:function(e){return O(e.target.value)}})]}),Object(x.jsxs)("div",{className:"url-div min-width one-elm-flex",children:[Object(x.jsx)(k.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"URL"}),Object(x.jsx)(y.a,{size:"sm",className:"mb-0 org-field",id:"inlineFormInput",placeholder:"city/organization cf url seperated by ;",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(x.jsxs)("div",{className:"contest-div min-width one-elm-flex",children:[Object(x.jsx)(k.a.Label,{htmlFor:"inlineFormInput2",srOnly:!0,children:"ContestID"}),Object(x.jsx)(y.a,{size:"sm",className:"mb-0",id:"inlineFormInput2",placeholder:"ContestID",value:u,onChange:function(e){j(e.target.value)}})]}),Object(x.jsxs)("div",{className:"unofficial-div min-width one-elm-flex",children:[Object(x.jsx)("input",{type:"checkbox",className:"btn-light",checked:I,onChange:function(e){R(e.target.checked)}})," ",Object(x.jsx)("span",{children:"unofficial"})]}),Object(x.jsx)("div",{className:"button-div min-width one-elm-flex",children:Object(x.jsx)(S.b,{to:T(u,o,f,e.parsedHandles,I),children:Object(x.jsx)(N.a,{type:"submit",className:"mb-0 btn-light",size:"sm",children:"Load"})})})]})},t+n)});return Object(x.jsx)("div",{children:Object(x.jsx)(C.a,{bg:"dark",variant:"dark",className:"navbar-expand-sm",children:Object(x.jsxs)(w.a,{className:"mr-auto width-hundred",children:[Object(x.jsx)(w.a.Link,{href:H("#selector/contests/",u,o,f,e.parsedHandles,I),active:e.location.pathname.startsWith("/selector/contests"),children:"Contests"}),Object(x.jsx)(w.a.Link,{href:H("#selector/orgs/",u,o,f,e.parsedHandles,I),active:e.location.pathname.startsWith("/selector/orgs"),children:"Orgs"}),Object(x.jsx)(w.a.Link,{disabled:!0,active:e.location.pathname.startsWith("/contest"),children:"Ranklist"}),Object(x.jsx)("div",{className:"one-elm-flex",children:Object(x.jsx)("input",{type:"checkbox",onClick:function(e){return U(e.target.checked)},value:A})}),L]})})})}var U=n(29),L=n(24),M="https://be-beam.swiftshopbd.com/",z="https://codeforces.com/api",P=function(e,t,n){return"/contest.standings?showUnofficial="+t+"&contestId="+e+"&handles="+n},_=function(e){return"/user.info?handles="+e};function E(e){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(M+t,{"X-Requested-With":"cf"}).then((function(e){return e.text()})).then((function(e){var t,n=(new DOMParser).parseFromString(e,"text/html").querySelector("#pageContent > div.datatable.ratingsDatatable").innerHTML,s=Object(L.a)(n.matchAll('/profile/(.+?)"')),r="",a=Object(U.a)(s);try{for(a.s();!(t=a.n()).done;){var c=t.value;r=r.concat(c[1]+";")}}catch(i){a.e(i)}finally{a.f()}return r})).catch((function(e){return console.log("Failed to fetch page: ",e),""})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return B.apply(this,arguments)}function B(){return(B=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("orgs.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,n){return G.apply(this,arguments)}function G(){return(G=Object(p.a)(j.a.mark((function e(t,n,s){var r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,a=z+P(t,s,n),console.log("Fetching",a),e.next=5,fetch(a).catch((function(e){console.log(e),r=!0}));case 5:if(c=e.sent,!r&&200===c.status){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,c.json();case 10:return e.abrupt("return",e.sent.result);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(p.a)(j.a.mark((function e(t,n){var s,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=!1,r=z+_(t),console.log("Fetching",r),e.next=5,fetch(r).catch((function(e){console.log(e),s=!0}));case 5:if(a=e.sent,!s&&200===a.status){e.next=8;break}return e.abrupt("return",void 0);case 8:return e.next=10,a.json();case 10:return e.abrupt("return",e.sent.result);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(40),n(66);var X=n.p+"static/media/logo.6ce24c58.svg";function K(e){return void 0==e||null==e?new Set:new Set(e.split(";"))}function Q(e,t){var n,s=K(e),r=K(t),a=function(e,t){var n,s=new Set(e),r=Object(U.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;s.delete(a)}}catch(c){r.e(c)}finally{r.f()}return s}(s,r);return{cnt:a.size,unq:(n=a,Object(L.a)(n).join(";")+";"),tot:r.size+a.size-1}}function Z(e,t){return function(e,t){if(e.size!==t.size)return!1;var n,s=Object(U.a)(e);try{for(s.s();!(n=s.n()).done;){var r=n.value;if(!t.has(r))return!1}}catch(a){s.e(a)}finally{s.f()}return!0}(K(e),K(t))}var $="FINISHED",ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;Object(o.a)(this,n),(s=t.call(this,e))._isMounted=!1;var r=e.handles;return""!==e.url&&(r+=e.parsedHandles),s.state={data:null,loading:!0,needRetry:!0,failed:!1,handles:r,renderCount:0,userInfo:{}},s}return Object(l.a)(n,[{key:"actionFetchRanks",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(this.props.contestID,t,this.props.unofficial);case 2:void 0!==(n=e.sent)?(this.state.data=n,this.state.data.contest.phase==$?this.state.needRetry=!1:this.state.needRetry=!0):this.state.needRetry=!1,this.state.loading=!1,this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"actionFetchUserInfo",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:void 0!==(n=e.sent)?(s={},n.map((function(e){return s[e.handle]=e})),this.state.userInfo=s):console.log("user-info not found. unable to set colors"),this._isMounted&&this.setState({renderCount:this.state.renderCount+1});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseHandlesFromSingleURLAndPages",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,r,a,c,i,o,l,d,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",s=1;case 2:for(r=[],a=1;a<=2;a++)r.push(E(t+"/page/"+s)),s++;return e.next=7,Promise.all(r);case 7:c=e.sent,i=0;case 9:if(!(i<c.length)){e.next=19;break}if(o=Q(c[i],n),l=o.unq,d=o.cnt,h=o.tot,!(d>0)){e.next=15;break}n+=l,e.next=16;break;case 15:return e.abrupt("break",19);case 16:i++,e.next=9;break;case 19:if(!(d<=0||s>20)){e.next=21;break}return e.abrupt("break",23);case 21:e.next=2;break;case 23:return console.table({log:"Parse handle result per url",url:t,total:h,handles:n}),e.abrupt("return",n);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseHandlesFromAllUrls",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,r,a,c,i,o,l,d,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="",s=t.split(";"),r=[],a=0;case 4:if(!(a<s.length)){e.next=11;break}if(""!==s[a]){e.next=7;break}return e.abrupt("return");case 7:r.push(this.parseHandlesFromSingleURLAndPages(s[a]));case 8:a++,e.next=4;break;case 11:return e.next=13,Promise.all(r);case 13:for(c=e.sent,i=0;i<c.length;i++)o=Q(c[i],n),l=o.unq,d=o.cnt,h=o.tot,d>0&&(n+=l);return console.table({log:"Total handles parsed",total:h,handles:n}),e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseHandles",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,s,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==this.props.url&&""!==this.props.url){e.next=2;break}return e.abrupt("return");case 2:return this.state.loading=!0,e.next=5,this.parseHandlesFromAllUrls(this.props.url);case 5:if(t=e.sent,n=Q(t,this.props.handles),s=n.unq,r=n.cnt,a=n.tot,console.table({log:"Total handles parsed - custom handles",total:a,totalHandles:t,uniqueHandles:s,uniqueCount:r}),!Z(s,this.props.parsedHandles)){e.next=11;break}return e.abrupt("return");case 11:this._isMounted&&this.props.history.push(T(this.props.contestID,this.props.url,this.props.handles,s,this.props.unofficial));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==this.state.handles&&(this.actionFetchRanks(this.state.handles),this.actionFetchUserInfo(this.state.handles)),e.next=3,this.parseHandles();case 3:this.state.needRetry&&(this.parseRankInterval=setInterval((function(){t.actionFetchRanks(t.state.handles)}),3e4));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.parseRankInterval),this._isMounted=!1}},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then(),this._isMounted=!0}},{key:"shouldComponentUpdate",value:function(e,t){return t.renderCount!=this.state.renderCount||t.handles!=this.state.handles&&(this.actionFetchRanks(t.handles),!1)}},{key:"displayProgressBar",value:function(e,t){if(void 0!=e&&void 0!=t&&!(e>t||e<0)){var n=Math.round(e/t*100);return Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:"100",children:Object(x.jsx)(b.a,{variant:"info",now:n,animated:!0})})})}}},{key:"render",value:function(){var e=this,t=""==this.props.handles&&""==this.props.url;if(t&&(this.state.loading=!1),t||null==this.state.data)return 0==this.state.loading?Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"stopped",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Not Available or Invalid Args!"})]})}):Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"loading",children:[Object(x.jsx)(f.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(x.jsx)("p",{children:"Constructing Ranklist..."})]})});var n,s=this.state.data,r=1,a=function(e){return 0===e||s.rows[e-1].rank==s.rows[e].rank?r:r=e+1};return Object(x.jsxs)("div",{children:[s.contest.phase===$&&Object(x.jsx)("img",{src:X,className:"App-logo",alt:"logo"}),s.contest.phase!==$&&Object(x.jsx)("img",{src:X,className:"App-logo-animate",alt:"logo"}),Object(x.jsx)("div",{className:"con-tittle",children:s.contest.name}),Object(x.jsx)("div",{className:"ranklist",children:Object(x.jsxs)(O.a,{variant:"dark",size:"sm",responsive:"sm",striped:!0,bordered:!0,children:[Object(x.jsxs)("thead",{children:[Object(x.jsx)("tr",{children:Object(x.jsx)("th",{className:"white-hyperlink",colSpan:"100",children:Object(x.jsx)("a",{target:"_blank",href:"https://codeforces.com/contest/"+this.props.contestID+"/standings",children:(n=s.contest.phase,"FINISHED"===n?"Final Standings":"PENDING_SYSTEM_TEST"===n?"Pending System Test":"SYSTEM_TEST"===n?"System Testing":"CODING"===n?"Contest is Running":void 0)})})}),this.displayProgressBar(s.contest.relativeTimeSeconds,s.contest.durationSeconds),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{style:{"text-align":"left"},children:Object(x.jsx)("span",{className:"hash-rank",children:"#"})}),Object(x.jsx)("th",{style:{"text-align":"center"},children:"Rank"}),Object(x.jsx)("th",{style:{"text-align":"left"},children:"Handle"}),Object(x.jsx)("th",{children:" Score "}),Object(x.jsx)("th",{style:{"text-align":"left"},children:" "}),s.problems.map((function(t){var n=1;return void 0!==t.rating&&(n=t.rating),Object(x.jsx)("th",{className:"white-hyperlink",title:t.name+" : "+n,children:Object(x.jsx)("a",{target:"_blank",href:"https://codeforces.com/contest/"+e.props.contestID+"/problem/"+t.index,children:t.index})})}))]})]}),Object(x.jsx)("tbody",{children:s.rows.map((function(t,n){return Object(x.jsx)(m,{localRank:a(n),data:t,userInfo:e.state.userInfo},n)}))})]})})]})}}]),n}(r.a.Component),te=(n(67),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"layout-header",children:Object(x.jsx)(A,Object(i.a)({},this.props),this.props.contestID+this.props.url)}),Object(x.jsx)("div",{className:"App-Container",children:this.props.children}),Object(x.jsx)("div",{className:"footer"})]})}}]),n}(r.a.Component)),ne=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!D(e,this.props)}},{key:"render",value:function(){return console.log("rank-layout-rendering",this.props),Object(x.jsx)("div",{children:Object(x.jsx)(te,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),R(this.props)),{},{children:Object(x.jsx)(ee,Object(i.a)(Object(i.a)({},this.props),R(this.props)),"rank-list"+F(this.props))}),"rank-list-layout")})}}]),n}(r.a.Component),se=n(23),re=(n(68),function(e){return"/contest.list?gym="+e}),ae=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).selectRef=[],s.refID={},s.state={data:null,loading:!0,needRetry:!0,failed:!1,searchStr:"",renderCount:0},s.onFilter=s.onFilter.bind(Object(se.a)(s)),s.handleCheckbox=s.handleCheckbox.bind(Object(se.a)(s)),s}return Object(l.a)(n,[{key:"actionFetchContests",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,s="https://codeforces.com/api"+re(t),console.log("Fetching Contests",s),e.next=5,fetch(s).catch((function(e){console.log(e),n=!0}));case 5:if(r=e.sent,!n){e.next=8;break}return e.abrupt("return");case 8:if(200!==r.status){e.next=14;break}return e.next=11,r.json();case 11:this.state.data=e.sent.result,e.next=14;break;case 14:this.state.loading=!1,this.forceUpdate();case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleCheckbox",value:function(e){var t,n,s,r,a,c=e.target.value;e.target.checked?(this.selectRef[this.refID[Number(this.props.contestID)]].current.children[0].children[0].children[0].checked=!1,this.props.history.push((t=c,n=this.props.url,s=this.props.handles,r=this.props.parsedHandles,a=this.props.unofficial,H("/selector/contests",t,n,s,r,a)))):e.target.checked=!0}},{key:"onFilter",value:function(e){var t=this;void 0==this.state.searchStr&&(this.state.searchStr=""),this.state.data.map((function(e){var n=t.refID[e.id];if(void 0!==n){var s=t.selectRef[n].current;e.name.toLowerCase().includes(t.state.searchStr.toLowerCase())?s.hidden=!1:s.hidden=!0}}))}},{key:"renderRow",value:function(e){return null==e||void 0==e?Object(x.jsx)("tr",{children:Object(x.jsx)("td",{children:"called with null"})}):Object(x.jsxs)("tr",{ref:this.selectRef[this.refID[e.id]],children:[Object(x.jsxs)("td",{children:[" ",Object(x.jsxs)("div",{className:"div-checkbox-selector one-elm-flex",children:[" ",Object(x.jsx)("input",{type:"checkbox",onChange:this.handleCheckbox,defaultValue:e.id,defaultChecked:e.id==this.props.contestID})," "]})]}),Object(x.jsx)("td",{textAlign:"left",children:e.name}),Object(x.jsx)("td",{textAlign:"left",children:e.id}),Object(x.jsx)("td",{textAlign:"center",children:Object(x.jsx)("a",{href:"https://codeforces.com/contest/"+e.id,target:"_blank",children:"link"})})]})}},{key:"renderContests",value:function(){var e=this,t=this.state.data;return Object(x.jsx)("div",{className:"contests content-div",children:Object(x.jsxs)(O.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(x.jsxs)("thead",{children:[Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:"20",children:Object(x.jsx)("div",{className:"filter-container",children:Object(x.jsx)("div",{children:Object(x.jsx)(y.a,{className:"sm",placeholder:"Filter by Tittle",defaultValue:this.state.searchStr,onChange:function(t){e.state.searchStr=t.target.value,e.onFilter(t)}})})})})}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"Contest Tittle"}),Object(x.jsx)("th",{children:"ID"}),Object(x.jsx)("th",{children:"Codeforces"})]})]}),Object(x.jsx)("tbody",{children:t.map((function(t,n){if("BEFORE"!==t.phase)return t.id in e.refID||(e.selectRef.push(r.a.createRef()),e.refID[t.id]=e.selectRef.length-1),e.renderRow(t)}))})]},"contests-table")},"contests-div")}},{key:"render",value:function(){return null===this.state.data?!1===this.state.loading?Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"stopped",children:Object(x.jsx)("p",{children:"Not Available! "})})}):Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"loading",children:[Object(x.jsx)(f.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(x.jsx)("p",{children:"Parsing Contests..."})]})}):Object(x.jsx)("div",{className:"content-list-div",children:this.renderContests()},"content-list-div")}},{key:"fetchContests",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.loading=!0,e.abrupt("return",this.actionFetchContests(!1).then((function(e){console.log("contests-data",e)})).catch((function(e){return alert(e)})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setRefreshIfNecessary",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchContests();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.setRefreshIfNecessary().then()}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!(!t||this.state.renderCount==t.renderCount)}}]),n}(r.a.Component),ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!D(e,this.props)}},{key:"render",value:function(){return console.log("con-layout-rendering",this.props),Object(x.jsx)("div",{children:Object(x.jsx)(te,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),R(this.props)),{},{children:Object(x.jsx)(ae,Object(i.a)(Object(i.a)({},this.props),R(this.props)),"con-list")}),"con-list-layout")})}}]),n}(r.a.Component),ie=(n(69),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).selectRef=[],s.refID={},s.handleCheckbox=s.handleCheckbox.bind(Object(se.a)(s)),s.state={data:null,loading:!0,urlSet:new Set(e.url.split(";")),failed:!1,searchStr:"",renderCount:0},s}return Object(l.a)(n,[{key:"handleCheckbox",value:function(e){var t=e.target.defaultValue;e.target.checked?this.state.urlSet.add(t):this.state.urlSet.delete(t),this.state.urlSet.delete("");var n,s,r,a,c,i=Object(L.a)(this.state.urlSet).join(";");console.log("marked",t,e.target.checked,"url",i),this.props.history.push((n=this.props.contestID,s=i,r=this.props.handles,a=this.props.parsedHandles,c=this.props.unofficial,H("/selector/orgs",n,s,r,a,c)))}},{key:"renderOrgs",value:function(){var e=this,t=["soon to be filled"];return null!==this.state.data&&void 0!==this.state.data&&(t=this.state.data),Object(x.jsx)("div",{className:"orgs content-div",children:Object(x.jsxs)(O.a,{variant:"dark",size:"sm",responsive:"sm",striped:"true",children:[Object(x.jsxs)("thead",{children:[Object(x.jsx)("tr",{children:Object(x.jsx)("th",{colSpan:"20",children:Object(x.jsx)("div",{className:"filter-container",children:Object(x.jsx)("div",{children:Object(x.jsx)(y.a,{className:"sm",placeholder:"Filter by Org"})})})})}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{}),Object(x.jsx)("th",{}),Object(x.jsx)("th",{children:"Org Name"}),Object(x.jsx)("th",{})]})]}),Object(x.jsx)("tbody",{children:t.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"div-checkbox-selector one-elm-flex",children:[" ",Object(x.jsx)("input",{type:"checkbox",onChange:e.handleCheckbox.bind(e),value:t.url,defaultChecked:e.state.urlSet.has(t.url)})," "]})}),Object(x.jsx)("td",{}),Object(x.jsx)("td",{colSpan:"200",children:t.name})]})}))})]},"orgs-table")},"orgs-div")}},{key:"render",value:function(){return null===this.state.data?!1===this.state.loading?Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"stopped",children:Object(x.jsx)("p",{children:"Not Available! "})})}):Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"loading",children:[Object(x.jsx)(f.a,{style:{width:"100px",height:"100px"},animation:"border",role:"status",children:Object(x.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(x.jsx)("p",{children:"Parsing Orgs..."})]})}):Object(x.jsx)("div",{className:"content-list-div",children:this.renderOrgs()},"orgs-list-div")}},{key:"parseOrgs",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,this.setState({data:t,renderCount:this.state.renderCount+1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.parseOrgs()}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!!t&&t.renderCount!=this.state.renderCount}}]),n}(r.a.Component)),oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!D(e,this.props)}},{key:"render",value:function(){return console.log("con-layout-rendering",this.props),Object(x.jsx)("div",{children:Object(x.jsx)(te,Object(i.a)(Object(i.a)(Object(i.a)({},this.props),R(this.props)),{},{children:Object(x.jsx)(ie,Object(i.a)(Object(i.a)({},this.props),R(this.props)),"con-list")}),"con-list-layout")})}}]),n}(r.a.Component),le=n(8);function de(){return Object(x.jsx)(S.a,{children:Object(x.jsx)("div",{className:"Switch-Route-Block",children:Object(x.jsxs)(le.d,{children:[Object(x.jsx)(le.b,{path:"/selector/contests/:contestID",render:function(e){return Object(x.jsx)(ce,Object(i.a)({},e),"contest-list-layout")}},"route-contest-list"),Object(x.jsx)(le.b,{path:"/selector/orgs/:contestID",render:function(e){return Object(x.jsx)(oe,Object(i.a)({},e),"orgs-list-layout")}},"route-orgs-list"),Object(x.jsx)(le.b,{path:"/contest/:contestID",render:function(e){return Object(x.jsx)(ne,Object(i.a)({},e),"single-rank-instance")}},"route-rank-list"),Object(x.jsx)(le.a,{from:"/",to:"/contest/1541?url=https://codeforces.com/ratings/organization/3403"})]},"switch-route-sw")},"switch-route-block")},"hash-router")}var he=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("header",{className:"App-header",children:Object(x.jsx)(de,{},"app-conatiner")})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(he,{})}),document.getElementById("root")),ue()}},[[70,1,2]]]);
//# sourceMappingURL=main.4ecbb733.chunk.js.map