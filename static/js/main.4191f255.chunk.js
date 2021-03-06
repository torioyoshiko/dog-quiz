(this["webpackJsonpem-challenge"]=this["webpackJsonpem-challenge"]||[]).push([[0],{23:function(e,t,n){e.exports=n(41)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),o=n.n(s),c=(n(28),n(8)),i=n(7),u=n.n(i),l=n(11),m=n(18),d=n(19),h=n(10),b=n(22),p=n(21),g=(n(30),n(1));n(31);var f=function(){return r.a.createElement("div",{className:"background"},r.a.createElement("h2",null,"Who wants to be a dogellionaire?"),r.a.createElement("p",{className:"doge-info"},"It\u2019s a quiz which will test your knowledge of dog breeds. You will be given an image of a dog and 4 answers. Let\u2019s see how good are you at knowing your good boys and girls"),r.a.createElement(c.b,{to:"/question"},r.a.createElement("button",{type:"submit"},"Start")))},v=(n(37),n(38),function(e){return r.a.createElement("button",{className:"button",type:"submit",onClick:e.onClick},e.children)}),E=function(e){return r.a.createElement("div",{className:"question-background"},r.a.createElement("div",{className:"info-question"},r.a.createElement("p",{className:"question-number"},e.questionNumber,"/16"),r.a.createElement("p",null,"Which breed is this dog?")),r.a.createElement("img",{className:"breedImg",alt:"doge",src:e.question.url}),r.a.createElement("div",{className:"buttons"},e.question.breeds.map((function(t){return r.a.createElement(v,{onClick:function(){return e.onQuestionAnswered(t)},key:t},t)}))))};var N=function(e,t){var n=Math.ceil(e),a=Math.floor(t);return Math.floor(Math.random()*(a-n+1))+n},q=(n(39),function(e){return r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"info-question"},r.a.createElement("p",{className:"game-over"},"Game Over"),r.a.createElement("img",{alt:"correctBreed",className:"breedImg",src:e.correctImg}),r.a.createElement("p",{className:"breed-info"},"This dog is a ".concat(e.correctBreed)),r.a.createElement(v,{onClick:e.startOver},"Play again")))}),w=(n(40),function(e){return r.a.createElement("div",{className:"background"},r.a.createElement("div",{className:"info-question"},r.a.createElement("p",{className:"win"},"You won!"),r.a.createElement("p",{className:"win-info"},"You are a true dog connoisseur!"),r.a.createElement("div",{className:"buttons"},r.a.createElement(v,{onClick:e.startOver},"Play again"),r.a.createElement(v,null,"Share"))))}),k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).generateQuestion=Object(l.a)(u.a.mark((function t(){var n,a,r,s,o,c,i,l,m;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[],a=0;a<4;a++){r=void 0;do{s=N(0,e.state.breeds.length-1),r=e.state.breeds[s]}while(n.includes(r));n.push(r)}return o=N(0,n.length-1),c=n[o],t.next=6,fetch("https://dog.ceo/api/breed/".concat(c,"/images/random"));case 6:return i=t.sent,t.next=9,i.json();case 9:l=t.sent,m=l.message,e.setState({question:{breeds:n,url:m,correctBreed:c}});case 12:case"end":return t.stop()}}),t)}))),e.onQuestionAnswered=function(t){t===e.state.question.correctBreed?(e.setState((function(e){return{questionNumber:e.questionNumber+1}})),e.generateQuestion(),16===e.state.questionNumber&&e.props.history.push("/victory")):e.props.history.push("/gameover")},e.startOver=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({questionNumber:1}),t.next=3,e.generateQuestion();case 3:e.props.history.push("/question");case 4:case"end":return t.stop()}}),t)}))),e.state={breeds:[],question:{breeds:[],url:"",correctBreed:""},questionNumber:1},e.generateQuestion=e.generateQuestion.bind(Object(h.a)(e)),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breeds/list/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=Object.getOwnPropertyNames(n.message),this.setState({breeds:a}),e.next=10,this.generateQuestion();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:f}),r.a.createElement(g.a,{path:"/question"},r.a.createElement(E,{question:this.state.question,onQuestionAnswered:this.onQuestionAnswered,questionNumber:this.state.questionNumber})),r.a.createElement(g.a,{path:"/gameover"},r.a.createElement(q,{correctBreed:this.state.question.correctBreed,correctImg:this.state.question.url,startOver:this.startOver})),r.a.createElement(g.a,{path:"/victory"},r.a.createElement(w,{startOver:this.startOver}))))}}]),n}(a.Component),y=Object(g.f)(k);o.a.render(r.a.createElement(c.a,{basename:"/dog-quiz"},r.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4191f255.chunk.js.map