(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),i=a(3),r=a(1);a(9);var l,s,o=a(0),u=function(e){var t=(0,e.view)();return 0!==t.length?Object(o.jsx)("ul",{children:t.map((function(e){return e?Object(o.jsx)("li",{"data-cy":"item",children:e},e):null}))}):null},j=function(e){var t=e.pages,a=e.pageCur,c=e.setPage,n=a===t.length,i=1===a;return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:"page-item ".concat(i?"disabled":""),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":i?"true":"false",onClick:function(){1!==a&&c(a-1)},children:"\xab"})}),t.map((function(e){var t=+e===a;return Object(o.jsx)("li",{className:"page-item ".concat(t?"active":""),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){+e!==a&&c(+e)},children:e})},e)})),Object(o.jsx)("li",{className:"page-item ".concat(n?"disabled":""),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":n?"true":"false",onClick:function(){a!==t.length&&c(a+1)},children:"\xbb"})})]})},d=function(e){var t=e.view,a=e.pages,c=e.pageCur,n=e.items,i=e.limit,r=e.setPage,l=e.setLimit,s=(c-1)*i+1,d=Math.min(c*i,n.length);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(s," - ").concat(d," of ").concat(n.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){l(parseInt(e.target.value,10)),r(1)},defaultValue:i,children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{pages:a,pageCur:c,setPage:r}),Object(o.jsx)(u,{view:t})]})},m=(l=1,s=42,Array.from({length:s-l+1},(function(e,t){return l+t}))).map((function(e){return"Item ".concat(e)}));var g=function(){var e=Object(r.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(5),l=Object(i.a)(n,2),s=l[0],u=l[1],j=function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))}(1,Math.ceil(m.length/s)).map((function(e){return"".concat(e)}));return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{view:function(){return function(e,t){var a=(e-1)*t,c=e*t;return m.slice(a,c)}(a,s)},items:m,pages:j,pageCur:a,limit:s,setPage:c,setLimit:u})})};n.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.f0732562.chunk.js.map