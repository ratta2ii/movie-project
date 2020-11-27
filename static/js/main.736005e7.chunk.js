/*! For license information please see main.736005e7.chunk.js.LICENSE.txt */
(this["webpackJsonpmovie-ratings-app"]=this["webpackJsonpmovie-ratings-app"]||[]).push([[0],{86:function(e,t,o){},87:function(e,t,o){"use strict";o.r(t),o.d(t,"store",(function(){return ue}));var n=o(2),r=o(0),i=o.n(r),c=o(15),a=o.n(c),s=o(18),l=o(7),d=o(31),m=o(22),j=o(112),u=o(111),b="REQUEST_MOVIES",p="GET_MOVIES_SUCCESS",f="GET_MOVIES_FAILURE",h="REQUEST_MOVIE_INFO",x="GET_MOVIE_INFO_SUCCESS",g="GET_MOVIE_INFO_FAILURE",O=function(e){return function(t,o){fetch("https://www.omdbapi.com/?apikey=".concat("28eba253","&plot=short&s=").concat(e)).then((function(e){return e.json()})).then((function(e){var o;t((o=e.Search,{type:p,movies:o}))}),(function(e){console.log(e),t(function(e){return{type:f,error:e}}(e))}))}},v=o(108),I=o(116),S=o(115),N=o(113),w=o(107),T=Object(w.a)((function(e){return{root:{width:"100%",position:"fixed",bottom:12,textAlign:"center"},text:{color:"#2b3335",fontSize:"1rem",fontFamily:"monospace"}}})),E=function(e){var t=T();return Object(n.jsx)(u.a,{className:t.root,children:Object(n.jsx)(v.a,{variant:"h6",className:t.text,children:"Movie Ratings App by Trevor Mackin"})})},y=Object(w.a)((function(e){return{root:{width:"100vw"},title:{color:"#f5bc16",fontFamily:"'Acme', fantasy, sans-serif",paddingTop:150,marginBottom:30,fontSize:70,textAlign:"center",wordSpacing:".6rem"},formBox:{textAlign:"center"},FormControl:{width:500,backgroundColor:"white"},inputField:{fontSize:20,paddingLeft:10,backgroundColor:"white","&hover":{backgroundColor:"white"}},findMovieButton:{color:"#ffffff",padding:18.5,marginLeft:5,backgroundColor:"#3f51b5",borderTopLeftRadius:0,borderBottomLeftRadius:0,"&:hover":{background:"#f00"}}}})),V=Object(m.b)((function(e){return{movies:e.moviesSlice.movies,moviesError:e.moviesSlice.error}}))((function(e){var t=e.dispatch,o=y(),i=Object(r.useState)(""),c=Object(d.a)(i,2),a=c[0],s=c[1];return Object(n.jsxs)(u.a,{className:o.root,children:[Object(n.jsxs)(u.a,{children:[Object(n.jsx)(v.a,{className:o.title,children:"SEARCH MOVIES BY TITLE"}),Object(n.jsxs)(u.a,{className:o.formBox,children:[Object(n.jsxs)(I.a,{className:o.FormControl,variant:"filled",children:[Object(n.jsx)(S.a,{htmlFor:"filled-adornment-amount",children:"Enter Movie Title Here"}),Object(n.jsx)(N.a,{className:o.inputField,onChange:function(e){s(e.target.value)}})]}),Object(n.jsx)(j.a,{className:o.findMovieButton,onClick:function(){t(O(a)),e.history.push("/movies")},children:"FIND MOVIE"})]}),Object(n.jsx)(u.a,{})]}),Object(n.jsx)(E,{})]})})),C=o(109),F=o(110),k=Object(w.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"80vh"},paper:{padding:20,width:200,backgroundColor:"#223037",borderTop:"5px solid #2f3940",borderRight:"5px solid #2f3940",borderBottom:"5px solid #2f3940",borderLeft:"5px solid #2f3940",height:300,marginBottom:15,cursor:"pointer"},moviePosterImg:{width:200,height:300}}})),L=function(e){var t=e.handleMovieInfo,o=e.poster,r=e.imdbID,i=k();return Object(n.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(n.jsx)(F.a,{className:i.paper,onClick:function(){return t(r)},children:Object(n.jsx)("img",{className:i.moviePosterImg,src:o,alt:"movie poster"})})})},B=Object(w.a)((function(e){return{root:{padding:"10% 13%"},returnHomeBox:{marginTop:120,textAlign:"center"},returnHomeBtn:{textDecoration:"none",fontSize:16,color:"white",padding:"10px 50px 10px 50px","&:hover":{color:"red"}}}})),D=function(e){return function(t,o){fetch("https://www.omdbapi.com/?apikey=".concat("28eba253","&plot=short&i=").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:x,movieInfo:e})}),(function(e){console.log(e),t(function(e){return{type:g,error:e}}(e))}))}},A=Object(m.b)((function(e){return{movies:e.moviesSlice.movies,moviesError:e.moviesSlice.error,isLoading:e.moviesSlice.isLoading}}))((function(e){var t=e.dispatch,o=e.movies,r=e.moviesError,c=e.isLoading,a=B(),l=function(o){t(D(o)),setTimeout((function(){e.history.push("/movie-info")}),200)};return o&&o.length>0?Object(n.jsxs)(u.a,{className:a.root,children:[Object(n.jsx)(C.a,{container:!0,spacing:8,justify:"center",children:o.map((function(e,t){var o=e.Poster;return o&&"N/A"!==o||(o="https://via.placeholder.com/200x300.png/000000/FFFFFF?text=NO POSTER"),Object(n.jsx)(L,{handleMovieInfo:l,poster:o,imdbID:e.imdbID},t)}))}),Object(n.jsx)(u.a,{className:a.returnHomeBox,children:Object(n.jsx)(j.a,{className:a.returnHomeBtn,component:s.b,to:"/",children:"SEARCH A DIFFERENT TITLE"})})]}):r?Object(n.jsxs)(i.a.Fragment,{children:["Error: ",r.message]}):c?Object(n.jsx)(u.a,{children:"...still loading"}):Object(n.jsx)(u.a,{children:"Sorry, we cannot find any movies with that name."})})),M=o(20),R=o(61),z=o.n(R),H=o(62),_=o.n(H),P={apiKey:"".concat("AIzaSyDYM0qdH4W5vnXn86ZcATr65lu5PzNRW9A"),authDomain:"movie-project-16799.firebaseapp.com",databaseURL:"https://movie-project-16799.firebaseio.com",projectId:"movie-project-16799",storageBucket:"movie-project-16799.appspot.com",messagingSenderId:"818486198423",appId:"1:818486198423:web:bbcfdf7953ea52782ca9d2",measurementId:"G-Z10T2TEQM1"},G=o(43),U=o.n(G);o(81);U.a.apps.length||U.a.initializeApp(P);var W=U.a.firestore(),Q=o(60),J=o.n(Q),Y=Object(w.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"79.5vh"},paperCon:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(27, 38, 43)",color:"white",width:750,fontFamily:"sans-serif"},posterImgGridItem:{display:"flex",justifyContent:"center",paddingTop:50},posterImgCon:{backgroundColor:"#223037",width:"60%",minHeight:100,maxHeight:365,padding:"15px 15px 10px"},posterImg:{width:"100%",maxHeight:340},infoBox:{padding:"50px 50px 50px 0"},movieTitle:{fontSize:"1.6rem",fontFamily:"sans-serif",marginTop:20,color:"#f5bc16",lineHeight:"2.1rem"},dirNdate:{color:"#89b9df",fontSize:".9rem",marginTop:5},moviePlot:{fontSize:"1rem",letterSpacing:".02rem",lineHeight:"1.3",marginTop:25},actionAreaGridCon:{marginTop:50,borderTop:"1px solid #29383f",height:65,display:"flex",alignItems:"center"},backContainer:{display:"flex",alignItems:"center",marginLeft:62,height:40,marginTop:3},arrowIcon:{color:"#637c90"},backButton:{fontSize:".8rem",marginLeft:-8,color:"#637c90"},votesBox:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:50,height:40,color:"#637c90"},voteText:{fontSize:".8rem",marginBottom:10},downThumbIcon:{margin:"0 2px 0 10px",fontSize:"large",cursor:"pointer"},upThumbIcon:{margin:"0 10px 0 2px",fontSize:"large",cursor:"pointer"}}})),Z=W.collection("movies"),q=function(e){Z.doc(e.imdbID).set(e)},K=Object(m.b)((function(e){return{movieInfo:e.movieInfoSlice.movieInfo,movieInfoError:e.movieInfoSlice.error,isLoading:e.movieInfoSlice.isLoading}}))((function(e){var t=e.movieInfo,o=e.movieInfoError,c=e.isLoading,s=t.Poster,l=t.Title,m=t.Director,b=t.Released,p=t.Plot,f=Object(r.useState)({upVotes:0,downVotes:0}),h=Object(d.a)(f,2),x=h[0],g=h[1],O=Object(r.useState)(!1),I=Object(d.a)(O,2),S=I[0],N=I[1],w=Object(r.useState)(!1),T=Object(d.a)(w,2),y=T[0],V=T[1],k=Y();Object(r.useEffect)((function(){t.imdbID&&W.collection("movies").where("imdbID","==",t.imdbID).get().then((function(e){var t;e.forEach((function(e){return"upVotes"in(t=e.data())&&g(t),!1}))})).catch((function(e){console.log(e.message)}))}),[t.imdbID]),Object(r.useEffect)((function(){return function(){return console.log("unmounting...")}}),[]);return t?Object(n.jsxs)(u.a,{className:k.root,children:[Object(n.jsx)(F.a,{className:k.paperCon,children:Object(n.jsxs)(C.a,{container:!0,children:[Object(n.jsx)(C.a,{item:!0,xs:12,md:6,className:k.posterImgGridItem,children:Object(n.jsx)(u.a,{className:k.posterImgCon,children:Object(n.jsx)("img",{src:"N/A"!==(s||s)?s:"https://via.placeholder.com/200x300.png/000000/FFFFFF?text=NO POSTER",alt:"movie poster",className:k.posterImg})})}),Object(n.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(C.a,{container:!0,children:Object(n.jsxs)(u.a,{className:k.infoBox,children:[Object(n.jsxs)(C.a,{item:!0,xs:12,children:[Object(n.jsx)(v.a,{className:k.movieTitle,children:l}),Object(n.jsxs)(v.a,{className:k.dirNdate,children:["Release Date: (",b,")"]}),Object(n.jsxs)(v.a,{className:k.dirNdate,children:["Director by ",m]})]}),Object(n.jsx)(C.a,{item:!0,xs:12,children:Object(n.jsx)(v.a,{className:k.moviePlot,children:p})})]})})}),Object(n.jsxs)(C.a,{container:!0,className:k.actionAreaGridCon,children:[Object(n.jsx)(C.a,{item:!0,md:6,children:Object(n.jsxs)(u.a,{className:k.backContainer,onClick:function(){e.history.push("/movies")},children:[Object(n.jsx)(J.a,{className:k.arrowIcon}),Object(n.jsx)(j.a,{className:k.backButton,children:"Back to Movies"})]})}),Object(n.jsx)(C.a,{item:!0,md:6,children:Object(n.jsx)(u.a,{className:k.votesBox,children:Object(n.jsxs)(v.a,{variant:"h6",children:[Object(n.jsxs)(v.a,{className:k.voteText,variant:"title",children:["DOWN VOTES  [ ",x.downVotes," ]"]}),Object(n.jsx)(z.a,{className:k.downThumbIcon,onClick:function(){return function(){if(S)return!1;var e={upVotes:x.upVotes,downVotes:x.downVotes+1,imdbID:t.imdbID,title:l};y?(e.downVotes=x.downVotes-1,q(e),V(!1),g(Object(M.a)(Object(M.a)({},x),{},{downVotes:x.downVotes-1}))):(e.downVotes=x.downVotes+1,q(e),V(!0),g(Object(M.a)(Object(M.a)({},x),{},{downVotes:x.downVotes+1})))}()},style:{color:y?"#89b9df":"#637c90",cursor:y||!y&&!S?"pointer":"no-drop"}}),Object(n.jsx)(_.a,{className:k.upThumbIcon,onClick:function(){return function(){if(y)return!1;var e={upVotes:x.upVotes,downVotes:x.downVotes,imdbID:t.imdbID,title:l};S?(e.upVotes=x.upVotes-1,q(e),N(!1),g(Object(M.a)(Object(M.a)({},x),{},{upVotes:x.upVotes-1}))):(e.upVotes=x.upVotes+1,q(e),N(!0),g(Object(M.a)(Object(M.a)({},x),{},{upVotes:x.upVotes+1})))}()},style:{color:S?"#89b9df":"#637c90",cursor:S||!S&&!y?"pointer":"no-drop"}}),Object(n.jsxs)(v.a,{className:k.voteText,variant:"title",children:["[ ",x.upVotes," ] UP VOTES"]})]})})})]})]})}),Object(n.jsx)(E,{})]}):o?Object(n.jsxs)(i.a.Fragment,{children:["Error: ",o.message]}):c?Object(n.jsx)(u.a,{children:"...still loading"}):Object(n.jsxs)(u.a,{children:[Object(n.jsx)(v.a,{variant:"h4",children:"There seems to be a problem."}),Object(n.jsx)(a.a,{to:"/",children:"Return Home"})]})})),X=Object(w.a)((function(e){return{root:{width:"100vw",height:"20vh",backgroundColor:"#f4433699",position:"absolute",top:0,left:0,borderBottom:"5px solid red"},homeIcon:{color:"#ffffff",fontSize:100,position:"fixed",top:50,right:50}}})),$=function(e){var t=X();return Object(n.jsx)(u.a,{className:t.root})},ee=o(63),te=o.n(ee),oe=Object(w.a)((function(e){return{homeIcon:{top:30,color:"#111617cc",right:30,position:"absolute",fontSize:50}}})),ne=function(e){var t=oe();return Object(n.jsx)(u.a,{className:t.root,children:Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)(te.a,{className:t.homeIcon})})})},re=Object(w.a)((function(e){return{root:{fontSize:16,fontFamily:"monospace",textAlign:"center",color:"red",marginTop:170},errorText:{color:"red",fontFamily:"monospace",paddingTop:100},linkText:{textDecoration:"none",color:"dodgerblue",margin:"0 5px",fontFamily:"monospace"}}}));var ie=function(e){var t=re();return Object(n.jsxs)(u.a,{className:t.root,children:[Object(n.jsxs)(v.a,{variant:"h4",className:t.errorText,children:["The page ",e.location.pathname," does not exist!"]}),Object(n.jsxs)(v.a,{variant:"h6",children:["Would you like to return",Object(n.jsx)(s.b,{to:"/",className:t.linkText,children:"HOME"}),"instead?"]})]})},ce=Object(l.f)((function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)($,{}),Object(n.jsx)(ne,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:V}),Object(n.jsx)(l.a,{path:"/movies",component:A}),Object(n.jsx)(l.a,{path:"/movie-info",component:K}),Object(n.jsx)(l.a,{component:ie})]})]})})),ae=(o(86),o(25)),se={isLoading:!1,movies:[],error:null},le={isLoading:!1,movieInfo:{},error:null},de=Object(ae.c)({moviesSlice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object.assign({},e,{isLoading:!0});case p:return Object.assign({},e,{isLoading:!1,movies:t.movies});case f:return Object.assign({},e,{isLoading:!1,error:t.error});default:return e}},movieInfoSlice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{isLoading:!0});case x:return Object.assign({},e,{isLoading:!1,movieInfo:t.movieInfo});case g:return Object.assign({},e,{isLoading:!1,error:t.error});default:return e}}}),me=o(64),je=function(e){return function(t){return function(o){console.log("Original State:",e.getState()),console.log("Current Action:",o),t(o),console.log("New Updated State:",e.getState())}}},ue=Object(ae.d)(de,Object(ae.a)(me.a,je));a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m.a,{store:ue,children:Object(n.jsx)(s.a,{children:Object(n.jsx)(ce,{})})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.736005e7.chunk.js.map