(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/5a105381eed609b127ec423c337f64e3.1a3bd732.gif"},34:function(e,t,a){e.exports=a(48)},43:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),i=a.n(c),l=a(14),o=a(21),s=a(2),u=a(16),h=a(3),d=a(4),p=a(11),m=a(6),b=a(5),v=(a(43),a(17)),f=a.n(v),g=a(12),j=a(22),O=function(e){return{type:"LOGIN",data:e}},E=a(30),C=a.n(E),y=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",buttonDisable:!0,redirect:!1},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.validate=n.validate.bind(Object(p.a)(n)),n.ableButton=n.ableButton.bind(Object(p.a)(n)),n.handleLogin=n.handleLogin.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"validate",value:function(){var e=this.state,t=e.email,a=e.password;if(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(t)&&a.length>=5)return!0}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(u.a)({},a,n)),this.ableButton()}},{key:"ableButton",value:function(){this.validate()&&this.setState({buttonDisable:!1})}},{key:"handleLogin",value:function(){var e=this.props.login,t=this.state.email;this.setState({redirect:!0}),e(t),console.log(O)}},{key:"render",value:function(){var e=this.state,t=e.buttonDisable,a=e.redirect;return a?r.a.createElement(s.a,{to:"/carteira"}):a?void 0:r.a.createElement("div",{className:"login--div"},r.a.createElement("img",{src:C.a,alt:"bitcoin"}),r.a.createElement("form",{className:"login--form"},r.a.createElement("input",{"data-testid":"email-input",type:"email",name:"email",placeholder:"Email",onChange:this.handleChange}),r.a.createElement("input",{"data-testid":"password-input",type:"password",name:"password",placeholder:"Password",onChange:this.handleChange}),r.a.createElement("button",{type:"button",className:"login--button",disabled:t,min:6,onClick:this.handleLogin,style:{backgroundColor:t?"#AD3838":"#DAF7A6"}},"Entrar")))}}]),a}(r.a.Component);y.defaultProps={login:void 0};var k=Object(l.b)(null,(function(e){return{login:function(t){return e(O(t))}}}))(y),x=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.handleChange;return r.a.createElement("label",{htmlFor:"textbox"},"Descri\xe7\xe3o",r.a.createElement("input",{id:"textbox",type:"text",name:"description",onChange:e}))}}]),a}(r.a.Component);x.defaultProps={handleChange:""};var w=x,S=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.handleChange;return r.a.createElement("label",{htmlFor:"value"},"Valor",r.a.createElement("input",{id:"value",type:"text",name:"value",min:"0",onChange:e}))}}]),a}(r.a.Component);S.defaultProps={handleChange:""};var D=S,R=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={types:["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"]},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.handleChange,t=this.state.types;return r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento",r.a.createElement("select",{id:"method",name:"method",onChange:e},t.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))}}]),a}(r.a.Component);R.defaultProps={handleChange:""};var P=R,N=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={tags:["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"]},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.handleChange,t=this.state.tags;return r.a.createElement("label",{htmlFor:"tag"},"Tag",r.a.createElement("select",{id:"tag",name:"tag",onChange:e},t.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))}}]),a}(r.a.Component);N.defaultProps={handleChange:""};var L=N,T=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={currencies:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchCurrencies()}},{key:"fetchCurrencies",value:function(){var e=Object(j.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()}));case 2:t=e.sent,a=Object.keys(t),n=a.filter((function(e){return"USDT"!==e})),this.setState({currencies:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.handleChange,t=this.state.currencies;return r.a.createElement("label",{htmlFor:"currency"},"Moeda",r.a.createElement("select",{id:"currency",name:"currency",onChange:e},t.map((function(e,t){return r.a.createElement("option",{key:t},e)}))))}}]),a}(r.a.Component);T.defaultProps={handleChange:""};var F=T,A=(a(46),function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"sumValues",value:function(){return this.props.values.reduce((function(e,t){var a=t.exchangeRates[t.currency].ask;return e+t.value*a}),0).toFixed(2)}},{key:"render",value:function(){var e=this.props.email;return r.a.createElement("header",{"data-testid":"email-field"},e,r.a.createElement("div",{className:"info--currencie"},r.a.createElement("span",{"data-testid":"header-currency-field"},"R$BRL"),r.a.createElement("span",{"data-testid":"total-field"},"Total de gastos:",this.sumValues())))}}]),a}(r.a.Component)),B=Object(l.b)((function(e){return{email:e.user.email,values:e.wallet.expenses}}))(A),I=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={count:0,value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(u.a)({},a,n))}},{key:"handleClick",value:function(){var e=this.props.newExpense,t=this.state,a=t.count;e({id:a,value:t.value,description:t.description,currency:t.currency,method:t.method,tag:t.tag,exchangeRates:t.exchangeRates}),this.setState({count:a+1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement("form",{className:"wallet--form"},r.a.createElement(D,{handleChange:this.handleChange}),r.a.createElement(w,{handleChange:this.handleChange}),r.a.createElement(F,{handleChange:this.handleChange}),r.a.createElement(L,{handleChange:this.handleChange}),r.a.createElement(P,{handleChange:this.handleChange}),r.a.createElement("button",{type:"button",className:"button--expense",onClick:this.handleClick},"Adicionar despesa")))}}]),a}(r.a.Component);I.defaultProps={newExpense:void 0};var G=Object(l.b)((function(e){return{email:e.user.email}}),(function(e){return{newExpense:function(t){return e((a=t,function(){var e=Object(j.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return e.next=4,e.sent.json();case 4:n=e.sent,t({type:"REGISTER_EXPENSE",data:Object(g.a)(Object(g.a)({},a),{},{exchangeRates:n})});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a}}}))(I);a(47);var M=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:k}),r.a.createElement(s.b,{path:"/carteira",component:G}))},V=a(13),J=a(31),U=a(32),X={email:""};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(g.a)(Object(g.a)({},e),{},{email:t.data});default:return e}},_=a(33),z={currencies:[],expenses:[]};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_EXPENSE":return Object(g.a)(Object(g.a)({},e),{},{expenses:[].concat(Object(_.a)(e.expenses),[t.data])});default:return e}},q=Object(V.combineReducers)({user:$,wallet:W}),H=Object(V.createStore)(q,Object(J.composeWithDevTools)(Object(V.applyMiddleware)(U.a)));i.a.render(r.a.createElement(l.a,{store:H},r.a.createElement(o.a,null,r.a.createElement(M,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1f93b87e.chunk.js.map