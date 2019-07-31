(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),c=a(56),s=a(58),i=a(57),u=a(22),m=a(6),h=a(7),d=a(11),E=a(8),f=a(12);a(30);var p=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var b=function(e){var t=e.children;return o.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},v=a(5),k=a.n(v),g={getBooks:function(){return k.a.get("/api/books")},getBook:function(e){return k.a.get("/api/books/"+e)},deleteBook:function(e){return k.a.delete("/api/books/"+e)},saveBook:function(e){return k.a.post("/api/books",e)}},y=a(55);function B(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function j(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function N(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(49);function O(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function w(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function C(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))}function S(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function x(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:"",synopsis:""},a.loadBooks=function(){g.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:"",synopsis:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&g.saveBook({title:a.state.title,author:a.state.author,synopsis:a.state.synopsis}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(B,{fluid:!0},o.a.createElement(j,null,o.a.createElement(N,{size:"md-6"},o.a.createElement(b,null,o.a.createElement("h1",null,"What Books Should I Read?")),o.a.createElement("form",null,o.a.createElement(C,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),o.a.createElement(C,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),o.a.createElement(S,{value:this.state.synopsis,onChange:this.handleInputChange,name:"synopsis",placeholder:"Synopsis (Optional)"}),o.a.createElement(x,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),o.a.createElement(N,{size:"md-6 sm-12"},o.a.createElement(b,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(O,null,this.state.books.map(function(t){return o.a.createElement(w,{key:t._id},o.a.createElement(y.a,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(p,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(B,{fluid:!0},o.a.createElement(j,null,o.a.createElement(N,{size:"md-12"},o.a.createElement(b,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(j,null,o.a.createElement(N,{size:"md-10 md-offset-1"},o.a.createElement("article",null,o.a.createElement("h1",null,"Synopsis"),o.a.createElement("p",null,this.state.book.synopsis)))),o.a.createElement(j,null,o.a.createElement(N,{size:"md-2"},o.a.createElement(y.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component);var A=function(){return o.a.createElement(B,{fluid:!0},o.a.createElement(j,null,o.a.createElement(N,{size:"md-12"},o.a.createElement(b,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var R=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var D=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(R,null),o.a.createElement(s.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:z}),o.a.createElement(i.a,{exact:!0,path:"/books",component:z}),o.a.createElement(i.a,{exact:!0,path:"/books/:id",component:I}),o.a.createElement(i.a,{component:A}))))};l.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3f711398.chunk.js.map