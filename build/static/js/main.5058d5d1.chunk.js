(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/bukitlogo.c02ea56b.png"},114:function(e,t,a){e.exports=a(282)},223:function(e,t,a){},270:function(e,t,a){},272:function(e,t,a){},276:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(111),o=a.n(r),c=a(13),i=a(14),s=a(16),u=a(15),m=a(17),h=a(11),d=a(37),E=a.n(d),g=a(283),p=a(286),v=(a(223),a(27)),b=a(284),f=a(6),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(Object(h.a)(e))),e.handleChange=e.handleChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("handleSubmit"),this.props._login(this.state.username,this.state.password),this.setState({redirectTo:"/"})}},{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(b.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement("div",{className:"LoginForm container center-align"},l.a.createElement("h3",null,"Login:"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0},"verified_user")),l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"username"},l.a.createElement("p",null,"Username:"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0},"person_outline"))),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"password"},l.a.createElement("p",null,"Password:"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0}))),l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("button",{onClick:this.handleSubmit},"Login")))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={username:"",password:"",confirmPassword:"",city:"",notes:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(Object(h.a)(e))),e.handleChange=e.handleChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/auth/signup",{username:this.state.username,password:this.state.password,city:this.state.city,notes:this.state}).then(function(e){console.log(e),e.data.errmsg?console.log("duplicate"):(console.log("youre good"),t.setState({redirectTo:"/login"}))})}},{key:"render",value:function(){return this.state.redirectTo?l.a.createElement(b.a,{to:{pathname:this.state.redirectTo}}):l.a.createElement("div",{className:"LoginForm container center-align"},l.a.createElement("h1",null,"Signup"),l.a.createElement("label",{htmlFor:"username"},l.a.createElement("p",null,"Username:"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0},"person_outline"))),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"password"},l.a.createElement("p",null,"Password:"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0},"vpn_key"))),l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"confirmPassword"},l.a.createElement("p",null,"Confirm Password:"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0},"vpn_key"))),l.a.createElement("input",{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"city"}," ",l.a.createElement("p",null,"Where do you want to go?"),l.a.createElement("p",null,l.a.createElement(f.Icon,{small:!0},"location_city"))),l.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange}),l.a.createElement("button",{onClick:this.handleSubmit},"Sign up"))}}]),t}(n.Component),k=function(e){var t;return null===e.user?t=l.a.createElement("h4",null,"Welcome to ",l.a.createElement("b",null,l.a.createElement("i",null,"Bukit List!"))):e.user.local.username&&(t=l.a.createElement("h4",null,"Welcome back, ",l.a.createElement("strong",null,e.user.local.username," "))),l.a.createElement("div",{className:"Header"},t)},j=a(112),O=a.n(j),N=function(e){return e.user?l.a.createElement("div",{className:"Home center-align"},l.a.createElement("p",null,"Be sure to check into your Dashboard to get the latest news for the cities on your Bukit List!")):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row valign-wrapper"},l.a.createElement("div",{className:"col m6 container"},l.a.createElement("img",{className:"logo",src:O.a})),l.a.createElement("div",{className:"col m6"},l.a.createElement("div",{className:"card-panel blue"},l.a.createElement("span",{className:"white-text"},l.a.createElement("h5",null,"Want to pin future destinations and keep tabs on the area?",l.a.createElement("b",null,l.a.createElement("i",null," Bukit! ")))),l.a.createElement("br",null),l.a.createElement("span",{className:"white-text"},"Bukit List is an organizer for places you\u2019ve been and places you want to go. Taking vacations or traveling can be complicated, there are so many pieces of information you need to keep tabs on for your destination \u2014 What is the weather usually like there? What kind of events occur in the area?"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"white-text"},"Instead of navigating, bookmarking multiple sites with static information. Use Bukit to enter where you want to go, and track your destinations over time! Add notes for what you want to do while you\u2019re there, and cross them off your Bucket list!")))))},C=(a(270),a(272),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={note:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(v.a)({},n,l))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("textarea",{name:"note",value:this.state.note,onChange:this.handleInputChange,rows:"10",col:"5",placeholder:"Write a new note..."}),l.a.createElement(f.Button,{waves:"light",onClick:function(){return console.log("Note: ".concat(e.state.note))}},"Add New Note",l.a.createElement(f.Icon,{right:!0},"send")))}}]),t}(l.a.Component)),S=a(113),I=a.n(S),_=(a(276),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/everything?q=New York City&pageSize=3&apiKey=e98708c0ae604c1c80859a0725b9b24a").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({isLoaded:!0,items:t.articles})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?l.a.createElement("div",null,"Error: ",t.message):a?l.a.createElement("div",null,n.map(function(e){return l.a.createElement("ul",{key:e.title},l.a.createElement("li",null,l.a.createElement("h5",null,e.title)),l.a.createElement("li",null,l.a.createElement("img",{className:"articleImage",src:e.urlToImage,width:"200"})),l.a.createElement("li",null,l.a.createElement(I.a,{format:"MM/DD/YYYY"},e.publishedAt)),l.a.createElement("li",null,l.a.createElement("a",{href:e.url,target:"_blank"},"Read Here")),l.a.createElement("hr",null))})):l.a.createElement("div",null,"Loading...")}}]),t}(l.a.Component)),L=(a(278),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,icon:"",temperature:"",description:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.apixu.com/v1/current.json?key=c8970619fa04431fad5233603180112&q=New York").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({isLoaded:!0,icon:t.current.condition.icon,temperature:t.current.temp_f,description:t.current.condition.text})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded;return t?l.a.createElement("div",null,"Error: ",t.message):a?l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null,l.a.createElement("img",{className:"weatherImage",src:this.state.icon,width:"75",alt:"weather-icon"})),l.a.createElement("li",null,"Temperature: ",this.state.temperature,"\xb0F"),l.a.createElement("li",null,"  Description: ",this.state.description))):l.a.createElement("div",null,"Loading...")}}]),t}(l.a.Component)),x=function(e){return l.a.createElement("div",null,0===e.user.locations.length?"You do not currently have any cities on your list.":l.a.createElement(f.Collapsible,{popout:!0},e.user.locations.map(function(e){return l.a.createElement(f.CollapsibleItem,{key:e.city,header:"New York City",icon:e.visited?"check_box":"check_box_outline_blank"},l.a.createElement("h4",null,"Here's some info on ",l.a.createElement("b",null,"New York City!")),e.visited?"You have visited ".concat(e.city,"!"):"You have not visited New York City yet!",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h5",null,"Weather ",l.a.createElement(f.Icon,{small:!0},"wb_sunny"))),l.a.createElement("div",null,l.a.createElement(L,{city:e.city})),l.a.createElement("li",null,l.a.createElement("h5",null,"Local News ",l.a.createElement(f.Icon,{small:!0},"web"))),l.a.createElement("div",null,l.a.createElement(_,{city:e.city}))),l.a.createElement(C,null),l.a.createElement("hr",null),l.a.createElement(f.Button,{waves:"light",onClick:function(){return console.log("remove city")}},"Remove City",l.a.createElement(f.Icon,{right:!0},"delete")))})),l.a.createElement(f.Button,{floating:!0,large:!0,className:"blue",waves:"light",icon:"add"}))},B=(l.a.Component,function(e){return l.a.createElement("div",{className:"container"},l.a.createElement(x,{user:e.user}))}),T=function(e){return e.loggedIn?l.a.createElement("nav",{className:"navbar"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.a,{to:"/dashboard",className:"nav-link"},"Dashboard")),l.a.createElement("li",null,l.a.createElement(g.a,{to:"#",className:"nav-link",onClick:e._logout},"Logout")))):l.a.createElement("nav",{className:"navbar"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.a,{to:"/",className:"nav-link"},"Bukit")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.a,{to:"/login",className:"nav-link"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.a,{to:"/signup",className:"nav-link"},"Sign-up"))))},Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={loggedIn:!1,user:null},e._logout=e._logout.bind(Object(h.a)(Object(h.a)(e))),e._login=e._login.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/auth/user").then(function(t){console.log(t.data),t.data.user?(console.log("THERE IS A USER"),e.setState({loggedIn:!0,user:t.data.user})):e.setState({loggedIn:!1,user:null})})}},{key:"_logout",value:function(e){var t=this;e.preventDefault(),console.log("logging out"),E.a.post("/auth/logout").then(function(e){console.log(e.data),200===e.status&&t.setState({loggedIn:!1,user:null})})}},{key:"_login",value:function(e,t){var a=this;E.a.post("/auth/login",{username:e,password:t}).then(function(e){console.log(e),200===e.status&&a.setState({loggedIn:!0,user:e.data.user})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(T,{_logout:this._logout,loggedIn:this.state.loggedIn}),l.a.createElement(k,{user:this.state.user}),l.a.createElement(p.a,{exact:!0,path:"/",render:function(){return l.a.createElement(N,{user:e.state.user})}}),l.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(y,{_login:e._login,_googleSignin:e._googleSignin})}}),l.a.createElement(p.a,{exact:!0,path:"/signup",component:w}),l.a.createElement(p.a,{exact:!0,path:"/dashboard",render:function(){return l.a.createElement(B,{user:e.state.user})}}))}}]),t}(n.Component),D=(a(280),a(285));o.a.render(l.a.createElement(D.a,null,l.a.createElement(Y,null)),document.getElementById("root"))}},[[114,2,1]]]);
//# sourceMappingURL=main.5058d5d1.chunk.js.map