(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,r){},29:function(e,t,r){e.exports=r.p+"static/media/star-clear.25bcd45f.svg"},30:function(e,t,r){e.exports=r.p+"static/media/star.c0210b84.svg"},31:function(e,t,r){e.exports=r.p+"static/media/film-red.f8858d24.svg"},32:function(e,t,r){e.exports=r(55)},40:function(e,t,r){},44:function(e,t,r){},46:function(e,t,r){},51:function(e,t,r){},53:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(26),s=r.n(o),c=r(14),i=r(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=r(58),l={id:null,loggedIn:!1},p=r(21),m=Object(c.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESSFUL_LOGIN":return{id:t.id,loggedIn:!0};case"SIGN_OUT":return l;default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIES":return t.movies;case"TOGGLE_FAVORITE":return e.map(function(e){return e.id===t.movieId?Object(p.a)({},e,{favorite:!e.favorite}):e});case"SET_FAVORITES":var r=t.favoriteMovies.map(function(e){return e.movie_id});return e.map(function(e){return r.includes(e.id)?Object(p.a)({},e,{favorite:!0}):e});case"CLEAR_FAVORITES":return e.map(function(e){return Object(p.a)({},e,{favorite:!1})});default:return e}}}),d=(r(40),r(2)),v=r.n(d),f=r(4),h=r(8),E=r(9),g=r(11),b=r(10),w=r(12),O=r(57),k=r(60),N=r(48),j=r(59),y=function(){var e=Object(f.a)(v.a.mark(function e(t){var r,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(v.a.mark(function e(t){var r,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bottd-movie-tracker.herokuapp.com/api/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://bottd-movie-tracker.herokuapp.com/api/users/new",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(v.a.mark(function e(t,r){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bottd-movie-tracker.herokuapp.com/api/users/favorites/new",{method:"POST",body:JSON.stringify({movie_id:t.id,user_id:r.id,title:t.title,poster_path:t.poster,release_date:t.releaseDate,vote_average:t.rating,overview:t.overview}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(v.a.mark(function e(t,r){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://bottd-movie-tracker.herokuapp.com/api/users/".concat(r.id,"/favorites/").concat(t.id),{method:"DELETE",body:JSON.stringify({movie_id:t.id,user_id:r.id}),headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(v.a.mark(function e(t){var r,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bottd-movie-tracker.herokuapp.com/api/users/".concat(t.id,"/favorites"));case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(v.a.mark(function e(){var t,r,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"26d5b93e45b773596adda2d2b99efa0f",t="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("26d5b93e45b773596adda2d2b99efa0f","&language=en-US&page=1"),e.next=4,y(t);case 4:return r=e.sent,e.next=7,F(r.results);case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(v.a.mark(function e(t){var r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.map(function(){var e=Object(f.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{title:t.title,poster:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),backdrop:"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path),overview:t.overview,releaseDate:L(t.release_date),rating:t.vote_average,favorite:!1,id:t.id});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(r));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t=e.slice(5,7),r=e.slice(8,10),a=e.slice(0,4);return"".concat(t,"/").concat(r,"/").concat(a)},D=(r(44),r(29)),R=r.n(D),M=(r(46),r(30)),U=r.n(M),A=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(b.a)(t).call(this))).handleFavorite=function(){var t=Object(f.a)(v.a.mark(function t(r){var a,n,o,s,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.props,n=a.user,o=a.toggleFavorite,s=r.id,c=r.favorite,n.loggedIn){t.next=4;break}return t.abrupt("return",void 0);case 4:c?_(r,n):S(r,n),o(s);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.handleExpand=function(t){t.target.className.includes("card-favorite-button")||e.setState({expanded:!e.state.expanded})},e.returnRatingColor=function(e){return e<6?"#BC2D2B":e>=6&&e<7?"#F5D14B":"#51B04D"},e.state={expanded:!1},e}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.movie,a=t.user,o=this.state.expanded,s={width:"".concat(10*this.props.movie.rating,"%"),background:this.returnRatingColor(r.rating)};return n.a.createElement("div",{className:o?"Card expanded-card":"Card",style:{backgroundImage:"url("+r.backdrop+")"},onClick:this.handleExpand},n.a.createElement("div",{className:"expanded-background"}),n.a.createElement("div",{className:"card-inner-wrapper"},n.a.createElement("h3",{className:"movie-title"},n.a.createElement("div",{className:"movie-rating"},!o&&n.a.createElement("div",null,"Rating ",r.rating)),r.title,n.a.createElement("button",{className:"card-favorite-button\n                ".concat(r.favorite&&a.loggedIn?"fav-btn-active":"fav-btn-inactive"),onClick:function(){return e.handleFavorite(r)}},n.a.createElement("img",{className:"card-favorite-button-star",alt:"",src:r.favorite?U.a:R.a}))),n.a.createElement("div",{className:"expanded-lower-container"},n.a.createElement("img",{src:r.poster,alt:"",className:"poster-image"}),n.a.createElement("div",{className:"lower-middle-expanded"},n.a.createElement("p",{className:"card-overview"},n.a.createElement("strong",null,"Description"),n.a.createElement("br",null),r.overview),o&&n.a.createElement("div",{className:"rating-container"},n.a.createElement("div",{className:"rating-bar",style:s},r.rating," / 10"))),n.a.createElement("p",{className:"card-release-date"},n.a.createElement("strong",null,"Release Date"),n.a.createElement("br",null),r.releaseDate))))}}]),t}(a.Component),V=Object(i.b)(function(e){return{user:e.user}},function(e){return{toggleFavorite:function(t){return e(function(e){return{type:"TOGGLE_FAVORITE",movieId:e}}(t))}}})(A),G=function(e){var t=e.movies.map(function(e){return n.a.createElement(V,{movie:e,key:e.title})});return n.a.createElement("div",{className:"CardContainer"},t)},P=r(61),B=r(31),J=r.n(B),X=Object(i.b)(function(e){return{user:e.user}},function(e){return{signOut:function(){return e({type:"SIGN_OUT"})},clearFavorites:function(t){return e({type:"CLEAR_FAVORITES",favoriteMovies:t})}}})(function(e){var t=e.user,r=e.signOut,a=e.movies,o=e.clearFavorites,s=e.enableError;return n.a.createElement("div",{className:"MainPage"},n.a.createElement("div",{className:"main-header"},n.a.createElement("button",{className:"all-favorites",onClick:s},n.a.createElement(P.a,{to:"/favorites",className:"nav-link"},"Favorites")),n.a.createElement("div",{className:"header-title"},n.a.createElement(P.a,{to:"/"},n.a.createElement("img",{className:"main-logo",alt:"",src:J.a}),n.a.createElement("h3",{className:"header-text"},"MovieTracker"))),t.loggedIn?n.a.createElement("button",{className:"sign-out",onClick:function(e){e.preventDefault(),o(a),r()}},n.a.createElement(P.a,{to:"/",className:"nav-link"},"Sign Out")):n.a.createElement("button",{className:"sign-in"},n.a.createElement(P.a,{to:"/login",className:"nav-link"},"Sign In"))),n.a.createElement("div",{className:"header-container-splitter"}),n.a.createElement(G,{movies:a}))}),H=r(17),W=(r(25),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(b.a)(t).call(this))).handleChange=function(t){var r=t.target,a=r.name,n=r.value;t.preventDefault(),e.setState(Object(H.a)({},a,n))},e.submitLogin=function(){var t=Object(f.a)(v.a.mark(function t(r){var a,n,o,s,c,i,u,l;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=e.state,n=a.email,o=a.password,s=e.props,c=s.loginUser,i=s.setFavorites,t.next=5,x({email:n,password:o});case 5:if(!(u=t.sent)){t.next=14;break}return c(u),t.next=10,I(u);case 10:l=t.sent,i(l),t.next=15;break;case 14:e.setState({error:"Email and Password did not match"});case 15:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.toggleCreate=function(){var t=Object(f.a)(v.a.mark(function t(r){var a,n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=e.state.create,t.next=4,e.newUserResponse(r);case 4:n=t.sent,a&&n.status>=400?(e.setState({error:"Email has already been used"}),e.clearInputs()):(!a||n.status<=400)&&e.setState({create:!a,error:""});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.newUserResponse=function(){var t=Object(f.a)(v.a.mark(function t(r){var a,n,o,s;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=e.state,n=a.email,o=a.password,s=a.name,t.next=4,C({email:n,password:o,name:s});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.clearInputs=function(){e.setState({email:"",password:"",name:""})},e.state={email:"",password:"",name:"",error:"",create:!1},e}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.password,a=e.create,o=e.error,s=e.name;return n.a.createElement("div",{className:"Login"},n.a.createElement("form",{className:"Login-form"},n.a.createElement("h1",{className:"Login-header"}," Movie Tracker "),n.a.createElement("h3",null," Login "),a?n.a.createElement("input",{name:"name",value:s,type:"text",placeholder:"Name",onChange:this.handleChange}):null,n.a.createElement("input",{name:"email",value:t,type:"text",placeholder:"Email address",onChange:this.handleChange}),n.a.createElement("input",{name:"password",value:r,type:"password",placeholder:"Password",onChange:this.handleChange}),a?null:n.a.createElement("button",{type:"submit",className:"login-button",onClick:this.submitLogin},"Login"),n.a.createElement("button",{className:"create-user",onClick:this.toggleCreate},"Create User"),o.length?n.a.createElement("div",{className:"error"},o):null,n.a.createElement(P.a,{to:"/",className:"home-link"},"Home")))}}]),t}(a.Component)),Y=Object(i.b)(function(e){return{user:e.user}},function(e){return{loginUser:function(t){return e(function(e){return{type:"SUCCESSFUL_LOGIN",id:e.id}}(t))},setFavorites:function(t){return e(function(e){return{type:"SET_FAVORITES",favoriteMovies:e}}(t))}}})(W),$=(r(51),r(53),function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.message,r=e.closeError,a=e.user;return n.a.createElement("div",{className:"ErrorMessage"},n.a.createElement("div",{className:"ErrorMessage_inner"},n.a.createElement("h1",{className:"Login-header"}," Movie Tracker "),n.a.createElement("p",null,t),n.a.createElement("button",{className:"home-button-error",onClick:r},n.a.createElement(P.a,{to:"/",className:"home-link-error"},"Home")),!a.loggedIn&&n.a.createElement("button",{className:"login-button-error",onClick:r},n.a.createElement(P.a,{to:"/login",className:"login-link-error"},"Login/Create Account"))))}}]),t}(a.Component)),q=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(g.a)(this,Object(b.a)(t).call(this))).filterFavorites=function(){return e.props.movies.filter(function(e){return e.favorite})},e.enableError=function(){var t=e.props.user.loggedIn,r=e.filterFavorites();t&&r.length||e.toggleError()},e.toggleError=function(){e.setState({showError:!e.state.showError})},e.state={showError:!1},e}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,this.props.setMovies(t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.user.loggedIn,r=this.props,a=r.movies,o=r.user,s=this.state.showError;return n.a.createElement("div",{className:"App"},n.a.createElement(k.a,null,n.a.createElement(N.a,{exact:!0,path:"/",render:function(){return n.a.createElement(X,{movies:a,enableError:e.enableError})}}),n.a.createElement(N.a,{exact:!0,path:"/login",render:function(){return t?n.a.createElement(j.a,{to:"/"}):n.a.createElement(Y,null)}}),n.a.createElement(N.a,{exact:!0,path:"/favorites",render:function(){return!t&&s?n.a.createElement($,{closeError:e.toggleError,message:"Please login or create an account to add/view favorites.",user:o}):t&&s?n.a.createElement($,{closeError:e.toggleError,message:"You currently have no favorites selected.",user:o}):n.a.createElement(X,{movies:e.filterFavorites(),enableError:e.enableError,user:o})}}),n.a.createElement(N.a,{render:function(){return n.a.createElement(X,{movies:a})}})))}}]),t}(a.Component),z=Object(O.a)(Object(i.b)(function(e){return{user:e.user,movies:e.movies}},function(e){return{setMovies:function(t){return e(function(e){return{type:"SET_MOVIES",movies:e}}(t))}}})(q)),K=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Q=Object(c.c)(m,K),Z=n.a.createElement(i.a,{store:Q},n.a.createElement(u.a,null,n.a.createElement(z,null)));s.a.render(Z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.acbeb23b.chunk.js.map