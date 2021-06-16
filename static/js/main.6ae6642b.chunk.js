(this.webpackJsonpiti_brello=this.webpackJsonpiti_brello||[]).push([[0],{60:function(e,t,a){e.exports=a(72)},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),o=(a(65),a(41)),l=a(11),u=a(26),s=a(17),d=(a(66),a(116)),m=a(106),f=a(107);var b=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],b=l[1],v=function(){var t=r.trim();t?e.addItem(t):b(!0),c("")},j=u?i.a.createElement("div",{style:{color:"red"}},"Title is required!"):null;return i.a.createElement("div",null,i.a.createElement(d.a,{variant:"outlined",error:u,value:r,onChange:function(e){c(e.currentTarget.value),b(!1)},onKeyPress:function(e){"Enter"===e.key&&v()},label:"Text",helperText:j}),i.a.createElement(m.a,{color:"primary",onClick:v},i.a.createElement(f.a,null)))},v=a(102);var j=function(e){var t=Object(n.useState)(e.title),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],d=l[1],m=function(){d(!1),e.changeTitle(r)};return u?i.a.createElement(v.a,{color:"primary",value:r,autoFocus:!0,onBlur:m,onChange:function(e){return c(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&m()}}):i.a.createElement("span",{onDoubleClick:function(){return d(!0)}},e.title)},O=a(118),E=a(109),h=a(108);var p=function(e){var t=e.filter,a=e.tasks.map((function(t){return i.a.createElement("div",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement(O.a,{checked:t.isDone,color:"primary",onChange:function(a){e.changeTaskStatus(t.id,a.currentTarget.checked,e.todoListID)}}),i.a.createElement(j,{title:t.title,changeTitle:function(a){return e.changeTaskTitle(t.id,a,e.todoListID)}}),i.a.createElement(m.a,{onClick:function(){return e.removeTask(t.id,e.todoListID)}},i.a.createElement(h.a,null)))}));return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(j,{title:e.title,changeTitle:function(t){return e.changeTodoListTitle(t,e.todoListID)}}),i.a.createElement(m.a,{onClick:function(){e.removeTodoList(e.todoListID)}},i.a.createElement(h.a,null))),i.a.createElement(b,{addItem:function(t){return e.addTask(t,e.todoListID)}}),a,i.a.createElement("div",null,i.a.createElement(E.a,{variant:"all"===t?"outlined":"text",onClick:function(){return e.changeFilter("all",e.todoListID)},color:"default"},"All"),i.a.createElement(E.a,{variant:"active"===t?"outlined":"text",onClick:function(){return e.changeFilter("active",e.todoListID)},color:"primary"},"Active"),i.a.createElement(E.a,{variant:"completed"===t?"outlined":"text",onClick:function(){return e.changeFilter("completed",e.todoListID)},color:"secondary"},"Completed")))},g=a(117),k=a(110),T=a(73),D=a(111),y=a(112),L=a(114),I=a(115),C=a(113);var S=function(){var e,t=Object(g.a)(),a=Object(g.a)(),r=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),c=Object(s.a)(r,2),d=c[0],f=c[1],v=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(g.a)(),title:"HTML & CSS",isDone:!1},{id:Object(g.a)(),title:"JS",isDone:!1},{id:Object(g.a)(),title:"React",isDone:!0}]),Object(u.a)(e,a,[{id:Object(g.a)(),title:"Milk",isDone:!1},{id:Object(g.a)(),title:"Bread",isDone:!1},{id:Object(g.a)(),title:"Potato",isDone:!0}]),e)),j=Object(s.a)(v,2),O=j[0],h=j[1];function S(e,t){var a=Object(l.a)({},O);a[t]=O[t].filter((function(t){return t.id!==e})),h(a)}function w(e,t){var a={id:Object(g.a)(),title:e,isDone:!1};h(Object(l.a)(Object(l.a)({},O),{},Object(u.a)({},t,[a].concat(Object(o.a)(O[t])))))}function x(e,t,a){var n=Object(l.a)({},O);n[a]=O[a].map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{isDone:t}):a})),h(n)}function B(e,t,a){var n=Object(l.a)({},O);n[a]=O[a].map((function(a){return a.id===e?Object(l.a)(Object(l.a)({},a),{},{title:t}):a})),h(n)}function F(e,t){f(d.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{filter:e}):a})))}function W(e,t){f(d.map((function(a){return a.id===t?Object(l.a)(Object(l.a)({},a),{},{title:e}):a})))}function A(e){f(d.filter((function(t){return t.id!==e})));var t=Object(l.a)({},O);delete t[e],h(t)}var J=d.map((function(e){var t=function(e){switch(e.filter){case"active":return O[e.id].filter((function(e){return!e.isDone}));case"completed":return O[e.id].filter((function(e){return e.isDone}));default:return O[e.id]}}(e);return i.a.createElement(k.a,{item:!0},i.a.createElement(T.a,{style:{padding:"10px"}},i.a.createElement(p,{key:e.id,todoListID:e.id,title:e.title,tasks:t,filter:e.filter,addTask:w,removeTask:S,removeTodoList:A,changeFilter:F,changeTaskStatus:x,changeTaskTitle:B,changeTodoListTitle:W})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(D.a,{position:"static"},i.a.createElement(y.a,{style:{justifyContent:"space-between"}},i.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(C.a,null)),i.a.createElement(L.a,{variant:"h6"},"Brello"),i.a.createElement(E.a,{color:"inherit",variant:"outlined"},"Login"))),i.a.createElement(I.a,{fixed:!0},i.a.createElement(k.a,{container:!0,style:{padding:"20px"}},i.a.createElement(b,{addItem:function(e){var t=Object(g.a)(),a={id:t,title:e,filter:"all"};f([].concat(Object(o.a)(d),[a])),h(Object(l.a)(Object(l.a)({},O),{},Object(u.a)({},t,[])))}})),i.a.createElement(k.a,{container:!0,spacing:3},J)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.6ae6642b.chunk.js.map