(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{797:function(e,a,t){__NEXT_REGISTER_PAGE("/me",function(){return e.exports=t(841),{page:e.exports.default}})},841:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),o=t(8),c=t(3),m=t(10),s=(t(6),c.b.div.withConfig({displayName:"UserDetails__StyledBody",componentId:"sc-8nx536-0"})(["font-size:2rem;width:100%;color:black;font-family:'Slabo 27px',serif;a{border-radius:25px;font-size:2.5rem;background-color:black;color:white;padding:10px 20px;margin-top:30px;text-align:center;display:inherit;}"])),u=c.b.div.withConfig({displayName:"UserDetails__Results",componentId:"sc-8nx536-1"})(["font-size:2rem;margin-top:25px;color:black;border:2px solid black;width:50%;display:inline-grid;p{margin-left:10%;}a{border-radius:25px;text-align:center;width:70%;font-size:1.5rem;margin:0 auto;background-color:black;color:white;padding:10px 50px;margin-bottom:20px;}@media only screen and (max-width:600px){display:block;width:100%;}"]),p=c.b.div.withConfig({displayName:"UserDetails__MeData",componentId:"sc-8nx536-2"})(["width:50%;display:inline-block;margin-top:25px;vertical-align:top;h2{margin:0;}h2{color:#3399ff;display:inline-block;}h3{margin-bottom:0;margin-top:0;}"]),d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null,l.a.createElement(o.b,null,function(e){var a=e.data.me;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null,l.a.createElement("h2",null,"Account Details - ",a.name," ",a.lastName),l.a.createElement("h3",null,"Email: ",a.email),l.a.createElement("h3",null,"Handle: ",a.instagramHandle),l.a.createElement("h3",null,"Shop: ",a.shop),l.a.createElement("h3",null,"Price: ",Object(m.a)(a.price)),l.a.createElement("h3",null,"Bio: ",a.bio)),l.a.createElement(u,null,!a.stripeToken&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null," ❌ you are not approved to start taking requests"),l.a.createElement(i.a,{href:{pathname:"/account",query:{id:a.id}}},l.a.createElement("a",{className:"userLink"},"Click here to start taking requests."))),a.stripeToken&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"✅ you are approved to start taking requests")),!a.bankToken&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null," ❌ you are not approved to start recieving payouts"),l.a.createElement(i.a,{href:{pathname:"/bank",query:{id:a.id}}},l.a.createElement("a",{className:"userLink"},"Click here to start recieving payouts."))),a.bankToken&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"✅ you are approved to start receiving payouts"))),l.a.createElement(i.a,{href:{pathname:"/settings"}},l.a.createElement("a",null,"Settings"))),!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Sorry this is not your account please move along ")))})))},g=t(33);a.default=function(e){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement(d,null)))}}},[[797,1,0]]]);