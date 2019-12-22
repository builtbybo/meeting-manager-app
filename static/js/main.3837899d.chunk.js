(this["webpackJsonpmeet-manage-spa"]=this["webpackJsonpmeet-manage-spa"]||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(22),l=a.n(r),i=(a(29),a(30),a(4)),c=a(5),m=a(8),o=a(6),u=a(7),d=a(3),h=a(14),p=a.n(h);a(38),a(41);p.a.initializeApp({apiKey:"AIzaSyDIFGODpVd2lrePeiGt75LVUf0bOEyecgk",authDomain:"builtbyboplayground.firebaseapp.com",databaseURL:"https://builtbyboplayground.firebaseio.com",projectId:"builtbyboplayground",storageBucket:"builtbyboplayground.appspot.com",messagingSenderId:"390222402869",appId:"1:390222402869:web:556dd9c40b3812d418e87c",measurementId:"G-5LJXBL266W"});new p.a.auth.GoogleAuthProvider,p.a.auth();var g=p.a,b=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return s.a.createElement("div",{className:"container text-center"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-10 col-md-10 col-lg-8 col-xl-7"},s.a.createElement("div",{className:"display-4 text-primary mt-3 mb-2"},"Meeting Manager"),s.a.createElement("p",{className:"lead",style:{fontSize:"1.4em",fontWeight:200}},"This simple app creates meetings, allows people to check in, and picks random users to award giveaways. It's a good example of a Single Page Application which includes connection to a database and routing. It's a practical way to learn",s.a.createElement(d.a,{to:"https://reactjs.org/"}," React")," with",s.a.createElement(d.a,{to:"https://firebase.google.com"}," Firebase"),"."),null==e&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{to:"/register",className:"btn btn-outline-primary mr-2"},"Register")," ",s.a.createElement(d.a,{to:"/login",className:"btn btn-outline-primary mr-2"},"Log In")),e&&s.a.createElement(d.a,{to:"/meetings",className:"btn btn-primary"},"Meetings"))))}}]),t}(n.Component)),f=a(10),v=a(9),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.theMessage;return s.a.createElement("div",{className:"col-12 alert alert-danger px-3"},e)}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={email:"",password:"",errorMessage:null},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(f.a)({},t,a))}},{key:"handleSubmit",value:function(e){var t=this,a={email:this.state.email,password:this.state.password};e.preventDefault(),g.auth().signInWithEmailAndPassword(a.email,a.password).then((function(){Object(d.c)("/meetings")})).catch((function(e){null!==e.message?t.setState({errorMessage:e.message}):t.setState({errorMessage:null})}))}},{key:"render",value:function(){return s.a.createElement("form",{className:"mt-3",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"card bg-light"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"font-weight-light mb-3"},"Log in"),s.a.createElement("section",{className:"form-group"},null!==this.state.errorMessage?s.a.createElement(E,{theMessage:this.state.errorMessage}):null,s.a.createElement("label",{className:"form-control-label sr-only",htmlFor:"Email"},"Email"),s.a.createElement("input",{required:!0,className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),s.a.createElement("section",{className:"form-group"},s.a.createElement("input",{required:!0,className:"form-control",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group text-right mb-0"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Log in"))))))))}}]),t}(n.Component),y=a(11),O=a(13),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).deleteMeeting=function(e,t){e.preventDefault(),g.database().ref("meetings/".concat(a.props.userID,"/").concat(t)).remove()},a.deleteMeeting=a.deleteMeeting.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.meetings.map((function(t){return s.a.createElement("div",{className:"list-group-item d-flex",key:t.meetingID},s.a.createElement("section",{className:"btn-group align-self-center",role:"group","aria-label":"Meeting Options"},s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",title:"Delete Meeting",onClick:function(a){return e.deleteMeeting(a,t.meetingID)}},s.a.createElement(y.c,null)),s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",title:"Check In",onClick:function(){return Object(d.c)("/checkin/".concat(e.props.userID,"/").concat(e.meetingID))}},s.a.createElement(y.a,null)),s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",title:"Attendees List",onClick:function(){return Object(d.c)("/attendees/".concat(e.props.userID,"/").concat(e.meetingID))}},s.a.createElement(O.a,null))),s.a.createElement("section",{className:"pl-3 text-left align-self-center"},t.meetingName))}));return s.a.createElement("div",null,t)}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={meetingName:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(f.a)({},t,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addMeeting(this.state.meetingName),this.setState({meetingName:""})}},{key:"render",value:function(){return s.a.createElement("div",{className:"text-center mt-4"},s.a.createElement("div",{className:"container mt-4"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-8 text-center"},s.a.createElement("h1",{className:"font-weight-light"},"Add a Meeting"),s.a.createElement("div",{className:"card bg-light"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("form",{className:"formgroup",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input-group input-group-lg"},s.a.createElement("input",{type:"text",className:"form-control",name:"meetingName",placeholder:"Meeting name","aria-describedby":"buttonAdd",value:this.state.meetingName,onChange:this.handleChange}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{type:"submit",className:"btn btn-sm btn-info",id:"buttonAdd"},"+"))))))),s.a.createElement("div",{className:"col-11 col-md-6 text-center"},s.a.createElement("div",{className:"card border-top-0 rounded-0"},this.props.meetings&&this.props.meetings.length?s.a.createElement("div",{className:"card-body py-2"},s.a.createElement("h4",{className:"card-title font-weight-light m-0"},"Your Meetings...")):null,this.props.meetings&&s.a.createElement("div",{className:"list-group list-group-flush"},s.a.createElement(j,{userID:this.props.userID,meetings:this.props.meetings})))))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={displayName:"",email:""},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(f.a)({},t,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),g.database().ref("meetings/".concat(this.props.userID,"/").concat(this.props.meetingID,"/attendees")).push({attendeeName:this.state.displayName,atttendeeEmail:this.state.email,star:!1}),Object(d.c)("/attendees/".concat(this.props.userID,"/").concat(this.props.meetingID))}},{key:"render",value:function(){return s.a.createElement("form",{className:"mt-3",onSubmit:this.handleChange},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"card bg-light"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"font-weight-light mb-3"},"Check in"),s.a.createElement("section",{className:"form-group"},s.a.createElement("label",{className:"form-control-label sr-only",htmlFor:"displayName"},"Name"),s.a.createElement("input",{required:!0,className:"form-control",type:"text",id:"displayName",name:"displayName",placeholder:"Name",value:this.state.displayName,onChange:this.handleChange})),s.a.createElement("section",{className:"form-group"},s.a.createElement("label",{className:"form-control-label sr-only",htmlFor:"Email"},"Email"),s.a.createElement("input",{required:!0,className:"form-control",type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group text-right mb-0"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Check in"))))))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).deleteAttendee=function(e,t,n){e.preventDefault();var s=a.props.adminUser;g.database().ref("meetings/".concat(s,"/").concat(t,"/attendees/").concat(n)).remove()},a.toggleStar=function(e,t,n,s){e.preventDefault();var r=a.props.adminUser,l=g.database().ref("meetings/".concat(r,"/").concat(n,"/attendees/").concat(s,"/star"));void 0===t?l.set(!0):l.set(!t)},a.deleteAttendee=a.deleteAttendee.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.adminUser===this.props.userID,a=this.props.attendees.map((function(a){return s.a.createElement("div",{className:"col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1",key:a.attendeeID},s.a.createElement("div",{className:"card "},s.a.createElement("div",{className:"card-body px-3 py-2 d-flex align-items-center "+(t?"":"justify-content-center")},t&&s.a.createElement("div",{className:"btn-group pr-2"},s.a.createElement("button",{className:"btn btn-sm "+(a.star?"btn-info":"btn-outline-secondary"),tite:"Give user a star",onClick:function(t){return e.toggleStar(t,a.star,e.props.meetingID,a.attendeeID)}},s.a.createElement(O.c,null)),s.a.createElement("a",{href:"mailto:".concat(a.attendeeEmail),className:"btn btn-sm btn-outline-secondary",title:"Mail Attendee"},s.a.createElement(O.b,null)),s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",tite:"Delete Attendee",onClick:function(t){return e.deleteAttendee(t,e.props.meetingID,a.attendeeID)}},s.a.createElement(O.d,null))),s.a.createElement("div",null,a.attendeeName))))}));return s.a.createElement("div",{className:"row justify-content-center"},a)}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={searchQuery:"",allAttendees:[],displayAttendees:[]},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.resetQuery=a.resetQuery.bind(Object(v.a)(a)),a.chooseRandom=a.chooseRandom.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.database().ref("meetings/".concat(this.props.userID,"/").concat(this.props.meetingID,"/attendees")).on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push({attendeeID:s,attendeeName:a[s].attendeeName,attendeeEmail:a[s].attendeeEmail,star:a[s].star});e.setState({allAttendees:n,displayAttendees:n})}))}},{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(f.a)({},t,a))}},{key:"chooseRandom",value:function(){var e=Math.floor(Math.random()*this.state.allAttendees.length);this.resetQuery(),this.setState({displayAttendees:[this.state.allAttendees[e]]})}},{key:"resetQuery",value:function(){this.setState({displayAttendees:this.state.allAttendees,searchQuery:""})}},{key:"render",value:function(){var e=this,t=this.state.displayAttendees.filter((function(t){return t.attendeeName.toLowerCase().match(e.state.searchQuery.toLowerCase())&&!0}));return s.a.createElement("div",{className:"container mt-4"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h1",{className:"font-weight-light text-center"},"Attendees"),s.a.createElement("div",{className:"card bg-light mb-4"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("div",{className:"input-group input-group-lg"},s.a.createElement("input",{type:"text",name:"searchQuery",value:this.state.searchQuery,placeholder:"Search Attendees",className:"form-control",onChange:this.handleChange}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{className:"btn btn-sm btn-outline-info ",title:"Pick a random attendee",onClick:function(){return e.chooseRandom()}},s.a.createElement(y.b,null)),s.a.createElement("button",{className:"btn btn-sm btn-outline-info ",title:"Reset Search",onClick:function(){return e.resetQuery()}},s.a.createElement(y.d,null)))))))),s.a.createElement(k,{userID:this.props.userID,meetingID:this.props.meetingID,adminUser:this.props.adminUser,attendees:t}))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={displayName:"",email:"",passOne:"",passTwo:"",errorMessage:null},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.name,n=e.target.value;this.setState(Object(f.a)({},a,n),(function(){t.state.passOne!==t.state.passTwo?t.setState({errorMessage:"Passwords do not match!"}):t.setState({errorMessage:null})}))}},{key:"handleSubmit",value:function(e){var t=this,a={displayName:this.state.displayName,email:this.state.email,password:this.state.passOne};e.preventDefault(),g.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(){t.props.registerUser(a.displayName)})).catch((function(e){null!==e.message?t.setState({errorMessage:e.message}):t.setState({errorMessage:null})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"text-center mt-4"},s.a.createElement("form",{className:"mt-3",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-lg-8"},s.a.createElement("div",{className:"card bg-light"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"font-weight-light mb-3"},"Register"),s.a.createElement("div",{className:"form-row"},null!==this.state.errorMessage?s.a.createElement(E,{theMessage:this.state.errorMessage}):null,s.a.createElement("section",{className:"col-sm-12 form-group"},s.a.createElement("label",{className:"form-control-label sr-only",htmlFor:"displayName"},"Display Name"),s.a.createElement("input",{className:"form-control",type:"text",id:"displayName",placeholder:"Display Name",name:"displayName",required:!0,value:this.state.displayName,onChange:this.handleChange}))),s.a.createElement("section",{className:"form-group"},s.a.createElement("label",{className:"form-control-label sr-only",htmlFor:"email"},"Email"),s.a.createElement("input",{className:"form-control",type:"email",id:"email",placeholder:"Email Address",required:!0,name:"email",value:this.state.email,onChange:this.handleChange})),s.a.createElement("div",{className:"form-row"},s.a.createElement("section",{className:"col-sm-6 form-group"},s.a.createElement("input",{className:"form-control",type:"password",name:"passOne",placeholder:"Password",value:this.state.passOne,onChange:this.handleChange})),s.a.createElement("section",{className:"col-sm-6 form-group"},s.a.createElement("input",{className:"form-control",type:"password",required:!0,name:"passTwo",placeholder:"Repeat Password",value:this.state.passTwo,onChange:this.handleChange}))),s.a.createElement("div",{className:"form-group text-right mb-0"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Register")))))))))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userName,a=e.logOutUser;return s.a.createElement("div",{className:"text-center mt-4"},s.a.createElement("span",{className:"text-secondary font-weight bold pl-1"},"Welcome ",t,","),s.a.createElement("br",null),s.a.createElement(d.a,{to:"/login",className:"text-secondary font-weight-bold pl-1",onClick:function(e){return a(e)}},"Log Out"))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logOutUser;return s.a.createElement("nav",{className:"site-nav family-sans navbar navbar-expand bg-dark navbar-dark higher text-bold"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement(d.a,{to:"/",className:"navbar-brand"},s.a.createElement(y.e,{className:"mr-1"})," Meeting Manager"),s.a.createElement("div",{className:"navbar-nav ml-auto"},t&&s.a.createElement(d.a,{className:"nav-item nav-link",to:"/meetings"},"meetings"),!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"nav-item nav-link",to:"/login"},"log in"),s.a.createElement(d.a,{className:"nav-item nav-link",to:"/register"},"register")),t&&s.a.createElement(d.a,{className:"nav-item nav-link",to:"/login",onClick:function(e){return a(e)}},"log out"))))}}]),t}(n.Component),A=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).registerUser=function(t){g.auth().onAuthStateChanged((function(a){a.updateProfile({displayName:t}).then((function(){e.setState({user:a,displayName:a.displayName,userID:a.uid}),Object(d.c)("/meetings")}))}))},e.logOutUser=function(t){t.preventDefault(),e.setState({displayName:null,userID:null,user:null}),g.auth().signOut().then((function(){Object(d.c)("/login")}))},e.addMeeting=function(t){g.database().ref("meetings/".concat(e.state.user.uid)).push({meetingName:t})},e.state={user:null,displayName:null,userID:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.auth().onAuthStateChanged((function(t){t?(e.setState({user:t,displayName:t.displayName,userID:t.uid}),g.database().ref("meetings/"+t.uid).on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push({meetingID:s,meetingName:a[s].meetingName});e.setState({meetings:n,howManyMeetings:n.length})}))):e.setState({user:null})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{user:this.state.user,logOutUser:this.logOutUser}),this.state.user&&s.a.createElement(S,{userName:this.state.displayName,logOutUser:this.logOutUser}),s.a.createElement(d.b,null,s.a.createElement(b,{path:"/",user:this.state.user}),s.a.createElement(N,{path:"/login"}),s.a.createElement(C,{path:"/meetings",meetings:this.state.meetings,addMeeting:this.addMeeting,userID:this.state.userID}),s.a.createElement(D,{path:"/attendees/:userID/:meetingID",userID:this.state.userID}),s.a.createElement(w,{path:"/checkin/:userID/:meetingID"}),s.a.createElement(I,{path:"/register",registerUser:this.registerUser})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.3837899d.chunk.js.map