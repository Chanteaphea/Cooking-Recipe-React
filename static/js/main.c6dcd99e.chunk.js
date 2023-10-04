(this["webpackJsonpcooking-recipe"]=this["webpackJsonpcooking-recipe"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(24),a=c.n(s),i=(c(29),c(30),c(9)),j=c(3),l=(c(31),c(5)),o=(c(32),c(2)),b=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(j.n)();return Object(o.jsx)("div",{className:"searchbar",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s("/search?q=".concat(c))},children:[Object(o.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(o.jsx)("input",{type:"text",id:"search",onChange:function(e){return r(e.target.value)},required:!0})]})})},u=function(){return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("nav",{children:[Object(o.jsx)(i.b,{to:"/",className:"brand",children:"Cooking Recipe"}),Object(o.jsx)(b,{}),Object(o.jsx)(i.b,{to:"/create",children:"Create Recipe"})]})})},d=(c(35),c(4)),h=c.n(d),O=c(23),p=c(7),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),r=Object(l.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),o=j[0],b=j[1],u=Object(n.useState)(null),d=Object(l.a)(u,2),x=d[0],m=d[1],f=Object(n.useState)(null),g=Object(l.a)(f,2),v=g[0],N=g[1],S=function(e){N({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(p.a)(h.a.mark((function t(n){var r,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,fetch(e,Object(O.a)(Object(O.a)({},n),{},{signal:c.signal}));case 4:if((r=t.sent).ok){t.next=7;break}throw new Error(r.statusText);case 7:return t.next=9,r.json();case 9:s=t.sent,b(!1),a(s),m(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(b(!1),m("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),(t=v)&&n(v),function(){c.abort()}}),[e,v,t]),{data:s,isPending:o,error:x,postData:S}},m=(c(36),function(e){var t=e.recipeList;return 0===t.length?Object(o.jsx)("div",{className:"error",children:"Recipes No Found"}):Object(o.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("p",{children:[e.cookingTime," to make"]}),Object(o.jsx)("div",{children:e.method.substring(0,100)}),Object(o.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Cook This"})]},e.id)}))})}),f=function(){var e=x("http://localhost:3000/recipes"),t=e.data,c=e.isPending,n=e.error;return Object(o.jsxs)("div",{className:"home",children:[n&&Object(o.jsx)("p",{className:"error",children:n}),c&&Object(o.jsx)("p",{className:"loading",children:"Loading ....."}),t&&Object(o.jsx)(m,{recipeList:t})]})},g=c(8),v=(c(37),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(l.a)(s,2),i=a[0],b=a[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),f=m[0],v=m[1],N=Object(n.useState)([]),S=Object(l.a)(N,2),k=S[0],C=S[1],T=Object(n.useRef)(null),w=Object(j.n)(),R=x("http://localhost:3000/recipes","POST"),y=R.postData,q=R.data;R.error;return Object(n.useEffect)((function(){q&&w("/")}),[q]),Object(o.jsxs)("div",{className:"create",children:[Object(o.jsx)("h2",{className:"page-title",children:"Add A New Recipe"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({title:c,ingredients:k,method:i,cookingTime:h+"Minutes"})},children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Recipe Title:"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:c,required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Recipe Ingredents:"}),Object(o.jsxs)("div",{className:"ingredients",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)},value:f,ref:T}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault();var t=f.trim();t&&!k.includes(t)&&C((function(e){return[].concat(Object(g.a)(e),[f])})),v(""),T.current.focus()},className:"btn",children:"Add"})]})]}),Object(o.jsxs)("p",{children:["Current Ingredients:",k.map((function(e){return Object(o.jsxs)("em",{children:[e,", "]},e)}))]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Recipe Method:"}),Object(o.jsx)("textarea",{cols:"30",rows:"10",onChange:function(e){return b(e.target.value)},value:i,required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Cooking Time (in minutes):"}),Object(o.jsx)("input",{type:"number",onChange:function(e){return O(e.target.value)},value:h,required:!0})]}),Object(o.jsx)("button",{className:"btn",children:" Submit "})]})]})}),N=(c(38),function(){var e=Object(j.l)().search,t=new URLSearchParams(e).get("q"),c=x("http://localhost:3000/recipes?q="+t),n=c.error,r=c.isPending,s=c.data;return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsxs)("h2",{className:"page-title",children:['Recipe Include "',t,'"']}),n&&Object(o.jsx)("p",{className:"error",children:n}),r&&Object(o.jsx)("p",{className:"loading",children:"Loading ..."}),s&&Object(o.jsx)(m,{recipeList:s})]})}),S=(c(39),function(){var e=Object(j.p)().id,t=x("http://localhost:3000/recipes/"+e),c=t.data,n=t.isPending,r=t.error;return Object(o.jsxs)("div",{className:"recipe",children:[r&&Object(o.jsx)("p",{className:"error",children:r}),n&&Object(o.jsx)("p",{className:"loading",children:"Loading ...."}),c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"page-title",children:c.title}),Object(o.jsxs)("p",{children:[c.cookingTime," to cook "]}),Object(o.jsx)("ul",{children:c.ingredients.map((function(e){return Object(o.jsx)("li",{children:e},e)}))}),Object(o.jsx)("p",{className:"method",children:c.method})]})]})});var k=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",element:Object(o.jsx)(f,{})}),Object(o.jsx)(j.a,{path:"/create",element:Object(o.jsx)(v,{})}),Object(o.jsx)(j.a,{path:"/search",element:Object(o.jsx)(N,{})}),Object(o.jsx)(j.a,{path:"/recipes/:id",element:Object(o.jsx)(S,{})})]})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c6dcd99e.chunk.js.map