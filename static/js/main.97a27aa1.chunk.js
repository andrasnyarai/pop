(this.webpackJsonppop=this.webpackJsonppop||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),a=t.n(r),c=t(11),o=t.n(c),s=t(2),d=t(3),u=t.p+"static/media/logo.e947aa51.svg",l=t.p+"static/media/title.a2c4a0b0.svg",b=t(4);function p(){var n=Object(s.a)(["\n  border-radius: 54px;\n  background-color: #0096ff;\n  color: white;\n  width: 127px;\n  height: 43px;\n\n  position: absolute;\n  right: 0;\n\n  font: normal normal bold 16px/16px Roboto;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]);return p=function(){return n},n}var j=Object(d.b)(b.a.div)(p()),h=t.p+"static/media/profile.3768a25c.svg",f={ease:"easeInOut",duration:.4};function x(){var n=Object(r.useContext)(A).isSmallHeader;return Object(i.jsxs)(j,{transition:f,initial:{y:-4},animate:{y:n?-9:-4},children:[Object(i.jsx)("img",{src:h,style:{width:14,marginLeft:19,marginRight:9},alt:"register"}),Object(i.jsx)("p",{children:"Register"})]})}var m=t(5);function O(){var n=Object(s.a)(["\n  width: 83%;\n  background-color: #e6ecf0;\n  height: 100%;\n  padding-left: 10px;\n\n  outline: none;\n  border: none;\n  box-shadow: none;\n\n  ::placeholder {\n    color: #b8c0c8;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(s.a)(["\n  width: 190px;\n  height: 36px;\n  border-radius: 60px;\n  padding-left: 11px;\n  background-color: #e6ecf0;\n\n  display: flex;\n  position: absolute;\n  right: 150px;\n\n  overflow: hidden;\n  cursor: pointer;\n"]);return v=function(){return n},n}var g=Object(d.b)(b.a.div)(v()),w=Object(d.b)(b.a.input)(O()),y=t.p+"static/media/search.650346f8.svg";function S(){var n=Object(r.useContext)(A),e=n.isSmallHeader,t=n.isSmallScreen,a=n.isExtraSmallScreen,c=Object(r.useState)(!e),o=Object(m.a)(c,2),s=o[0],d=o[1],u=t||a?140:190;Object(r.useEffect)((function(){d(!e)}),[e]);var l=Object(r.useRef)(null);return Object(i.jsxs)(g,{transition:f,initial:{width:u,y:0},animate:s?{width:u,y:e?-5:0}:{width:36,y:-5},children:[Object(i.jsx)("img",{src:y,style:{width:14},onClick:function(){var n;d(!0),null===(n=l.current)||void 0===n||n.focus()},alt:"search"}),Object(i.jsx)(w,{transition:f,initial:{opacity:1},animate:{opacity:s?1:0},ref:l,onBlur:function(){e&&d(!1)},placeholder:"Search"})]})}function E(){var n=Object(s.a)([""]);return E=function(){return n},n}function k(){var n=Object(s.a)(["\n  position: absolute;\n  display: flex;\n  z-index: 2;\n  width: calc(100% - 2 * var(--padding));\n"]);return k=function(){return n},n}function C(){var n=Object(s.a)(["\n  --padding: 25px;\n\n  position: sticky;\n  overflow: hidden;\n  top: 0;\n  height: 125px;\n  background-color: white;\n  padding: 0 var(--padding);\n\n  @media (min-width: 800px) {\n    --padding: 50px;\n  }\n\n  @media (min-width: 1000px) {\n    --padding: 75px;\n  }\n\n  @media (min-width: 1200px) {\n    --padding: 100px;\n  }\n\n  @media (min-width: 1400px) {\n    --padding: 175px;\n  }\n"]);return C=function(){return n},n}var L=Object(d.b)(b.a.header)(C()),R=Object(d.b)(b.a.div)(k()),H=Object(d.b)(b.a.img)(E()),z=t(10);function D(){var n=Object(s.a)(["\n  color: #132f48;\n  cursor: pointer;\n\n  div {\n    opacity: 0.5;\n    :hover {\n      opacity: 1;\n    }\n  }\n"]);return D=function(){return n},n}function M(){var n=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n  z-index: 1;\n\n  width: calc(100% - 2 * var(--padding));\n\n  @media (max-width: 500px) {\n    font: normal normal bold 12px/20px Roboto;\n  }\n"]);return M=function(){return n},n}var B=Object(d.b)(b.a.div)(M()),W=Object(d.b)(b.a.div)(D());function Y(){var n=Object(r.useContext)(A),e=n.isSmallHeader,t=n.isSmallScreen,a=n.isExtraSmallScreen,c=n.isMediumScreen,o=n.isLargeScreen;return Object(i.jsx)(B,{transition:f,initial:{x:0,y:-15},animate:e?{x:45,y:-14}:{x:0,y:-15},children:["All A-Z","Brexit","Climate","Copyright","Migration","Deb on hover"].concat(o?["Debate W","Debate X","Debate Y","Debate Z"]:[]).map((function(n,r){var s;o&&(s=6),c&&(s=3),t&&(s=2),a&&(s=1);var d={transition:f,initial:{opacity:1},animate:{opacity:e&&r>s?0:1}};return Object(i.jsx)(W,Object(z.a)(Object(z.a)({},d),{},{children:Object(i.jsx)("div",{children:n})}),n)}))})}var A=Object(r.createContext)({isSmallHeader:!1,isExtraSmallScreen:!1,isSmallScreen:!1,isMediumScreen:!1,isLargeScreen:!1});function I(){var n=function(){var n=Object(r.useState)({previous:0,current:0}),e=Object(m.a)(n,2),t=e[0],i=e[1],a=Object(r.useRef)(!1);return Object(r.useEffect)((function(){var n=function(){i((function(n){return{previous:a.current?n.current:window.pageYOffset,current:window.pageYOffset}})),a.current||(a.current=!0)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),t}(),e=n.previous,t=n.current,a=function(){var n=Object(r.useState)({width:window.innerWidth,height:window.innerHeight}),e=Object(m.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)((function(){function n(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}}),[]),t}().width,c=a<=475,o=475<a&&a<=650,s=650<a&&a<=900,d=900<a,b=t>e;return Object(i.jsx)(A.Provider,{value:{isSmallHeader:b,isExtraSmallScreen:c,isSmallScreen:o,isMediumScreen:s,isLargeScreen:d},children:Object(i.jsxs)(L,{transition:f,animate:{height:b?50:125},children:[Object(i.jsxs)(R,{transition:f,initial:{y:30},animate:{y:b?13:30},children:[Object(i.jsx)(H,{src:u,transition:f,initial:{y:5},animate:{y:b?0:5},style:{width:25,marginRight:5}}),Object(i.jsx)(H,{src:l,transition:f,initial:{y:5},animate:{y:b||c?-60:5}}),Object(i.jsx)(S,{}),Object(i.jsx)(x,{})]}),Object(i.jsx)(Y,{})]})})}function J(){var n=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    font: normal normal bold 14px/20px Roboto;\n  }\n"]);return J=function(){return n},n}var Z=Object(d.a)(J());var F=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Z,{}),Object(i.jsx)("div",{style:{height:3e3,backgroundColor:"rebeccapurple"},children:Object(i.jsx)(I,{})})]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.97a27aa1.chunk.js.map