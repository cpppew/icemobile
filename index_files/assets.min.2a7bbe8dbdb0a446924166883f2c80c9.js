(function(){var b,a,e;
(function(j){var m,f,q,r,i={},h={},y={},v={},p=Object.prototype.hasOwnProperty,n=[].slice,o=/\.js$/;
function z(A,B){return p.call(A,B)
}function s(D,B){var L,H,F,I,M,E,O,P,K,J,G,N=B&&B.split("/"),C=y.map,A=(C&&C["*"])||{};
if(D&&D.charAt(0)==="."){if(B){N=N.slice(0,N.length-1);
D=D.split("/");
M=D.length-1;
if(y.nodeIdCompat&&o.test(D[M])){D[M]=D[M].replace(o,"")
}D=N.concat(D);
for(K=0;
K<D.length;
K+=1){G=D[K];
if(G==="."){D.splice(K,1);
K-=1
}else{if(G===".."){if(K===1&&(D[2]===".."||D[0]==="..")){break
}else{if(K>0){D.splice(K-1,2);
K-=2
}}}}}D=D.join("/")
}else{if(D.indexOf("./")===0){D=D.substring(2)
}}}if((N||A)&&C){L=D.split("/");
for(K=L.length;
K>0;
K-=1){H=L.slice(0,K).join("/");
if(N){for(J=N.length;
J>0;
J-=1){F=C[N.slice(0,J).join("/")];
if(F){F=F[H];
if(F){I=F;
E=K;
break
}}}}if(I){break
}if(!O&&A&&A[H]){O=A[H];
P=K
}}if(!I&&O){I=O;
E=P
}if(I){L.splice(0,E,I);
D=L.join("/")
}}return D
}function x(A,B){return function(){return f.apply(j,n.call(arguments,0).concat([A,B]))
}
}function u(A){return function(B){return s(B,A)
}
}function k(A){return function(B){i[A]=B
}
}function l(B){if(z(h,B)){var A=h[B];
delete h[B];
v[B]=true;
m.apply(j,A)
}if(!z(i,B)&&!z(v,B)){throw new Error("No "+B)
}return i[B]
}function w(B){var C,A=B?B.indexOf("!"):-1;
if(A>-1){C=B.substring(0,A);
B=B.substring(A+1,B.length)
}return[C,B]
}q=function(B,A){var C,E=w(B),D=E[0];
B=E[1];
if(D){D=s(D,A);
C=l(D)
}if(D){if(C&&C.normalize){B=C.normalize(B,u(A))
}else{B=s(B,A)
}}else{B=s(B,A);
E=w(B);
D=E[0];
B=E[1];
if(D){C=l(D)
}}return{f:D?D+"!"+B:B,n:B,pr:D,p:C}
};
function g(A){return function(){return(y&&y.config&&y.config[A])||{}
}
}r={require:function(A){return x(A)
},exports:function(A){var B=i[A];
if(typeof B!=="undefined"){return B
}else{return(i[A]={})
}},module:function(A){return{id:A,uri:"",exports:i[A],config:g(A)}
}};
m=function(B,L,K,J){var E,I,F,A,D,G=[],C=typeof K,H;
J=J||B;
if(C==="undefined"||C==="function"){L=!L.length&&K.length?["require","exports","module"]:L;
for(D=0;
D<L.length;
D+=1){A=q(L[D],J);
I=A.f;
if(I==="require"){G[D]=r.require(B)
}else{if(I==="exports"){G[D]=r.exports(B);
H=true
}else{if(I==="module"){E=G[D]=r.module(B)
}else{if(z(i,I)||z(h,I)||z(v,I)){G[D]=l(I)
}else{if(A.p){A.p.load(A.n,x(J,true),k(I),{});
G[D]=i[I]
}else{throw new Error(B+" missing "+I)
}}}}}}F=K?K.apply(i[B],G):undefined;
if(B){if(E&&E.exports!==j&&E.exports!==i[B]){i[B]=E.exports
}else{if(F!==j||!H){i[B]=F
}}}}else{if(B){i[B]=K
}}};
b=a=f=function(D,E,A,B,C){if(typeof D==="string"){if(r[D]){return r[D](E)
}return l(q(D,E).f)
}else{if(!D.splice){y=D;
if(y.deps){f(y.deps,y.callback)
}if(!E){return
}if(E.splice){D=E;
E=A;
A=null
}else{D=j
}}}E=E||function(){};
if(typeof A==="function"){A=B;
B=C
}if(B){m(j,D,E,A)
}else{setTimeout(function(){m(j,D,E,A)
},4)
}return f
};
f.config=function(A){return f(A)
};
b._defined=i;
e=function(A,B,C){if(!B.splice){C=B;
B=[]
}if(!z(i,A)&&!z(h,A)){h[A]=[A,B,C]
}};
e.amd={jQuery:true}
}());
e("../bower_components/almond/almond",function(){});
/*!
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */
(function(a7,aG){var B,ak,s=a7.document,aN=a7.location,i=a7.navigator,bl=a7.jQuery,N=a7.$,ar=Array.prototype.push,a9=Array.prototype.slice,aP=Array.prototype.indexOf,E=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,aT=String.prototype.trim,bL=function(b4,b5){return new bL.fn.init(b4,b5,B)
},bC=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,af=/\S/,a0=/\s+/,H=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,f=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bk=/^[\],:{}\s]*$/,bn=/(?:^|:|,)(?:\s*\[)+/g,bI=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a5=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,bU=/^-ms-/,aZ=/-([\da-z])/gi,S=function(b4,b5){return(b5+"").toUpperCase()
},aK=function(){if(s.addEventListener){s.removeEventListener("DOMContentLoaded",aK,false);
bL.ready()
}else{if(s.readyState==="complete"){s.detachEvent("onreadystatechange",aK);
bL.ready()
}}},ae={};
bL.fn=bL.prototype={constructor:bL,init:function(b4,b8,b7){var b6,b9,b5,ca;
if(!b4){return this
}if(b4.nodeType){this.context=this[0]=b4;
this.length=1;
return this
}if(typeof b4==="string"){if(b4.charAt(0)==="<"&&b4.charAt(b4.length-1)===">"&&b4.length>=3){b6=[null,b4,null]
}else{b6=bt.exec(b4)
}if(b6&&(b6[1]||!b8)){if(b6[1]){b8=b8 instanceof bL?b8[0]:b8;
ca=(b8&&b8.nodeType?b8.ownerDocument||b8:s);
b4=bL.parseHTML(b6[1],ca,true);
if(f.test(b6[1])&&bL.isPlainObject(b8)){this.attr.call(b4,b8,true)
}return bL.merge(this,b4)
}else{b9=s.getElementById(b6[2]);
if(b9&&b9.parentNode){if(b9.id!==b6[2]){return b7.find(b4)
}this.length=1;
this[0]=b9
}this.context=s;
this.selector=b4;
return this
}}else{if(!b8||b8.jquery){return(b8||b7).find(b4)
}else{return this.constructor(b8).find(b4)
}}}else{if(bL.isFunction(b4)){return b7.ready(b4)
}}if(b4.selector!==aG){this.selector=b4.selector;
this.context=b4.context
}return bL.makeArray(b4,this)
},selector:"",jquery:"1.8.1",length:0,size:function(){return this.length
},toArray:function(){return a9.call(this)
},get:function(b4){return b4==null?this.toArray():(b4<0?this[this.length+b4]:this[b4])
},pushStack:function(b5,b7,b4){var b6=bL.merge(this.constructor(),b5);
b6.prevObject=this;
b6.context=this.context;
if(b7==="find"){b6.selector=this.selector+(this.selector?" ":"")+b4
}else{if(b7){b6.selector=this.selector+"."+b7+"("+b4+")"
}}return b6
},each:function(b5,b4){return bL.each(this,b5,b4)
},ready:function(b4){bL.ready.promise().done(b4);
return this
},eq:function(b4){b4=+b4;
return b4===-1?this.slice(b4):this.slice(b4,b4+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(a9.apply(this,arguments),"slice",a9.call(arguments).join(","))
},map:function(b4){return this.pushStack(bL.map(this,function(b6,b5){return b4.call(b6,b5,b6)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:ar,sort:[].sort,splice:[].splice};
bL.fn.init.prototype=bL.fn;
bL.extend=bL.fn.extend=function(){var cd,b6,b4,b5,ca,cb,b9=arguments[0]||{},b8=1,b7=arguments.length,cc=false;
if(typeof b9==="boolean"){cc=b9;
b9=arguments[1]||{};
b8=2
}if(typeof b9!=="object"&&!bL.isFunction(b9)){b9={}
}if(b7===b8){b9=this;
--b8
}for(;
b8<b7;
b8++){if((cd=arguments[b8])!=null){for(b6 in cd){b4=b9[b6];
b5=cd[b6];
if(b9===b5){continue
}if(cc&&b5&&(bL.isPlainObject(b5)||(ca=bL.isArray(b5)))){if(ca){ca=false;
cb=b4&&bL.isArray(b4)?b4:[]
}else{cb=b4&&bL.isPlainObject(b4)?b4:{}
}b9[b6]=bL.extend(cc,cb,b5)
}else{if(b5!==aG){b9[b6]=b5
}}}}}return b9
};
bL.extend({noConflict:function(b4){if(a7.$===bL){a7.$=N
}if(b4&&a7.jQuery===bL){a7.jQuery=bl
}return bL
},isReady:false,readyWait:1,holdReady:function(b4){if(b4){bL.readyWait++
}else{bL.ready(true)
}},ready:function(b4){if(b4===true?--bL.readyWait:bL.isReady){return
}if(!s.body){return setTimeout(bL.ready,1)
}bL.isReady=true;
if(b4!==true&&--bL.readyWait>0){return
}ak.resolveWith(s,[bL]);
if(bL.fn.trigger){bL(s).trigger("ready").off("ready")
}},isFunction:function(b4){return bL.type(b4)==="function"
},isArray:Array.isArray||function(b4){return bL.type(b4)==="array"
},isWindow:function(b4){return b4!=null&&b4==b4.window
},isNumeric:function(b4){return !isNaN(parseFloat(b4))&&isFinite(b4)
},type:function(b4){return b4==null?String(b4):ae[E.call(b4)]||"object"
},isPlainObject:function(b6){if(!b6||bL.type(b6)!=="object"||b6.nodeType||bL.isWindow(b6)){return false
}try{if(b6.constructor&&!aa.call(b6,"constructor")&&!aa.call(b6.constructor.prototype,"isPrototypeOf")){return false
}}catch(b5){return false
}var b4;
for(b4 in b6){}return b4===aG||aa.call(b6,b4)
},isEmptyObject:function(b5){var b4;
for(b4 in b5){return false
}return true
},error:function(b4){throw new Error(b4)
},parseHTML:function(b7,b6,b4){var b5;
if(!b7||typeof b7!=="string"){return null
}if(typeof b6==="boolean"){b4=b6;
b6=0
}b6=b6||s;
if((b5=f.exec(b7))){return[b6.createElement(b5[1])]
}b5=bL.buildFragment([b7],b6,b4?null:[]);
return bL.merge([],(b5.cacheable?bL.clone(b5.fragment):b5.fragment).childNodes)
},parseJSON:function(b4){if(!b4||typeof b4!=="string"){return null
}b4=bL.trim(b4);
if(a7.JSON&&a7.JSON.parse){return a7.JSON.parse(b4)
}if(bk.test(b4.replace(bI,"@").replace(a5,"]").replace(bn,""))){return(new Function("return "+b4))()
}bL.error("Invalid JSON: "+b4)
},parseXML:function(b6){var b4,b5;
if(!b6||typeof b6!=="string"){return null
}try{if(a7.DOMParser){b5=new DOMParser();
b4=b5.parseFromString(b6,"text/xml")
}else{b4=new ActiveXObject("Microsoft.XMLDOM");
b4.async="false";
b4.loadXML(b6)
}}catch(b7){b4=aG
}if(!b4||!b4.documentElement||b4.getElementsByTagName("parsererror").length){bL.error("Invalid XML: "+b6)
}return b4
},noop:function(){},globalEval:function(b4){if(b4&&af.test(b4)){(a7.execScript||function(b5){a7["eval"].call(a7,b5)
})(b4)
}},camelCase:function(b4){return b4.replace(bU,"ms-").replace(aZ,S)
},nodeName:function(b5,b4){return b5.nodeName&&b5.nodeName.toUpperCase()===b4.toUpperCase()
},each:function(b9,ca,b6){var b5,b7=0,b8=b9.length,b4=b8===aG||bL.isFunction(b9);
if(b6){if(b4){for(b5 in b9){if(ca.apply(b9[b5],b6)===false){break
}}}else{for(;
b7<b8;
){if(ca.apply(b9[b7++],b6)===false){break
}}}}else{if(b4){for(b5 in b9){if(ca.call(b9[b5],b5,b9[b5])===false){break
}}}else{for(;
b7<b8;
){if(ca.call(b9[b7],b7,b9[b7++])===false){break
}}}}return b9
},trim:aT&&!aT.call("\uFEFF\xA0")?function(b4){return b4==null?"":aT.call(b4)
}:function(b4){return b4==null?"":b4.toString().replace(H,"")
},makeArray:function(b4,b6){var b7,b5=b6||[];
if(b4!=null){b7=bL.type(b4);
if(b4.length==null||b7==="string"||b7==="function"||b7==="regexp"||bL.isWindow(b4)){ar.call(b5,b4)
}else{bL.merge(b5,b4)
}}return b5
},inArray:function(b7,b5,b6){var b4;
if(b5){if(aP){return aP.call(b5,b7,b6)
}b4=b5.length;
b6=b6?b6<0?Math.max(0,b4+b6):b6:0;
for(;
b6<b4;
b6++){if(b6 in b5&&b5[b6]===b7){return b6
}}}return -1
},merge:function(b8,b6){var b4=b6.length,b7=b8.length,b5=0;
if(typeof b4==="number"){for(;
b5<b4;
b5++){b8[b7++]=b6[b5]
}}else{while(b6[b5]!==aG){b8[b7++]=b6[b5++]
}}b8.length=b7;
return b8
},grep:function(b5,ca,b4){var b9,b6=[],b7=0,b8=b5.length;
b4=!!b4;
for(;
b7<b8;
b7++){b9=!!ca(b5[b7],b7);
if(b4!==b9){b6.push(b5[b7])
}}return b6
},map:function(b4,cb,cc){var b9,ca,b8=[],b6=0,b5=b4.length,b7=b4 instanceof bL||b5!==aG&&typeof b5==="number"&&((b5>0&&b4[0]&&b4[b5-1])||b5===0||bL.isArray(b4));
if(b7){for(;
b6<b5;
b6++){b9=cb(b4[b6],b6,cc);
if(b9!=null){b8[b8.length]=b9
}}}else{for(ca in b4){b9=cb(b4[ca],ca,cc);
if(b9!=null){b8[b8.length]=b9
}}}return b8.concat.apply([],b8)
},guid:1,proxy:function(b8,b7){var b6,b4,b5;
if(typeof b7==="string"){b6=b8[b7];
b7=b8;
b8=b6
}if(!bL.isFunction(b8)){return aG
}b4=a9.call(arguments,2);
b5=function(){return b8.apply(b7,b4.concat(a9.call(arguments)))
};
b5.guid=b8.guid=b8.guid||b5.guid||bL.guid++;
return b5
},access:function(b4,ca,cd,cb,b8,ce,cc){var b6,b9=cd==null,b7=0,b5=b4.length;
if(cd&&typeof cd==="object"){for(b7 in cd){bL.access(b4,ca,b7,cd[b7],1,ce,cb)
}b8=1
}else{if(cb!==aG){b6=cc===aG&&bL.isFunction(cb);
if(b9){if(b6){b6=ca;
ca=function(cg,cf,ch){return b6.call(bL(cg),ch)
}
}else{ca.call(b4,cb);
ca=null
}}if(ca){for(;
b7<b5;
b7++){ca(b4[b7],cd,b6?cb.call(b4[b7],b7,ca(b4[b7],cd)):cb,cc)
}}b8=1
}}return b8?b4:b9?ca.call(b4):b5?ca(b4[0],cd):ce
},now:function(){return(new Date()).getTime()
}});
bL.ready.promise=function(b7){if(!ak){ak=bL.Deferred();
if(s.readyState==="complete"){setTimeout(bL.ready,1)
}else{if(s.addEventListener){s.addEventListener("DOMContentLoaded",aK,false);
a7.addEventListener("load",bL.ready,false)
}else{s.attachEvent("onreadystatechange",aK);
a7.attachEvent("onload",bL.ready);
var b6=false;
try{b6=a7.frameElement==null&&s.documentElement
}catch(b5){}if(b6&&b6.doScroll){(function b4(){if(!bL.isReady){try{b6.doScroll("left")
}catch(b8){return setTimeout(b4,50)
}bL.ready()
}})()
}}}}return ak.promise(b7)
};
bL.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b5,b4){ae["[object "+b4+"]"]=b4.toLowerCase()
});
B=bL(s);
var bZ={};
function ah(b5){var b4=bZ[b5]={};
bL.each(b5.split(a0),function(b7,b6){b4[b6]=true
});
return b4
}bL.Callbacks=function(ce){ce=typeof ce==="string"?(bZ[ce]||ah(ce)):bL.extend({},ce);
var b7,b4,b8,b6,b9,ca,cb=[],cc=!ce.once&&[],b5=function(cf){b7=ce.memory&&cf;
b4=true;
ca=b6||0;
b6=0;
b9=cb.length;
b8=true;
for(;
cb&&ca<b9;
ca++){if(cb[ca].apply(cf[0],cf[1])===false&&ce.stopOnFalse){b7=false;
break
}}b8=false;
if(cb){if(cc){if(cc.length){b5(cc.shift())
}}else{if(b7){cb=[]
}else{cd.disable()
}}}},cd={add:function(){if(cb){var cg=cb.length;
(function cf(ch){bL.each(ch,function(cj,ci){var ck=bL.type(ci);
if(ck==="function"&&(!ce.unique||!cd.has(ci))){cb.push(ci)
}else{if(ci&&ci.length&&ck!=="string"){cf(ci)
}}})
})(arguments);
if(b8){b9=cb.length
}else{if(b7){b6=cg;
b5(b7)
}}}return this
},remove:function(){if(cb){bL.each(arguments,function(ch,cf){var cg;
while((cg=bL.inArray(cf,cb,cg))>-1){cb.splice(cg,1);
if(b8){if(cg<=b9){b9--
}if(cg<=ca){ca--
}}}})
}return this
},has:function(cf){return bL.inArray(cf,cb)>-1
},empty:function(){cb=[];
return this
},disable:function(){cb=cc=b7=aG;
return this
},disabled:function(){return !cb
},lock:function(){cc=aG;
if(!b7){cd.disable()
}return this
},locked:function(){return !cc
},fireWith:function(cg,cf){cf=cf||[];
cf=[cg,cf.slice?cf.slice():cf];
if(cb&&(!b4||cc)){if(b8){cc.push(cf)
}else{b5(cf)
}}return this
},fire:function(){cd.fireWith(this,arguments);
return this
},fired:function(){return !!b4
}};
return cd
};
bL.extend({Deferred:function(b6){var b5=[["resolve","done",bL.Callbacks("once memory"),"resolved"],["reject","fail",bL.Callbacks("once memory"),"rejected"],["notify","progress",bL.Callbacks("memory")]],b7="pending",b8={state:function(){return b7
},always:function(){b4.done(arguments).fail(arguments);
return this
},then:function(){var b9=arguments;
return bL.Deferred(function(ca){bL.each(b5,function(cc,cb){var ce=cb[0],cd=b9[cc];
b4[cb[1]](bL.isFunction(cd)?function(){var cf=cd.apply(this,arguments);
if(cf&&bL.isFunction(cf.promise)){cf.promise().done(ca.resolve).fail(ca.reject).progress(ca.notify)
}else{ca[ce+"With"](this===b4?ca:this,[cf])
}}:ca[ce])
});
b9=null
}).promise()
},promise:function(b9){return typeof b9==="object"?bL.extend(b9,b8):b8
}},b4={};
b8.pipe=b8.then;
bL.each(b5,function(ca,b9){var cc=b9[2],cb=b9[3];
b8[b9[1]]=cc.add;
if(cb){cc.add(function(){b7=cb
},b5[ca^1][2].disable,b5[2][2].lock)
}b4[b9[0]]=cc.fire;
b4[b9[0]+"With"]=cc.fireWith
});
b8.promise(b4);
if(b6){b6.call(b4,b4)
}return b4
},when:function(b8){var b6=0,ca=a9.call(arguments),b4=ca.length,b5=b4!==1||(b8&&bL.isFunction(b8.promise))?b4:0,cd=b5===1?b8:bL.Deferred(),b7=function(cf,cg,ce){return function(ch){cg[cf]=this;
ce[cf]=arguments.length>1?a9.call(arguments):ch;
if(ce===cc){cd.notifyWith(cg,ce)
}else{if(!(--b5)){cd.resolveWith(cg,ce)
}}}
},cc,b9,cb;
if(b4>1){cc=new Array(b4);
b9=new Array(b4);
cb=new Array(b4);
for(;
b6<b4;
b6++){if(ca[b6]&&bL.isFunction(ca[b6].promise)){ca[b6].promise().done(b7(b6,cb,ca)).fail(cd.reject).progress(b7(b6,b9,cc))
}else{--b5
}}}if(!b5){cd.resolveWith(cb,ca)
}return cd.promise()
}});
bL.support=(function(){var cg,cf,cd,ce,b7,cc,cb,b9,b8,b6,b4,b5=s.createElement("div");
b5.setAttribute("className","t");
b5.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cf=b5.getElementsByTagName("*");
cd=b5.getElementsByTagName("a")[0];
cd.style.cssText="top:1px;float:left;opacity:.5";
if(!cf||!cf.length||!cd){return{}
}ce=s.createElement("select");
b7=ce.appendChild(s.createElement("option"));
cc=b5.getElementsByTagName("input")[0];
cg={leadingWhitespace:(b5.firstChild.nodeType===3),tbody:!b5.getElementsByTagName("tbody").length,htmlSerialize:!!b5.getElementsByTagName("link").length,style:/top/.test(cd.getAttribute("style")),hrefNormalized:(cd.getAttribute("href")==="/a"),opacity:/^0.5/.test(cd.style.opacity),cssFloat:!!cd.style.cssFloat,checkOn:(cc.value==="on"),optSelected:b7.selected,getSetAttribute:b5.className!=="t",enctype:!!s.createElement("form").enctype,html5Clone:s.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(s.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
cc.checked=true;
cg.noCloneChecked=cc.cloneNode(true).checked;
ce.disabled=true;
cg.optDisabled=!b7.disabled;
try{delete b5.test
}catch(ca){cg.deleteExpando=false
}if(!b5.addEventListener&&b5.attachEvent&&b5.fireEvent){b5.attachEvent("onclick",b4=function(){cg.noCloneEvent=false
});
b5.cloneNode(true).fireEvent("onclick");
b5.detachEvent("onclick",b4)
}cc=s.createElement("input");
cc.value="t";
cc.setAttribute("type","radio");
cg.radioValue=cc.value==="t";
cc.setAttribute("checked","checked");
cc.setAttribute("name","t");
b5.appendChild(cc);
cb=s.createDocumentFragment();
cb.appendChild(b5.lastChild);
cg.checkClone=cb.cloneNode(true).cloneNode(true).lastChild.checked;
cg.appendChecked=cc.checked;
cb.removeChild(cc);
cb.appendChild(b5);
if(b5.attachEvent){for(b8 in {submit:true,change:true,focusin:true}){b9="on"+b8;
b6=(b9 in b5);
if(!b6){b5.setAttribute(b9,"return;");
b6=(typeof b5[b9]==="function")
}cg[b8+"Bubbles"]=b6
}}bL(function(){var ci,cm,ck,cl,cj="padding:0;margin:0;border:0;display:block;overflow:hidden;",ch=s.getElementsByTagName("body")[0];
if(!ch){return
}ci=s.createElement("div");
ci.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
ch.insertBefore(ci,ch.firstChild);
cm=s.createElement("div");
ci.appendChild(cm);
cm.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
ck=cm.getElementsByTagName("td");
ck[0].style.cssText="padding:0;margin:0;border:0;display:none";
b6=(ck[0].offsetHeight===0);
ck[0].style.display="";
ck[1].style.display="none";
cg.reliableHiddenOffsets=b6&&(ck[0].offsetHeight===0);
cm.innerHTML="";
cm.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cg.boxSizing=(cm.offsetWidth===4);
cg.doesNotIncludeMarginInBodyOffset=(ch.offsetTop!==1);
if(a7.getComputedStyle){cg.pixelPosition=(a7.getComputedStyle(cm,null)||{}).top!=="1%";
cg.boxSizingReliable=(a7.getComputedStyle(cm,null)||{width:"4px"}).width==="4px";
cl=s.createElement("div");
cl.style.cssText=cm.style.cssText=cj;
cl.style.marginRight=cl.style.width="0";
cm.style.width="1px";
cm.appendChild(cl);
cg.reliableMarginRight=!parseFloat((a7.getComputedStyle(cl,null)||{}).marginRight)
}if(typeof cm.style.zoom!=="undefined"){cm.innerHTML="";
cm.style.cssText=cj+"width:1px;padding:1px;display:inline;zoom:1";
cg.inlineBlockNeedsLayout=(cm.offsetWidth===3);
cm.style.display="block";
cm.style.overflow="visible";
cm.innerHTML="<div></div>";
cm.firstChild.style.width="5px";
cg.shrinkWrapBlocks=(cm.offsetWidth!==3);
ci.style.zoom=1
}ch.removeChild(ci);
ci=cm=ck=cl=null
});
cb.removeChild(b5);
cf=cd=ce=b7=cc=cb=b5=null;
return cg
})();
var by=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aQ=/([A-Z])/g;
bL.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(bL.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(b4){b4=b4.nodeType?bL.cache[b4[bL.expando]]:b4[bL.expando];
return !!b4&&!T(b4)
},data:function(b7,b5,b9,b8){if(!bL.acceptData(b7)){return
}var ca,cc,cd=bL.expando,cb=typeof b5==="string",ce=b7.nodeType,b4=ce?bL.cache:b7,b6=ce?b7[cd]:b7[cd]&&cd;
if((!b6||!b4[b6]||(!b8&&!b4[b6].data))&&cb&&b9===aG){return
}if(!b6){if(ce){b7[cd]=b6=bL.deletedIds.pop()||++bL.uuid
}else{b6=cd
}}if(!b4[b6]){b4[b6]={};
if(!ce){b4[b6].toJSON=bL.noop
}}if(typeof b5==="object"||typeof b5==="function"){if(b8){b4[b6]=bL.extend(b4[b6],b5)
}else{b4[b6].data=bL.extend(b4[b6].data,b5)
}}ca=b4[b6];
if(!b8){if(!ca.data){ca.data={}
}ca=ca.data
}if(b9!==aG){ca[bL.camelCase(b5)]=b9
}if(cb){cc=ca[b5];
if(cc==null){cc=ca[bL.camelCase(b5)]
}}else{cc=ca
}return cc
},removeData:function(b7,b5,b8){if(!bL.acceptData(b7)){return
}var cb,ca,b9,cc=b7.nodeType,b4=cc?bL.cache:b7,b6=cc?b7[bL.expando]:bL.expando;
if(!b4[b6]){return
}if(b5){cb=b8?b4[b6]:b4[b6].data;
if(cb){if(!bL.isArray(b5)){if(b5 in cb){b5=[b5]
}else{b5=bL.camelCase(b5);
if(b5 in cb){b5=[b5]
}else{b5=b5.split(" ")
}}}for(ca=0,b9=b5.length;
ca<b9;
ca++){delete cb[b5[ca]]
}if(!(b8?T:bL.isEmptyObject)(cb)){return
}}}if(!b8){delete b4[b6].data;
if(!T(b4[b6])){return
}}if(cc){bL.cleanData([b7],true)
}else{if(bL.support.deleteExpando||b4!=b4.window){delete b4[b6]
}else{b4[b6]=null
}}},_data:function(b5,b4,b6){return bL.data(b5,b4,b6,true)
},acceptData:function(b5){var b4=b5.nodeName&&bL.noData[b5.nodeName.toLowerCase()];
return !b4||b4!==true&&b5.getAttribute("classid")===b4
}});
bL.fn.extend({data:function(cd,cc){var b8,b5,cb,b4,b7,b6=this[0],ca=0,b9=null;
if(cd===aG){if(this.length){b9=bL.data(b6);
if(b6.nodeType===1&&!bL._data(b6,"parsedAttrs")){cb=b6.attributes;
for(b7=cb.length;
ca<b7;
ca++){b4=cb[ca].name;
if(b4.indexOf("data-")===0){b4=bL.camelCase(b4.substring(5));
bA(b6,b4,b9[b4])
}}bL._data(b6,"parsedAttrs",true)
}}return b9
}if(typeof cd==="object"){return this.each(function(){bL.data(this,cd)
})
}b8=cd.split(".",2);
b8[1]=b8[1]?"."+b8[1]:"";
b5=b8[1]+"!";
return bL.access(this,function(ce){if(ce===aG){b9=this.triggerHandler("getData"+b5,[b8[0]]);
if(b9===aG&&b6){b9=bL.data(b6,cd);
b9=bA(b6,cd,b9)
}return b9===aG&&b8[1]?this.data(b8[0]):b9
}b8[1]=ce;
this.each(function(){var cf=bL(this);
cf.triggerHandler("setData"+b5,b8);
bL.data(this,cd,ce);
cf.triggerHandler("changeData"+b5,b8)
})
},null,cc,arguments.length>1,null,false)
},removeData:function(b4){return this.each(function(){bL.removeData(this,b4)
})
}});
function bA(b6,b5,b7){if(b7===aG&&b6.nodeType===1){var b4="data-"+b5.replace(aQ,"-$1").toLowerCase();
b7=b6.getAttribute(b4);
if(typeof b7==="string"){try{b7=b7==="true"?true:b7==="false"?false:b7==="null"?null:+b7+""===b7?+b7:by.test(b7)?bL.parseJSON(b7):b7
}catch(b8){}bL.data(b6,b5,b7)
}else{b7=aG
}}return b7
}function T(b5){var b4;
for(b4 in b5){if(b4==="data"&&bL.isEmptyObject(b5[b4])){continue
}if(b4!=="toJSON"){return false
}}return true
}bL.extend({queue:function(b6,b5,b7){var b4;
if(b6){b5=(b5||"fx")+"queue";
b4=bL._data(b6,b5);
if(b7){if(!b4||bL.isArray(b7)){b4=bL._data(b6,b5,bL.makeArray(b7))
}else{b4.push(b7)
}}return b4||[]
}},dequeue:function(b9,b8){b8=b8||"fx";
var b5=bL.queue(b9,b8),ca=b5.length,b7=b5.shift(),b4=bL._queueHooks(b9,b8),b6=function(){bL.dequeue(b9,b8)
};
if(b7==="inprogress"){b7=b5.shift();
ca--
}if(b7){if(b8==="fx"){b5.unshift("inprogress")
}delete b4.stop;
b7.call(b9,b6,b4)
}if(!ca&&b4){b4.empty.fire()
}},_queueHooks:function(b6,b5){var b4=b5+"queueHooks";
return bL._data(b6,b4)||bL._data(b6,b4,{empty:bL.Callbacks("once memory").add(function(){bL.removeData(b6,b5+"queue",true);
bL.removeData(b6,b4,true)
})})
}});
bL.fn.extend({queue:function(b4,b5){var b6=2;
if(typeof b4!=="string"){b5=b4;
b4="fx";
b6--
}if(arguments.length<b6){return bL.queue(this[0],b4)
}return b5===aG?this:this.each(function(){var b7=bL.queue(this,b4,b5);
bL._queueHooks(this,b4);
if(b4==="fx"&&b7[0]!=="inprogress"){bL.dequeue(this,b4)
}})
},dequeue:function(b4){return this.each(function(){bL.dequeue(this,b4)
})
},delay:function(b5,b4){b5=bL.fx?bL.fx.speeds[b5]||b5:b5;
b4=b4||"fx";
return this.queue(b4,function(b7,b6){var b8=setTimeout(b7,b5);
b6.stop=function(){clearTimeout(b8)
}
})
},clearQueue:function(b4){return this.queue(b4||"fx",[])
},promise:function(b6,ca){var b5,b7=1,cb=bL.Deferred(),b9=this,b4=this.length,b8=function(){if(!(--b7)){cb.resolveWith(b9,[b9])
}};
if(typeof b6!=="string"){ca=b6;
b6=aG
}b6=b6||"fx";
while(b4--){b5=bL._data(b9[b4],b6+"queueHooks");
if(b5&&b5.empty){b7++;
b5.empty.add(b8)
}}b8();
return cb.promise(ca)
}});
var bc,b0,r,bO=/[\t\r\n]/g,an=/\r/g,n=/^(?:button|input)$/i,aF=/^(?:button|input|object|select|textarea)$/i,I=/^a(?:rea|)$/i,R=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bQ=bL.support.getSetAttribute;
bL.fn.extend({attr:function(b4,b5){return bL.access(this,bL.attr,b4,b5,arguments.length>1)
},removeAttr:function(b4){return this.each(function(){bL.removeAttr(this,b4)
})
},prop:function(b4,b5){return bL.access(this,bL.prop,b4,b5,arguments.length>1)
},removeProp:function(b4){b4=bL.propFix[b4]||b4;
return this.each(function(){try{this[b4]=aG;
delete this[b4]
}catch(b5){}})
},addClass:function(b8){var ca,b6,b5,b7,b9,cb,b4;
if(bL.isFunction(b8)){return this.each(function(cc){bL(this).addClass(b8.call(this,cc,this.className))
})
}if(b8&&typeof b8==="string"){ca=b8.split(a0);
for(b6=0,b5=this.length;
b6<b5;
b6++){b7=this[b6];
if(b7.nodeType===1){if(!b7.className&&ca.length===1){b7.className=b8
}else{b9=" "+b7.className+" ";
for(cb=0,b4=ca.length;
cb<b4;
cb++){if(!~b9.indexOf(" "+ca[cb]+" ")){b9+=ca[cb]+" "
}}b7.className=bL.trim(b9)
}}}}return this
},removeClass:function(ca){var b7,b8,b9,cb,b5,b6,b4;
if(bL.isFunction(ca)){return this.each(function(cc){bL(this).removeClass(ca.call(this,cc,this.className))
})
}if((ca&&typeof ca==="string")||ca===aG){b7=(ca||"").split(a0);
for(b6=0,b4=this.length;
b6<b4;
b6++){b9=this[b6];
if(b9.nodeType===1&&b9.className){b8=(" "+b9.className+" ").replace(bO," ");
for(cb=0,b5=b7.length;
cb<b5;
cb++){while(b8.indexOf(" "+b7[cb]+" ")>-1){b8=b8.replace(" "+b7[cb]+" "," ")
}}b9.className=ca?bL.trim(b8):""
}}}return this
},toggleClass:function(b7,b5){var b6=typeof b7,b4=typeof b5==="boolean";
if(bL.isFunction(b7)){return this.each(function(b8){bL(this).toggleClass(b7.call(this,b8,this.className,b5),b5)
})
}return this.each(function(){if(b6==="string"){var ca,b9=0,b8=bL(this),cb=b5,cc=b7.split(a0);
while((ca=cc[b9++])){cb=b4?cb:!b8.hasClass(ca);
b8[cb?"addClass":"removeClass"](ca)
}}else{if(b6==="undefined"||b6==="boolean"){if(this.className){bL._data(this,"__className__",this.className)
}this.className=this.className||b7===false?"":bL._data(this,"__className__")||""
}}})
},hasClass:function(b4){var b7=" "+b4+" ",b6=0,b5=this.length;
for(;
b6<b5;
b6++){if(this[b6].nodeType===1&&(" "+this[b6].className+" ").replace(bO," ").indexOf(b7)>-1){return true
}}return false
},val:function(b7){var b4,b5,b8,b6=this[0];
if(!arguments.length){if(b6){b4=bL.valHooks[b6.type]||bL.valHooks[b6.nodeName.toLowerCase()];
if(b4&&"get" in b4&&(b5=b4.get(b6,"value"))!==aG){return b5
}b5=b6.value;
return typeof b5==="string"?b5.replace(an,""):b5==null?"":b5
}return
}b8=bL.isFunction(b7);
return this.each(function(ca){var cb,b9=bL(this);
if(this.nodeType!==1){return
}if(b8){cb=b7.call(this,ca,b9.val())
}else{cb=b7
}if(cb==null){cb=""
}else{if(typeof cb==="number"){cb+=""
}else{if(bL.isArray(cb)){cb=bL.map(cb,function(cc){return cc==null?"":cc+""
})
}}}b4=bL.valHooks[this.type]||bL.valHooks[this.nodeName.toLowerCase()];
if(!b4||!("set" in b4)||b4.set(this,cb,"value")===aG){this.value=cb
}})
}});
bL.extend({valHooks:{option:{get:function(b4){var b5=b4.attributes.value;
return !b5||b5.specified?b4.value:b4.text
}},select:{get:function(b4){var ca,b5,b9,b7,b8=b4.selectedIndex,cb=[],cc=b4.options,b6=b4.type==="select-one";
if(b8<0){return null
}b5=b6?b8:0;
b9=b6?b8+1:cc.length;
for(;
b5<b9;
b5++){b7=cc[b5];
if(b7.selected&&(bL.support.optDisabled?!b7.disabled:b7.getAttribute("disabled")===null)&&(!b7.parentNode.disabled||!bL.nodeName(b7.parentNode,"optgroup"))){ca=bL(b7).val();
if(b6){return ca
}cb.push(ca)
}}if(b6&&!cb.length&&cc.length){return bL(cc[b8]).val()
}return cb
},set:function(b5,b6){var b4=bL.makeArray(b6);
bL(b5).find("option").each(function(){this.selected=bL.inArray(bL(this).val(),b4)>=0
});
if(!b4.length){b5.selectedIndex=-1
}return b4
}}},attrFn:{},attr:function(ca,b7,cb,b9){var b6,b4,b8,b5=ca.nodeType;
if(!ca||b5===3||b5===8||b5===2){return
}if(b9&&bL.isFunction(bL.fn[b7])){return bL(ca)[b7](cb)
}if(typeof ca.getAttribute==="undefined"){return bL.prop(ca,b7,cb)
}b8=b5!==1||!bL.isXMLDoc(ca);
if(b8){b7=b7.toLowerCase();
b4=bL.attrHooks[b7]||(R.test(b7)?b0:bc)
}if(cb!==aG){if(cb===null){bL.removeAttr(ca,b7);
return
}else{if(b4&&"set" in b4&&b8&&(b6=b4.set(ca,cb,b7))!==aG){return b6
}else{ca.setAttribute(b7,""+cb);
return cb
}}}else{if(b4&&"get" in b4&&b8&&(b6=b4.get(ca,b7))!==null){return b6
}else{b6=ca.getAttribute(b7);
return b6===null?aG:b6
}}},removeAttr:function(b7,b9){var b8,ca,b5,b4,b6=0;
if(b9&&b7.nodeType===1){ca=b9.split(a0);
for(;
b6<ca.length;
b6++){b5=ca[b6];
if(b5){b8=bL.propFix[b5]||b5;
b4=R.test(b5);
if(!b4){bL.attr(b7,b5,"")
}b7.removeAttribute(bQ?b5:b8);
if(b4&&b8 in b7){b7[b8]=false
}}}}},attrHooks:{type:{set:function(b4,b5){if(n.test(b4.nodeName)&&b4.parentNode){bL.error("type property can't be changed")
}else{if(!bL.support.radioValue&&b5==="radio"&&bL.nodeName(b4,"input")){var b6=b4.value;
b4.setAttribute("type",b5);
if(b6){b4.value=b6
}return b5
}}}},value:{get:function(b5,b4){if(bc&&bL.nodeName(b5,"button")){return bc.get(b5,b4)
}return b4 in b5?b5.value:null
},set:function(b5,b6,b4){if(bc&&bL.nodeName(b5,"button")){return bc.set(b5,b6,b4)
}b5.value=b6
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b9,b7,ca){var b6,b4,b8,b5=b9.nodeType;
if(!b9||b5===3||b5===8||b5===2){return
}b8=b5!==1||!bL.isXMLDoc(b9);
if(b8){b7=bL.propFix[b7]||b7;
b4=bL.propHooks[b7]
}if(ca!==aG){if(b4&&"set" in b4&&(b6=b4.set(b9,ca,b7))!==aG){return b6
}else{return(b9[b7]=ca)
}}else{if(b4&&"get" in b4&&(b6=b4.get(b9,b7))!==null){return b6
}else{return b9[b7]
}}},propHooks:{tabIndex:{get:function(b5){var b4=b5.getAttributeNode("tabindex");
return b4&&b4.specified?parseInt(b4.value,10):aF.test(b5.nodeName)||I.test(b5.nodeName)&&b5.href?0:aG
}}}});
b0={get:function(b5,b4){var b7,b6=bL.prop(b5,b4);
return b6===true||typeof b6!=="boolean"&&(b7=b5.getAttributeNode(b4))&&b7.nodeValue!==false?b4.toLowerCase():aG
},set:function(b5,b7,b4){var b6;
if(b7===false){bL.removeAttr(b5,b4)
}else{b6=bL.propFix[b4]||b4;
if(b6 in b5){b5[b6]=true
}b5.setAttribute(b4,b4.toLowerCase())
}return b4
}};
if(!bQ){r={name:true,id:true,coords:true};
bc=bL.valHooks.button={get:function(b6,b5){var b4;
b4=b6.getAttributeNode(b5);
return b4&&(r[b5]?b4.value!=="":b4.specified)?b4.value:aG
},set:function(b6,b7,b5){var b4=b6.getAttributeNode(b5);
if(!b4){b4=s.createAttribute(b5);
b6.setAttributeNode(b4)
}return(b4.value=b7+"")
}};
bL.each(["width","height"],function(b5,b4){bL.attrHooks[b4]=bL.extend(bL.attrHooks[b4],{set:function(b6,b7){if(b7===""){b6.setAttribute(b4,"auto");
return b7
}}})
});
bL.attrHooks.contenteditable={get:bc.get,set:function(b5,b6,b4){if(b6===""){b6="false"
}bc.set(b5,b6,b4)
}}
}if(!bL.support.hrefNormalized){bL.each(["href","src","width","height"],function(b5,b4){bL.attrHooks[b4]=bL.extend(bL.attrHooks[b4],{get:function(b7){var b6=b7.getAttribute(b4,2);
return b6===null?aG:b6
}})
})
}if(!bL.support.style){bL.attrHooks.style={get:function(b4){return b4.style.cssText.toLowerCase()||aG
},set:function(b4,b5){return(b4.style.cssText=""+b5)
}}
}if(!bL.support.optSelected){bL.propHooks.selected=bL.extend(bL.propHooks.selected,{get:function(b5){var b4=b5.parentNode;
if(b4){b4.selectedIndex;
if(b4.parentNode){b4.parentNode.selectedIndex
}}return null
}})
}if(!bL.support.enctype){bL.propFix.enctype="encoding"
}if(!bL.support.checkOn){bL.each(["radio","checkbox"],function(){bL.valHooks[this]={get:function(b4){return b4.getAttribute("value")===null?"on":b4.value
}}
})
}bL.each(["radio","checkbox"],function(){bL.valHooks[this]=bL.extend(bL.valHooks[this],{set:function(b4,b5){if(bL.isArray(b5)){return(b4.checked=bL.inArray(bL(b4).val(),b5)>=0)
}}})
});
var bJ=/^(?:textarea|input|select)$/i,bw=/^([^\.]*|)(?:\.(.+)|)$/,bf=/(?:^|\s)hover(\.\S+|)\b/,a8=/^key/,bP=/^(?:mouse|contextmenu)|click/,bD=/^(?:focusinfocus|focusoutblur)$/,aw=function(b4){return bL.event.special.hover?b4:b4.replace(bf,"mouseenter$1 mouseleave$1")
};
bL.event={add:function(b7,cb,ci,b9,b8){var cc,ca,cj,ch,cg,ce,b4,cf,b5,b6,cd;
if(b7.nodeType===3||b7.nodeType===8||!cb||!ci||!(cc=bL._data(b7))){return
}if(ci.handler){b5=ci;
ci=b5.handler;
b8=b5.selector
}if(!ci.guid){ci.guid=bL.guid++
}cj=cc.events;
if(!cj){cc.events=cj={}
}ca=cc.handle;
if(!ca){cc.handle=ca=function(ck){return typeof bL!=="undefined"&&(!ck||bL.event.triggered!==ck.type)?bL.event.dispatch.apply(ca.elem,arguments):aG
};
ca.elem=b7
}cb=bL.trim(aw(cb)).split(" ");
for(ch=0;
ch<cb.length;
ch++){cg=bw.exec(cb[ch])||[];
ce=cg[1];
b4=(cg[2]||"").split(".").sort();
cd=bL.event.special[ce]||{};
ce=(b8?cd.delegateType:cd.bindType)||ce;
cd=bL.event.special[ce]||{};
cf=bL.extend({type:ce,origType:cg[1],data:b9,handler:ci,guid:ci.guid,selector:b8,namespace:b4.join(".")},b5);
b6=cj[ce];
if(!b6){b6=cj[ce]=[];
b6.delegateCount=0;
if(!cd.setup||cd.setup.call(b7,b9,b4,ca)===false){if(b7.addEventListener){b7.addEventListener(ce,ca,false)
}else{if(b7.attachEvent){b7.attachEvent("on"+ce,ca)
}}}}if(cd.add){cd.add.call(b7,cf);
if(!cf.handler.guid){cf.handler.guid=ci.guid
}}if(b8){b6.splice(b6.delegateCount++,0,cf)
}else{b6.push(cf)
}bL.event.global[ce]=true
}b7=null
},global:{},remove:function(b7,cc,ci,b8,cb){var cj,ck,cf,b6,b5,b9,ca,ch,ce,b4,cg,cd=bL.hasData(b7)&&bL._data(b7);
if(!cd||!(ch=cd.events)){return
}cc=bL.trim(aw(cc||"")).split(" ");
for(cj=0;
cj<cc.length;
cj++){ck=bw.exec(cc[cj])||[];
cf=b6=ck[1];
b5=ck[2];
if(!cf){for(cf in ch){bL.event.remove(b7,cf+cc[cj],ci,b8,true)
}continue
}ce=bL.event.special[cf]||{};
cf=(b8?ce.delegateType:ce.bindType)||cf;
b4=ch[cf]||[];
b9=b4.length;
b5=b5?new RegExp("(^|\\.)"+b5.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(ca=0;
ca<b4.length;
ca++){cg=b4[ca];
if((cb||b6===cg.origType)&&(!ci||ci.guid===cg.guid)&&(!b5||b5.test(cg.namespace))&&(!b8||b8===cg.selector||b8==="**"&&cg.selector)){b4.splice(ca--,1);
if(cg.selector){b4.delegateCount--
}if(ce.remove){ce.remove.call(b7,cg)
}}}if(b4.length===0&&b9!==b4.length){if(!ce.teardown||ce.teardown.call(b7,b5,cd.handle)===false){bL.removeEvent(b7,cf,cd.handle)
}delete ch[cf]
}}if(bL.isEmptyObject(ch)){delete cd.handle;
bL.removeData(b7,"events",true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(b5,cc,ca,cj){if(ca&&(ca.nodeType===3||ca.nodeType===8)){return
}var b4,b7,cd,ch,b9,b8,cf,ce,cb,ci,cg=b5.type||b5,b6=[];
if(bD.test(cg+bL.event.triggered)){return
}if(cg.indexOf("!")>=0){cg=cg.slice(0,-1);
b7=true
}if(cg.indexOf(".")>=0){b6=cg.split(".");
cg=b6.shift();
b6.sort()
}if((!ca||bL.event.customEvent[cg])&&!bL.event.global[cg]){return
}b5=typeof b5==="object"?b5[bL.expando]?b5:new bL.Event(cg,b5):new bL.Event(cg);
b5.type=cg;
b5.isTrigger=true;
b5.exclusive=b7;
b5.namespace=b6.join(".");
b5.namespace_re=b5.namespace?new RegExp("(^|\\.)"+b6.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b8=cg.indexOf(":")<0?"on"+cg:"";
if(!ca){b4=bL.cache;
for(cd in b4){if(b4[cd].events&&b4[cd].events[cg]){bL.event.trigger(b5,cc,b4[cd].handle.elem,true)
}}return
}b5.result=aG;
if(!b5.target){b5.target=ca
}cc=cc!=null?bL.makeArray(cc):[];
cc.unshift(b5);
cf=bL.event.special[cg]||{};
if(cf.trigger&&cf.trigger.apply(ca,cc)===false){return
}cb=[[ca,cf.bindType||cg]];
if(!cj&&!cf.noBubble&&!bL.isWindow(ca)){ci=cf.delegateType||cg;
ch=bD.test(ci+cg)?ca:ca.parentNode;
for(b9=ca;
ch;
ch=ch.parentNode){cb.push([ch,ci]);
b9=ch
}if(b9===(ca.ownerDocument||s)){cb.push([b9.defaultView||b9.parentWindow||a7,ci])
}}for(cd=0;
cd<cb.length&&!b5.isPropagationStopped();
cd++){ch=cb[cd][0];
b5.type=cb[cd][1];
ce=(bL._data(ch,"events")||{})[b5.type]&&bL._data(ch,"handle");
if(ce){ce.apply(ch,cc)
}ce=b8&&ch[b8];
if(ce&&bL.acceptData(ch)&&ce.apply(ch,cc)===false){b5.preventDefault()
}}b5.type=cg;
if(!cj&&!b5.isDefaultPrevented()){if((!cf._default||cf._default.apply(ca.ownerDocument,cc)===false)&&!(cg==="click"&&bL.nodeName(ca,"a"))&&bL.acceptData(ca)){if(b8&&ca[cg]&&((cg!=="focus"&&cg!=="blur")||b5.target.offsetWidth!==0)&&!bL.isWindow(ca)){b9=ca[b8];
if(b9){ca[b8]=null
}bL.event.triggered=cg;
ca[cg]();
bL.event.triggered=aG;
if(b9){ca[b8]=b9
}}}}return b5.result
},dispatch:function(b4){b4=bL.event.fix(b4||a7.event);
var cb,ca,ck,ce,cd,b5,cc,ci,b7,cj,b8=((bL._data(this,"events")||{})[b4.type]||[]),b9=b8.delegateCount,cg=[].slice.call(arguments),b6=!b4.exclusive&&!b4.namespace,cf=bL.event.special[b4.type]||{},ch=[];
cg[0]=b4;
b4.delegateTarget=this;
if(cf.preDispatch&&cf.preDispatch.call(this,b4)===false){return
}if(b9&&!(b4.button&&b4.type==="click")){for(ck=b4.target;
ck!=this;
ck=ck.parentNode||this){if(ck.disabled!==true||b4.type!=="click"){cd={};
cc=[];
for(cb=0;
cb<b9;
cb++){ci=b8[cb];
b7=ci.selector;
if(cd[b7]===aG){cd[b7]=bL(b7,this).index(ck)>=0
}if(cd[b7]){cc.push(ci)
}}if(cc.length){ch.push({elem:ck,matches:cc})
}}}}if(b8.length>b9){ch.push({elem:this,matches:b8.slice(b9)})
}for(cb=0;
cb<ch.length&&!b4.isPropagationStopped();
cb++){b5=ch[cb];
b4.currentTarget=b5.elem;
for(ca=0;
ca<b5.matches.length&&!b4.isImmediatePropagationStopped();
ca++){ci=b5.matches[ca];
if(b6||(!b4.namespace&&!ci.namespace)||b4.namespace_re&&b4.namespace_re.test(ci.namespace)){b4.data=ci.data;
b4.handleObj=ci;
ce=((bL.event.special[ci.origType]||{}).handle||ci.handler).apply(b5.elem,cg);
if(ce!==aG){b4.result=ce;
if(ce===false){b4.preventDefault();
b4.stopPropagation()
}}}}}if(cf.postDispatch){cf.postDispatch.call(this,b4)
}return b4.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b5,b4){if(b5.which==null){b5.which=b4.charCode!=null?b4.charCode:b4.keyCode
}return b5
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b7,b6){var b8,b9,b4,b5=b6.button,ca=b6.fromElement;
if(b7.pageX==null&&b6.clientX!=null){b8=b7.target.ownerDocument||s;
b9=b8.documentElement;
b4=b8.body;
b7.pageX=b6.clientX+(b9&&b9.scrollLeft||b4&&b4.scrollLeft||0)-(b9&&b9.clientLeft||b4&&b4.clientLeft||0);
b7.pageY=b6.clientY+(b9&&b9.scrollTop||b4&&b4.scrollTop||0)-(b9&&b9.clientTop||b4&&b4.clientTop||0)
}if(!b7.relatedTarget&&ca){b7.relatedTarget=ca===b7.target?b6.toElement:ca
}if(!b7.which&&b5!==aG){b7.which=(b5&1?1:(b5&2?3:(b5&4?2:0)))
}return b7
}},fix:function(b6){if(b6[bL.expando]){return b6
}var b5,b9,b4=b6,b7=bL.event.fixHooks[b6.type]||{},b8=b7.props?this.props.concat(b7.props):this.props;
b6=bL.Event(b4);
for(b5=b8.length;
b5;
){b9=b8[--b5];
b6[b9]=b4[b9]
}if(!b6.target){b6.target=b4.srcElement||s
}if(b6.target.nodeType===3){b6.target=b6.target.parentNode
}b6.metaKey=!!b6.metaKey;
return b7.filter?b7.filter(b6,b4):b6
},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b6,b5,b4){if(bL.isWindow(this)){this.onbeforeunload=b4
}},teardown:function(b5,b4){if(this.onbeforeunload===b4){this.onbeforeunload=null
}}}},simulate:function(b5,b7,b6,b4){var b8=bL.extend(new bL.Event(),b6,{type:b5,isSimulated:true,originalEvent:{}});
if(b4){bL.event.trigger(b8,null,b7)
}else{bL.event.dispatch.call(b7,b8)
}if(b8.isDefaultPrevented()){b6.preventDefault()
}}};
bL.event.handle=bL.event.dispatch;
bL.removeEvent=s.removeEventListener?function(b5,b4,b6){if(b5.removeEventListener){b5.removeEventListener(b4,b6,false)
}}:function(b6,b5,b7){var b4="on"+b5;
if(b6.detachEvent){if(typeof b6[b4]==="undefined"){b6[b4]=null
}b6.detachEvent(b4,b7)
}};
bL.Event=function(b5,b4){if(!(this instanceof bL.Event)){return new bL.Event(b5,b4)
}if(b5&&b5.type){this.originalEvent=b5;
this.type=b5.type;
this.isDefaultPrevented=(b5.defaultPrevented||b5.returnValue===false||b5.getPreventDefault&&b5.getPreventDefault())?W:ac
}else{this.type=b5
}if(b4){bL.extend(this,b4)
}this.timeStamp=b5&&b5.timeStamp||bL.now();
this[bL.expando]=true
};
function ac(){return false
}function W(){return true
}bL.Event.prototype={preventDefault:function(){this.isDefaultPrevented=W;
var b4=this.originalEvent;
if(!b4){return
}if(b4.preventDefault){b4.preventDefault()
}else{b4.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=W;
var b4=this.originalEvent;
if(!b4){return
}if(b4.stopPropagation){b4.stopPropagation()
}b4.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=W;
this.stopPropagation()
},isDefaultPrevented:ac,isPropagationStopped:ac,isImmediatePropagationStopped:ac};
bL.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b5,b4){bL.event.special[b5]={delegateType:b4,bindType:b4,handle:function(b9){var b7,cb=this,ca=b9.relatedTarget,b8=b9.handleObj,b6=b8.selector;
if(!ca||(ca!==cb&&!bL.contains(cb,ca))){b9.type=b8.origType;
b7=b8.handler.apply(this,arguments);
b9.type=b4
}return b7
}}
});
if(!bL.support.submitBubbles){bL.event.special.submit={setup:function(){if(bL.nodeName(this,"form")){return false
}bL.event.add(this,"click._submit keypress._submit",function(b6){var b5=b6.target,b4=bL.nodeName(b5,"input")||bL.nodeName(b5,"button")?b5.form:aG;
if(b4&&!bL._data(b4,"_submit_attached")){bL.event.add(b4,"submit._submit",function(b7){b7._submit_bubble=true
});
bL._data(b4,"_submit_attached",true)
}})
},postDispatch:function(b4){if(b4._submit_bubble){delete b4._submit_bubble;
if(this.parentNode&&!b4.isTrigger){bL.event.simulate("submit",this.parentNode,b4,true)
}}},teardown:function(){if(bL.nodeName(this,"form")){return false
}bL.event.remove(this,"._submit")
}}
}if(!bL.support.changeBubbles){bL.event.special.change={setup:function(){if(bJ.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bL.event.add(this,"propertychange._change",function(b4){if(b4.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bL.event.add(this,"click._change",function(b4){if(this._just_changed&&!b4.isTrigger){this._just_changed=false
}bL.event.simulate("change",this,b4,true)
})
}return false
}bL.event.add(this,"beforeactivate._change",function(b5){var b4=b5.target;
if(bJ.test(b4.nodeName)&&!bL._data(b4,"_change_attached")){bL.event.add(b4,"change._change",function(b6){if(this.parentNode&&!b6.isSimulated&&!b6.isTrigger){bL.event.simulate("change",this.parentNode,b6,true)
}});
bL._data(b4,"_change_attached",true)
}})
},handle:function(b5){var b4=b5.target;
if(this!==b4||b5.isSimulated||b5.isTrigger||(b4.type!=="radio"&&b4.type!=="checkbox")){return b5.handleObj.handler.apply(this,arguments)
}},teardown:function(){bL.event.remove(this,"._change");
return !bJ.test(this.nodeName)
}}
}if(!bL.support.focusinBubbles){bL.each({focus:"focusin",blur:"focusout"},function(b7,b4){var b5=0,b6=function(b8){bL.event.simulate(b4,b8.target,bL.event.fix(b8),true)
};
bL.event.special[b4]={setup:function(){if(b5++===0){s.addEventListener(b7,b6,true)
}},teardown:function(){if(--b5===0){s.removeEventListener(b7,b6,true)
}}}
})
}bL.fn.extend({on:function(b6,b4,b9,b8,b5){var ca,b7;
if(typeof b6==="object"){if(typeof b4!=="string"){b9=b9||b4;
b4=aG
}for(b7 in b6){this.on(b7,b4,b9,b6[b7],b5)
}return this
}if(b9==null&&b8==null){b8=b4;
b9=b4=aG
}else{if(b8==null){if(typeof b4==="string"){b8=b9;
b9=aG
}else{b8=b9;
b9=b4;
b4=aG
}}}if(b8===false){b8=ac
}else{if(!b8){return this
}}if(b5===1){ca=b8;
b8=function(cb){bL().off(cb);
return ca.apply(this,arguments)
};
b8.guid=ca.guid||(ca.guid=bL.guid++)
}return this.each(function(){bL.event.add(this,b6,b8,b9,b4)
})
},one:function(b5,b4,b7,b6){return this.on(b5,b4,b7,b6,1)
},off:function(b6,b4,b8){var b5,b7;
if(b6&&b6.preventDefault&&b6.handleObj){b5=b6.handleObj;
bL(b6.delegateTarget).off(b5.namespace?b5.origType+"."+b5.namespace:b5.origType,b5.selector,b5.handler);
return this
}if(typeof b6==="object"){for(b7 in b6){this.off(b7,b4,b6[b7])
}return this
}if(b4===false||typeof b4==="function"){b8=b4;
b4=aG
}if(b8===false){b8=ac
}return this.each(function(){bL.event.remove(this,b6,b8,b4)
})
},bind:function(b4,b6,b5){return this.on(b4,null,b6,b5)
},unbind:function(b4,b5){return this.off(b4,null,b5)
},live:function(b4,b6,b5){bL(this.context).on(b4,this.selector,b6,b5);
return this
},die:function(b4,b5){bL(this.context).off(b4,this.selector||"**",b5);
return this
},delegate:function(b4,b5,b7,b6){return this.on(b5,b4,b7,b6)
},undelegate:function(b4,b5,b6){return arguments.length==1?this.off(b4,"**"):this.off(b5,b4||"**",b6)
},trigger:function(b4,b5){return this.each(function(){bL.event.trigger(b4,b5,this)
})
},triggerHandler:function(b4,b5){if(this[0]){return bL.event.trigger(b4,b5,this[0],true)
}},toggle:function(b7){var b5=arguments,b4=b7.guid||bL.guid++,b6=0,b8=function(b9){var ca=(bL._data(this,"lastToggle"+b7.guid)||0)%b6;
bL._data(this,"lastToggle"+b7.guid,ca+1);
b9.preventDefault();
return b5[ca].apply(this,arguments)||false
};
b8.guid=b4;
while(b6<b5.length){b5[b6++].guid=b4
}return this.click(b8)
},hover:function(b4,b5){return this.mouseenter(b4).mouseleave(b5||b4)
}});
bL.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b5,b4){bL.fn[b4]=function(b7,b6){if(b6==null){b6=b7;
b7=null
}return arguments.length>0?this.on(b4,null,b7,b6):this.trigger(b4)
};
if(a8.test(b4)){bL.event.fixHooks[b4]=bL.event.keyHooks
}if(bP.test(b4)){bL.event.fixHooks[b4]=bL.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012 jQuery Foundation and other contributors
 *  Released under the MIT license
 *  http://sizzlejs.com/
 */
(function(cS,ck){var cs,cX,ce,cK,b5,co,cB,ch,cj,cg,cd=true,cw="undefined",c0=("sizcache"+Math.random()).replace(".",""),cc=cS.document,cf=cc.documentElement,ci=0,cn=[].slice,cW=[].push,c2=function(c7,c8){c7[c0]=c8||true;
return c7
},c5=function(){var c7={},c8=[];
return c2(function(c9,da){if(c8.push(c9)>cK.cacheLength){delete c7[c8.shift()]
}return(c7[c9]=da)
},c7)
},cU=c5(),cV=c5(),cp=c5(),cA="[\\x20\\t\\r\\n\\f]",cm="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",cl=cm.replace("w","w#"),c4="([*^$|!~]?=)",cP="\\["+cA+"*("+cm+")"+cA+"*(?:"+c4+cA+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cl+")|)|)"+cA+"*\\]",c6=":("+cm+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cP+")|[^:]|\\\\.)*|.*))\\)|)",cC=":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",cY=new RegExp("^"+cA+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cA+"+$","g"),b9=new RegExp("^"+cA+"*,"+cA+"*"),cH=new RegExp("^"+cA+"*([\\x20\\t\\r\\n\\f>+~])"+cA+"*"),cM=new RegExp(c6),cO=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cF=/^:not/,cR=/[\x20\t\r\n\f]*[+~]/,c1=/:not\($/,ct=/h\d/i,cN=/input|select|textarea|button/i,cu=/\\(?!\\)/g,cG={ID:new RegExp("^#("+cm+")"),CLASS:new RegExp("^\\.("+cm+")"),NAME:new RegExp("^\\[name=['\"]?("+cm+")['\"]?\\]"),TAG:new RegExp("^("+cm.replace("w","w*")+")"),ATTR:new RegExp("^"+cP),PSEUDO:new RegExp("^"+c6),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+cA+"*(even|odd|(([+-]|)(\\d*)n|)"+cA+"*(?:([+-]|)"+cA+"*(\\d+)|))"+cA+"*\\)|)","i"),POS:new RegExp(cC,"ig"),needsContext:new RegExp("^"+cA+"*[>+~]|"+cC,"i")},cJ=function(c7){var c9=cc.createElement("div");
try{return c7(c9)
}catch(c8){return false
}finally{c9=null
}},cb=cJ(function(c7){c7.appendChild(cc.createComment(""));
return !c7.getElementsByTagName("*").length
}),cE=cJ(function(c7){c7.innerHTML="<a href='#'></a>";
return c7.firstChild&&typeof c7.firstChild.getAttribute!==cw&&c7.firstChild.getAttribute("href")==="#"
}),cr=cJ(function(c8){c8.innerHTML="<select></select>";
var c7=typeof c8.lastChild.getAttribute("multiple");
return c7!=="boolean"&&c7!=="string"
}),cD=cJ(function(c7){c7.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!c7.getElementsByClassName||!c7.getElementsByClassName("e").length){return false
}c7.lastChild.className="e";
return c7.getElementsByClassName("e").length===2
}),b4=cJ(function(c8){c8.id=c0+0;
c8.innerHTML="<a name='"+c0+"'></a><div name='"+c0+"'></div>";
cf.insertBefore(c8,cf.firstChild);
var c7=cc.getElementsByName&&cc.getElementsByName(c0).length===2+cc.getElementsByName(c0+0).length;
ce=!cc.getElementById(c0);
cf.removeChild(c8);
return c7
});
try{cn.call(cf.childNodes,0)[0].nodeType
}catch(c3){cn=function(c8){var c9,c7=[];
for(;
(c9=this[c8]);
c8++){c7.push(c9)
}return c7
}
}function cQ(da,c7,dc,df){dc=dc||[];
c7=c7||cc;
var dd,c8,de,c9,db=c7.nodeType;
if(db!==1&&db!==9){return[]
}if(!da||typeof da!=="string"){return dc
}de=co(c7);
if(!de&&!df){if((dd=cO.exec(da))){if((c9=dd[1])){if(db===9){c8=c7.getElementById(c9);
if(c8&&c8.parentNode){if(c8.id===c9){dc.push(c8);
return dc
}}else{return dc
}}else{if(c7.ownerDocument&&(c8=c7.ownerDocument.getElementById(c9))&&cB(c7,c8)&&c8.id===c9){dc.push(c8);
return dc
}}}else{if(dd[2]){cW.apply(dc,cn.call(c7.getElementsByTagName(da),0));
return dc
}else{if((c9=dd[3])&&cD&&c7.getElementsByClassName){cW.apply(dc,cn.call(c7.getElementsByClassName(c9),0));
return dc
}}}}}return cZ(da,c7,dc,df,de)
}cQ.matches=function(c8,c7){return cQ(c8,null,null,c7)
};
cQ.matchesSelector=function(c7,c8){return cQ(c8,null,null,[c7]).length>0
};
function cI(c7){return function(c9){var c8=c9.nodeName.toLowerCase();
return c8==="input"&&c9.type===c7
}
}function b8(c7){return function(c9){var c8=c9.nodeName.toLowerCase();
return(c8==="input"||c8==="button")&&c9.type===c7
}
}b5=cQ.getText=function(db){var da,c8="",c9=0,c7=db.nodeType;
if(c7){if(c7===1||c7===9||c7===11){if(typeof db.textContent==="string"){return db.textContent
}else{for(db=db.firstChild;
db;
db=db.nextSibling){c8+=b5(db)
}}}else{if(c7===3||c7===4){return db.nodeValue
}}}else{for(;
(da=db[c9]);
c9++){c8+=b5(da)
}}return c8
};
co=cQ.isXML=function co(c7){var c8=c7&&(c7.ownerDocument||c7).documentElement;
return c8?c8.nodeName!=="HTML":false
};
cB=cQ.contains=cf.contains?function(c8,c7){var da=c8.nodeType===9?c8.documentElement:c8,c9=c7&&c7.parentNode;
return c8===c9||!!(c9&&c9.nodeType===1&&da.contains&&da.contains(c9))
}:cf.compareDocumentPosition?function(c8,c7){return c7&&!!(c8.compareDocumentPosition(c7)&16)
}:function(c8,c7){while((c7=c7.parentNode)){if(c7===c8){return true
}}return false
};
cQ.attr=function(da,c9){var c7,c8=co(da);
if(!c8){c9=c9.toLowerCase()
}if(cK.attrHandle[c9]){return cK.attrHandle[c9](da)
}if(cr||c8){return da.getAttribute(c9)
}c7=da.getAttributeNode(c9);
return c7?typeof da[c9]==="boolean"?da[c9]?c9:null:c7.specified?c7.value:null:null
};
cK=cQ.selectors={cacheLength:50,createPseudo:c2,match:cG,order:new RegExp("ID|TAG"+(b4?"|NAME":"")+(cD?"|CLASS":"")),attrHandle:cE?{}:{href:function(c7){return c7.getAttribute("href",2)
},type:function(c7){return c7.getAttribute("type")
}},find:{ID:ce?function(da,c9,c8){if(typeof c9.getElementById!==cw&&!c8){var c7=c9.getElementById(da);
return c7&&c7.parentNode?[c7]:[]
}}:function(da,c9,c8){if(typeof c9.getElementById!==cw&&!c8){var c7=c9.getElementById(da);
return c7?c7.id===da||typeof c7.getAttributeNode!==cw&&c7.getAttributeNode("id").value===da?[c7]:ck:[]
}},TAG:cb?function(c7,c8){if(typeof c8.getElementsByTagName!==cw){return c8.getElementsByTagName(c7)
}}:function(c7,db){var da=db.getElementsByTagName(c7);
if(c7==="*"){var dc,c9=[],c8=0;
for(;
(dc=da[c8]);
c8++){if(dc.nodeType===1){c9.push(dc)
}}return c9
}return da
},NAME:function(c7,c8){if(typeof c8.getElementsByName!==cw){return c8.getElementsByName(name)
}},CLASS:function(c9,c8,c7){if(typeof c8.getElementsByClassName!==cw&&!c7){return c8.getElementsByClassName(c9)
}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(c7){c7[1]=c7[1].replace(cu,"");
c7[3]=(c7[4]||c7[5]||"").replace(cu,"");
if(c7[2]==="~="){c7[3]=" "+c7[3]+" "
}return c7.slice(0,4)
},CHILD:function(c7){c7[1]=c7[1].toLowerCase();
if(c7[1]==="nth"){if(!c7[2]){cQ.error(c7[0])
}c7[3]=+(c7[3]?c7[4]+(c7[5]||1):2*(c7[2]==="even"||c7[2]==="odd"));
c7[4]=+((c7[6]+c7[7])||c7[2]==="odd")
}else{if(c7[2]){cQ.error(c7[0])
}}return c7
},PSEUDO:function(c9,da,c8){var db,c7;
if(cG.CHILD.test(c9[0])){return null
}if(c9[3]){c9[2]=c9[3]
}else{if((db=c9[4])){if(cM.test(db)&&(c7=b6(db,da,c8,true))&&(c7=db.indexOf(")",db.length-c7)-db.length)){db=db.slice(0,c7);
c9[0]=c9[0].slice(0,c7)
}c9[2]=db
}}return c9.slice(0,3)
}},filter:{ID:ce?function(c7){c7=c7.replace(cu,"");
return function(c8){return c8.getAttribute("id")===c7
}
}:function(c7){c7=c7.replace(cu,"");
return function(c9){var c8=typeof c9.getAttributeNode!==cw&&c9.getAttributeNode("id");
return c8&&c8.value===c7
}
},TAG:function(c7){if(c7==="*"){return function(){return true
}
}c7=c7.replace(cu,"").toLowerCase();
return function(c8){return c8.nodeName&&c8.nodeName.toLowerCase()===c7
}
},CLASS:function(c7){var c8=cU[c0][c7];
if(!c8){c8=cU(c7,new RegExp("(^|"+cA+")"+c7+"("+cA+"|$)"))
}return function(c9){return c8.test(c9.className||(typeof c9.getAttribute!==cw&&c9.getAttribute("class"))||"")
}
},ATTR:function(c9,c8,c7){if(!c8){return function(da){return cQ.attr(da,c9)!=null
}
}return function(db){var da=cQ.attr(db,c9),dc=da+"";
if(da==null){return c8==="!="
}switch(c8){case"=":return dc===c7;
case"!=":return dc!==c7;
case"^=":return c7&&dc.indexOf(c7)===0;
case"*=":return c7&&dc.indexOf(c7)>-1;
case"$=":return c7&&dc.substr(dc.length-c7.length)===c7;
case"~=":return(" "+dc+" ").indexOf(c7)>-1;
case"|=":return dc===c7||dc.substr(0,c7.length+1)===c7+"-"
}}
},CHILD:function(c8,da,db,c9){if(c8==="nth"){var c7=ci++;
return function(df){var dc,dg,de=0,dd=df;
if(db===1&&c9===0){return true
}dc=df.parentNode;
if(dc&&(dc[c0]!==c7||!df.sizset)){for(dd=dc.firstChild;
dd;
dd=dd.nextSibling){if(dd.nodeType===1){dd.sizset=++de;
if(dd===df){break
}}}dc[c0]=c7
}dg=df.sizset-c9;
if(db===0){return dg===0
}else{return(dg%db===0&&dg/db>=0)
}}
}return function(dd){var dc=dd;
switch(c8){case"only":case"first":while((dc=dc.previousSibling)){if(dc.nodeType===1){return false
}}if(c8==="first"){return true
}dc=dd;
case"last":while((dc=dc.nextSibling)){if(dc.nodeType===1){return false
}}return true
}}
},PSEUDO:function(dc,db,c9,c8){var c7,da=cK.pseudos[dc]||cK.pseudos[dc.toLowerCase()];
if(!da){cQ.error("unsupported pseudo: "+dc)
}if(!da[c0]){if(da.length>1){c7=[dc,dc,"",db];
return function(dd){return da(dd,0,c7)
}
}return da
}return da(db,c9,c8)
}},pseudos:{not:c2(function(c7,c9,c8){var da=ch(c7.replace(cY,"$1"),c9,c8);
return function(db){return !da(db)
}
}),enabled:function(c7){return c7.disabled===false
},disabled:function(c7){return c7.disabled===true
},checked:function(c7){var c8=c7.nodeName.toLowerCase();
return(c8==="input"&&!!c7.checked)||(c8==="option"&&!!c7.selected)
},selected:function(c7){if(c7.parentNode){c7.parentNode.selectedIndex
}return c7.selected===true
},parent:function(c7){return !cK.pseudos.empty(c7)
},empty:function(c8){var c7;
c8=c8.firstChild;
while(c8){if(c8.nodeName>"@"||(c7=c8.nodeType)===3||c7===4){return false
}c8=c8.nextSibling
}return true
},contains:c2(function(c7){return function(c8){return(c8.textContent||c8.innerText||b5(c8)).indexOf(c7)>-1
}
}),has:c2(function(c7){return function(c8){return cQ(c7,c8).length>0
}
}),header:function(c7){return ct.test(c7.nodeName)
},text:function(c9){var c8,c7;
return c9.nodeName.toLowerCase()==="input"&&(c8=c9.type)==="text"&&((c7=c9.getAttribute("type"))==null||c7.toLowerCase()===c8)
},radio:cI("radio"),checkbox:cI("checkbox"),file:cI("file"),password:cI("password"),image:cI("image"),submit:b8("submit"),reset:b8("reset"),button:function(c8){var c7=c8.nodeName.toLowerCase();
return c7==="input"&&c8.type==="button"||c7==="button"
},input:function(c7){return cN.test(c7.nodeName)
},focus:function(c7){var c8=c7.ownerDocument;
return c7===c8.activeElement&&(!c8.hasFocus||c8.hasFocus())&&!!(c7.type||c7.href)
},active:function(c7){return c7===c7.ownerDocument.activeElement
}},setFilters:{first:function(c9,c8,c7){return c7?c9.slice(1):[c9[0]]
},last:function(da,c9,c8){var c7=da.pop();
return c8?da:[c7]
},even:function(dc,db,da){var c9=[],c8=da?1:0,c7=dc.length;
for(;
c8<c7;
c8=c8+2){c9.push(dc[c8])
}return c9
},odd:function(dc,db,da){var c9=[],c8=da?0:1,c7=dc.length;
for(;
c8<c7;
c8=c8+2){c9.push(dc[c8])
}return c9
},lt:function(c9,c8,c7){return c7?c9.slice(+c8):c9.slice(0,+c8)
},gt:function(c9,c8,c7){return c7?c9.slice(0,+c8+1):c9.slice(+c8+1)
},eq:function(da,c9,c8){var c7=da.splice(+c9,1);
return c8?da:c7
}}};
function b7(c8,c7,c9){if(c8===c7){return c9
}var da=c8.nextSibling;
while(da){if(da===c7){return -1
}da=da.nextSibling
}return 1
}cj=cf.compareDocumentPosition?function(c8,c7){if(c8===c7){cg=true;
return 0
}return(!c8.compareDocumentPosition||!c7.compareDocumentPosition?c8.compareDocumentPosition:c8.compareDocumentPosition(c7)&4)?-1:1
}:function(df,de){if(df===de){cg=true;
return 0
}else{if(df.sourceIndex&&de.sourceIndex){return df.sourceIndex-de.sourceIndex
}}var dc,c8,c9=[],c7=[],db=df.parentNode,dd=de.parentNode,dg=db;
if(db===dd){return b7(df,de)
}else{if(!db){return -1
}else{if(!dd){return 1
}}}while(dg){c9.unshift(dg);
dg=dg.parentNode
}dg=dd;
while(dg){c7.unshift(dg);
dg=dg.parentNode
}dc=c9.length;
c8=c7.length;
for(var da=0;
da<dc&&da<c8;
da++){if(c9[da]!==c7[da]){return b7(c9[da],c7[da])
}}return da===dc?b7(df,c7[da],-1):b7(c9[da],de,1)
};
[0,0].sort(cj);
cd=!cg;
cQ.uniqueSort=function(c8){var c9,c7=1;
cg=cd;
c8.sort(cj);
if(cg){for(;
(c9=c8[c7]);
c7++){if(c9===c8[c7-1]){c8.splice(c7--,1)
}}}return c8
};
cQ.error=function(c7){throw new Error("Syntax error, unrecognized expression: "+c7)
};
function b6(de,c8,dg,dn){var c9,dh,dj,dk,di,db,dm,df,c7,da,dd=!dg&&c8!==cc,dl=(dd?"<s>":"")+de.replace(cY,"$1<s>"),dc=cV[c0][dl];
if(dc){return dn?0:cn.call(dc,0)
}di=de;
db=[];
df=0;
c7=cK.preFilter;
da=cK.filter;
while(di){if(!c9||(dh=b9.exec(di))){if(dh){di=di.slice(dh[0].length);
dj.selector=dm
}db.push(dj=[]);
dm="";
if(dd){di=" "+di
}}c9=false;
if((dh=cH.exec(di))){dm+=dh[0];
di=di.slice(dh[0].length);
c9=dj.push({part:dh.pop().replace(cY," "),string:dh[0],captures:dh})
}for(dk in da){if((dh=cG[dk].exec(di))&&(!c7[dk]||(dh=c7[dk](dh,c8,dg)))){dm+=dh[0];
di=di.slice(dh[0].length);
c9=dj.push({part:dk,string:dh.shift(),captures:dh})
}}if(!c9){break
}}if(dm){dj.selector=dm
}return dn?di.length:di?cQ.error(de):cn.call(cV(dl,db),0)
}function cy(dc,db,da,c8){var c7=db.dir,c9=ci++;
if(!dc){dc=function(dd){return dd===da
}
}return db.first?function(dd){while((dd=dd[c7])){if(dd.nodeType===1){return dc(dd)&&dd
}}}:c8?function(dd){while((dd=dd[c7])){if(dd.nodeType===1){if(dc(dd)){return dd
}}}}:function(de){var dd,df=c9+"."+cs,dg=df+"."+cX;
while((de=de[c7])){if(de.nodeType===1){if((dd=de[c0])===dg){return de.sizset
}else{if(typeof dd==="string"&&dd.indexOf(df)===0){if(de.sizset){return de
}}else{de[c0]=dg;
if(dc(de)){de.sizset=true;
return de
}de.sizset=false
}}}}}
}function cv(c7,c8){return c7?function(da){var c9=c8(da);
return c9&&c7(c9===true?da:c9)
}:c8
}function cz(dc,da,c7){var c9,db,c8=0;
for(;
(c9=dc[c8]);
c8++){if(cK.relative[c9.part]){db=cy(db,cK.relative[c9.part],da,c7)
}else{db=cv(db,cK.filter[c9.part].apply(null,c9.captures.concat(da,c7)))
}}return db
}function ca(c7){return function(c9){var da,c8=0;
for(;
(da=c7[c8]);
c8++){if(da(c9)){return true
}}return false
}
}ch=cQ.compile=function(c8,db,c9){var dd,da,c7,dc=cp[c0][c8];
if(dc&&dc.context===db){return dc
}dd=b6(c8,db,c9);
for(da=0,c7=dd.length;
da<c7;
da++){dd[da]=cz(dd[da],db,c9)
}dc=cp(c8,ca(dd));
dc.context=db;
dc.runs=dc.dirruns=0;
return dc
};
function cq(c8,dc,db,c9){var da=0,c7=dc.length;
for(;
da<c7;
da++){cQ(c8,dc[da],db,c9)
}}function cL(c7,c9,dd,de,c8,dc){var da,db=cK.setFilters[c9.toLowerCase()];
if(!db){cQ.error(c9)
}if(c7||!(da=c8)){cq(c7||"*",de,(da=[]),c8)
}return da.length>0?db(da,dd,dc):[]
}function cT(dr,c7,dj,c9){var df,dk,dl,di,dc,dm,db,dh,dd,dg,dq,ds,c8,dn=0,dp=dr.length,da=cG.POS,de=new RegExp("^"+da.source+"(?!"+cA+")","i"),dt=function(){var dv=1,du=arguments.length-2;
for(;
dv<du;
dv++){if(arguments[dv]===ck){dd[dv]=ck
}}};
for(;
dn<dp;
dn++){df=dr[dn];
dk="";
dh=c9;
for(dl=0,di=df.length;
dl<di;
dl++){dc=df[dl];
dm=dc.string;
if(dc.part==="PSEUDO"){da.exec("");
db=0;
while((dd=da.exec(dm))){dg=true;
dq=da.lastIndex=dd.index+dd[0].length;
if(dq>db){dk+=dm.slice(db,dd.index);
db=dq;
ds=[c7];
if(cH.test(dk)){if(dh){ds=dh
}dh=c9
}if((c8=c1.test(dk))){dk=dk.slice(0,-5).replace(cH,"$&*");
db++
}if(dd.length>1){dd[0].replace(de,dt)
}dh=cL(dk,dd[1],dd[2],ds,dh,c8)
}dk=""
}}if(!dg){dk+=dm
}dg=false
}if(dk){if(cH.test(dk)){cq(dk,dh||[c7],dj,c9)
}else{cQ(dk,c7,dj,c9?c9.concat(dh):dh)
}}else{cW.apply(dj,dh)
}}return dp===1?dj:cQ.uniqueSort(dj)
}function cZ(dd,c8,df,di,dh){dd=dd.replace(cY,"$1");
var c7,dj,db,da,de,dl,dc,c9,dm,dk,dg=b6(dd,c8,dh),dn=c8.nodeType;
if(cG.POS.test(dd)){return cT(dg,c8,df,di)
}if(di){c7=cn.call(di,0)
}else{if(dg.length===1){if((dl=cn.call(dg[0],0)).length>2&&(dc=dl[0]).part==="ID"&&dn===9&&!dh&&cK.relative[dl[1].part]){c8=cK.find.ID(dc.captures[0].replace(cu,""),c8,dh)[0];
if(!c8){return df
}dd=dd.slice(dl.shift().string.length)
}dm=((dg=cR.exec(dl[0].string))&&!dg.index&&c8.parentNode)||c8;
c9="";
for(de=dl.length-1;
de>=0;
de--){dc=dl[de];
dk=dc.part;
c9=dc.string+c9;
if(cK.relative[dk]){break
}if(cK.order.test(dk)){c7=cK.find[dk](dc.captures[0].replace(cu,""),dm,dh);
if(c7==null){continue
}else{dd=dd.slice(0,dd.length-c9.length)+c9.replace(cG[dk],"");
if(!dd){cW.apply(df,cn.call(c7,0))
}break
}}}}}if(dd){dj=ch(dd,c8,dh);
cs=dj.dirruns++;
if(c7==null){c7=cK.find.TAG("*",(cR.test(dd)&&c8.parentNode)||c8)
}for(de=0;
(da=c7[de]);
de++){cX=dj.runs++;
if(dj(da)){df.push(da)
}}}return df
}if(cc.querySelectorAll){(function(){var dc,dd=cZ,db=/'|\\/g,c9=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,c8=[],c7=[":active"],da=cf.matchesSelector||cf.mozMatchesSelector||cf.webkitMatchesSelector||cf.oMatchesSelector||cf.msMatchesSelector;
cJ(function(de){de.innerHTML="<select><option selected=''></option></select>";
if(!de.querySelectorAll("[selected]").length){c8.push("\\["+cA+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!de.querySelectorAll(":checked").length){c8.push(":checked")
}});
cJ(function(de){de.innerHTML="<p test=''></p>";
if(de.querySelectorAll("[test^='']").length){c8.push("[*^$]="+cA+"*(?:\"\"|'')")
}de.innerHTML="<input type='hidden'/>";
if(!de.querySelectorAll(":enabled").length){c8.push(":enabled",":disabled")
}});
c8=c8.length&&new RegExp(c8.join("|"));
cZ=function(dk,df,dl,dp,dn){if(!dp&&!dn&&(!c8||!c8.test(dk))){if(df.nodeType===9){try{cW.apply(dl,cn.call(df.querySelectorAll(dk),0));
return dl
}catch(dj){}}else{if(df.nodeType===1&&df.nodeName.toLowerCase()!=="object"){var di,dm,dq,dh=df.getAttribute("id"),de=dh||c0,dg=cR.test(dk)&&df.parentNode||df;
if(dh){de=de.replace(db,"\\$&")
}else{df.setAttribute("id",de)
}di=b6(dk,df,dn);
de="[id='"+de+"']";
for(dm=0,dq=di.length;
dm<dq;
dm++){di[dm]=de+di[dm].selector
}try{cW.apply(dl,cn.call(dg.querySelectorAll(di.join(",")),0));
return dl
}catch(dj){}finally{if(!dh){df.removeAttribute("id")
}}}}}return dd(dk,df,dl,dp,dn)
};
if(da){cJ(function(df){dc=da.call(df,"div");
try{da.call(df,"[test!='']:sizzle");
c7.push(cG.PSEUDO.source,cG.POS.source,"!=")
}catch(de){}});
c7=new RegExp(c7.join("|"));
cQ.matchesSelector=function(df,dh){dh=dh.replace(c9,"='$1']");
if(!co(df)&&!c7.test(dh)&&(!c8||!c8.test(dh))){try{var de=da.call(df,dh);
if(de||dc||df.document&&df.document.nodeType!==11){return de
}}catch(dg){}}return cQ(dh,null,null,[df]).length>0
}
}})()
}cK.setFilters.nth=cK.setFilters.eq;
cK.filters=cK.pseudos;
cQ.attr=bL.attr;
bL.find=cQ;
bL.expr=cQ.selectors;
bL.expr[":"]=bL.expr.pseudos;
bL.unique=cQ.uniqueSort;
bL.text=cQ.getText;
bL.isXMLDoc=cQ.isXML;
bL.contains=cQ.contains
})(a7);
var al=/Until$/,bv=/^(?:parents|prev(?:Until|All))/,aq=/^.[^:#\[\.,]*$/,D=bL.expr.match.needsContext,bz={children:true,contents:true,next:true,prev:true};
bL.fn.extend({find:function(b4){var b8,b5,ca,cb,b9,b7,b6=this;
if(typeof b4!=="string"){return bL(b4).filter(function(){for(b8=0,b5=b6.length;
b8<b5;
b8++){if(bL.contains(b6[b8],this)){return true
}}})
}b7=this.pushStack("","find",b4);
for(b8=0,b5=this.length;
b8<b5;
b8++){ca=b7.length;
bL.find(b4,this[b8],b7);
if(b8>0){for(cb=ca;
cb<b7.length;
cb++){for(b9=0;
b9<ca;
b9++){if(b7[b9]===b7[cb]){b7.splice(cb--,1);
break
}}}}}return b7
},has:function(b7){var b6,b5=bL(b7,this),b4=b5.length;
return this.filter(function(){for(b6=0;
b6<b4;
b6++){if(bL.contains(this,b5[b6])){return true
}}})
},not:function(b4){return this.pushStack(aR(this,b4,false),"not",b4)
},filter:function(b4){return this.pushStack(aR(this,b4,true),"filter",b4)
},is:function(b4){return !!b4&&(typeof b4==="string"?D.test(b4)?bL(b4,this.context).index(this[0])>=0:bL.filter(b4,this).length>0:this.filter(b4).length>0)
},closest:function(b8,b7){var b9,b6=0,b4=this.length,b5=[],ca=D.test(b8)||typeof b8!=="string"?bL(b8,b7||this.context):0;
for(;
b6<b4;
b6++){b9=this[b6];
while(b9&&b9.ownerDocument&&b9!==b7&&b9.nodeType!==11){if(ca?ca.index(b9)>-1:bL.find.matchesSelector(b9,b8)){b5.push(b9);
break
}b9=b9.parentNode
}}b5=b5.length>1?bL.unique(b5):b5;
return this.pushStack(b5,"closest",b8)
},index:function(b4){if(!b4){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof b4==="string"){return bL.inArray(this[0],bL(b4))
}return bL.inArray(b4.jquery?b4[0]:b4,this)
},add:function(b4,b5){var b7=typeof b4==="string"?bL(b4,b5):bL.makeArray(b4&&b4.nodeType?[b4]:b4),b6=bL.merge(this.get(),b7);
return this.pushStack(aW(b7[0])||aW(b6[0])?b6:bL.unique(b6))
},addBack:function(b4){return this.add(b4==null?this.prevObject:this.prevObject.filter(b4))
}});
bL.fn.andSelf=bL.fn.addBack;
function aW(b4){return !b4||!b4.parentNode||b4.parentNode.nodeType===11
}function a3(b5,b4){do{b5=b5[b4]
}while(b5&&b5.nodeType!==1);
return b5
}bL.each({parent:function(b5){var b4=b5.parentNode;
return b4&&b4.nodeType!==11?b4:null
},parents:function(b4){return bL.dir(b4,"parentNode")
},parentsUntil:function(b5,b4,b6){return bL.dir(b5,"parentNode",b6)
},next:function(b4){return a3(b4,"nextSibling")
},prev:function(b4){return a3(b4,"previousSibling")
},nextAll:function(b4){return bL.dir(b4,"nextSibling")
},prevAll:function(b4){return bL.dir(b4,"previousSibling")
},nextUntil:function(b5,b4,b6){return bL.dir(b5,"nextSibling",b6)
},prevUntil:function(b5,b4,b6){return bL.dir(b5,"previousSibling",b6)
},siblings:function(b4){return bL.sibling((b4.parentNode||{}).firstChild,b4)
},children:function(b4){return bL.sibling(b4.firstChild)
},contents:function(b4){return bL.nodeName(b4,"iframe")?b4.contentDocument||b4.contentWindow.document:bL.merge([],b4.childNodes)
}},function(b4,b5){bL.fn[b4]=function(b8,b6){var b7=bL.map(this,b5,b8);
if(!al.test(b4)){b6=b8
}if(b6&&typeof b6==="string"){b7=bL.filter(b6,b7)
}b7=this.length>1&&!bz[b4]?bL.unique(b7):b7;
if(this.length>1&&bv.test(b4)){b7=b7.reverse()
}return this.pushStack(b7,b4,a9.call(arguments).join(","))
}
});
bL.extend({filter:function(b6,b4,b5){if(b5){b6=":not("+b6+")"
}return b4.length===1?bL.find.matchesSelector(b4[0],b6)?[b4[0]]:[]:bL.find.matches(b6,b4)
},dir:function(b6,b5,b8){var b4=[],b7=b6[b5];
while(b7&&b7.nodeType!==9&&(b8===aG||b7.nodeType!==1||!bL(b7).is(b8))){if(b7.nodeType===1){b4.push(b7)
}b7=b7[b5]
}return b4
},sibling:function(b6,b5){var b4=[];
for(;
b6;
b6=b6.nextSibling){if(b6.nodeType===1&&b6!==b5){b4.push(b6)
}}return b4
}});
function aR(b7,b6,b4){b6=b6||0;
if(bL.isFunction(b6)){return bL.grep(b7,function(b9,b8){var ca=!!b6.call(b9,b8,b9);
return ca===b4
})
}else{if(b6.nodeType){return bL.grep(b7,function(b9,b8){return(b9===b6)===b4
})
}else{if(typeof b6==="string"){var b5=bL.grep(b7,function(b8){return b8.nodeType===1
});
if(aq.test(b6)){return bL.filter(b6,b5,!b4)
}else{b6=bL.filter(b6,b5)
}}}}return bL.grep(b7,function(b9,b8){return(bL.inArray(b9,b6)>=0)===b4
})
}function F(b4){var b6=h.split("|"),b5=b4.createDocumentFragment();
if(b5.createElement){while(b6.length){b5.createElement(b6.pop())
}}return b5
}var h="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aA=/ jQuery\d+="(?:null|\d+)"/g,b3=/^\s+/,aD=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,u=/<([\w:]+)/,bY=/<tbody/i,O=/<|&#?\w+;/,ao=/<(?:script|style|link)/i,av=/<(?:script|object|embed|option|style)/i,P=new RegExp("<(?:"+h+")[\\s/>]","i"),aJ=/^(?:checkbox|radio)$/,bW=/checked\s*(?:[^=]|=\s*.checked.)/i,bB=/\/(java|ecma)script/i,aM=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Y={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},aV=F(s),p=aV.appendChild(s.createElement("div"));
Y.optgroup=Y.option;
Y.tbody=Y.tfoot=Y.colgroup=Y.caption=Y.thead;
Y.th=Y.td;
if(!bL.support.htmlSerialize){Y._default=[1,"X<div>","</div>"]
}bL.fn.extend({text:function(b4){return bL.access(this,function(b5){return b5===aG?bL.text(this):this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(b5))
},null,b4,arguments.length)
},wrapAll:function(b4){if(bL.isFunction(b4)){return this.each(function(b6){bL(this).wrapAll(b4.call(this,b6))
})
}if(this[0]){var b5=bL(b4,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b5.insertBefore(this[0])
}b5.map(function(){var b6=this;
while(b6.firstChild&&b6.firstChild.nodeType===1){b6=b6.firstChild
}return b6
}).append(this)
}return this
},wrapInner:function(b4){if(bL.isFunction(b4)){return this.each(function(b5){bL(this).wrapInner(b4.call(this,b5))
})
}return this.each(function(){var b5=bL(this),b6=b5.contents();
if(b6.length){b6.wrapAll(b4)
}else{b5.append(b4)
}})
},wrap:function(b4){var b5=bL.isFunction(b4);
return this.each(function(b6){bL(this).wrapAll(b5?b4.call(this,b6):b4)
})
},unwrap:function(){return this.parent().each(function(){if(!bL.nodeName(this,"body")){bL(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(b4){if(this.nodeType===1||this.nodeType===11){this.appendChild(b4)
}})
},prepend:function(){return this.domManip(arguments,true,function(b4){if(this.nodeType===1||this.nodeType===11){this.insertBefore(b4,this.firstChild)
}})
},before:function(){if(!aW(this[0])){return this.domManip(arguments,false,function(b5){this.parentNode.insertBefore(b5,this)
})
}if(arguments.length){var b4=bL.clean(arguments);
return this.pushStack(bL.merge(b4,this),"before",this.selector)
}},after:function(){if(!aW(this[0])){return this.domManip(arguments,false,function(b5){this.parentNode.insertBefore(b5,this.nextSibling)
})
}if(arguments.length){var b4=bL.clean(arguments);
return this.pushStack(bL.merge(this,b4),"after",this.selector)
}},remove:function(b4,b7){var b6,b5=0;
for(;
(b6=this[b5])!=null;
b5++){if(!b4||bL.filter(b4,[b6]).length){if(!b7&&b6.nodeType===1){bL.cleanData(b6.getElementsByTagName("*"));
bL.cleanData([b6])
}if(b6.parentNode){b6.parentNode.removeChild(b6)
}}}return this
},empty:function(){var b5,b4=0;
for(;
(b5=this[b4])!=null;
b4++){if(b5.nodeType===1){bL.cleanData(b5.getElementsByTagName("*"))
}while(b5.firstChild){b5.removeChild(b5.firstChild)
}}return this
},clone:function(b5,b4){b5=b5==null?false:b5;
b4=b4==null?b5:b4;
return this.map(function(){return bL.clone(this,b5,b4)
})
},html:function(b4){return bL.access(this,function(b8){var b7=this[0]||{},b6=0,b5=this.length;
if(b8===aG){return b7.nodeType===1?b7.innerHTML.replace(aA,""):aG
}if(typeof b8==="string"&&!ao.test(b8)&&(bL.support.htmlSerialize||!P.test(b8))&&(bL.support.leadingWhitespace||!b3.test(b8))&&!Y[(u.exec(b8)||["",""])[1].toLowerCase()]){b8=b8.replace(aD,"<$1></$2>");
try{for(;
b6<b5;
b6++){b7=this[b6]||{};
if(b7.nodeType===1){bL.cleanData(b7.getElementsByTagName("*"));
b7.innerHTML=b8
}}b7=0
}catch(b9){}}if(b7){this.empty().append(b8)
}},null,b4,arguments.length)
},replaceWith:function(b4){if(!aW(this[0])){if(bL.isFunction(b4)){return this.each(function(b7){var b6=bL(this),b5=b6.html();
b6.replaceWith(b4.call(this,b7,b5))
})
}if(typeof b4!=="string"){b4=bL(b4).detach()
}return this.each(function(){var b6=this.nextSibling,b5=this.parentNode;
bL(this).remove();
if(b6){bL(b6).before(b4)
}else{bL(b5).append(b4)
}})
}return this.length?this.pushStack(bL(bL.isFunction(b4)?b4():b4),"replaceWith",b4):this
},detach:function(b4){return this.remove(b4,true)
},domManip:function(ca,ce,cd){ca=[].concat.apply([],ca);
var b6,b8,b9,cc,b7=0,cb=ca[0],b5=[],b4=this.length;
if(!bL.support.checkClone&&b4>1&&typeof cb==="string"&&bW.test(cb)){return this.each(function(){bL(this).domManip(ca,ce,cd)
})
}if(bL.isFunction(cb)){return this.each(function(cg){var cf=bL(this);
ca[0]=cb.call(this,cg,ce?cf.html():aG);
cf.domManip(ca,ce,cd)
})
}if(this[0]){b6=bL.buildFragment(ca,this,b5);
b9=b6.fragment;
b8=b9.firstChild;
if(b9.childNodes.length===1){b9=b8
}if(b8){ce=ce&&bL.nodeName(b8,"tr");
for(cc=b6.cacheable||b4-1;
b7<b4;
b7++){cd.call(ce&&bL.nodeName(this[b7],"table")?C(this[b7],"tbody"):this[b7],b7===cc?b9:bL.clone(b9,true,true))
}}b9=b8=null;
if(b5.length){bL.each(b5,function(cf,cg){if(cg.src){if(bL.ajax){bL.ajax({url:cg.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bL.error("no ajax")
}}else{bL.globalEval((cg.text||cg.textContent||cg.innerHTML||"").replace(aM,""))
}if(cg.parentNode){cg.parentNode.removeChild(cg)
}})
}}return this
}});
function C(b5,b4){return b5.getElementsByTagName(b4)[0]||b5.appendChild(b5.ownerDocument.createElement(b4))
}function au(cb,b5){if(b5.nodeType!==1||!bL.hasData(cb)){return
}var b8,b7,b4,ca=bL._data(cb),b9=bL._data(b5,ca),b6=ca.events;
if(b6){delete b9.handle;
b9.events={};
for(b8 in b6){for(b7=0,b4=b6[b8].length;
b7<b4;
b7++){bL.event.add(b5,b8,b6[b8][b7])
}}}if(b9.data){b9.data=bL.extend({},b9.data)
}}function K(b5,b4){var b6;
if(b4.nodeType!==1){return
}if(b4.clearAttributes){b4.clearAttributes()
}if(b4.mergeAttributes){b4.mergeAttributes(b5)
}b6=b4.nodeName.toLowerCase();
if(b6==="object"){if(b4.parentNode){b4.outerHTML=b5.outerHTML
}if(bL.support.html5Clone&&(b5.innerHTML&&!bL.trim(b4.innerHTML))){b4.innerHTML=b5.innerHTML
}}else{if(b6==="input"&&aJ.test(b5.type)){b4.defaultChecked=b4.checked=b5.checked;
if(b4.value!==b5.value){b4.value=b5.value
}}else{if(b6==="option"){b4.selected=b5.defaultSelected
}else{if(b6==="input"||b6==="textarea"){b4.defaultValue=b5.defaultValue
}else{if(b6==="script"&&b4.text!==b5.text){b4.text=b5.text
}}}}}b4.removeAttribute(bL.expando)
}bL.buildFragment=function(b7,b8,b5){var b6,b4,b9,ca=b7[0];
b8=b8||s;
b8=!b8.nodeType&&b8[0]||b8;
b8=b8.ownerDocument||b8;
if(b7.length===1&&typeof ca==="string"&&ca.length<512&&b8===s&&ca.charAt(0)==="<"&&!av.test(ca)&&(bL.support.checkClone||!bW.test(ca))&&(bL.support.html5Clone||!P.test(ca))){b4=true;
b6=bL.fragments[ca];
b9=b6!==aG
}if(!b6){b6=b8.createDocumentFragment();
bL.clean(b7,b8,b6,b5);
if(b4){bL.fragments[ca]=b9&&b6
}}return{fragment:b6,cacheable:b4}
};
bL.fragments={};
bL.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(b4,b5){bL.fn[b4]=function(b6){var b8,ca=0,b9=[],cc=bL(b6),b7=cc.length,cb=this.length===1&&this[0].parentNode;
if((cb==null||cb&&cb.nodeType===11&&cb.childNodes.length===1)&&b7===1){cc[b5](this[0]);
return this
}else{for(;
ca<b7;
ca++){b8=(ca>0?this.clone(true):this).get();
bL(cc[ca])[b5](b8);
b9=b9.concat(b8)
}return this.pushStack(b9,b4,cc.selector)
}}
});
function q(b4){if(typeof b4.getElementsByTagName!=="undefined"){return b4.getElementsByTagName("*")
}else{if(typeof b4.querySelectorAll!=="undefined"){return b4.querySelectorAll("*")
}else{return[]
}}}function bX(b4){if(aJ.test(b4.type)){b4.defaultChecked=b4.checked
}}bL.extend({clone:function(b8,ca,b6){var b4,b5,b7,b9;
if(bL.support.html5Clone||bL.isXMLDoc(b8)||!P.test("<"+b8.nodeName+">")){b9=b8.cloneNode(true)
}else{p.innerHTML=b8.outerHTML;
p.removeChild(b9=p.firstChild)
}if((!bL.support.noCloneEvent||!bL.support.noCloneChecked)&&(b8.nodeType===1||b8.nodeType===11)&&!bL.isXMLDoc(b8)){K(b8,b9);
b4=q(b8);
b5=q(b9);
for(b7=0;
b4[b7];
++b7){if(b5[b7]){K(b4[b7],b5[b7])
}}}if(ca){au(b8,b9);
if(b6){b4=q(b8);
b5=q(b9);
for(b7=0;
b4[b7];
++b7){au(b4[b7],b5[b7])
}}}b4=b5=null;
return b9
},clean:function(ch,b6,b4,b7){var ce,cd,cg,cl,ca,ck,cb,b8,b5,cf,cj,cc,b9=b6===s&&aV,ci=[];
if(!b6||typeof b6.createDocumentFragment==="undefined"){b6=s
}for(ce=0;
(cg=ch[ce])!=null;
ce++){if(typeof cg==="number"){cg+=""
}if(!cg){continue
}if(typeof cg==="string"){if(!O.test(cg)){cg=b6.createTextNode(cg)
}else{b9=b9||F(b6);
cb=b6.createElement("div");
b9.appendChild(cb);
cg=cg.replace(aD,"<$1></$2>");
cl=(u.exec(cg)||["",""])[1].toLowerCase();
ca=Y[cl]||Y._default;
ck=ca[0];
cb.innerHTML=ca[1]+cg+ca[2];
while(ck--){cb=cb.lastChild
}if(!bL.support.tbody){b8=bY.test(cg);
b5=cl==="table"&&!b8?cb.firstChild&&cb.firstChild.childNodes:ca[1]==="<table>"&&!b8?cb.childNodes:[];
for(cd=b5.length-1;
cd>=0;
--cd){if(bL.nodeName(b5[cd],"tbody")&&!b5[cd].childNodes.length){b5[cd].parentNode.removeChild(b5[cd])
}}}if(!bL.support.leadingWhitespace&&b3.test(cg)){cb.insertBefore(b6.createTextNode(b3.exec(cg)[0]),cb.firstChild)
}cg=cb.childNodes;
cb.parentNode.removeChild(cb)
}}if(cg.nodeType){ci.push(cg)
}else{bL.merge(ci,cg)
}}if(cb){cg=cb=b9=null
}if(!bL.support.appendChecked){for(ce=0;
(cg=ci[ce])!=null;
ce++){if(bL.nodeName(cg,"input")){bX(cg)
}else{if(typeof cg.getElementsByTagName!=="undefined"){bL.grep(cg.getElementsByTagName("input"),bX)
}}}}if(b4){cj=function(cm){if(!cm.type||bB.test(cm.type)){return b7?b7.push(cm.parentNode?cm.parentNode.removeChild(cm):cm):b4.appendChild(cm)
}};
for(ce=0;
(cg=ci[ce])!=null;
ce++){if(!(bL.nodeName(cg,"script")&&cj(cg))){b4.appendChild(cg);
if(typeof cg.getElementsByTagName!=="undefined"){cc=bL.grep(bL.merge([],cg.getElementsByTagName("script")),cj);
ci.splice.apply(ci,[ce+1,0].concat(cc));
ce+=cc.length
}}}}return ci
},cleanData:function(b5,cd){var b8,b6,b7,cc,b9=0,ce=bL.expando,b4=bL.cache,ca=bL.support.deleteExpando,cb=bL.event.special;
for(;
(b7=b5[b9])!=null;
b9++){if(cd||bL.acceptData(b7)){b6=b7[ce];
b8=b6&&b4[b6];
if(b8){if(b8.events){for(cc in b8.events){if(cb[cc]){bL.event.remove(b7,cc)
}else{bL.removeEvent(b7,cc,b8.handle)
}}}if(b4[b6]){delete b4[b6];
if(ca){delete b7[ce]
}else{if(b7.removeAttribute){b7.removeAttribute(ce)
}else{b7[ce]=null
}}bL.deletedIds.push(b6)
}}}}}});
(function(){var b4,b5;
bL.uaMatch=function(b7){b7=b7.toLowerCase();
var b6=/(chrome)[ \/]([\w.]+)/.exec(b7)||/(webkit)[ \/]([\w.]+)/.exec(b7)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b7)||/(msie) ([\w.]+)/.exec(b7)||b7.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b7)||[];
return{browser:b6[1]||"",version:b6[2]||"0"}
};
b4=bL.uaMatch(i.userAgent);
b5={};
if(b4.browser){b5[b4.browser]=true;
b5.version=b4.version
}if(b5.chrome){b5.webkit=true
}else{if(b5.webkit){b5.safari=true
}}bL.browser=b5;
bL.sub=function(){function b6(b9,ca){return new b6.fn.init(b9,ca)
}bL.extend(true,b6,this);
b6.superclass=this;
b6.fn=b6.prototype=this();
b6.fn.constructor=b6;
b6.sub=this.sub;
b6.fn.init=function b8(b9,ca){if(ca&&ca instanceof bL&&!(ca instanceof b6)){ca=b6(ca)
}return bL.fn.init.call(this,b9,ca,b7)
};
b6.fn.init.prototype=b6.fn;
var b7=b6(s);
return b6
}
})();
var J,aE,a1,bj=/alpha\([^)]*\)/i,aX=/opacity=([^)]*)/,bp=/^(top|right|bottom|left)$/,L=/^(none|table(?!-c[ea]).+)/,a4=/^margin/,bd=new RegExp("^("+bC+")(.*)$","i"),ab=new RegExp("^("+bC+")(?!px)[a-z%]+$","i"),X=new RegExp("^([-+])=("+bC+")","i"),bm={},be={position:"absolute",visibility:"hidden",display:"block"},bF={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],ax=["Webkit","O","Moz","ms"],aO=bL.fn.toggle;
function g(b7,b5){if(b5 in b7){return b5
}var b8=b5.charAt(0).toUpperCase()+b5.slice(1),b4=b5,b6=ax.length;
while(b6--){b5=ax[b6]+b8;
if(b5 in b7){return b5
}}return b4
}function V(b5,b4){b5=b4||b5;
return bL.css(b5,"display")==="none"||!bL.contains(b5.ownerDocument,b5)
}function x(b9,b4){var b8,ca,b5=[],b6=0,b7=b9.length;
for(;
b6<b7;
b6++){b8=b9[b6];
if(!b8.style){continue
}b5[b6]=bL._data(b8,"olddisplay");
if(b4){if(!b5[b6]&&b8.style.display==="none"){b8.style.display=""
}if(b8.style.display===""&&V(b8)){b5[b6]=bL._data(b8,"olddisplay",bH(b8.nodeName))
}}else{ca=J(b8,"display");
if(!b5[b6]&&ca!=="none"){bL._data(b8,"olddisplay",ca)
}}}for(b6=0;
b6<b7;
b6++){b8=b9[b6];
if(!b8.style){continue
}if(!b4||b8.style.display==="none"||b8.style.display===""){b8.style.display=b4?b5[b6]||"":"none"
}}return b9
}bL.fn.extend({css:function(b4,b5){return bL.access(this,function(b7,b6,b8){return b8!==aG?bL.style(b7,b6,b8):bL.css(b7,b6)
},b4,b5,arguments.length>1)
},show:function(){return x(this,true)
},hide:function(){return x(this)
},toggle:function(b6,b5){var b4=typeof b6==="boolean";
if(bL.isFunction(b6)&&bL.isFunction(b5)){return aO.apply(this,arguments)
}return this.each(function(){if(b4?b6:V(this)){bL(this).show()
}else{bL(this).hide()
}})
}});
bL.extend({cssHooks:{opacity:{get:function(b6,b5){if(b5){var b4=J(b6,"opacity");
return b4===""?"1":b4
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bL.support.cssFloat?"cssFloat":"styleFloat"},style:function(b6,b5,cc,b7){if(!b6||b6.nodeType===3||b6.nodeType===8||!b6.style){return
}var ca,cb,cd,b8=bL.camelCase(b5),b4=b6.style;
b5=bL.cssProps[b8]||(bL.cssProps[b8]=g(b4,b8));
cd=bL.cssHooks[b5]||bL.cssHooks[b8];
if(cc!==aG){cb=typeof cc;
if(cb==="string"&&(ca=X.exec(cc))){cc=(ca[1]+1)*ca[2]+parseFloat(bL.css(b6,b5));
cb="number"
}if(cc==null||cb==="number"&&isNaN(cc)){return
}if(cb==="number"&&!bL.cssNumber[b8]){cc+="px"
}if(!cd||!("set" in cd)||(cc=cd.set(b6,cc,b7))!==aG){try{b4[b5]=cc
}catch(b9){}}}else{if(cd&&"get" in cd&&(ca=cd.get(b6,false,b7))!==aG){return ca
}return b4[b5]
}},css:function(ca,b8,b9,b5){var cb,b7,b4,b6=bL.camelCase(b8);
b8=bL.cssProps[b6]||(bL.cssProps[b6]=g(ca.style,b6));
b4=bL.cssHooks[b8]||bL.cssHooks[b6];
if(b4&&"get" in b4){cb=b4.get(ca,true,b5)
}if(cb===aG){cb=J(ca,b8)
}if(cb==="normal"&&b8 in bF){cb=bF[b8]
}if(b9||b5!==aG){b7=parseFloat(cb);
return b9||bL.isNumeric(b7)?b7||0:cb
}return cb
},swap:function(b8,b7,b9){var b6,b5,b4={};
for(b5 in b7){b4[b5]=b8.style[b5];
b8.style[b5]=b7[b5]
}b6=b9.call(b8);
for(b5 in b7){b8.style[b5]=b4[b5]
}return b6
}});
if(a7.getComputedStyle){J=function(cb,b5){var b4,b8,b7,ca,b9=a7.getComputedStyle(cb,null),b6=cb.style;
if(b9){b4=b9[b5];
if(b4===""&&!bL.contains(cb.ownerDocument,cb)){b4=bL.style(cb,b5)
}if(ab.test(b4)&&a4.test(b5)){b8=b6.width;
b7=b6.minWidth;
ca=b6.maxWidth;
b6.minWidth=b6.maxWidth=b6.width=b4;
b4=b9.width;
b6.width=b8;
b6.minWidth=b7;
b6.maxWidth=ca
}}return b4
}
}else{if(s.documentElement.currentStyle){J=function(b8,b6){var b9,b4,b5=b8.currentStyle&&b8.currentStyle[b6],b7=b8.style;
if(b5==null&&b7&&b7[b6]){b5=b7[b6]
}if(ab.test(b5)&&!bp.test(b6)){b9=b7.left;
b4=b8.runtimeStyle&&b8.runtimeStyle.left;
if(b4){b8.runtimeStyle.left=b8.currentStyle.left
}b7.left=b6==="fontSize"?"1em":b5;
b5=b7.pixelLeft+"px";
b7.left=b9;
if(b4){b8.runtimeStyle.left=b4
}}return b5===""?"auto":b5
}
}}function aL(b4,b6,b7){var b5=bd.exec(b6);
return b5?Math.max(0,b5[1]-(b7||0))+(b5[2]||"px"):b6
}function ay(b7,b5,b4,b9){var b6=b4===(b9?"border":"content")?4:b5==="width"?1:0,b8=0;
for(;
b6<4;
b6+=2){if(b4==="margin"){b8+=bL.css(b7,b4+bV[b6],true)
}if(b9){if(b4==="content"){b8-=parseFloat(J(b7,"padding"+bV[b6]))||0
}if(b4!=="margin"){b8-=parseFloat(J(b7,"border"+bV[b6]+"Width"))||0
}}else{b8+=parseFloat(J(b7,"padding"+bV[b6]))||0;
if(b4!=="padding"){b8+=parseFloat(J(b7,"border"+bV[b6]+"Width"))||0
}}}return b8
}function z(b7,b5,b4){var b8=b5==="width"?b7.offsetWidth:b7.offsetHeight,b6=true,b9=bL.support.boxSizing&&bL.css(b7,"boxSizing")==="border-box";
if(b8<=0||b8==null){b8=J(b7,b5);
if(b8<0||b8==null){b8=b7.style[b5]
}if(ab.test(b8)){return b8
}b6=b9&&(bL.support.boxSizingReliable||b8===b7.style[b5]);
b8=parseFloat(b8)||0
}return(b8+ay(b7,b5,b4||(b9?"border":"content"),b6))+"px"
}function bH(b6){if(bm[b6]){return bm[b6]
}var b4=bL("<"+b6+">").appendTo(s.body),b5=b4.css("display");
b4.remove();
if(b5==="none"||b5===""){aE=s.body.appendChild(aE||bL.extend(s.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!a1||!aE.createElement){a1=(aE.contentWindow||aE.contentDocument).document;
a1.write("<!doctype html><html><body>");
a1.close()
}b4=a1.body.appendChild(a1.createElement(b6));
b5=J(b4,"display");
s.body.removeChild(aE)
}bm[b6]=b5;
return b5
}bL.each(["height","width"],function(b5,b4){bL.cssHooks[b4]={get:function(b8,b7,b6){if(b7){if(b8.offsetWidth===0&&L.test(J(b8,"display"))){return bL.swap(b8,be,function(){return z(b8,b4,b6)
})
}else{return z(b8,b4,b6)
}}},set:function(b7,b8,b6){return aL(b7,b8,b6?ay(b7,b4,b6,bL.support.boxSizing&&bL.css(b7,"boxSizing")==="border-box"):0)
}}
});
if(!bL.support.opacity){bL.cssHooks.opacity={get:function(b5,b4){return aX.test((b4&&b5.currentStyle?b5.currentStyle.filter:b5.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":b4?"1":""
},set:function(b8,b9){var b7=b8.style,b5=b8.currentStyle,b4=bL.isNumeric(b9)?"alpha(opacity="+b9*100+")":"",b6=b5&&b5.filter||b7.filter||"";
b7.zoom=1;
if(b9>=1&&bL.trim(b6.replace(bj,""))===""&&b7.removeAttribute){b7.removeAttribute("filter");
if(b5&&!b5.filter){return
}}b7.filter=bj.test(b6)?b6.replace(bj,b4):b6+" "+b4
}}
}bL(function(){if(!bL.support.reliableMarginRight){bL.cssHooks.marginRight={get:function(b5,b4){return bL.swap(b5,{display:"inline-block"},function(){if(b4){return J(b5,"marginRight")
}})
}}
}if(!bL.support.pixelPosition&&bL.fn.position){bL.each(["top","left"],function(b4,b5){bL.cssHooks[b5]={get:function(b8,b7){if(b7){var b6=J(b8,b5);
return ab.test(b6)?bL(b8).position()[b5]+"px":b6
}}}
})
}});
if(bL.expr&&bL.expr.filters){bL.expr.filters.hidden=function(b4){return(b4.offsetWidth===0&&b4.offsetHeight===0)||(!bL.support.reliableHiddenOffsets&&((b4.style&&b4.style.display)||J(b4,"display"))==="none")
};
bL.expr.filters.visible=function(b4){return !bL.expr.filters.hidden(b4)
}
}bL.each({margin:"",padding:"",border:"Width"},function(b4,b5){bL.cssHooks[b4+b5]={expand:function(b8){var b7,b9=typeof b8==="string"?b8.split(" "):[b8],b6={};
for(b7=0;
b7<4;
b7++){b6[b4+bV[b7]+b5]=b9[b7]||b9[b7-2]||b9[0]
}return b6
}};
if(!a4.test(b4)){bL.cssHooks[b4+b5].set=aL
}});
var bx=/%20/g,aU=/\[\]$/,Z=/\r?\n/g,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aI=/^(?:select|textarea)/i;
bL.fn.extend({serialize:function(){return bL.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?bL.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aI.test(this.nodeName)||bE.test(this.type))
}).map(function(b4,b5){var b6=bL(this).val();
return b6==null?null:bL.isArray(b6)?bL.map(b6,function(b8,b7){return{name:b5.name,value:b8.replace(Z,"\r\n")}
}):{name:b5.name,value:b6.replace(Z,"\r\n")}
}).get()
}});
bL.param=function(b4,b6){var b7,b5=[],b8=function(b9,ca){ca=bL.isFunction(ca)?ca():(ca==null?"":ca);
b5[b5.length]=encodeURIComponent(b9)+"="+encodeURIComponent(ca)
};
if(b6===aG){b6=bL.ajaxSettings&&bL.ajaxSettings.traditional
}if(bL.isArray(b4)||(b4.jquery&&!bL.isPlainObject(b4))){bL.each(b4,function(){b8(this.name,this.value)
})
}else{for(b7 in b4){o(b7,b4[b7],b6,b8)
}}return b5.join("&").replace(bx,"+")
};
function o(b6,b8,b5,b7){var b4;
if(bL.isArray(b8)){bL.each(b8,function(ca,b9){if(b5||aU.test(b6)){b7(b6,b9)
}else{o(b6+"["+(typeof b9==="object"?ca:"")+"]",b9,b5,b7)
}})
}else{if(!b5&&bL.type(b8)==="object"){for(b4 in b8){o(b6+"["+b4+"]",b8[b4],b5,b7)
}}else{b7(b6,b8)
}}}var ad,b2,at=/#.*$/,ai=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,G=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,w=/^(?:GET|HEAD)$/,aH=/^\/\//,bS=/\?/,k=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,U=/([?&])_=[^&]*/,aY=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,b1=bL.fn.load,A={},bb={},a2=["*/"]+["*"];
try{ad=aN.href
}catch(bi){ad=s.createElement("a");
ad.href="";
ad=ad.href
}b2=aY.exec(ad.toLowerCase())||[];
function bN(b4){return function(b8,ca){if(typeof b8!=="string"){ca=b8;
b8="*"
}var b5,cb,cc,b7=b8.toLowerCase().split(a0),b6=0,b9=b7.length;
if(bL.isFunction(ca)){for(;
b6<b9;
b6++){b5=b7[b6];
cc=/^\+/.test(b5);
if(cc){b5=b5.substr(1)||"*"
}cb=b4[b5]=b4[b5]||[];
cb[cc?"unshift":"push"](ca)
}}}
}function v(b5,ce,b9,cc,cb,b7){cb=cb||ce.dataTypes[0];
b7=b7||{};
b7[cb]=true;
var cd,ca=b5[cb],b6=0,b4=ca?ca.length:0,b8=(b5===A);
for(;
b6<b4&&(b8||!cd);
b6++){cd=ca[b6](ce,b9,cc);
if(typeof cd==="string"){if(!b8||b7[cd]){cd=aG
}else{ce.dataTypes.unshift(cd);
cd=v(b5,ce,b9,cc,cd,b7)
}}}if((b8||!cd)&&!b7["*"]){cd=v(b5,ce,b9,cc,"*",b7)
}return cd
}function y(b6,b7){var b5,b4,b8=bL.ajaxSettings.flatOptions||{};
for(b5 in b7){if(b7[b5]!==aG){(b8[b5]?b6:(b4||(b4={})))[b5]=b7[b5]
}}if(b4){bL.extend(true,b6,b4)
}}bL.fn.load=function(b7,ca,cb){if(typeof b7!=="string"&&b1){return b1.apply(this,arguments)
}if(!this.length){return this
}var b4,b8,b6,b5=this,b9=b7.indexOf(" ");
if(b9>=0){b4=b7.slice(b9,b7.length);
b7=b7.slice(0,b9)
}if(bL.isFunction(ca)){cb=ca;
ca=aG
}else{if(ca&&typeof ca==="object"){b8="POST"
}}bL.ajax({url:b7,type:b8,dataType:"html",data:ca,complete:function(cd,cc){if(cb){b5.each(cb,b6||[cd.responseText,cc,cd])
}}}).done(function(cc){b6=arguments;
b5.html(b4?bL("<div>").append(cc.replace(k,"")).find(b4):cc)
});
return this
};
bL.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(b4,b5){bL.fn[b5]=function(b6){return this.on(b5,b6)
}
});
bL.each(["get","post"],function(b4,b5){bL[b5]=function(b6,b8,b9,b7){if(bL.isFunction(b8)){b7=b7||b9;
b9=b8;
b8=aG
}return bL.ajax({type:b5,url:b6,data:b8,success:b9,dataType:b7})
}
});
bL.extend({getScript:function(b4,b5){return bL.get(b4,aG,b5,"script")
},getJSON:function(b4,b5,b6){return bL.get(b4,b5,b6,"json")
},ajaxSetup:function(b5,b4){if(b4){y(b5,bL.ajaxSettings)
}else{b4=b5;
b5=bL.ajaxSettings
}y(b5,b4);
return b5
},ajaxSettings:{url:ad,isLocal:G.test(b2[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":a2},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a7.String,"text html":true,"text json":bL.parseJSON,"text xml":bL.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:bN(A),ajaxTransport:bN(bb),ajax:function(b9,b6){if(typeof b9==="object"){b6=b9;
b9=aG
}b6=b6||{};
var cc,cq,b7,cl,ce,ci,b5,ck,cd=bL.ajaxSetup({},b6),cs=cd.context||cd,cg=cs!==cd&&(cs.nodeType||cs instanceof bL)?bL(cs):bL.event,cr=bL.Deferred(),cn=bL.Callbacks("once memory"),ca=cd.statusCode||{},ch={},co={},b8=0,cb="canceled",cj={readyState:0,setRequestHeader:function(cu,cv){if(!b8){var ct=cu.toLowerCase();
cu=co[ct]=co[ct]||cu;
ch[cu]=cv
}return this
},getAllResponseHeaders:function(){return b8===2?cq:null
},getResponseHeader:function(cu){var ct;
if(b8===2){if(!b7){b7={};
while((ct=ai.exec(cq))){b7[ct[1].toLowerCase()]=ct[2]
}}ct=b7[cu.toLowerCase()]
}return ct===aG?null:ct
},overrideMimeType:function(ct){if(!b8){cd.mimeType=ct
}return this
},abort:function(ct){ct=ct||cb;
if(cl){cl.abort(ct)
}cf(0,ct);
return this
}};
function cf(cz,cu,cA,cw){var ct,cD,cB,cy,cC,cv=cu;
if(b8===2){return
}b8=2;
if(ce){clearTimeout(ce)
}cl=aG;
cq=cw||"";
cj.readyState=cz>0?4:0;
if(cA){cy=l(cd,cj,cA)
}if(cz>=200&&cz<300||cz===304){if(cd.ifModified){cC=cj.getResponseHeader("Last-Modified");
if(cC){bL.lastModified[cc]=cC
}cC=cj.getResponseHeader("Etag");
if(cC){bL.etag[cc]=cC
}}if(cz===304){cv="notmodified";
ct=true
}else{ct=aj(cd,cy);
cv=ct.state;
cD=ct.data;
cB=ct.error;
ct=!cB
}}else{cB=cv;
if(!cv||cz){cv="error";
if(cz<0){cz=0
}}}cj.status=cz;
cj.statusText=""+(cu||cv);
if(ct){cr.resolveWith(cs,[cD,cv,cj])
}else{cr.rejectWith(cs,[cj,cv,cB])
}cj.statusCode(ca);
ca=aG;
if(b5){cg.trigger("ajax"+(ct?"Success":"Error"),[cj,cd,ct?cD:cB])
}cn.fireWith(cs,[cj,cv]);
if(b5){cg.trigger("ajaxComplete",[cj,cd]);
if(!(--bL.active)){bL.event.trigger("ajaxStop")
}}}cr.promise(cj);
cj.success=cj.done;
cj.error=cj.fail;
cj.complete=cn.add;
cj.statusCode=function(cu){if(cu){var ct;
if(b8<2){for(ct in cu){ca[ct]=[ca[ct],cu[ct]]
}}else{ct=cu[cj.status];
cj.always(ct)
}}return this
};
cd.url=((b9||cd.url)+"").replace(at,"").replace(aH,b2[1]+"//");
cd.dataTypes=bL.trim(cd.dataType||"*").toLowerCase().split(a0);
if(cd.crossDomain==null){ci=aY.exec(cd.url.toLowerCase());
cd.crossDomain=!!(ci&&(ci[1]!=b2[1]||ci[2]!=b2[2]||(ci[3]||(ci[1]==="http:"?80:443))!=(b2[3]||(b2[1]==="http:"?80:443))))
}if(cd.data&&cd.processData&&typeof cd.data!=="string"){cd.data=bL.param(cd.data,cd.traditional)
}v(A,cd,b6,cj);
if(b8===2){return cj
}b5=cd.global;
cd.type=cd.type.toUpperCase();
cd.hasContent=!w.test(cd.type);
if(b5&&bL.active++===0){bL.event.trigger("ajaxStart")
}if(!cd.hasContent){if(cd.data){cd.url+=(bS.test(cd.url)?"&":"?")+cd.data;
delete cd.data
}cc=cd.url;
if(cd.cache===false){var b4=bL.now(),cp=cd.url.replace(U,"$1_="+b4);
cd.url=cp+((cp===cd.url)?(bS.test(cd.url)?"&":"?")+"_="+b4:"")
}}if(cd.data&&cd.hasContent&&cd.contentType!==false||b6.contentType){cj.setRequestHeader("Content-Type",cd.contentType)
}if(cd.ifModified){cc=cc||cd.url;
if(bL.lastModified[cc]){cj.setRequestHeader("If-Modified-Since",bL.lastModified[cc])
}if(bL.etag[cc]){cj.setRequestHeader("If-None-Match",bL.etag[cc])
}}cj.setRequestHeader("Accept",cd.dataTypes[0]&&cd.accepts[cd.dataTypes[0]]?cd.accepts[cd.dataTypes[0]]+(cd.dataTypes[0]!=="*"?", "+a2+"; q=0.01":""):cd.accepts["*"]);
for(ck in cd.headers){cj.setRequestHeader(ck,cd.headers[ck])
}if(cd.beforeSend&&(cd.beforeSend.call(cs,cj,cd)===false||b8===2)){return cj.abort()
}cb="abort";
for(ck in {success:1,error:1,complete:1}){cj[ck](cd[ck])
}cl=v(bb,cd,b6,cj);
if(!cl){cf(-1,"No Transport")
}else{cj.readyState=1;
if(b5){cg.trigger("ajaxSend",[cj,cd])
}if(cd.async&&cd.timeout>0){ce=setTimeout(function(){cj.abort("timeout")
},cd.timeout)
}try{b8=1;
cl.send(ch,cf)
}catch(cm){if(b8<2){cf(-1,cm)
}else{throw cm
}}}return cj
},active:0,lastModified:{},etag:{}});
function l(cd,cc,b9){var b8,ca,b7,b4,b5=cd.contents,cb=cd.dataTypes,b6=cd.responseFields;
for(ca in b6){if(ca in b9){cc[b6[ca]]=b9[ca]
}}while(cb[0]==="*"){cb.shift();
if(b8===aG){b8=cd.mimeType||cc.getResponseHeader("content-type")
}}if(b8){for(ca in b5){if(b5[ca]&&b5[ca].test(b8)){cb.unshift(ca);
break
}}}if(cb[0] in b9){b7=cb[0]
}else{for(ca in b9){if(!cb[0]||cd.converters[ca+" "+cb[0]]){b7=ca;
break
}if(!b4){b4=ca
}}b7=b7||b4
}if(b7){if(b7!==cb[0]){cb.unshift(b7)
}return b9[b7]
}}function aj(ce,b6){var cc,b4,ca,b8,cb=ce.dataTypes.slice(),b5=cb[0],cd={},b7=0;
if(ce.dataFilter){b6=ce.dataFilter(b6,ce.dataType)
}if(cb[1]){for(cc in ce.converters){cd[cc.toLowerCase()]=ce.converters[cc]
}}for(;
(ca=cb[++b7]);
){if(ca!=="*"){if(b5!=="*"&&b5!==ca){cc=cd[b5+" "+ca]||cd["* "+ca];
if(!cc){for(b4 in cd){b8=b4.split(" ");
if(b8[1]===ca){cc=cd[b5+" "+b8[0]]||cd["* "+b8[0]];
if(cc){if(cc===true){cc=cd[b4]
}else{if(cd[b4]!==true){ca=b8[0];
cb.splice(b7--,0,ca)
}}break
}}}}if(cc!==true){if(cc&&ce["throws"]){b6=cc(b6)
}else{try{b6=cc(b6)
}catch(b9){return{state:"parsererror",error:cc?b9:"No conversion from "+b5+" to "+ca}
}}}}b5=ca
}}return{state:"success",data:b6}
}var bu=[],aB=/\?/,ba=/(=)\?(?=&|$)|\?\?/,bq=bL.now();
bL.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var b4=bu.pop()||(bL.expando+"_"+(bq++));
this[b4]=true;
return b4
}});
bL.ajaxPrefilter("json jsonp",function(ce,b9,cd){var cc,b4,cb,b7=ce.data,b5=ce.url,b6=ce.jsonp!==false,ca=b6&&ba.test(b5),b8=b6&&!ca&&typeof b7==="string"&&!(ce.contentType||"").indexOf("application/x-www-form-urlencoded")&&ba.test(b7);
if(ce.dataTypes[0]==="jsonp"||ca||b8){cc=ce.jsonpCallback=bL.isFunction(ce.jsonpCallback)?ce.jsonpCallback():ce.jsonpCallback;
b4=a7[cc];
if(ca){ce.url=b5.replace(ba,"$1"+cc)
}else{if(b8){ce.data=b7.replace(ba,"$1"+cc)
}else{if(b6){ce.url+=(aB.test(b5)?"&":"?")+ce.jsonp+"="+cc
}}}ce.converters["script json"]=function(){if(!cb){bL.error(cc+" was not called")
}return cb[0]
};
ce.dataTypes[0]="json";
a7[cc]=function(){cb=arguments
};
cd.always(function(){a7[cc]=b4;
if(ce[cc]){ce.jsonpCallback=b9.jsonpCallback;
bu.push(cc)
}if(cb&&bL.isFunction(b4)){b4(cb[0])
}cb=b4=aG
});
return"script"
}});
bL.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(b4){bL.globalEval(b4);
return b4
}}});
bL.ajaxPrefilter("script",function(b4){if(b4.cache===aG){b4.cache=false
}if(b4.crossDomain){b4.type="GET";
b4.global=false
}});
bL.ajaxTransport("script",function(b6){if(b6.crossDomain){var b4,b5=s.head||s.getElementsByTagName("head")[0]||s.documentElement;
return{send:function(b7,b8){b4=s.createElement("script");
b4.async="async";
if(b6.scriptCharset){b4.charset=b6.scriptCharset
}b4.src=b6.url;
b4.onload=b4.onreadystatechange=function(ca,b9){if(b9||!b4.readyState||/loaded|complete/.test(b4.readyState)){b4.onload=b4.onreadystatechange=null;
if(b5&&b4.parentNode){b5.removeChild(b4)
}b4=aG;
if(!b9){b8(200,"success")
}}};
b5.insertBefore(b4,b5.firstChild)
},abort:function(){if(b4){b4.onload(0,1)
}}}
}});
var am,aS=a7.ActiveXObject?function(){for(var b4 in am){am[b4](0,1)
}}:false,az=0;
function bG(){try{return new a7.XMLHttpRequest()
}catch(b4){}}function bg(){try{return new a7.ActiveXObject("Microsoft.XMLHTTP")
}catch(b4){}}bL.ajaxSettings.xhr=a7.ActiveXObject?function(){return !this.isLocal&&bG()||bg()
}:bG;
(function(b4){bL.extend(bL.support,{ajax:!!b4,cors:!!b4&&("withCredentials" in b4)})
})(bL.ajaxSettings.xhr());
if(bL.support.ajax){bL.ajaxTransport(function(b4){if(!b4.crossDomain||bL.support.cors){var b5;
return{send:function(cb,b6){var b9,b8,ca=b4.xhr();
if(b4.username){ca.open(b4.type,b4.url,b4.async,b4.username,b4.password)
}else{ca.open(b4.type,b4.url,b4.async)
}if(b4.xhrFields){for(b8 in b4.xhrFields){ca[b8]=b4.xhrFields[b8]
}}if(b4.mimeType&&ca.overrideMimeType){ca.overrideMimeType(b4.mimeType)
}if(!b4.crossDomain&&!cb["X-Requested-With"]){cb["X-Requested-With"]="XMLHttpRequest"
}try{for(b8 in cb){ca.setRequestHeader(b8,cb[b8])
}}catch(b7){}ca.send((b4.hasContent&&b4.data)||null);
b5=function(ck,ce){var cf,cd,cc,ci,ch;
try{if(b5&&(ce||ca.readyState===4)){b5=aG;
if(b9){ca.onreadystatechange=bL.noop;
if(aS){delete am[b9]
}}if(ce){if(ca.readyState!==4){ca.abort()
}}else{cf=ca.status;
cc=ca.getAllResponseHeaders();
ci={};
ch=ca.responseXML;
if(ch&&ch.documentElement){ci.xml=ch
}try{ci.text=ca.responseText
}catch(ck){}try{cd=ca.statusText
}catch(cj){cd=""
}if(!cf&&b4.isLocal&&!b4.crossDomain){cf=ci.text?200:404
}else{if(cf===1223){cf=204
}}}}}catch(cg){if(!ce){b6(-1,cg)
}}if(ci){b6(cf,cd,ci,cc)
}};
if(!b4.async){b5()
}else{if(ca.readyState===4){setTimeout(b5,0)
}else{b9=++az;
if(aS){if(!am){am={};
bL(a7).unload(aS)
}am[b9]=b5
}ca.onreadystatechange=b5
}}},abort:function(){if(b5){b5(0,1)
}}}
}})
}var Q,ag,bT=/^(?:toggle|show|hide)$/,bM=new RegExp("^(?:([-+])=|)("+bC+")([a-z%]*)$","i"),bR=/queueHooks$/,aC=[m],a6={"*":[function(b5,cb){var b8,cc,b4,cd=this.createTween(b5,cb),b9=bM.exec(cb),ca=cd.cur(),b6=+ca||0,b7=1;
if(b9){b8=+b9[2];
cc=b9[3]||(bL.cssNumber[b5]?"":"px");
if(cc!=="px"&&b6){b6=bL.css(cd.elem,b5,true)||b8||1;
do{b4=b7=b7||".5";
b6=b6/b7;
bL.style(cd.elem,b5,b6+cc);
b7=cd.cur()/ca
}while(b7!==1&&b7!==b4)
}cd.unit=cc;
cd.start=b6;
cd.end=b9[1]?b6+(b9[1]+1)*b8:b8
}return cd
}]};
function bo(){setTimeout(function(){Q=aG
},0);
return(Q=bL.now())
}function bh(b5,b4){bL.each(b4,function(ca,b8){var b9=(a6[ca]||[]).concat(a6["*"]),b6=0,b7=b9.length;
for(;
b6<b7;
b6++){if(b9[b6].call(b5,ca,b8)){return
}}})
}function j(b6,ca,cd){var ce,b9=0,b4=0,b5=aC.length,cc=bL.Deferred().always(function(){delete b8.elem
}),b8=function(){var cj=Q||bo(),cg=Math.max(0,b7.startTime+b7.duration-cj),ci=1-(cg/b7.duration||0),cf=0,ch=b7.tweens.length;
for(;
cf<ch;
cf++){b7.tweens[cf].run(ci)
}cc.notifyWith(b6,[b7,ci,cg]);
if(ci<1&&ch){return cg
}else{cc.resolveWith(b6,[b7]);
return false
}},b7=cc.promise({elem:b6,props:bL.extend({},ca),opts:bL.extend(true,{specialEasing:{}},cd),originalProperties:ca,originalOptions:cd,startTime:Q||bo(),duration:cd.duration,tweens:[],createTween:function(ci,cf,ch){var cg=bL.Tween(b6,b7.opts,ci,cf,b7.opts.specialEasing[ci]||b7.opts.easing);
b7.tweens.push(cg);
return cg
},stop:function(cg){var cf=0,ch=cg?b7.tweens.length:0;
for(;
cf<ch;
cf++){b7.tweens[cf].run(1)
}if(cg){cc.resolveWith(b6,[b7,cg])
}else{cc.rejectWith(b6,[b7,cg])
}return this
}}),cb=b7.props;
ap(cb,b7.opts.specialEasing);
for(;
b9<b5;
b9++){ce=aC[b9].call(b7,b6,cb,b7.opts);
if(ce){return ce
}}bh(b7,cb);
if(bL.isFunction(b7.opts.start)){b7.opts.start.call(b6,b7)
}bL.fx.timer(bL.extend(b8,{anim:b7,queue:b7.opts.queue,elem:b6}));
return b7.progress(b7.opts.progress).done(b7.opts.done,b7.opts.complete).fail(b7.opts.fail).always(b7.opts.always)
}function ap(b7,b9){var b6,b5,ca,b8,b4;
for(b6 in b7){b5=bL.camelCase(b6);
ca=b9[b5];
b8=b7[b6];
if(bL.isArray(b8)){ca=b8[1];
b8=b7[b6]=b8[0]
}if(b6!==b5){b7[b5]=b8;
delete b7[b6]
}b4=bL.cssHooks[b5];
if(b4&&"expand" in b4){b8=b4.expand(b8);
delete b7[b5];
for(b6 in b8){if(!(b6 in b7)){b7[b6]=b8[b6];
b9[b6]=ca
}}}else{b9[b5]=ca
}}}bL.Animation=bL.extend(j,{tweener:function(b5,b8){if(bL.isFunction(b5)){b8=b5;
b5=["*"]
}else{b5=b5.split(" ")
}var b7,b4=0,b6=b5.length;
for(;
b4<b6;
b4++){b7=b5[b4];
a6[b7]=a6[b7]||[];
a6[b7].unshift(b8)
}},prefilter:function(b5,b4){if(b4){aC.unshift(b5)
}else{aC.push(b5)
}}});
function m(b8,cd,b4){var cc,b6,cf,b7,cj,ci,ch,cg,b9=this,b5=b8.style,ce={},cb=[],ca=b8.nodeType&&V(b8);
if(!b4.queue){ch=bL._queueHooks(b8,"fx");
if(ch.unqueued==null){ch.unqueued=0;
cg=ch.empty.fire;
ch.empty.fire=function(){if(!ch.unqueued){cg()
}}
}ch.unqueued++;
b9.always(function(){b9.always(function(){ch.unqueued--;
if(!bL.queue(b8,"fx").length){ch.empty.fire()
}})
})
}if(b8.nodeType===1&&("height" in cd||"width" in cd)){b4.overflow=[b5.overflow,b5.overflowX,b5.overflowY];
if(bL.css(b8,"display")==="inline"&&bL.css(b8,"float")==="none"){if(!bL.support.inlineBlockNeedsLayout||bH(b8.nodeName)==="inline"){b5.display="inline-block"
}else{b5.zoom=1
}}}if(b4.overflow){b5.overflow="hidden";
if(!bL.support.shrinkWrapBlocks){b9.done(function(){b5.overflow=b4.overflow[0];
b5.overflowX=b4.overflow[1];
b5.overflowY=b4.overflow[2]
})
}}for(cc in cd){cf=cd[cc];
if(bT.exec(cf)){delete cd[cc];
if(cf===(ca?"hide":"show")){continue
}cb.push(cc)
}}b7=cb.length;
if(b7){cj=bL._data(b8,"fxshow")||bL._data(b8,"fxshow",{});
if(ca){bL(b8).show()
}else{b9.done(function(){bL(b8).hide()
})
}b9.done(function(){var ck;
bL.removeData(b8,"fxshow",true);
for(ck in ce){bL.style(b8,ck,ce[ck])
}});
for(cc=0;
cc<b7;
cc++){b6=cb[cc];
ci=b9.createTween(b6,ca?cj[b6]:0);
ce[b6]=cj[b6]||bL.style(b8,b6);
if(!(b6 in cj)){cj[b6]=ci.start;
if(ca){ci.end=ci.start;
ci.start=b6==="width"||b6==="height"?1:0
}}}}}function M(b6,b5,b8,b4,b7){return new M.prototype.init(b6,b5,b8,b4,b7)
}bL.Tween=M;
M.prototype={constructor:M,init:function(b7,b5,b9,b4,b8,b6){this.elem=b7;
this.prop=b9;
this.easing=b8||"swing";
this.options=b5;
this.start=this.now=this.cur();
this.end=b4;
this.unit=b6||(bL.cssNumber[b9]?"":"px")
},cur:function(){var b4=M.propHooks[this.prop];
return b4&&b4.get?b4.get(this):M.propHooks._default.get(this)
},run:function(b6){var b5,b4=M.propHooks[this.prop];
if(this.options.duration){this.pos=b5=bL.easing[this.easing](b6,this.options.duration*b6,0,1,this.options.duration)
}else{this.pos=b5=b6
}this.now=(this.end-this.start)*b5+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(b4&&b4.set){b4.set(this)
}else{M.propHooks._default.set(this)
}return this
}};
M.prototype.init.prototype=M.prototype;
M.propHooks={_default:{get:function(b5){var b4;
if(b5.elem[b5.prop]!=null&&(!b5.elem.style||b5.elem.style[b5.prop]==null)){return b5.elem[b5.prop]
}b4=bL.css(b5.elem,b5.prop,false,"");
return !b4||b4==="auto"?0:b4
},set:function(b4){if(bL.fx.step[b4.prop]){bL.fx.step[b4.prop](b4)
}else{if(b4.elem.style&&(b4.elem.style[bL.cssProps[b4.prop]]!=null||bL.cssHooks[b4.prop])){bL.style(b4.elem,b4.prop,b4.now+b4.unit)
}else{b4.elem[b4.prop]=b4.now
}}}}};
M.propHooks.scrollTop=M.propHooks.scrollLeft={set:function(b4){if(b4.elem.nodeType&&b4.elem.parentNode){b4.elem[b4.prop]=b4.now
}}};
bL.each(["toggle","show","hide"],function(b5,b4){var b6=bL.fn[b4];
bL.fn[b4]=function(b7,b9,b8){return b7==null||typeof b7==="boolean"||(!b5&&bL.isFunction(b7)&&bL.isFunction(b9))?b6.apply(this,arguments):this.animate(bK(b4,true),b7,b9,b8)
}
});
bL.fn.extend({fadeTo:function(b4,b7,b6,b5){return this.filter(V).css("opacity",0).show().end().animate({opacity:b7},b4,b6,b5)
},animate:function(ca,b7,b9,b8){var b6=bL.isEmptyObject(ca),b4=bL.speed(b7,b9,b8),b5=function(){var cb=j(this,bL.extend({},ca),b4);
if(b6){cb.stop(true)
}};
return b6||b4.queue===false?this.each(b5):this.queue(b4.queue,b5)
},stop:function(b6,b5,b4){var b7=function(b8){var b9=b8.stop;
delete b8.stop;
b9(b4)
};
if(typeof b6!=="string"){b4=b5;
b5=b6;
b6=aG
}if(b5&&b6!==false){this.queue(b6||"fx",[])
}return this.each(function(){var cb=true,b8=b6!=null&&b6+"queueHooks",ca=bL.timers,b9=bL._data(this);
if(b8){if(b9[b8]&&b9[b8].stop){b7(b9[b8])
}}else{for(b8 in b9){if(b9[b8]&&b9[b8].stop&&bR.test(b8)){b7(b9[b8])
}}}for(b8=ca.length;
b8--;
){if(ca[b8].elem===this&&(b6==null||ca[b8].queue===b6)){ca[b8].anim.stop(b4);
cb=false;
ca.splice(b8,1)
}}if(cb||!b4){bL.dequeue(this,b6)
}})
}});
function bK(b6,b8){var b7,b4={height:b6},b5=0;
b8=b8?1:0;
for(;
b5<4;
b5+=2-b8){b7=bV[b5];
b4["margin"+b7]=b4["padding"+b7]=b6
}if(b8){b4.opacity=b4.width=b6
}return b4
}bL.each({slideDown:bK("show"),slideUp:bK("hide"),slideToggle:bK("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(b4,b5){bL.fn[b4]=function(b6,b8,b7){return this.animate(b5,b6,b8,b7)
}
});
bL.speed=function(b6,b7,b5){var b4=b6&&typeof b6==="object"?bL.extend({},b6):{complete:b5||!b5&&b7||bL.isFunction(b6)&&b6,duration:b6,easing:b5&&b7||b7&&!bL.isFunction(b7)&&b7};
b4.duration=bL.fx.off?0:typeof b4.duration==="number"?b4.duration:b4.duration in bL.fx.speeds?bL.fx.speeds[b4.duration]:bL.fx.speeds._default;
if(b4.queue==null||b4.queue===true){b4.queue="fx"
}b4.old=b4.complete;
b4.complete=function(){if(bL.isFunction(b4.old)){b4.old.call(this)
}if(b4.queue){bL.dequeue(this,b4.queue)
}};
return b4
};
bL.easing={linear:function(b4){return b4
},swing:function(b4){return 0.5-Math.cos(b4*Math.PI)/2
}};
bL.timers=[];
bL.fx=M.prototype.init;
bL.fx.tick=function(){var b6,b5=bL.timers,b4=0;
for(;
b4<b5.length;
b4++){b6=b5[b4];
if(!b6()&&b5[b4]===b6){b5.splice(b4--,1)
}}if(!b5.length){bL.fx.stop()
}};
bL.fx.timer=function(b4){if(b4()&&bL.timers.push(b4)&&!ag){ag=setInterval(bL.fx.tick,bL.fx.interval)
}};
bL.fx.interval=13;
bL.fx.stop=function(){clearInterval(ag);
ag=null
};
bL.fx.speeds={slow:600,fast:200,_default:400};
bL.fx.step={};
if(bL.expr&&bL.expr.filters){bL.expr.filters.animated=function(b4){return bL.grep(bL.timers,function(b5){return b4===b5.elem
}).length
}
}var br=/^(?:body|html)$/i;
bL.fn.offset=function(cg){if(arguments.length){return cg===aG?this:this.each(function(ch){bL.offset.setOffset(this,cg,ch)
})
}var ca,b5,cb,cc,b9,cd,b4,b8,ce,b7,b6=this[0],cf=b6&&b6.ownerDocument;
if(!cf){return
}if((cb=cf.body)===b6){return bL.offset.bodyOffset(b6)
}b5=cf.documentElement;
if(!bL.contains(b5,b6)){return{top:0,left:0}
}ca=b6.getBoundingClientRect();
cc=bs(cf);
b9=b5.clientTop||cb.clientTop||0;
cd=b5.clientLeft||cb.clientLeft||0;
b4=cc.pageYOffset||b5.scrollTop;
b8=cc.pageXOffset||b5.scrollLeft;
ce=ca.top+b4-b9;
b7=ca.left+b8-cd;
return{top:ce,left:b7}
};
bL.offset={bodyOffset:function(b4){var b6=b4.offsetTop,b5=b4.offsetLeft;
if(bL.support.doesNotIncludeMarginInBodyOffset){b6+=parseFloat(bL.css(b4,"marginTop"))||0;
b5+=parseFloat(bL.css(b4,"marginLeft"))||0
}return{top:b6,left:b5}
},setOffset:function(b7,cg,ca){var cb=bL.css(b7,"position");
if(cb==="static"){b7.style.position="relative"
}var b9=bL(b7),b5=b9.offset(),b4=bL.css(b7,"top"),ce=bL.css(b7,"left"),cf=(cb==="absolute"||cb==="fixed")&&bL.inArray("auto",[b4,ce])>-1,cd={},cc={},b6,b8;
if(cf){cc=b9.position();
b6=cc.top;
b8=cc.left
}else{b6=parseFloat(b4)||0;
b8=parseFloat(ce)||0
}if(bL.isFunction(cg)){cg=cg.call(b7,ca,b5)
}if(cg.top!=null){cd.top=(cg.top-b5.top)+b6
}if(cg.left!=null){cd.left=(cg.left-b5.left)+b8
}if("using" in cg){cg.using.call(b7,cd)
}else{b9.css(cd)
}}};
bL.fn.extend({position:function(){if(!this[0]){return
}var b6=this[0],b5=this.offsetParent(),b7=this.offset(),b4=br.test(b5[0].nodeName)?{top:0,left:0}:b5.offset();
b7.top-=parseFloat(bL.css(b6,"marginTop"))||0;
b7.left-=parseFloat(bL.css(b6,"marginLeft"))||0;
b4.top+=parseFloat(bL.css(b5[0],"borderTopWidth"))||0;
b4.left+=parseFloat(bL.css(b5[0],"borderLeftWidth"))||0;
return{top:b7.top-b4.top,left:b7.left-b4.left}
},offsetParent:function(){return this.map(function(){var b4=this.offsetParent||s.body;
while(b4&&(!br.test(b4.nodeName)&&bL.css(b4,"position")==="static")){b4=b4.offsetParent
}return b4||s.body
})
}});
bL.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b6,b5){var b4=/Y/.test(b5);
bL.fn[b6]=function(b7){return bL.access(this,function(b8,cb,ca){var b9=bs(b8);
if(ca===aG){return b9?(b5 in b9)?b9[b5]:b9.document.documentElement[cb]:b8[cb]
}if(b9){b9.scrollTo(!b4?ca:bL(b9).scrollLeft(),b4?ca:bL(b9).scrollTop())
}else{b8[cb]=ca
}},b6,b7,arguments.length,null)
}
});
function bs(b4){return bL.isWindow(b4)?b4:b4.nodeType===9?b4.defaultView||b4.parentWindow:false
}bL.each({Height:"height",Width:"width"},function(b4,b5){bL.each({padding:"inner"+b4,content:b5,"":"outer"+b4},function(b6,b7){bL.fn[b7]=function(cb,ca){var b9=arguments.length&&(b6||typeof cb!=="boolean"),b8=b6||(cb===true||ca===true?"margin":"border");
return bL.access(this,function(cd,cc,ce){var cf;
if(bL.isWindow(cd)){return cd.document.documentElement["client"+b4]
}if(cd.nodeType===9){cf=cd.documentElement;
return Math.max(cd.body["scroll"+b4],cf["scroll"+b4],cd.body["offset"+b4],cf["offset"+b4],cf["client"+b4])
}return ce===aG?bL.css(cd,cc,ce,b8):bL.style(cd,cc,ce,b8)
},b5,b9?cb:aG,b9,null)
}
})
});
a7.jQuery=a7.$=bL;
if(typeof e==="function"&&e.amd&&e.amd.jQuery){e("jquery",[],function(){return bL
})
}})(window);
(function(){function aO(j,h,g){for(var i=(g||0)-1,f=j?j.length:0;
++i<f;
){if(j[i]===h){return i
}}return -1
}function aK(h,g){var i=typeof g;
if(h=h.cache,"boolean"==i||null==g){return h[g]?0:-1
}"number"!=i&&"string"!=i&&(i="object");
var f="number"==i?g:aP+g;
return h=(h=h[i])&&h[f],"object"==i?h&&aO(h,g)>-1?0:-1:h?0:-1
}function aI(j){var h=this.cache,g=typeof j;
if("boolean"==g||null==j){h[j]=!0
}else{"number"!=g&&"string"!=g&&(g="object");
var i="number"==g?j:aP+j,f=h[g]||(h[g]={});
"object"==g?(f[i]||(f[i]=[])).push(j):f[i]=!0
}}function aX(f){return f.charCodeAt(0)
}function aH(p,k){for(var j=p.criteria,l=k.criteria,g=-1,m=j.length;
++g<m;
){var f=j[g],h=l[g];
if(f!==h){if(f>h||"undefined"==typeof f){return 1
}if(f<h||"undefined"==typeof h){return -1
}}}return p.index-k.index
}function aN(q){var k=-1,m=q.length,h=q[0],p=q[m/2|0],g=q[m-1];
if(h&&"object"==typeof h&&p&&"object"==typeof p&&g&&"object"==typeof g){return !1
}var j=aW();
j["false"]=j["null"]=j["true"]=j.undefined=!1;
var f=aW();
for(f.array=q,f.cache=j,f.push=aI;
++k<m;
){f.push(q[k])
}return f
}function a1(f){return"\\"+au[f]
}function aT(){return aU.pop()||[]
}function aW(){return aV.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}
}function aQ(f){f.length=0,aU.length<a2&&aU.push(f)
}function aZ(g){var f=g.cache;
f&&aZ(f),g.array=g.cache=g.criteria=g.object=g.number=g.string=g.value=null,aV.length<a2&&aV.push(g)
}function aM(k,h,g){h||(h=0),"undefined"==typeof g&&(g=k?k.length:0);
for(var i=-1,f=g-h||0,j=Array(f<0?0:f);
++i<f;
){j[i]=k[h+i]
}return j
}function aJ(co){function cz(g){return g&&"object"==typeof g&&!bQ(g)&&df.call(g,"__wrapped__")?g:new cB(g)
}function cB(h,g){this.__chain__=!!g,this.__wrapped__=h
}function cF(Q){function G(){if(J){var bn=aM(J);
cM.apply(bn,arguments)
}if(this instanceof G){var Y=cV(h.prototype),X=h.apply(Y,bn||arguments);
return dB(X)?X:Y
}return h.apply(g,bn||arguments)
}var h=Q[0],J=Q[2],g=Q[4];
return b4(G,Q),G
}function cX(J,g,cn,Y,ce){if(cn){var G=cn(J);
if("undefined"!=typeof G){return G
}}var br=dB(J);
if(!br){return J
}var X=bq.call(J);
if(!ap[X]){return J
}var bn=cq[X];
switch(X){case av:case az:return new bn(+J);
case aL:case ak:return new bn(J);
case ao:return G=bn(J.source,ay.exec(J)),G.lastIndex=J.lastIndex,G
}var cr=bQ(J);
if(g){var bt=!Y;
Y||(Y=aT()),ce||(ce=aT());
for(var Q=Y.length;
Q--;
){if(Y[Q]==J){return ce[Q]
}}G=cr?bn(J.length):{}
}else{G=cr?aM(J):cE({},J)
}return cr&&(df.call(J,"index")&&(G.index=J.index),df.call(J,"input")&&(G.input=J.input)),g?(Y.push(J),ce.push(G),(cr?b6:bN)(J,function(ct,h){G[h]=cX(ct,g,cn,Y,ce)
}),bt&&(aQ(Y),aQ(ce)),G):G
}function cV(h,g){return dB(h)?cZ(h):{}
}function cO(Q,G,h){if("function"!=typeof Q){return bR
}if("undefined"==typeof G||!("prototype" in Q)){return Q
}var J=Q.__bindData__;
if("undefined"==typeof J&&(D.funcNames&&(J=!Q.name),J=J||!D.funcDecomp,!J)){var g=bD.call(Q);
D.funcNames||(J=!al.test(g)),J||(J=ar.test(g),b4(Q,J))
}if(J===!1||J!==!0&&1&J[1]){return Q
}switch(h){case 1:return function(X){return Q.call(G,X)
};
case 2:return function(X,Y){return Q.call(G,X,Y)
};
case 3:return function(Y,bn,X){return Q.call(G,Y,bn,X)
};
case 4:return function(Y,bn,X,br){return Q.call(G,Y,bn,X,br)
}
}return cP(Q,G)
}function cJ(G){function g(){var dr=X?br:this;
if(ce){var ct=aM(ce);
cM.apply(ct,arguments)
}if((h||bn)&&(ct||(ct=aM(arguments)),h&&cM.apply(ct,h),bn&&ct.length<Q)){return Y|=16,cJ([cn,cr?Y:-4&Y,ct,null,br,Q])
}if(ct||(ct=arguments),J&&(cn=dr[bt]),this instanceof g){dr=cV(cn.prototype);
var dn=cn.apply(dr,ct);
return dB(dn)?dn:dr
}return cn.apply(dr,ct)
}var cn=G[0],Y=G[1],ce=G[2],h=G[3],br=G[4],Q=G[5],X=1&Y,J=2&Y,bn=4&Y,cr=8&Y,bt=cn;
return b4(g,G),g
}function cI(bn,Q){var Y=-1,X=dv(),G=bn?bn.length:0,J=G>=a0&&X===aO,h=[];
if(J){var g=aN(Q);
g?(X=aK,Q=g):J=!1
}for(;
++Y<G;
){var br=bn[Y];
X(Q,br)<0&&h.push(br)
}return J&&aZ(Q),h
}function cW(G,g,ce,Y){for(var bt=(Y||0)-1,h=G?G.length:0,br=[];
++bt<h;
){var Q=G[bt];
if(Q&&"object"==typeof Q&&"number"==typeof Q.length&&(bQ(Q)||K(Q))){g||(Q=cW(Q,g,ce));
var X=-1,J=Q.length,bn=br.length;
for(br.length+=J;
++X<J;
){br[bn++]=Q[X]
}}else{ce||br.push(Q)
}}return br
}function bP(ce,bn,X,dD,Q,bt){if(X){var dH=X(ce,bn);
if("undefined"!=typeof dH){return !!dH
}}if(ce===bn){return 0!==ce||1/ce==1/bn
}var dt=typeof ce,dF=typeof bn;
if(ce===ce&&(!ce||!ae[dt])&&(!bn||!ae[dF])){return !1
}if(null==ce||null==bn){return ce===bn
}var br=bq.call(ce),Y=bq.call(bn);
if(br==ag&&(br=aC),Y==ag&&(Y=aC),br!=Y){return !1
}switch(br){case av:case az:return +ce==+bn;
case aL:return ce!=+ce?bn!=+bn:0==ce?1/ce==1/bn:ce==+bn;
case ao:case ak:return ce==z(bn)
}var dn=br==aB;
if(!dn){var dr=df.call(ce,"__wrapped__"),G=df.call(bn,"__wrapped__");
if(dr||G){return bP(dr?ce.__wrapped__:ce,G?bn.__wrapped__:bn,X,dD,Q,bt)
}if(br!=aC){return !1
}var cn=ce.constructor,dG=bn.constructor;
if(cn!=dG&&!(cU(cn)&&cn instanceof cn&&cU(dG)&&dG instanceof dG)&&"constructor" in ce&&"constructor" in bn){return !1
}}var dI=!Q;
Q||(Q=aT()),bt||(bt=aT());
for(var dE=Q.length;
dE--;
){if(Q[dE]==ce){return bt[dE]==bn
}}var J=0;
if(dH=!0,Q.push(ce),bt.push(bn),dn){if(dE=ce.length,J=bn.length,dH=J==dE,dH||dD){for(;
J--;
){var ct=dE,cr=bn[J];
if(dD){for(;
ct--&&!(dH=bP(ce[ct],cr,X,dD,Q,bt));
){}}else{if(!(dH=bP(ce[J],cr,X,dD,Q,bt))){break
}}}}}else{W(bn,function(h,g,dJ){return df.call(dJ,g)?(J++,dH=df.call(ce,g)&&bP(ce[g],h,X,dD,Q,bt)):aG
}),dH&&!dD&&W(ce,function(dJ,h,g){return df.call(g,h)?dH=--J>-1:aG
})
}return Q.pop(),bt.pop(),dI&&(aQ(Q),aQ(bt)),dH
}function bh(Q,G,h,J,g){(bQ(G)?b6:bN)(G,function(br,cn){var Y,bn,bt=br,X=Q[cn];
if(br&&((bn=bQ(br))||dA(br))){for(var cr=J.length;
cr--;
){if(Y=J[cr]==br){X=g[cr];
break
}}if(!Y){var ce;
h&&(bt=h(X,br),(ce="undefined"!=typeof bt)&&(X=bt)),ce||(X=bn?bQ(X)?X:[]:dA(X)?X:{}),J.push(br),g.push(X),ce||bh(X,br,h,J,g)
}}else{h&&(bt=h(X,br),"undefined"==typeof bt&&(bt=br)),"undefined"!=typeof bt&&(X=bt)
}Q[cn]=X
})
}function bW(h,g){return h+dw(c8()*(g-h+1))
}function a3(cr,bn,cn){var bt=-1,Y=dv(),G=cr?cr.length:0,ct=[],ce=!bn&&G>=a0&&Y===aO,Q=cn||ce?aT():ct;
if(ce){var X=aN(Q);
Y=aK,Q=X
}for(;
++bt<G;
){var br=cr[bt],J=cn?cn(br,bt,cr):br;
(bn?!bt||Q[Q.length-1]!==J:Y(Q,J)<0)&&((cn||ce)&&Q.push(J),ct.push(br))
}return ce?(aQ(Q.array),aZ(Q)):cn&&aQ(Q),ct
}function cA(g){return function(X,Q,Y){var G={};
Q=cz.createCallback(Q,Y,3);
var bn=-1,h=X?X.length:0;
if("number"==typeof h){for(;
++bn<h;
){var J=X[bn];
g(G,J,Q(J,bn,X),X)
}}else{bN(X,function(br,bt,ce){g(G,br,Q(br,bt,ce),ce)
})
}return G
}
}function c7(G,g,cn,Y,ce,h){var br=1&g,Q=2&g,X=4&g,J=16&g,bn=32&g;
if(!Q&&!cU(G)){throw new m
}J&&!cn.length&&(g&=-17,J=cn=!1),bn&&!Y.length&&(g&=-33,bn=Y=!1);
var cr=G&&G.__bindData__;
if(cr&&cr!==!0){return cr=aM(cr),cr[2]&&(cr[2]=aM(cr[2])),cr[3]&&(cr[3]=aM(cr[3])),!br||1&cr[1]||(cr[4]=ce),!br&&1&cr[1]&&(g|=8),!X||4&cr[1]||(cr[5]=h),J&&cM.apply(cr[2]||(cr[2]=[]),cn),bn&&ch.apply(cr[3]||(cr[3]=[]),Y),cr[1]|=g,c7.apply(null,cr)
}var bt=1==g||17===g?cF:cJ;
return bt([G,g,cn,Y,ce,h])
}function bI(g){return bS[g]
}function dv(){var g=(g=cz.indexOf)===cK?aO:g;
return g
}function cp(g){return"function"==typeof g&&q.test(g)
}function cg(G){var h,g;
return G&&bq.call(G)==aC&&(h=G.constructor,!cU(h)||h instanceof h)?(W(G,function(Q,J){g=J
}),"undefined"==typeof g||df.call(G,g)):!1
}function by(g){return bi[g]
}function K(g){return g&&"object"==typeof g&&"number"==typeof g.length&&bq.call(g)==ag||!1
}function ba(J,h,g,G){return"boolean"!=typeof h&&null!=h&&(G=g,g=h,h=!1),cX(J,h,"function"==typeof g&&cO(g,G,1))
}function bp(G,h,g){return cX(G,!0,"function"==typeof h&&cO(h,g,1))
}function dk(G,h){var g=cV(G);
return h?cE(g,h):g
}function de(J,h,g){var G;
return h=cz.createCallback(h,g,3),bN(J,function(Y,X,Q){return h(Y,X,Q)?(G=X,!1):aG
}),G
}function cL(J,h,g){var G;
return h=cz.createCallback(h,g,3),b9(J,function(Y,X,Q){return h(Y,X,Q)?(G=X,!1):aG
}),G
}function j(Q,G,h){var J=[];
W(Q,function(Y,X){J.push(X,Y)
});
var g=J.length;
for(G=cO(G,h,3);
g--&&G(J[g--],J[g],Q)!==!1;
){}return Q
}function b9(X,G,h){var J=c2(X),g=J.length;
for(G=cO(G,h,3);
g--;
){var Q=J[g];
if(G(X[Q],Q,X)===!1){break
}}return X
}function w(h){var g=[];
return W(h,function(J,G){cU(J)&&g.push(G)
}),g.sort()
}function C(h,g){return h?df.call(h,g):!1
}function p(X){for(var G=-1,h=c2(X),J=h.length,g={};
++G<J;
){var Q=h[G];
g[X[Q]]=Q
}return g
}function dC(g){return g===!0||g===!1||g&&"object"==typeof g&&bq.call(g)==av||!1
}function a9(g){return g&&"object"==typeof g&&bq.call(g)==az||!1
}function bg(g){return g&&1===g.nodeType||!1
}function bx(J){var h=!0;
if(!J){return h
}var g=bq.call(J),G=J.length;
return g==aB||g==ak||g==ag||g==aC&&"number"==typeof G&&cU(J.splice)?!G:(bN(J,function(){return h=!1
}),h)
}function v(J,h,g,G){return bP(J,h,"function"==typeof g&&cO(g,G,2))
}function B(g){return S(g)&&!ca(parseFloat(g))
}function cU(g){return"function"==typeof g
}function dB(g){return !(!g||!ae[typeof g])
}function bH(g){return dj(g)&&g!=+g
}function R(g){return null===g
}function dj(g){return"number"==typeof g||g&&"object"==typeof g&&bq.call(g)==aL||!1
}function cS(g){return g&&"object"==typeof g&&bq.call(g)==ao||!1
}function o(g){return"string"==typeof g||g&&"object"==typeof g&&bq.call(g)==ak||!1
}function bo(g){return"undefined"==typeof g
}function ck(J,h,g){var G={};
return h=cz.createCallback(h,g,3),bN(J,function(Y,X,Q){G[X]=h(Y,X,Q)
}),G
}function b3(bn){var J=arguments,G=2;
if(!dB(bn)){return bn
}if("number"!=typeof J[2]&&(G=J.length),G>3&&"function"==typeof J[G-2]){var X=cO(J[--G-1],J[G--],2)
}else{G>2&&"function"==typeof J[G-1]&&(X=J[--G])
}for(var h=aM(arguments,1,G),Y=-1,g=aT(),Q=aT();
++Y<G;
){bh(bn,h[Y],X,g,Q)
}return aQ(g),aQ(Q),bn
}function c4(bn,Q,J){var X={};
if("function"!=typeof Q){var h=[];
W(bn,function(bt,br){h.push(br)
}),h=cI(h,cW(arguments,!0,!1,1));
for(var Y=-1,g=h.length;
++Y<g;
){var G=h[Y];
X[G]=bn[G]
}}else{Q=cz.createCallback(Q,J,3),W(bn,function(ce,bt,br){Q(ce,bt,br)||(X[bt]=ce)
})
}return X
}function b2(X){for(var G=-1,h=c2(X),J=h.length,g=a7(J);
++G<J;
){var Q=h[G];
g[G]=[Q,X[Q]]
}return g
}function Z(bn,Q,J){var X={};
if("function"!=typeof Q){for(var h=-1,Y=cW(arguments,!0,!1,1),g=dB(bn)?Y.length:0;
++h<g;
){var G=Y[h];
G in bn&&(X[G]=bn[G])
}}else{Q=cz.createCallback(Q,J,3),W(bn,function(ce,bt,br){Q(ce,bt,br)&&(X[bt]=ce)
})
}return X
}function cf(Y,J,G,Q){var h=bQ(Y);
if(null==G){if(h){G=[]
}else{var X=Y&&Y.constructor,g=X&&X.prototype;
G=cV(g)
}}return J&&(J=cz.createCallback(J,Q,4),(h?b6:bN)(Y,function(bt,br,bn){return J(G,bt,br,bn)
})),G
}function c3(Q){for(var G=-1,h=c2(Q),J=h.length,g=a7(J);
++G<J;
){g[G]=Q[h[G]]
}return g
}function bO(X){for(var G=arguments,h=-1,J=cW(G,!0,!1,1),g=G[2]&&G[2][G[1]]===X?1:J.length,Q=a7(g);
++h<g;
){Q[h]=X[J[h]]
}return Q
}function cG(Y,J,G){var Q=-1,h=dv(),X=Y?Y.length:0,g=!1;
return G=(G<0?bJ(0,X+G):G)||0,bQ(Y)?g=h(Y,J,G)>-1:"number"==typeof X?g=(o(Y)?Y.indexOf(J,G):h(Y,J,G))>-1:bN(Y,function(bn){return ++Q<G?aG:!(g=bn===J)
}),g
}function du(X,G,h){var J=!0;
G=cz.createCallback(G,h,3);
var g=-1,Q=X?X.length:0;
if("number"==typeof Q){for(;
++g<Q&&(J=!!G(X[g],g,X));
){}}else{bN(X,function(br,bn,Y){return J=!!G(br,bn,Y)
})
}return J
}function dd(Y,J,G){var Q=[];
J=cz.createCallback(J,G,3);
var h=-1,X=Y?Y.length:0;
if("number"==typeof X){for(;
++h<X;
){var g=Y[h];
J(g,h,Y)&&Q.push(g)
}}else{bN(Y,function(bt,br,bn){J(bt,br,bn)&&Q.push(bt)
})
}return Q
}function cy(Y,J,G){J=cz.createCallback(J,G,3);
var Q=-1,h=Y?Y.length:0;
if("number"!=typeof h){var X;
return bN(Y,function(bt,bn,br){return J(bt,bn,br)?(X=bt,!1):aG
}),X
}for(;
++Q<h;
){var g=Y[Q];
if(J(g,Q,Y)){return g
}}}function I(J,h,g){var G;
return h=cz.createCallback(h,g,3),bT(J,function(Y,X,Q){return h(Y,X,Q)?(G=Y,!1):aG
}),G
}function b6(Q,G,h){var J=-1,g=Q?Q.length:0;
if(G=G&&"undefined"==typeof h?G:cO(G,h,3),"number"==typeof g){for(;
++J<g&&G(Q[J],J,Q)!==!1;
){}}else{bN(Q,G)
}return Q
}function bT(Q,G,h){var J=Q?Q.length:0;
if(G=G&&"undefined"==typeof h?G:cO(G,h,3),"number"==typeof J){for(;
J--&&G(Q[J],J,Q)!==!1;
){}}else{var g=c2(Q);
J=g.length,bN(Q,function(bn,X,Y){return X=g?g[--J]:--J,G(Y[X],X,Y)
})
}return Q
}function bC(Y,J){var G=aM(arguments,2),Q=-1,h="function"==typeof J,X=Y?Y.length:0,g=a7("number"==typeof X?X:0);
return b6(Y,function(bn){g[++Q]=(h?J:bn[J]).apply(bn,G)
}),g
}function cT(X,G,h){var J=-1,g=X?X.length:0;
if(G=cz.createCallback(G,h,3),"number"==typeof g){for(var Q=a7(g);
++J<g;
){Q[J]=G(X[J],J,X)
}}else{Q=[],bN(X,function(br,bn,Y){Q[++J]=G(br,bn,Y)
})
}return Q
}function bM(bn,Q,J){var h=-(1/0),Y=h;
if("function"!=typeof Q&&J&&J[Q]===bn&&(Q=null),null==Q&&bQ(bn)){for(var g=-1,G=bn.length;
++g<G;
){var X=bn[g];
X>Y&&(Y=X)
}}else{Q=null==Q&&o(bn)?aX:cz.createCallback(Q,J,3),b6(bn,function(cn,bt,ce){var br=Q(cn,bt,ce);
br>h&&(h=br,Y=cn)
})
}return Y
}function be(bn,Q,J){var h=1/0,Y=h;
if("function"!=typeof Q&&J&&J[Q]===bn&&(Q=null),null==Q&&bQ(bn)){for(var g=-1,G=bn.length;
++g<G;
){var X=bn[g];
X<Y&&(Y=X)
}}else{Q=null==Q&&o(bn)?aX:cz.createCallback(Q,J,3),b6(bn,function(cn,bt,ce){var br=Q(cn,bt,ce);
br<h&&(h=br,Y=cn)
})
}return Y
}function bV(Y,J,G,Q){if(!Y){return G
}var h=arguments.length<3;
J=cz.createCallback(J,Q,4);
var X=-1,g=Y.length;
if("number"==typeof g){for(h&&(G=Y[++X]);
++X<g;
){G=J(G,Y[X],X,Y)
}}else{bN(Y,function(bt,bn,br){G=h?(h=!1,bt):J(G,bt,bn,br)
})
}return G
}function V(Q,G,h,J){var g=arguments.length<3;
return G=cz.createCallback(G,J,4),bT(Q,function(bn,X,Y){h=g?(g=!1,bn):G(h,bn,X,Y)
}),h
}function cv(G,h,g){return h=cz.createCallback(h,g,3),dd(G,function(X,J,Q){return !h(X,J,Q)
})
}function c6(J,h,g){if(J&&"number"!=typeof J.length&&(J=c3(J)),null==h||g){return J?J[bW(0,J.length-1)]:aG
}var G=P(J);
return G.length=cC(bJ(0,h),G.length),G
}function P(J){var h=-1,g=J?J.length:0,G=a7("number"==typeof g?g:0);
return b6(J,function(X){var Q=bW(0,++h);
G[h]=G[Q],G[Q]=X
}),G
}function bG(h){var g=h?h.length:0;
return"number"==typeof g?g:c2(h).length
}function ds(X,G,h){var J;
G=cz.createCallback(G,h,3);
var g=-1,Q=X?X.length:0;
if("number"==typeof Q){for(;
++g<Q&&!(J=G(X[g],g,X));
){}}else{bN(X,function(br,bn,Y){return !(J=G(br,bn,Y))
})
}return !!J
}function cm(bn,J,h){var X=-1,Y=bQ(J),g=bn?bn.length:0,Q=a7("number"==typeof g?g:0);
for(Y||(J=cz.createCallback(J,h,3)),b6(bn,function(cn,ce,bt){var br=Q[++X]=aW();
Y?br.criteria=cT(J,function(cr){return cn[cr]
}):(br.criteria=aT())[0]=J(cn,ce,bt),br.index=X,br.value=cn
}),g=Q.length,Q.sort(aH);
g--;
){var G=Q[g];
Q[g]=G.value,Y||aQ(G.criteria),aZ(G)
}return Q
}function cd(g){return g&&"number"==typeof g.length?aM(g):c3(g)
}function bv(Q){for(var G=-1,h=Q?Q.length:0,J=[];
++G<h;
){var g=Q[G];
g&&J.push(g)
}return J
}function H(g){return cI(g,cW(arguments,!0,!0,1))
}function a8(Q,G,h){var J=-1,g=Q?Q.length:0;
for(G=cz.createCallback(G,h,3);
++J<g;
){if(G(Q[J],J,Q)){return J
}}return -1
}function bm(J,h,g){var G=J?J.length:0;
for(h=cz.createCallback(h,g,3);
G--;
){if(h(J[G],G,J)){return G
}}return -1
}function di(X,G,h){var J=0,g=X?X.length:0;
if("number"!=typeof G&&null!=G){var Q=-1;
for(G=cz.createCallback(G,h,3);
++Q<g&&G(X[Q],Q,X);
){J++
}}else{if(J=G,null==J||h){return X?X[0]:aG
}}return aM(X,0,cC(bJ(0,J),g))
}function db(J,h,g,G){return"boolean"!=typeof h&&null!=h&&(G=g,g="function"!=typeof h&&G&&G[h]===J?null:h,h=!1),null!=g&&(J=cT(J,g,G)),cW(J,h)
}function cK(G,h,J){if("number"==typeof J){var g=G?G.length:0;
J=J<0?bJ(0,g+J):J||0
}else{if(J){var Q=bs(G,h);
return G[Q]===h?Q:-1
}}return aO(G,h,J)
}function i(X,G,h){var J=0,g=X?X.length:0;
if("number"!=typeof G&&null!=G){var Q=g;
for(G=cz.createCallback(G,h,3);
Q--&&G(X[Q],Q,X);
){J++
}}else{J=null==G||h?1:G||J
}return aM(X,0,cC(bJ(0,g-J),g))
}function b8(){for(var ct=[],bn=-1,cr=arguments.length,bt=aT(),Y=dv(),G=Y===aO,dn=aT();
++bn<cr;
){var cn=arguments[bn];
(bQ(cn)||K(cn))&&(ct.push(cn),bt.push(G&&cn.length>=a0&&aN(bn?ct[bn]:dn)))
}var Q=ct[0],X=-1,br=Q?Q.length:0,J=[];
aO:for(;
++X<br;
){var ce=bt[0];
if(cn=Q[X],(ce?aK(ce,cn):Y(dn,cn))<0){for(bn=cr,(ce||dn).push(cn);
--bn;
){if(ce=bt[bn],(ce?aK(ce,cn):Y(ct[bn],cn))<0){continue aO
}}J.push(cn)
}}for(;
cr--;
){ce=bt[cr],ce&&aZ(ce)
}return aQ(bt),aQ(dn),J
}function u(X,G,h){var J=0,g=X?X.length:0;
if("number"!=typeof G&&null!=G){var Q=g;
for(G=cz.createCallback(G,h,3);
Q--&&G(X[Q],Q,X);
){J++
}}else{if(J=G,null==J||h){return X?X[g-1]:aG
}}return aM(X,bJ(0,g-J))
}function A(J,h,g){var G=J?J.length:0;
for("number"==typeof g&&(G=(g<0?bJ(0,G+g):cC(g,G-1))+1);
G--;
){if(J[G]===h){return G
}}return -1
}function n(Y){for(var J=arguments,G=0,Q=J.length,h=Y?Y.length:0;
++G<Q;
){for(var X=-1,g=J[G];
++X<h;
){Y[X]===g&&(bj.call(Y,X--,1),h--)
}}return Y
}function dz(X,G,h){X=+X||0,h="number"==typeof h?h:+h||1,null==G&&(G=X,X=0);
for(var J=-1,g=bJ(0,x((G-X)/(h||1))),Q=a7(g);
++J<g;
){Q[J]=X,X+=h
}return Q
}function a6(Y,J,G){var Q=-1,h=Y?Y.length:0,X=[];
for(J=cz.createCallback(J,G,3);
++Q<h;
){var g=Y[Q];
J(g,Q,Y)&&(X.push(g),bj.call(Y,Q--,1),h--)
}return X
}function bc(X,G,h){if("number"!=typeof G&&null!=G){var J=0,g=-1,Q=X?X.length:0;
for(G=cz.createCallback(G,h,3);
++g<Q&&G(X[g],g,X);
){J++
}}else{J=null==G||h?1:bJ(0,G)
}return aM(X,J)
}function bs(Y,J,G,Q){var h=0,X=Y?Y.length:h;
for(G=G?cz.createCallback(G,Q,1):bR,J=G(J);
h<X;
){var g=h+X>>>1;
G(Y[g])<J?h=g+1:X=g
}return h
}function r(){return a3(cW(arguments,!0,!0))
}function y(J,h,g,G){return"boolean"!=typeof h&&null!=h&&(G=g,g="function"!=typeof h&&G&&G[h]===J?null:h,h=!1),null!=g&&(g=cz.createCallback(g,G,3)),a3(J,h,g)
}function cQ(g){return cI(g,aM(arguments,1))
}function dx(){for(var J=-1,h=arguments.length;
++J<h;
){var g=arguments[J];
if(bQ(g)||K(g)){var G=G?a3(cI(G,g).concat(cI(g,G))):g
}}return G||[]
}function bE(){for(var J=arguments.length>1?arguments:arguments[0],h=-1,g=J?bM(L(J,"length")):0,G=a7(g<0?0:g);
++h<g;
){G[h]=L(J,h)
}return G
}function N(X,G){var h=-1,J=X?X.length:0,g={};
for(G||!J||bQ(X[0])||(G=[]);
++h<J;
){var Q=X[h];
G?g[Q]=G[h]:Q&&(g[Q[0]]=Q[1])
}return g
}function dg(h,g){if(!cU(g)){throw new m
}return function(){return --h<1?g.apply(this,arguments):aG
}
}function cP(h,g){return arguments.length>2?c7(h,17,aM(arguments,2),null,g):c7(h,1,null,null,g)
}function l(Q){for(var G=arguments.length>1?cW(arguments,!0,!1,1):w(Q),h=-1,J=G.length;
++h<J;
){var g=G[h];
Q[g]=c7(Q[g],1,null,null,Q)
}return Q
}function bk(h,g){return arguments.length>2?c7(g,19,aM(arguments,2),null,h):c7(g,3,null,null,h)
}function ci(){for(var h=arguments,g=h.length;
g--;
){if(!cU(h[g])){throw new m
}}return function(){for(var J=arguments,G=h.length;
G--;
){J=[h[G].apply(this,J)]
}return J[0]
}
}function b0(h,g){return g="number"==typeof g?g:+g||h.length,c7(h,4,null,null,null,g)
}function c1(X,G,dt){var cn,dr,Q,dn,bn,ce,Y,cr=0,J=!1,dD=!0;
if(!cU(X)){throw new m
}if(G=bJ(0,G)||0,dt===!0){var br=!0;
dD=!1
}else{dB(dt)&&(br=dt.leading,J="maxWait" in dt&&(bJ(G,dt.maxWait)||0),dD="trailing" in dt?dt.trailing:dD)
}var bt=function(){var g=G-(bw()-dn);
if(g>0){ce=k(bt,g)
}else{dr&&cN(dr);
var h=Y;
dr=ce=Y=aG,h&&(cr=bw(),Q=X.apply(bn,cn),ce||dr||(cn=bn=null))
}},ct=function(){ce&&cN(ce),dr=ce=Y=aG,(dD||J!==G)&&(cr=bw(),Q=X.apply(bn,cn),ce||dr||(cn=bn=null))
};
return function(){if(cn=arguments,dn=bw(),bn=this,Y=dD&&(ce||!br),J===!1){var dE=br&&!ce
}else{dr||br||(cr=dn);
var h=J-(dn-cr),g=h<=0;
g?(dr&&(dr=cN(dr)),cr=dn,Q=X.apply(bn,cn)):dr||(dr=k(ct,h))
}return g&&ce?ce=cN(ce):ce||G===J||(ce=k(bt,G)),dE&&(g=!0,Q=X.apply(bn,cn)),!g||ce||dr||(cn=bn=null),Q
}
}function bZ(h){if(!cU(h)){throw new m
}var g=aM(arguments,1);
return k(function(){h.apply(aG,g)
},1)
}function T(G,h){if(!cU(G)){throw new m
}var g=aM(arguments,2);
return k(function(){G.apply(aG,g)
},h)
}function cb(G,h){if(!cU(G)){throw new m
}var g=function(){var Q=g.cache,J=h?h.apply(this,arguments):aP+arguments[0];
return df.call(Q,J)?Q[J]:Q[J]=G.apply(this,arguments)
};
return g.cache={},g
}function c0(G){var h,g;
if(!cU(G)){throw new m
}return function(){return h?g:(h=!0,g=G.apply(this,arguments),G=null,g)
}
}function bK(g){return c7(g,16,aM(arguments,1))
}function cD(g){return c7(g,32,null,aM(arguments,1))
}function dp(Q,G,h){var J=!0,g=!0;
if(!cU(Q)){throw new m
}return h===!1?J=!1:dB(h)&&(J="leading" in h?h.leading:J,g="trailing" in h?h.trailing:g),af.leading=J,af.maxWait=G,af.trailing=g,c1(Q,G,af)
}function c9(h,g){return c7(g,16,[h])
}function cs(g){return function(){return g
}
}function E(Y,J,G){var Q=typeof Y;
if(null==Y||"function"==Q){return cO(Y,J,G)
}if("object"!=Q){return bd(Y)
}var h=c2(Y),X=h[0],g=Y[X];
return 1!=h.length||g!==g||dB(g)?function(br){for(var bn=h.length,bt=!1;
bn--&&(bt=bP(br[h[bn]],Y[h[bn]],null,!0));
){}return bt
}:function(br){var bn=br[X];
return g===bn&&(0!==g||1/g==1/bn)
}
}function b5(g){return null==g?"":z(g).replace(a4,bI)
}function bR(g){return g
}function bA(Y,J,G){var Q=!0,h=J&&w(J);
J&&(G||h.length)||(null==G&&(G=J),X=cB,J=Y,Y=cz,h=w(J)),G===!1?Q=!1:dB(G)&&"chain" in G&&(Q=G.chain);
var X=Y,g=cU(X);
b6(h,function(br){var bn=Y[br]=J[br];
g&&(X.prototype[br]=function(){var cr=this.__chain__,cn=this.__wrapped__,bt=[cn];
cM.apply(bt,arguments);
var ce=bn.apply(Y,bt);
if(Q||cr){if(cn===ce&&dB(ce)){return this
}ce=new X(ce),ce.__chain__=cr
}return ce
})
})
}function cR(){return co._=bb,this
}function bL(){}function bd(g){return function(h){return h[g]
}
}function bU(X,G,h){var J=null==X,g=null==G;
if(null==h&&("boolean"==typeof X&&g?(h=X,X=1):g||"boolean"!=typeof G||(h=G,g=!0)),J&&g&&(G=1),X=+X||0,g?(G=X,X=0):G=+G||0,h||X%1||G%1){var Q=c8();
return cC(X+Q*(G-X+parseFloat("1e-"+((Q+"").length-1))),G)
}return bW(X,G)
}function U(G,h){if(G){var g=G[h];
return cU(g)?G[h]():g
}}function cu(Q,h,dt){var ce=cz.templateSettings;
Q=z(Q||""),dt=dc({},dt,ce);
var dr,J=dc({},dt.imports,ce.imports),bn=c2(J),bt=c3(J),Y=0,cn=dt.interpolate||aw,G="__p += '",dD=s((dt.escape||aw).source+"|"+cn.source+"|"+(cn===am?aE:aw).source+"|"+(dt.evaluate||aw).source+"|$","g");
Q.replace(dD,function(dF,dE,dH,dI,g,dG){return dH||(dH=dI),G+=Q.slice(Y,dG).replace(ah,a1),dE&&(G+="' +\n__e("+dE+") +\n'"),g&&(dr=!0,G+="';\n"+g+";\n__p += '"),dH&&(G+="' +\n((__t = ("+dH+")) == null ? '' : __t) +\n'"),Y=dG+dF.length,dF
}),G+="';\n";
var br=dt.variable,ct=br;
ct||(br="obj",G="with ("+br+") {\n"+G+"\n}\n"),G=(dr?G.replace(aF,""):G).replace(aS,"$1").replace(aR,"$1;"),G="function("+br+") {\n"+(ct?"":br+" || ("+br+" = {});\n")+"var __t, __p = '', __e = _.escape"+(dr?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+G+"return __p\n}";
var X="\n/*\n//# sourceURL="+(dt.sourceURL||"/lodash/template/source["+ax+++"]")+"\n*/";
try{var cr=da(bn,"return "+G+X).apply(aG,bt)
}catch(dn){throw dn.source=G,dn
}return h?cr(h):(cr.source=G,cr)
}function c5(Q,G,h){Q=(Q=+Q)>-1?Q:0;
var J=-1,g=a7(Q);
for(G=cO(G,h,1);
++J<Q;
){g[J]=G(J)
}return g
}function O(g){return null==g?"":z(g).replace(b1,by)
}function bF(h){var g=++aD;
return z(null==h?"":h)+g
}function dq(g){return g=new cB(g),g.__chain__=!0,g
}function cl(h,g){return g(h),h
}function cc(){return this.__chain__=!0,this
}function bu(){return z(this.__wrapped__)
}function F(){return this.__wrapped__
}co=co?aa.defaults(at.Object(),co,aa.pick(at,aA)):at;
var a7=co.Array,bl=co.Boolean,dh=co.Date,da=co.Function,cH=co.Math,f=co.Number,b7=co.Object,s=co.RegExp,z=co.String,m=co.TypeError,dy=[],a5=b7.prototype,bb=co._,bq=a5.toString,q=s("^"+z(bq).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),x=cH.ceil,cN=co.clearTimeout,dw=cH.floor,bD=da.prototype.toString,M=cp(M=b7.getPrototypeOf)&&M,df=a5.hasOwnProperty,cM=dy.push,k=co.setTimeout,bj=dy.splice,ch=dy.unshift,bY=function(){try{var J={},h=cp(h=b7.defineProperty)&&h,g=h(J,J,J)&&h
}catch(G){}return g
}(),cZ=cp(cZ=b7.create)&&cZ,bX=cp(bX=a7.isArray)&&bX,S=co.isFinite,ca=co.isNaN,cY=cp(cY=b7.keys)&&cY,bJ=cH.max,cC=cH.min,dm=co.parseInt,c8=cH.random,cq={};
cq[aB]=a7,cq[av]=bl,cq[az]=dh,cq[ad]=da,cq[aC]=b7,cq[aL]=f,cq[ao]=s,cq[ak]=z,cB.prototype=cz.prototype;
var D=cz.support={};
D.funcDecomp=!cp(co.WinRTError)&&ar.test(aJ),D.funcNames="string"==typeof da.name,cz.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:am,variable:"",imports:{_:cz}},cZ||(cV=function(){function g(){}return function(h){if(dB(h)){g.prototype=h;
var G=new g;
g.prototype=null
}return G||co.Object()
}
}());
var b4=bY?function(h,g){an.value=g,bY(h,"__bindData__",an),an.value=null
}:bL,bQ=bX||function(g){return g&&"object"==typeof g&&"number"==typeof g.length&&bq.call(g)==aB||!1
},bz=function(J){var h,g=J,G=[];
if(!g){return G
}if(!ae[typeof J]){return G
}for(h in g){df.call(g,h)&&G.push(h)
}return G
},c2=cY?function(g){return dB(g)?cY(g):[]
}:bz,bS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bi=p(bS),b1=s("("+c2(bi).join("|")+")","g"),a4=s("["+c2(bS).join("")+"]","g"),cE=function(J,g,cn){var bn,ce=J,G=ce;
if(!ce){return G
}var bt=arguments,X=0,Y="number"==typeof cn?2:bt.length;
if(Y>3&&"function"==typeof bt[Y-2]){var Q=cO(bt[--Y-1],bt[Y--],2)
}else{Y>2&&"function"==typeof bt[Y-1]&&(Q=bt[--Y])
}for(;
++X<Y;
){if(ce=bt[X],ce&&ae[typeof ce]){for(var br=-1,h=ae[typeof ce]&&c2(ce),cr=h?h.length:0;
++br<cr;
){bn=h[br],G[bn]=Q?Q(G[bn],ce[bn]):ce[bn]
}}}return G
},dc=function(J,g,cn){var bn,ce=J,G=ce;
if(!ce){return G
}for(var bt=arguments,X=0,Y="number"==typeof cn?2:bt.length;
++X<Y;
){if(ce=bt[X],ce&&ae[typeof ce]){for(var Q=-1,br=ae[typeof ce]&&c2(ce),h=br?br.length:0;
++Q<h;
){bn=br[Q],"undefined"==typeof G[bn]&&(G[bn]=ce[bn])
}}}return G
},W=function(X,G,h){var J,g=X,Q=g;
if(!g){return Q
}if(!ae[typeof g]){return Q
}G=G&&"undefined"==typeof h?G:cO(G,h,3);
for(J in g){if(G(g[J],J,X)===!1){return Q
}}return Q
},bN=function(G,g,br){var X,bn=G,h=bn;
if(!bn){return h
}if(!ae[typeof bn]){return h
}g=g&&"undefined"==typeof br?g:cO(g,br,3);
for(var Y=-1,J=ae[typeof bn]&&c2(bn),Q=J?J.length:0;
++Y<Q;
){if(X=J[Y],g(bn[X],X,G)===!1){return h
}}return h
},dA=M?function(G){if(!G||bq.call(G)!=aC){return !1
}var h=G.valueOf,g=cp(h)&&(g=M(h))&&M(g);
return g?G==g||M(G)==g:cg(G)
}:cg,cw=cA(function(G,h,g){df.call(G,g)?G[g]++:G[g]=1
}),cj=cA(function(G,h,g){(df.call(G,g)?G[g]:G[g]=[]).push(h)
}),bB=cA(function(G,h,g){G[g]=h
}),L=cT,bf=dd,bw=cp(bw=dh.now)&&bw||function(){return(new dh).getTime()
},dl=8==dm(aY+"08")?dm:function(h,g){return dm(o(h)?h.replace(ai,""):h,g||0)
};
return cz.after=dg,cz.assign=cE,cz.at=bO,cz.bind=cP,cz.bindAll=l,cz.bindKey=bk,cz.chain=dq,cz.compact=bv,cz.compose=ci,cz.constant=cs,cz.countBy=cw,cz.create=dk,cz.createCallback=E,cz.curry=b0,cz.debounce=c1,cz.defaults=dc,cz.defer=bZ,cz.delay=T,cz.difference=H,cz.filter=dd,cz.flatten=db,cz.forEach=b6,cz.forEachRight=bT,cz.forIn=W,cz.forInRight=j,cz.forOwn=bN,cz.forOwnRight=b9,cz.functions=w,cz.groupBy=cj,cz.indexBy=bB,cz.initial=i,cz.intersection=b8,cz.invert=p,cz.invoke=bC,cz.keys=c2,cz.map=cT,cz.mapValues=ck,cz.max=bM,cz.memoize=cb,cz.merge=b3,cz.min=be,cz.omit=c4,cz.once=c0,cz.pairs=b2,cz.partial=bK,cz.partialRight=cD,cz.pick=Z,cz.pluck=L,cz.property=bd,cz.pull=n,cz.range=dz,cz.reject=cv,cz.remove=a6,cz.rest=bc,cz.shuffle=P,cz.sortBy=cm,cz.tap=cl,cz.throttle=dp,cz.times=c5,cz.toArray=cd,cz.transform=cf,cz.union=r,cz.uniq=y,cz.values=c3,cz.where=bf,cz.without=cQ,cz.wrap=c9,cz.xor=dx,cz.zip=bE,cz.zipObject=N,cz.collect=cT,cz.drop=bc,cz.each=b6,cz.eachRight=bT,cz.extend=cE,cz.methods=w,cz.object=N,cz.select=dd,cz.tail=bc,cz.unique=y,cz.unzip=bE,bA(cz),cz.clone=ba,cz.cloneDeep=bp,cz.contains=cG,cz.escape=b5,cz.every=du,cz.find=cy,cz.findIndex=a8,cz.findKey=de,cz.findLast=I,cz.findLastIndex=bm,cz.findLastKey=cL,cz.has=C,cz.identity=bR,cz.indexOf=cK,cz.isArguments=K,cz.isArray=bQ,cz.isBoolean=dC,cz.isDate=a9,cz.isElement=bg,cz.isEmpty=bx,cz.isEqual=v,cz.isFinite=B,cz.isFunction=cU,cz.isNaN=bH,cz.isNull=R,cz.isNumber=dj,cz.isObject=dB,cz.isPlainObject=dA,cz.isRegExp=cS,cz.isString=o,cz.isUndefined=bo,cz.lastIndexOf=A,cz.mixin=bA,cz.noConflict=cR,cz.noop=bL,cz.now=bw,cz.parseInt=dl,cz.random=bU,cz.reduce=bV,cz.reduceRight=V,cz.result=U,cz.runInContext=aJ,cz.size=bG,cz.some=ds,cz.sortedIndex=bs,cz.template=cu,cz.unescape=O,cz.uniqueId=bF,cz.all=du,cz.any=ds,cz.detect=cy,cz.findWhere=cy,cz.foldl=bV,cz.foldr=V,cz.include=cG,cz.inject=bV,bA(function(){var g={};
return bN(cz,function(G,h){cz.prototype[h]||(g[h]=G)
}),g
}(),!1),cz.first=di,cz.last=u,cz.sample=c6,cz.take=di,cz.head=di,bN(cz,function(G,h){var g="sample"!==h;
cz.prototype[h]||(cz.prototype[h]=function(Q,X){var J=this.__chain__,Y=G(this.__wrapped__,Q,X);
return J||null!=Q&&(!X||g&&"function"==typeof Q)?new cB(Y,J):Y
})
}),cz.VERSION="2.4.2",cz.prototype.chain=cc,cz.prototype.toString=bu,cz.prototype.value=F,cz.prototype.valueOf=F,b6(["join","pop","shift"],function(h){var g=dy[h];
cz.prototype[h]=function(){var J=this.__chain__,G=g.apply(this.__wrapped__,arguments);
return J?new cB(G,J):G
}
}),b6(["push","reverse","sort","unshift"],function(h){var g=dy[h];
cz.prototype[h]=function(){return g.apply(this.__wrapped__,arguments),this
}
}),b6(["concat","slice","splice"],function(h){var g=dy[h];
cz.prototype[h]=function(){return new cB(g.apply(this.__wrapped__,arguments),this.__chain__)
}
}),cz
}var aG,aU=[],aV=[],aD=0,aP=+new Date+"",a0=75,a2=40,aY=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",aF=/\b__p \+= '';/g,aS=/\b(__p \+=) '' \+/g,aR=/(__e\(.*?\)|\b__t\)) \+\n'';/g,aE=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ay=/\w*$/,al=/^\s*function[ \n\r\t]+\w/,am=/<%=([\s\S]+?)%>/g,ai=RegExp("^["+aY+"]*0+(?=.$)"),aw=/($^)/,ar=/\bthis\b/,ah=/['\n\r\t\u2028\u2029\\]/g,aA=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],ax=0,ag="[object Arguments]",aB="[object Array]",av="[object Boolean]",az="[object Date]",ad="[object Function]",aL="[object Number]",aC="[object Object]",ao="[object RegExp]",ak="[object String]",ap={};
ap[ad]=!1,ap[ag]=ap[aB]=ap[av]=ap[az]=ap[aL]=ap[aC]=ap[ao]=ap[ak]=!0;
var af={leading:!1,maxWait:0,trailing:!1},an={configurable:!1,enumerable:!1,value:null,writable:!1},ae={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},au={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},at=ae[typeof window]&&window||this,aq=ae[typeof exports]&&exports&&!exports.nodeType&&exports,aj=ae[typeof module]&&module&&!module.nodeType&&module,ac=aj&&aj.exports===aq&&aq,ab=ae[typeof global]&&global;
!ab||ab.global!==ab&&ab.window!==ab||(at=ab);
var aa=aJ();
"function"==typeof e&&"object"==typeof e.amd&&e.amd?(at._=aa,e("lodash",[],function(){return aa
})):aq&&aj?ac?(aj.exports=aa)._=aa:aq._=aa:at._=aa
}).call(this);
window.Modernizr=(function(F,h,l){var M="2.8.3",B={},D=true,P=h.documentElement,f="modernizr",L=h.createElement(f),I=L.style,O=h.createElement("input"),g={}.toString,o=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",J=m.split(" "),N=m.toLowerCase().split(" "),q={},u={},k={},j=[],p=j.slice,x,r=function(Y,aa,S,Z){var R,X,U,V,Q=h.createElement("div"),W=h.body,T=W||h.createElement("body");
if(parseInt(S,10)){while(S--){U=h.createElement("div");
U.id=Z?Z[S]:f+(S+1);
Q.appendChild(U)
}}R=["&#173;",'<style id="s',f,'">',Y,"</style>"].join("");
Q.id=f;
(W?Q:T).innerHTML+=R;
T.appendChild(Q);
if(!W){T.style.background="";
T.style.overflow="hidden";
V=P.style.overflow;
P.style.overflow="hidden";
P.appendChild(T)
}X=aa(Q,Y);
if(!W){T.parentNode.removeChild(T);
P.style.overflow=V
}else{Q.parentNode.removeChild(Q)
}return !!X
},K=function(S){var R=F.matchMedia||F.msMatchMedia;
if(R){return R(S)&&R(S).matches||false
}var Q;
r("@media "+S+" { #"+f+" { position: absolute; } }",function(T){Q=(F.getComputedStyle?getComputedStyle(T,null):T.currentStyle)["position"]=="absolute"
});
return Q
},n=({}).hasOwnProperty,C;
if(!w(n,"undefined")&&!w(n.call,"undefined")){C=function(Q,R){return n.call(Q,R)
}
}else{C=function(Q,R){return((R in Q)&&w(Q.constructor.prototype[R],"undefined"))
}
}if(!Function.prototype.bind){Function.prototype.bind=function i(S){var T=this;
if(typeof T!="function"){throw new TypeError()
}var Q=p.call(arguments,1),R=function(){if(this instanceof R){var W=function(){};
W.prototype=T.prototype;
var V=new W();
var U=T.apply(V,Q.concat(p.call(arguments)));
if(Object(U)===U){return U
}return V
}else{return T.apply(S,Q.concat(p.call(arguments)))
}};
return R
}
}function H(Q){I.cssText=Q
}function z(R,Q){return H(o.join(R+";")+(Q||""))
}function w(R,Q){return typeof R===Q
}function y(R,Q){return !!~(""+R).indexOf(Q)
}function E(S,Q){for(var R in S){var T=S[R];
if(!y(T,"-")&&I[T]!==l){return Q=="pfx"?T:true
}}return false
}function v(R,U,T){for(var Q in R){var S=U[R[Q]];
if(S!==l){if(T===false){return R[Q]
}if(w(S,"function")){return S.bind(T||U)
}return S
}}return false
}function s(U,Q,T){var R=U.charAt(0).toUpperCase()+U.slice(1),S=(U+" "+J.join(R+" ")+R).split(" ");
if(w(Q,"string")||w(Q,"undefined")){return E(S,Q)
}else{S=(U+" "+(N).join(R+" ")+R).split(" ");
return v(S,Q,T)
}}q.flexbox=function(){return s("flexWrap")
};
q.canvas=function(){var Q=h.createElement("canvas");
return !!(Q.getContext&&Q.getContext("2d"))
};
q.touch=function(){var Q;
if(("ontouchstart" in F)||F.DocumentTouch&&h instanceof DocumentTouch){Q=true
}else{r(["@media (",o.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(R){Q=R.offsetTop===9
})
}return Q
};
q.geolocation=function(){return"geolocation" in navigator
};
q.cssanimations=function(){return s("animationName")
};
q.csstransforms3d=function(){var Q=!!s("perspective");
if(Q&&"webkitPerspective" in P.style){r("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(R,S){Q=R.offsetLeft===9&&R.offsetHeight===3
})
}return Q
};
function G(){B.input=(function(S){for(var R=0,Q=S.length;
R<Q;
R++){k[S[R]]=!!(S[R] in O)
}if(k.list){k.list=!!(h.createElement("datalist")&&F.HTMLDataListElement)
}return k
})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))
}for(var A in q){if(C(q,A)){x=A.toLowerCase();
B[x]=q[A]();
j.push((B[x]?"":"no-")+x)
}}B.input||G();
B.addTest=function(R,S){if(typeof R=="object"){for(var Q in R){if(C(R,Q)){B.addTest(Q,R[Q])
}}}else{R=R.toLowerCase();
if(B[R]!==l){return B
}S=typeof S=="function"?S():S;
if(typeof D!=="undefined"&&D){P.className+=" "+(S?"":"no-")+R
}B[R]=S
}return B
};
H("");
L=O=null;
B._version=M;
B._prefixes=o;
B._domPrefixes=N;
B._cssomPrefixes=J;
B.mq=K;
B.testProp=function(Q){return E([Q])
};
B.testAllProps=s;
B.testStyles=r;
P.className=P.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(D?" js "+j.join(" "):"");
return B
})(this,this.document);
(function(ad,ac,ab){function aa(f){return"[object Function]"==P.call(f)
}function Z(f){return"string"==typeof f
}function Y(){}function X(f){return !f||"loaded"==f||"complete"==f||"uninitialized"==f
}function W(){var f=O.shift();
M=1,f?f.t?R(function(){("c"==f.t?L.injectCss:L.injectJs)(f.s,0,f.a,f.x,f.e,1)
},0):(f(),W()):M=0
}function V(y,x,w,v,s,q,p){function n(f){if(!h&&X(m.readyState)&&(z.r=h=1,!M&&W(),m.onload=m.onreadystatechange=null,f)){"img"!=y&&R(function(){I.removeChild(m)
},50);
for(var i in D[x]){D[x].hasOwnProperty(i)&&D[x][i].onload()
}}}var p=p||L.errorTimeout,m=ac.createElement(y),h=0,g=0,z={t:w,s:x,e:s,a:q,x:p};
1===D[x]&&(g=1,D[x]=[]),"object"==y?m.data=x:(m.src=x,m.type=y),m.width=m.height="0",m.onerror=m.onload=m.onreadystatechange=function(){n.call(this,g)
},O.splice(v,0,z),"img"!=y&&(g||2===D[x]?(I.insertBefore(m,J?null:Q),R(n,p)):D[x].push(m))
}function U(h,g,k,j,i){return M=0,g=g||"j",Z(h)?V("c"==g?G:H,h,g,this.i++,k,j,i):(O.splice(this.i++,0,h),1==O.length&&W()),this
}function T(){var f=L;
return f.loader={load:U,i:0},f
}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(f){return"[object Array]"==P.call(f)
},E=[],D={},C={timeout:function(g,f){return f.length&&(g.timeout=f[0]),g
}},N,L;
L=function(m){function f(i){var i=i.split("!"),h=E.length,u=i.pop(),s=i.length,u={url:u,origUrl:u,prefixes:i},r,l,j;
for(l=0;
l<s;
l++){j=i[l].split("="),(r=C[j.shift()])&&(u=r(u,j))
}for(l=0;
l<h;
l++){u=E[l](u)
}return u
}function q(l,x,w,v,u){var s=f(l),r=s.autoCallback;
s.url.split(".").pop().split("?").shift(),s.bypass||(x&&(x=aa(x)?x:x[l]||x[v]||x[l.split("/").pop().split("?")[0]]),s.instead?s.instead(l,x,w,v,u):(D[s.url]?s.noexec=!0:D[s.url]=1,w.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":ab,s.noexec,s.attrs,s.timeout),(aa(x)||aa(r))&&w.load(function(){T(),x&&x(s.origUrl,u,v),r&&r(s.origUrl,u,v),D[s.url]=2
})))
}function p(A,z){function y(h,i){if(h){if(Z(h)){i||(v=function(){var j=[].slice.call(arguments);
u.apply(this,j),s()
}),q(h,v,z,0,x)
}else{if(Object(h)===h){for(g in r=function(){var j=0,l;
for(l in h){h.hasOwnProperty(l)&&j++
}return j
}(),h){h.hasOwnProperty(g)&&(!i&&!--r&&(aa(v)?v=function(){var j=[].slice.call(arguments);
u.apply(this,j),s()
}:v[g]=function(j){return function(){var l=[].slice.call(arguments);
j&&j.apply(this,l),s()
}
}(u[g])),q(h[g],v,z,g,x))
}}}}else{!i&&s()
}}var x=!!A.test,w=A.load||A.both,v=A.callback||Y,u=v,s=A.complete||Y,r,g;
y(x?A.yep:A.nope,!!w),w&&y(w)
}var o,n,k=this.yepnope.loader;
if(Z(m)){q(m,0,k,0)
}else{if(F(m)){for(o=0;
o<m.length;
o++){n=m[o],Z(n)?q(n,0,k,0):F(n)?L(n):Object(n)===n&&p(n,k)
}}else{Object(m)===m&&p(m,k)
}}},L.addPrefix=function(g,f){C[g]=f
},L.addFilter=function(f){E.push(f)
},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"
},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(s,r,q,p,n,m){var h=ac.createElement("script"),g,f,p=p||L.errorTimeout;
h.src=s;
for(f in q){h.setAttribute(f,q[f])
}r=m?W:r||Y,h.onreadystatechange=h.onload=function(){!g&&X(h.readyState)&&(g=1,r(),h.onload=h.onreadystatechange=null)
},R(function(){g||(g=1,r(1))
},p),n?h.onload():Q.parentNode.insertBefore(h,Q)
},ad.yepnope.injectCss=function(f,o,n,m,l,k){var m=ac.createElement("link"),h,o=k?W:o||Y;
m.href=f,m.rel="stylesheet",m.type="text/css";
for(h in n){m.setAttribute(h,n[h])
}l||(Q.parentNode.insertBefore(m,Q),R(o,0))
}
})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))
};
e("modernizr",(function(f){return function(){var g,h;
return g||f.Modernizr
}
}(this)));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia=window.matchMedia||(function(l,k){var n,i=l.documentElement,h=i.firstElementChild||i.firstChild,m=l.createElement("body"),j=l.createElement("div");
j.id="mq-test-1";
j.style.cssText="position:absolute;top:-100em";
m.appendChild(j);
return function(f){j.innerHTML='&shy;<style media="'+f+'"> #mq-test-1 { width: 42px; }</style>';
i.insertBefore(m,h);
n=j.offsetWidth==42;
i.removeChild(m);
return{matches:n,media:f}
}
})(document);
e("matchMedia",function(){});
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
(function(f){f.picturefill=function(){var g=f.document.getElementsByTagName("span");
for(var m=0,s=g.length;
m<s;
m++){if(g[m].getAttribute("data-picture")!==null){var h=g[m].getElementsByTagName("span"),o=[];
for(var l=0,n=h.length;
l<n;
l++){var k=h[l].getAttribute("data-media");
if(!k||(f.matchMedia&&f.matchMedia(k).matches)){o.push(h[l])
}}var u=g[m].getElementsByTagName("img")[0];
if(o.length){var r=o.pop();
if(!u||u.parentNode.nodeName==="NOSCRIPT"){u=f.document.createElement("img");
u.alt=g[m].getAttribute("data-alt")
}else{if(r===u.parentNode){continue
}}u.src=r.getAttribute("data-src");
var q=r.getAttribute("data-width");
var p=r.getAttribute("data-height");
if(q){u.style.width=q+"px"
}else{u.style.width="auto"
}if(p){u.style.height=p+"px"
}else{u.style.height="auto"
}if(!q&&!p){u.removeAttribute("style")
}r.appendChild(u)
}else{if(u){u.parentNode.removeChild(u)
}}}}};
if(f.addEventListener){f.addEventListener("resize",f.picturefill,false);
f.addEventListener("DOMContentLoaded",function(){f.picturefill();
f.removeEventListener("load",f.picturefill,false)
},false);
f.addEventListener("load",f.picturefill,false)
}else{if(f.attachEvent){f.attachEvent("onload",f.picturefill)
}}}(this));
e("picturefill",function(){});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(f){if(typeof e==="function"&&e.amd){e("jquery.cookie",["jquery"],f)
}else{if(typeof exports==="object"){f(a("jquery"))
}else{f(jQuery)
}}}(function(k){var f=/\+/g;
function i(n){return g.raw?n:encodeURIComponent(n)
}function l(n){return g.raw?n:decodeURIComponent(n)
}function m(n){return i(g.json?JSON.stringify(n):String(n))
}function h(n){if(n.indexOf('"')===0){n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{n=decodeURIComponent(n.replace(f," "));
return g.json?JSON.parse(n):n
}catch(o){}}function j(o,n){var p=g.raw?o:h(o);
return k.isFunction(n)?n(p):p
}var g=k.cookie=function(u,s,y){if(s!==undefined&&!k.isFunction(s)){y=k.extend({},g.defaults,y);
if(typeof y.expires==="number"){var v=y.expires,x=y.expires=new Date();
x.setTime(+x+v*86400000)
}return(document.cookie=[i(u),"=",m(s),y.expires?"; expires="+y.expires.toUTCString():"",y.path?"; path="+y.path:"",y.domain?"; domain="+y.domain:"",y.secure?"; secure":""].join(""))
}var z=u?undefined:{};
var w=document.cookie?document.cookie.split("; "):[];
for(var r=0,p=w.length;
r<p;
r++){var q=w[r].split("=");
var n=l(q.shift());
var o=q.join("=");
if(u&&u===n){z=j(o,s);
break
}if(!u&&(o=j(o))!==undefined){z[n]=o
}}return z
};
g.defaults={};
k.removeCookie=function(o,n){if(k.cookie(o)===undefined){return false
}k.cookie(o,"",k.extend({},n,{expires:-1}));
return !k.cookie(o)
}
}));
/*! jQuery UI - v1.10.4 - 2014-10-27
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.autocomplete.js, jquery.ui.datepicker.js, jquery.ui.menu.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(k,h){function g(q,p){var m,v,s,u=q.nodeName.toLowerCase();
return"area"===u?(m=q.parentNode,v=m.name,q.href&&v&&"map"===m.nodeName.toLowerCase()?(s=k("img[usemap=#"+v+"]")[0],!!s&&j(s)):!1):(/input|select|textarea|button|object/.test(u)?!q.disabled:"a"===u?q.href||p:p)&&j(q)
}function j(i){return k.expr.filters.visible(i)&&!k(i).parents().addBack().filter(function(){return"hidden"===k.css(this,"visibility")
}).length
}var f=0,l=/^ui-id-\d+$/;
k.ui=k.ui||{},k.extend(k.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),k.fn.extend({focus:function(i){return function(m,n){return"number"==typeof m?this.each(function(){var o=this;
setTimeout(function(){k(o).focus(),n&&n.call(o)
},m)
}):i.apply(this,arguments)
}
}(k.fn.focus),scrollParent:function(){var i;
return i=k.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(k.css(this,"position"))&&/(auto|scroll)/.test(k.css(this,"overflow")+k.css(this,"overflow-y")+k.css(this,"overflow-x"))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(k.css(this,"overflow")+k.css(this,"overflow-y")+k.css(this,"overflow-x"))
}).eq(0),/fixed/.test(this.css("position"))||!i.length?k(document):i
},zIndex:function(o){if(o!==h){return this.css("zIndex",o)
}if(this.length){for(var p,m,q=k(this[0]);
q.length&&q[0]!==document;
){if(p=q.css("position"),("absolute"===p||"relative"===p||"fixed"===p)&&(m=parseInt(q.css("zIndex"),10),!isNaN(m)&&0!==m)){return m
}q=q.parent()
}}return 0
},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++f)
})
},removeUniqueId:function(){return this.each(function(){l.test(this.id)&&k(this).removeAttr("id")
})
}}),k.extend(k.expr[":"],{data:k.expr.createPseudo?k.expr.createPseudo(function(i){return function(m){return !!k.data(m,i)
}
}):function(n,m,o){return !!k.data(n,o[3])
},focusable:function(i){return g(i,!isNaN(k.attr(i,"tabindex")))
},tabbable:function(m){var n=k.attr(m,"tabindex"),i=isNaN(n);
return(i||n>=0)&&g(m,!i)
}}),k("<a>").outerWidth(1).jquery||k.each(["Width","Height"],function(p,q){function m(r,o,x,n){return k.each(w,function(){o-=parseFloat(k.css(r,"padding"+this))||0,x&&(o-=parseFloat(k.css(r,"border"+this+"Width"))||0),n&&(o-=parseFloat(k.css(r,"margin"+this))||0)
}),o
}var w="Width"===q?["Left","Right"]:["Top","Bottom"],u=q.toLowerCase(),v={innerWidth:k.fn.innerWidth,innerHeight:k.fn.innerHeight,outerWidth:k.fn.outerWidth,outerHeight:k.fn.outerHeight};
k.fn["inner"+q]=function(n){return n===h?v["inner"+q].call(this):this.each(function(){k(this).css(u,m(this,n)+"px")
})
},k.fn["outer"+q]=function(o,n){return"number"!=typeof o?v["outer"+q].call(this,o):this.each(function(){k(this).css(u,m(this,o,!0,n)+"px")
})
}
}),k.fn.addBack||(k.fn.addBack=function(i){return this.add(null==i?this.prevObject:this.prevObject.filter(i))
}),k("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(k.fn.removeData=function(i){return function(m){return arguments.length?i.call(this,k.camelCase(m)):i.call(this)
}
}(k.fn.removeData)),k.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),k.support.selectstart="onselectstart" in document.createElement("div"),k.fn.extend({disableSelection:function(){return this.bind((k.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(i){i.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),k.extend(k.ui,{plugin:{add:function(p,o,q){var m,r=k.ui[p].prototype;
for(m in q){r.plugins[m]=r.plugins[m]||[],r.plugins[m].push([o,q[m]])
}},call:function(q,o,n){var p,m=q.plugins[o];
if(m&&q.element[0].parentNode&&11!==q.element[0].parentNode.nodeType){for(p=0;
m.length>p;
p++){q.options[m[p][0]]&&m[p][1].apply(q.element,n)
}}}},hasScroll:function(o,n){if("hidden"===k(o).css("overflow")){return !1
}var p=n&&"left"===n?"scrollLeft":"scrollTop",m=!1;
return o[p]>0?!0:(o[p]=1,m=o[p]>0,o[p]=0,m)
}})
})(jQuery);
(function(k,h){var g=0,j=Array.prototype.slice,f=k.cleanData;
k.cleanData=function(m){for(var l,o=0;
null!=(l=m[o]);
o++){try{k(l).triggerHandler("remove")
}catch(p){}}f(m)
},k.widget=function(w,A,y){var q,m,p,x,v={},z=w.split(".")[0];
w=w.split(".")[1],q=z+"-"+w,y||(y=A,A=k.Widget),k.expr[":"][q.toLowerCase()]=function(i){return !!k.data(i,q)
},k[z]=k[z]||{},m=k[z][w],p=k[z][w]=function(n,l){return this._createWidget?(arguments.length&&this._createWidget(n,l),h):new p(n,l)
},k.extend(p,m,{version:y.version,_proto:k.extend({},y),_childConstructors:[]}),x=new A,x.options=k.widget.extend({},x.options),k.each(y,function(n,l){return k.isFunction(l)?(v[n]=function(){var o=function(){return A.prototype[n].apply(this,arguments)
},i=function(r){return A.prototype[n].apply(this,r)
};
return function(){var r,u=this._super,B=this._superApply;
return this._super=o,this._superApply=i,r=l.apply(this,arguments),this._super=u,this._superApply=B,r
}
}(),h):(v[n]=l,h)
}),p.prototype=k.widget.extend(x,{widgetEventPrefix:m?x.widgetEventPrefix||w:w},v,{constructor:p,namespace:z,widgetName:w,widgetFullName:q}),m?(k.each(m._childConstructors,function(n,l){var o=l.prototype;
k.widget(o.namespace+"."+o.widgetName,p,l._proto)
}),delete m._childConstructors):A._childConstructors.push(p),k.widget.bridge(w,p)
},k.widget.extend=function(m){for(var l,u,q=j.call(arguments,1),s=0,p=q.length;
p>s;
s++){for(l in q[s]){u=q[s][l],q[s].hasOwnProperty(l)&&u!==h&&(m[l]=k.isPlainObject(u)?k.isPlainObject(m[l])?k.widget.extend({},m[l],u):k.widget.extend({},u):u)
}}return m
},k.widget.bridge=function(m,l){var o=l.prototype.widgetFullName||m;
k.fn[m]=function(p){var q="string"==typeof p,n=j.call(arguments,1),i=this;
return p=!q&&n.length?k.widget.extend.apply(null,[p].concat(n)):p,q?this.each(function(){var u,r=k.data(this,o);
return r?k.isFunction(r[p])&&"_"!==p.charAt(0)?(u=r[p].apply(r,n),u!==r&&u!==h?(i=u&&u.jquery?i.pushStack(u.get()):u,!1):h):k.error("no such method '"+p+"' for "+m+" widget instance"):k.error("cannot call methods on "+m+" prior to initialization; attempted to call method '"+p+"'")
}):this.each(function(){var r=k.data(this,o);
r?r.option(p||{})._init():k.data(this,o,new l(p,this))
}),i
}
},k.Widget=function(){},k.Widget._childConstructors=[],k.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,l){l=k(l||this.defaultElement||this)[0],this.element=k(l),this.uuid=g++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=k.widget.extend({},this.options,this._getCreateOptions(),i),this.bindings=k(),this.hoverable=k(),this.focusable=k(),l!==this&&(k.data(l,this.widgetFullName,this),this._on(!0,this.element,{remove:function(m){m.target===l&&this.destroy()
}}),this.document=k(l.style?l.ownerDocument:l.document||l),this.window=k(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:k.noop,_getCreateEventData:k.noop,_create:k.noop,_init:k.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(k.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:k.noop,widget:function(){return this.element
},option:function(m,p){var l,v,q,u=m;
if(0===arguments.length){return k.widget.extend({},this.options)
}if("string"==typeof m){if(u={},l=m.split("."),m=l.shift(),l.length){for(v=u[m]=k.widget.extend({},this.options[m]),q=0;
l.length-1>q;
q++){v[l[q]]=v[l[q]]||{},v=v[l[q]]
}if(m=l.pop(),1===arguments.length){return v[m]===h?null:v[m]
}v[m]=p
}else{if(1===arguments.length){return this.options[m]===h?null:this.options[m]
}u[m]=p
}}return this._setOptions(u),this
},_setOptions:function(l){var i;
for(i in l){this._setOption(i,l[i])
}return this
},_setOption:function(l,i){return this.options[l]=i,"disabled"===l&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!i).attr("aria-disabled",i),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_on:function(m,o,l){var q,p=this;
"boolean"!=typeof m&&(l=o,o=m,m=!1),l?(o=q=k(o),this.bindings=this.bindings.add(o)):(l=o,o=this.element,q=this.widget()),k.each(l,function(n,w){function s(){return m||p.options.disabled!==!0&&!k(this).hasClass("ui-state-disabled")?("string"==typeof w?p[w]:w).apply(p,arguments):h
}"string"!=typeof w&&(s.guid=w.guid=w.guid||s.guid||k.guid++);
var i=n.match(/^(\w+)\s*(.*)$/),r=i[1]+p.eventNamespace,v=i[2];
v?q.delegate(v,r,s):o.bind(r,s)
})
},_off:function(l,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,l.unbind(i).undelegate(i)
},_delay:function(o,m){function l(){return("string"==typeof o?n[o]:o).apply(n,arguments)
}var n=this;
return setTimeout(l,m||0)
},_hoverable:function(i){this.hoverable=this.hoverable.add(i),this._on(i,{mouseenter:function(l){k(l.currentTarget).addClass("ui-state-hover")
},mouseleave:function(l){k(l.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(i){this.focusable=this.focusable.add(i),this._on(i,{focusin:function(l){k(l.currentTarget).addClass("ui-state-focus")
},focusout:function(l){k(l.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(o,m,p){var l,u,q=this.options[o];
if(p=p||{},m=k.Event(m),m.type=(o===this.widgetEventPrefix?o:this.widgetEventPrefix+o).toLowerCase(),m.target=this.element[0],u=m.originalEvent){for(l in u){l in m||(m[l]=u[l])
}}return this.element.trigger(m,p),!(k.isFunction(q)&&q.apply(this.element[0],[m].concat(p))===!1||m.isDefaultPrevented())
}},k.each({show:"fadeIn",hide:"fadeOut"},function(m,l){k.Widget.prototype["_"+m]=function(p,i,v){"string"==typeof i&&(i={effect:i});
var q,u=i?i===!0||"number"==typeof i?l:i.effect||l:m;
i=i||{},"number"==typeof i&&(i={duration:i}),q=!k.isEmptyObject(i),i.complete=v,i.delay&&p.delay(i.delay),q&&k.effects&&k.effects.effect[u]?p[m](i):u!==m&&p[u]?p[u](i.duration,i.easing,v):p.queue(function(n){k(this)[m](),v&&v.call(p[0]),n()
})
}
})
})(jQuery);
(function(y,D){function v(l,h,f){return[parseFloat(l[0])*(j.test(l[0])?h/100:1),parseFloat(l[1])*(j.test(l[1])?f/100:1)]
}function E(h,f){return parseInt(y.css(h,f),10)||0
}function B(h){var f=h[0];
return 9===f.nodeType?{width:h.width(),height:h.height(),offset:{top:0,left:0}}:y.isWindow(f)?{width:h.width(),height:h.height(),offset:{top:h.scrollTop(),left:h.scrollLeft()}}:f.preventDefault?{width:0,height:0,offset:{top:f.pageY,left:f.pageX}}:{width:h.outerWidth(),height:h.outerHeight(),offset:h.offset()}
}y.ui=y.ui||{};
var m,g=Math.max,k=Math.abs,w=Math.round,q=/left|center|right/,C=/top|center|bottom/,z=/[\+\-]\d+(\.[\d]+)?%?/,A=/^\w+/,j=/%$/,x=y.fn.position;
y.position={scrollbarWidth:function(){if(m!==D){return m
}var h,l,f=y("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=f.children()[0];
return y("body").append(f),h=n.offsetWidth,f.css("overflow","scroll"),l=n.offsetWidth,h===l&&(l=f[0].clientWidth),f.remove(),m=h-l
},getScrollInfo:function(l){var h=l.isWindow||l.isDocument?"":l.element.css("overflow-x"),o=l.isWindow||l.isDocument?"":l.element.css("overflow-y"),f="scroll"===h||"auto"===h&&l.width<l.element[0].scrollWidth,p="scroll"===o||"auto"===o&&l.height<l.element[0].scrollHeight;
return{width:p?y.position.scrollbarWidth():0,height:f?y.position.scrollbarWidth():0}
},getWithinInfo:function(l){var h=y(l||window),n=y.isWindow(h[0]),f=!!h[0]&&9===h[0].nodeType;
return{element:h,isWindow:n,isDocument:f,offset:h.offset()||{left:0,top:0},scrollLeft:h.scrollLeft(),scrollTop:h.scrollTop(),width:n?h.width():h.outerWidth(),height:n?h.height():h.outerHeight()}
}},y.fn.position=function(I){if(!I||!I.of){return x.apply(this,arguments)
}I=y.extend({},I);
var h,f,i,o,H,r,s=y(I.of),G=y.position.getWithinInfo(I.within),u=y.position.getScrollInfo(G),l=(I.collision||"flip").split(" "),F={};
return r=B(s),s[0].preventDefault&&(I.at="left top"),f=r.width,i=r.height,o=r.offset,H=y.extend({},o),y.each(["my","at"],function(){var J,n,p=(I[this]||"").split(" ");
1===p.length&&(p=q.test(p[0])?p.concat(["center"]):C.test(p[0])?["center"].concat(p):["center","center"]),p[0]=q.test(p[0])?p[0]:"center",p[1]=C.test(p[1])?p[1]:"center",J=z.exec(p[0]),n=z.exec(p[1]),F[this]=[J?J[0]:0,n?n[0]:0],I[this]=[A.exec(p[0])[0],A.exec(p[1])[0]]
}),1===l.length&&(l[1]=l[0]),"right"===I.at[0]?H.left+=f:"center"===I.at[0]&&(H.left+=f/2),"bottom"===I.at[1]?H.top+=i:"center"===I.at[1]&&(H.top+=i/2),h=v(F.at,f,i),H.left+=h[0],H.top+=h[1],this.each(function(){var R,p,U=y(this),O=U.outerWidth(),P=U.outerHeight(),L=E(this,"marginLeft"),Q=E(this,"marginTop"),n=O+L+E(this,"marginRight")+u.width,J=P+Q+E(this,"marginBottom")+u.height,K=y.extend({},H),N=v(F.my,U.outerWidth(),U.outerHeight());
"right"===I.my[0]?K.left-=O:"center"===I.my[0]&&(K.left-=O/2),"bottom"===I.my[1]?K.top-=P:"center"===I.my[1]&&(K.top-=P/2),K.left+=N[0],K.top+=N[1],y.support.offsetFractions||(K.left=w(K.left),K.top=w(K.top)),R={marginLeft:L,marginTop:Q},y.each(["left","top"],function(M,S){y.ui.position[l[M]]&&y.ui.position[l[M]][S](K,{targetWidth:f,targetHeight:i,elemWidth:O,elemHeight:P,collisionPosition:R,collisionWidth:n,collisionHeight:J,offset:[h[0]+N[0],h[1]+N[1]],my:I.my,at:I.at,within:G,elem:U})
}),I.using&&(p=function(W){var S=o.left-K.left,V=S+f-O,M=o.top-K.top,X=M+i-P,T={target:{element:s,left:o.left,top:o.top,width:f,height:i},element:{element:U,left:K.left,top:K.top,width:O,height:P},horizontal:0>V?"left":S>0?"right":"center",vertical:0>X?"top":M>0?"bottom":"middle"};
O>f&&f>k(S+V)&&(T.horizontal="center"),P>i&&i>k(M+X)&&(T.vertical="middle"),T.important=g(k(S),k(V))>g(k(M),k(X))?"horizontal":"vertical",I.using.call(this,W,T)
}),U.offset(y.extend(K,{using:p}))
})
},y.ui.position={fit:{left:function(G,I){var u,J=I.within,H=J.isWindow?J.scrollLeft:J.offset.left,p=J.width,f=G.left-I.collisionPosition.marginLeft,F=H-f,r=f+I.collisionWidth-p-H;
I.collisionWidth>p?F>0&&0>=r?(u=G.left+F+I.collisionWidth-p-H,G.left+=F-u):G.left=r>0&&0>=F?H:F>r?H+p-I.collisionWidth:H:F>0?G.left+=F:r>0?G.left-=r:G.left=g(G.left-f,G.left)
},top:function(G,I){var u,J=I.within,H=J.isWindow?J.scrollTop:J.offset.top,p=I.within.height,f=G.top-I.collisionPosition.marginTop,F=H-f,r=f+I.collisionHeight-p-H;
I.collisionHeight>p?F>0&&0>=r?(u=G.top+F+I.collisionHeight-p-H,G.top+=F-u):G.top=r>0&&0>=F?H:F>r?H+p-I.collisionHeight:H:F>0?G.top+=F:r>0?G.top-=r:G.top=g(G.top-f,G.top)
}},flip:{left:function(L,Q){var I,R,O=Q.within,G=O.offset.left+O.scrollLeft,o=O.width,J=O.isWindow?O.scrollLeft:O.offset.left,H=L.left-Q.collisionPosition.marginLeft,P=H-J,M=H+Q.collisionWidth-o-J,N="left"===Q.my[0]?-Q.elemWidth:"right"===Q.my[0]?Q.elemWidth:0,F="left"===Q.at[0]?Q.targetWidth:"right"===Q.at[0]?-Q.targetWidth:0,K=-2*Q.offset[0];
0>P?(I=L.left+N+F+K+Q.collisionWidth-o-G,(0>I||k(P)>I)&&(L.left+=N+F+K)):M>0&&(R=L.left-Q.collisionPosition.marginLeft+N+F+K-J,(R>0||M>k(R))&&(L.left+=N+F+K))
},top:function(M,R){var J,S,P=R.within,G=P.offset.top+P.scrollTop,o=P.height,K=P.isWindow?P.scrollTop:P.offset.top,I=M.top-R.collisionPosition.marginTop,Q=I-K,N=I+R.collisionHeight-o-K,O="top"===R.my[1],F=O?-R.elemHeight:"bottom"===R.my[1]?R.elemHeight:0,L="top"===R.at[1]?R.targetHeight:"bottom"===R.at[1]?-R.targetHeight:0,H=-2*R.offset[1];
0>Q?(S=M.top+F+L+H+R.collisionHeight-o-G,M.top+F+L+H>Q&&(0>S||k(Q)>S)&&(M.top+=F+L+H)):N>0&&(J=M.top-R.collisionPosition.marginTop+F+L+H-K,M.top+F+L+H>N&&(J>0||N>k(J))&&(M.top+=F+L+H))
}},flipfit:{left:function(){y.ui.position.flip.left.apply(this,arguments),y.ui.position.fit.left.apply(this,arguments)
},top:function(){y.ui.position.flip.top.apply(this,arguments),y.ui.position.fit.top.apply(this,arguments)
}}},function(){var l,h,p,f,G,u=document.getElementsByTagName("body")[0],F=document.createElement("div");
l=document.createElement(u?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},u&&y.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});
for(G in p){l.style[G]=p[G]
}l.appendChild(F),h=u||document.documentElement,h.insertBefore(l,h.firstChild),F.style.cssText="position: absolute; left: 10.7432222px;",f=y(F).offset().left,y.support.offsetFractions=f>10&&11>f,l.innerHTML="",h.removeChild(l)
}()
})(jQuery);
(function(f){f.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var j,h,k,g=this.element[0].nodeName.toLowerCase(),m="textarea"===g,l="input"===g;
this.isMultiLine=m?!0:l?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[m||l?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){return j=!0,k=!0,h=!0,undefined
}j=!1,k=!1,h=!1;
var o=f.ui.keyCode;
switch(i.keyCode){case o.PAGE_UP:j=!0,this._move("previousPage",i);
break;
case o.PAGE_DOWN:j=!0,this._move("nextPage",i);
break;
case o.UP:j=!0,this._keyEvent("previous",i);
break;
case o.DOWN:j=!0,this._keyEvent("next",i);
break;
case o.ENTER:case o.NUMPAD_ENTER:this.menu.active&&(j=!0,i.preventDefault(),this.menu.select(i));
break;
case o.TAB:this.menu.active&&this.menu.select(i);
break;
case o.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());
break;
default:h=!0,this._searchTimeout(i)
}},keypress:function(n){if(j){return j=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&n.preventDefault(),undefined
}if(!h){var i=f.ui.keyCode;
switch(n.keyCode){case i.PAGE_UP:this._move("previousPage",n);
break;
case i.PAGE_DOWN:this._move("nextPage",n);
break;
case i.UP:this._keyEvent("previous",n);
break;
case i.DOWN:this._keyEvent("next",n)
}}},input:function(i){return k?(k=!1,i.preventDefault(),undefined):(this._searchTimeout(i),undefined)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(i){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(i),this._change(i),undefined)
}}),this._initSource(),this.menu=f("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(o){o.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur
});
var n=this.menu.element[0];
f(o.target).closest(".ui-menu-item").length||this._delay(function(){var i=this;
this.document.one("mousedown",function(p){p.target===i.element[0]||p.target===n||f.contains(n,p.target)||i.close()
})
})
},menufocus:function(o,n){if(this.isNewMenu&&(this.isNewMenu=!1,o.originalEvent&&/^mouse/.test(o.originalEvent.type))){return this.menu.blur(),this.document.one("mousemove",function(){f(o.target).trigger(o.originalEvent)
}),undefined
}var p=n.item.data("ui-autocomplete-item");
!1!==this._trigger("focus",o,{item:p})?o.originalEvent&&/^key/.test(o.originalEvent.type)&&this._value(p.value):this.liveRegion.text(p.value)
},menuselect:function(q,o){var n=o.item.data("ui-autocomplete-item"),p=this.previous;
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=p,this._delay(function(){this.previous=p,this.selectedItem=n
})),!1!==this._trigger("select",q,{item:n})&&this._value(n.value),this.term=this._value(),this.close(q),this.selectedItem=n
}}),this.liveRegion=f("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(h,g){this._super(h,g),"source"===h&&this._initSource(),"appendTo"===h&&this.menu.element.appendTo(this._appendTo()),"disabled"===h&&g&&this.xhr&&this.xhr.abort()
},_appendTo:function(){var g=this.options.appendTo;
return g&&(g=g.jquery||g.nodeType?f(g):this.document.find(g).eq(0)),g||(g=this.element.closest(".ui-front")),g.length||(g=this.document[0].body),g
},_initSource:function(){var h,g,j=this;
f.isArray(this.options.source)?(h=this.options.source,this.source=function(k,l){l(f.ui.autocomplete.filter(h,k.term))
}):"string"==typeof this.options.source?(g=this.options.source,this.source=function(k,i){j.xhr&&j.xhr.abort(),j.xhr=f.ajax({url:g,data:k,dataType:"json",success:function(l){i(l)
},error:function(){i([])
}})
}):this.source=this.options.source
},_searchTimeout:function(g){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,g))
},this.options.delay)
},search:function(h,g){return h=null!=h?h:this._value(),this.term=this._value(),h.length<this.options.minLength?this.close(g):this._trigger("search",g)!==!1?this._search(h):undefined
},_search:function(g){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:g},this._response())
},_response:function(){var g=++this.requestIndex;
return f.proxy(function(h){g===this.requestIndex&&this.__response(h),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")
},this)
},__response:function(g){g&&(g=this._normalize(g)),this._trigger("response",null,{content:g}),!this.options.disabled&&g&&g.length&&!this.cancelSearch?(this._suggest(g),this._trigger("open")):this._close()
},close:function(g){this.cancelSearch=!0,this._close(g)
},_close:function(g){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",g))
},_change:function(g){this.previous!==this._value()&&this._trigger("change",g,{item:this.selectedItem})
},_normalize:function(g){return g.length&&g[0].label&&g[0].value?g:f.map(g,function(h){return"string"==typeof h?{label:h,value:h}:f.extend({label:h.label||h.value,value:h.value||h.label},h)
})
},_suggest:function(h){var g=this.menu.element.empty();
this._renderMenu(g,h),this.isNewMenu=!0,this.menu.refresh(),g.show(),this._resizeMenu(),g.position(f.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var g=this.menu.element;
g.outerWidth(Math.max(g.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(h,g){var j=this;
f.each(g,function(l,k){j._renderItemData(h,k)
})
},_renderItemData:function(h,g){return this._renderItem(h,g).data("ui-autocomplete-item",g)
},_renderItem:function(h,g){return f("<li>").append(f("<a>").text(g.label)).appendTo(h)
},_move:function(h,g){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(h)||this.menu.isLastItem()&&/^next/.test(h)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[h](g),undefined):(this.search(null,g),undefined)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(h,g){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(h,g),g.preventDefault())
}}),f.extend(f.ui.autocomplete,{escapeRegex:function(g){return g.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(h,g){var j=RegExp(f.ui.autocomplete.escapeRegex(g),"i");
return f.grep(h,function(i){return j.test(i.label||i.value||i)
})
}}),f.widget("ui.autocomplete",f.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(g){return g+(g>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(h){var g;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(g=h&&h.length?this.options.messages.results(h.length):this.options.messages.noResults,this.liveRegion.text(g))
}})
})(jQuery);
(function(l,h){function g(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},l.extend(this._defaults,this.regional[""]),this.dpDiv=j(l("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function j(o){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return o.delegate(n,"mouseout",function(){l(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&l(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&l(this).removeClass("ui-datepicker-next-hover")
}).delegate(n,"mouseover",function(){l.datepicker._isDisabledDatepicker(m.inline?o.parent()[0]:m.input[0])||(l(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),l(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&l(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&l(this).addClass("ui-datepicker-next-hover"))
})
}function f(o,n){l.extend(o,n);
for(var p in n){null==n[p]&&(o[p]=n[p])
}return o
}l.extend(l.ui,{datepicker:{version:"1.10.4"}});
var m,k="datepicker";
l.extend(g.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(i){return f(this._defaults,i||{}),this
},_attachDatepicker:function(q,p){var r,o,u;
r=q.nodeName.toLowerCase(),o="div"===r||"span"===r,q.id||(this.uuid+=1,q.id="dp"+this.uuid),u=this._newInst(l(q),o),u.settings=l.extend({},p||{}),"input"===r?this._connectDatepicker(q,u):o&&this._inlineDatepicker(q,u)
},_newInst:function(p,o){var n=p[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:n,input:p,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:o,dpDiv:o?j(l("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(o,n){var p=l(o);
n.append=l([]),n.trigger=l([]),p.hasClass(this.markerClassName)||(this._attachments(p,n),p.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(n),l.data(o,k,n),n.settings.disabled&&this._disableDatepicker(o))
},_attachments:function(u,q){var v,p,y,w=this._get(q,"appendText"),x=this._get(q,"isRTL");
q.append&&q.append.remove(),w&&(q.append=l("<span class='"+this._appendClass+"'>"+w+"</span>"),u[x?"before":"after"](q.append)),u.unbind("focus",this._showDatepicker),q.trigger&&q.trigger.remove(),v=this._get(q,"showOn"),("focus"===v||"both"===v)&&u.focus(this._showDatepicker),("button"===v||"both"===v)&&(p=this._get(q,"buttonText"),y=this._get(q,"buttonImage"),q.trigger=l(this._get(q,"buttonImageOnly")?l("<img/>").addClass(this._triggerClass).attr({src:y,alt:p,title:p}):l("<button type='button'></button>").addClass(this._triggerClass).html(y?l("<img/>").attr({src:y,alt:p,title:p}):p)),u[x?"before":"after"](q.trigger),q.trigger.click(function(){return l.datepicker._datepickerShowing&&l.datepicker._lastInput===u[0]?l.datepicker._hideDatepicker():l.datepicker._datepickerShowing&&l.datepicker._lastInput!==u[0]?(l.datepicker._hideDatepicker(),l.datepicker._showDatepicker(u[0])):l.datepicker._showDatepicker(u[0]),!1
}))
},_autoSize:function(w){if(this._get(w,"autoSize")&&!w.inline){var q,p,u,o,x=new Date(2009,11,20),v=this._get(w,"dateFormat");
v.match(/[DM]/)&&(q=function(i){for(p=0,u=0,o=0;
i.length>o;
o++){i[o].length>p&&(p=i[o].length,u=o)
}return u
},x.setMonth(q(this._get(w,v.match(/MM/)?"monthNames":"monthNamesShort"))),x.setDate(q(this._get(w,v.match(/DD/)?"dayNames":"dayNamesShort"))+20-x.getDay())),w.input.attr("size",this._formatDate(w,x).length)
}},_inlineDatepicker:function(o,n){var p=l(o);
p.hasClass(this.markerClassName)||(p.addClass(this.markerClassName).append(n.dpDiv),l.data(o,k,n),this._setDate(n,this._getDefaultDate(n),!0),this._updateDatepicker(n),this._updateAlternate(n),n.settings.disabled&&this._disableDatepicker(o),n.dpDiv.css("display","block"))
},_dialogDatepicker:function(C,x,D,v,r){var y,w,B,z,A,q=this._dialogInst;
return q||(this.uuid+=1,y="dp"+this.uuid,this._dialogInput=l("<input type='text' id='"+y+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),l("body").append(this._dialogInput),q=this._dialogInst=this._newInst(this._dialogInput,!1),q.settings={},l.data(this._dialogInput[0],k,q)),f(q.settings,v||{}),x=x&&x.constructor===Date?this._formatDate(q,x):x,this._dialogInput.val(x),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(w=document.documentElement.clientWidth,B=document.documentElement.clientHeight,z=document.documentElement.scrollLeft||document.body.scrollLeft,A=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[w/2-100+z,B/2-150+A]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),q.settings.onSelect=D,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),l.blockUI&&l.blockUI(this.dpDiv),l.data(this._dialogInput[0],k,q),this
},_destroyDatepicker:function(p){var o,q=l(p),n=l.data(p,k);
q.hasClass(this.markerClassName)&&(o=p.nodeName.toLowerCase(),l.removeData(p,k),"input"===o?(n.append.remove(),n.trigger.remove(),q.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===o||"span"===o)&&q.removeClass(this.markerClassName).empty())
},_enableDatepicker:function(q){var p,r,o=l(q),u=l.data(q,k);
o.hasClass(this.markerClassName)&&(p=q.nodeName.toLowerCase(),"input"===p?(q.disabled=!1,u.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===p||"span"===p)&&(r=o.children("."+this._inlineClass),r.children().removeClass("ui-state-disabled"),r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=l.map(this._disabledInputs,function(i){return i===q?null:i
}))
},_disableDatepicker:function(q){var p,r,o=l(q),u=l.data(q,k);
o.hasClass(this.markerClassName)&&(p=q.nodeName.toLowerCase(),"input"===p?(q.disabled=!0,u.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===p||"span"===p)&&(r=o.children("."+this._inlineClass),r.children().addClass("ui-state-disabled"),r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=l.map(this._disabledInputs,function(i){return i===q?null:i
}),this._disabledInputs[this._disabledInputs.length]=q)
},_isDisabledDatepicker:function(n){if(!n){return !1
}for(var i=0;
this._disabledInputs.length>i;
i++){if(this._disabledInputs[i]===n){return !0
}}return !1
},_getInst:function(o){try{return l.data(o,k)
}catch(n){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(v,x,A){var y,z,w,p,q=this._getInst(v);
return 2===arguments.length&&"string"==typeof x?"defaults"===x?l.extend({},l.datepicker._defaults):q?"all"===x?l.extend({},q.settings):this._get(q,x):null:(y=x||{},"string"==typeof x&&(y={},y[x]=A),q&&(this._curInst===q&&this._hideDatepicker(),z=this._getDateDatepicker(v,!0),w=this._getMinMaxDate(q,"min"),p=this._getMinMaxDate(q,"max"),f(q.settings,y),null!==w&&y.dateFormat!==h&&y.minDate===h&&(q.settings.minDate=this._formatDate(q,w)),null!==p&&y.dateFormat!==h&&y.maxDate===h&&(q.settings.maxDate=this._formatDate(q,p)),"disabled" in y&&(y.disabled?this._disableDatepicker(v):this._enableDatepicker(v)),this._attachments(l(v),q),this._autoSize(q),this._setDate(q,z),this._updateAlternate(q),this._updateDatepicker(q)),h)
},_changeDatepicker:function(p,o,n){this._optionDatepicker(p,o,n)
},_refreshDatepicker:function(n){var i=this._getInst(n);
i&&this._updateDatepicker(i)
},_setDateDatepicker:function(p,o){var n=this._getInst(p);
n&&(this._setDate(n,o),this._updateDatepicker(n),this._updateAlternate(n))
},_getDateDatepicker:function(p,o){var n=this._getInst(p);
return n&&!n.inline&&this._setDateFromField(n,o),n?this._getDate(n):null
},_doKeyDown:function(u){var q,v,p,y=l.datepicker._getInst(u.target),w=!0,x=y.dpDiv.is(".ui-datepicker-rtl");
if(y._keyEvent=!0,l.datepicker._datepickerShowing){switch(u.keyCode){case 9:l.datepicker._hideDatepicker(),w=!1;
break;
case 13:return p=l("td."+l.datepicker._dayOverClass+":not(."+l.datepicker._currentClass+")",y.dpDiv),p[0]&&l.datepicker._selectDay(u.target,y.selectedMonth,y.selectedYear,p[0]),q=l.datepicker._get(y,"onSelect"),q?(v=l.datepicker._formatDate(y),q.apply(y.input?y.input[0]:null,[v,y])):l.datepicker._hideDatepicker(),!1;
case 27:l.datepicker._hideDatepicker();
break;
case 33:l.datepicker._adjustDate(u.target,u.ctrlKey?-l.datepicker._get(y,"stepBigMonths"):-l.datepicker._get(y,"stepMonths"),"M");
break;
case 34:l.datepicker._adjustDate(u.target,u.ctrlKey?+l.datepicker._get(y,"stepBigMonths"):+l.datepicker._get(y,"stepMonths"),"M");
break;
case 35:(u.ctrlKey||u.metaKey)&&l.datepicker._clearDate(u.target),w=u.ctrlKey||u.metaKey;
break;
case 36:(u.ctrlKey||u.metaKey)&&l.datepicker._gotoToday(u.target),w=u.ctrlKey||u.metaKey;
break;
case 37:(u.ctrlKey||u.metaKey)&&l.datepicker._adjustDate(u.target,x?1:-1,"D"),w=u.ctrlKey||u.metaKey,u.originalEvent.altKey&&l.datepicker._adjustDate(u.target,u.ctrlKey?-l.datepicker._get(y,"stepBigMonths"):-l.datepicker._get(y,"stepMonths"),"M");
break;
case 38:(u.ctrlKey||u.metaKey)&&l.datepicker._adjustDate(u.target,-7,"D"),w=u.ctrlKey||u.metaKey;
break;
case 39:(u.ctrlKey||u.metaKey)&&l.datepicker._adjustDate(u.target,x?-1:1,"D"),w=u.ctrlKey||u.metaKey,u.originalEvent.altKey&&l.datepicker._adjustDate(u.target,u.ctrlKey?+l.datepicker._get(y,"stepBigMonths"):+l.datepicker._get(y,"stepMonths"),"M");
break;
case 40:(u.ctrlKey||u.metaKey)&&l.datepicker._adjustDate(u.target,7,"D"),w=u.ctrlKey||u.metaKey;
break;
default:w=!1
}}else{36===u.keyCode&&u.ctrlKey?l.datepicker._showDatepicker(this):w=!1
}w&&(u.preventDefault(),u.stopPropagation())
},_doKeyPress:function(p){var q,o,r=l.datepicker._getInst(p.target);
return l.datepicker._get(r,"constrainInput")?(q=l.datepicker._possibleChars(l.datepicker._get(r,"dateFormat")),o=String.fromCharCode(null==p.charCode?p.keyCode:p.charCode),p.ctrlKey||p.metaKey||" ">o||!q||q.indexOf(o)>-1):h
},_doKeyUp:function(p){var o,q=l.datepicker._getInst(p.target);
if(q.input.val()!==q.lastVal){try{o=l.datepicker.parseDate(l.datepicker._get(q,"dateFormat"),q.input?q.input.val():null,l.datepicker._getFormatConfig(q)),o&&(l.datepicker._setDateFromField(q),l.datepicker._updateAlternate(q),l.datepicker._updateDatepicker(q))
}catch(n){}}return !0
},_showDatepicker:function(u){if(u=u.target||u,"input"!==u.nodeName.toLowerCase()&&(u=l("input",u.parentNode)[0]),!l.datepicker._isDisabledDatepicker(u)&&l.datepicker._lastInput!==u){var q,w,z,x,y,v,p;
q=l.datepicker._getInst(u),l.datepicker._curInst&&l.datepicker._curInst!==q&&(l.datepicker._curInst.dpDiv.stop(!0,!0),q&&l.datepicker._datepickerShowing&&l.datepicker._hideDatepicker(l.datepicker._curInst.input[0])),w=l.datepicker._get(q,"beforeShow"),z=w?w.apply(u,[u,q]):{},z!==!1&&(f(q.settings,z),q.lastVal=null,l.datepicker._lastInput=u,l.datepicker._setDateFromField(q),l.datepicker._inDialog&&(u.value=""),l.datepicker._pos||(l.datepicker._pos=l.datepicker._findPos(u),l.datepicker._pos[1]+=u.offsetHeight),x=!1,l(u).parents().each(function(){return x|="fixed"===l(this).css("position"),!x
}),y={left:l.datepicker._pos[0],top:l.datepicker._pos[1]},l.datepicker._pos=null,q.dpDiv.empty(),q.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),l.datepicker._updateDatepicker(q),y=l.datepicker._checkOffset(q,y,x),q.dpDiv.css({position:l.datepicker._inDialog&&l.blockUI?"static":x?"fixed":"absolute",display:"none",left:y.left+"px",top:y.top+"px"}),q.inline||(v=l.datepicker._get(q,"showAnim"),p=l.datepicker._get(q,"duration"),q.dpDiv.zIndex(l(u).zIndex()+1),l.datepicker._datepickerShowing=!0,l.effects&&l.effects.effect[v]?q.dpDiv.show(v,l.datepicker._get(q,"showOptions"),p):q.dpDiv[v||"show"](v?p:null),l.datepicker._shouldFocusInput(q)&&q.input.focus(),l.datepicker._curInst=q))
}},_updateDatepicker:function(p){this.maxRows=4,m=p,p.dpDiv.empty().append(this._generateHTML(p)),this._attachHandlers(p),p.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var o,q=this._getNumberOfMonths(p),n=q[1],u=17;
p.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&p.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",u*n+"em"),p.dpDiv[(1!==q[0]||1!==q[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),p.dpDiv[(this._get(p,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),p===l.datepicker._curInst&&l.datepicker._datepickerShowing&&l.datepicker._shouldFocusInput(p)&&p.input.focus(),p.yearshtml&&(o=p.yearshtml,setTimeout(function(){o===p.yearshtml&&p.yearshtml&&p.dpDiv.find("select.ui-datepicker-year:first").replaceWith(p.yearshtml),o=p.yearshtml=null
},0))
},_shouldFocusInput:function(i){return i.input&&i.input.is(":visible")&&!i.input.is(":disabled")&&!i.input.is(":focus")
},_checkOffset:function(z,w,A){var y=z.dpDiv.outerWidth(),u=z.dpDiv.outerHeight(),p=z.input?z.input.outerWidth():0,q=z.input?z.input.outerHeight():0,x=document.documentElement.clientWidth+(A?0:l(document).scrollLeft()),v=document.documentElement.clientHeight+(A?0:l(document).scrollTop());
return w.left-=this._get(z,"isRTL")?y-p:0,w.left-=A&&w.left===z.input.offset().left?l(document).scrollLeft():0,w.top-=A&&w.top===z.input.offset().top+q?l(document).scrollTop():0,w.left-=Math.min(w.left,w.left+y>x&&x>y?Math.abs(w.left+y-x):0),w.top-=Math.min(w.top,w.top+u>v&&v>u?Math.abs(u+q):0),w
},_findPos:function(p){for(var o,q=this._getInst(p),n=this._get(q,"isRTL");
p&&("hidden"===p.type||1!==p.nodeType||l.expr.filters.hidden(p));
){p=p[n?"previousSibling":"nextSibling"]
}return o=l(p).offset(),[o.left,o.top]
},_hideDatepicker:function(r){var q,u,p,w,v=this._curInst;
!v||r&&v!==l.data(r,k)||this._datepickerShowing&&(q=this._get(v,"showAnim"),u=this._get(v,"duration"),p=function(){l.datepicker._tidyDialog(v)
},l.effects&&(l.effects.effect[q]||l.effects[q])?v.dpDiv.hide(q,l.datepicker._get(v,"showOptions"),u,p):v.dpDiv["slideDown"===q?"slideUp":"fadeIn"===q?"fadeOut":"hide"](q?u:null,p),q||p(),this._datepickerShowing=!1,w=this._get(v,"onClose"),w&&w.apply(v.input?v.input[0]:null,[v.input?v.input.val():"",v]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),l.blockUI&&(l.unblockUI(),l("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(i){i.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(o){if(l.datepicker._curInst){var n=l(o.target),p=l.datepicker._getInst(n[0]);
(n[0].id!==l.datepicker._mainDivId&&0===n.parents("#"+l.datepicker._mainDivId).length&&!n.hasClass(l.datepicker.markerClassName)&&!n.closest("."+l.datepicker._triggerClass).length&&l.datepicker._datepickerShowing&&(!l.datepicker._inDialog||!l.blockUI)||n.hasClass(l.datepicker.markerClassName)&&l.datepicker._curInst!==p)&&l.datepicker._hideDatepicker()
}},_adjustDate:function(q,p,r){var o=l(q),u=this._getInst(o[0]);
this._isDisabledDatepicker(o[0])||(this._adjustInstDate(u,p+("M"===r?this._get(u,"showCurrentAtPos"):0),r),this._updateDatepicker(u))
},_gotoToday:function(p){var o,q=l(p),n=this._getInst(q[0]);
this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(o=new Date,n.selectedDay=o.getDate(),n.drawMonth=n.selectedMonth=o.getMonth(),n.drawYear=n.selectedYear=o.getFullYear()),this._notifyChange(n),this._adjustDate(q)
},_selectMonthYear:function(q,p,r){var o=l(q),u=this._getInst(o[0]);
u["selected"+("M"===r?"Month":"Year")]=u["draw"+("M"===r?"Month":"Year")]=parseInt(p.options[p.selectedIndex].value,10),this._notifyChange(u),this._adjustDate(o)
},_selectDay:function(q,p,u,o){var w,v=l(q);
l(o).hasClass(this._unselectableClass)||this._isDisabledDatepicker(v[0])||(w=this._getInst(v[0]),w.selectedDay=w.currentDay=l("a",o).html(),w.selectedMonth=w.currentMonth=p,w.selectedYear=w.currentYear=u,this._selectDate(q,this._formatDate(w,w.currentDay,w.currentMonth,w.currentYear)))
},_clearDate:function(o){var n=l(o);
this._selectDate(n,"")
},_selectDate:function(q,p){var r,o=l(q),u=this._getInst(o[0]);
p=null!=p?p:this._formatDate(u),u.input&&u.input.val(p),this._updateAlternate(u),r=this._get(u,"onSelect"),r?r.apply(u.input?u.input[0]:null,[p,u]):u.input&&u.input.trigger("change"),u.inline?this._updateDatepicker(u):(this._hideDatepicker(),this._lastInput=u.input[0],"object"!=typeof u.input[0]&&u.input.focus(),this._lastInput=null)
},_updateAlternate:function(q){var p,r,o,u=this._get(q,"altField");
u&&(p=this._get(q,"altFormat")||this._get(q,"dateFormat"),r=this._getDate(q),o=this.formatDate(p,r,this._getFormatConfig(q)),l(u).each(function(){l(this).val(o)
}))
},noWeekends:function(n){var i=n.getDay();
return[i>0&&6>i,""]
},iso8601Week:function(p){var o,n=new Date(p.getTime());
return n.setDate(n.getDate()+4-(n.getDay()||7)),o=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((o-n)/86400000)/7)+1
},parseDate:function(N,F,U){if(null==N||null==F){throw"Invalid arguments"
}if(F="object"==typeof F?""+F:F+"",""===F){return null
}var J,G,I,O,L=0,C=(U?U.shortYearCutoff:null)||this._defaults.shortYearCutoff,R="string"!=typeof C?C:(new Date).getFullYear()%100+parseInt(C,10),S=(U?U.dayNamesShort:null)||this._defaults.dayNamesShort,H=(U?U.dayNames:null)||this._defaults.dayNames,K=(U?U.monthNamesShort:null)||this._defaults.monthNamesShort,Q=(U?U.monthNames:null)||this._defaults.monthNames,P=-1,B=-1,q=-1,T=-1,V=!1,z=function(n){var i=N.length>J+1&&N.charAt(J+1)===n;
return i&&J++,i
},M=function(s){var r=z(s),p="@"===s?14:"!"===s?20:"y"===s&&r?4:"o"===s?3:2,o=RegExp("^\\d{1,"+p+"}"),u=F.substring(L).match(o);
if(!u){throw"Missing number at position "+L
}return L+=u[0].length,parseInt(u[0],10)
},A=function(s,p,w){var u=-1,v=l.map(z(s)?w:p,function(n,i){return[[i,n]]
}).sort(function(n,i){return -(n[1].length-i[1].length)
});
if(l.each(v,function(r,o){var n=o[1];
return F.substr(L,n.length).toLowerCase()===n.toLowerCase()?(u=o[0],L+=n.length,!1):h
}),-1!==u){return u+1
}throw"Unknown name at position "+L
},E=function(){if(F.charAt(L)!==N.charAt(J)){throw"Unexpected literal at position "+L
}L++
};
for(J=0;
N.length>J;
J++){if(V){"'"!==N.charAt(J)||z("'")?E():V=!1
}else{switch(N.charAt(J)){case"d":q=M("d");
break;
case"D":A("D",S,H);
break;
case"o":T=M("o");
break;
case"m":B=M("m");
break;
case"M":B=A("M",K,Q);
break;
case"y":P=M("y");
break;
case"@":O=new Date(M("@")),P=O.getFullYear(),B=O.getMonth()+1,q=O.getDate();
break;
case"!":O=new Date((M("!")-this._ticksTo1970)/10000),P=O.getFullYear(),B=O.getMonth()+1,q=O.getDate();
break;
case"'":z("'")?E():V=!0;
break;
default:E()
}}}if(F.length>L&&(I=F.substr(L),!/^\s+/.test(I))){throw"Extra/unparsed characters found in date: "+I
}if(-1===P?P=(new Date).getFullYear():100>P&&(P+=(new Date).getFullYear()-(new Date).getFullYear()%100+(R>=P?0:-100)),T>-1){for(B=1,q=T;
;
){if(G=this._getDaysInMonth(P,B-1),G>=q){break
}B++,q-=G
}}if(O=this._daylightSavingAdjust(new Date(P,B-1,q)),O.getFullYear()!==P||O.getMonth()+1!==B||O.getDate()!==q){throw"Invalid date"
}return O
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(z,E,x){if(!E){return""
}var F,C=(x?x.dayNamesShort:null)||this._defaults.dayNamesShort,v=(x?x.dayNames:null)||this._defaults.dayNames,p=(x?x.monthNamesShort:null)||this._defaults.monthNamesShort,q=(x?x.monthNames:null)||this._defaults.monthNames,y=function(o){var n=z.length>F+1&&z.charAt(F+1)===o;
return n&&F++,n
},w=function(u,o,n){var r=""+o;
if(y(u)){for(;
n>r.length;
){r="0"+r
}}return r
},D=function(u,o,n,r){return y(u)?r[o]:n[o]
},A="",B=!1;
if(E){for(F=0;
z.length>F;
F++){if(B){"'"!==z.charAt(F)||y("'")?A+=z.charAt(F):B=!1
}else{switch(z.charAt(F)){case"d":A+=w("d",E.getDate(),2);
break;
case"D":A+=D("D",E.getDay(),C,v);
break;
case"o":A+=w("o",Math.round((new Date(E.getFullYear(),E.getMonth(),E.getDate()).getTime()-new Date(E.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":A+=w("m",E.getMonth()+1,2);
break;
case"M":A+=D("M",E.getMonth(),p,q);
break;
case"y":A+=y("y")?E.getFullYear():(10>E.getYear()%100?"0":"")+E.getYear()%100;
break;
case"@":A+=E.getTime();
break;
case"!":A+=10000*E.getTime()+this._ticksTo1970;
break;
case"'":y("'")?A+="'":B=!0;
break;
default:A+=z.charAt(F)
}}}}return A
},_possibleChars:function(r){var p,o="",q=!1,n=function(u){var v=r.length>p+1&&r.charAt(p+1)===u;
return v&&p++,v
};
for(p=0;
r.length>p;
p++){if(q){"'"!==r.charAt(p)||n("'")?o+=r.charAt(p):q=!1
}else{switch(r.charAt(p)){case"d":case"m":case"y":case"@":o+="0123456789";
break;
case"D":case"M":return null;
case"'":n("'")?o+="'":q=!0;
break;
default:o+=r.charAt(p)
}}}return o
},_get:function(o,n){return o.settings[n]!==h?o.settings[n]:this._defaults[n]
},_setDateFromField:function(x,u){if(x.input.val()!==x.lastVal){var q=this._get(x,"dateFormat"),v=x.lastVal=x.input?x.input.val():null,p=this._getDefaultDate(x),z=p,w=this._getFormatConfig(x);
try{z=this.parseDate(q,v,w)||p
}catch(y){v=u?"":v
}x.selectedDay=z.getDate(),x.drawMonth=x.selectedMonth=z.getMonth(),x.drawYear=x.selectedYear=z.getFullYear(),x.currentDay=v?z.getDate():0,x.currentMonth=v?z.getMonth():0,x.currentYear=v?z.getFullYear():0,this._adjustInstDate(x)
}},_getDefaultDate:function(i){return this._restrictMinMax(i,this._determineDate(i,this._get(i,"defaultDate"),new Date))
},_determineDate:function(q,p,u){var o=function(n){var i=new Date;
return i.setDate(i.getDate()+n),i
},w=function(z){try{return l.datepicker.parseDate(l.datepicker._get(q,"dateFormat"),z,l.datepicker._getFormatConfig(q))
}catch(B){}for(var y=(z.toLowerCase().match(/^c/)?l.datepicker._getDate(q):null)||new Date,E=y.getFullYear(),C=y.getMonth(),D=y.getDate(),A=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,x=A.exec(z);
x;
){switch(x[2]||"d"){case"d":case"D":D+=parseInt(x[1],10);
break;
case"w":case"W":D+=7*parseInt(x[1],10);
break;
case"m":case"M":C+=parseInt(x[1],10),D=Math.min(D,l.datepicker._getDaysInMonth(E,C));
break;
case"y":case"Y":E+=parseInt(x[1],10),D=Math.min(D,l.datepicker._getDaysInMonth(E,C))
}x=A.exec(z)
}return new Date(E,C,D)
},v=null==p||""===p?u:"string"==typeof p?w(p):"number"==typeof p?isNaN(p)?u:o(p):new Date(p.getTime());
return v=v&&"Invalid Date"==""+v?u:v,v&&(v.setHours(0),v.setMinutes(0),v.setSeconds(0),v.setMilliseconds(0)),this._daylightSavingAdjust(v)
},_daylightSavingAdjust:function(i){return i?(i.setHours(i.getHours()>12?i.getHours()+2:0),i):null
},_setDate:function(w,q,p){var u=!q,o=w.selectedMonth,x=w.selectedYear,v=this._restrictMinMax(w,this._determineDate(w,q,new Date));
w.selectedDay=w.currentDay=v.getDate(),w.drawMonth=w.selectedMonth=w.currentMonth=v.getMonth(),w.drawYear=w.selectedYear=w.currentYear=v.getFullYear(),o===w.selectedMonth&&x===w.selectedYear||p||this._notifyChange(w),this._adjustInstDate(w),w.input&&w.input.val(u?"":this._formatDate(w))
},_getDate:function(n){var i=!n.currentYear||n.input&&""===n.input.val()?null:this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));
return i
},_attachHandlers:function(o){var n=this._get(o,"stepMonths"),p="#"+o.id.replace(/\\\\/g,"\\");
o.dpDiv.find("[data-handler]").map(function(){var i={prev:function(){l.datepicker._adjustDate(p,-n,"M")
},next:function(){l.datepicker._adjustDate(p,+n,"M")
},hide:function(){l.datepicker._hideDatepicker()
},today:function(){l.datepicker._gotoToday(p)
},selectDay:function(){return l.datepicker._selectDay(p,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return l.datepicker._selectMonthYear(p,this,"M"),!1
},selectYear:function(){return l.datepicker._selectMonthYear(p,this,"Y"),!1
}};
l(this).bind(this.getAttribute("data-event"),i[this.getAttribute("data-handler")])
})
},_generateHTML:function(aY){var aI,aU,aJ,a2,aP,aK,aO,aV,aR,aH,aZ,a0,aN,aQ,aX,aW,aG,aD,a1,a3,aE,aS,aF,ax,ag,ah,an,am,ay,aA,ak,ar,av,aC,at,aw,aT,al,ao,ad=new Date,ai=this._daylightSavingAdjust(new Date(ad.getFullYear(),ad.getMonth(),ad.getDate())),ab=this._get(aY,"isRTL"),aq=this._get(aY,"showButtonPanel"),az=this._get(aY,"hideIfNoPrevNext"),ap=this._get(aY,"navigationAsDateFormat"),ae=this._getNumberOfMonths(aY),af=this._get(aY,"showCurrentAtPos"),aL=this._get(aY,"stepMonths"),aj=1!==ae[0]||1!==ae[1],au=this._daylightSavingAdjust(aY.currentDay?new Date(aY.currentYear,aY.currentMonth,aY.currentDay):new Date(9999,9,9)),aB=this._getMinMaxDate(aY,"min"),ac=this._getMinMaxDate(aY,"max"),aa=aY.drawMonth-af,aM=aY.drawYear;
if(0>aa&&(aa+=12,aM--),ac){for(aI=this._daylightSavingAdjust(new Date(ac.getFullYear(),ac.getMonth()-ae[0]*ae[1]+1,ac.getDate())),aI=aB&&aB>aI?aB:aI;
this._daylightSavingAdjust(new Date(aM,aa,1))>aI;
){aa--,0>aa&&(aa=11,aM--)
}}for(aY.drawMonth=aa,aY.drawYear=aM,aU=this._get(aY,"prevText"),aU=ap?this.formatDate(aU,this._daylightSavingAdjust(new Date(aM,aa-aL,1)),this._getFormatConfig(aY)):aU,aJ=this._canAdjustMonth(aY,-1,aM,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":az?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",a2=this._get(aY,"nextText"),a2=ap?this.formatDate(a2,this._daylightSavingAdjust(new Date(aM,aa+aL,1)),this._getFormatConfig(aY)):a2,aP=this._canAdjustMonth(aY,1,aM,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+a2+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+a2+"</span></a>":az?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+a2+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+a2+"</span></a>",aK=this._get(aY,"currentText"),aO=this._get(aY,"gotoCurrent")&&aY.currentDay?au:ai,aK=ap?this.formatDate(aK,aO,this._getFormatConfig(aY)):aK,aV=aY.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aY,"closeText")+"</button>",aR=aq?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aY,aO)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aK+"</button>":"")+(ab?"":aV)+"</div>":"",aH=parseInt(this._get(aY,"firstDay"),10),aH=isNaN(aH)?0:aH,aZ=this._get(aY,"showWeek"),a0=this._get(aY,"dayNames"),aN=this._get(aY,"dayNamesMin"),aQ=this._get(aY,"monthNames"),aX=this._get(aY,"monthNamesShort"),aW=this._get(aY,"beforeShowDay"),aG=this._get(aY,"showOtherMonths"),aD=this._get(aY,"selectOtherMonths"),a1=this._getDefaultDate(aY),a3="",aS=0;
ae[0]>aS;
aS++){for(aF="",this.maxRows=4,ax=0;
ae[1]>ax;
ax++){if(ag=this._daylightSavingAdjust(new Date(aM,aa,aY.selectedDay)),ah=" ui-corner-all",an="",aj){if(an+="<div class='ui-datepicker-group",ae[1]>1){switch(ax){case 0:an+=" ui-datepicker-group-first",ah=" ui-corner-"+(ab?"right":"left");
break;
case ae[1]-1:an+=" ui-datepicker-group-last",ah=" ui-corner-"+(ab?"left":"right");
break;
default:an+=" ui-datepicker-group-middle",ah=""
}}an+="'>"
}for(an+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+ah+"'>"+(/all|left/.test(ah)&&0===aS?ab?aP:aJ:"")+(/all|right/.test(ah)&&0===aS?ab?aJ:aP:"")+this._generateMonthYearHeader(aY,aa,aM,aB,ac,aS>0||ax>0,aQ,aX)+"</div><table class='ui-datepicker-calendar'><thead><tr>",am=aZ?"<th class='ui-datepicker-week-col'>"+this._get(aY,"weekHeader")+"</th>":"",aE=0;
7>aE;
aE++){ay=(aE+aH)%7,am+="<th"+((aE+aH+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+a0[ay]+"'>"+aN[ay]+"</span></th>"
}for(an+=am+"</tr></thead><tbody>",aA=this._getDaysInMonth(aM,aa),aM===aY.selectedYear&&aa===aY.selectedMonth&&(aY.selectedDay=Math.min(aY.selectedDay,aA)),ak=(this._getFirstDayOfMonth(aM,aa)-aH+7)%7,ar=Math.ceil((ak+aA)/7),av=aj?this.maxRows>ar?this.maxRows:ar:ar,this.maxRows=av,aC=this._daylightSavingAdjust(new Date(aM,aa,1-ak)),at=0;
av>at;
at++){for(an+="<tr>",aw=aZ?"<td class='ui-datepicker-week-col'>"+this._get(aY,"calculateWeek")(aC)+"</td>":"",aE=0;
7>aE;
aE++){aT=aW?aW.apply(aY.input?aY.input[0]:null,[aC]):[!0,""],al=aC.getMonth()!==aa,ao=al&&!aD||!aT[0]||aB&&aB>aC||ac&&aC>ac,aw+="<td class='"+((aE+aH+6)%7>=5?" ui-datepicker-week-end":"")+(al?" ui-datepicker-other-month":"")+(aC.getTime()===ag.getTime()&&aa===aY.selectedMonth&&aY._keyEvent||a1.getTime()===aC.getTime()&&a1.getTime()===ag.getTime()?" "+this._dayOverClass:"")+(ao?" "+this._unselectableClass+" ui-state-disabled":"")+(al&&!aG?"":" "+aT[1]+(aC.getTime()===au.getTime()?" "+this._currentClass:"")+(aC.getTime()===ai.getTime()?" ui-datepicker-today":""))+"'"+(al&&!aG||!aT[2]?"":" title='"+aT[2].replace(/'/g,"&#39;")+"'")+(ao?"":" data-handler='selectDay' data-event='click' data-month='"+aC.getMonth()+"' data-year='"+aC.getFullYear()+"'")+">"+(al&&!aG?"&#xa0;":ao?"<span class='ui-state-default'>"+aC.getDate()+"</span>":"<a class='ui-state-default"+(aC.getTime()===ai.getTime()?" ui-state-highlight":"")+(aC.getTime()===au.getTime()?" ui-state-active":"")+(al?" ui-priority-secondary":"")+"' href='#'>"+aC.getDate()+"</a>")+"</td>",aC.setDate(aC.getDate()+1),aC=this._daylightSavingAdjust(aC)
}an+=aw+"</tr>"
}aa++,aa>11&&(aa=0,aM++),an+="</tbody></table>"+(aj?"</div>"+(ae[0]>0&&ax===ae[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aF+=an
}a3+=aF
}return a3+=aR,aY._keyEvent=!1,a3
},_generateMonthYearHeader:function(L,z,H,A,P,E,B,D){var I,G,x,M,N,C,F,K,J=this._get(L,"changeMonth"),w=this._get(L,"changeYear"),q=this._get(L,"showMonthAfterYear"),O="<div class='ui-datepicker-title'>",Q="";
if(E||!J){Q+="<span class='ui-datepicker-month'>"+B[z]+"</span>"
}else{for(I=A&&A.getFullYear()===H,G=P&&P.getFullYear()===H,Q+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",x=0;
12>x;
x++){(!I||x>=A.getMonth())&&(!G||P.getMonth()>=x)&&(Q+="<option value='"+x+"'"+(x===z?" selected='selected'":"")+">"+D[x]+"</option>")
}Q+="</select>"
}if(q||(O+=Q+(!E&&J&&w?"":"&#xa0;")),!L.yearshtml){if(L.yearshtml="",E||!w){O+="<span class='ui-datepicker-year'>"+H+"</span>"
}else{for(M=this._get(L,"yearRange").split(":"),N=(new Date).getFullYear(),C=function(n){var i=n.match(/c[+\-].*/)?H+parseInt(n.substring(1),10):n.match(/[+\-].*/)?N+parseInt(n,10):parseInt(n,10);
return isNaN(i)?N:i
},F=C(M[0]),K=Math.max(F,C(M[1]||"")),F=A?Math.max(F,A.getFullYear()):F,K=P?Math.min(K,P.getFullYear()):K,L.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
K>=F;
F++){L.yearshtml+="<option value='"+F+"'"+(F===H?" selected='selected'":"")+">"+F+"</option>"
}L.yearshtml+="</select>",O+=L.yearshtml,L.yearshtml=null
}}return O+=this._get(L,"yearSuffix"),q&&(O+=(!E&&J&&w?"":"&#xa0;")+Q),O+="</div>"
},_adjustInstDate:function(w,q,p){var u=w.drawYear+("Y"===p?q:0),o=w.drawMonth+("M"===p?q:0),x=Math.min(w.selectedDay,this._getDaysInMonth(u,o))+("D"===p?q:0),v=this._restrictMinMax(w,this._daylightSavingAdjust(new Date(u,o,x)));
w.selectedDay=v.getDate(),w.drawMonth=w.selectedMonth=v.getMonth(),w.drawYear=w.selectedYear=v.getFullYear(),("M"===p||"Y"===p)&&this._notifyChange(w)
},_restrictMinMax:function(r,p){var o=this._getMinMaxDate(r,"min"),q=this._getMinMaxDate(r,"max"),n=o&&o>p?o:p;
return q&&n>q?q:n
},_notifyChange:function(n){var i=this._get(n,"onChangeMonthYear");
i&&i.apply(n.input?n.input[0]:null,[n.selectedYear,n.selectedMonth+1,n])
},_getNumberOfMonths:function(n){var i=this._get(n,"numberOfMonths");
return null==i?[1,1]:"number"==typeof i?[1,i]:i
},_getMinMaxDate:function(n,i){return this._determineDate(n,this._get(n,i+"Date"),null)
},_getDaysInMonth:function(n,i){return 32-this._daylightSavingAdjust(new Date(n,i,32)).getDate()
},_getFirstDayOfMonth:function(n,i){return new Date(n,i,1).getDay()
},_canAdjustMonth:function(u,q,p,r){var o=this._getNumberOfMonths(u),v=this._daylightSavingAdjust(new Date(p,r+(0>q?q:o[0]*o[1]),1));
return 0>q&&v.setDate(this._getDaysInMonth(v.getFullYear(),v.getMonth())),this._isInRange(u,v)
},_isInRange:function(x,z){var v,A,y=this._getMinMaxDate(x,"min"),u=this._getMinMaxDate(x,"max"),p=null,q=null,w=this._get(x,"yearRange");
return w&&(v=w.split(":"),A=(new Date).getFullYear(),p=parseInt(v[0],10),q=parseInt(v[1],10),v[0].match(/[+\-].*/)&&(p+=A),v[1].match(/[+\-].*/)&&(q+=A)),(!y||z.getTime()>=y.getTime())&&(!u||z.getTime()<=u.getTime())&&(!p||z.getFullYear()>=p)&&(!q||q>=z.getFullYear())
},_getFormatConfig:function(n){var i=this._get(n,"shortYearCutoff");
return i="string"!=typeof i?i:(new Date).getFullYear()%100+parseInt(i,10),{shortYearCutoff:i,dayNamesShort:this._get(n,"dayNamesShort"),dayNames:this._get(n,"dayNames"),monthNamesShort:this._get(n,"monthNamesShort"),monthNames:this._get(n,"monthNames")}
},_formatDate:function(r,p,o,q){p||(r.currentDay=r.selectedDay,r.currentMonth=r.selectedMonth,r.currentYear=r.selectedYear);
var n=p?"object"==typeof p?p:this._daylightSavingAdjust(new Date(q,o,p)):this._daylightSavingAdjust(new Date(r.currentYear,r.currentMonth,r.currentDay));
return this.formatDate(this._get(r,"dateFormat"),n,this._getFormatConfig(r))
}}),l.fn.datepicker=function(o){if(!this.length){return this
}l.datepicker.initialized||(l(document).mousedown(l.datepicker._checkExternalClick),l.datepicker.initialized=!0),0===l("#"+l.datepicker._mainDivId).length&&l("body").append(l.datepicker.dpDiv);
var n=Array.prototype.slice.call(arguments,1);
return"string"!=typeof o||"isDisabled"!==o&&"getDate"!==o&&"widget"!==o?"option"===o&&2===arguments.length&&"string"==typeof arguments[1]?l.datepicker["_"+o+"Datepicker"].apply(l.datepicker,[this[0]].concat(n)):this.each(function(){"string"==typeof o?l.datepicker["_"+o+"Datepicker"].apply(l.datepicker,[this].concat(n)):l.datepicker._attachDatepicker(this,o)
}):l.datepicker["_"+o+"Datepicker"].apply(l.datepicker,[this[0]].concat(n))
},l.datepicker=new g,l.datepicker.initialized=!1,l.datepicker.uuid=(new Date).getTime(),l.datepicker.version="1.10.4"
})(jQuery);
(function(f){f.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,f.proxy(function(g){this.options.disabled&&g.preventDefault()
},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(g){g.preventDefault()
},"click .ui-state-disabled > a":function(g){g.preventDefault()
},"click .ui-menu-item:has(a)":function(h){var g=f(h.target).closest(".ui-menu-item");
!this.mouseHandled&&g.not(".ui-state-disabled").length&&(this.select(h),h.isPropagationStopped()||(this.mouseHandled=!0),g.has(".ui-menu").length?this.expand(h):!this.element.is(":focus")&&f(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(h){var g=f(h.currentTarget);
g.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(h,g)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(j,h){var g=this.active||this.element.children(".ui-menu-item").eq(0);
h||this.focus(j,g)
},blur:function(g){this._delay(function(){f.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(g)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(g){f(g.target).closest(".ui-menu").length||this.collapseAll(g),this.mouseHandled=!1
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var g=f(this);
g.data("ui-menu-submenu-carat")&&g.remove()
}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(k){function j(h){return h.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}var m,g,u,p,q,l=!0;
switch(k.keyCode){case f.ui.keyCode.PAGE_UP:this.previousPage(k);
break;
case f.ui.keyCode.PAGE_DOWN:this.nextPage(k);
break;
case f.ui.keyCode.HOME:this._move("first","first",k);
break;
case f.ui.keyCode.END:this._move("last","last",k);
break;
case f.ui.keyCode.UP:this.previous(k);
break;
case f.ui.keyCode.DOWN:this.next(k);
break;
case f.ui.keyCode.LEFT:this.collapse(k);
break;
case f.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(k);
break;
case f.ui.keyCode.ENTER:case f.ui.keyCode.SPACE:this._activate(k);
break;
case f.ui.keyCode.ESCAPE:this.collapse(k);
break;
default:l=!1,g=this.previousFilter||"",u=String.fromCharCode(k.keyCode),p=!1,clearTimeout(this.filterTimer),u===g?p=!0:u=g+u,q=RegExp("^"+j(u),"i"),m=this.activeMenu.children(".ui-menu-item").filter(function(){return q.test(f(this).children("a").text())
}),m=p&&-1!==m.index(this.active.next())?this.active.nextAll(".ui-menu-item"):m,m.length||(u=String.fromCharCode(k.keyCode),q=RegExp("^"+j(u),"i"),m=this.activeMenu.children(".ui-menu-item").filter(function(){return q.test(f(this).children("a").text())
})),m.length?(this.focus(k,m),m.length>1?(this.previousFilter=u,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter):delete this.previousFilter
}l&&k.preventDefault()
},_activate:function(g){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(g):this.select(g))
},refresh:function(){var h,g=this.options.icons.submenu,j=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),j.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var k=f(this),l=k.prev("a"),i=f("<span>").addClass("ui-menu-icon ui-icon "+g).data("ui-menu-submenu-carat",!0);
l.attr("aria-haspopup","true").prepend(i),k.attr("aria-labelledby",l.attr("id"))
}),h=j.add(this.element),h.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),h.children(":not(.ui-menu-item)").each(function(){var i=f(this);
/[^\-\u2014\u2013\s]/.test(i.text())||i.addClass("ui-widget-content ui-menu-divider")
}),h.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!f.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(h,g){"icons"===h&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(g.submenu),this._super(h,g)
},focus:function(k,h){var g,j;
this.blur(k,k&&"focus"===k.type),this._scrollIntoView(h),this.active=h.first(),j=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",j.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),k&&"keydown"===k.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),g=h.children(".ui-menu"),g.length&&k&&/^mouse/.test(k.type)&&this._startOpening(g),this.activeMenu=h.parent(),this._trigger("focus",k,{item:h})
},_scrollIntoView:function(j){var h,k,g,p,l,m;
this._hasScroll()&&(h=parseFloat(f.css(this.activeMenu[0],"borderTopWidth"))||0,k=parseFloat(f.css(this.activeMenu[0],"paddingTop"))||0,g=j.offset().top-this.activeMenu.offset().top-h-k,p=this.activeMenu.scrollTop(),l=this.activeMenu.height(),m=j.height(),0>g?this.activeMenu.scrollTop(p+g):g+m>l&&this.activeMenu.scrollTop(p+g-l+m))
},blur:function(h,g){g||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",h,{item:this.active}))
},_startOpening:function(g){clearTimeout(this.timer),"true"===g.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(g)
},this.delay))
},_open:function(h){var g=f.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(h.parents(".ui-menu")).hide().attr("aria-hidden","true"),h.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(g)
},collapseAll:function(h,g){clearTimeout(this.timer),this.timer=this._delay(function(){var i=g?this.element:f(h&&h.target).closest(this.element.find(".ui-menu"));
i.length||(i=this.element),this._close(i),this.blur(h),this.activeMenu=i
},this.delay)
},_close:function(g){g||(g=this.active?this.active.parent():this.element),g.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(h){var g=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
g&&g.length&&(this._close(),this.focus(h,g))
},expand:function(h){var g=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
g&&g.length&&(this._open(g.parent()),this._delay(function(){this.focus(h,g)
}))
},next:function(g){this._move("next","first",g)
},previous:function(g){this._move("prev","last",g)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(k,h,g){var j;
this.active&&(j="first"===k||"last"===k?this.active["first"===k?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[k+"All"](".ui-menu-item").eq(0)),j&&j.length&&this.active||(j=this.activeMenu.children(".ui-menu-item")[h]()),this.focus(g,j)
},nextPage:function(j){var h,k,g;
return this.active?(this.isLastItem()||(this._hasScroll()?(k=this.active.offset().top,g=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return h=f(this),0>h.offset().top-k-g
}),this.focus(j,h)):this.focus(j,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(j),undefined)
},previousPage:function(j){var h,k,g;
return this.active?(this.isFirstItem()||(this._hasScroll()?(k=this.active.offset().top,g=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return h=f(this),h.offset().top-k+g>0
}),this.focus(j,h)):this.focus(j,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(j),undefined)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(h){this.active=this.active||f(h.target).closest(".ui-menu-item");
var g={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(h,!0),this._trigger("select",h,g)
}})
})(jQuery);
e("jqueryui",function(){});
e("clickTouch",["jquery","modernizr"],function(f,g){return g.touch?"tap":"click"
});
/*! Hammer.JS - v1.1.3 - 2014-05-20
 * http://eightmedia.github.io/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(Z,q){var M=function M(ar,aq){return new M.Instance(ar,aq||{})
};
M.VERSION="1.1.3";
M.defaults={behavior:{userSelect:"none",touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
M.DOCUMENT=document;
M.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled;
M.HAS_TOUCHEVENTS=("ontouchstart" in Z);
M.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);
M.NO_MOUSEEVENTS=(M.HAS_TOUCHEVENTS&&M.IS_MOBILE)||M.HAS_POINTEREVENTS;
M.CALCULATE_INTERVAL=25;
var Q={};
var I=M.DIRECTION_DOWN="down";
var E=M.DIRECTION_LEFT="left";
var ai=M.DIRECTION_UP="up";
var O=M.DIRECTION_RIGHT="right";
var ag=M.POINTER_MOUSE="mouse";
var h=M.POINTER_TOUCH="touch";
var y=M.POINTER_PEN="pen";
var x=M.EVENT_START="start";
var L=M.EVENT_MOVE="move";
var C=M.EVENT_END="end";
var p=M.EVENT_RELEASE="release";
var T=M.EVENT_TOUCH="touch";
M.READY=false;
M.plugins=M.plugins||{};
M.gestures=M.gestures||{};
function k(){if(M.READY){return
}V.determineEventTypes();
W.each(M.gestures,function(aq){s.register(aq)
});
V.onTouch(M.DOCUMENT,L,s.detect);
V.onTouch(M.DOCUMENT,C,s.detect);
M.READY=true
}var W=M.utils={extend:function o(aq,at,au){for(var ar in at){if(!at.hasOwnProperty(ar)||(aq[ar]!==q&&au)){continue
}aq[ar]=at[ar]
}return aq
},on:function P(aq,at,ar){aq.addEventListener(at,ar,false)
},off:function aa(aq,at,ar){aq.removeEventListener(at,ar,false)
},each:function ae(av,au,at){var ar,aq;
if("forEach" in av){av.forEach(au,at)
}else{if(av.length!==q){for(ar=0,aq=av.length;
ar<aq;
ar++){if(au.call(at,av[ar],ar,av)===false){return
}}}else{for(ar in av){if(av.hasOwnProperty(ar)&&au.call(at,av[ar],ar,av)===false){return
}}}}},inStr:function Y(ar,aq){return ar.indexOf(aq)>-1
},inArray:function ak(av,au){if(av.indexOf){var ar=av.indexOf(au);
return(ar===-1)?false:ar
}else{for(var at=0,aq=av.length;
at<aq;
at++){if(av[at]===au){return at
}}return false
}},toArray:function F(aq){return Array.prototype.slice.call(aq,0)
},hasParent:function aj(ar,aq){while(ar){if(ar==aq){return true
}ar=ar.parentNode
}return false
},getCenter:function N(ax){var av=[],at=[],aw=[],au=[],ar=Math.min,aq=Math.max;
if(ax.length===1){return{pageX:ax[0].pageX,pageY:ax[0].pageY,clientX:ax[0].clientX,clientY:ax[0].clientY}
}W.each(ax,function(ay){av.push(ay.pageX);
at.push(ay.pageY);
aw.push(ay.clientX);
au.push(ay.clientY)
});
return{pageX:(ar.apply(Math,av)+aq.apply(Math,av))/2,pageY:(ar.apply(Math,at)+aq.apply(Math,at))/2,clientX:(ar.apply(Math,aw)+aq.apply(Math,aw))/2,clientY:(ar.apply(Math,au)+aq.apply(Math,au))/2}
},getVelocity:function f(at,ar,aq){return{x:Math.abs(ar/at)||0,y:Math.abs(aq/at)||0}
},getAngle:function v(at,ar){var aq=ar.clientX-at.clientX,au=ar.clientY-at.clientY;
return Math.atan2(au,aq)*180/Math.PI
},getDirection:function r(at,ar){var aq=Math.abs(at.clientX-ar.clientX),au=Math.abs(at.clientY-ar.clientY);
if(aq>=au){return at.clientX-ar.clientX>0?E:O
}return at.clientY-ar.clientY>0?ai:I
},getDistance:function u(at,ar){var aq=ar.clientX-at.clientX,au=ar.clientY-at.clientY;
return Math.sqrt((aq*aq)+(au*au))
},getScale:function K(ar,aq){if(ar.length>=2&&aq.length>=2){return this.getDistance(aq[0],aq[1])/this.getDistance(ar[0],ar[1])
}return 1
},getRotation:function G(ar,aq){if(ar.length>=2&&aq.length>=2){return this.getAngle(aq[1],aq[0])-this.getAngle(ar[1],ar[0])
}return 0
},isVertical:function U(aq){return aq==ai||aq==I
},setPrefixedCss:function al(at,ax,av,aq){var au=["","Webkit","Moz","O","ms"];
ax=W.toCamelCase(ax);
for(var ar=0;
ar<au.length;
ar++){var aw=ax;
if(au[ar]){aw=au[ar]+aw.slice(0,1).toUpperCase()+aw.slice(1)
}if(aw in at.style){at.style[aw]=(aq==null||aq)&&av||"";
break
}}},toggleBehavior:function X(at,au,ar){if(!au||!at||!at.style){return
}W.each(au,function(av,aw){W.setPrefixedCss(at,aw,av,ar)
});
var aq=ar&&function(){return false
};
if(au.userSelect=="none"){at.onselectstart=aq
}if(au.userDrag=="none"){at.ondragstart=aq
}},toCamelCase:function A(aq){return aq.replace(/[_-]([a-z])/g,function(ar){return ar[1].toUpperCase()
})
}};
var V=M.event={preventMouseEvents:false,started:false,shouldDetect:false,on:function P(ar,au,at,av){var aq=au.split(" ");
W.each(aq,function(aw){W.on(ar,aw,at);
av&&av(aw)
})
},off:function aa(ar,au,at,av){var aq=au.split(" ");
W.each(aq,function(aw){W.off(ar,aw,at);
av&&av(aw)
})
},onTouch:function S(at,ar,au){var aq=this;
var av=function av(az){var aA=az.type.toLowerCase(),aw=M.HAS_POINTEREVENTS,ay=W.inStr(aA,"mouse"),ax;
if(ay&&aq.preventMouseEvents){return
}else{if(ay&&ar==x&&az.button===0){aq.preventMouseEvents=false;
aq.shouldDetect=true
}else{if(aw&&ar==x){aq.shouldDetect=(az.buttons===1||i.matchType(h,az))
}else{if(!ay&&ar==x){aq.preventMouseEvents=true;
aq.shouldDetect=true
}}}}if(aw&&ar!=C){i.updatePointer(ar,az)
}if(aq.shouldDetect){ax=aq.doDetect.call(aq,az,ar,at,au)
}if(ax==C){aq.preventMouseEvents=false;
aq.shouldDetect=false;
i.reset()
}if(aw&&ar==C){i.updatePointer(ar,az)
}};
this.on(at,Q[ar],av);
return av
},doDetect:function an(ax,ar,av,az){var aq=this.getTouchList(ax,ar);
var aA=aq.length;
var at=ar;
var au=aq.trigger;
var ay=aA;
if(ar==x){au=T
}else{if(ar==C){au=p;
ay=aq.length-((ax.changedTouches)?ax.changedTouches.length:1)
}}if(ay>0&&this.started){at=L
}this.started=true;
var aw=this.collectEventData(av,at,aq,ax);
if(ar!=C){az.call(s,aw)
}if(au){aw.changedLength=ay;
aw.eventType=au;
az.call(s,aw);
aw.eventType=at;
delete aw.changedLength
}if(at==C){az.call(s,aw);
this.started=false
}return at
},determineEventTypes:function af(){var aq;
if(M.HAS_POINTEREVENTS){if(Z.PointerEvent){aq=["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]
}else{aq=["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]
}}else{if(M.NO_MOUSEEVENTS){aq=["touchstart","touchmove","touchend touchcancel"]
}else{aq=["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"]
}}Q[x]=aq[0];
Q[L]=aq[1];
Q[C]=aq[2];
return Q
},getTouchList:function B(au,at){if(M.HAS_POINTEREVENTS){return i.getTouchList()
}if(au.touches){if(at==L){return au.touches
}var aq=[];
var av=[].concat(W.toArray(au.touches),W.toArray(au.changedTouches));
var ar=[];
W.each(av,function(aw){if(W.inArray(aq,aw.identifier)===false){ar.push(aw)
}aq.push(aw.identifier)
});
return ar
}au.identifier=1;
return[au]
},collectEventData:function ao(at,ar,av,au){var aq=h;
if(W.inStr(au.type,"mouse")||i.matchType(ag,au)){aq=ag
}else{if(i.matchType(y,au)){aq=y
}}return{center:W.getCenter(av),timeStamp:Date.now(),target:au.target,touches:av,eventType:ar,pointerType:aq,srcEvent:au,preventDefault:function(){var aw=this.srcEvent;
aw.preventManipulation&&aw.preventManipulation();
aw.preventDefault&&aw.preventDefault()
},stopPropagation:function(){this.srcEvent.stopPropagation()
},stopDetect:function(){return s.stopDetect()
}}
}};
var i=M.PointerEvent={pointers:{},getTouchList:function B(){var aq=[];
W.each(this.pointers,function(ar){aq.push(ar)
});
return aq
},updatePointer:function ad(aq,ar){if(aq==C||(aq!=C&&ar.buttons!==1)){delete this.pointers[ar.pointerId]
}else{ar.identifier=ar.pointerId;
this.pointers[ar.pointerId]=ar
}},matchType:function ac(aq,at){if(!at.pointerType){return false
}var au=at.pointerType,ar={};
ar[ag]=(au===(at.MSPOINTER_TYPE_MOUSE||ag));
ar[h]=(au===(at.MSPOINTER_TYPE_TOUCH||h));
ar[y]=(au===(at.MSPOINTER_TYPE_PEN||y));
return ar[aq]
},reset:function D(){this.pointers={}
}};
var s=M.detection={gestures:[],current:null,previous:null,stopped:false,startDetect:function R(ar,aq){if(this.current){return
}this.stopped=false;
this.current={inst:ar,startEvent:W.extend({},aq),lastEvent:false,lastCalcEvent:false,futureCalcEvent:false,lastCalcData:{},name:""};
this.detect(aq)
},detect:function z(ar){if(!this.current||this.stopped){return
}ar=this.extendEventData(ar);
var at=this.current.inst,au=at.options;
W.each(this.gestures,function aq(av){if(!this.stopped&&at.enabled&&au[av.name]){av.handler.call(av,ar,at)
}},this);
if(this.current){this.current.lastEvent=ar
}if(ar.eventType==C){this.stopDetect()
}return ar
},stopDetect:function g(){this.previous=W.extend({},this.current);
this.current=null;
this.stopped=true
},getCalculatedData:function n(ay,ar,ax,av,au){var az=this.current,aw=false,at=az.lastCalcEvent,aq=az.lastCalcData;
if(at&&ay.timeStamp-at.timeStamp>M.CALCULATE_INTERVAL){ar=at.center;
ax=ay.timeStamp-at.timeStamp;
av=ay.center.clientX-at.center.clientX;
au=ay.center.clientY-at.center.clientY;
aw=true
}if(ay.eventType==T||ay.eventType==p){az.futureCalcEvent=ay
}if(!az.lastCalcEvent||aw){aq.velocity=W.getVelocity(ax,av,au);
aq.angle=W.getAngle(ar,ay.center);
aq.direction=W.getDirection(ar,ay.center);
az.lastCalcEvent=az.futureCalcEvent||ay;
az.futureCalcEvent=ay
}ay.velocityX=aq.velocity.x;
ay.velocityY=aq.velocity.y;
ay.interimAngle=aq.angle;
ay.interimDirection=aq.direction
},extendEventData:function J(av){var ax=this.current,aw=ax.startEvent,au=ax.lastEvent||aw;
if(av.eventType==T||av.eventType==p){aw.touches=[];
W.each(av.touches,function(ay){aw.touches.push({clientX:ay.clientX,clientY:ay.clientY})
})
}var at=av.timeStamp-aw.timeStamp,ar=av.center.clientX-aw.center.clientX,aq=av.center.clientY-aw.center.clientY;
this.getCalculatedData(av,au.center,at,ar,aq);
W.extend(av,{startEvent:aw,deltaTime:at,deltaX:ar,deltaY:aq,distance:W.getDistance(aw.center,av.center),angle:W.getAngle(aw.center,av.center),direction:W.getDirection(aw.center,av.center),scale:W.getScale(aw.touches,av.touches),rotation:W.getRotation(aw.touches,av.touches)});
return av
},register:function l(ar){var aq=ar.defaults||{};
if(aq[ar.name]===q){aq[ar.name]=true
}W.extend(M.defaults,aq,true);
ar.index=ar.index||1000;
this.gestures.push(ar);
this.gestures.sort(function(au,at){if(au.index<at.index){return -1
}if(au.index>at.index){return 1
}return 0
});
return this.gestures
}};
M.Instance=function(at,ar){var aq=this;
k();
this.element=at;
this.enabled=true;
W.each(ar,function(av,au){delete ar[au];
ar[W.toCamelCase(au)]=av
});
this.options=W.extend(W.extend({},M.defaults),ar||{});
if(this.options.behavior){W.toggleBehavior(this.element,this.options.behavior,true)
}this.eventStartHandler=V.onTouch(at,x,function(au){if(aq.enabled&&au.eventType==x){s.startDetect(aq,au)
}else{if(au.eventType==T){s.detect(au)
}}});
this.eventHandlers=[]
};
M.Instance.prototype={on:function ab(at,ar){var aq=this;
V.on(aq.element,at,ar,function(au){aq.eventHandlers.push({gesture:au,handler:ar})
});
return aq
},off:function w(at,ar){var aq=this;
V.off(aq.element,at,ar,function(av){var au=W.inArray({gesture:av,handler:ar});
if(au!==false){aq.eventHandlers.splice(au,1)
}});
return aq
},trigger:function ah(ar,au){if(!au){au={}
}var at=M.DOCUMENT.createEvent("Event");
at.initEvent(ar,true,true);
at.gesture=au;
var aq=this.element;
if(W.hasParent(au.target,aq)){aq=au.target
}aq.dispatchEvent(at);
return this
},enable:function j(aq){this.enabled=aq;
return this
},dispose:function H(){var aq,ar;
W.toggleBehavior(this.element,this.options.behavior,false);
for(aq=-1;
(ar=this.eventHandlers[++aq]);
){W.off(this.element,ar.gesture,ar.handler)
}this.eventHandlers=[];
V.off(this.element,Q[x],this.eventStartHandler);
return null
}};
(function(ar){var aq=false;
function at(ax,ay){var aA=s.current;
if(ay.options.dragMaxTouches>0&&ax.touches.length>ay.options.dragMaxTouches){return
}switch(ax.eventType){case x:aq=false;
break;
case L:if(ax.distance<ay.options.dragMinDistance&&aA.name!=ar){return
}var au=aA.startEvent.center;
if(aA.name!=ar){aA.name=ar;
if(ay.options.dragDistanceCorrection&&ax.distance>0){var av=Math.abs(ay.options.dragMinDistance/ax.distance);
au.pageX+=ax.deltaX*av;
au.pageY+=ax.deltaY*av;
au.clientX+=ax.deltaX*av;
au.clientY+=ax.deltaY*av;
ax=s.extendEventData(ax)
}}if(aA.lastEvent.dragLockToAxis||(ay.options.dragLockToAxis&&ay.options.dragLockMinDistance<=ax.distance)){ax.dragLockToAxis=true
}var aw=aA.lastEvent.direction;
if(ax.dragLockToAxis&&aw!==ax.direction){if(W.isVertical(aw)){ax.direction=(ax.deltaY<0)?ai:I
}else{ax.direction=(ax.deltaX<0)?E:O
}}if(!aq){ay.trigger(ar+"start",ax);
aq=true
}ay.trigger(ar,ax);
ay.trigger(ar+ax.direction,ax);
var az=W.isVertical(ax.direction);
if((ay.options.dragBlockVertical&&az)||(ay.options.dragBlockHorizontal&&!az)){ax.preventDefault()
}break;
case p:if(aq&&ax.changedLength<=ay.options.dragMaxTouches){ay.trigger(ar+"end",ax);
aq=false
}break;
case C:aq=false;
break
}}M.gestures.Drag={name:ar,index:50,handler:at,defaults:{dragMinDistance:10,dragDistanceCorrection:true,dragMaxTouches:1,dragBlockHorizontal:false,dragBlockVertical:false,dragLockToAxis:false,dragLockMinDistance:25}}
})("drag");
M.gestures.Gesture={name:"gesture",index:1337,handler:function am(aq,ar){ar.trigger(this.name,aq)
}};
(function(aq){var at;
function ar(av,aw){var au=aw.options,ax=s.current;
switch(av.eventType){case x:clearTimeout(at);
ax.name=aq;
at=setTimeout(function(){if(ax&&ax.name==aq){aw.trigger(aq,av)
}},au.holdTimeout);
break;
case L:if(av.distance>au.holdThreshold){clearTimeout(at)
}break;
case p:clearTimeout(at);
break
}}M.gestures.Hold={name:aq,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:ar}
})("hold");
M.gestures.Release={name:"release",index:Infinity,handler:function am(aq,ar){if(aq.eventType==p){ar.trigger(this.name,aq)
}}};
M.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:0.6,swipeVelocityY:0.6},handler:function ap(ar,at){if(ar.eventType==p){var au=ar.touches.length,aq=at.options;
if(au<aq.swipeMinTouches||au>aq.swipeMaxTouches){return
}if(ar.velocityX>aq.swipeVelocityX||ar.velocityY>aq.swipeVelocityY){at.trigger(this.name,ar);
at.trigger(this.name+ar.direction,ar)
}}}};
(function(at){var ar=false;
function aq(ay,az){var aw=az.options,aA=s.current,ax=s.previous,av,au;
switch(ay.eventType){case x:ar=false;
break;
case L:ar=ar||(ay.distance>aw.tapMaxDistance);
break;
case C:if(!W.inStr(ay.srcEvent.type,"cancel")&&ay.deltaTime<aw.tapMaxTime&&!ar){av=ax&&ax.lastEvent&&ay.timeStamp-ax.lastEvent.timeStamp;
au=false;
if(ax&&ax.name==at&&(av&&av<aw.doubleTapInterval)&&ay.distance<aw.doubleTapDistance){az.trigger("doubletap",ay);
au=true
}if(!au||aw.tapAlways){aA.name=at;
az.trigger(aA.name,ay)
}}break
}}M.gestures.Tap={name:at,index:100,handler:aq,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:true,doubleTapDistance:20,doubleTapInterval:300}}
})("tap");
M.gestures.Touch={name:"touch",index:-Infinity,defaults:{preventDefault:false,preventMouse:false},handler:function m(aq,ar){if(ar.options.preventMouse&&aq.pointerType==ag){aq.stopDetect();
return
}if(ar.options.preventDefault){aq.preventDefault()
}if(aq.eventType==T){ar.trigger("touch",aq)
}}};
(function(ar){var aq=false;
function at(av,aw){switch(av.eventType){case x:aq=false;
break;
case L:if(av.touches.length<2){return
}var au=Math.abs(1-av.scale);
var ax=Math.abs(av.rotation);
if(au<aw.options.transformMinScale&&ax<aw.options.transformMinRotation){return
}s.current.name=ar;
if(!aq){aw.trigger(ar+"start",av);
aq=true
}aw.trigger(ar,av);
if(ax>aw.options.transformMinRotation){aw.trigger("rotate",av)
}if(au>aw.options.transformMinScale){aw.trigger("pinch",av);
aw.trigger("pinch"+(av.scale<1?"in":"out"),av)
}break;
case p:if(aq&&av.changedLength<2){aw.trigger(ar+"end",av);
aq=false
}break
}}M.gestures.Transform={name:ar,index:45,defaults:{transformMinScale:0.01,transformMinRotation:1},handler:at}
})("transform");
if(typeof e=="function"&&e.amd){e("hammer",[],function(){return M
})
}else{if(typeof module!=="undefined"&&module.exports){module.exports=M
}else{Z.Hammer=M
}}})(window);
(function(g){function i(k,m,l){return k.addEventListener?k.addEventListener(m,l,!1):k.attachEvent?k.attachEvent("on"+m,l):void 0
}function h(k,m){var l,o;
for(l=0,o=k.length;
o>l;
l++){if(k[l]===m){return !0
}}return !1
}function j(k,m){var l;
k.createTextRange?(l=k.createTextRange(),l.move("character",m),l.select()):k.selectionStart&&(k.focus(),k.setSelectionRange(m,m))
}function f(k,m){try{return k.type=m,!0
}catch(l){return !1
}}g.Placeholders={Utils:{addEventListener:i,inArray:h,moveCaret:j,changeType:f}}
})(this),function(av){function aK(){}function ax(){try{return document.activeElement
}catch(f){}}function aB(h,j){var i,k,f=!!j&&h.value!==j,g=h.value===h.getAttribute(O);
return(f||g)&&"true"===h.getAttribute(ak)?(h.removeAttribute(ak),h.value=h.value.replace(h.getAttribute(O),""),h.className=h.className.replace(Y,""),k=h.getAttribute(ai),parseInt(k,10)>=0&&(h.setAttribute("maxLength",k),h.removeAttribute(ai)),i=h.getAttribute(Z),i&&(h.type=i),!0):!1
}function aO(f){var h,g,i=f.getAttribute(O);
return""===f.value&&i?(f.setAttribute(ak,"true"),f.value=i,f.className+=" "+af,g=f.getAttribute(ai),g||(f.setAttribute(ai,f.maxLength),f.removeAttribute("maxLength")),h=f.getAttribute(Z),h?f.type="text":"password"===f.type&&ab.changeType(f,"text")&&f.setAttribute(Z,"password"),!0):!1
}function au(s,m){var f,h,p,q,k,j,g;
if(s&&s.getAttribute(O)){m(s)
}else{for(p=s?s.getElementsByTagName("input"):aN,q=s?s.getElementsByTagName("textarea"):aJ,f=p?p.length:0,h=q?q.length:0,g=0,j=f+h;
j>g;
g++){k=f>g?p[g]:q[g-f],m(k)
}}}function aG(f){au(f,aB)
}function aD(f){au(f,aO)
}function aA(f){return function(){aC&&f.value===f.getAttribute(O)&&"true"===f.getAttribute(ak)?ab.moveCaret(f,0):aB(f)
}
}function aM(f){return function(){aO(f)
}
}function aw(f){return function(g){return an=f.value,"true"===f.getAttribute(ak)&&an===f.getAttribute(O)&&ab.inArray(al,g.keyCode)?(g.preventDefault&&g.preventDefault(),!1):void 0
}
}function aL(f){return function(){aB(f,an),""===f.value&&(f.blur(),ab.moveCaret(f,0))
}
}function aI(f){return function(){f===ax()&&f.value===f.getAttribute(O)&&"true"===f.getAttribute(ak)&&ab.moveCaret(f,0)
}
}function at(f){return function(){aG(f)
}
}function az(f){f.form&&(W=f.form,"string"==typeof W&&(W=document.getElementById(W)),W.getAttribute(Q)||(ab.addEventListener(W,"submit",at(W)),W.setAttribute(Q,"true"))),ab.addEventListener(f,"focus",aA(f)),ab.addEventListener(f,"blur",aM(f)),aC&&(ab.addEventListener(f,"keydown",aw(f)),ab.addEventListener(f,"keyup",aL(f)),ab.addEventListener(f,"click",aI(f))),f.setAttribute(aF,"true"),f.setAttribute(O,aq),(aC||f!==ax())&&aO(f)
}var aN,aJ,aC,aH,an,ap,aj,aq,ac,W,aa,X,ar,am=["text","search","url","tel","email","password","number","textarea"],al=[27,33,34,35,36,37,38,39,40,8,46],aE="#ccc",af="placeholdersjs",Y=RegExp("(?:^|\\s)"+af+"(?!\\S)"),O="data-placeholder-value",ak="data-placeholder-active",Z="data-placeholder-type",Q="data-placeholder-submit",aF="data-placeholder-bound",ay="data-placeholder-focus",ao="data-placeholder-live",ai="data-placeholder-maxlength",ah=document.createElement("input"),ag=document.getElementsByTagName("head")[0],ae=document.documentElement,ad=av.Placeholders,ab=ad.Utils;
if(ad.nativeSupport=void 0!==ah.placeholder,!ad.nativeSupport){for(aN=document.getElementsByTagName("input"),aJ=document.getElementsByTagName("textarea"),aC="false"===ae.getAttribute(ay),aH="false"!==ae.getAttribute(ao),ap=document.createElement("style"),ap.type="text/css",aj=document.createTextNode("."+af+" { color:"+aE+"; }"),ap.styleSheet?ap.styleSheet.cssText=aj.nodeValue:ap.appendChild(aj),ag.insertBefore(ap,ag.firstChild),ar=0,X=aN.length+aJ.length;
X>ar;
ar++){aa=aN.length>ar?aN[ar]:aJ[ar-aN.length],aq=aa.attributes.placeholder,aq&&(aq=aq.nodeValue,aq&&ab.inArray(am,aa.type)&&az(aa))
}ac=setInterval(function(){for(ar=0,X=aN.length+aJ.length;
X>ar;
ar++){aa=aN.length>ar?aN[ar]:aJ[ar-aN.length],aq=aa.attributes.placeholder,aq?(aq=aq.nodeValue,aq&&ab.inArray(am,aa.type)&&(aa.getAttribute(aF)||az(aa),(aq!==aa.getAttribute(O)||"password"===aa.type&&!aa.getAttribute(Z))&&("password"===aa.type&&!aa.getAttribute(Z)&&ab.changeType(aa,"text")&&aa.setAttribute(Z,"password"),aa.value===aa.getAttribute(O)&&(aa.value=aq),aa.setAttribute(O,aq)))):aa.getAttribute(ak)&&(aB(aa),aa.removeAttribute(O))
}aH||clearInterval(ac)
},100)
}ab.addEventListener(av,"beforeunload",function(){ad.disable()
}),ad.disable=ad.nativeSupport?aK:aG,ad.enable=ad.nativeSupport?aK:aD
}(this);
(function(g){function i(k,m,l){return k.addEventListener?k.addEventListener(m,l,!1):k.attachEvent?k.attachEvent("on"+m,l):void 0
}function h(k,m){var l,o;
for(l=0,o=k.length;
o>l;
l++){if(k[l]===m){return !0
}}return !1
}function j(k,m){var l;
k.createTextRange?(l=k.createTextRange(),l.move("character",m),l.select()):k.selectionStart&&(k.focus(),k.setSelectionRange(m,m))
}function f(k,m){try{return k.type=m,!0
}catch(l){return !1
}}g.Placeholders={Utils:{addEventListener:i,inArray:h,moveCaret:j,changeType:f}}
})(this),function(av){function aK(){}function ax(){try{return document.activeElement
}catch(f){}}function aB(h,j){var i,k,f=!!j&&h.value!==j,g=h.value===h.getAttribute(M);
return(f||g)&&"true"===h.getAttribute(aa)?(h.removeAttribute(aa),h.value=h.value.replace(h.getAttribute(M),""),h.className=h.className.replace(Y,""),k=h.getAttribute(ao),parseInt(k,10)>=0&&(h.setAttribute("maxLength",k),h.removeAttribute(ao)),i=h.getAttribute(ak),i&&(h.type=i),!0):!1
}function aO(f){var h,g,i=f.getAttribute(M);
return""===f.value&&i?(f.setAttribute(aa,"true"),f.value=i,f.className+=" "+af,g=f.getAttribute(ao),g||(f.setAttribute(ao,f.maxLength),f.removeAttribute("maxLength")),h=f.getAttribute(ak),h?f.type="text":"password"===f.type&&ad.changeType(f,"text")&&f.setAttribute(ak,"password"),!0):!1
}function au(s,m){var f,h,p,q,k,j,g;
if(s&&s.getAttribute(M)){m(s)
}else{for(p=s?s.getElementsByTagName("input"):aJ,q=s?s.getElementsByTagName("textarea"):aH,f=p?p.length:0,h=q?q.length:0,g=0,j=f+h;
j>g;
g++){k=f>g?p[g]:q[g-f],m(k)
}}}function aG(f){au(f,aB)
}function aD(f){au(f,aO)
}function aA(f){return function(){aN&&f.value===f.getAttribute(M)&&"true"===f.getAttribute(aa)?ad.moveCaret(f,0):aB(f)
}
}function aM(f){return function(){aO(f)
}
}function aw(f){return function(g){return an=f.value,"true"===f.getAttribute(aa)&&an===f.getAttribute(M)&&ad.inArray(al,g.keyCode)?(g.preventDefault&&g.preventDefault(),!1):void 0
}
}function aL(f){return function(){aB(f,an),""===f.value&&(f.blur(),ad.moveCaret(f,0))
}
}function at(f){return function(){f===ax()&&f.value===f.getAttribute(M)&&"true"===f.getAttribute(aa)&&ad.moveCaret(f,0)
}
}function aI(f){return function(){aG(f)
}
}function az(f){f.form&&(W=f.form,"string"==typeof W&&(W=document.getElementById(W)),W.getAttribute(O)||(ad.addEventListener(W,"submit",aI(W)),W.setAttribute(O,"true"))),ad.addEventListener(f,"focus",aA(f)),ad.addEventListener(f,"blur",aM(f)),aN&&(ad.addEventListener(f,"keydown",aw(f)),ad.addEventListener(f,"keyup",aL(f)),ad.addEventListener(f,"click",at(f))),f.setAttribute(aF,"true"),f.setAttribute(M,aq),(aN||f!==ax())&&aO(f)
}var aJ,aH,aN,aC,an,ap,aj,aq,ac,W,X,ab,ar,am=["text","search","url","tel","email","password","number","textarea"],al=[27,33,34,35,36,37,38,39,40,8,46],aE="#ccc",af="placeholdersjs",Y=RegExp("(?:^|\\s)"+af+"(?!\\S)"),M="data-placeholder-value",aa="data-placeholder-active",ak="data-placeholder-type",O="data-placeholder-submit",aF="data-placeholder-bound",ay="data-placeholder-focus",Z="data-placeholder-live",ao="data-placeholder-maxlength",ai=document.createElement("input"),ah=document.getElementsByTagName("head")[0],ag=document.documentElement,ae=av.Placeholders,ad=ae.Utils;
if(ae.nativeSupport=void 0!==ai.placeholder,!ae.nativeSupport){for(aJ=document.getElementsByTagName("input"),aH=document.getElementsByTagName("textarea"),aN="false"===ag.getAttribute(ay),aC="false"!==ag.getAttribute(Z),ap=document.createElement("style"),ap.type="text/css",aj=document.createTextNode("."+af+" { color:"+aE+"; }"),ap.styleSheet?ap.styleSheet.cssText=aj.nodeValue:ap.appendChild(aj),ah.insertBefore(ap,ah.firstChild),ar=0,ab=aJ.length+aH.length;
ab>ar;
ar++){X=aJ.length>ar?aJ[ar]:aH[ar-aJ.length],aq=X.attributes.placeholder,aq&&(aq=aq.nodeValue,aq&&ad.inArray(am,X.type)&&az(X))
}ac=setInterval(function(){for(ar=0,ab=aJ.length+aH.length;
ab>ar;
ar++){X=aJ.length>ar?aJ[ar]:aH[ar-aJ.length],aq=X.attributes.placeholder,aq?(aq=aq.nodeValue,aq&&ad.inArray(am,X.type)&&(X.getAttribute(aF)||az(X),(aq!==X.getAttribute(M)||"password"===X.type&&!X.getAttribute(ak))&&("password"===X.type&&!X.getAttribute(ak)&&ad.changeType(X,"text")&&X.setAttribute(ak,"password"),X.value===X.getAttribute(M)&&(X.value=aq),X.setAttribute(M,aq)))):X.getAttribute(aa)&&(aB(X),X.removeAttribute(M))
}aC||clearInterval(ac)
},100)
}ad.addEventListener(av,"beforeunload",function(){ae.disable()
}),ae.disable=ae.nativeSupport?aK:aG,ae.enable=ae.nativeSupport?aK:aD
}(this),function(f){var h=f.fn.val,g=f.fn.prop;
Placeholders.nativeSupport||(f.fn.val=function(i){var j=h.apply(this,arguments),k=this.eq(0).data("placeholder-value");
return void 0===i&&this.eq(0).data("placeholder-active")&&j===k?"":j
},f.fn.prop=function(i,j){return void 0===j&&this.eq(0).data("placeholder-active")&&"value"===i?"":g.apply(this,arguments)
})
}(jQuery);
e("placeholders",function(){});
(function(o,i){if(o.fn.dotdotdot){return
}o.fn.dotdotdot=function(D){if(this.length==0){o.fn.dotdotdot.debug('No element found for "'+this.selector+'".');
return this
}if(this.length>1){return this.each(function(){o(this).dotdotdot(D)
})
}var z=this;
if(z.data("dotdotdot")){z.trigger("destroy.dot")
}z.data("dotdotdot-style",z.attr("style")||"");
z.css("word-wrap","break-word");
if(z.css("white-space")==="nowrap"){z.css("white-space","normal")
}z.bind_events=function(){z.bind("update.dot",function(G,I){G.preventDefault();
G.stopPropagation();
B.maxHeight=(typeof B.height=="number")?B.height:w(z);
B.maxHeight+=B.tolerance;
if(typeof I!="undefined"){if(typeof I=="string"||("nodeType" in I&&I.nodeType===1)){I=o("<div />").append(I).contents()
}if(I instanceof o){E=I
}}A=z.wrapInner('<div class="dotdotdot" />').children();
A.contents().detach().end().append(E.clone(true)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});
var H=false,F=false;
if(y.afterElement){H=y.afterElement.clone(true);
H.show();
y.afterElement.detach()
}if(r(A,B)){if(B.wrap=="children"){F=h(A,B,H)
}else{F=u(A,z,A,B,H)
}}A.replaceWith(A.contents());
A=null;
if(o.isFunction(B.callback)){B.callback.call(z[0],F,E)
}y.isTruncated=F;
return F
}).bind("isTruncated.dot",function(G,F){G.preventDefault();
G.stopPropagation();
if(typeof F=="function"){F.call(z[0],y.isTruncated)
}return y.isTruncated
}).bind("originalContent.dot",function(G,F){G.preventDefault();
G.stopPropagation();
if(typeof F=="function"){F.call(z[0],E)
}return E
}).bind("destroy.dot",function(F){F.preventDefault();
F.stopPropagation();
z.unwatch().unbind_events().contents().detach().end().append(E).attr("style",z.data("dotdotdot-style")||"").data("dotdotdot",false)
});
return z
};
z.unbind_events=function(){z.unbind(".dot");
return z
};
z.watch=function(){z.unwatch();
if(B.watch=="window"){var H=o(window),G=H.width(),F=H.height();
H.bind("resize.dot"+y.dotId,function(){if(G!=H.width()||F!=H.height()||!B.windowResizeFix){G=H.width();
F=H.height();
if(x){clearInterval(x)
}x=setTimeout(function(){z.trigger("update.dot")
},100)
}})
}else{C=q(z);
x=setInterval(function(){if(z.is(":visible")){var I=q(z);
if(C.width!=I.width||C.height!=I.height){z.trigger("update.dot");
C=I
}}},500)
}return z
};
z.unwatch=function(){o(window).unbind("resize.dot"+y.dotId);
if(x){clearInterval(x)
}return z
};
var E=z.contents(),B=o.extend(true,{},o.fn.dotdotdot.defaults,D),y={},C={},x=null,A=null;
if(!(B.lastCharacter.remove instanceof Array)){B.lastCharacter.remove=o.fn.dotdotdot.defaultArrays.lastCharacter.remove
}if(!(B.lastCharacter.noEllipsis instanceof Array)){B.lastCharacter.noEllipsis=o.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis
}y.afterElement=g(B.after,z);
y.isTruncated=false;
y.dotId=s++;
z.data("dotdotdot",true).bind_events().trigger("update.dot");
if(B.watch){z.watch()
}return z
};
o.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:true,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:false,windowResizeFix:true};
o.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","\u3000",",",";",".","!","?"],noEllipsis:[]}};
o.fn.dotdotdot.debug=function(x){};
var s=1;
function h(A,E,D){var C=A.children(),x=false;
A.empty();
for(var z=0,y=C.length;
z<y;
z++){var B=C.eq(z);
A.append(B);
if(D){A.append(D)
}if(r(A,E)){B.remove();
x=true;
break
}else{if(D){D.detach()
}}}return x
}function u(y,z,E,D,C){var x=false;
var B="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style";
var A="script, .dotdotdot-keep";
y.contents().detach().each(function(){var G=this,F=o(G);
if(typeof G=="undefined"||(G.nodeType==3&&o.trim(G.data).length==0)){return true
}else{if(F.is(A)){y.append(F)
}else{if(x){return true
}else{y.append(F);
if(C&&!F.is(D.after)&&!F.find(D.after).length){y[y.is(B)?"after":"append"](C)
}if(r(E,D)){if(G.nodeType==3){x=j(F,z,E,D,C)
}else{x=u(F,z,E,D,C)
}if(!x){F.detach();
x=true
}}if(!x){if(C){C.detach()
}}}}}});
return x
}function j(z,B,M,C,y){var J=z[0];
if(!J){return false
}var F=n(J),x=(F.indexOf(" ")!==-1)?" ":"\u3000",H=(C.wrap=="letter")?"":x,K=F.split(H),G=-1,N=-1,I=0,A=K.length-1;
if(C.fallbackToLetter&&I==0&&A==0){H="";
K=F.split(H);
A=K.length-1
}while(I<=A&&!(I==0&&A==0)){var D=Math.floor((I+A)/2);
if(D==N){break
}N=D;
f(J,K.slice(0,N+1).join(H)+C.ellipsis);
if(!r(M,C)){G=N;
I=N
}else{A=N;
if(C.fallbackToLetter&&I==0&&A==0){H="";
K=K[0].split(H);
G=-1;
N=-1;
I=0;
A=K.length-1
}}}if(G!=-1&&!(K.length==1&&K[0].length==0)){F=l(K.slice(0,G+1).join(H),C);
f(J,F)
}else{var E=z.parent();
z.detach();
var L=(y&&y.closest(E).length)?y.length:0;
if(E.contents().length>L){J=k(E.contents().eq(-1-L),B)
}else{J=k(E,B,true);
if(!L){E.detach()
}}if(J){F=l(n(J),C);
f(J,F);
if(L&&y){o(J).parent().append(y)
}}}return true
}function r(y,x){return y.innerHeight()>x.maxHeight
}function l(x,y){while(o.inArray(x.slice(-1),y.lastCharacter.remove)>-1){x=x.slice(0,-1)
}if(o.inArray(x.slice(-1),y.lastCharacter.noEllipsis)<0){x+=y.ellipsis
}return x
}function q(x){return{width:x.innerWidth(),height:x.innerHeight()}
}function f(y,x){if(y.innerText){y.innerText=x
}else{if(y.nodeValue){y.nodeValue=x
}else{if(y.textContent){y.textContent=x
}}}}function n(x){if(x.innerText){return x.innerText
}else{if(x.nodeValue){return x.nodeValue
}else{if(x.textContent){return x.textContent
}else{return""
}}}}function p(x){do{x=x.previousSibling
}while(x&&x.nodeType!==1&&x.nodeType!==3);
return x
}function k(y,B,x){var A=y&&y[0],z;
if(A){if(!x){if(A.nodeType===3){return A
}if(o.trim(y.text())){return k(y.contents().last(),B)
}}z=p(A);
while(!z){y=y.parent();
if(y.is(B)||!y.length){return false
}z=p(y[0])
}if(z){return k(o(z),B)
}}return false
}function g(x,y){if(!x){return false
}if(typeof x==="string"){x=o(x,y);
return(x.length)?x:false
}return !x.jquery?false:x
}function w(B){var C=B.innerHeight(),A=["paddingTop","paddingBottom"];
for(var D=0,y=A.length;
D<y;
D++){var x=parseInt(B.css(A[D]),10);
if(isNaN(x)){x=0
}C-=x
}return C
}var v=o.fn.html;
o.fn.html=function(x){if(x!=i&&!o.isFunction(x)&&this.data("dotdotdot")){return this.trigger("update",[x])
}return v.apply(this,arguments)
};
var m=o.fn.text;
o.fn.text=function(x){if(x!=i&&!o.isFunction(x)&&this.data("dotdotdot")){x=o("<div />").text(x).html();
return this.trigger("update",[x])
}return m.apply(this,arguments)
}
})(jQuery);
e("jquerydotdotdot",function(){});
(function(k){var f=-1,j=-1;
var i=function(p){var l=1,n=k(p),m=null,o=[];
n.each(function(){var q=k(this),s=q.offset().top-h(q.css("margin-top")),r=o.length>0?o[o.length-1]:null;
if(r===null){o.push(q)
}else{if(Math.floor(Math.abs(m-s))<=l){o[o.length-1]=r.add(q)
}else{o.push(q)
}}m=s
});
return o
};
var h=function(l){return parseFloat(l)||0
};
k.fn.matchHeight=function(m){if(m==="remove"){var l=this;
this.css("height","");
k.each(k.fn.matchHeight._groups,function(n,o){o.elements=o.elements.not(l)
});
return this
}if(this.length<=1){return this
}m=(typeof m!=="undefined")?m:true;
k.fn.matchHeight._groups.push({elements:this,byRow:m});
k.fn.matchHeight._apply(this,m);
return this
};
k.fn.matchHeight._groups=[];
k.fn.matchHeight._throttle=80;
k.fn.matchHeight._maintainScroll=false;
k.fn.matchHeight._apply=function(p,r){var n=k(p),o=[n];
var q=k(window).scrollTop(),m=k("html").outerHeight(true);
var l=n.parents().filter(":hidden");
l.css("display","block");
if(r){n.each(function(){var s=k(this),u=s.css("display")==="inline-block"?"inline-block":"block";
s.data("style-cache",s.attr("style"));
s.css({display:u,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})
});
o=i(n);
n.each(function(){var s=k(this);
s.attr("style",s.data("style-cache")||"").css("height","")
})
}k.each(o,function(u,w){var s=k(w),v=0;
if(r&&s.length<=1){return
}s.each(function(){var x=k(this),y=x.css("display")==="inline-block"?"inline-block":"block";
x.css({display:y,height:""});
if(x.outerHeight(false)>v){v=x.outerHeight(false)
}x.css("display","")
});
s.each(function(){var y=k(this),x=0;
if(y.css("box-sizing")!=="border-box"){x+=h(y.css("border-top-width"))+h(y.css("border-bottom-width"));
x+=h(y.css("padding-top"))+h(y.css("padding-bottom"))
}y.css("height",v-x)
})
});
l.css("display","");
if(k.fn.matchHeight._maintainScroll){k(window).scrollTop((q/m)*k("html").outerHeight(true))
}return this
};
k.fn.matchHeight._applyDataApi=function(){var l={};
k("[data-match-height], [data-mh]").each(function(){var n=k(this),m=n.attr("data-match-height")||n.attr("data-mh");
if(m in l){l[m]=l[m].add(n)
}else{l[m]=n
}});
k.each(l,function(){this.matchHeight(true)
})
};
var g=function(){k.each(k.fn.matchHeight._groups,function(){k.fn.matchHeight._apply(this.elements,this.byRow)
})
};
k.fn.matchHeight._update=function(n,m){if(m&&m.type==="resize"){var l=k(window).width();
if(l===f){return
}f=l
}if(!n){g()
}else{if(j===-1){j=setTimeout(function(){g();
j=-1
},k.fn.matchHeight._throttle)
}}};
k(k.fn.matchHeight._applyDataApi);
k(window).bind("load",function(l){k.fn.matchHeight._update()
});
k(window).bind("resize orientationchange",function(l){k.fn.matchHeight._update(true,l)
})
})(jQuery);
e("matchHeight",function(){});
e("gridMatchHeight",["require","jquery","lodash","matchHeight"],function(h){var k=h("jquery");
var g=h("lodash");
var f=h("matchHeight");
var j;
var i={wrapper:"equal-height",items:"equal-height-watch"};
var l=function(){j=k("."+i.wrapper);
g.each(j,function(m){k(m).find("."+i.items).matchHeight(true)
})
};
return{init:function(){l()
}}
});
e("breakpoints",["jquery","lodash","modernizr"],function(j,q,g){var k={baseline:0,medium:"720",large:"1280"};
var p="px";
var o=function(u,s){var r="";
r+="screen and (min-width: "+u+p+")";
if(!q.isUndefined(s)){r+="and (max-width: "+(s-1)+p+")"
}return r
};
var h=function(){var r=g.mq(o(k.baseline,k.medium));
if(j("html").hasClass("less-than-ie9")){r=false
}return r
};
var l=function(){var r=g.mq(o(k.medium,k.large));
if(j("html").hasClass("less-than-ie9")){r=false
}return r
};
var n=function(){var r=g.mq(o(k.large));
if(j("html").hasClass("less-than-ie9")){r=true
}return r
};
var m=function(){var r=g.mq(o(k.baseline));
if(j("html").hasClass("less-than-ie9")){r=true
}return r
};
var f=function(){var r=g.mq(o(k.medium));
if(j("html").hasClass("less-than-ie9")){r=true
}return r
};
var i=function(){var r=g.mq(o(k.large));
if(j("html").hasClass("less-than-ie9")){r=true
}return r
};
return{isSmall:h,isMedium:l,isLarge:n,isSmallUp:m,isMediumUp:f,isLargeUp:i}
});
e("tables",["require","jquery","lodash","breakpoints"],function(f){var l=f("jquery");
var q=f("lodash");
var n=f("breakpoints");
var r=false;
var m;
var i={wrapper:"table-wrapper",table:"table-responsive",pinned:"pinned",scrollable:"scrollable"};
var o=function(s){s.wrap('<div class="'+i.wrapper+'" />');
var u=s.clone();
u.find("td:not(:first-child), th:not(:first-child)").css("display","none");
u.removeClass(i.table);
s.closest("."+i.wrapper).append(u);
u.wrap('<div class="'+i.pinned+'" />');
s.wrap('<div class="'+i.scrollable+'" />');
p(s,u)
};
var h=function(s){s.closest("."+i.wrapper).find("."+i.pinned).remove();
s.unwrap();
s.unwrap();
var u=s.find("tr");
q.each(u,function(v){l(v).height("auto")
})
};
var p=function(s,x){var w=s.find("tr");
var u=x.find("tr");
var v=[];
w.each(function(A){var z=l(this);
var y=z.find("th, td");
y.each(function(){var B=l(this).outerHeight(true);
v[A]=v[A]||0;
if(B>v[A]){v[A]=B
}});
z.height(v[A])
});
u.each(function(y){l(this).height(v[y])
})
};
var k=function(){if(!n.isLargeUp()&&!r){r=true;
m.each(function(u,s){o(l(s))
});
return true
}else{if(r&&n.isLargeUp()){r=false;
m.each(function(u,s){h(l(s))
})
}}};
var j=function(){l(window).on("redraw",function(){r=false;
k()
});
l(window).on("resize",k)
};
var g=function(s){m=s;
k();
j()
};
return{init:function(s){if(s.length>0){g(s)
}}}
});
/*! jQuery plugin for Hammer.JS - v1.1.3 - 2014-05-20
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(aa,q){var N=function N(at,ar){return new N.Instance(at,ar||{})
};
N.VERSION="1.1.3";
N.defaults={behavior:{userSelect:"none",touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};
N.DOCUMENT=document;
N.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled;
N.HAS_TOUCHEVENTS=("ontouchstart" in aa);
N.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);
N.NO_MOUSEEVENTS=(N.HAS_TOUCHEVENTS&&N.IS_MOBILE)||N.HAS_POINTEREVENTS;
N.CALCULATE_INTERVAL=25;
var R={};
var J=N.DIRECTION_DOWN="down";
var E=N.DIRECTION_LEFT="left";
var aj=N.DIRECTION_UP="up";
var P=N.DIRECTION_RIGHT="right";
var ah=N.POINTER_MOUSE="mouse";
var h=N.POINTER_TOUCH="touch";
var y=N.POINTER_PEN="pen";
var x=N.EVENT_START="start";
var M=N.EVENT_MOVE="move";
var C=N.EVENT_END="end";
var p=N.EVENT_RELEASE="release";
var U=N.EVENT_TOUCH="touch";
N.READY=false;
N.plugins=N.plugins||{};
N.gestures=N.gestures||{};
function k(){if(N.READY){return
}W.determineEventTypes();
X.each(N.gestures,function(ar){s.register(ar)
});
W.onTouch(N.DOCUMENT,M,s.detect);
W.onTouch(N.DOCUMENT,C,s.detect);
N.READY=true
}var X=N.utils={extend:function o(ar,au,av){for(var at in au){if(!au.hasOwnProperty(at)||(ar[at]!==q&&av)){continue
}ar[at]=au[at]
}return ar
},on:function Q(ar,au,at){ar.addEventListener(au,at,false)
},off:function ab(ar,au,at){ar.removeEventListener(au,at,false)
},each:function af(aw,av,au){var at,ar;
if("forEach" in aw){aw.forEach(av,au)
}else{if(aw.length!==q){for(at=0,ar=aw.length;
at<ar;
at++){if(av.call(au,aw[at],at,aw)===false){return
}}}else{for(at in aw){if(aw.hasOwnProperty(at)&&av.call(au,aw[at],at,aw)===false){return
}}}}},inStr:function Z(at,ar){return at.indexOf(ar)>-1
},inArray:function al(aw,av){if(aw.indexOf){var at=aw.indexOf(av);
return(at===-1)?false:at
}else{for(var au=0,ar=aw.length;
au<ar;
au++){if(aw[au]===av){return au
}}return false
}},toArray:function F(ar){return Array.prototype.slice.call(ar,0)
},hasParent:function ak(at,ar){while(at){if(at==ar){return true
}at=at.parentNode
}return false
},getCenter:function O(ay){var aw=[],au=[],ax=[],av=[],at=Math.min,ar=Math.max;
if(ay.length===1){return{pageX:ay[0].pageX,pageY:ay[0].pageY,clientX:ay[0].clientX,clientY:ay[0].clientY}
}X.each(ay,function(az){aw.push(az.pageX);
au.push(az.pageY);
ax.push(az.clientX);
av.push(az.clientY)
});
return{pageX:(at.apply(Math,aw)+ar.apply(Math,aw))/2,pageY:(at.apply(Math,au)+ar.apply(Math,au))/2,clientX:(at.apply(Math,ax)+ar.apply(Math,ax))/2,clientY:(at.apply(Math,av)+ar.apply(Math,av))/2}
},getVelocity:function f(au,at,ar){return{x:Math.abs(at/au)||0,y:Math.abs(ar/au)||0}
},getAngle:function v(au,at){var ar=at.clientX-au.clientX,av=at.clientY-au.clientY;
return Math.atan2(av,ar)*180/Math.PI
},getDirection:function r(au,at){var ar=Math.abs(au.clientX-at.clientX),av=Math.abs(au.clientY-at.clientY);
if(ar>=av){return au.clientX-at.clientX>0?E:P
}return au.clientY-at.clientY>0?aj:J
},getDistance:function u(au,at){var ar=at.clientX-au.clientX,av=at.clientY-au.clientY;
return Math.sqrt((ar*ar)+(av*av))
},getScale:function L(at,ar){if(at.length>=2&&ar.length>=2){return this.getDistance(ar[0],ar[1])/this.getDistance(at[0],at[1])
}return 1
},getRotation:function G(at,ar){if(at.length>=2&&ar.length>=2){return this.getAngle(ar[1],ar[0])-this.getAngle(at[1],at[0])
}return 0
},isVertical:function V(ar){return ar==aj||ar==J
},setPrefixedCss:function am(au,ay,aw,ar){var av=["","Webkit","Moz","O","ms"];
ay=X.toCamelCase(ay);
for(var at=0;
at<av.length;
at++){var ax=ay;
if(av[at]){ax=av[at]+ax.slice(0,1).toUpperCase()+ax.slice(1)
}if(ax in au.style){au.style[ax]=(ar==null||ar)&&aw||"";
break
}}},toggleBehavior:function Y(au,av,at){if(!av||!au||!au.style){return
}X.each(av,function(aw,ax){X.setPrefixedCss(au,ax,aw,at)
});
var ar=at&&function(){return false
};
if(av.userSelect=="none"){au.onselectstart=ar
}if(av.userDrag=="none"){au.ondragstart=ar
}},toCamelCase:function A(ar){return ar.replace(/[_-]([a-z])/g,function(at){return at[1].toUpperCase()
})
}};
N.Instance=function(au,at){var ar=this;
k();
this.element=au;
this.enabled=true;
X.each(at,function(aw,av){delete at[av];
at[X.toCamelCase(av)]=aw
});
this.options=X.extend(X.extend({},N.defaults),at||{});
if(this.options.behavior){X.toggleBehavior(this.element,this.options.behavior,true)
}this.eventStartHandler=W.onTouch(au,x,function(av){if(ar.enabled&&av.eventType==x){s.startDetect(ar,av)
}else{if(av.eventType==U){s.detect(av)
}}});
this.eventHandlers=[]
};
N.Instance.prototype={on:function ac(au,at){var ar=this;
W.on(ar.element,au,at,function(av){ar.eventHandlers.push({gesture:av,handler:at})
});
return ar
},off:function w(au,at){var ar=this;
W.off(ar.element,au,at,function(aw){var av=X.inArray({gesture:aw,handler:at});
if(av!==false){ar.eventHandlers.splice(av,1)
}});
return ar
},trigger:function ai(at,av){if(!av){av={}
}var au=N.DOCUMENT.createEvent("Event");
au.initEvent(at,true,true);
au.gesture=av;
var ar=this.element;
if(X.hasParent(av.target,ar)){ar=av.target
}ar.dispatchEvent(au);
return this
},enable:function j(ar){this.enabled=ar;
return this
},dispose:function I(){var ar,at;
X.toggleBehavior(this.element,this.options.behavior,false);
for(ar=-1;
(at=this.eventHandlers[++ar]);
){X.off(this.element,at.gesture,at.handler)
}this.eventHandlers=[];
W.off(this.element,R[x],this.eventStartHandler);
return null
}};
var W=N.event={preventMouseEvents:false,started:false,shouldDetect:false,on:function Q(at,av,au,aw){var ar=av.split(" ");
X.each(ar,function(ax){X.on(at,ax,au);
aw&&aw(ax)
})
},off:function ab(at,av,au,aw){var ar=av.split(" ");
X.each(ar,function(ax){X.off(at,ax,au);
aw&&aw(ax)
})
},onTouch:function T(au,at,av){var ar=this;
var aw=function aw(aA){var aB=aA.type.toLowerCase(),ax=N.HAS_POINTEREVENTS,az=X.inStr(aB,"mouse"),ay;
if(az&&ar.preventMouseEvents){return
}else{if(az&&at==x&&aA.button===0){ar.preventMouseEvents=false;
ar.shouldDetect=true
}else{if(ax&&at==x){ar.shouldDetect=(aA.buttons===1||i.matchType(h,aA))
}else{if(!az&&at==x){ar.preventMouseEvents=true;
ar.shouldDetect=true
}}}}if(ax&&at!=C){i.updatePointer(at,aA)
}if(ar.shouldDetect){ay=ar.doDetect.call(ar,aA,at,au,av)
}if(ay==C){ar.preventMouseEvents=false;
ar.shouldDetect=false;
i.reset()
}if(ax&&at==C){i.updatePointer(at,aA)
}};
this.on(au,R[at],aw);
return aw
},doDetect:function ao(ay,at,aw,aA){var ar=this.getTouchList(ay,at);
var aB=ar.length;
var au=at;
var av=ar.trigger;
var az=aB;
if(at==x){av=U
}else{if(at==C){av=p;
az=ar.length-((ay.changedTouches)?ay.changedTouches.length:1)
}}if(az>0&&this.started){au=M
}this.started=true;
var ax=this.collectEventData(aw,au,ar,ay);
if(at!=C){aA.call(s,ax)
}if(av){ax.changedLength=az;
ax.eventType=av;
aA.call(s,ax);
ax.eventType=au;
delete ax.changedLength
}if(au==C){aA.call(s,ax);
this.started=false
}return au
},determineEventTypes:function ag(){var ar;
if(N.HAS_POINTEREVENTS){if(aa.PointerEvent){ar=["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]
}else{ar=["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]
}}else{if(N.NO_MOUSEEVENTS){ar=["touchstart","touchmove","touchend touchcancel"]
}else{ar=["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"]
}}R[x]=ar[0];
R[M]=ar[1];
R[C]=ar[2];
return R
},getTouchList:function B(av,au){if(N.HAS_POINTEREVENTS){return i.getTouchList()
}if(av.touches){if(au==M){return av.touches
}var ar=[];
var aw=[].concat(X.toArray(av.touches),X.toArray(av.changedTouches));
var at=[];
X.each(aw,function(ax){if(X.inArray(ar,ax.identifier)===false){at.push(ax)
}ar.push(ax.identifier)
});
return at
}av.identifier=1;
return[av]
},collectEventData:function ap(au,at,aw,av){var ar=h;
if(X.inStr(av.type,"mouse")||i.matchType(ah,av)){ar=ah
}else{if(i.matchType(y,av)){ar=y
}}return{center:X.getCenter(aw),timeStamp:Date.now(),target:av.target,touches:aw,eventType:at,pointerType:ar,srcEvent:av,preventDefault:function(){var ax=this.srcEvent;
ax.preventManipulation&&ax.preventManipulation();
ax.preventDefault&&ax.preventDefault()
},stopPropagation:function(){this.srcEvent.stopPropagation()
},stopDetect:function(){return s.stopDetect()
}}
}};
var i=N.PointerEvent={pointers:{},getTouchList:function B(){var ar=[];
X.each(this.pointers,function(at){ar.push(at)
});
return ar
},updatePointer:function ae(ar,at){if(ar==C||(ar!=C&&at.buttons!==1)){delete this.pointers[at.pointerId]
}else{at.identifier=at.pointerId;
this.pointers[at.pointerId]=at
}},matchType:function ad(ar,au){if(!au.pointerType){return false
}var av=au.pointerType,at={};
at[ah]=(av===(au.MSPOINTER_TYPE_MOUSE||ah));
at[h]=(av===(au.MSPOINTER_TYPE_TOUCH||h));
at[y]=(av===(au.MSPOINTER_TYPE_PEN||y));
return at[ar]
},reset:function D(){this.pointers={}
}};
var s=N.detection={gestures:[],current:null,previous:null,stopped:false,startDetect:function S(at,ar){if(this.current){return
}this.stopped=false;
this.current={inst:at,startEvent:X.extend({},ar),lastEvent:false,lastCalcEvent:false,futureCalcEvent:false,lastCalcData:{},name:""};
this.detect(ar)
},detect:function z(at){if(!this.current||this.stopped){return
}at=this.extendEventData(at);
var au=this.current.inst,av=au.options;
X.each(this.gestures,function ar(aw){if(!this.stopped&&au.enabled&&av[aw.name]){aw.handler.call(aw,at,au)
}},this);
if(this.current){this.current.lastEvent=at
}if(at.eventType==C){this.stopDetect()
}return at
},stopDetect:function g(){this.previous=X.extend({},this.current);
this.current=null;
this.stopped=true
},getCalculatedData:function n(az,at,ay,aw,av){var aA=this.current,ax=false,au=aA.lastCalcEvent,ar=aA.lastCalcData;
if(au&&az.timeStamp-au.timeStamp>N.CALCULATE_INTERVAL){at=au.center;
ay=az.timeStamp-au.timeStamp;
aw=az.center.clientX-au.center.clientX;
av=az.center.clientY-au.center.clientY;
ax=true
}if(az.eventType==U||az.eventType==p){aA.futureCalcEvent=az
}if(!aA.lastCalcEvent||ax){ar.velocity=X.getVelocity(ay,aw,av);
ar.angle=X.getAngle(at,az.center);
ar.direction=X.getDirection(at,az.center);
aA.lastCalcEvent=aA.futureCalcEvent||az;
aA.futureCalcEvent=az
}az.velocityX=ar.velocity.x;
az.velocityY=ar.velocity.y;
az.interimAngle=ar.angle;
az.interimDirection=ar.direction
},extendEventData:function K(aw){var ay=this.current,ax=ay.startEvent,av=ay.lastEvent||ax;
if(aw.eventType==U||aw.eventType==p){ax.touches=[];
X.each(aw.touches,function(az){ax.touches.push({clientX:az.clientX,clientY:az.clientY})
})
}var au=aw.timeStamp-ax.timeStamp,at=aw.center.clientX-ax.center.clientX,ar=aw.center.clientY-ax.center.clientY;
this.getCalculatedData(aw,av.center,au,at,ar);
X.extend(aw,{startEvent:ax,deltaTime:au,deltaX:at,deltaY:ar,distance:X.getDistance(ax.center,aw.center),angle:X.getAngle(ax.center,aw.center),direction:X.getDirection(ax.center,aw.center),scale:X.getScale(ax.touches,aw.touches),rotation:X.getRotation(ax.touches,aw.touches)});
return aw
},register:function l(at){var ar=at.defaults||{};
if(ar[at.name]===q){ar[at.name]=true
}X.extend(N.defaults,ar,true);
at.index=at.index||1000;
this.gestures.push(at);
this.gestures.sort(function(av,au){if(av.index<au.index){return -1
}if(av.index>au.index){return 1
}return 0
});
return this.gestures
}};
(function(at){var ar=false;
function au(ay,az){var aB=s.current;
if(az.options.dragMaxTouches>0&&ay.touches.length>az.options.dragMaxTouches){return
}switch(ay.eventType){case x:ar=false;
break;
case M:if(ay.distance<az.options.dragMinDistance&&aB.name!=at){return
}var av=aB.startEvent.center;
if(aB.name!=at){aB.name=at;
if(az.options.dragDistanceCorrection&&ay.distance>0){var aw=Math.abs(az.options.dragMinDistance/ay.distance);
av.pageX+=ay.deltaX*aw;
av.pageY+=ay.deltaY*aw;
av.clientX+=ay.deltaX*aw;
av.clientY+=ay.deltaY*aw;
ay=s.extendEventData(ay)
}}if(aB.lastEvent.dragLockToAxis||(az.options.dragLockToAxis&&az.options.dragLockMinDistance<=ay.distance)){ay.dragLockToAxis=true
}var ax=aB.lastEvent.direction;
if(ay.dragLockToAxis&&ax!==ay.direction){if(X.isVertical(ax)){ay.direction=(ay.deltaY<0)?aj:J
}else{ay.direction=(ay.deltaX<0)?E:P
}}if(!ar){az.trigger(at+"start",ay);
ar=true
}az.trigger(at,ay);
az.trigger(at+ay.direction,ay);
var aA=X.isVertical(ay.direction);
if((az.options.dragBlockVertical&&aA)||(az.options.dragBlockHorizontal&&!aA)){ay.preventDefault()
}break;
case p:if(ar&&ay.changedLength<=az.options.dragMaxTouches){az.trigger(at+"end",ay);
ar=false
}break;
case C:ar=false;
break
}}N.gestures.Drag={name:at,index:50,handler:au,defaults:{dragMinDistance:10,dragDistanceCorrection:true,dragMaxTouches:1,dragBlockHorizontal:false,dragBlockVertical:false,dragLockToAxis:false,dragLockMinDistance:25}}
})("drag");
N.gestures.Gesture={name:"gesture",index:1337,handler:function an(ar,at){at.trigger(this.name,ar)
}};
(function(ar){var au;
function at(aw,ax){var av=ax.options,ay=s.current;
switch(aw.eventType){case x:clearTimeout(au);
ay.name=ar;
au=setTimeout(function(){if(ay&&ay.name==ar){ax.trigger(ar,aw)
}},av.holdTimeout);
break;
case M:if(aw.distance>av.holdThreshold){clearTimeout(au)
}break;
case p:clearTimeout(au);
break
}}N.gestures.Hold={name:ar,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:at}
})("hold");
N.gestures.Release={name:"release",index:Infinity,handler:function an(ar,at){if(ar.eventType==p){at.trigger(this.name,ar)
}}};
N.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:0.6,swipeVelocityY:0.6},handler:function aq(at,au){if(at.eventType==p){var av=at.touches.length,ar=au.options;
if(av<ar.swipeMinTouches||av>ar.swipeMaxTouches){return
}if(at.velocityX>ar.swipeVelocityX||at.velocityY>ar.swipeVelocityY){au.trigger(this.name,at);
au.trigger(this.name+at.direction,at)
}}}};
(function(au){var at=false;
function ar(az,aA){var ax=aA.options,aB=s.current,ay=s.previous,aw,av;
switch(az.eventType){case x:at=false;
break;
case M:at=at||(az.distance>ax.tapMaxDistance);
break;
case C:if(!X.inStr(az.srcEvent.type,"cancel")&&az.deltaTime<ax.tapMaxTime&&!at){aw=ay&&ay.lastEvent&&az.timeStamp-ay.lastEvent.timeStamp;
av=false;
if(ay&&ay.name==au&&(aw&&aw<ax.doubleTapInterval)&&az.distance<ax.doubleTapDistance){aA.trigger("doubletap",az);
av=true
}if(!av||ax.tapAlways){aB.name=au;
aA.trigger(aB.name,az)
}}break
}}N.gestures.Tap={name:au,index:100,handler:ar,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:true,doubleTapDistance:20,doubleTapInterval:300}}
})("tap");
N.gestures.Touch={name:"touch",index:-Infinity,defaults:{preventDefault:false,preventMouse:false},handler:function m(ar,at){if(at.options.preventMouse&&ar.pointerType==ah){ar.stopDetect();
return
}if(at.options.preventDefault){ar.preventDefault()
}if(ar.eventType==U){at.trigger("touch",ar)
}}};
(function(at){var ar=false;
function au(aw,ax){switch(aw.eventType){case x:ar=false;
break;
case M:if(aw.touches.length<2){return
}var av=Math.abs(1-aw.scale);
var ay=Math.abs(aw.rotation);
if(av<ax.options.transformMinScale&&ay<ax.options.transformMinRotation){return
}s.current.name=at;
if(!ar){ax.trigger(at+"start",aw);
ar=true
}ax.trigger(at,aw);
if(ay>ax.options.transformMinRotation){ax.trigger("rotate",aw)
}if(av>ax.options.transformMinScale){ax.trigger("pinch",aw);
ax.trigger("pinch"+(aw.scale<1?"in":"out"),aw)
}break;
case p:if(ar&&aw.changedLength<2){ax.trigger(at+"end",aw);
ar=false
}break
}}N.gestures.Transform={name:at,index:45,defaults:{transformMinScale:0.01,transformMinRotation:1},handler:au}
})("transform");
aa.Hammer=N;
if(typeof module!=="undefined"&&module.exports){module.exports=N
}function H(ar,au){if(!Date.now){Date.now=function at(){return new Date().getTime()
}
}ar.utils.each(["on","off"],function(av){ar.utils[av]=function(aw,ay,ax){au(aw)[av](ay,function(az){var aA=au.extend({},az.originalEvent,az);
if(aA.button===q){aA.button=az.which-1
}ax.call(this,aA)
})
}
});
ar.Instance.prototype.trigger=function(av,ax){var aw=au(this.element);
if(aw.has(ax.target).length){aw=au(ax.target)
}return aw.trigger({type:av,gesture:ax})
};
au.fn.hammer=function(av){return this.each(function(){var aw=au(this);
var ax=aw.data("hammer");
if(!ax){aw.data("hammer",new ar(this,av||{}))
}else{if(ax&&av){ar.utils.extend(ax.options,av)
}}})
}
}if(typeof e=="function"&&e.amd){e("jquery.hammer",["jquery"],function(ar){return H(aa.Hammer,ar)
})
}else{H(aa.Hammer,aa.jQuery||aa.Zepto)
}})(window);
e("header",["jquery","modernizr","clickTouch","jquery.hammer","breakpoints","lodash"],function(G,I,V,E,l,ac){var W=G(".js-menu-link");
var o=G("header");
var S=G(window);
var F=G("body");
var w=G(".menu-container");
var Q=G(".site-search-form").find("input");
var C="menu-active";
var u="secondary-active";
var B="active";
var q="secondary-closing";
var H="list-active";
var x="collapse-header-active";
var r="js-collapse";
var R="confirmation";
var K={wrapper:"transition-wrapper",overlay:"menu-body-overlay"};
var g=0;
var k=false;
var N={preventDefault:true,tapMaxTime:800,behavior:{userDrag:true,touchAction:"pan-y"},gesture:true};
var U=0;
var ab=function(){G("."+H).removeClass(H);
F.addClass(q);
var ad=".secondary-nav-book-trip-container";
setTimeout(function(){F.removeClass(q+" "+u);
G(".secondary-nav-container."+B).removeClass(B);
G(ad+"."+B).removeClass(B)
},400)
};
var v=function(af){var ag=w.find("."+K.wrapper);
var ad=w.find("."+K.overlay);
var ae=G("html").hasClass(C);
var ah=(af)?(!l.isLarge()&&ae):!l.isLarge();
if(ah){ad.css("height",G(document).height()-ag.height())
}else{ad.removeAttr("style")
}};
var Z=function(al){var ad=w.find("."+K.wrapper);
var ai=w.find("."+K.overlay);
var af=G("html").hasClass(C);
var ae=(al)?(l.isLargeUp()||!af):l.isLargeUp();
w.removeAttr("style");
if(!ae){ai.removeAttr("style");
var ag=G(window).height()-ad.height();
if(G("body").hasClass(u)&&!G("body").hasClass(q)){var am=ad.find("."+H);
var aj=am.find(".secondary-nav-container");
var ah=aj.find(".secondary-nav-heading");
var ak=aj.find(".secondary-nav-links");
ag=G(window).height()-ah.height()-ak.height()
}if(ag<0){w.css({"-webkit-overflow-scrolling":"touch","overflow-y":"auto","overflow-x":"hidden",height:G(window).height()});
ai.height(0)
}else{ai.height(ag)
}}};
var T=function(){if(!o.hasClass("fixed-element")){v(false);
G(window).smartresize(function(){v(true)
})
}else{Z(false);
G(window).smartresize(function(){Z(true)
})
}};
var L=function(){G(".primary-menu-item").on("click",function(af){af.preventDefault();
var ae=G(this);
var ad=ae.parent("li");
if((ad.hasClass(H))&&(!(ad.hasClass("nav-book-trip")&&l.isLarge()))){f(ae,ad)
}else{if(!(ad.hasClass("nav-book-trip")&&l.isLarge())){m(ae,ad)
}else{if((ad.hasClass(H))&&((ad.hasClass("nav-book-trip")&&l.isLarge()))){A(ae,ad)
}else{if(ad.hasClass("nav-book-trip")&&l.isLarge()){n(ae,ad)
}}}}y()
});
G(".secondary-nav-trigger").hammer(N).on(V,function(ad){ad.preventDefault();
ab();
setTimeout(function(){y()
},500)
})
};
var f=function(ad,ae){var ag=ad;
var af=ae;
F.removeClass(u);
G("."+H).removeClass(H);
G(".secondary-nav-container").removeClass(B);
G(".secondary-nav-book-trip-container").removeClass(B);
G(".nav-book-trip .icon").removeClass("icon-up");
G(".button-book-trip").removeClass(H);
G(".button-book-trip .icon").removeClass("icon-up");
w.removeClass("expand-book-trip")
};
var m=function(ad,ae){var ag=ad;
var af=ae;
F.addClass(u);
G("."+H).removeClass(H);
G(".secondary-nav-container").removeClass(B);
G(".secondary-nav-book-trip-container").removeClass(B);
af.addClass(H);
ag.nextAll(".secondary-nav-container").addClass(B);
G(".nav-book-trip .icon").removeClass("icon-up");
G(".button-book-trip").removeClass(H);
G(".button-book-trip .icon").removeClass("icon-up");
w.removeClass("expand-book-trip");
if(F.hasClass("travel-alert-expand")){F.find(".summary-panel").trigger(V)
}aa()
};
var A=function(ad,ae){var ag=ad;
var af=ae;
F.removeClass(u);
G("."+H).removeClass(H);
G(".secondary-nav-container").removeClass(B);
G(".secondary-nav-book-trip-container").removeClass(B);
G(".icon",ag).removeClass("icon-up");
G(".button-book-trip").removeClass(H);
G(".button-book-trip .icon").removeClass("icon-up");
w.removeClass("expand-book-trip")
};
var n=function(ad,ae){var ag=ad;
var af=ae;
F.addClass(u);
G("."+H).removeClass(H);
G(".secondary-nav-container").removeClass(B);
G(".secondary-nav-book-trip-container").removeClass(B);
af.addClass(H);
ag.next(".secondary-nav-book-trip-container").addClass(B);
G(".icon",ag).addClass("icon-up");
G(".button-book-trip").addClass(H);
G(".button-book-trip .icon").addClass("icon-up");
w.addClass("expand-book-trip");
aa()
};
var Y=function(ae){var ad=G(ae.target);
if(!(ad.hasClass("button-book-trip")||ad.parent().hasClass("button-book-trip"))&&!(ad.hasClass("ui-datepicker-next")||ad.hasClass("ui-datepicker-prev"))){if(G(ae.target).closest(".menu-container").length===0){G("html").removeClass(C);
G(".secondary-nav-container").removeClass(B);
G(".secondary-nav-book-trip-container").removeClass(B);
F.removeClass(u);
G("."+H).removeClass(H);
G(".button-book-trip").removeClass(H);
G(".nav-book-trip .icon").removeClass("icon-up");
G(".button-book-trip .icon").removeClass("icon-up");
w.removeClass("expand-book-trip");
F.hammer().off(V+".closeNav");
h(ae)
}}};
var aa=function(){T();
F.hammer().on(V+".closeNav",Y)
};
var h=function(af){var ad=G(af.target);
var ae=ad.is(":focusable")||ad.closest(":focusable").length!==0;
if(!l.isLargeUp()&&!I.touch&&!ae){o.find(".menu-link").focus()
}};
var j=function(){if(!I.touch){W.not(".menu-link").focus()
}};
var D=function(ad,ae){if(F.hasClass("travel-alert-expand")){F.find(".summary-panel").trigger(V)
}G("html").toggleClass(C);
o.removeClass(r);
ad.stopPropagation();
if(G("html").hasClass(C)){aa();
O();
j()
}else{h(ad)
}if(!ac.isUndefined(ae)&&ac.isFunction(ae)){ae()
}};
var i=function(){if(!I.touch&&!F.hasClass("region-selector-active")&&!G("html").hasClass("mpo-active")&&!G("header").hasClass(r)){F.addClass(x);
F.find("main, footer").off(V+".collapseHeader");
o.addClass(r);
k=true;
F.find("main, footer").on(V+".collapseHeader",function(ad){if(S.scrollTop()>U){o.addClass(r);
k=true
}else{P()
}});
G(".button-book-trip").on("click",function(ad){ad.preventDefault();
ad.stopImmediatePropagation();
G(".nav-book-trip .primary-menu-item").trigger("click")
})
}};
var P=function(){if(!I.touch&&!F.hasClass("region-selector-active")&&!G("html").hasClass("mpo-active")&&F.hasClass(x)){F.removeClass(x);
o.removeClass(r);
k=false;
F.find("main, footer").off(V+".collapseHeader")
}};
var z=function(ae){var ad=(navigator.msMaxTouchPoints>0||I.touch);
if(!ad&&g!==S.scrollTop()&&S.scrollTop()>U){g=S.scrollTop();
i()
}else{if(!ad&&g!==S.scrollTop()){P();
if(!G("header").hasClass(i)&&k){F.addClass(x);
k=false
}}}};
var O=function(){var ad=[{selector:".ui-takeover-active",className:"ui-takeover-active"},{selector:".ui-overlay-active",className:"ui-overlay-active"},{selector:".book-trip button.ui-connector",className:"ui-connector"}];
G.each(ad,function(af,ae){G(ae.selector).removeClass(ae.className)
})
};
var p=function(ad){G("#"+ad).trigger("change").prop("checked",true)
};
var J=function(ag){var ah="book-trip-tab-panel";
var ad=G("#"+ag);
var ae=0;
if(!ac.isEmpty(ad)){var af=ad.parent(".trip-type-selection");
var ai=af.outerHeight()/2.5;
ae=af.offset().top-ai
}else{ad=G("#"+ah);
ae=ad.offset().top
}setTimeout(function(){G("body, html").animate({scrollTop:ae},400);
G(".home-tabs .tabs").find('[data-tab-id="book-trip"]').click()
},400)
};
var s=function(ad){ad.preventDefault();
var af=this.getAttribute("href").replace("#","");
p(af);
var ae=G.proxy(J,this,af);
D(ad,ae)
};
var M=function(){G("header, main, footer").on("click.searchBlur",function(ad){if(ad.target.tagName!=="INPUT"){Q.blur();
G("header, main, footer").off("click.searchBlur")
}})
};
var y=function(){if(o.hasClass("fixed-element")){Z(true)
}};
var X=function(){W.hammer(N).on(V,D);
L();
S.on("scroll",z);
G(".nav-book-trip.is-home").find(".secondary-nav-links a").hammer(N).on(V,s);
Q.on("focus",M)
};
return{init:function(ad){if(ad){U=o.find(".header-items").height();
z("load");
X()
}}}
});
e("geolocation",["jquery","lodash","modernizr"],function(h,g,i){var f=function(v){var q=new h.Deferred();
var m;
var j;
var u;
var p={latitude:"",longitude:""};
var o={byAkamai:false,byHTML5:false};
var l=function(w){switch(w.code){case (w.PERMISSION_DENIED):case (w.POSITION_UNAVAILABLE):case (w.TIMEOUT):clearTimeout(j);
q.resolve(o);
break
}};
var k=function(w){clearTimeout(j);
p.latitude=parseFloat(w.coords.latitude);
p.longitude=parseFloat(w.coords.longitude);
o.byHTML5=true;
q.resolve(o)
};
var s=function(){if(!i.geolocation){q.resolve(o)
}else{m=navigator.geolocation.getCurrentPosition(k,l,{timeout:5000,maximumAge:600000});
j=setTimeout(function(){navigator.geolocation.clearWatch(m);
q.resolve(o)
},5000)
}};
var r=function(){var x=parseFloat(u.userLatitude);
var w=parseFloat(u.userLongitude);
if(!g.isNaN(x)&&!g.isNaN(w)){p.latitude=x;
p.longitude=w;
o.byAkamai=true;
q.resolve(o)
}else{s()
}};
var n=function(w){u=w;
r()
};
n(v);
return{getDeferred:function(){return q
},getUserGeoCoordinate:function(){return p
}}
};
return f
});
(function(bd){function a9(g,f,h){switch(arguments.length){case 2:return null!=g?g:f;
case 3:return null!=g?g:null!=f?f:h;
default:throw new Error("Implement me")
}}function a8(g,f){return b0.call(g,f)
}function a7(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}
}function a4(f){aA.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+f)
}function a3(g,f){var h=!0;
return aP(function(){return h&&(a4(g),h=!1),f.apply(this,arguments)
},f)
}function a1(g,f){b5[g]||(a4(f),b5[g]=!0)
}function a0(g,f){return function(h){return aL(g.call(this,h),f)
}
}function aZ(g,f){return function(h){return this.localeData().ordinal(g.call(this,h),f)
}
}function aW(h,g){var l,k,j=12*(g.year()-h.year())+(g.month()-h.month()),i=h.clone().add(j,"months");
return 0>g-i?(l=h.clone().add(j-1,"months"),k=(g-i)/(i-l)):(l=h.clone().add(j+1,"months"),k=(g-i)/(l-i)),-(j+k)
}function aV(g,f,i){var h;
return null==i?f:null!=g.meridiemHour?g.meridiemHour(f,i):null!=g.isPM?(h=g.isPM(i),h&&12>f&&(f+=12),h||12!==f||(f=0),f):f
}function aT(){}function aS(g,f){f!==!1&&bF(g),aO(this,g),this._d=new Date(+g._d),ba===!1&&(ba=!0,aA.updateOffset(this),ba=!1)
}function aR(w){var v=bS(w),u=v.year||0,s=v.quarter||0,r=v.month||0,q=v.week||0,p=v.day||0,o=v.hour||0,n=v.minute||0,m=v.second||0,l=v.millisecond||0;
this._milliseconds=+l+1000*m+60000*n+3600000*o,this._days=+p+7*q,this._months=+r+3*s+12*u,this._data={},this._locale=aA.localeData(),this._bubble()
}function aP(g,f){for(var h in f){a8(f,h)&&(g[h]=f[h])
}return a8(f,"toString")&&(g.toString=f.toString),a8(f,"valueOf")&&(g.valueOf=f.valueOf),g
}function aO(g,f){var j,i,h;
if("undefined"!=typeof f._isAMomentObject&&(g._isAMomentObject=f._isAMomentObject),"undefined"!=typeof f._i&&(g._i=f._i),"undefined"!=typeof f._f&&(g._f=f._f),"undefined"!=typeof f._l&&(g._l=f._l),"undefined"!=typeof f._strict&&(g._strict=f._strict),"undefined"!=typeof f._tzm&&(g._tzm=f._tzm),"undefined"!=typeof f._isUTC&&(g._isUTC=f._isUTC),"undefined"!=typeof f._offset&&(g._offset=f._offset),"undefined"!=typeof f._pf&&(g._pf=f._pf),"undefined"!=typeof f._locale&&(g._locale=f._locale),az.length>0){for(j in az){i=az[j],h=f[i],"undefined"!=typeof h&&(g[i]=h)
}}return g
}function aM(f){return 0>f?Math.ceil(f):Math.floor(f)
}function aL(g,f,j){for(var i=""+Math.abs(g),h=g>=0;
i.length<f;
){i="0"+i
}return(h?j?"+":"":"-")+i
}function aK(g,f){var h={milliseconds:0,months:0};
return h.months=f.month()-g.month()+12*(f.year()-g.year()),g.clone().add(h.months,"M").isAfter(f)&&--h.months,h.milliseconds=+f-+g.clone().add(h.months,"M"),h
}function aJ(g,f){var h;
return f=bx(f,g),g.isBefore(f)?h=aK(g,f):(h=aK(f,g),h.milliseconds=-h.milliseconds,h.months=-h.months),h
}function aI(g,f){return function(k,j){var i,h;
return null===j||isNaN(+j)||(a1(f,"moment()."+f+"(period, number) is deprecated. Please use moment()."+f+"(number, period)."),h=k,k=j,j=h),k="string"==typeof k?+k:k,i=aA.duration(k,j),aH(this,i,g),this
}
}function aH(i,h,n,m){var l=h._milliseconds,k=h._days,j=h._months;
m=null==m?!0:m,l&&i._d.setTime(+i._d+l*n),k&&ay(i,"Date",a5(i,"Date")+k*n),j&&bJ(i,a5(i,"Month")+j*n),m&&aA.updateOffset(i,k||j)
}function aG(f){return"[object Array]"===Object.prototype.toString.call(f)
}function aF(f){return"[object Date]"===Object.prototype.toString.call(f)||f instanceof Date
}function aE(i,h,n){var m,l=Math.min(i.length,h.length),k=Math.abs(i.length-h.length),j=0;
for(m=0;
l>m;
m++){(n&&i[m]!==h[m]||!n&&bO(i[m])!==bO(h[m]))&&j++
}return j+k
}function aC(g){if(g){var f=g.toLowerCase().replace(/(.)s$/,"$1");
g=cg[g]||b1[f]||f
}return g
}function bS(g){var f,i,h={};
for(i in g){a8(g,i)&&(f=aC(i),f&&(h[f]=g[i]))
}return h
}function bQ(f){var h,g;
if(0===f.indexOf("week")){h=7,g="day"
}else{if(0!==f.indexOf("month")){return
}h=12,g="month"
}aA[f]=function(p,o){var n,m,l=aA._locale[f],k=[];
if("number"==typeof p&&(o=p,p=bd),m=function(j){var i=aA().utc().set(g,j);
return l.call(aA._locale,i,p||"")
},null!=o){return m(o)
}for(n=0;
h>n;
n++){k.push(m(n))
}return k
}
}function bO(g){var f=+g,h=0;
return 0!==f&&isFinite(f)&&(h=f>=0?Math.floor(f):Math.ceil(f)),h
}function bN(g,f){return new Date(Date.UTC(g,f+1,0)).getUTCDate()
}function bL(g,f,h){return av(aA([g,11,31+f-h]),f,h).week
}function bI(f){return bH(f)?366:365
}function bH(f){return f%4===0&&f%100!==0||f%400===0
}function bF(g){var f;
g._a&&-2===g._pf.overflow&&(f=g._a[aY]<0||g._a[aY]>11?aY:g._a[aw]<1||g._a[aw]>bN(g._a[bC],g._a[aY])?aw:g._a[ak]<0||g._a[ak]>24||24===g._a[ak]&&(0!==g._a[ci]||0!==g._a[b3]||0!==g._a[bK])?ak:g._a[ci]<0||g._a[ci]>59?ci:g._a[b3]<0||g._a[b3]>59?b3:g._a[bK]<0||g._a[bK]>999?bK:-1,g._pf._overflowDayOfYear&&(bC>f||f>aw)&&(f=aw),g._pf.overflow=f)
}function bE(f){return null==f._isValid&&(f._isValid=!isNaN(f._d.getTime())&&f._pf.overflow<0&&!f._pf.empty&&!f._pf.invalidMonth&&!f._pf.nullInput&&!f._pf.invalidFormat&&!f._pf.userInvalidated,f._strict&&(f._isValid=f._isValid&&0===f._pf.charsLeftOver&&0===f._pf.unusedTokens.length&&f._pf.bigHour===bd)),f._isValid
}function bD(f){return f?f.toLowerCase().replace("_","-"):f
}function bA(h){for(var g,l,k,j,i=0;
i<h.length;
){for(j=bD(h[i]).split("-"),g=j.length,l=bD(h[i+1]),l=l?l.split("-"):null;
g>0;
){if(k=bz(j.slice(0,g).join("-"))){return k
}if(l&&l.length>=g&&aE(j,l,!0)>=g-1){break
}g--
}i++
}return null
}function bz(g){var f=null;
if(!a6[g]&&an){try{f=aA.locale(),a("./locale/"+g),aA.locale(f)
}catch(h){}}return a6[g]
}function bx(g,f){var i,h;
return f._isUTC?(i=f.clone(),h=(aA.isMoment(g)||aF(g)?+g:+aA(g))-+i,i._d.setTime(+i._d+h),aA.updateOffset(i,!1),i):aA(g).local()
}function bw(f){return f.match(/\[[\s\S]/)?f.replace(/^\[|\]$/g,""):f.replace(/\\/g,"")
}function bv(g){var f,i,h=g.match(bf);
for(f=0,i=h.length;
i>f;
f++){h[f]=cj[h[f]]?cj[h[f]]:bw(h[f])
}return function(k){var j="";
for(f=0;
i>f;
f++){j+=h[f] instanceof Function?h[f].call(k,g):h[f]
}return j
}
}function bu(g,f){return g.isValid()?(f=bs(f,g.localeData()),bG[f]||(bG[f]=bv(f)),bG[f](g)):g.localeData().invalidDate()
}function bs(g,f){function i(j){return f.longDateFormat(j)||j
}var h=5;
for(aB.lastIndex=0;
h>=0&&aB.test(g);
){g=g.replace(aB,i),aB.lastIndex=0,h-=1
}return g
}function bq(g,f){var i,h=f._strict;
switch(g){case"Q":return af;
case"DDDD":return br;
case"YYYY":case"GGGG":case"gggg":return h?aN:b9;
case"Y":case"G":case"g":return ag;
case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return h?ar:bV;
case"S":if(h){return af
}case"SS":if(h){return bW
}case"SSS":if(h){return br
}case"DDD":return ad;
case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return aD;
case"a":case"A":return f._locale._meridiemParse;
case"x":return ca;
case"X":return bM;
case"Z":case"ZZ":return aq;
case"T":return ae;
case"SSSS":return bh;
case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return h?bW:ap;
case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return ap;
case"Do":return h?f._locale._ordinalParse:f._locale._ordinalParseLenient;
default:return i=new RegExp(b4(bi(g.replace("\\","")),"i"))
}}function bp(g){g=g||"";
var f=g.match(aq)||[],j=f[f.length-1]||[],i=(j+"").match(au)||["-",0,0],h=+(60*i[1])+bO(i[2]);
return"+"===i[0]?h:-h
}function bo(g,f,j){var i,h=j._a;
switch(g){case"Q":null!=f&&(h[aY]=3*(bO(f)-1));
break;
case"M":case"MM":null!=f&&(h[aY]=bO(f)-1);
break;
case"MMM":case"MMMM":i=j._locale.monthsParse(f,g,j._strict),null!=i?h[aY]=i:j._pf.invalidMonth=f;
break;
case"D":case"DD":null!=f&&(h[aw]=bO(f));
break;
case"Do":null!=f&&(h[aw]=bO(parseInt(f.match(/\d{1,2}/)[0],10)));
break;
case"DDD":case"DDDD":null!=f&&(j._dayOfYear=bO(f));
break;
case"YY":h[bC]=aA.parseTwoDigitYear(f);
break;
case"YYYY":case"YYYYY":case"YYYYYY":h[bC]=bO(f);
break;
case"a":case"A":j._meridiem=f;
break;
case"h":case"hh":j._pf.bigHour=!0;
case"H":case"HH":h[ak]=bO(f);
break;
case"m":case"mm":h[ci]=bO(f);
break;
case"s":case"ss":h[b3]=bO(f);
break;
case"S":case"SS":case"SSS":case"SSSS":h[bK]=bO(1000*("0."+f));
break;
case"x":j._d=new Date(bO(f));
break;
case"X":j._d=new Date(1000*parseFloat(f));
break;
case"Z":case"ZZ":j._useUTC=!0,j._tzm=bp(f);
break;
case"dd":case"ddd":case"dddd":i=j._locale.weekdaysParse(f),null!=i?(j._w=j._w||{},j._w.d=i):j._pf.invalidWeekday=f;
break;
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":g=g.substr(0,1);
case"gggg":case"GGGG":case"GGGGG":g=g.substr(0,2),f&&(j._w=j._w||{},j._w[g]=bO(f));
break;
case"gg":case"GG":j._w=j._w||{},j._w[g]=aA.parseTwoDigitYear(f)
}}function bn(j){var q,p,o,n,m,l,k;
q=j._w,null!=q.GG||null!=q.W||null!=q.E?(m=1,l=4,p=a9(q.GG,j._a[bC],av(aA(),1,4).year),o=a9(q.W,1),n=a9(q.E,1)):(m=j._locale._week.dow,l=j._locale._week.doy,p=a9(q.gg,j._a[bC],av(aA(),m,l).year),o=a9(q.w,1),null!=q.d?(n=q.d,m>n&&++o):n=null!=q.e?q.e+m:m),k=aj(p,o,n,l,m),j._a[bC]=k.year,j._dayOfYear=k.dayOfYear
}function bm(h){var m,l,k,j,i=[];
if(!h._d){for(k=bk(h),h._w&&null==h._a[aw]&&null==h._a[aY]&&bn(h),h._dayOfYear&&(j=a9(h._a[bC],k[bC]),h._dayOfYear>bI(j)&&(h._pf._overflowDayOfYear=!0),l=ce(j,0,h._dayOfYear),h._a[aY]=l.getUTCMonth(),h._a[aw]=l.getUTCDate()),m=0;
3>m&&null==h._a[m];
++m){h._a[m]=i[m]=k[m]
}for(;
7>m;
m++){h._a[m]=i[m]=null==h._a[m]?2===m?1:0:h._a[m]
}24===h._a[ak]&&0===h._a[ci]&&0===h._a[b3]&&0===h._a[bK]&&(h._nextDay=!0,h._a[ak]=0),h._d=(h._useUTC?ce:ah).apply(null,i),null!=h._tzm&&h._d.setUTCMinutes(h._d.getUTCMinutes()-h._tzm),h._nextDay&&(h._a[ak]=24)
}}function bl(g){var f;
g._d||(f=bS(g._i),g._a=[f.year,f.month,f.day||f.date,f.hour,f.minute,f.second,f.millisecond],bm(g))
}function bk(g){var f=new Date;
return g._useUTC?[f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate()]:[f.getFullYear(),f.getMonth(),f.getDate()]
}function bj(s){if(s._f===aA.ISO_8601){return void bX(s)
}s._a=[],s._pf.empty=!0;
var r,q,p,o,n,m=""+s._i,l=m.length,k=0;
for(p=bs(s._f,s._locale).match(bf)||[],r=0;
r<p.length;
r++){o=p[r],q=(m.match(bq(o,s))||[])[0],q&&(n=m.substr(0,m.indexOf(q)),n.length>0&&s._pf.unusedInput.push(n),m=m.slice(m.indexOf(q)+q.length),k+=q.length),cj[o]?(q?s._pf.empty=!1:s._pf.unusedTokens.push(o),bo(o,q,s)):s._strict&&!q&&s._pf.unusedTokens.push(o)
}s._pf.charsLeftOver=l-k,m.length>0&&s._pf.unusedInput.push(m),s._pf.bigHour===!0&&s._a[ak]<=12&&(s._pf.bigHour=bd),s._a[ak]=aV(s._locale,s._a[ak],s._meridiem),bm(s),bF(s)
}function bi(f){return f.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(h,g,k,j,i){return g||k||j||i
})
}function b4(f){return f.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}function bg(i){var h,m,l,k,j;
if(0===i._f.length){return i._pf.invalidFormat=!0,void (i._d=new Date(0/0))
}for(k=0;
k<i._f.length;
k++){j=0,h=aO({},i),null!=i._useUTC&&(h._useUTC=i._useUTC),h._pf=a7(),h._f=i._f[k],bj(h),bE(h)&&(j+=h._pf.charsLeftOver,j+=10*h._pf.unusedTokens.length,h._pf.score=j,(null==l||l>j)&&(l=j,m=h))
}aP(i,m||h)
}function bX(g){var f,j,i=g._i,h=cd.exec(i);
if(h){for(g._pf.iso=!0,f=0,j=by.length;
j>f;
f++){if(by[f][1].exec(i)){g._f=by[f][0]+(h[6]||" ");
break
}}for(f=0,j=aU.length;
j>f;
f++){if(aU[f][1].exec(i)){g._f+=aU[f][0];
break
}}i.match(aq)&&(g._f+="Z"),bj(g)
}else{g._isValid=!1
}}function bt(f){bX(f),f._isValid===!1&&(delete f._isValid,aA.createFromInputFallback(f))
}function aQ(g,f){var i,h=[];
for(i=0;
i<g.length;
++i){h.push(f(g[i],i))
}return h
}function at(f){var h,g=f._i;
g===bd?f._d=new Date:aF(g)?f._d=new Date(+g):null!==(h=cl.exec(g))?f._d=new Date(+h[1]):"string"==typeof g?bt(f):aG(g)?(f._a=aQ(g.slice(0),function(i){return parseInt(i,10)
}),bm(f)):"object"==typeof g?bl(f):"number"==typeof g?f._d=new Date(g):aA.createFromInputFallback(f)
}function ah(j,i,p,o,n,m,l){var k=new Date(j,i,p,o,n,m,l);
return 1970>j&&k.setFullYear(j),k
}function ce(g){var f=new Date(Date.UTC.apply(null,arguments));
return 1970>g&&f.setUTCFullYear(g),f
}function bZ(g,f){if("string"==typeof g){if(isNaN(g)){if(g=f.weekdaysParse(g),"number"!=typeof g){return null
}}else{g=parseInt(g,10)
}}return g
}function bB(g,f,j,i,h){return h.relativeTime(f||1,!!j,g,i)
}function aX(w,v,u){var s=aA.duration(w).abs(),r=cf(s.as("s")),q=cf(s.as("m")),p=cf(s.as("h")),o=cf(s.as("d")),n=cf(s.as("M")),m=cf(s.as("y")),l=r<a2.s&&["s",r]||1===q&&["m"]||q<a2.m&&["mm",q]||1===p&&["h"]||p<a2.h&&["hh",p]||1===o&&["d"]||o<a2.d&&["dd",o]||1===n&&["M"]||n<a2.M&&["MM",n]||1===m&&["y"]||["yy",m];
return l[2]=v,l[3]=+w>0,l[4]=u,bB.apply({},l)
}function av(h,g,l){var k,j=l-g,i=l-h.day();
return i>j&&(i-=7),j-7>i&&(i+=7),k=aA(h).add(i,"d"),{week:Math.ceil(k.dayOfYear()/7),year:k.year()}
}function aj(j,i,p,o,n){var m,l,k=ce(j,0,1).getUTCDay();
return k=0===k?7:k,p=null!=p?p:n,m=n-k+(k>o?7:0)-(n>k?7:0),l=7*(i-1)+(p-n)+m+1,{year:l>0?j:j-1,dayOfYear:l>0?l:bI(j-1)+l}
}function ch(f){var i,h=f._i,g=f._f;
return f._locale=f._locale||aA.localeData(f._l),null===h||g===bd&&""===h?aA.invalid({nullInput:!0}):("string"==typeof h&&(f._i=h=f._locale.preparse(h)),aA.isMoment(h)?new aS(h,!0):(g?aG(g)?bg(f):bj(f):at(f),i=new aS(f),i._nextDay&&(i.add(1,"d"),i._nextDay=bd),i))
}function b2(g,f){var i,h;
if(1===f.length&&aG(f[0])&&(f=f[0]),!f.length){return aA()
}for(i=f[0],h=1;
h<f.length;
++h){f[h][g](i)&&(i=f[h])
}return i
}function bJ(g,f){var h;
return"string"==typeof f&&(f=g.localeData().monthsParse(f),"number"!=typeof f)?g:(h=Math.min(g.date(),bN(g.year(),f)),g._d["set"+(g._isUTC?"UTC":"")+"Month"](f,h),g)
}function a5(g,f){return g._d["get"+(g._isUTC?"UTC":"")+f]()
}function ay(g,f,h){return"Month"===f?bJ(g,h):g._d["set"+(g._isUTC?"UTC":"")+f](h)
}function am(g,f){return function(h){return null!=h?(ay(this,g,h),aA.updateOffset(this,f),this):a5(this,g)
}
}function ck(f){return 400*f/146097
}function b6(f){return 146097*f/400
}function bR(f){aA.duration.fn[f]=function(){return this._data[f]
}
}function be(f){"undefined"==typeof ender&&(ao=bU.moment,bU.moment=f?a3("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",aA):aA)
}for(var aA,ao,aa,b8="2.9.0",bU="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,cf=Math.round,b0=Object.prototype.hasOwnProperty,bC=0,aY=1,aw=2,ak=3,ci=4,b3=5,bK=6,a6={},az=[],an="undefined"!=typeof module&&module&&module.exports,cl=/^\/?Date\((\-?\d+)/i,b7=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,bT=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,bf=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,aB=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ap=/\d\d?/,ad=/\d{1,3}/,b9=/\d{1,4}/,bV=/[+\-]?\d{1,6}/,bh=/\d+/,aD=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,aq=/Z|[\+\-]\d\d:?\d\d/gi,ae=/T/i,ca=/[\+\-]?\d+/,bM=/[\+\-]?\d+(\.\d{1,3})?/,af=/\d/,bW=/\d\d/,br=/\d{3}/,aN=/\d{4}/,ar=/[+-]?\d{6}/,ag=/[+-]?\d+/,cd=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,bY="YYYY-MM-DDTHH:mm:ssZ",by=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],aU=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],au=/([\+\-]|\d\d)/gi,ai=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000}),cg={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},b1={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},bG={},a2={s:45,m:45,h:22,d:26,M:11},ax="DDD w W M D d".split(" "),al="M D H h m s w W".split(" "),cj={M:function(){return this.month()+1
},MMM:function(f){return this.localeData().monthsShort(this,f)
},MMMM:function(f){return this.localeData().months(this,f)
},D:function(){return this.date()
},DDD:function(){return this.dayOfYear()
},d:function(){return this.day()
},dd:function(f){return this.localeData().weekdaysMin(this,f)
},ddd:function(f){return this.localeData().weekdaysShort(this,f)
},dddd:function(f){return this.localeData().weekdays(this,f)
},w:function(){return this.week()
},W:function(){return this.isoWeek()
},YY:function(){return aL(this.year()%100,2)
},YYYY:function(){return aL(this.year(),4)
},YYYYY:function(){return aL(this.year(),5)
},YYYYYY:function(){var g=this.year(),f=g>=0?"+":"-";
return f+aL(Math.abs(g),6)
},gg:function(){return aL(this.weekYear()%100,2)
},gggg:function(){return aL(this.weekYear(),4)
},ggggg:function(){return aL(this.weekYear(),5)
},GG:function(){return aL(this.isoWeekYear()%100,2)
},GGGG:function(){return aL(this.isoWeekYear(),4)
},GGGGG:function(){return aL(this.isoWeekYear(),5)
},e:function(){return this.weekday()
},E:function(){return this.isoWeekday()
},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)
},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)
},H:function(){return this.hours()
},h:function(){return this.hours()%12||12
},m:function(){return this.minutes()
},s:function(){return this.seconds()
},S:function(){return bO(this.milliseconds()/100)
},SS:function(){return aL(bO(this.milliseconds()/10),2)
},SSS:function(){return aL(this.milliseconds(),3)
},SSSS:function(){return aL(this.milliseconds(),3)
},Z:function(){var g=this.utcOffset(),f="+";
return 0>g&&(g=-g,f="-"),f+aL(bO(g/60),2)+":"+aL(bO(g)%60,2)
},ZZ:function(){var g=this.utcOffset(),f="+";
return 0>g&&(g=-g,f="-"),f+aL(bO(g/60),2)+aL(bO(g)%60,2)
},z:function(){return this.zoneAbbr()
},zz:function(){return this.zoneName()
},x:function(){return this.valueOf()
},X:function(){return this.unix()
},Q:function(){return this.quarter()
}},b5={},bP=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],ba=!1;
ax.length;
){aa=ax.pop(),cj[aa+"o"]=aZ(cj[aa],aa)
}for(;
al.length;
){aa=al.pop(),cj[aa+aa]=a0(cj[aa],2)
}cj.DDDD=a0(cj.DDD,3),aP(aT.prototype,{set:function(g){var f,h;
for(h in g){f=g[h],"function"==typeof f?this[h]=f:this["_"+h]=f
}this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)
},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(f){return this._months[f.month()]
},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(f){return this._monthsShort[f.month()]
},monthsParse:function(h,g,l){var k,j,i;
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),k=0;
12>k;
k++){if(j=aA.utc([2000,k]),l&&!this._longMonthsParse[k]&&(this._longMonthsParse[k]=new RegExp("^"+this.months(j,"").replace(".","")+"$","i"),this._shortMonthsParse[k]=new RegExp("^"+this.monthsShort(j,"").replace(".","")+"$","i")),l||this._monthsParse[k]||(i="^"+this.months(j,"")+"|^"+this.monthsShort(j,""),this._monthsParse[k]=new RegExp(i.replace(".",""),"i")),l&&"MMMM"===g&&this._longMonthsParse[k].test(h)){return k
}if(l&&"MMM"===g&&this._shortMonthsParse[k].test(h)){return k
}if(!l&&this._monthsParse[k].test(h)){return k
}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(f){return this._weekdays[f.day()]
},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(f){return this._weekdaysShort[f.day()]
},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(f){return this._weekdaysMin[f.day()]
},weekdaysParse:function(g){var f,i,h;
for(this._weekdaysParse||(this._weekdaysParse=[]),f=0;
7>f;
f++){if(this._weekdaysParse[f]||(i=aA([2000,1]).day(f),h="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[f]=new RegExp(h.replace(".",""),"i")),this._weekdaysParse[f].test(g)){return f
}}},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(g){var f=this._longDateFormat[g];
return !f&&this._longDateFormat[g.toUpperCase()]&&(f=this._longDateFormat[g.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(h){return h.slice(1)
}),this._longDateFormat[g]=f),f
},isPM:function(f){return"p"===(f+"").toLowerCase().charAt(0)
},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(g,f,h){return g>11?h?"pm":"PM":h?"am":"AM"
},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(g,f,i){var h=this._calendar[g];
return"function"==typeof h?h.apply(f,[i]):h
},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(g,f,j,i){var h=this._relativeTime[j];
return"function"==typeof h?h(g,f,j,i):h.replace(/%d/i,g)
},pastFuture:function(g,f){var h=this._relativeTime[g>0?"future":"past"];
return"function"==typeof h?h(f):h.replace(/%s/i,f)
},ordinal:function(f){return this._ordinal.replace("%d",f)
},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(f){return f
},postformat:function(f){return f
},week:function(f){return av(f,this._week.dow,this._week.doy).week
},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow
},firstDayOfYear:function(){return this._week.doy
},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate
}}),aA=function(h,l,k,j){var i;
return"boolean"==typeof k&&(j=k,k=bd),i={},i._isAMomentObject=!0,i._i=h,i._f=l,i._l=k,i._strict=j,i._isUTC=!1,i._pf=a7(),ch(i)
},aA.suppressDeprecationWarnings=!1,aA.createFromInputFallback=a3("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(f){f._d=new Date(f._i+(f._useUTC?" UTC":""))
}),aA.min=function(){var f=[].slice.call(arguments,0);
return b2("isBefore",f)
},aA.max=function(){var f=[].slice.call(arguments,0);
return b2("isAfter",f)
},aA.utc=function(h,l,k,j){var i;
return"boolean"==typeof k&&(j=k,k=bd),i={},i._isAMomentObject=!0,i._useUTC=!0,i._isUTC=!0,i._l=k,i._i=h,i._f=l,i._strict=j,i._pf=a7(),ch(i).utc()
},aA.unix=function(f){return aA(1000*f)
},aA.duration=function(k,j){var q,p,o,n,m=k,l=null;
return aA.isDuration(k)?m={ms:k._milliseconds,d:k._days,M:k._months}:"number"==typeof k?(m={},j?m[j]=k:m.milliseconds=k):(l=b7.exec(k))?(q="-"===l[1]?-1:1,m={y:0,d:bO(l[aw])*q,h:bO(l[ak])*q,m:bO(l[ci])*q,s:bO(l[b3])*q,ms:bO(l[bK])*q}):(l=bT.exec(k))?(q="-"===l[1]?-1:1,o=function(g){var f=g&&parseFloat(g.replace(",","."));
return(isNaN(f)?0:f)*q
},m={y:o(l[2]),M:o(l[3]),d:o(l[4]),h:o(l[5]),m:o(l[6]),s:o(l[7]),w:o(l[8])}):null==m?m={}:"object"==typeof m&&("from" in m||"to" in m)&&(n=aJ(aA(m.from),aA(m.to)),m={},m.ms=n.milliseconds,m.M=n.months),p=new aR(m),aA.isDuration(k)&&a8(k,"_locale")&&(p._locale=k._locale),p
},aA.version=b8,aA.defaultFormat=bY,aA.ISO_8601=function(){},aA.momentProperties=az,aA.updateOffset=function(){},aA.relativeTimeThreshold=function(f,g){return a2[f]===bd?!1:g===bd?a2[f]:(a2[f]=g,!0)
},aA.lang=a3("moment.lang is deprecated. Use moment.locale instead.",function(g,f){return aA.locale(g,f)
}),aA.locale=function(g,f){var h;
return g&&(h="undefined"!=typeof f?aA.defineLocale(g,f):aA.localeData(g),h&&(aA.duration._locale=aA._locale=h)),aA._locale._abbr
},aA.defineLocale=function(g,f){return null!==f?(f.abbr=g,a6[g]||(a6[g]=new aT),a6[g].set(f),aA.locale(g),a6[g]):(delete a6[g],null)
},aA.langData=a3("moment.langData is deprecated. Use moment.localeData instead.",function(f){return aA.localeData(f)
}),aA.localeData=function(g){var f;
if(g&&g._locale&&g._locale._abbr&&(g=g._locale._abbr),!g){return aA._locale
}if(!aG(g)){if(f=bz(g)){return f
}g=[g]
}return bA(g)
},aA.isMoment=function(f){return f instanceof aS||null!=f&&a8(f,"_isAMomentObject")
},aA.isDuration=function(f){return f instanceof aR
};
for(aa=bP.length-1;
aa>=0;
--aa){bQ(bP[aa])
}aA.normalizeUnits=function(f){return aC(f)
},aA.invalid=function(g){var f=aA.utc(0/0);
return null!=g?aP(f._pf,g):f._pf.userInvalidated=!0,f
},aA.parseZone=function(){return aA.apply(null,arguments).parseZone()
},aA.parseTwoDigitYear=function(f){return bO(f)+(bO(f)>68?1900:2000)
},aA.isDate=aF,aP(aA.fn=aS.prototype,{clone:function(){return aA(this)
},valueOf:function(){return +this._d-60000*(this._offset||0)
},unix:function(){return Math.floor(+this/1000)
},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},toDate:function(){return this._offset?new Date(+this):this._d
},toISOString:function(){var f=aA(this).utc();
return 0<f.year()&&f.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():bu(f,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):bu(f,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
},toArray:function(){var f=this;
return[f.year(),f.month(),f.date(),f.hours(),f.minutes(),f.seconds(),f.milliseconds()]
},isValid:function(){return bE(this)
},isDSTShifted:function(){return this._a?this.isValid()&&aE(this._a,(this._isUTC?aA.utc(this._a):aA(this._a)).toArray())>0:!1
},parsingFlags:function(){return aP({},this._pf)
},invalidAt:function(){return this._pf.overflow
},utc:function(f){return this.utcOffset(0,f)
},local:function(f){return this._isUTC&&(this.utcOffset(0,f),this._isUTC=!1,f&&this.subtract(this._dateUtcOffset(),"m")),this
},format:function(g){var f=bu(this,g||aA.defaultFormat);
return this.localeData().postformat(f)
},add:aI(1,"add"),subtract:aI(-1,"subtract"),diff:function(i,h,n){var m,l,k=bx(i,this),j=60000*(k.utcOffset()-this.utcOffset());
return h=aC(h),"year"===h||"month"===h||"quarter"===h?(l=aW(this,k),"quarter"===h?l/=3:"year"===h&&(l/=12)):(m=this-k,l="second"===h?m/1000:"minute"===h?m/60000:"hour"===h?m/3600000:"day"===h?(m-j)/86400000:"week"===h?(m-j)/604800000:m),n?l:aM(l)
},from:function(g,f){return aA.duration({to:this,from:g}).locale(this.locale()).humanize(!f)
},fromNow:function(f){return this.from(aA(),f)
},calendar:function(g){var f=g||aA(),j=bx(f,this).startOf("day"),i=this.diff(j,"days",!0),h=-6>i?"sameElse":-1>i?"lastWeek":0>i?"lastDay":1>i?"sameDay":2>i?"nextDay":7>i?"nextWeek":"sameElse";
return this.format(this.localeData().calendar(h,this,aA(f)))
},isLeapYear:function(){return bH(this.year())
},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
},day:function(g){var f=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null!=g?(g=bZ(g,this.localeData()),this.add(g-f,"d")):f
},month:am("Month",!0),startOf:function(f){switch(f=aC(f)){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}return"week"===f?this.weekday(0):"isoWeek"===f&&this.isoWeekday(1),"quarter"===f&&this.month(3*Math.floor(this.month()/3)),this
},endOf:function(f){return f=aC(f),f===bd||"millisecond"===f?this:this.startOf(f).add(1,"isoWeek"===f?"week":f).subtract(1,"ms")
},isAfter:function(g,f){var h;
return f=aC("undefined"!=typeof f?f:"millisecond"),"millisecond"===f?(g=aA.isMoment(g)?g:aA(g),+this>+g):(h=aA.isMoment(g)?+g:+aA(g),h<+this.clone().startOf(f))
},isBefore:function(g,f){var h;
return f=aC("undefined"!=typeof f?f:"millisecond"),"millisecond"===f?(g=aA.isMoment(g)?g:aA(g),+g>+this):(h=aA.isMoment(g)?+g:+aA(g),+this.clone().endOf(f)<h)
},isBetween:function(g,f,h){return this.isAfter(g,h)&&this.isBefore(f,h)
},isSame:function(g,f){var h;
return f=aC(f||"millisecond"),"millisecond"===f?(g=aA.isMoment(g)?g:aA(g),+this===+g):(h=+aA(g),+this.clone().startOf(f)<=h&&h<=+this.clone().endOf(f))
},min:a3("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(f){return f=aA.apply(null,arguments),this>f?this:f
}),max:a3("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(f){return f=aA.apply(null,arguments),f>this?this:f
}),zone:a3("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(g,f){return null!=g?("string"!=typeof g&&(g=-g),this.utcOffset(g,f),this):-this.utcOffset()
}),utcOffset:function(g,f){var i,h=this._offset||0;
return null!=g?("string"==typeof g&&(g=bp(g)),Math.abs(g)<16&&(g=60*g),!this._isUTC&&f&&(i=this._dateUtcOffset()),this._offset=g,this._isUTC=!0,null!=i&&this.add(i,"m"),h!==g&&(!f||this._changeInProgress?aH(this,aA.duration(g-h,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,aA.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?h:this._dateUtcOffset()
},isLocal:function(){return !this._isUTC
},isUtcOffset:function(){return this._isUTC
},isUtc:function(){return this._isUTC&&0===this._offset
},zoneAbbr:function(){return this._isUTC?"UTC":""
},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""
},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(bp(this._i)),this
},hasAlignedHourOffset:function(f){return f=f?aA(f).utcOffset():0,(this.utcOffset()-f)%60===0
},daysInMonth:function(){return bN(this.year(),this.month())
},dayOfYear:function(g){var f=cf((aA(this).startOf("day")-aA(this).startOf("year"))/86400000)+1;
return null==g?f:this.add(g-f,"d")
},quarter:function(f){return null==f?Math.ceil((this.month()+1)/3):this.month(3*(f-1)+this.month()%3)
},weekYear:function(g){var f=av(this,this.localeData()._week.dow,this.localeData()._week.doy).year;
return null==g?f:this.add(g-f,"y")
},isoWeekYear:function(g){var f=av(this,1,4).year;
return null==g?f:this.add(g-f,"y")
},week:function(g){var f=this.localeData().week(this);
return null==g?f:this.add(7*(g-f),"d")
},isoWeek:function(g){var f=av(this,1,4).week;
return null==g?f:this.add(7*(g-f),"d")
},weekday:function(g){var f=(this.day()+7-this.localeData()._week.dow)%7;
return null==g?f:this.add(g-f,"d")
},isoWeekday:function(f){return null==f?this.day()||7:this.day(this.day()%7?f:f-7)
},isoWeeksInYear:function(){return bL(this.year(),1,4)
},weeksInYear:function(){var f=this.localeData()._week;
return bL(this.year(),f.dow,f.doy)
},get:function(f){return f=aC(f),this[f]()
},set:function(g,f){var h;
if("object"==typeof g){for(h in g){this.set(h,g[h])
}}else{g=aC(g),"function"==typeof this[g]&&this[g](f)
}return this
},locale:function(f){var g;
return f===bd?this._locale._abbr:(g=aA.localeData(f),null!=g&&(this._locale=g),this)
},lang:a3("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(f){return f===bd?this.localeData():this.locale(f)
}),localeData:function(){return this._locale
},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)
}}),aA.fn.millisecond=aA.fn.milliseconds=am("Milliseconds",!1),aA.fn.second=aA.fn.seconds=am("Seconds",!1),aA.fn.minute=aA.fn.minutes=am("Minutes",!1),aA.fn.hour=aA.fn.hours=am("Hours",!0),aA.fn.date=am("Date",!0),aA.fn.dates=a3("dates accessor is deprecated. Use date instead.",am("Date",!0)),aA.fn.year=am("FullYear",!0),aA.fn.years=a3("years accessor is deprecated. Use year instead.",am("FullYear",!0)),aA.fn.days=aA.fn.day,aA.fn.months=aA.fn.month,aA.fn.weeks=aA.fn.week,aA.fn.isoWeeks=aA.fn.isoWeek,aA.fn.quarters=aA.fn.quarter,aA.fn.toJSON=aA.fn.toISOString,aA.fn.isUTC=aA.fn.isUtc,aP(aA.duration.fn=aR.prototype,{_bubble:function(){var j,i,p,o=this._milliseconds,n=this._days,m=this._months,l=this._data,k=0;
l.milliseconds=o%1000,j=aM(o/1000),l.seconds=j%60,i=aM(j/60),l.minutes=i%60,p=aM(i/60),l.hours=p%24,n+=aM(p/24),k=aM(ck(n)),n-=aM(b6(k)),m+=aM(n/30),n%=30,k+=aM(m/12),m%=12,l.days=n,l.months=m,l.years=k
},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this
},weeks:function(){return aM(this.days()/7)
},valueOf:function(){return this._milliseconds+86400000*this._days+this._months%12*2592000000+31536000000*bO(this._months/12)
},humanize:function(g){var f=aX(this,!g,this.localeData());
return g&&(f=this.localeData().pastFuture(+this,f)),this.localeData().postformat(f)
},add:function(g,f){var h=aA.duration(g,f);
return this._milliseconds+=h._milliseconds,this._days+=h._days,this._months+=h._months,this._bubble(),this
},subtract:function(g,f){var h=aA.duration(g,f);
return this._milliseconds-=h._milliseconds,this._days-=h._days,this._months-=h._months,this._bubble(),this
},get:function(f){return f=aC(f),this[f.toLowerCase()+"s"]()
},as:function(g){var f,h;
if(g=aC(g),"month"===g||"year"===g){return f=this._days+this._milliseconds/86400000,h=this._months+12*ck(f),"month"===g?h:h/12
}switch(f=this._days+Math.round(b6(this._months/12)),g){case"week":return f/7+this._milliseconds/604800000;
case"day":return f+this._milliseconds/86400000;
case"hour":return 24*f+this._milliseconds/3600000;
case"minute":return 24*f*60+this._milliseconds/60000;
case"second":return 24*f*60*60+this._milliseconds/1000;
case"millisecond":return Math.floor(24*f*60*60*1000)+this._milliseconds;
default:throw new Error("Unknown unit "+g)
}},lang:aA.fn.lang,locale:aA.fn.locale,toIsoString:a3("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()
}),toISOString:function(){var h=Math.abs(this.years()),g=Math.abs(this.months()),l=Math.abs(this.days()),k=Math.abs(this.hours()),j=Math.abs(this.minutes()),i=Math.abs(this.seconds()+this.milliseconds()/1000);
return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(h?h+"Y":"")+(g?g+"M":"")+(l?l+"D":"")+(k||j||i?"T":"")+(k?k+"H":"")+(j?j+"M":"")+(i?i+"S":""):"P0D"
},localeData:function(){return this._locale
},toJSON:function(){return this.toISOString()
}}),aA.duration.fn.toString=aA.duration.fn.toISOString;
for(aa in ai){a8(ai,aa)&&bR(aa.toLowerCase())
}aA.duration.fn.asMilliseconds=function(){return this.as("ms")
},aA.duration.fn.asSeconds=function(){return this.as("s")
},aA.duration.fn.asMinutes=function(){return this.as("m")
},aA.duration.fn.asHours=function(){return this.as("h")
},aA.duration.fn.asDays=function(){return this.as("d")
},aA.duration.fn.asWeeks=function(){return this.as("weeks")
},aA.duration.fn.asMonths=function(){return this.as("M")
},aA.duration.fn.asYears=function(){return this.as("y")
},aA.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(g){var f=g%10,h=1===bO(g%100/10)?"th":1===f?"st":2===f?"nd":3===f?"rd":"th";
return g+h
}}),function(f){f(aA)
}(function(f){return f.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(g){return/^nm$/i.test(g)
},meridiem:function(h,g,i){return 12>h?i?"vm":"VM":i?"nm":"NM"
},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(g){return g+(1===g||8===g||g>=20?"ste":"de")
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})
}),function(f){f(aA)
}(function(g){var f={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},h={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};
return g.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(i){return"م"===i
},meridiem:function(i){return 12>i?"ص":"م"
},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(i){return i.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(j){return h[j]
}).replace(/،/g,",")
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
}).replace(/,/g,"،")
},week:{dow:6,doy:12}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(i){var h={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},m=function(f){return 0===f?0:1===f?1:2===f?2:f%100>=3&&10>=f%100?3:f%100>=11?4:5
},l={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},k=function(f){return function(o,r){var q=m(o),p=l[f][m(o)];
return 2===q&&(p=p[r?0:1]),p.replace(/%d/i,o)
}
},j=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];
return i.defineLocale("ar",{months:j,monthsShort:j,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiemParse:/ص|م/,isPM:function(f){return"م"===f
},meridiem:function(f){return 12>f?"ص":"م"
},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:k("s"),m:k("m"),mm:k("m"),h:k("h"),hh:k("h"),d:k("d"),dd:k("d"),M:k("M"),MM:k("M"),y:k("y"),yy:k("y")},preparse:function(f){return f.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(g){return n[g]
}).replace(/،/g,",")
},postformat:function(f){return f.replace(/\d/g,function(g){return h[g]
}).replace(/,/g,"،")
},week:{dow:6,doy:12}})
}),function(f){f(aA)
}(function(g){var f={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};
return g.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(h){return/^(gündüz|axşam)$/.test(h)
},meridiem:function(h){return 4>h?"gecə":12>h?"səhər":17>h?"gündüz":"axşam"
},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(h){if(0===h){return h+"-ıncı"
}var k=h%10,j=h%100-k,i=h>=100?100:null;
return h+(f[k]||f[j]||f[i])
},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){function f(l,k){var m=l.split("_");
return k%10===1&&k%100!==11?m[0]:k%10>=2&&4>=k%10&&(10>k%100||k%100>=20)?m[1]:m[2]
}function j(k,n,m){var l={mm:n?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:n?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};
return"m"===m?n?"хвіліна":"хвіліну":"h"===m?n?"гадзіна":"гадзіну":k+" "+f(l[m],+k)
}function i(l,k){var n={nominative:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),accusative:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")},m=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(k)?"accusative":"nominative";
return n[m][l.month()]
}function h(l,k){var n={nominative:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),accusative:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")},m=/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(k)?"accusative":"nominative";
return n[m][l.day()]
}return g.defineLocale("be",{months:i,monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:h,weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"
},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";
case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"
}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:j,mm:j,h:j,hh:j,d:"дзень",dd:j,M:"месяц",MM:j,y:"год",yy:j},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(k){return/^(дня|вечара)$/.test(k)
},meridiem:function(k){return 4>k?"ночы":12>k?"раніцы":17>k?"дня":"вечара"
},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(l,k){switch(k){case"M":case"d":case"DDD":case"w":case"W":return l%10!==2&&l%10!==3||l%100===12||l%100===13?l+"-ы":l+"-і";
case"D":return l+"-га";
default:return l
}},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";
case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"
}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(h){var g=h%10,i=h%100;
return 0===h?h+"-ев":0===i?h+"-ен":i>10&&20>i?h+"-ти":1===g?h+"-ви":2===g?h+"-ри":7===g||8===g?h+"-ми":h+"-ти"
},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){var f={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},h={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};
return g.defineLocale("bn",{months:"জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),weekdaysMin:"রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কএক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(i){return i.replace(/[১২৩৪৫৬৭৮৯০]/g,function(j){return h[j]
})
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
})
},meridiemParse:/রাত|শকাল|দুপুর|বিকেল|রাত/,isPM:function(i){return/^(দুপুর|বিকেল|রাত)$/.test(i)
},meridiem:function(i){return 4>i?"রাত":10>i?"শকাল":17>i?"দুপুর":20>i?"বিকেল":"রাত"
},week:{dow:0,doy:6}})
}),function(f){f(aA)
}(function(g){var f={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},h={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};
return g.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(i){return i.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(j){return h[j]
})
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
})
},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,isPM:function(i){return/^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(i)
},meridiem:function(i){return 4>i?"མཚན་མོ":10>i?"ཞོགས་ཀས":17>i?"ཉིན་གུང":20>i?"དགོང་དག":"མཚན་མོ"
},week:{dow:0,doy:6}})
}),function(f){f(aA)
}(function(h){function m(g,f,o){var n={mm:"munutenn",MM:"miz",dd:"devezh"};
return g+" "+j(n[o],g)
}function l(f){switch(k(f)){case 1:case 3:case 4:case 5:case 9:return f+" bloaz";
default:return f+" vloaz"
}}function k(f){return f>9?k(f%10):f
}function j(g,f){return 2===f?i(g):g
}function i(f){var g={m:"v",b:"v",d:"z"};
return g[f.charAt(0)]===bd?f:g[f.charAt(0)]+f.substring(1)
}return h.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:m,h:"un eur",hh:"%d eur",d:"un devezh",dd:m,M:"ur miz",MM:m,y:"ur bloaz",yy:l},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(g){var f=1===g?"añ":"vet";
return g+f
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(i,h,k){var j=i+" ";
switch(k){case"m":return h?"jedna minuta":"jedne minute";
case"mm":return j+=1===i?"minuta":2===i||3===i||4===i?"minute":"minuta";
case"h":return h?"jedan sat":"jednog sata";
case"hh":return j+=1===i?"sat":2===i||3===i||4===i?"sata":"sati";
case"dd":return j+=1===i?"dan":"dana";
case"MM":return j+=1===i?"mjesec":2===i||3===i||4===i?"mjeseca":"mjeseci";
case"yy":return j+=1===i?"godina":2===i||3===i||4===i?"godine":"godina"
}}return g.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";
case 3:return"[u] [srijedu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";
case 6:return"[prošle] [subote] [u] LT";
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:f,mm:f,h:f,hh:f,d:"dan",dd:f,M:"mjesec",MM:f,y:"godinu",yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"
},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"
},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"
},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"
},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(h,g){var i=1===h?"r":2===h?"n":3===h?"r":4===h?"t":"è";
return("w"===g||"W"===g)&&(i="a"),h+i
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(k){return k>1&&5>k&&1!==~~(k/10)
}function j(k,o,n,m){var l=k+" ";
switch(n){case"s":return o||m?"pár sekund":"pár sekundami";
case"m":return o?"minuta":m?"minutu":"minutou";
case"mm":return o||m?l+(f(k)?"minuty":"minut"):l+"minutami";
break;
case"h":return o?"hodina":m?"hodinu":"hodinou";
case"hh":return o||m?l+(f(k)?"hodiny":"hodin"):l+"hodinami";
break;
case"d":return o||m?"den":"dnem";
case"dd":return o||m?l+(f(k)?"dny":"dní"):l+"dny";
break;
case"M":return o||m?"měsíc":"měsícem";
case"MM":return o||m?l+(f(k)?"měsíce":"měsíců"):l+"měsíci";
break;
case"y":return o||m?"rok":"rokem";
case"yy":return o||m?l+(f(k)?"roky":"let"):l+"lety"
}}var i="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),h="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
return g.defineLocale("cs",{months:i,monthsShort:h,monthsParse:function(l,k){var n,m=[];
for(n=0;
12>n;
n++){m[n]=new RegExp("^"+l[n]+"$|^"+k[n]+"$","i")
}return m
}(i,h),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";
case 1:case 2:return"[v] dddd [v] LT";
case 3:return"[ve středu v] LT";
case 4:return"[ve čtvrtek v] LT";
case 5:return"[v pátek v] LT";
case 6:return"[v sobotu v] LT"
}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";
case 1:case 2:return"[minulé] dddd [v] LT";
case 3:return"[minulou středu v] LT";
case 4:case 5:return"[minulý] dddd [v] LT";
case 6:return"[minulou sobotu v] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:j,m:j,mm:j,h:j,hh:j,d:j,dd:j,M:j,MM:j,y:j,yy:j},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("cv",{months:"кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),monthsShort:"кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кç_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",LLL:"YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",LLLL:"dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ĕнер] LT [сехетре]",nextWeek:"[Çитес] dddd LT [сехетре]",lastWeek:"[Иртнĕ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(h){var g=/сехет$/i.exec(h)?"рен":/çул$/i.exec(h)?"тан":"ран";
return h+g
},past:"%s каялла",s:"пĕр-ик çеккунт",m:"пĕр минут",mm:"%d минут",h:"пĕр сехет",hh:"%d сехет",d:"пĕр кун",dd:"%d кун",M:"пĕр уйăх",MM:"%d уйăх",y:"пĕр çул",yy:"%d çул"},ordinalParse:/\d{1,2}-мĕш/,ordinal:"%d-мĕш",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(h){var g=h,j="",i=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];
return g>20?j=40===g||50===g||60===g||80===g||100===g?"fed":"ain":g>0&&(j=i[g]),h+j
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd [d.] D. MMMM YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(i,h,k){var j={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[i+" Tage",i+" Tagen"],M:["ein Monat","einem Monat"],MM:[i+" Monate",i+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[i+" Jahre",i+" Jahren"]};
return h?j[k][0]:j[k][1]
}return g.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:f,mm:"%d Minuten",h:f,hh:"%d Stunden",d:f,dd:f,M:f,MM:f,y:f,yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(i,h,k){var j={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[i+" Tage",i+" Tagen"],M:["ein Monat","einem Monat"],MM:[i+" Monate",i+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[i+" Jahre",i+" Jahren"]};
return h?j[k][0]:j[k][1]
}return g.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:f,mm:"%d Minuten",h:f,hh:"%d Stunden",d:f,dd:f,M:f,MM:f,y:f,yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(h,g){return/D/.test(g.substring(0,g.indexOf("MMMM")))?this._monthsGenitiveEl[h.month()]:this._monthsNominativeEl[h.month()]
},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(h,g,i){return h>11?i?"μμ":"ΜΜ":i?"πμ":"ΠΜ"
},isPM:function(g){return"μ"===(g+"").toLowerCase()[0]
},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";
default:return"[την προηγούμενη] dddd [{}] LT"
}},sameElse:"L"},calendar:function(h,g){var j=this._calendarEl[h],i=g&&g.hours();
return"function"==typeof j&&(j=j.apply(g)),j.replace("{}",i%12===1?"στη":"στις")
},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(h){var g=h%10,i=1===~~(h%100/10)?"th":1===g?"st":2===g?"nd":3===g?"rd":"th";
return h+i
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(h){var g=h%10,i=1===~~(h%100/10)?"th":1===g?"st":2===g?"nd":3===g?"rd":"th";
return h+i
}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(h){var g=h%10,i=1===~~(h%100/10)?"th":1===g?"st":2===g?"nd":3===g?"rd":"th";
return h+i
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiemParse:/[ap]\.t\.m/i,isPM:function(g){return"p"===g.charAt(0).toLowerCase()
},meridiem:function(h,g,i){return h>11?i?"p.t.m.":"P.T.M.":i?"a.t.m.":"A.T.M."
},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){var f="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),h="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
return g.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(i,j){return/-MMM-/.test(j)?h[i.month()]:f[i.month()]
},weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"
},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"
},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"
},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"
},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"
},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(i,h,l,k){var j={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[i+" minuti",i+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[i+" tunni",i+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[i+" kuu",i+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[i+" aasta",i+" aastat"]};
return h?j[l][2]?j[l][2]:j[l][1]:k?j[l][0]:j[l][1]
}return g.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:f,m:f,mm:f,h:f,hh:f,d:f,dd:"%d päeva",M:f,MM:f,y:f,yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){var f={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},h={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};
return g.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یکشنبه_دوشنبه_سهشنبه_چهارشنبه_پنجشنبه_جمعه_شنبه".split("_"),weekdaysShort:"یکشنبه_دوشنبه_سهشنبه_چهارشنبه_پنجشنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(i){return/بعد از ظهر/.test(i)
},meridiem:function(i){return 12>i?"قبل از ظهر":"بعد از ظهر"
},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(i){return i.replace(/[۰-۹]/g,function(j){return h[j]
}).replace(/،/g,",")
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
}).replace(/,/g,"،")
},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})
}),function(f){f(aA)
}(function(g){function f(l,k,o,n){var m="";
switch(o){case"s":return n?"muutaman sekunnin":"muutama sekunti";
case"m":return n?"minuutin":"minuutti";
case"mm":m=n?"minuutin":"minuuttia";
break;
case"h":return n?"tunnin":"tunti";
case"hh":m=n?"tunnin":"tuntia";
break;
case"d":return n?"päivän":"päivä";
case"dd":m=n?"päivän":"päivää";
break;
case"M":return n?"kuukauden":"kuukausi";
case"MM":m=n?"kuukauden":"kuukautta";
break;
case"y":return n?"vuoden":"vuosi";
case"yy":m=n?"vuoden":"vuotta"
}return m=j(l,n)+" "+m
}function j(l,k){return 10>l?k?h[l]:i[l]:l
}var i="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),h=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",i[7],i[8],i[9]];
return g.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:f,m:f,mm:f,h:f,hh:f,d:f,dd:f,M:f,MM:f,y:f,yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(g){return g+(1===g?"er":"")
}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(g){return g+(1===g?"er":"")
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){var f="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),h="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
return g.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(i,j){return/-MMM-/.test(j)?h[i.month()]:f[i.month()]
},weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(i){return i+(1===i||8===i||i>=20?"ste":"de")
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"
},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"
},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"
},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"
},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"
},sameElse:"L"},relativeTime:{future:function(g){return"uns segundos"===g?"nuns segundos":"en "+g
},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY LT",LLLL:"dddd, D [ב]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(g){return 2===g?"שעתיים":g+" שעות"
},d:"יום",dd:function(g){return 2===g?"יומיים":g+" ימים"
},M:"חודש",MM:function(g){return 2===g?"חודשיים":g+" חודשים"
},y:"שנה",yy:function(g){return 2===g?"שנתיים":g%10===0&&10!==g?g+" שנה":g+" שנים"
}}})
}),function(f){f(aA)
}(function(g){var f={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},h={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
return g.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(i){return i.replace(/[१२३४५६७८९०]/g,function(j){return h[j]
})
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
})
},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(j,i){return 12===j&&(j=0),"रात"===i?4>j?j:j+12:"सुबह"===i?j:"दोपहर"===i?j>=10?j:j+12:"शाम"===i?j+12:void 0
},meridiem:function(i){return 4>i?"रात":10>i?"सुबह":17>i?"दोपहर":20>i?"शाम":"रात"
},week:{dow:0,doy:6}})
}),function(f){f(aA)
}(function(g){function f(i,h,k){var j=i+" ";
switch(k){case"m":return h?"jedna minuta":"jedne minute";
case"mm":return j+=1===i?"minuta":2===i||3===i||4===i?"minute":"minuta";
case"h":return h?"jedan sat":"jednog sata";
case"hh":return j+=1===i?"sat":2===i||3===i||4===i?"sata":"sati";
case"dd":return j+=1===i?"dan":"dana";
case"MM":return j+=1===i?"mjesec":2===i||3===i||4===i?"mjeseca":"mjeseci";
case"yy":return j+=1===i?"godina":2===i||3===i||4===i?"godine":"godina"
}}return g.defineLocale("hr",{months:"sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";
case 3:return"[u] [srijedu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";
case 6:return"[prošle] [subote] [u] LT";
case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:f,mm:f,h:f,hh:f,d:"dan",dd:f,M:"mjesec",MM:f,y:"godinu",yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){function f(k,j,n,m){var l=k;
switch(n){case"s":return m||j?"néhány másodperc":"néhány másodperce";
case"m":return"egy"+(m||j?" perc":" perce");
case"mm":return l+(m||j?" perc":" perce");
case"h":return"egy"+(m||j?" óra":" órája");
case"hh":return l+(m||j?" óra":" órája");
case"d":return"egy"+(m||j?" nap":" napja");
case"dd":return l+(m||j?" nap":" napja");
case"M":return"egy"+(m||j?" hónap":" hónapja");
case"MM":return l+(m||j?" hónap":" hónapja");
case"y":return"egy"+(m||j?" év":" éve");
case"yy":return l+(m||j?" év":" éve")
}return""
}function i(j){return(j?"":"[múlt] ")+"["+h[this.day()]+"] LT[-kor]"
}var h="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
return g.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},meridiemParse:/de|du/i,isPM:function(j){return"u"===j.charAt(1).toLowerCase()
},meridiem:function(k,j,l){return 12>k?l===!0?"de":"DE":l===!0?"du":"DU"
},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return i.call(this,!0)
},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return i.call(this,!1)
},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:f,m:f,mm:f,h:f,hh:f,d:f,dd:f,M:f,MM:f,y:f,yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){function f(k,j){var m={nominative:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),accusative:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")},l=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(j)?"accusative":"nominative";
return m[l][k.month()]
}function i(k){var j="հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
return j[k.month()]
}function h(k){var j="կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
return j[k.day()]
}return g.defineLocale("hy-am",{months:f,monthsShort:i,weekdays:h,weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., LT",LLLL:"dddd, D MMMM YYYY թ., LT"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"
},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"
},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(j){return/^(ցերեկվա|երեկոյան)$/.test(j)
},meridiem:function(j){return 4>j?"գիշերվա":12>j?"առավոտվա":17>j?"ցերեկվա":"երեկոյան"
},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(k,j){switch(j){case"DDD":case"w":case"W":case"DDDo":return 1===k?k+"-ին":k+"-րդ";
default:return k
}},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(h,g){return 12===h&&(h=0),"pagi"===g?h:"siang"===g?h>=11?h:h+12:"sore"===g||"malam"===g?h+12:void 0
},meridiem:function(g){return 11>g?"pagi":15>g?"siang":19>g?"sore":"malam"
},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){function f(i){return i%100===11?!0:i%10===1?!1:!0
}function h(i,m,l,k){var j=i+" ";
switch(l){case"s":return m||k?"nokkrar sekúndur":"nokkrum sekúndum";
case"m":return m?"mínúta":"mínútu";
case"mm":return f(i)?j+(m||k?"mínútur":"mínútum"):m?j+"mínúta":j+"mínútu";
case"hh":return f(i)?j+(m||k?"klukkustundir":"klukkustundum"):j+"klukkustund";
case"d":return m?"dagur":k?"dag":"degi";
case"dd":return f(i)?m?j+"dagar":j+(k?"daga":"dögum"):m?j+"dagur":j+(k?"dag":"degi");
case"M":return m?"mánuður":k?"mánuð":"mánuði";
case"MM":return f(i)?m?j+"mánuðir":j+(k?"mánuði":"mánuðum"):m?j+"mánuður":j+(k?"mánuð":"mánuði");
case"y":return m||k?"ár":"ári";
case"yy":return f(i)?j+(m||k?"ár":"árum"):j+(m||k?"ár":"ári")
}}return g.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:h,m:h,mm:h,h:"klukkustund",hh:h,d:h,dd:h,M:h,MM:h,y:h,yy:h},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";
default:return"[lo scorso] dddd [alle] LT"
}},sameElse:"L"},relativeTime:{future:function(g){return(/^[0-9].+$/.test(g)?"tra":"in")+" "+g
},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"LTs秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiemParse:/午前|午後/i,isPM:function(g){return"午後"===g
},meridiem:function(g){return 12>g?"午前":"午後"
},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})
}),function(f){f(aA)
}(function(g){function f(j,i){var l={nominative:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),accusative:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},k=/D[oD] *MMMM?/.test(i)?"accusative":"nominative";
return l[k][j.month()]
}function h(j,i){var l={nominative:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),accusative:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")},k=/(წინა|შემდეგ)/.test(i)?"accusative":"nominative";
return l[k][j.day()]
}return g.defineLocale("ka",{months:f,monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:h,weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(i){return/(წამი|წუთი|საათი|წელი)/.test(i)?i.replace(/ი$/,"ში"):i+"ში"
},past:function(i){return/(წამი|წუთი|საათი|დღე|თვე)/.test(i)?i.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(i)?i.replace(/წელი$/,"წლის წინ"):void 0
},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(i){return 0===i?i:1===i?i+"-ლი":20>i||100>=i&&i%20===0||i%100===0?"მე-"+i:i+"-ე"
},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("km",{months:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[ថ្ងៃនៈ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 LT",LLLL:"YYYY년 MMMM D일 dddd LT"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇초",ss:"%d초",m:"일분",mm:"%d분",h:"한시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한달",MM:"%d달",y:"일년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(g){return"오후"===g
},meridiem:function(g){return 12>g?"오전":"오후"
}})
}),function(f){f(aA)
}(function(g){function f(l,k,n){var m={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};
return k?m[n][0]:m[n][1]
}function j(l){var k=l.substr(0,l.indexOf(" "));
return h(k)?"a "+l:"an "+l
}function i(l){var k=l.substr(0,l.indexOf(" "));
return h(k)?"viru "+l:"virun "+l
}function h(l){if(l=parseInt(l,10),isNaN(l)){return !1
}if(0>l){return !0
}if(10>l){return l>=4&&7>=l?!0:!1
}if(100>l){var k=l%10,m=l/10;
return h(0===k?m:k)
}if(10000>l){for(;
l>=10;
){l/=10
}return h(l)
}return l/=1000,h(l)
}return g.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";
default:return"[Leschte] dddd [um] LT"
}}},relativeTime:{future:j,past:i,s:"e puer Sekonnen",m:f,mm:"%d Minutten",h:f,hh:"%d Stonnen",d:f,dd:"%d Deeg",M:f,MM:"%d Méint",y:f,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(r){function q(g,f,i,h){return f?"kelios sekundės":h?"kelių sekundžių":"kelias sekundes"
}function p(g,f,i,h){return f?n(i)[0]:h?n(i)[1]:n(i)[2]
}function o(f){return f%10===0||f>10&&20>f
}function n(f){return k[f].split("_")
}function m(s,i,w,v){var u=s+" ";
return 1===s?u+p(s,i,w[0],v):i?u+(o(s)?n(w)[1]:n(w)[0]):v?u+n(w)[1]:u+(o(s)?n(w)[1]:n(w)[2])
}function l(g,f){var i=-1===f.indexOf("dddd HH:mm"),h=j[g.day()];
return i?h:h.substring(0,h.length-2)+"į"
}var k={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"},j="sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
return r.defineLocale("lt",{months:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:l,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:q,m:p,mm:m,h:p,hh:m,d:p,dd:m,M:p,MM:m,y:p,yy:m},ordinalParse:/\d{1,2}-oji/,ordinal:function(f){return f+"-oji"
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(k,j,m){var l=k.split("_");
return m?j%10===1&&11!==j?l[2]:l[3]:j%10===1&&11!==j?l[0]:l[1]
}function i(j,l,k){return j+" "+f(h[k],j,l)
}var h={mm:"minūti_minūtes_minūte_minūtes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mēnesi_mēnešus_mēnesis_mēneši",yy:"gadu_gadus_gads_gadi"};
return g.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s vēlāk",past:"%s agrāk",s:"dažas sekundes",m:"minūti",mm:i,h:"stundu",hh:i,d:"dienu",dd:i,M:"mēnesi",MM:i,y:"gadu",yy:i},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Во изминатата] dddd [во] LT";
case 1:case 2:case 4:case 5:return"[Во изминатиот] dddd [во] LT"
}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(h){var g=h%10,i=h%100;
return 0===h?h+"-ев":0===i?h+"-ен":i>10&&20>i?h+"-ти":1===g?h+"-ви":2===g?h+"-ри":7===g||8===g?h+"-ми":h+"-ти"
},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,isPM:function(g){return/^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(g)
},meridiem:function(g){return 4>g?"രാത്രി":12>g?"രാവിലെ":17>g?"ഉച്ച കഴിഞ്ഞ്":20>g?"വൈകുന്നേരം":"രാത്രി"
}})
}),function(f){f(aA)
}(function(g){var f={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},h={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
return g.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%s नंतर",past:"%s पूर्वी",s:"सेकंद",m:"एक मिनिट",mm:"%d मिनिटे",h:"एक तास",hh:"%d तास",d:"एक दिवस",dd:"%d दिवस",M:"एक महिना",MM:"%d महिने",y:"एक वर्ष",yy:"%d वर्षे"},preparse:function(i){return i.replace(/[१२३४५६७८९०]/g,function(j){return h[j]
})
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
})
},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(j,i){return 12===j&&(j=0),"रात्री"===i?4>j?j:j+12:"सकाळी"===i?j:"दुपारी"===i?j>=10?j:j+12:"सायंकाळी"===i?j+12:void 0
},meridiem:function(i){return 4>i?"रात्री":10>i?"सकाळी":17>i?"दुपारी":20>i?"सायंकाळी":"रात्री"
},week:{dow:0,doy:6}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(h,g){return 12===h&&(h=0),"pagi"===g?h:"tengahari"===g?h>=11?h:h+12:"petang"===g||"malam"===g?h+12:void 0
},meridiem:function(g){return 11>g?"pagi":15>g?"tengahari":19>g?"petang":"malam"
},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){var f={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},h={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};
return g.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(i){return i.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(j){return h[j]
})
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
})
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tirs_ons_tors_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"H.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){var f={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},h={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};
return g.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आइ._सो._मङ्_बु._बि._शु._श.".split("_"),longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(i){return i.replace(/[१२३४५६७८९०]/g,function(j){return h[j]
})
},postformat:function(i){return i.replace(/\d/g,function(j){return f[j]
})
},meridiemParse:/राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,meridiemHour:function(j,i){return 12===j&&(j=0),"राती"===i?3>j?j:j+12:"बिहान"===i?j:"दिउँसो"===i?j>=10?j:j+12:"बेलुका"===i||"साँझ"===i?j+12:void 0
},meridiem:function(i){return 3>i?"राती":10>i?"बिहान":15>i?"दिउँसो":18>i?"बेलुका":20>i?"साँझ":"राती"
},calendar:{sameDay:"[आज] LT",nextDay:"[भोली] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडी",s:"केही समय",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){var f="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),h="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
return g.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(i,j){return/-MMM-/.test(j)?h[i.month()]:f[i.month()]
},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(i){return i+(1===i||8===i||i>=20?"ste":"de")
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(k){return 5>k%10&&k%10>1&&~~(k/10)%10!==1
}function j(k,n,m){var l=k+" ";
switch(m){case"m":return n?"minuta":"minutę";
case"mm":return l+(f(k)?"minuty":"minut");
case"h":return n?"godzina":"godzinę";
case"hh":return l+(f(k)?"godziny":"godzin");
case"MM":return l+(f(k)?"miesiące":"miesięcy");
case"yy":return l+(f(k)?"lata":"lat")
}}var i="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),h="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
return g.defineLocale("pl",{months:function(l,k){return/D MMMM/.test(k)?h[l.month()]:i[l.month()]
},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";
case 3:return"[W zeszłą środę o] LT";
case 6:return"[W zeszłą sobotę o] LT";
default:return"[W zeszły] dddd [o] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:j,mm:j,h:j,hh:j,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:j,y:"rok",yy:j},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [às] LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"})
}),function(f){f(aA)
}(function(f){return f.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"
},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(i,h,l){var k={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},j=" ";
return(i%100>=20||i>=100&&i%100===0)&&(j=" de "),i+j+k[l]
}return g.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:f,h:"o oră",hh:f,d:"o zi",dd:f,M:"o lună",MM:f,y:"un an",yy:f},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(h){function g(m,f){var n=m.split("_");
return f%10===1&&f%100!==11?n[0]:f%10>=2&&4>=f%10&&(10>f%100||f%100>=20)?n[1]:n[2]
}function l(f,o,n){var m={mm:o?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};
return"m"===n?o?"минута":"минуту":f+" "+g(m[n],+f)
}function k(m,f){var o={nominative:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),accusative:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")},n=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(f)?"accusative":"nominative";
return o[n][m.month()]
}function j(m,f){var o={nominative:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),accusative:"янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")},n=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(f)?"accusative":"nominative";
return o[n][m.month()]
}function i(m,f){var o={nominative:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),accusative:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")},n=/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(f)?"accusative":"nominative";
return o[n][m.day()]
}return h.defineLocale("ru",{months:k,monthsShort:j,weekdays:i,weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[й|я]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i],longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., LT",LLLL:"dddd, D MMMM YYYY г., LT"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"
},lastWeek:function(f){if(f.week()===this.week()){return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT"
}switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";
case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";
case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"
}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(f){return/^(дня|вечера)$/.test(f)
},meridiem:function(f){return 4>f?"ночи":12>f?"утра":17>f?"дня":"вечера"
},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(m,f){switch(f){case"M":case"d":case"DDD":return m+"-й";
case"D":return m+"-го";
case"w":case"W":return m+"-я";
default:return m
}},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){function f(k){return k>1&&5>k
}function j(k,o,n,m){var l=k+" ";
switch(n){case"s":return o||m?"pár sekúnd":"pár sekundami";
case"m":return o?"minúta":m?"minútu":"minútou";
case"mm":return o||m?l+(f(k)?"minúty":"minút"):l+"minútami";
break;
case"h":return o?"hodina":m?"hodinu":"hodinou";
case"hh":return o||m?l+(f(k)?"hodiny":"hodín"):l+"hodinami";
break;
case"d":return o||m?"deň":"dňom";
case"dd":return o||m?l+(f(k)?"dni":"dní"):l+"dňami";
break;
case"M":return o||m?"mesiac":"mesiacom";
case"MM":return o||m?l+(f(k)?"mesiace":"mesiacov"):l+"mesiacmi";
break;
case"y":return o||m?"rok":"rokom";
case"yy":return o||m?l+(f(k)?"roky":"rokov"):l+"rokmi"
}}var i="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),h="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
return g.defineLocale("sk",{months:i,monthsShort:h,monthsParse:function(l,k){var n,m=[];
for(n=0;
12>n;
n++){m[n]=new RegExp("^"+l[n]+"$|^"+k[n]+"$","i")
}return m
}(i,h),weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";
case 1:case 2:return"[v] dddd [o] LT";
case 3:return"[v stredu o] LT";
case 4:return"[vo štvrtok o] LT";
case 5:return"[v piatok o] LT";
case 6:return"[v sobotu o] LT"
}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";
case 1:case 2:return"[minulý] dddd [o] LT";
case 3:return"[minulú stredu o] LT";
case 4:case 5:return"[minulý] dddd [o] LT";
case 6:return"[minulú sobotu o] LT"
}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:j,m:j,mm:j,h:j,hh:j,d:j,dd:j,M:j,MM:j,y:j,yy:j},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){function f(i,h,k){var j=i+" ";
switch(k){case"m":return h?"ena minuta":"eno minuto";
case"mm":return j+=1===i?"minuta":2===i?"minuti":3===i||4===i?"minute":"minut";
case"h":return h?"ena ura":"eno uro";
case"hh":return j+=1===i?"ura":2===i?"uri":3===i||4===i?"ure":"ur";
case"dd":return j+=1===i?"dan":"dni";
case"MM":return j+=1===i?"mesec":2===i?"meseca":3===i||4===i?"mesece":"mesecev";
case"yy":return j+=1===i?"leto":2===i?"leti":3===i||4===i?"leta":"let"
}}return g.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";
case 3:return"[v] [sredo] [ob] LT";
case 6:return"[v] [soboto] [ob] LT";
case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"
}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejšnja] dddd [ob] LT";
case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"
}},sameElse:"L"},relativeTime:{future:"čez %s",past:"%s nazaj",s:"nekaj sekund",m:f,mm:f,h:f,hh:f,d:"en dan",dd:f,M:"en mesec",MM:f,y:"eno leto",yy:f},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),meridiemParse:/PD|MD/,isPM:function(g){return"M"===g.charAt(0)
},meridiem:function(g){return 12>g?"PD":"MD"
},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){var f={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(i,h){return 1===i?h[0]:i>=2&&4>=i?h[1]:h[2]
},translate:function(h,k,j){var i=f.words[j];
return 1===j.length?k?i[0]:i[1]:h+" "+f.correctGrammaticalCase(h,i)
}};
return g.defineLocale("sr-cyrl",{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],monthsShort:["јан.","феб.","мар.","апр.","мај","јун","јул","авг.","сеп.","окт.","нов.","дец."],weekdays:["недеља","понедељак","уторак","среда","четвртак","петак","субота"],weekdaysShort:["нед.","пон.","уто.","сре.","чет.","пет.","суб."],weekdaysMin:["не","по","ут","ср","че","пе","су"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";
case 3:return"[у] [среду] [у] LT";
case 6:return"[у] [суботу] [у] LT";
case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"
}},lastDay:"[јуче у] LT",lastWeek:function(){var h=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];
return h[this.day()]
},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:f.translate,mm:f.translate,h:f.translate,hh:f.translate,d:"дан",dd:f.translate,M:"месец",MM:f.translate,y:"годину",yy:f.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(g){var f={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(i,h){return 1===i?h[0]:i>=2&&4>=i?h[1]:h[2]
},translate:function(h,k,j){var i=f.words[j];
return 1===j.length?k?i[0]:i[1]:h+" "+f.correctGrammaticalCase(h,i)
}};
return g.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","čet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","če","pe","su"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";
case 3:return"[u] [sredu] [u] LT";
case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"
}},lastDay:"[juče u] LT",lastWeek:function(){var h=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];
return h[this.day()]
},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:f.translate,mm:f.translate,h:f.translate,hh:f.translate,d:"dan",dd:f.translate,M:"mesec",MM:f.translate,y:"godinu",yy:f.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"dddd LT",lastWeek:"[Förra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(h){var g=h%10,i=1===~~(h%100/10)?"e":1===g?"a":2===g?"a":"e";
return h+i
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(g){return g+"வது"
},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(g){return 2>g?" யாமம்":6>g?" வைகறை":10>g?" காலை":14>g?" நண்பகல்":18>g?" எற்பாடு":22>g?" மாலை":" யாமம்"
},meridiemHour:function(h,g){return 12===h&&(h=0),"யாமம்"===g?2>h?h:h+12:"வைகறை"===g||"காலை"===g?h:"நண்பகல்"===g&&h>=10?h:h+12
},week:{dow:0,doy:6}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),longDateFormat:{LT:"H นาฬิกา m นาที",LTS:"LT s วินาที",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา LT",LLLL:"วันddddที่ D MMMM YYYY เวลา LT"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(g){return"หลังเที่ยง"===g
},meridiem:function(g){return 12>g?"ก่อนเที่ยง":"หลังเที่ยง"
},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM DD, YYYY LT"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(g){return g
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(g){var f={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};
return g.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(h){if(0===h){return h+"'ıncı"
}var k=h%10,j=h%100-k,i=h>=100?100:null;
return h+(f[k]||f[j]||f[i])
},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})
}),function(f){f(aA)
}(function(h){function g(m,f){var n=m.split("_");
return f%10===1&&f%100!==11?n[0]:f%10>=2&&4>=f%10&&(10>f%100||f%100>=20)?n[1]:n[2]
}function l(f,o,n){var m={mm:"хвилина_хвилини_хвилин",hh:"година_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};
return"m"===n?o?"хвилина":"хвилину":"h"===n?o?"година":"годину":f+" "+g(m[n],+f)
}function k(m,f){var o={nominative:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),accusative:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")},n=/D[oD]? *MMMM?/.test(f)?"accusative":"nominative";
return o[n][m.month()]
}function j(m,f){var o={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},n=/(\[[ВвУу]\]) ?dddd/.test(f)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(f)?"genitive":"nominative";
return o[n][m.day()]
}function i(f){return function(){return f+"о"+(11===this.hours()?"б":"")+"] LT"
}
}return h.defineLocale("uk",{months:k,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:j,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., LT",LLLL:"dddd, D MMMM YYYY р., LT"},calendar:{sameDay:i("[Сьогодні "),nextDay:i("[Завтра "),lastDay:i("[Вчора "),nextWeek:i("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return i("[Минулої] dddd [").call(this);
case 1:case 2:case 4:return i("[Минулого] dddd [").call(this)
}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:l,mm:l,h:"годину",hh:l,d:"день",dd:l,M:"місяць",MM:l,y:"рік",yy:l},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(f){return/^(дня|вечора)$/.test(f)
},meridiem:function(f){return 4>f?"ночі":12>f?"ранку":17>f?"дня":"вечора"
},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(m,f){switch(f){case"M":case"d":case"DDD":case"w":case"W":return m+"-й";
case"D":return m+"-го";
default:return m
}},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("uz",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY LT",LLLL:"dddd, D MMMM [năm] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(g){return g
},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(h,g){return 12===h&&(h=0),"凌晨"===g||"早上"===g||"上午"===g?h:"下午"===g||"晚上"===g?h+12:h>=11?h:h+12
},meridiem:function(h,g){var i=100*h+g;
return 600>i?"凌晨":900>i?"早上":1130>i?"上午":1230>i?"中午":1800>i?"下午":"晚上"
},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"
},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"
},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"
},nextWeek:function(){var g,h;
return g=f().startOf("week"),h=this.unix()-g.unix()>=604800?"[下]":"[本]",0===this.minutes()?h+"dddAh点整":h+"dddAh点mm"
},lastWeek:function(){var g,h;
return g=f().startOf("week"),h=this.unix()<g.unix()?"[上]":"[本]",0===this.minutes()?h+"dddAh点整":h+"dddAh点mm"
},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(h,g){switch(g){case"d":case"D":case"DDD":return h+"日";
case"M":return h+"月";
case"w":case"W":return h+"周";
default:return h
}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})
}),function(f){f(aA)
}(function(f){return f.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY年MMMD日ddddLT",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日LT",llll:"YYYY年MMMD日ddddLT"},meridiemParse:/早上|上午|中午|下午|晚上/,meridiemHour:function(h,g){return 12===h&&(h=0),"早上"===g||"上午"===g?h:"中午"===g?h>=11?h:h+12:"下午"===g||"晚上"===g?h+12:void 0
},meridiem:function(h,g){var i=100*h+g;
return 900>i?"早上":1130>i?"上午":1230>i?"中午":1800>i?"下午":"晚上"
},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(h,g){switch(g){case"d":case"D":case"DDD":return h+"日";
case"M":return h+"月";
case"w":case"W":return h+"週";
default:return h
}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d分鐘",h:"一小時",hh:"%d小時",d:"一天",dd:"%d天",M:"一個月",MM:"%d個月",y:"一年",yy:"%d年"}})
}),aA.locale("en"),an?module.exports=aA:"function"==typeof e&&e.amd?(e("moment",["require","exports","module"],function(g,f,h){return h.config&&h.config()&&h.config().noGlobal===!0&&(bU.moment=ao),aA
}),be(!0)):be()
}).call(this);
e("calendar",["jquery","lodash","moment","clickTouch","jquery.hammer"],function(j,g,k,h,f){var m={dragLockToAxis:true,dragBlockHorizontal:true};
var i=function(o,p,n){if(n.allowSameDateReturn){return o<p.from
}else{return o<=p.from
}};
var l=function(u,v){var Q=j(u);
var E;
var O;
var r=true;
var P={depart:"ui-calendar-depart",returning:"ui-calendar-return",start:"date-range-start",end:"date-range-end",selected:"date-range-selected"};
var M="ui-datepicker-prev";
var I="ui-datepicker-next";
var B="ui-state-disabled";
var H="ui-datepicker-calendar";
var A={from:null,to:null};
var w=function(S,T,R){return new Date(S,T,R)
};
var n=function(R){Q.trigger("select.calendar",[{from:g.isNull(R.from)?null:R.from.toDate(),to:g.isNull(R.to)?null:R.to.toDate()}])
};
var s=function(R){Q.trigger("reset.calendar",[R])
};
var x=function(U,T){var S="depart";
var R=k(U);
if(!z()){A.from=R;
A.to=null
}else{if(A.from===null||A.to!==null||i(R,A,v)){A.from=R;
A.to=null
}else{A.to=R;
S="return"
}}n(A);
setTimeout(function(){L();
Q.find("a.ui-state-active:last").focus()
})
};
var z=function(){return r
};
var G=function(R){var S="";
if(R.isAfter(A.from)&&R.isBefore(A.to)){S=P.selected
}if(R.isSame(A.to)){S=P.end
}if(R.isSame(A.from)){S=P.start
}if(R.isSame(A.from)&&R.isSame(A.to)){S=P.start+" "+P.end
}return S
};
var y=function(S){var T="";
var R=k(S);
if(!z()){if(R.isSame(A.from)){T=P.start+" "+P.end
}}else{T=G(R)
}setTimeout(function(){L();
D()
});
return[true,T]
};
var L=function(){Q.find("."+M).not("."+B).attr("role","button").attr("tabindex",0);
Q.find("."+I).not("."+B).attr("role","button").attr("tabindex",0)
};
var D=function(){Q.find("."+I).insertAfter(Q.find("."+H).last())
};
var J=function(R,T,S){setTimeout(function(){L();
D();
Q.find("a.ui-state-default:first").focus()
})
};
var K=function(){Q.find("."+M).trigger("click")
};
var C=function(){Q.find("."+I).trigger("click")
};
var q=function(R){if(R.which===32||R.which===13){j(this).trigger("click");
R.preventDefault()
}};
var p=function(R){if(R.which===32||R.which===13){j(this).trigger("click");
R.preventDefault()
}};
var N=function(){return true
};
var o=function(){var R=j("."+M,"."+I);
R.hammer().on(h,N);
Q.hammer(m).on("swiperight",K);
Q.hammer(m).on("swipeleft",C);
Q.on("keypress","."+M,q);
Q.on("keypress","."+I,p)
};
var F=function(R){Q.datepicker(R);
o()
};
E={beforeShowDay:y,onSelect:x,firstDay:0,numberOfMonths:1,stepMonths:1,onChangeMonthYear:J};
O=j.extend({},E,v);
F(O);
return{departDate:function(){return g.isNull(A.from)?null:A.from.toDate()
},returnDate:function(){return g.isNull(A.to)?null:A.to.toDate()
},getDate:function(){return Q.datepicker("getDate")
},setDate:function(R){Q.datepicker("setDate",R)
},returnJourney:function(R){r=R;
return r
},clearDates:function(){A.from=A.to=null;
Q.datepicker("refresh");
s(A);
return this
},setDates:function(R){A.from=R.from;
A.to=R.to;
Q.datepicker("refresh");
return this
},changeNumberOfMonths:function(R,S){Q.datepicker("option","numberOfMonths",R);
Q.datepicker("option","stepMonths",S);
s();
return this
},setMaxDate:function(R){Q.datepicker("option","maxDate",R)
},setMinDate:function(R){Q.datepicker("option","minDate",R)
}}
};
return l
});
e("datePicker",["jquery","lodash","moment","calendar","jquery.hammer","clickTouch","modernizr","breakpoints"],function(m,q,u,g,s,i,k,n){var f={preventDefault:true,tapMaxTime:400};
var h=function(){return n.isLarge()
};
var j=function(v){var w=v.find('input[type="radio"]:checked').val();
var x=true;
if(w!==undefined&&(w==="O"||w==="OW")){x=false
}return x
};
var l=function(v){u.locale(v.lang,{week:{dow:v.firstDay}});
return u.locale()
};
var r=function(w,v){var x=w.datePickerId;
switch(x){case"book-hotel":case"book-hotel-subsidiary":return v.calendar.maxDate.hotel;
default:return v.calendar.maxDate.standard
}};
var p=function(v){var w=v.datePickerId;
if((w==="book-hotel")||(w==="book-package")||(w==="book-hotel-subsidiary")||(w==="book-package-subsidiary")){return false
}else{return true
}};
var o=function(w,v){this.$button=this.$el=m(w);
this.element=w;
this.dateFormats=v.calendar.formats;
l(v.calendar);
this.init(v)
};
o.prototype.init=function(v){this.datePickerId=this.$el.data("datePickerId");
this.$body=m("body").first();
this.$overlay=m('[data-date-picker="'+this.datePickerId+'"]');
this.calendars=this.$overlay.find(".calendar");
this.$tripType=this.$overlay.find(".book-trip-return");
this.$summary=this.$overlay.find(".dates-picker-summary");
this.$controls=this.$overlay.find(".dates-picker-controls");
this.$confirmation=this.$overlay.find(".button-confirmation");
this.$clear=this.$overlay.find(".control-clear");
this.$btnClose=this.$overlay.find(".control-close");
this.dates={from:null,to:null};
this.confirmedDates={from:null,to:null};
this.confirmedNights=null;
this.classes={hasDate:"has-date",hasDates:"has-dates",hasDepartDate:"has-depart-date",selected:"selected",overlayActive:"ui-overlay-active",takeoverActive:"ui-takeover-active"};
this.calendar=this.createCalendar(this.$overlay.find(".ui-calendar"),v);
this.calendar.returnJourney(j(this.$tripType));
this.bindEvents()
};
o.prototype.createCalendar=function(w,v){var x;
if(!m.data(w,"calendar")){x=m.data(w,"calendar",new g(w,{maxDate:r(this,v),minDate:0,firstDay:v.calendar.firstDay,dayNamesMin:u.weekdaysShort(),monthNames:u.months(),allowSameDateReturn:p(this)}))
}else{x=m.data(w,"calendar")
}return x
};
o.prototype.bindEvents=function(){this.$overlay.on("select.calendar",q.bind(this.onDateSelected,this));
this.$overlay.on("reset.calendar",q.bind(this.onCalendarReset,this));
this.$confirmation.hammer(f).on(i,q.bind(this.onConfirm,this));
this.$clear.hammer(f).on(i,q.bind(this.onClear,this));
this.$tripType.on("change",'input[type="radio"]',q.bind(this.onTripTypeChange,this));
this.$btnClose.hammer(f).on(i,q.bind(this.onClose,this));
this.$button.on("close.overlay",q.bind(this.onOverlayClose,this));
this.setNumberOfCalendarsOnResize(this.calendar)
};
o.prototype.onOverlayClose=function(v){this.disableFullscreen()
};
o.prototype.enableFullscreen=function(){this.$body.addClass(this.classes.takeoverActive);
return this
};
o.prototype.disableFullscreen=function(){this.$body.removeClass(this.classes.takeoverActive);
return this
};
o.prototype.onConfirm=function(v){this.hideOverlay();
v.preventDefault()
};
o.prototype.setNumberOfCalendarsOnResize=function(w){var v=false;
if(h()){v=true;
w.changeNumberOfMonths(2,1)
}m(window).smartresize(function(){if(h()&&!v){v=true;
w.changeNumberOfMonths(2,1)
}else{if(!h()&&v){v=false;
w.changeNumberOfMonths(1,1)
}}})
};
o.prototype.onControlPress=function(v){if(m(v.target).hasClass("control-clear")){this.calendars.each(q.bind(function(w,x){this.clearCalendar(m(x))
},this))
}v.preventDefault()
};
o.prototype.onClose=function(v){this.hideOverlay();
v.preventDefault()
};
o.prototype.onCalendarReset=function(w,x){var v;
for(v in x){if(x.hasOwnProperty(v)){this.setInputValue(v).setSummaryValue(v).setButtonValue(v)
}}return this
};
o.prototype.onDateConfirmed=function(w){var v;
this.confirmedDates.from=w.from;
this.confirmedDates.to=w.to;
this.confirmedNights=u(this.confirmedDates.to).diff(u(this.confirmedDates.from),"days");
for(v in this.confirmedDates){this.setButtonValue(v,this.confirmedDates[v]);
this.setInputValue(v,this.confirmedDates[v]);
if(v==="from"){this.setInputValue("to")
}}if(!q.isNull(this.confirmedDates.from)){this.$button.addClass(this.classes.hasDates)
}else{this.$button.removeClass(this.classes.hasDates)
}return this
};
o.prototype.onDateSelected=function(w,x){var v;
for(v in x){if(x.hasOwnProperty(v)&&!q.isNull(x[v])){this.setSummaryValue(v,x[v]);
if(v==="from"){this.setSummaryValue("to")
}}this.dates[v]=x[v]
}this.onDateConfirmed(this.dates);
return this
};
o.prototype.setInputValue=function(w,v){var x=this.$overlay.find('input[data-calendar-name="'+w+'"]');
if(!!v){x.val(u(v).format(this.dateFormats.form))
}else{x.val("")
}return this
};
o.prototype.setSummaryValue=function(y,w){var v=this.$summary.find("."+y);
var x=v.find(".instruction");
var B=v.find(".date-full");
var z=v.find(".date-short");
var A=v.data();
if(!!w){x.text(A.prefix);
B.text(u(w).format(this.dateFormats.summaryFull));
z.text(u(w).format(this.dateFormats.summaryShort));
v.addClass(this.classes.hasDate);
if(y==="from"){this.$summary.addClass(this.classes.hasDepartDate)
}}else{x.text(A.defaultState);
B.text("");
z.text("");
v.removeClass(this.classes.hasDate);
if(y==="from"){this.$summary.removeClass(this.classes.hasDepartDate)
}}return this
};
o.prototype.setButtonValue=function(x,w){var v=this.$button.find("."+x);
var z=v.find(".date-full");
var y=v.find(".date-short");
var A=v.data("showNights");
if(!!w){if(x==="to"&&v.data("showNights")){z.text(this.confirmedNights+" "+v.data("nightsLabel"));
y.text(this.confirmedNights+" "+v.data("nightsLabel"))
}else{z.text(u(w).format(this.dateFormats.summaryFull));
y.text(u(w).format(this.dateFormats.summaryShort))
}v.addClass(this.classes.hasDate)
}else{z.text("");
y.text("");
v.removeClass(this.classes.hasDate)
}return this
};
o.prototype.hasDate=function(v){return !m.trim(v.value)
};
o.prototype.hasDates=function(v){return q.every(v,q.bind(function(w){return this.hasDate(w)
},this))
};
o.prototype.clearCalendar=function(v){v.val("");
v.trigger("change")
};
o.prototype.hideOverlay=function(){this.disableFullscreen();
this.$el.trigger({type:"hide.overlay",button:this.$button})
};
o.prototype.enableReturnOn=function(){this.calendars.filter("#calendar-return").prop("disabled",false);
this.$button.removeClass("is-one-way");
this.$summary.find(".to").removeClass("is-visually-hidden")
};
o.prototype.disableReturnOn=function(){var v=this.calendars.filter("#calendar-return");
v.prop("disabled",true);
this.$button.addClass("is-one-way");
this.clearCalendar(v);
this.$summary.find(".to").addClass("is-visually-hidden")
};
o.prototype.onTripTypeChange=function(v){this.calendar.returnJourney(j(this.$tripType));
if(j(this.$tripType)){this.enableReturnOn()
}else{this.onDateSelected(null,this.dates);
this.disableReturnOn()
}this.calendar.setDates({from:this.dates.from===null?null:u(this.dates.from),to:this.dates.to===null?null:this.dates.to})
};
o.prototype.setDates=function(v){this.dates.from=v.from;
this.dates.to=v.to;
this.calendar.setDates({from:this.dates.from===null?null:u(this.dates.from),to:this.dates.to===null?null:u(this.dates.to)});
if(this.dates.from!==null){this.calendar.setDate(u(this.dates.from).format("MM/DD/YYYY"))
}this.onDateConfirmed(this.dates)
};
o.prototype.clearDates=function(){this.dates.from=null;
this.dates.to=null;
this.confirmedDates.from=null;
this.confirmedDates.to=null;
this.calendar.clearDates()
};
o.prototype.onClear=function(v){this.clearDates();
v.preventDefault()
};
return o
});
e("tripTypeSelector",["jquery","lodash","breakpoints"],function(j,g,i){var f=function(){return i.isSmall()
};
var h=function(x){var A;
var z="panel-active";
var v="panel-open";
var s;
var B;
var p=function(C){var D=B.filter(j('[data-option="'+C+'"]'));
A.find(".trip-type-small").removeClass("on");
A.find('.trip-type-small[data-value="'+C+'"]').addClass("on");
B.removeClass(v);
D.addClass(v)
};
var l=function(C){var D=B.filter(j('[data-option="'+C+'"]'));
B.removeClass(z);
D.addClass(z)
};
var o=function(E){var D=j(E.target).data("selection");
var C=this.value;
l(C);
p(C)
};
var y=function(E){var D=j(this);
var C=D.data("value");
A.find('.ui-radio[type="radio"][value="'+C+'"]').prop("checked",true).trigger("change")
};
var q=function(C){A.find(".ui-radio").first().prop("checked",true).trigger("change");
B.removeClass("panel-open");
A.find(".trip-type-small").removeClass("on")
};
var k=function(C){if(C.which===32||C.which===13){q(C)
}};
var w=function(E){var D=j(E.target).closest(".trip-type-panel");
var C=D.data("option");
if(!D.hasClass("on")){p(C)
}};
var n=function(C){C.on("change",'input[type="radio"]',o);
C.on("click",".trip-type-small",y);
B.on("click",".button-close",q);
B.on("focus",".field-input, .field-button",w);
B.on("keypress",".button-close",k)
};
var r=function(C){j("html, body").scrollTop(C)
};
var u=function(){return !!(A.find(".ui-radio:checked")[0])
};
if(!g.isEmpty(x)){A=x;
B=A.siblings(".trip-type-panel");
A.each(function(C,D){n(j(D))
});
var m=A.find("input:checked").val();
l(m)
}};
return h
});
e("passengerSelector",["jquery","lodash"],function(h,g){var f=function(k,j){var S;
var G;
var M;
var s;
var T;
var y;
var Q;
var P;
var w;
var U;
var I;
var i;
var ae;
var x;
var z;
var R;
var J;
var O;
var Y=function(af){if(af==="f"){i.html(R.noticeFirstClass);
ae.addClass("hidden");
x.removeClass("hidden")
}else{i.html(R.noticeOtherClasses);
ae.removeClass("hidden");
x.addClass("hidden")
}};
var D=function(af,ag){while(ag.iterator<ag.numOfNodes-ag.offsetList){h(af.find("option")[ag.removalNode]).remove();
ag.iterator++
}};
var E=function(ai,aj,af){var ah=0;
var ak=0;
if(ai.data("passengerType")==="adults"){ah=1
}for(;
ak<aj;
ak++){var ag=af+ah+ak;
ai.append('<option value="'+ag+'">'+ag+"</option>")
}};
var v=function(af,al,ai){var ak=al-af;
var an=ak;
var ao=1;
var aj=ai.find("option").length;
if(ai.data("passengerType")==="adults"){ao=0
}var am=parseInt(ak+ao,10);
var ah=ak-(aj-ao);
if(ak<aj){var ag={removalNode:am,numOfNodes:aj,offsetList:ao,iterator:an};
D(ai,ag)
}else{E(ai,ah,aj)
}};
var n=function(ag){var af=J-ag.childrenSelected;
var aj=af;
var ah=J-ag.adultSelected;
var ai=ah;
while(aj<ag.countAdults){h(U.find("option")[af]).remove();
aj++
}while(ai<ag.countChildren-1){h(I.find("option")[ah+1]).remove();
ai++
}};
var ab=function(ah){var aj=ah.countAdults+1;
var af=ah.countChildren;
var ag=O-ah.adultSelected;
var ai=O-ah.childrenSelected;
while(af<=ag){I.append('<option value="'+af+'">'+af+"</option>");
af++
}while(aj<=ai){U.append('<option value="'+aj+'">'+aj+"</option>");
aj++
}};
var r=function(ag){var af={countAdults:U.find("option").length,countChildren:I.find("option").length,adultSelected:U.val(),childrenSelected:I.val()};
if(ag==="f"){n(af)
}else{ab(af)
}};
var B=function(){U.val("1");
I.val("0");
U.trigger("change.updateButtonSummary");
I.trigger("change.updateButtonSummary")
};
var W=function(){var af={numberOfPassengers:0,numberOfInfants:0};
h.each(Q.find("select"),function(){if(h(this).attr("id").indexOf("passenger-infants")>=0){af.numberOfInfants+=parseInt(h(this).val(),10)
}af.numberOfPassengers+=parseInt(h(this).val(),10)
});
return af
};
var C=function(){var ag=P.find("input:radio:checked");
var af={};
if(!g.isPlainObject(ag)){af={label:ag.data("cabin-class"),category:ag.val().toLowerCase()}
}return af
};
var q=function(ag,af){if(h(ag.target).data("passengerType")==="adults"){v(af,J,I)
}else{if(h(ag.target).data("passengerType")==="children"){v(af,J,U)
}}};
var o=function(ag,af){if(h(ag.target).data("passengerType")==="adults"){v(af,O,I)
}else{if(h(ag.target).data("passengerType")==="children"){v(af,O,U)
}}};
var N=function(ag,aj,ah,ai,af){if((ag.category==="f"&&aj>J)||(ag.category!=="f"&&aj>O)){B();
ah.numberOfPassengers=1
}else{if(!h(ai.target).is("select")){r(ag.category)
}else{if(ag.category==="f"){q(ai,af)
}else{o(ai,af)
}}}};
var ad=function(ai){var ah=W();
var ag=C();
var af;
var aj=parseInt(ah.numberOfPassengers-ah.numberOfInfants,10);
Y(ag.category);
s.find(".button-placeholder").text(ah.numberOfPassengers+" "+z+" / "+ag.label);
try{af=parseInt(h(ai.target).val(),10);
h(ai.target).prev(".custom-select-trigger").find(".custom-select-text").html(af)
}catch(ak){return
}N(ag,aj,ah,ai,af)
};
var H=function(){h("body").trigger({type:"show.overlay",button:s})
};
var u=function(af){af.preventDefault();
H()
};
var p=function(af){return h(K(af)).data("cabinClass")
};
var K=function(af){return g.filter(G,function(ag){return ag.value===af
})[0]
};
var F=function(af){if(!w){w=P.find(".custom-select-trigger .custom-select-text")
}w.text(af)
};
var ac=function(af){K(af).checked=true;
G.trigger("change.updateButtonSummary")
};
var aa=function(af){M.value=af
};
var A=function(ag){var af=ag.target.value;
ac(af);
F(p(af))
};
var m=function(ag){var af=ag.target.value;
aa(af);
F(p(af))
};
var X=function(){Q.on("change.updateButtonSummary","select",ad);
P.on("change.updateButtonSummary","input:radio",ad);
y.on("click.onConfirmationPress",".button-confirmation",u);
S.on("change","input:radio",m);
S.on("change",".passenger-class",A)
};
var Z=function(af){return L("option",{value:af.value,innerHTML:h(af).data("cabinClass")})
};
var L=function(ag,af){var ai=document.createElement(ag);
var ah;
for(ah in af){ai[ah]=af[ah]
}return ai
};
var V=function(){var ah=document.createDocumentFragment();
var ai=y.attr("data-ui-overlay")+"-trip-class-select";
var ag=L("select",{id:ai,className:"passenger-class"});
var af;
G=P.find('input[type="radio"]');
af=g.map(G,Z);
g.forEach(af,function(aj){ag.appendChild(aj)
});
M=ag;
P.append(ah.appendChild(ag));
ag.selectedIndex=ag.options.length-1
};
var l=function(af){S=af;
s=S.find(".button-passengers");
T=s.data("ui-overlay-id");
y=s.siblings("[data-ui-overlay="+T+"]");
Q=y.find(".trip-passengers-selector");
P=y.find(".trip-class-selector");
U=y.find('[data-passenger-type="adults"]');
I=y.find('[data-passenger-type="children"]');
i=y.find(".class-message");
ae=y.find(".passengers-tip");
x=y.find(".passengers-tip-first-class");
z=s.find(".button-placeholder").text()
};
if(k){R=j;
J=parseInt(R.maxPassengersFirstClass,10);
O=parseInt(R.maxPassengersNonFirstClass,10);
l(k);
if(!h("html").hasClass("less-than-ie9")){V()
}ad();
X()
}};
return f
});
e("hotelRoomPicker",["jquery","lodash"],function(h,g){var f=function(p){var E;
var B;
var n;
var C;
var i="hotel-rooms-group";
var j="hotel-rooms-group-active";
var w="button-add-room-disabled";
var r="button-remove-room-disabled";
var y;
var A=function(){h("body").trigger({type:"show.overlay",button:B})
};
var s=function(F){F.preventDefault();
A()
};
var q=function(){var F=C.find(".button-add-room");
var H=C.find(".button-remove-room");
var G=C.find(".help-message");
var I=n.find("."+j).length;
if(I<y){F.removeClass(w);
G.removeClass("help-message-active")
}else{F.addClass(w);
G.addClass("help-message-active")
}if(I>1){H.removeClass(r)
}else{H.addClass(r)
}};
var u=function(I){var G=n.find("."+j);
var J=G.length;
var F=0;
var H="";
G.find("select").filter('[name^="NA"], [name^="NC"]').each(function(){F+=parseInt(h(this).val(),10)
});
H=F+" "+B.data("guestsLabel")+" / "+J+" "+B.data("roomsLabel");
B.find(".button-placeholder").text(H)
};
var k=function(H){var G=n.find("."+j);
var I=0;
var F=0;
G.find('select[name^="NA"]').each(function(){I+=parseInt(h(this).val(),10)
});
G.find('select[name^="NC"]').each(function(){F+=parseInt(h(this).val(),10)
});
n.find('input[name="TA"]').val(I);
n.find('input[name="TC"]').val(F);
n.find('input[name="NOR"]').val(G.length)
};
var z=function(G){G.preventDefault();
var H=n.find("."+j).last();
var F=H.next("."+i);
H.find(".button-remove-room").addClass(r);
F.addClass(j);
F.find("select").prop("disabled",false);
q();
u(G);
k(G)
};
var x=function(G){G.preventDefault();
var H=n.find("."+j).last();
var F=H.prev("."+j);
H.removeClass(j);
H.find("select").prop("disabled",true).prop("selectedIndex",0).trigger("change");
H.find(".field-group").removeClass("tooltip-active");
F.find(".button-remove-room").removeClass(r);
q()
};
var D=function(G){var F;
try{F=parseInt(h(G.target).val(),10);
h(G.target).prev(".custom-select-trigger").find(".custom-select-text").html(F)
}catch(H){return
}u(G);
k(G)
};
var l=function(J,I,H){var L;
var G=0;
var K;
if(I<H){L=H-I;
G=0;
K=J.find(".hotel-ages-group").not(".hotel-ages-group-active");
for(;
G<L;
G++){K.eq(G).addClass("hotel-ages-group-active");
K.eq(G).find("select").prop("disabled",false)
}}else{L=I-H;
K=J.find(".hotel-ages-group-active");
var F=K.length-1;
for(;
G<L;
G++,F--){K.eq(F).removeClass("hotel-ages-group-active");
K.eq(F).find("select").prop("selectedIndex",0).prop("disabled",true).trigger("change.updateCustomSelectTrigger")
}}J.addClass("hotel-ages-wrapper-active")
};
var o=function(I){var K=h(I.target);
var J=K.closest(".hotel-rooms-group");
var H=J.find(".hotel-ages-wrapper");
var F=H.find(".hotel-ages-group-active").length;
var G=parseInt(K.val(),10);
if(G===0){H.removeClass("hotel-ages-wrapper-active");
H.find(".hotel-ages-group").removeClass("hotel-ages-group-active");
H.find("select").prop("disabled",true).prop("selectedIndex",0).trigger("change.updateCustomSelectTrigger")
}else{l(H,F,G)
}};
var m=function(){n.on("change.updateCustomSelectTrigger",".custom-select-control",D).on("change.onChangeChildrenNumber",'select[name^="NC"]',o).on("click.onClickButtonAddRoom",".button-add-room",z).on("click.onClickButtonRemoveRoom",".button-remove-room",x).on("click.onConfirmationPress",".button-confirmation",s)
};
var v=function(){B=E.find(".button-rooms-picker");
n=B.siblings('[data-ui-overlay="'+B.data("uiOverlayId")+'"]');
C=E.find(".actions-cluster");
y=n.find("."+i).length
};
if(!g.isEmpty(p)){E=p;
v();
m();
u()
}};
return f
});
e("cabinClassSelector",["jquery","lodash"],function(g,f){var h=function(v){var I;
var G;
var p;
var u;
var H;
var y;
var r;
var A;
var F;
var B=function(){var K=r.find("input:radio:checked");
var J={};
if(!f.isPlainObject(K)){J={label:K.data("cabin-class"),category:K.val().toLowerCase()}
}return J
};
var x=function(L){var K=B();
var J;
u.find(".button-placeholder").text(K.label);
try{J=parseInt(g(L.target).val(),10);
g(L.target).prev(".custom-select-trigger").find(".custom-select-text").html(J)
}catch(M){return
}};
var E=function(){g("body").trigger({type:"show.overlay",button:u})
};
var q=function(J){J.preventDefault();
E()
};
var n=function(J){return g(m(J)).data("cabinClass")
};
var m=function(J){return f.filter(G,function(K){return K.value===J
})[0]
};
var i=function(J){if(!A){A=r.find(".custom-select-trigger .custom-select-text")
}A.text(J)
};
var o=function(J){m(J).checked=true;
G.trigger("change.updateButtonSummary2")
};
var k=function(J){p.value=J
};
var D=function(K){var J=K.target.value;
o(J);
i(n(J))
};
var C=function(K){var J=K.target.value;
k(J);
i(n(J))
};
var j=function(){r.on("change.updateButtonSummary2","select",x);
y.on("change.updateButtonSummary2","input:radio",x);
y.on("click.onConfirmationPress2",".button-confirmation",q);
I.on("change","#book-trip-package input:radio",C);
I.on("change",".passenger-class",D)
};
var l=function(J){return z("option",{value:J.value,innerHTML:g(J).data("cabinClass")})
};
var z=function(K,J){var M=document.createElement(K);
var L;
for(L in J){M[L]=J[L]
}return M
};
var s=function(){var L=document.createDocumentFragment();
var M=y.attr("data-ui-overlay")+"-trip-class-select2";
var K=z("select",{id:M,className:"passenger-class"});
var J;
G=r.find('input[type="radio"]');
J=f.map(G,l);
f.forEach(J,function(N){K.appendChild(N)
});
p=K;
r.append(L.appendChild(K));
K.selectedIndex=K.options.length-1
};
var w=function(J){I=J;
u=I.find(".button-package");
H=u.data("ui-overlay-id");
y=u.siblings("[data-ui-overlay="+H+"]");
r=y.find(".trip-class-selector");
F=u.find(".button-placeholder").text()
};
if(v){w(v);
if(!g("html").hasClass("less-than-ie9")){s()
}x();
j()
}};
return h
});
e("flightHotelSearch",["jquery","lodash","cabinClassSelector"],function(i,f,g){var h=function(l,J){var X;
var ad;
var Y;
var p;
var V;
var al;
var n;
var s="package-rooms-group";
var ah="package-rooms-group-active";
var v="button-add-room";
var O="button-remove-room";
var au="button-add-room-disabled";
var aq="button-remove-room-disabled";
var K="infant-excluded";
var am;
var af;
var y;
var ab;
var aa;
var H=17;
var ap=1;
var B=9;
var U=9;
var I=9;
var z=9;
var N=6;
var S=9;
var ag=false;
var M=function(){i("body").trigger({type:"show.overlay",button:ad})
};
var w=function(av){av.preventDefault();
if(ae()){M()
}};
var Q=function(){var av=p.find("."+v);
var aw=p.find("."+O);
var ax=Y.find("."+ah).length;
if(ax<af){av.removeClass(au)
}else{av.addClass(au)
}D();
if(ax>1){aw.removeClass(aq)
}else{aw.addClass(aq)
}};
var D=function(){var ax=Y.find("."+ah).length;
var av=p.find(".help-message");
var aw=Y.find(".help-message-small");
if(ax<af){av.filter(".room-exceed").removeClass("help-message-active")
}else{av.filter(".room-exceed").addClass("help-message-active")
}if((y+ab)<I){av.filter(".passenger-exceed-first").removeClass("help-message-active");
av.filter(".passenger-exceed").removeClass("help-message-active");
aw.filter(".passenger-exceed-first").removeClass("help-message-active");
aw.filter(".passenger-exceed").removeClass("help-message-active")
}else{if(I===N){av.filter(".passenger-exceed-first").addClass("help-message-active");
aw.filter(".passenger-exceed-first").addClass("help-message-active")
}else{av.filter(".passenger-exceed").addClass("help-message-active");
aw.filter(".passenger-exceed").addClass("help-message-active")
}}};
var aj=function(){var aw=Y.find("."+ah);
var ay=aw.length;
var av=k();
var ax="";
ax=av+" "+ad.data("guestsLabel")+" / "+ay+" "+ad.data("roomsLabel");
ad.find(".button-placeholder").text(ax)
};
var ao=function(){var av=Y.find("."+ah);
Y.find('input[name="TA"]').val(y);
Y.find('input[name="TC"]').val(ab);
Y.find('input[name="TI"]').val(aa);
Y.find('input[name="NOR"]').val(av.length)
};
var k=function(){var av=Y.find("."+ah);
y=0;
ab=0;
aa=0;
av.find('select[name^="NA"]').each(function(aw){y+=parseInt(i(this).val(),10)
});
av.find('select[name^="NC"]').each(function(aw){ab+=parseInt(i(this).val(),10)
});
av.find('select[name^="AC"]').each(function(aw){if(i(this).closest(".package-ages-group").hasClass("package-ages-group-active")){if(parseInt(i(this).val(),10)<=1){aa++
}}});
ab-=aa;
return(y+ab)
};
var m=function(){var av=Math.max((I-k()),0);
var aw=Y.find("."+ah);
aw.each(function(){var aB=1;
var ax="";
var aD=i(this).find('select[id*="package-number-adult-room"]');
var aA=parseInt(aD.val(),10);
var aC=x(aA,av);
for(;
aB<=aC;
aB++){ax+='<option value="'+aB+'">'+aB+"</option>"
}aD.html(ax);
if(f.isNull(aA)){aA=0
}aD.val(aA);
var az=i(this).find('select[id*="package-number-child-room"]');
aB=0;
ax="";
aA=parseInt(az.val(),10);
var ay=u(aA,av);
for(;
aB<=ay;
aB++){ax+='<option value="'+aB+'">'+aB+"</option>"
}az.html(ax);
if(f.isNull(aA)){aA=0
}az.val(aA)
});
if(ag){o()
}else{at(av)
}Z()
};
var x=function(aw,av){return Math.min((aw+av),B)
};
var u=function(aw,av){if(ag){return Math.min((aw+av),U)
}else{return Math.min((aw+av+y-aa),U)
}};
var T=function(){var av=Y.find('select[name*="AC"]');
var ax=av.prev(".custom-select-trigger");
var aw=(ag)?2:0;
av.each(function(){i(this).val(aw)
});
ax.each(function(){i(this).find(".custom-select-text").html(aw)
})
};
var ac=function(){var ax=Y.find('select[name*="AC"]');
var ay=(ag)?2:0;
var aw="";
var av=ay;
for(;
av<=H;
av++){aw+=G(ag,av)
}ax.each(function(){i(this).html(aw);
i(this).val(ay)
})
};
var at=function(ax){var av=Y.find(".package-ages-group-active").find('select[name*="AC"]');
var aw=0;
av.each(function(){var aB=aw;
var ay="";
var aA=parseInt(i(this).val(),10);
var az=(ax>0)?H:ap;
if(aA<=ap){for(;
aB<=az;
aB++){ay+=G(ag,aB)
}i(this).html(ay);
if(f.isNull(aA)){aA=aw
}i(this).val(aA)
}})
};
var P=function(av){if(ag){o()
}else{at(I-k())
}m();
aj();
D();
ao()
};
var o=function(){var av=Y.find(".package-ages-group-active").find('select[name*="AC"]');
var aw=2;
av.each(function(){var aA=aw;
var ax="";
var az=parseInt(i(this).val(),10);
var ay=H;
if(az<=ap){az=aw
}for(;
aA<=ay;
aA++){ax+=G(ag,aA)
}i(this).html(ax);
if(f.isNull(az)){az=aw
}i(this).val(az)
})
};
var G=function(aw,av){if(aw){if(av<2){return""
}}return'<option value="'+av+'">'+av+"</option>"
};
var Z=function(){var av=I-k();
var aw=Y.find("."+ah).length;
if(((z-y)>0)&&(av>0)&&(aw<af)){Y.find("."+v).removeClass("button-add-room-disabled")
}else{Y.find("."+v).addClass("button-add-room-disabled")
}};
var ai=function(ax){if(ax){ax.preventDefault()
}var aw=I-k();
if(aw>0){var ay=Y.find("."+ah).last();
var av=ay.next("."+s);
ay.find("."+O).addClass(aq);
av.addClass(ah);
av.find('[name^="N"]').prop("disabled",true).prop("selectedIndex",0).trigger("change");
av.find("select").prop("disabled",false);
Q();
aj();
ao();
m()
}};
var F=function(aw){if(aw){aw.preventDefault()
}var ax=Y.find("."+ah).last();
var av=ax.prev("."+ah);
ax.removeClass(ah);
ax.find(".field-group").removeClass("tooltip-active");
av.find("."+O).removeClass(aq);
Q();
Y.find("."+v).focus()
};
var C=function(){var av=Y.find("."+ah);
var aw;
if(av.length>1){aw=av.slice(1);
aw.removeClass(ah);
aw.find("select").prop("disabled",true).prop("selectedIndex",0);
aw.find(".field-group").removeClass("tooltip-active");
av.find("."+O).removeClass(aq);
Q();
Y.find("."+v).focus()
}};
var q=function(aw){var av;
try{av=parseInt(i(aw.target).val(),10);
if((f.contains(i(aw.target)[0].name,"AC"))&&av===0){av=(ag)?2:0
}i(aw.target).val(av);
i(aw.target).prev(".custom-select-trigger").find(".custom-select-text").html(av)
}catch(ax){return
}};
var R=function(az,ay,ax){var aB;
var aw=0;
var aA;
if(ay<ax){aB=ax-ay;
aw=0;
aA=az.find(".package-ages-group").not(".package-ages-group-active");
for(;
aw<aB;
aw++){aA.eq(aw).addClass("package-ages-group-active");
aA.eq(aw).find("select").prop("disabled",false)
}}else{aB=ay-ax;
aA=az.find(".package-ages-group-active");
var av=aA.length-1;
for(;
aw<aB;
aw++,av--){aA.eq(av).removeClass("package-ages-group-active");
aA.eq(av).find("select").prop("selectedIndex",0).prop("disabled",true).trigger("change.updateCustomSelectTrigger")
}}az.addClass("package-ages-wrapper-active")
};
var A=function(av){m();
aj();
D();
ao()
};
var ae=function(){var av=k();
if(y<aa){Y.addClass("ratio-error");
return false
}else{Y.removeClass("ratio-error");
return true
}};
var W=function(ay){var aA=i(ay.target);
var az=aA.closest("."+s);
var ax=az.find(".package-ages-wrapper");
var av=ax.find(".package-ages-group-active").length;
var aw=parseInt(aA.val(),10);
if(aw===0){ax.removeClass("package-ages-wrapper-active");
ax.find(".package-ages-group").removeClass("package-ages-group-active");
ax.find("select").prop("disabled",true).prop("selectedIndex",0).trigger("change.updateCustomSelectTrigger")
}else{R(ax,av,aw)
}m();
aj();
D();
ao()
};
var E=function(aw){var av=Y.closest(".trip-package-form").find(".trip-class-selector input:checked").val();
if(av==="F"){I=N;
z=N;
B=N;
U=N;
Y.find(".class-message-first").show();
Y.find(".class-message").hide()
}else{if(I===S){return
}else{I=S;
z=S;
B=S;
U=S;
Y.find(".class-message-first").hide();
Y.find(".class-message").show()
}}ar();
aj();
D();
ao()
};
var j=function(){if(ag){X.find(".package-rooms-wrapper").addClass(K);
Y.find(".infant-message").show()
}else{X.find(".package-rooms-wrapper").removeClass(K);
Y.find(".infant-message").hide()
}ar();
aj();
D();
ao();
f.delay(T,500)
};
var ar=function(){C();
i("#package-number-adult-room1").val("1").trigger("change");
i("#package-number-child-room1").val("0").trigger("change");
ac()
};
var an=function(aw){try{var av=parseInt(i(aw.target).val(),10);
i(aw.target).prev(".custom-select-trigger").find(".custom-select-text").html(av)
}catch(ax){return
}};
var L=function(av,aw){if(f.contains(n.excludeInfants,aw.airportCode.toUpperCase())){ag=true
}else{ag=false
}f.delay(function(){E();
m();
j()
},100)
};
var ak=function(){Y.on("change.updateCustomSelectTrigger",".custom-select-control",q).on("change.onChangeAdultNumber",'select[name^="NA"]',A).on("change.onChangeChildrenNumber",'select[name^="NC"]',W).on("change.onChangeChildrenAge","select[name^=AC]",P).on("click.onClickButtonAddRoom",".button-add-room",ai).on("click.onClickButtonRemoveRoom",".button-remove-room",F).on("click.onConfirmationPress",".button-confirmation",w);
Y.closest(".package-booking-panel").find(".trip-package-wrapper").on("change.updateCabinClass","input:radio",E).on("change.updateCabinClass","select.passenger-class",E);
if(al.length>0){al.on("change",L)
}};
var r=function(){N=n.maxPassengersFirstClass;
S=n.maxPassengersNonFirstClass;
X.find(".trip-package-wrapper").each(function(){am=g(i(this))
});
ad=X.find(".button-rooms-picker");
al=i("#"+ad.data("ui-origin-id"));
Y=ad.siblings('[data-ui-overlay="'+ad.data("uiOverlayId")+'"]');
p=X.find(".actions-cluster");
af=Y.find("."+s).length;
if(ag){j();
o()
}};
if(l){X=l;
n=J;
r();
ak();
aj()
}};
return h
});
e("flightSearch",["jquery","lodash","tripTypeSelector","passengerSelector","hotelRoomPicker","flightHotelSearch","modernizr","breakpoints"],function(j,x,f,i,h,r,k,m){var y;
var q=j("body");
var p=(navigator.msMaxTouchPoints>0||k.touch);
var l=function(z){j(z).blur();
setTimeout(function(){j(z).select()
},200)
};
var s=function(A){var z=j(A.target);
var B=z.closest(".flight-booking-panel");
if(!B.hasClass("panel-open")){w(A)
}};
var w=function(A){var z=j(A.target);
var D=z.closest(".flight-booking-panel");
var C=D.find(".button-show");
var B=D.find(".button-close");
C.addClass("is-display-none");
B.removeClass("is-display-none");
D.addClass("panel-open")
};
var u=function(z){var B=j(this);
var C=B.closest(".flight-booking-panel");
var A=C.find(".button-show");
B.addClass("is-display-none");
A.removeClass("is-display-none");
C.removeClass("panel-open")
};
var n=function(){var z=0;
var A;
if(y.length>1){if(!j(".nav-book-trip").hasClass("list-active")){A=j(".book-trip:eq(1)")
}}else{A=y
}z=A.offset().top;
if(m.isLargeUp()&&!p){z-=43
}else{if(m.isMedium()){z+=11
}}return z
};
var v=function(){if(m.isMediumUp()){setTimeout(function(){j("body, html").animate({scrollTop:n()},500)
})
}};
var g=function(){var z=y.find(".button-passengers, .button-package, .button-rooms-picker, .button-date-picker");
if(!p){y.on("focus",'input[type="text"]',v)
}j(".trip-type-selection").on("click",'input[type="radio"]',v);
if(y.hasClass("flight-only")&&y.data("role")==="home"){y.on("focus",".field-button",s);
y.on("click",".button-show",w);
y.on("click",".button-close",u)
}z.on("click",v);
j(window).bind("orientationchange",function(A){if(window.orientation&&k.touch){if(window.orientation!==0&&j("#depart").is(":focus")){l("#depart")
}else{if(window.orientation!==0&&j("#destination").is(":focus")){l("#destination")
}}}})
};
var o=function(){g();
y.find(".trip-type-selection").each(function(){f(j(this))
});
y.find(".trip-passengers-wrapper").each(function(){i(j(this),CX.bookTrip.flightSearch.passengerSelection)
});
h(j("#book-trip-hotel"));
h(j("#book-trip-hotel-subsidiary"));
r(j("#book-trip-package"),CX.bookTrip.packageSearch.passengerSelection);
r(j("#book-trip-package-subsidiary"),CX.bookTrip.packageSearch.passengerSelection)
};
return{init:function(z){y=j(z);
if(!!y){o()
}}}
});
e("tooltip",["jquery"],function(i){var h=i("body");
var g={button:"tooltip-button",tooltipActive:"tooltip-active"};
var j=function(l){l.preventDefault();
var m=i(this).closest(".tooltip");
m.toggleClass(g.tooltipActive)
};
var f=function(l){if(l.which===13){l.preventDefault();
var m=i(this).closest(".tooltip");
m.toggleClass(g.tooltipActive)
}};
var k=function(){h.find(".tooltip").on("click","."+g.button,j).on("keypress","."+g.button,f)
};
return{init:function(l){if(l.length>0){k()
}}}
});
e("regionSelector",["jquery","lodash","jquery.hammer","clickTouch","modernizr","breakpoints"],function(H,S,E,O,J,f){var L=".regions";
var m=".languages";
var u;
var G;
var z={preventDefault:true,tapMaxTime:400};
var k=null;
var A;
var p;
var h;
var l=function(){return h.currentRegion
};
var g=function(){return h.currentLanguage
};
var F=function(U,T){var W=document.createElement(U);
var V;
for(V in T){if(V.indexOf("innerHTML")===-1){W.setAttribute(V,T[V])
}else{W.innerHTML=T.innerHTML
}}return W
};
var Q=function(T){return F("option",{value:H(T).find("a").attr("href"),innerHTML:H(T).find("a").html(),"data-region-label":T.getAttribute("data-region-label"),"data-region":T.getAttribute("data-region"),"data-language":T.getAttribute("data-language")})
};
var I=function(T){var W=document.createElement("span");
var U=document.createElement("span");
var V=document.createElement("i");
W.setAttribute("class","custom-select-trigger");
U.setAttribute("class","custom-select-text");
U.innerHTML=T;
V.setAttribute("class","icon icon-arrow-down");
return H(W).append(U).append(V)
};
var N=function(V){var X=document.createElement("ul");
var T=l();
var W=g();
X.setAttribute("class","regions");
X.setAttribute("role","group");
for(var U=0;
U<V.length;
U++){if(V[U].getAttribute("data-region")===T&&V[U].getAttribute("data-language")===W){H(V[U]).addClass("selected")
}X.appendChild(V[U])
}return X
};
var i=function(){H(L).find("a").attr("tabindex","-1");
H(".change-region").off("blur.notabToLinks")
};
var s=function(){H(L).find("a").attr("tabindex","0");
H(L).find("a").first().focus();
H(".change-region").off("blur.tabToLinks")
};
var D=function(U){var T=0;
while(T<u.length){var V=u.slice(T,T+U);
H(".regions-wrapper").append(N(V));
T+=U
}H(L).first().remove();
i();
G.addClass("regions-ready")
};
var q=function(){var V=document.createElement("select");
var U=0;
var W;
V.setAttribute("class","region-select custom-select-control");
for(var T=0;
T<u.length;
T++){if(H(u[T]).hasClass("selected")){U=T;
W=u[T].getAttribute("data-region-label")
}H(V).append(Q(u[T]))
}V.selectedIndex=U;
var X=I(W);
H(".additional-nav .custom-select-wrapper").append(X).append(V)
};
var w=function(){H("main, header, footer").hammer().on(O+".closeRegionLanguage",function(T){if(H(T.target).closest(".additional-nav").length===0&&H(T.target).closest(".mpo-trigger").length===0){G.toggleClass("region-selector-active");
H("header").removeClass("collapse");
R()
}})
};
var R=function(T){G.removeClass("region-selector-active");
H("main, header, footer").hammer().off(O+".closeRegionLanguage");
G.find("header").css("margin-top","");
G.find(".additional-nav").css({height:""});
H(".browser-wrapper").off("click",".close-browser-alert")
};
var v=function(){A=G.find(".region-language-flyout").height();
p=-(A+G.find(".header-items").height()+1);
A=parseInt(A);
p=parseInt(p);
G.find("header").css("margin-top",A);
G.find(".additional-nav").css({top:p,height:(A+1)})
};
var y=function(T){if(G.hasClass("region-selector-active")){v()
}};
var n=function(T){T.preventDefault();
if(H("html").hasClass("mpo-active")){H("html").removeClass("mpo-active")
}if(G.hasClass("travel-alert-expand")){G.find(".summary-panel").trigger(O)
}T.stopPropagation();
G.toggleClass("region-selector-active");
if(G.hasClass("region-selector-active")){v();
H(".change-region").on("blur.tabToLinks",s);
G.removeClass("secondary-active");
H(".menu-container").find(".list-active").removeClass("list-active");
H(".secondary-nav-container.active").removeClass("active");
H(".secondary-nav-book-trip-container.active").removeClass("active");
H(".nav-book-trip .icon").removeClass("icon-up");
H(".button-book-trip").removeClass("list-active");
H(".button-book-trip .icon").removeClass("icon-up");
H(".menu-container").removeClass("expand-book-trip");
w();
H(".change-region").on("toggle.regionSelectorFlyout",R);
H(".browser-wrapper").on("click",".close-browser-alert",y)
}else{R();
H(".change-region").off("toggle.regionSelectorFlyout")
}};
var r=function(U){var T=U.target.value;
window.location.href=T
};
var j=function(T){var U=H(T.target);
var W;
var V;
var X;
if(U.hasClass("region-select")){W=U.find(":selected")
}else{W=U.closest("li")
}V=W.data("region");
X=W.data("language");
H.cookie("selectedLocale",X+"_"+V,{path:"/",expires:365})
};
var B=function(V){var T=H(L).find('[data-region="'+V+'"]');
var U=H.map(T,function(X,W){return[{langLabel:X.getAttribute("data-language-label"),pageURL:X.firstChild.getAttribute("href"),existingClass:X.getAttribute("class"),langCode:X.firstChild.getAttribute("hreflang"),language:X.getAttribute("data-language"),region:X.getAttribute("data-region")}]
});
return U
};
var x=function(T){H(".header-rhs .site-search-form").before(T)
};
var o=function(U){var X=H(m);
var V=H('<ul class="languages-in-region"></ul>');
var T=H.map(U,function(Y,Z){var aa=Y.existingClass;
return'<li data-language="'+Y.language+'" data-region="'+Y.region+(aa?'" class="'+aa:"")+'">  <a href="'+Y.pageURL+'" hreflang="'+Y.langCode+'">'+Y.langLabel+'    <span class="ui-radio"></span>  </a></li>'
});
var W=H.map(U,function(Y,Z){var aa=Y.existingClass;
return aa?"":'<li data-language="'+Y.language+'" data-region="'+Y.region+'">  <a href="'+Y.pageURL+'" hreflang="'+Y.langCode+'">'+Y.langLabel+"  </a></li>"
});
X.append(T);
V.append(W);
x(V)
};
var C=function(){var U=l();
var T=B(U);
if(T.length>1){o(T)
}else{if(T.length===1){H(m+", .on-the-fly").addClass("is-display-none")
}}};
var K=function(){if(f.isLarge()){k=H(".region-select").detach()
}if(H(".region-select").length===0){H(".region-selectors-dropdown").append(k);
k=null
}};
var M=function(){if(!f.isLarge()){G.find("header").css("margin-top","");
G.find(".additional-nav").css({top:"",height:""})
}else{if(G.hasClass("region-selector-active")){v()
}}};
var P=function(){H(".change-region").hammer(z).on(O,n);
H(".region-select").on("change",j).on("change",r);
H(".regions-wrapper .regions a").on("click",j);
H(".languages-in-region").on("click",j);
H(".additional-nav .languages a").on("click",j);
H(window).on("orientationchange.regionSelectOrientationChange",K);
H(window).on("resize.closeRegionLanguage",S.debounce(M,10))
};
return{init:function(U,T){if(U){G=H("body");
h=T;
u=H(L).find("li");
D(h.linksPerColumn);
q();
C();
P()
}}}
});
e("manageBooking",["jquery","modernizr","lodash","jquery.cookie","clickTouch"],function(i,j,f,h,g){var k=function(o){var q={isMember:false,isETicketHolder:false};
var D={membershipSelector:".membership-selector",bookingReferenceSelector:".booking-reference-selector",ticketNumber:".ticket-number",bookingReference:".booking-reference",hasMembership:".has-membership",hasNoMembership:".has-no-membership",hasTicketNumber:".has-ticket-number",isDisplayNone:".is-display-none",membershipNumber:".membership-number"};
var s;
var y;
var C="mpouser";
var l=i(".tabs").find('a[data-tab-id="manage-booking"]');
var w=function(){var G=j.mq("screen and (min-width: 569px)");
if(i("html").hasClass("less-than-ie9")){G=true
}return G
};
var u=function(G){i("html, body").scrollTop(G)
};
var A=function(H){var J;
var I;
var G=i.cookie(C);
q.$el=i(H);
if(G){n(G)
}s=q.$el.find(D.membershipSelector);
y=q.$el.find(D.bookingReferenceSelector);
J=B(s);
I=B(y);
if(J.val()==="1"){q.$el.addClass(D.hasMembership.substring(1));
q.isMember=true
}if(I.val()==="ticketNumber"){q.$el.addClass(D.hasTicketNumber.substring(1));
q.isETicketHolder=true
}m();
if(q.$el.hasClass("manage-booking")){p()
}return this
};
var p=function(){var H=E("status");
var J=E("memberID");
i(".manage-booking").find(".error").remove();
if(typeof H!=="undefined"&&typeof J==="undefined"){var G=window.CX.manageBooking.endPoints.loginError+H+".JSON";
var I=i.ajax({url:G,type:"GET",dataType:"json"});
I.done(function(K){var L="";
if(K.errorMessages.length>0){i(K.errorMessages).each(function(M,N){L+='<div class="error"><i class="icon icon-alert" aria-hidden="true"></i>'+N+"</div>"
})
}i(".manage-booking").addClass("form-has-error").prepend(L);
if(w()){u(l.offset().top-60);
i("#mbMembers + label").trigger("click")
}else{u(l.filter(function(M){return !i(this).closest(".tabs-wrapper").hasClass("home-tabs")
}).offset().top);
i('.manage-booking .ui-radio[data-id="has-membership"]').trigger("click")
}l.trigger(g)
})
}};
var E=function(K){var J=window.location.search.substring(1);
var H=J.split("&");
for(var I=0;
I<H.length;
I++){var G=H[I].split("=");
if(G[0]===K){return G[1]
}}};
var n=function(G){q.$el.find(D.membershipNumber).val(G)
};
var z=function(G){return i.cookie(C,G,{path:"/",expires:365})
};
var v=function(){if(i.cookie(C)){i.removeCookie(C,{path:"/"})
}return i.cookie(C)
};
var B=function(G){return G.find('input[type="radio"]:checked')
};
var m=function(){q.$el.on("change",D.membershipSelector,F);
q.$el.on("change",D.bookingReferenceSelector,r);
q.$el.on("submit","form",x);
return true
};
var F=function(H){var G=D.hasMembership.substring(1);
if(i(H.target).data("id")===G){q.$el.addClass(G);
q.isMember=true
}else{q.$el.removeClass(G);
q.isMember=false
}};
var r=function(H){var G=D.hasTicketNumber.substring(1);
if(i(H.target).data("id")===G){q.$el.addClass(G);
q.isETicketHolder=true
}else{q.$el.removeClass(G);
q.isETicketHolder=false
}};
var x=function(G){if(q.$el.find('input[type="checkbox"]').is(":checked")){z(q.$el.find(D.membershipNumber).val())
}else{v()
}};
if(!f.isEmpty(i(o))){A(o)
}return q
};
return k
});
e("manageBookingRouting",["jquery","lodash","manageBooking","jquery.hammer","clickTouch","breakpoints"],function(i,m,g,n,h,j){var f={preventDefault:true,tapMaxTime:800};
var l=function(o){var p={};
jQuery.each(o,function(q,r){p[r.name]=i.trim(r.value)
});
return p
};
var k=function(s,v){var r="MMB";
var y="TRP";
var G=false;
var Q=v;
var z;
var H;
var M;
var J=g(s);
var p=i(".tabs").find('a[data-tab-id="manage-booking"]');
var w={};
var R="";
var N={};
var o=false;
var D=false;
var O=false;
var C=function(S){i("html, body").scrollTop(S)
};
var L=function(){x(Q.endPoints.loggedIn);
M=J.$el.find("form").data();
p.data("href",p.attr("href")).removeAttr("href");
q()
};
var q=function(){J.$el.on("submit",".non-membership-form",E);
p.hammer(f).on(h,B);
p.on("keypress",K)
};
var B=function(S){if(CX.mpo.isLoggedIn||G){S.stopImmediatePropagation();
window.location.href=p.data("href")
}else{S.preventDefault()
}};
var K=function(S){if(S.which===13){B(S)
}};
J.makeMMBRequest=function(S,U){var T=i.ajax(S,{type:"POST",data:JSON.stringify(U),contentType:"application/json; charset=utf-8",dataType:"json"});
T.done(J.handleMMBPostRequestDone);
T.fail(J.handleMMBPostRequestFail)
};
J.handleTRPValidBooking=function(X){var W=false;
var T=false;
var V=false;
var S="";
var Y="";
var U="";
i.each(X.ManageBooking.Booking[0].Product,function(aa,ab){if(!m.isEmpty(ab.Package)){V=true;
S=ab.Package.Flights.Flight[0].Option[0].BookingReference
}else{if(!m.isEmpty(ab.Hotel)&&!m.isEmpty(ab.Hotel.Rooms)){var Z;
T=true;
Y=X.ManageBooking.SuperPNR_ID;
if(ab.Hotel.Rooms instanceof Array){Z=ab.Hotel.Rooms[0].Room
}else{Z=ab.Hotel.Rooms.Room
}if(!m.isEmpty(Z)&&Z.length===1&&!m.isEmpty(Z[0].Option)){i.each(Z[0].Option[0].GuestDetails.Guest,function(ac,ad){if(!m.isEmpty(ad.Name.GivenName)&&!m.isEmpty(ad.Name.Surname)&&!m.isEmpty(ad.Name.Prefix)&&w.givenName.toUpperCase()===ad.Name.GivenName.toUpperCase()&&w.familyName.toUpperCase()===ad.Name.Surname.toUpperCase()){R=ad.Name.Prefix
}})
}if(!m.isEmpty(Z)&&Z.length>1){i.each(Z,function(ac,ad){if(!m.isEmpty(ad.Option)){i.each(ad.Option[0].GuestDetails.Guest,function(ae,af){if(!m.isEmpty(af.Name.GivenName)&&!m.isEmpty(af.Name.Surname)&&!m.isEmpty(af.Name.Prefix)&&w.givenName.toUpperCase()===af.Name.GivenName.toUpperCase()&&w.familyName.toUpperCase()===af.Name.Surname.toUpperCase()){R=af.Name.Prefix
}})
}})
}}else{if(!m.isEmpty(ab.Flight)){W=true;
S=ab.Flight.BookingReference
}}}});
if(V||W&&T){U=Q.endPoints.bookingReference;
N.mmbpagetype="package";
w.recordLocator=S;
J.makeMMBRequest(U,w)
}else{if(T){U=Q.endPoints.mmbHotelOnlyLogin;
O=true;
N.mmbpagetype="hotel";
N.rloc=Y;
w.spnrId=Y;
w.title=R;
delete w.recordLocator;
J.makeMMBRequest(U,w)
}}};
J.trpErrorParameterMapping=function(T){var S=[];
if(T.indexOf("surname")!==-1){S=["familyName"]
}else{if(T.indexOf("firstname")!==-1){S=["givenName"]
}else{if(T.indexOf("reference")!==-1){S=["recordLocator"]
}}}return S
};
J.trpErrorMapping=function(V){var U=!m.isEmpty(V)?V.toLowerCase():"";
var T="errors.required.field.bookingsearch";
var X="errors.length.field.bookingsearch";
var S="errors.bookingsearch.couldnotretrieve";
var Y=["ERR_MMB_001","ERR_MMB_002"];
var W={code:"",parameters:[]};
if(m.isEmpty(U)){W.code="ERR_MMB_002";
U="reference"
}else{if(U.indexOf(S)===0){W.code="ERR_MMB_022"
}else{if(U.indexOf(T)===0){W.code="ERR_MMB_001"
}else{if(U.indexOf(X)===0){W.code="ERR_MMB_002"
}}}}if(m.indexOf(Y,W.code)!==-1){W.parameters=J.trpErrorParameterMapping(U)
}return W
};
J.handleTRPIndvalidBooking=function(T){var S=[];
var U=[];
if(!m.isEmpty(T.HomePage)&&!m.isEmpty(T.HomePage.RetrieveBookingForm)&&!m.isEmpty(T.HomePage.RetrieveBookingForm.Error)){m.forEach(T.HomePage.RetrieveBookingForm.Error,function(V){var W=V.Validator;
S.push(J.trpErrorMapping(W))
})
}else{if(!m.isEmpty(T.SeriousErrorPage)){S.push(J.trpErrorMapping())
}}U=u({errors:S});
J.getErrorForNonMembers(U)
};
J.handleTRPRequestBookingDone=function(U,S,T){if(m.isEmpty(U)){J.getSystemExceptionForNonMembers()
}else{if(!m.isEmpty(U.ManageBooking)&&!m.isEmpty(U.ManageBooking.Booking)){if(U.ManageBooking.Booking.length===1){J.handleTRPValidBooking(U)
}}else{J.handleTRPIndvalidBooking(U)
}}};
J.handleTRPPostRequestFail=function(U,S,T){J.getSystemExceptionForNonMembers()
};
J.requestTRPBooking=function(X,S,U){var W={name:"retrieveBookingForm",action:"/bookingManagement/retrieveBooking.do",method:"post",ReferenceInput:{type:"string",name:"bookingSearch/reference",value:w.recordLocator},FirstNameInput:{name:"bookingSearch/FirstName",type:"string",value:w.givenName},SurNameInput:{name:"bookingSearch/SurName",type:"string",value:w.familyName}};
var T=Q.endPoints.trpRetrieveBooking;
var V=i.ajax(T,{type:"POST",data:JSON.stringify(W),contentType:"application/json; charset=utf-8",dataType:"json"});
V.done(J.handleTRPRequestBookingDone);
V.fail(J.handleTRPPostRequestFail)
};
J.createTRPSession=function(U){var W=window.CX.global.currentLanguage;
var S=window.CX.global.currentRegion;
if(W!=="en"&&W!=="zh"){W="en";
S="GB"
}var T={name:"CreateSessionForm",method:"post",action:"/common/homeRedirect.do",RedirectedInput:{type:"fixed",name:"redirected",value:"true"},MarketInput:{type:"list",name:"market",value:S},LanguageInput:{type:"list",name:"language",value:W},ChannelInput:{type:"fixed",name:"channel",value:"IBE"},TestModeInput:{type:"fixed",name:"testMode",value:"A"}};
var V=i.ajax(U,{type:"POST",data:JSON.stringify(T),contentType:"application/json; charset=utf-8",dataType:"json"});
V.done(J.requestTRPBooking);
V.fail(J.handleCreateTRPSessionFail)
};
J.makePostRequest=function(T,S){i(".manage-booking").find(".error").remove();
if(S.bookingType===r){J.makeMMBRequest(S.url,T)
}else{J.createTRPSession(S.url)
}};
J.getSystemExceptionForNonMembers=function(){var S=[];
var T=[];
S.push(J.trpErrorMapping());
T=u({errors:S});
J.getErrorForNonMembers(T)
};
J.handleCreateTRPSessionFail=function(U,S,T){J.getSystemExceptionForNonMembers()
};
J.handleMMBPostRequestFail=function(U,S,T){J.getSystemExceptionForNonMembers()
};
J.handleMMBPostRequestDone=function(V,S,U){var T;
var X;
if(O){if(U.status===200){T=Q.redirects.details+"?"+i.param(N);
J.redirectToUrl(T)
}else{J.getSystemExceptionForNonMembers()
}}else{if(!m.isEmpty(V.errors)){var W=u(V);
J.getErrorForNonMembers(W);
return false
}if(!m.isEmpty(V.bookings[0])){T=J.getRedirectUrlForMMB(V)
}if(V.consentIndicator||Q.redirects.consent===""){J.redirectToUrl(T)
}else{X=encodeURIComponent(T);
T=[Q.redirects.consent,"?ultimateLocaltion=",X].join("");
J.redirectToUrl(T)
}}};
J.getRedirectUrlForMMB=function(U){var T="";
var V;
if(U.bookings.length>1){T=Q.redirects.summary
}else{var S=U.bookings[0];
if(!m.isEmpty(S)&&!m.isEmpty(S.recordLocator)){N.rloc=S.recordLocator;
if(!m.isEmpty(S.spnrId)&&S.spnrId.length===7){if(S&&!c(S.passengers[0].familyName,S.passengers[0].givenName,S.spnrId)){N.mmbpagetype="flight"
}else{N.mmbpagetype="package";
N.superID=S.spnrId
}}else{if(!m.isEmpty(S.spnrId)&&S.spnrId.length!==7){N.mmbpagetype="flight";
N.package_no_hotel="y"
}}T=Q.redirects.details+"?"+i.param(N)
}else{return false
}}return T
};
J.getErrorForNonMembers=function(S){var T=new Date().getTime().toString();
m.each(S,function(U){var V=i.ajax({url:U,type:"GET",dataType:"json"});
V.done(function(W){var X="";
i(".manage-booking").find(".error").filter(function(){var Y=i(this);
return parseInt(Y.data("error-time"))<parseInt(T)
}).remove();
if(W.errorMessages.length>0){i(W.errorMessages).each(function(Y,Z){X+='<div class="error" data-error-time="'+T+'"><i class="icon icon-alert" aria-hidden="true"></i>'+Z+"</div>"
})
}i(".manage-booking").addClass("form-has-error").prepend(X)
})
});
p.trigger("click");
if(j.isMediumUp()){i("#mbNonMembers").trigger("click");
C(p.offset().top-60)
}else{i('.manage-booking .ui-radio[data-id="has-no-membership"]').trigger("click");
C(p.filter(function(U){return !i(this).closest(".tabs-wrapper").hasClass("home-tabs")
}).offset().top)
}};
var u=function(T){var S=[];
m.each(T.errors,function(V){var U=Q.endPoints.errorsForNonMembers;
if(!m.isEmpty(V.code)){U+=V.code+"."
}if(!m.isEmpty(V.parameters)){m.each(V.parameters,function(W){U+=W+"."
})
}U+="JSON";
S.push(U)
});
return S
};
J.redirectToUrl=function(S){window.location.replace(S)
};
var E=function(U){var T;
var S={bookingType:"",url:""};
w={};
R="";
N={};
o=false;
D=false;
O=false;
z=i(this).serializeArray();
H=l(z);
if(J.isETicketHolder){S.bookingType=r;
S.url=Q.endPoints.eTicket;
w=A(H)
}else{var V=H.recordLocator;
if(V.length>=7){S.bookingType=y;
S.url=Q.endPoints.trpSessionCreate
}else{S.bookingType=r;
S.url=Q.endPoints.bookingReference
}w=I(H)
}J.makePostRequest(w,S);
U.preventDefault()
};
var I=function(S){S.locale=Q.locale;
S.source=Q.source;
delete S.eticketNumber;
delete S.memId;
delete S.memPin;
delete S.mbTicketNumber;
delete S.mbMembership;
delete S.mbReferenceType;
delete S.mbRememberMe;
return S
};
var A=function(S){S.locale=Q.locale;
S.source=Q.source;
delete S.recordLocator;
delete S.memId;
delete S.memPin;
delete S.mbTicketNumber;
delete S.mbMembership;
delete S.mbReferenceType;
delete S.mbRememberMe;
return S
};
var x=function(S,U){var T=i.ajax(S,{type:"GET"});
T.fail(F);
T.done(function(V){P(V,U)
})
};
var F=function(){G=false
};
var P=function(S,T){if(S.errors.length){G=false
}G=S.isLoggedIn
};
if(J.$el){L()
}return J
};
return k
});
function c(g,h,i){var k='{"name":"retrieveBookingForm","action":"/bookingManagement/home.do","method":"post","ReferenceInput":{"type":"string","name":"bookingSearch/reference","value":"'+i+'"},"FirstNameInput":{"name":"bookingSearch/FirstName","type":"string","value":"'+h+'"},"SurNameInput":{"name":"bookingSearch/SurName","type":"string","value":"'+g+'"}}';
var j=CX.manageBooking.endPoints.trpRetrieveBooking;
console.log("start retrieveBookingFromTRP: "+j+", paramsInput4RetrievingBookingOJT: "+k);
var f=true;
$.ajax({type:"POST",url:j,async:false,contentType:"application/json; charset=utf-8",data:k,success:(function(l){if(l!=null){console.log("Load data from Tribe");
if(l.ManageBooking!=null){f=true
}else{if(l.HomePage!=null){if(l.HomePage.RetrieveBookingForm!=null){if(l.HomePage.RetrieveBookingForm.Error!=null){if(l.HomePage.RetrieveBookingForm.Error.length==1&&l.HomePage.RetrieveBookingForm.Error[0].Validator.indexOf("errors.bookingSearch.couldNotRetrieve")==0){f=false
}}}}}}}),error:(function(n,l,m){f=true
}),dataType:"json"});
return f
}e("onlineCheckinRouting",["jquery","manageBooking","jquery.hammer","clickTouch"],function(j,i,g,h){var k={preventDefault:true,tapMaxTime:800};
var f=function(p,v){var q=j(".tabs").find('a[data-tab-id="online-checkin"]');
var m=v;
var s=i(p);
var n=function(){q.data("href",q.attr("href")).removeAttr("href");
o()
};
var o=function(){q.hammer(k).on(h,u);
q.on("keypress",l);
s.$el.on("focus",".ticket-number input",r)
};
var u=function(w){if(CX.mpo.isLoggedIn){w.stopImmediatePropagation();
window.location.href=q.data("href")
}else{w.preventDefault()
}};
var l=function(w){if(w.which===13){u(w)
}};
var r=function(){this.setSelectionRange(this.value.length,this.value.length)
};
if(s.$el){n()
}return s
};
return f
});
e("mpo",["require","jquery","lodash","modernizr","moment","clickTouch","jquery.hammer","jquery.cookie","breakpoints"],function(ax){var au=ax("jquery");
var S=ax("lodash");
var W=ax("modernizr");
var z=ax("moment");
var ar=ax("clickTouch");
var C=ax("jquery.hammer");
var Q=ax("jquery.cookie");
var ay=ax("breakpoints");
var ad="mpo-active";
var E="mpo-closing";
var K=au("body");
var aa;
var V;
var at=false;
var ab="#memberID";
var aE="#pin";
var J='<div class="error">#placeholder#<div>';
var aB=".stat-value";
var ak={tapMaxTime:800,preventDefault:true};
var x={MPOFlyoutExpand:"flyout-expand",iconClass:"icon",expandIconClass:"icon-down",collapseIconClass:"icon-up",mpoContainerOverlay:"mpo-container-overlay",mpoContent:"mpo-content",mpoPanelHeader:"mpo-panel-header"};
var g={tier:".tier",tierInfo:".tier-info",tierEndDate:".renewal-date",clubMiles:".club-miles",sectors:".sectors",asiaMiles:".asia-miles-balance",asiaMilesLarge:".asia-miles-balance-large"};
var an={cxGreen:"#006564",cxGreenWarm:"#5E967E",cxGreyMedium:"#767676",cxGreyWarm:"#C6C2C1",kaRedDark:"#530000"};
var aF={memberID:["1001","2001","2003","2004","2006","2007","2009","both"],pin:["1002","2001","2004","2006","2007","2009","2003","both"]};
var Y=K.find(".mpo-container");
var O;
var aH="LL";
var av='<% _.forEach(errorMessages, function(message) { %><i class="icon icon-alert" aria-hidden="true"></i><span class="error-description"><%= message %></span><% }); %>';
var az;
var G=function(aM){var aK=Y.find("."+x.mpoPanelHeader);
var aL=Y.find("."+x.mpoContent);
var aJ=Y.find("."+x.mpoContainerOverlay);
var aN=(aM)?(!ay.isLarge()&&at):!ay.isLarge();
if(aN){aJ.css({height:au(document).height()-aK.height()-aL.height()})
}else{aJ.removeAttr("style")
}};
var k=function(aL){var aN=(aL)?(ay.isLargeUp()||!at):ay.isLargeUp();
if(ay.isLargeUp()){Y.removeAttr("style")
}else{var aJ=Y.find("."+x.mpoPanelHeader);
var aK=Y.find("."+x.mpoContent);
var aM=au(window).height()-aJ.height()-aK.height();
if(aM<0){Y.css({"-webkit-overflow-scrolling":"touch","overflow-y":"auto","overflow-x":"hidden",height:au(window).height()});
Y.find("."+x.mpoContainerOverlay).height(0)
}else{Y.removeAttr("style");
Y.find("."+x.mpoContainerOverlay).height(aM)
}}};
var s=function(){if(!au("header").hasClass("fixed-element")){G(false);
au(window).smartresize(function(){G(true)
})
}else{k(false);
au(window).smartresize(function(){k(true)
})
}};
var U=function(aJ){if(au(aJ.target).closest(".mpo-trigger").length===0&&au(aJ.target).closest(".mpo-container").length===0&&at){au("html").removeClass(ad);
o();
at=false;
aa.attr("aria-expanded","false");
Y.attr("aria-hidden","true");
Y.find("#memberID, #pin").blur();
K.hammer().off(ar+".closeMpoPanel")
}};
var o=function(){au("html").addClass(E);
setTimeout(function(){au("html").removeClass(E)
},400)
};
var v=function(aJ){if(aJ.which===32||aJ.which===13){R(aJ)
}};
var R=function(aJ){aJ.preventDefault();
aJ.currentTarget.focus();
if(K.hasClass("secondary-active")){K.removeClass("secondary-active");
au(".menu-container").find(".list-active").removeClass("list-active");
au(".secondary-nav-container.active").removeClass("active");
au(".secondary-nav-book-trip-container.active").removeClass("active");
au(".nav-book-trip .icon").removeClass(x.collapseIconClass)
}au(".change-region").trigger("toggle.regionSelectorFlyout");
if(K.hasClass("travel-alert-expand")){K.find(".summary-panel").trigger(ar)
}au("html").toggleClass(ad);
if(!au("html").hasClass(ad)){o();
at=false;
aa.attr("aria-expanded","false");
Y.attr("aria-hidden","true")
}else{s();
aJ.stopImmediatePropagation();
at=true;
aa.attr("aria-expanded","true");
Y.attr("aria-hidden","false");
K.hammer().on(ar+".closeMpoPanel",U)
}};
var X=function(){if(au.cookie("mpouser")){au.removeCookie("mpouser",{path:"/"})
}};
var j=function(aJ){au.cookie("mpouser",aJ,{path:"/",expires:365})
};
var r=function(aK,aJ){au.cookie(aK,aJ,{path:"/"})
};
var ao=function(aK,aL){var aJ=au("#"+aK).val();
au("#"+aK).val(aJ+"?memberID="+aL)
};
var i=function(aM){aM.preventDefault();
var aO=au(ab).val();
var aL=au(aE).val();
var aN=au("#remember-details");
var aK=aN.is(":checked")?j(aO):X();
ao("loginUrl",aO);
if(aO===""&&aL===""){var aJ=au("#loginUrl").val();
window.location=aJ+aO+"&status=both"
}else{au(aM.target).parent("form").submit()
}};
var ag=function(){var aK=au("#remember-details");
var aJ=au.cookie("mpouser");
if(aJ){au(ab).val(aJ);
aK.attr("checked",true)
}};
var aw=function(aL){aL.preventDefault();
var aJ=au.ajax({url:CX.mpo.signOut.memberPath,timeout:3000,type:"GET"});
var aK=au.ajax({url:CX.mpo.signOut.mmbPath,timeout:3000,type:"GET"});
var aM=au.ajax({url:CX.mpo.signOut.webappPath,timeout:3000,type:"GET"});
au.when(aJ,aK,aM).done(function(){au(aL.target).closest("form").submit();
r("isLoggedIn",false)
});
au.when(aJ,aK,aM).fail(function(){au(aL.target).closest("form").submit();
r("isLoggedIn",false)
})
};
var aC=function(aJ){Y.addClass(x.MPOFlyoutExpand);
Y.find(".tier-info").attr("aria-expanded",true);
Y.find(".is-visually-hidden").empty().append(Y.find(".tier-info-clickable").data("collapseHint"));
Y.find(".tier-info").find(".icon").removeClass(x.expandIconClass).addClass(x.collapseIconClass)
};
var M=function(aJ){Y.removeClass(x.MPOFlyoutExpand);
Y.find(".tier-info").attr("aria-expanded",false);
Y.find(".is-visually-hidden").empty().append(Y.find(".tier-info-clickable").data("expandHint"));
Y.find(".tier-info").find(".icon").removeClass(x.collapseIconClass).addClass(x.expandIconClass)
};
var p=function(aJ){if(aJ.which===32||aJ.which===13){ap(aJ)
}};
var aj=function(aJ){if(aJ.keyCode===9||aJ.which===9){au(this).css("outline","")
}};
var ap=function(aJ){aJ.preventDefault();
if(!ay.isLarge()){if(Y.hasClass(x.MPOFlyoutExpand)){M()
}else{aC()
}}};
var aq=function(){au(".mpo-trigger").hammer(ak).on(ar,R);
au(".mpo-trigger").on("keypress",v);
au(".mpo-submit").on("click",i);
au(".mpo-signout").on("click",aw);
V.hammer().on(ar,ap);
V.on("keypress",p);
V.on("keyup",aj);
V.hover(function(){au(this).css("outline",0)
})
};
var aD=function(aJ){au(".mpo-trigger, .welcome-message-tier, .mpo-stats, .mpo-container").addClass(aJ.toLowerCase())
};
var w=function(aL){var aK=au.map(CX.mpo.nextTierMapping,function(aN,aM){return[aN]
});
var aJ=S.indexOf(aK,aL)+1;
return aK[aJ]?aK[aJ]:"-"
};
var aA=function(aK,aJ){if(aK==="DM"&&aJ){return"DP"
}else{return false
}};
var u=function(aL,aJ){var aM=aA(aL,aJ);
var aK=aM?aM:aL;
return aK
};
var ah=function(aJ){return CX.mpo.nextTierMapping[aJ]
};
var H=function(aK,aJ){return ah(u(aK,aJ))
};
var f=function(aK){var aJ=CX.mpo.titleMapping[aK];
return aJ
};
var aG=function(aO,aK){var aN=f(aO);
var aM=CX.mpo.greetingFormat.replace(/#/g,"");
var aL=aM.replace("familyname",aK);
var aJ=aL.replace("title",aN);
return aJ
};
var ac=function(aJ){var aK='<div class="mpo-profile-status"><span>';
if(CX.mpo.welcomeAtStart){aK+=CX.mpo.welcomeMessage+" "+aJ
}else{aK+=aJ+" "+CX.mpo.welcomeMessage
}aK+="</span></div>";
Y.before(aK)
};
var A=function(aJ){var aK="<b>"+aJ+"</b>";
if(CX.mpo.welcomeAtStart){au(".welcome-message-content").append(CX.mpo.welcomeMessage+", "+aK)
}else{au(".welcome-message-content").append(aK+", "+CX.mpo.welcomeMessage)
}};
var af=function(aO,aK){var aJ=aG(aO.title,aO.familyName);
au(".mpo-trigger-large").html(aJ);
A(aJ);
if((window.CX.mpo.isLoggedIn)&&((au.cookie("isLoggedIn")==="false")||(!au.cookie("isLoggedIn")))){r("isLoggedIn",true);
ac(aJ)
}var aN=u(aO.currentTier,aO.top100Indicator);
var aL=ah(aN);
au(g.tier).find(aB).html(aL);
aD(aN);
if(aO.currentTier.toLowerCase()!=="am"){au(".tier-in-header").html(aL)
}var aM=w(aL);
au(g.tierInfo).find(aB).html(aM);
au(g.clubMiles).find(aB).html(parseInt(aO.clubMiles,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
au(g.sectors).find(aB).html(parseFloat(aO.clubSectors,10).toFixed(2));
au(g.asiaMiles).find(aB).html(parseInt(aO.asiaMiles,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
au(g.asiaMilesLarge).find(aB).html(parseInt(aO.asiaMiles,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
if(aO.currentTier.toLowerCase()==="am"){I(aO.currentTier.toLowerCase())
}aK()
};
var n=function(aL,aJ,aS){var aM=document.getElementById(aL);
aM.width=145;
aM.height=145;
var aK=aM.getContext("2d");
var aT=72;
var aR=72;
var aO=65;
var aP=0.62*Math.PI;
var aN=0.38*Math.PI;
var aQ=(aJ/aS*1.76+0.62)*Math.PI;
aK.lineCap="round";
aK.lineWidth=11;
var aU=aK.createLinearGradient(0,0,145,0);
if(CX.global.source.toLowerCase()==="ka"){aU.addColorStop(0,an.kaRedDark);
aU.addColorStop(1,an.cxGreyMedium)
}else{aU.addColorStop(0,an.cxGreen);
aU.addColorStop(1,an.cxGreenWarm)
}aK.strokeStyle=an.cxGreyMedium;
aK.beginPath();
aK.arc(aT,aR,aO,aP,aN,false);
aK.stroke();
aK.strokeStyle=an.cxGreyWarm;
aK.beginPath();
aK.arc(aT+1,aR+1,aO,aP,aN,false);
aK.stroke();
if(aJ!==0){aK.strokeStyle=aU;
aK.beginPath();
aK.arc(aT+1,aR+1,aO,aP,aQ,false);
aK.stroke()
}};
var B=function(){K.toggleClass("is-logged-in")
};
var Z=function(aN){var aM=az.search.substring(1);
var aK=aM.split("&");
for(var aL=0;
aL<aK.length;
aL++){var aJ=aK[aL].split("=");
if(aJ[0]===aN){return aJ[1]
}}};
var y=function(aO,aK,aJ,aN){var aL="";
var aM=aO.statusCode;
var aP=aO.memberID;
if(!S.isEmpty(aP)){au(ab).val(aP)
}if(aK.errorMessages.length>0){aL=S.template(av,aK)
}S.forEach(aF,function(aR,aQ){if(S.indexOf(aR,aM)>-1){au(".state-login #"+aQ).addClass("has-error")
}});
au(".state-login").prepend(J.replace("#placeholder#",aL))
};
var F=function(){var aM=Z("status");
var aP=Z("memberID");
var aO;
if(typeof aM!=="undefined"&&typeof aP!=="undefined"){if(aM==="both"){aO=new Array("1002","1001")
}else{aO=new Array(aM)
}for(var aL=0;
aL<aO.length;
aL++){var aK=window.CX.mpo.endpoints.loginError+aO[aL]+".JSON";
var aJ=au.ajax({url:aK,type:"GET",dataType:"json",async:false});
var aN=au.proxy(y,this,{statusCode:aO[aL],memberID:aP});
aJ.done(aN)
}setTimeout(function(){au(".mpo-trigger").trigger(ar)
})
}};
var P=function(aL,aK){var aJ=au.ajax({url:aL,type:"POST",contentType:"application/json; charset=utf-8",data:"{}",dataType:"json"});
aJ.done(function(aM){if(aM.familyName&&!aM.errors){window.CX.mpo.isLoggedIn=true;
if(az.protocol!=="https:"){m()
}else{B();
af(aM,function(){aK(true,aM)
})
}}else{window.CX.mpo.isLoggedIn=false;
aK(false,aM)
}});
aJ.fail(function(aM,aN){window.CX.mpo.isLoggedIn=false;
aK(false,null)
})
};
var h=function(aJ){aH=aJ.format;
z.lang(aJ.lang);
return z.lang()
};
var l=function(aJ){if(aJ.currentTierCode==="GR"){return false
}if((aJ.currentClubMiles>=aJ.renewClubMiles)||(aJ.currentClubSectors>=aJ.renewClubSectors)){return false
}return true
};
var aI=function(aM,aJ,aK){if(!aM.errors||aM.errors.length===0){var aL;
if(l(aM)){aL=H(aM.currentTierCode,aM.top100Indicator);
au(g.tierInfo).find(".stat-heading").addClass("js-show-renew");
T(aM,aM.renewClubMiles,aM.renewClubSectors,aL)
}else{aL=H(aM.nextTierCode,aM.top100Indicator);
au(g.tierInfo).find(".stat-heading").addClass("js-show-next");
if(aM.currentTierCode==="DM"){au(".mpo-stats").addClass("js-no-meter")
}else{T(aM,aM.nextClubMiles,aM.nextClubSectors,aL)
}}}};
var T=function(aN,aP,aM,aL){var aK=Math.min(aP,aN.currentClubMiles);
var aO=Math.min(aM,aN.currentClubSectors);
if(W.canvas){n("mpo-miles-meter",aK,aP);
n("mpo-sectors-meter",aO,aM)
}else{Y.find("canvas").remove()
}au(".mpo-meter-wrapper.miles").attr("aria-valuemax",aP).attr("aria-valuenow",aK);
au(".mpo-meter-wrapper.sectors").attr("aria-valuemax",aM).attr("aria-valuenow",aO);
var aJ=z(aN.currentTierEndDate).format(aH);
au(g.tierEndDate).find(aB).html(aJ);
au(g.clubMiles).find(aB).html(parseInt(aN.currentClubMiles,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
au(g.sectors).find(aB).html(parseFloat(aN.currentClubSectors,10).toFixed(2));
au(g.asiaMiles).find(aB).html(parseInt(aN.asiaMilesAvailableForRedemption,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
au(g.asiaMilesLarge).find(aB).html(parseInt(aN.asiaMilesAvailableForRedemption,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
au(g.tierInfo).find(".tier-stat").find(aB).html(aL);
au(".mpo-meter-wrapper.miles").find(".meter-value").html(parseInt(aP-aK,10).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"));
au(".mpo-meter-wrapper.sectors").find(".meter-value").html(parseFloat(aM-aO,10).toFixed(2))
};
var D=function(aJ){var aK=document.createElement("span");
aK.setAttribute("class","booking-tag");
aK.innerHTML=aJ;
au(".manage-booking-link").append(aK)
};
var N=function(){Y.find(".overlay-loading").remove()
};
var am=function(aK){var aJ=au.ajax({url:aK,type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
aJ.done(aI)
};
var al=function(aM,aJ,aK){var aL=0;
if(!aM.errors||aM.errors.length===0){S.forEach(aM.bookings,function(aP,aO){var aN=S.compact(S.pluck(aP.segments,"actualTimeOfDeparture"));
if(aP.segments.length>aN.length){aL++
}});
if(aL>0){D(aL)
}}N()
};
var ae=function(aK){var aJ={locale:CX.global.currentLanguage+"_"+CX.global.currentRegion,source:CX.global.source};
var aL=au.ajax({url:aK,type:"POST",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(aJ)});
aL.done(al)
};
var q=function(aJ,aL){var aK=window.cxDataLayer||{};
if(typeof aK.registration!=="undefined"&&typeof aK.registration.track==="function"){aK.registration.track(aL)
}if(!aJ){ag();
L(CX.mpo.mlcSession.mlcController,CX.mpo.mlcSession.appCode,CX.mpo.mlcSession.targetUrl)
}else{h(CX.mpo.dateFormatForRenewBy);
if(aL.currentTier.toLowerCase()!=="am"){am(CX.mpo.endpoints.accountDetail);
ae(CX.manageBooking.endPoints.bookingDetailByMemberLogin)
}else{N()
}}};
var L=function(aM,aJ,aN){if((au.cookie(CX.mpo.mlcSession.mlcCXCookie)||au.cookie(CX.mpo.mlcSession.mlcKACookie))&&aN!==""){var aL=Z("token");
var aK=Z("switch");
if(typeof aL==="undefined"){if(typeof aK!=="undefined"){ai(CX.mpo.mlcSession.mlcCXCookie,CX.mpo.mlcSession.cxDomain);
ai(CX.mpo.mlcSession.mlcKACookie,CX.mpo.mlcSession.kaDomain)
}else{window.location=aM+"?action=Query&targetURL="+encodeURIComponent(aN)+"&appCode="+aJ
}}}};
var ai=function(aL,aJ){if(au.cookie(aL)){var aK=new Date();
aK.setDate(aK.getDate()+(-1));
document.cookie=aL+"=;Domain="+aJ+"; expires="+aK.toUTCString()+"; path=/"
}};
var I=function(aJ){au(".mpo-trigger").find(".icon-marco-polo").addClass(aJ);
au(".mpo-panel-header").find(".icon-marco-polo").addClass(aJ);
Y.find(".state-asia-miles").removeClass("is-display-none")
};
var m=function(){if(CX.mpo.mlcSession.targetUrl!==""){window.location="https://"+az.hostname+az.pathname+az.search
}};
return{init:function(aJ,aK){if(aJ){aa=aJ;
V=Y.find(".tier-info-clickable, .tier-info");
az=aK;
aq();
P(CX.mpo.endpoints.loggedIn,q);
F()
}}}
});
e("tabs",["jquery","lodash","jquery.hammer","clickTouch"],function(j,g,f,i){var k={preventDefault:true,tapMaxTime:800};
var h=function(p,m){var o={};
var r={selectors:{tabPanel:".tab-panel",tabActive:".tab-active",tabPanelActive:".tab-panel-active",tabPanelAdaptive:".tab-panel-adaptive"},namespace:"tabs"};
var q;
var l;
var n;
o.create=function(u,s){if(g.isEmpty(j(u))){return
}o.$el=j(u);
o.settings=j.extend({},r,s);
o.setup();
return this
};
o.setup=function(){n=o.$el.find("a").map(function(){var u=j(this).data("tabId");
var s=j('[data-tab-panel="'+u+'"]');
return{id:u,tab:j(this),panel:s}
});
q=o.$el.find(o.settings.selectors.tabActive);
if(!q.length){q=o.$el.find("li:first-child a")
}l=q.data("tabId");
o.setActiveTab(l);
o.bindEvents()
};
o.bindEvents=function(){var s="tab."+this.settings.namespace;
o.$el.find("a").hammer(k).on(i,o.onTabPress);
o.$el.find("a").on("keypress",o.onTabEntered);
j("body").on("tab.prepare",this.onTabChange)
};
o.onTabChange=function(u,s){if(s.ignore||u.namespace!==o.settings.namespace){return false
}o.setActiveTab(s.tabId)
};
o.onTabEntered=function(s){if(s.which===13){o.onTabPress(s)
}};
o.onTabPress=function(u){var s;
if(j(u.target).attr("type")==="radio"){s=j(u.target).parent().data("tabId")
}else{s=j(u.target).data("tabId");
if(i==="tap"){u.gesture.srcEvent.preventDefault()
}u.preventDefault()
}if(l!==s){o.setActiveTab(s);
j("body").trigger("tab.hometabs",[s,true])
}};
o.setActiveTab=function(w,s){var z=o.settings.selectors.tabActive.substring(1);
var u=o.settings.selectors.tabPanelActive.substring(1);
var y=o.settings.selectors.tabPanelAdaptive.substring(1);
var v;
n.each(function(B,A){A.tab.removeClass(z);
A.tab.attr("aria-selected","false");
A.panel.removeClass(u);
A.panel.removeClass(y);
A.panel.attr("aria-hidden","true")
});
v=n.filter(function(B,A){return A.id===w
})[0];
v.tab.addClass(z);
v.tab.attr("aria-selected","true");
v.panel.addClass(u);
v.panel.addClass(y);
v.panel.attr("aria-hidden","false");
var x=j.Event("tab.shown",{target:v.panel});
o.$el.trigger(x);
q=v.tab;
l=w;
return this
};
if(!o.$el){o.create(p,m)
}return o
};
return h
});
e("manageBookingTabs",["jquery","jquery.hammer","clickTouch"],function(i,f,h){var j={preventDefault:true,tapMaxTime:800};
var g=function(p,v){var u;
var n="";
var k="";
var o="selected";
var m=function(w){var x="tab.hometabs";
u=w;
i(".prepare-for-flight .tab-panel").removeClass("tab-panel-active");
u.hammer(j).on(h,"a",s);
u.hammer(j).on(h,"i",r);
i("body").on(x,l)
};
var s=function(w){q(i(this).data("tabId"),true)
};
var l=function(x,w){u.removeClass(n);
n="";
q(w,false)
};
var r=function(w){u.removeClass(n);
n="";
i(".prepare-for-flight").find('[data-tab-panel="'+i(this).parent().data("tabId")+'"]').removeClass("tab-panel-adaptive");
w.stopPropagation()
};
var q=function(w,x){k=o+"-"+w;
if(k!==n){u.addClass(k);
n=k;
if(x){u.trigger("tab.prepare",[{tabId:w,ignore:false}])
}}};
if(i(p)){m(i(p))
}};
return g
});
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
e("handlebars/safe-string",["exports"],function(f){function g(h){this.string=h
}g.prototype.toString=function(){return""+this.string
};
f["default"]=g
});
e("handlebars/utils",["./safe-string","exports"],function(o,p){var i=o["default"];
var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};
var f=/[&<>"'`]/g;
var j=/[&<>"'`]/;
function r(s){return q[s]||"&amp;"
}function n(v,u){for(var s in u){if(Object.prototype.hasOwnProperty.call(u,s)){v[s]=u[s]
}}}p.extend=n;
var h=Object.prototype.toString;
p.toString=h;
var g=function(s){return typeof s==="function"
};
if(g(/x/)){g=function(s){return typeof s==="function"&&h.call(s)==="[object Function]"
}
}var g;
p.isFunction=g;
var m=Array.isArray||function(s){return(s&&typeof s==="object")?h.call(s)==="[object Array]":false
};
p.isArray=m;
function l(s){if(s instanceof i){return s.toString()
}else{if(!s&&s!==0){return""
}}s=""+s;
if(!j.test(s)){return s
}return s.replace(f,r)
}p.escapeExpression=l;
function k(s){if(!s&&s!==0){return true
}else{if(m(s)&&s.length===0){return true
}else{return false
}}}p.isEmpty=k
});
e("handlebars/exception",["exports"],function(g){var h=["description","fileName","lineNumber","message","name","number","stack"];
function f(m,l){var j;
if(l&&l.firstLine){j=l.firstLine;
m+=" - "+j+":"+l.firstColumn
}var k=Error.prototype.constructor.call(this,m);
for(var i=0;
i<h.length;
i++){this[h[i]]=k[h[i]]
}if(j){this.lineNumber=j;
this.column=l.firstColumn
}}f.prototype=new Error();
g["default"]=f
});
e("handlebars/base",["./utils","./exception","exports"],function(q,u,s){var o=q;
var m=u["default"];
var w="1.3.0";
s.VERSION=w;
var g=4;
s.COMPILER_REVISION=g;
var j={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};
s.REVISION_CHANGES=j;
var n=o.isArray,i=o.isFunction,h=o.toString,f="[object Object]";
function l(y,x){this.helpers=y||{};
this.partials=x||{};
p(this)
}s.HandlebarsEnvironment=l;
l.prototype={constructor:l,logger:r,log:k,registerHelper:function(y,z,x){if(h.call(y)===f){if(x||z){throw new m("Arg not supported with multiple helpers")
}o.extend(this.helpers,y)
}else{if(x){z.not=x
}this.helpers[y]=z
}},registerPartial:function(x,y){if(h.call(x)===f){o.extend(this.partials,x)
}else{this.partials[x]=y
}}};
function p(x){x.registerHelper("helperMissing",function(y){if(arguments.length===2){return undefined
}else{throw new m("Missing helper: '"+y+"'")
}});
x.registerHelper("blockHelperMissing",function(A,z){var y=z.inverse||function(){},B=z.fn;
if(i(A)){A=A.call(this)
}if(A===true){return B(this)
}else{if(A===false||A==null){return y(this)
}else{if(n(A)){if(A.length>0){return x.helpers.each(A,z)
}else{return y(this)
}}else{return B(A)
}}}});
x.registerHelper("each",function(y,G){var E=G.fn,A=G.inverse;
var C=0,D="",B;
if(i(y)){y=y.call(this)
}if(G.data){B=v(G.data)
}if(y&&typeof y==="object"){if(n(y)){for(var z=y.length;
C<z;
C++){if(B){B.index=C;
B.first=(C===0);
B.last=(C===(y.length-1))
}D=D+E(y[C],{data:B})
}}else{for(var F in y){if(y.hasOwnProperty(F)){if(B){B.key=F;
B.index=C;
B.first=(C===0)
}D=D+E(y[F],{data:B});
C++
}}}}if(C===0){D=A(this)
}return D
});
x.registerHelper("if",function(z,y){if(i(z)){z=z.call(this)
}if((!y.hash.includeZero&&!z)||o.isEmpty(z)){return y.inverse(this)
}else{return y.fn(this)
}});
x.registerHelper("unless",function(z,y){return x.helpers["if"].call(this,z,{fn:y.inverse,inverse:y.fn,hash:y.hash})
});
x.registerHelper("with",function(z,y){if(i(z)){z=z.call(this)
}if(!o.isEmpty(z)){return y.fn(z)
}});
x.registerHelper("log",function(z,y){var A=y.data&&y.data.level!=null?parseInt(y.data.level,10):1;
x.log(A,z)
})
}var r={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(z,x){if(r.level<=z){var y=r.methodMap[z];
if(typeof console!=="undefined"&&console[y]){console[y].call(console,x)
}}}};
s.logger=r;
function k(y,x){r.log(y,x)
}s.log=k;
var v=function(x){var y={};
o.extend(y,x);
return y
};
s.createFrame=v
});
e("handlebars/runtime",["./utils","./exception","./base","exports"],function(o,s,i,q){var n=o;
var l=s["default"];
var h=i.COMPILER_REVISION;
var k=i.REVISION_CHANGES;
function g(w){var v=w&&w[0]||1,y=h;
if(v!==y){if(v<y){var u=k[y],x=k[v];
throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+u+") or downgrade your runtime to an older version ("+x+").")
}else{throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+w[1]+").")
}}}q.checkRevision=g;
function p(u,x){if(!x){throw new l("No environment passed to template")
}var w=function(z,B,D,E,C,F){var y=x.VM.invokePartial.apply(this,arguments);
if(y!=null){return y
}if(x.compile){var A={helpers:E,partials:C,data:F};
C[B]=x.compile(z,{data:F!==undefined},x);
return C[B](D,A)
}else{throw new l("The partial "+B+" could not be compiled when running in runtime-only mode")
}};
var v={escapeExpression:n.escapeExpression,invokePartial:w,programs:[],program:function(z,A,B){var y=this.programs[z];
if(B){y=m(z,A,B)
}else{if(!y){y=this.programs[z]=m(z,A)
}}return y
},merge:function(A,z){var y=A||z;
if(A&&z&&(A!==z)){y={};
n.extend(y,z);
n.extend(y,A)
}return y
},programWithDepth:x.VM.programWithDepth,noop:x.VM.noop,compilerInfo:null};
return function(B,z){z=z||{};
var C=z.partial?z:x,D,A;
if(!z.partial){D=z.helpers;
A=z.partials
}var y=u.call(v,C,B,D,A,z.data);
if(!z.partial){x.VM.checkRevision(v.compilerInfo)
}return y
}
}q.template=p;
function j(v,w,x){var u=Array.prototype.slice.call(arguments,3);
var y=function(A,z){z=z||{};
return w.apply(this,[A,z.data||x].concat(u))
};
y.program=v;
y.depth=u.length;
return y
}q.programWithDepth=j;
function m(u,v,w){var x=function(z,y){y=y||{};
return v(z,y.data||w)
};
x.program=u;
x.depth=0;
return x
}q.program=m;
function f(u,w,y,z,x,A){var v={partial:true,helpers:z,partials:x,data:A};
if(u===undefined){throw new l("The partial "+w+" could not be found")
}else{if(u instanceof Function){return u(y,v)
}}}q.invokePartial=f;
function r(){return""
}q.noop=r
});
e("handlebars.runtime",["./handlebars/base","./handlebars/safe-string","./handlebars/exception","./handlebars/utils","./handlebars/runtime","exports"],function(p,r,h,l,o,q){var f=p;
var i=r["default"];
var k=h["default"];
var n=l;
var j=o;
var m=function(){var s=new f.HandlebarsEnvironment();
n.extend(s,f);
s.SafeString=i;
s.Exception=k;
s.Utils=n;
s.VM=j;
s.template=function(u){return j.template(u,s)
};
return s
};
var g=m();
g.create=m;
q["default"]=g
});
e("handlebars/compiler/ast",["../exception","exports"],function(j,h){var g=j["default"];
function f(k){k=k||{};
this.firstLine=k.first_line;
this.firstColumn=k.first_column;
this.lastColumn=k.last_column;
this.lastLine=k.last_line
}var i={ProgramNode:function(m,o,l,n){var k,p;
if(arguments.length===3){n=l;
l=null
}else{if(arguments.length===2){n=o;
o=null
}}f.call(this,n);
this.type="program";
this.statements=m;
this.strip={};
if(l){p=l[0];
if(p){k={first_line:p.firstLine,last_line:p.lastLine,last_column:p.lastColumn,first_column:p.firstColumn};
this.inverse=new i.ProgramNode(l,o,k)
}else{this.inverse=new i.ProgramNode(l,o)
}this.strip.right=o.left
}else{if(o){this.strip.left=o.right
}}},MustacheNode:function(p,o,k,m,l){f.call(this,l);
this.type="mustache";
this.strip=m;
if(k!=null&&k.charAt){var n=k.charAt(3)||k.charAt(2);
this.escaped=n!=="{"&&n!=="&"
}else{this.escaped=!!k
}if(p instanceof i.SexprNode){this.sexpr=p
}else{this.sexpr=new i.SexprNode(p,o)
}this.sexpr.isRoot=true;
this.id=this.sexpr.id;
this.params=this.sexpr.params;
this.hash=this.sexpr.hash;
this.eligibleHelper=this.sexpr.eligibleHelper;
this.isHelper=this.sexpr.isHelper
},SexprNode:function(p,m,k){f.call(this,k);
this.type="sexpr";
this.hash=m;
var o=this.id=p[0];
var n=this.params=p.slice(1);
var l=this.eligibleHelper=o.isSimple;
this.isHelper=l&&(n.length||m)
},PartialNode:function(k,m,n,l){f.call(this,l);
this.type="partial";
this.partialName=k;
this.context=m;
this.strip=n
},BlockNode:function(n,l,k,o,m){f.call(this,m);
if(n.sexpr.id.original!==o.path.original){throw new g(n.sexpr.id.original+" doesn't match "+o.path.original,this)
}this.type="block";
this.mustache=n;
this.program=l;
this.inverse=k;
this.strip={left:n.strip.left,right:o.strip.right};
(l||k).strip.left=n.strip.right;
(k||l).strip.right=o.strip.left;
if(k&&!l){this.isInverse=true
}},ContentNode:function(k,l){f.call(this,l);
this.type="content";
this.string=k
},HashNode:function(l,k){f.call(this,k);
this.type="hash";
this.pairs=l
},IdNode:function(r,q){f.call(this,q);
this.type="ID";
var p="",n=[],s=0;
for(var o=0,k=r.length;
o<k;
o++){var m=r[o].part;
p+=(r[o].separator||"")+m;
if(m===".."||m==="."||m==="this"){if(n.length>0){throw new g("Invalid path: "+p,this)
}else{if(m===".."){s++
}else{this.isScoped=true
}}}else{n.push(m)
}}this.original=p;
this.parts=n;
this.string=n.join(".");
this.depth=s;
this.isSimple=r.length===1&&!this.isScoped&&s===0;
this.stringModeValue=this.string
},PartialNameNode:function(k,l){f.call(this,l);
this.type="PARTIAL_NAME";
this.name=k.original
},DataNode:function(l,k){f.call(this,k);
this.type="DATA";
this.id=l
},StringNode:function(k,l){f.call(this,l);
this.type="STRING";
this.original=this.string=this.stringModeValue=k
},IntegerNode:function(k,l){f.call(this,l);
this.type="INTEGER";
this.original=this.integer=k;
this.stringModeValue=Number(k)
},BooleanNode:function(k,l){f.call(this,l);
this.type="BOOLEAN";
this.bool=k;
this.stringModeValue=k==="true"
},CommentNode:function(l,k){f.call(this,k);
this.type="comment";
this.comment=l
}};
h["default"]=i
});
e("handlebars/compiler/parser",["exports"],function(g){var f=(function(){var o={trace:function k(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,"$accept":0,"$end":1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function j(p,s,u,x,w,r,v){var q=r.length-1;
switch(w){case 1:return new x.ProgramNode(r[q-1],this._$);
break;
case 2:return new x.ProgramNode([],this._$);
break;
case 3:this.$=new x.ProgramNode([],r[q-1],r[q],this._$);
break;
case 4:this.$=new x.ProgramNode(r[q-2],r[q-1],r[q],this._$);
break;
case 5:this.$=new x.ProgramNode(r[q-1],r[q],[],this._$);
break;
case 6:this.$=new x.ProgramNode(r[q],this._$);
break;
case 7:this.$=new x.ProgramNode([],this._$);
break;
case 8:this.$=new x.ProgramNode([],this._$);
break;
case 9:this.$=[r[q]];
break;
case 10:r[q-1].push(r[q]);
this.$=r[q-1];
break;
case 11:this.$=new x.BlockNode(r[q-2],r[q-1].inverse,r[q-1],r[q],this._$);
break;
case 12:this.$=new x.BlockNode(r[q-2],r[q-1],r[q-1].inverse,r[q],this._$);
break;
case 13:this.$=r[q];
break;
case 14:this.$=r[q];
break;
case 15:this.$=new x.ContentNode(r[q],this._$);
break;
case 16:this.$=new x.CommentNode(r[q],this._$);
break;
case 17:this.$=new x.MustacheNode(r[q-1],null,r[q-2],h(r[q-2],r[q]),this._$);
break;
case 18:this.$=new x.MustacheNode(r[q-1],null,r[q-2],h(r[q-2],r[q]),this._$);
break;
case 19:this.$={path:r[q-1],strip:h(r[q-2],r[q])};
break;
case 20:this.$=new x.MustacheNode(r[q-1],null,r[q-2],h(r[q-2],r[q]),this._$);
break;
case 21:this.$=new x.MustacheNode(r[q-1],null,r[q-2],h(r[q-2],r[q]),this._$);
break;
case 22:this.$=new x.PartialNode(r[q-2],r[q-1],h(r[q-3],r[q]),this._$);
break;
case 23:this.$=h(r[q-1],r[q]);
break;
case 24:this.$=new x.SexprNode([r[q-2]].concat(r[q-1]),r[q],this._$);
break;
case 25:this.$=new x.SexprNode([r[q]],null,this._$);
break;
case 26:this.$=r[q];
break;
case 27:this.$=new x.StringNode(r[q],this._$);
break;
case 28:this.$=new x.IntegerNode(r[q],this._$);
break;
case 29:this.$=new x.BooleanNode(r[q],this._$);
break;
case 30:this.$=r[q];
break;
case 31:r[q-1].isHelper=true;
this.$=r[q-1];
break;
case 32:this.$=new x.HashNode(r[q],this._$);
break;
case 33:this.$=[r[q-2],r[q]];
break;
case 34:this.$=new x.PartialNameNode(r[q],this._$);
break;
case 35:this.$=new x.PartialNameNode(new x.StringNode(r[q],this._$),this._$);
break;
case 36:this.$=new x.PartialNameNode(new x.IntegerNode(r[q],this._$));
break;
case 37:this.$=new x.DataNode(r[q],this._$);
break;
case 38:this.$=new x.IdNode(r[q],this._$);
break;
case 39:r[q-2].push({part:r[q],separator:r[q-1]});
this.$=r[q-2];
break;
case 40:this.$=[{part:r[q]}];
break;
case 43:this.$=[];
break;
case 44:r[q-1].push(r[q]);
break;
case 47:this.$=[r[q]];
break;
case 48:r[q-1].push(r[q]);
break
}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function l(q,p){throw new Error(q)
},parse:function n(B){var I=this,y=[0],R=[null],D=[],S=this.table,s="",C=0,P=0,v=0,A=2,F=1;
this.lexer.setInput(B);
this.lexer.yy=this.yy;
this.yy.lexer=this.lexer;
this.yy.parser=this;
if(typeof this.lexer.yylloc=="undefined"){this.lexer.yylloc={}
}var u=this.lexer.yylloc;
D.push(u);
var w=this.lexer.options&&this.lexer.options.ranges;
if(typeof this.yy.parseError==="function"){this.parseError=this.yy.parseError
}function H(p){y.length=y.length-2*p;
R.length=R.length-p;
D.length=D.length-p
}function G(){var p;
p=I.lexer.lex()||1;
if(typeof p!=="number"){p=I.symbols_[p]||p
}return p
}var O,K,x,N,T,E,M={},J,Q,q,z;
while(true){x=y[y.length-1];
if(this.defaultActions[x]){N=this.defaultActions[x]
}else{if(O===null||typeof O=="undefined"){O=G()
}N=S[x]&&S[x][O]
}if(typeof N==="undefined"||!N.length||!N[0]){var L="";
if(!v){z=[];
for(J in S[x]){if(this.terminals_[J]&&J>2){z.push("'"+this.terminals_[J]+"'")
}}if(this.lexer.showPosition){L="Parse error on line "+(C+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+z.join(", ")+", got '"+(this.terminals_[O]||O)+"'"
}else{L="Parse error on line "+(C+1)+": Unexpected "+(O==1?"end of input":"'"+(this.terminals_[O]||O)+"'")
}this.parseError(L,{text:this.lexer.match,token:this.terminals_[O]||O,line:this.lexer.yylineno,loc:u,expected:z})
}}if(N[0] instanceof Array&&N.length>1){throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+O)
}switch(N[0]){case 1:y.push(O);
R.push(this.lexer.yytext);
D.push(this.lexer.yylloc);
y.push(N[1]);
O=null;
if(!K){P=this.lexer.yyleng;
s=this.lexer.yytext;
C=this.lexer.yylineno;
u=this.lexer.yylloc;
if(v>0){v--
}}else{O=K;
K=null
}break;
case 2:Q=this.productions_[N[1]][1];
M.$=R[R.length-Q];
M._$={first_line:D[D.length-(Q||1)].first_line,last_line:D[D.length-1].last_line,first_column:D[D.length-(Q||1)].first_column,last_column:D[D.length-1].last_column};
if(w){M._$.range=[D[D.length-(Q||1)].range[0],D[D.length-1].range[1]]
}E=this.performAction.call(M,s,P,C,this.yy,N[1],R,D);
if(typeof E!=="undefined"){return E
}if(Q){y=y.slice(0,-1*Q*2);
R=R.slice(0,-1*Q);
D=D.slice(0,-1*Q)
}y.push(this.productions_[N[1]][0]);
R.push(M.$);
D.push(M._$);
q=S[y[y.length-2]][y[y.length-1]];
y.push(q);
break;
case 3:return true
}}return true
}};
function h(p,q){return{left:p.charAt(2)==="~",right:q.charAt(0)==="~"||q.charAt(1)==="~"}
}var i=(function(){var s=({EOF:1,parseError:function v(y,x){if(this.yy.parser){this.yy.parser.parseError(y,x)
}else{throw new Error(y)
}},setInput:function(x){this._input=x;
this._more=this._less=this.done=false;
this.yylineno=this.yyleng=0;
this.yytext=this.matched=this.match="";
this.conditionStack=["INITIAL"];
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};
if(this.options.ranges){this.yylloc.range=[0,0]
}this.offset=0;
return this
},input:function(){var y=this._input[0];
this.yytext+=y;
this.yyleng++;
this.offset++;
this.match+=y;
this.matched+=y;
var x=y.match(/(?:\r\n?|\n).*/g);
if(x){this.yylineno++;
this.yylloc.last_line++
}else{this.yylloc.last_column++
}if(this.options.ranges){this.yylloc.range[1]++
}this._input=this._input.slice(1);
return y
},unput:function(z){var x=z.length;
var y=z.split(/(?:\r\n?|\n)/g);
this._input=z+this._input;
this.yytext=this.yytext.substr(0,this.yytext.length-x-1);
this.offset-=x;
var B=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);
this.matched=this.matched.substr(0,this.matched.length-1);
if(y.length-1){this.yylineno-=y.length-1
}var A=this.yylloc.range;
this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===B.length?this.yylloc.first_column:0)+B[B.length-y.length].length-y[0].length:this.yylloc.first_column-x};
if(this.options.ranges){this.yylloc.range=[A[0],A[0]+this.yyleng-x]
}return this
},more:function(){this._more=true;
return this
},less:function(x){this.unput(this.match.slice(x))
},pastInput:function(){var x=this.matched.substr(0,this.matched.length-this.match.length);
return(x.length>20?"...":"")+x.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var x=this.match;
if(x.length<20){x+=this._input.substr(0,20-x.length)
}return(x.substr(0,20)+(x.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var x=this.pastInput();
var y=new Array(x.length+1).join("-");
return x+this.upcomingInput()+"\n"+y+"^"
},next:function(){if(this.done){return this.EOF
}if(!this._input){this.done=true
}var D,B,y,A,z,x;
if(!this._more){this.yytext="";
this.match=""
}var E=this._currentRules();
for(var C=0;
C<E.length;
C++){y=this._input.match(this.rules[E[C]]);
if(y&&(!B||y[0].length>B[0].length)){B=y;
A=C;
if(!this.options.flex){break
}}}if(B){x=B[0].match(/(?:\r\n?|\n).*/g);
if(x){this.yylineno+=x.length
}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:x?x[x.length-1].length-x[x.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+B[0].length};
this.yytext+=B[0];
this.match+=B[0];
this.matches=B;
this.yyleng=this.yytext.length;
if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]
}this._more=false;
this._input=this._input.slice(B[0].length);
this.matched+=B[0];
D=this.performAction.call(this,this.yy,this,E[A],this.conditionStack[this.conditionStack.length-1]);
if(this.done&&this._input){this.done=false
}if(D){return D
}else{return
}}if(this._input===""){return this.EOF
}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
}},lex:function p(){var x=this.next();
if(typeof x!=="undefined"){return x
}else{return this.lex()
}},begin:function q(x){this.conditionStack.push(x)
},popState:function w(){return this.conditionStack.pop()
},_currentRules:function u(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function q(x){this.begin(x)
}});
s.options={};
s.performAction=function r(C,y,B,x){function z(E,D){return y.yytext=y.yytext.substr(E,y.yyleng-D)
}var A=x;
switch(B){case 0:if(y.yytext.slice(-2)==="\\\\"){z(0,1);
this.begin("mu")
}else{if(y.yytext.slice(-1)==="\\"){z(0,1);
this.begin("emu")
}else{this.begin("mu")
}}if(y.yytext){return 14
}break;
case 1:return 14;
break;
case 2:this.popState();
return 14;
break;
case 3:z(0,4);
this.popState();
return 15;
break;
case 4:return 35;
break;
case 5:return 36;
break;
case 6:return 25;
break;
case 7:return 16;
break;
case 8:return 20;
break;
case 9:return 19;
break;
case 10:return 19;
break;
case 11:return 23;
break;
case 12:return 22;
break;
case 13:this.popState();
this.begin("com");
break;
case 14:z(3,5);
this.popState();
return 15;
break;
case 15:return 22;
break;
case 16:return 41;
break;
case 17:return 40;
break;
case 18:return 40;
break;
case 19:return 44;
break;
case 20:break;
case 21:this.popState();
return 24;
break;
case 22:this.popState();
return 18;
break;
case 23:y.yytext=z(1,2).replace(/\\"/g,'"');
return 32;
break;
case 24:y.yytext=z(1,2).replace(/\\'/g,"'");
return 32;
break;
case 25:return 42;
break;
case 26:return 34;
break;
case 27:return 34;
break;
case 28:return 33;
break;
case 29:return 40;
break;
case 30:y.yytext=z(1,2);
return 40;
break;
case 31:return"INVALID";
break;
case 32:return 5;
break
}};
s.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
s.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};
return s
})();
o.lexer=i;
function m(){this.yy={}
}m.prototype=o;
o.Parser=m;
return new m
})();
g["default"]=f
});
e("handlebars/compiler/base",["./parser","./ast","exports"],function(j,f,g){var k=j["default"];
var h=f["default"];
g.parser=k;
function i(l){if(l.constructor===h.ProgramNode){return l
}k.yy=h;
return k.parse(l)
}g.parse=i
});
e("handlebars/compiler/compiler",["../exception","exports"],function(k,j){var f=k["default"];
function h(){}j.Compiler=h;
h.prototype={compiler:h,disassemble:function(){var r=this.opcodes,q,o=[],u,s;
for(var p=0,m=r.length;
p<m;
p++){q=r[p];
if(q.opcode==="DECLARE"){o.push("DECLARE "+q.name+"="+q.value)
}else{u=[];
for(var n=0;
n<q.args.length;
n++){s=q.args[n];
if(typeof s==="string"){s='"'+s.replace("\n","\\n")+'"'
}u.push(s)
}o.push(q.opcode+" "+u.join(" "))
}}return o.join("\n")
},equals:function(m){var l=this.opcodes.length;
if(m.opcodes.length!==l){return false
}for(var p=0;
p<l;
p++){var q=this.opcodes[p],n=m.opcodes[p];
if(q.opcode!==n.opcode||q.args.length!==n.args.length){return false
}for(var o=0;
o<q.args.length;
o++){if(q.args[o]!==n.args[o]){return false
}}}l=this.children.length;
if(m.children.length!==l){return false
}for(p=0;
p<l;
p++){if(!this.children[p].equals(m.children[p])){return false
}}return true
},guid:0,compile:function(l,n){this.opcodes=[];
this.children=[];
this.depths={list:[]};
this.options=n;
var o=this.options.knownHelpers;
this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};
if(o){for(var m in o){this.options.knownHelpers[m]=o[m]
}}return this.accept(l)
},accept:function(n){var m=n.strip||{},l;
if(m.left){this.opcode("strip")
}l=this[n.type](n);
if(m.right){this.opcode("strip")
}return l
},program:function(o){var n=o.statements;
for(var p=0,m=n.length;
p<m;
p++){this.accept(n[p])
}this.isSimple=m===1;
this.depths.list=this.depths.list.sort(function(q,l){return q-l
});
return this
},compileProgram:function(o){var m=new this.compiler().compile(o,this.options);
var p=this.guid++,r;
this.usePartial=this.usePartial||m.usePartial;
this.children[p]=m;
for(var q=0,n=m.depths.list.length;
q<n;
q++){r=m.depths.list[q];
if(r<2){continue
}else{this.addDepth(r-1)
}}return p
},block:function(q){var p=q.mustache,m=q.program,l=q.inverse;
if(m){m=this.compileProgram(m)
}if(l){l=this.compileProgram(l)
}var o=p.sexpr;
var n=this.classifySexpr(o);
if(n==="helper"){this.helperSexpr(o,m,l)
}else{if(n==="simple"){this.simpleSexpr(o);
this.opcode("pushProgram",m);
this.opcode("pushProgram",l);
this.opcode("emptyHash");
this.opcode("blockValue")
}else{this.ambiguousSexpr(o,m,l);
this.opcode("pushProgram",m);
this.opcode("pushProgram",l);
this.opcode("emptyHash");
this.opcode("ambiguousBlockValue")
}}this.opcode("append")
},hash:function(p){var o=p.pairs,r,q;
this.opcode("pushHash");
for(var n=0,m=o.length;
n<m;
n++){r=o[n];
q=r[1];
if(this.options.stringParams){if(q.depth){this.addDepth(q.depth)
}this.opcode("getContext",q.depth||0);
this.opcode("pushStringParam",q.stringModeValue,q.type);
if(q.type==="sexpr"){this.sexpr(q)
}}else{this.accept(q)
}this.opcode("assignToHash",r[0])
}this.opcode("popHash")
},partial:function(l){var m=l.partialName;
this.usePartial=true;
if(l.context){this.ID(l.context)
}else{this.opcode("push","depth0")
}this.opcode("invokePartial",m.name);
this.opcode("append")
},content:function(l){this.opcode("appendContent",l.string)
},mustache:function(l){this.sexpr(l.sexpr);
if(l.escaped&&!this.options.noEscape){this.opcode("appendEscaped")
}else{this.opcode("append")
}},ambiguousSexpr:function(p,n,m){var q=p.id,o=q.parts[0],l=n!=null||m!=null;
this.opcode("getContext",q.depth);
this.opcode("pushProgram",n);
this.opcode("pushProgram",m);
this.opcode("invokeAmbiguous",o,l)
},simpleSexpr:function(l){var m=l.id;
if(m.type==="DATA"){this.DATA(m)
}else{if(m.parts.length){this.ID(m)
}else{this.addDepth(m.depth);
this.opcode("getContext",m.depth);
this.opcode("pushContext")
}}this.opcode("resolvePossibleLambda")
},helperSexpr:function(o,m,l){var p=this.setupFullMustacheParams(o,m,l),n=o.id.parts[0];
if(this.options.knownHelpers[n]){this.opcode("invokeKnownHelper",p.length,n)
}else{if(this.options.knownHelpersOnly){throw new f("You specified knownHelpersOnly, but used the unknown helper "+n,o)
}else{this.opcode("invokeHelper",p.length,n,o.isRoot)
}}},sexpr:function(m){var l=this.classifySexpr(m);
if(l==="simple"){this.simpleSexpr(m)
}else{if(l==="helper"){this.helperSexpr(m)
}else{this.ambiguousSexpr(m)
}}},ID:function(p){this.addDepth(p.depth);
this.opcode("getContext",p.depth);
var n=p.parts[0];
if(!n){this.opcode("pushContext")
}else{this.opcode("lookupOnContext",p.parts[0])
}for(var o=1,m=p.parts.length;
o<m;
o++){this.opcode("lookup",p.parts[o])
}},DATA:function(o){this.options.data=true;
if(o.id.isScoped||o.id.depth){throw new f("Scoped data references are not supported: "+o.original,o)
}this.opcode("lookupData");
var p=o.id.parts;
for(var n=0,m=p.length;
n<m;
n++){this.opcode("lookup",p[n])
}},STRING:function(l){this.opcode("pushString",l.string)
},INTEGER:function(l){this.opcode("pushLiteral",l.integer)
},BOOLEAN:function(l){this.opcode("pushLiteral",l.bool)
},comment:function(){},opcode:function(l){this.opcodes.push({opcode:l,args:[].slice.call(arguments,1)})
},declare:function(l,m){this.opcodes.push({opcode:"DECLARE",name:l,value:m})
},addDepth:function(l){if(l===0){return
}if(!this.depths[l]){this.depths[l]=true;
this.depths.list.push(l)
}},classifySexpr:function(o){var n=o.isHelper;
var p=o.eligibleHelper;
var m=this.options;
if(p&&!n){var l=o.id.parts[0];
if(m.knownHelpers[l]){n=true
}else{if(m.knownHelpersOnly){p=false
}}}if(n){return"helper"
}else{if(p){return"ambiguous"
}else{return"simple"
}}},pushParams:function(n){var l=n.length,m;
while(l--){m=n[l];
if(this.options.stringParams){if(m.depth){this.addDepth(m.depth)
}this.opcode("getContext",m.depth||0);
this.opcode("pushStringParam",m.stringModeValue,m.type);
if(m.type==="sexpr"){this.sexpr(m)
}}else{this[m.type](m)
}}},setupFullMustacheParams:function(n,m,l){var o=n.params;
this.pushParams(o);
this.opcode("pushProgram",m);
this.opcode("pushProgram",l);
if(n.hash){this.hash(n.hash)
}else{this.opcode("emptyHash")
}return o
}};
function g(n,o,p){if(n==null||(typeof n!=="string"&&n.constructor!==p.AST.ProgramNode)){throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+n)
}o=o||{};
if(!("data" in o)){o.data=true
}var m=p.parse(n);
var l=new p.Compiler().compile(m,o);
return new p.JavaScriptCompiler().compile(l,o)
}j.precompile=g;
function i(l,m,n){if(l==null||(typeof l!=="string"&&l.constructor!==n.AST.ProgramNode)){throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+l)
}m=m||{};
if(!("data" in m)){m.data=true
}var p;
function o(){var s=n.parse(l);
var r=new n.Compiler().compile(s,m);
var q=new n.JavaScriptCompiler().compile(r,m,undefined,true);
return n.template(q)
}return function(r,q){if(!p){p=o()
}return p.call(this,r,q)
}
}j.compile=i
});
e("handlebars/compiler/javascript-compiler",["../base","../exception","exports"],function(p,s,r){var f=p.COMPILER_REVISION;
var k=p.REVISION_CHANGES;
var m=p.log;
var n=s["default"];
function h(i){this.value=i
}function u(){}u.prototype={nameLookup:function(w,l){var v,i;
if(w.indexOf("depth")===0){v=true
}if(/^[0-9]+$/.test(l)){i=w+"["+l+"]"
}else{if(u.isValidJavaScriptVariableName(l)){i=w+"."+l
}else{i=w+"['"+l+"']"
}}if(v){return"("+w+" && "+i+")"
}else{return i
}},compilerInfo:function(){var l=f,i=k[l];
return"this.compilerInfo = ["+l+",'"+i+"'];\n"
},appendToBuffer:function(i){if(this.environment.isSimple){return"return "+i+";"
}else{return{appendToBuffer:true,content:i,toString:function(){return"buffer += "+i+";"
}}
}},initializeBuffer:function(){return this.quotedString("")
},namespace:"Handlebars",compile:function(i,w,y,x){this.environment=i;
this.options=w||{};
m("debug",this.environment.disassemble()+"\n\n");
this.name=this.environment.name;
this.isChild=!!y;
this.context=y||{programs:[],environments:[],aliases:{}};
this.preamble();
this.stackSlot=0;
this.stackVars=[];
this.registers={list:[]};
this.hashes=[];
this.compileStack=[];
this.inlineStack=[];
this.compileChildren(i,w);
var A=i.opcodes,z;
this.i=0;
for(var v=A.length;
this.i<v;
this.i++){z=A[this.i];
if(z.opcode==="DECLARE"){this[z.name]=z.value
}else{this[z.opcode].apply(this,z.args)
}if(z.opcode!==this.stripNext){this.stripNext=false
}}this.pushSource("");
if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new n("Compile completed with content left on stack")
}return this.createFunctionContext(x)
},preamble:function(){var i=[];
if(!this.isChild){var l=this.namespace;
var v="helpers = this.merge(helpers, "+l+".helpers);";
if(this.environment.usePartial){v=v+" partials = this.merge(partials, "+l+".partials);"
}if(this.options.data){v=v+" data = data || {};"
}i.push(v)
}else{i.push("")
}if(!this.environment.isSimple){i.push(", buffer = "+this.initializeBuffer())
}else{i.push("")
}this.lastContext=0;
this.source=i
},createFunctionContext:function(z){var B=this.stackVars.concat(this.registers.list);
if(B.length>0){this.source[1]=this.source[1]+", "+B.join(", ")
}if(!this.isChild){for(var y in this.context.aliases){if(this.context.aliases.hasOwnProperty(y)){this.source[1]=this.source[1]+", "+y+"="+this.context.aliases[y]
}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"
}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"
}if(!this.environment.isSimple){this.pushSource("return buffer;")
}var C=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];
for(var x=0,v=this.environment.depths.list.length;
x<v;
x++){C.push("depth"+this.environment.depths.list[x])
}var A=this.mergeSource();
if(!this.isChild){A=this.compilerInfo()+A
}if(z){C.push(A);
return Function.apply(this,C)
}else{var w="function "+(this.name||"")+"("+C.join(",")+") {\n  "+A+"}";
m("debug",w+"\n\n");
return w
}},mergeSource:function(){var y="",w;
for(var x=0,l=this.source.length;
x<l;
x++){var v=this.source[x];
if(v.appendToBuffer){if(w){w=w+"\n    + "+v.content
}else{w=v.content
}}else{if(w){y+="buffer += "+w+";\n  ";
w=undefined
}y+=v+"\n  "
}}return y
},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var i=["depth0"];
this.setupParams(0,i);
this.replaceStack(function(l){i.splice(1,0,l);
return"blockHelperMissing.call("+i.join(", ")+")"
})
},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";
var l=["depth0"];
this.setupParams(0,l);
var i=this.topStack();
l.splice(1,0,i);
this.pushSource("if (!"+this.lastHelper+") { "+i+" = blockHelperMissing.call("+l.join(", ")+"); }")
},appendContent:function(i){if(this.pendingContent){i=this.pendingContent+i
}if(this.stripNext){i=i.replace(/^\s+/,"")
}this.pendingContent=i
},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")
}this.stripNext="strip"
},append:function(){this.flushInline();
var i=this.popStack();
this.pushSource("if("+i+" || "+i+" === 0) { "+this.appendToBuffer(i)+" }");
if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")
}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";
this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))
},getContext:function(i){if(this.lastContext!==i){this.lastContext=i
}},lookupOnContext:function(i){this.push(this.nameLookup("depth"+this.lastContext,i,"context"))
},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)
},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';
this.replaceStack(function(i){return"typeof "+i+" === functionType ? "+i+".apply(depth0) : "+i
})
},lookup:function(i){this.replaceStack(function(l){return l+" == null || "+l+" === false ? "+l+" : "+this.nameLookup(l,i,"context")
})
},lookupData:function(){this.pushStackLiteral("data")
},pushStringParam:function(i,l){this.pushStackLiteral("depth"+this.lastContext);
this.pushString(l);
if(l!=="sexpr"){if(typeof i==="string"){this.pushString(i)
}else{this.pushStackLiteral(i)
}}},emptyHash:function(){this.pushStackLiteral("{}");
if(this.options.stringParams){this.push("{}");
this.push("{}")
}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)
}this.hash={values:[],types:[],contexts:[]}
},popHash:function(){var i=this.hash;
this.hash=this.hashes.pop();
if(this.options.stringParams){this.push("{"+i.contexts.join(",")+"}");
this.push("{"+i.types.join(",")+"}")
}this.push("{\n    "+i.values.join(",\n    ")+"\n  }")
},pushString:function(i){this.pushStackLiteral(this.quotedString(i))
},push:function(i){this.inlineStack.push(i);
return i
},pushLiteral:function(i){this.pushStackLiteral(i)
},pushProgram:function(i){if(i!=null){this.pushStackLiteral(this.programExpression(i))
}else{this.pushStackLiteral(null)
}},invokeHelper:function(x,l,i){this.context.aliases.helperMissing="helpers.helperMissing";
this.useRegister("helper");
var v=this.lastHelper=this.setupHelper(x,l,true);
var y=this.nameLookup("depth"+this.lastContext,l,"context");
var w="helper = "+v.name+" || "+y;
if(v.paramsInit){w+=","+v.paramsInit
}this.push("("+w+",helper ? helper.call("+v.callParams+") : helperMissing.call("+v.helperMissingParams+"))");
if(!i){this.flushInline()
}},invokeKnownHelper:function(v,i){var l=this.setupHelper(v,i);
this.push(l.name+".call("+l.callParams+")")
},invokeAmbiguous:function(i,x){this.context.aliases.functionType='"function"';
this.useRegister("helper");
this.emptyHash();
var l=this.setupHelper(0,i,x);
var v=this.lastHelper=this.nameLookup("helpers",i,"helper");
var y=this.nameLookup("depth"+this.lastContext,i,"context");
var w=this.nextStack();
if(l.paramsInit){this.pushSource(l.paramsInit)
}this.pushSource("if (helper = "+v+") { "+w+" = helper.call("+l.callParams+"); }");
this.pushSource("else { helper = "+y+"; "+w+" = typeof helper === functionType ? helper.call("+l.callParams+") : helper; }")
},invokePartial:function(i){var l=[this.nameLookup("partials",i,"partial"),"'"+i+"'",this.popStack(),"helpers","partials"];
if(this.options.data){l.push("data")
}this.context.aliases.self="this";
this.push("self.invokePartial("+l.join(", ")+")")
},assignToHash:function(l){var w=this.popStack(),i,v;
if(this.options.stringParams){v=this.popStack();
i=this.popStack()
}var x=this.hash;
if(i){x.contexts.push("'"+l+"': "+i)
}if(v){x.types.push("'"+l+"': "+v)
}x.values.push("'"+l+"': ("+w+")")
},compiler:u,compileChildren:function(v,y){var A=v.children,C,B;
for(var z=0,w=A.length;
z<w;
z++){C=A[z];
B=new this.compiler();
var x=this.matchExistingProgram(C);
if(x==null){this.context.programs.push("");
x=this.context.programs.length;
C.index=x;
C.name="program"+x;
this.context.programs[x]=B.compile(C,y,this.context);
this.context.environments[x]=C
}else{C.index=x;
C.name="program"+x
}}},matchExistingProgram:function(x){for(var w=0,v=this.context.environments.length;
w<v;
w++){var l=this.context.environments[w];
if(l&&l.equals(x)){return w
}}},programExpression:function(w){this.context.aliases.self="this";
if(w==null){return"self.noop"
}var B=this.environment.children[w],A=B.depths.list,z;
var y=[B.index,B.name,"data"];
for(var x=0,v=A.length;
x<v;
x++){z=A[x];
if(z===1){y.push("depth0")
}else{y.push("depth"+(z-1))
}}return(A.length===0?"self.program(":"self.programWithDepth(")+y.join(", ")+")"
},register:function(i,l){this.useRegister(i);
this.pushSource(i+" = "+l+";")
},useRegister:function(i){if(!this.registers[i]){this.registers[i]=true;
this.registers.list.push(i)
}},pushStackLiteral:function(i){return this.push(new h(i))
},pushSource:function(i){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
this.pendingContent=undefined
}if(i){this.source.push(i)
}},pushStack:function(l){this.flushInline();
var i=this.incrStack();
if(l){this.pushSource(i+" = "+l+";")
}this.compileStack.push(i);
return i
},replaceStack:function(A){var v="",w=this.isInline(),z,l,x;
if(w){var y=this.popStack(true);
if(y instanceof h){z=y.value;
x=true
}else{l=!this.stackSlot;
var i=!l?this.topStackName():this.incrStack();
v="("+this.push(i)+" = "+y+"),";
z=this.topStack()
}}else{z=this.topStack()
}var B=A.call(this,z);
if(w){if(!x){this.popStack()
}if(l){this.stackSlot--
}this.push("("+v+B+")")
}else{if(!/^stack/.test(z)){z=this.nextStack()
}this.pushSource(z+" = ("+v+B+");")
}return z
},nextStack:function(){return this.pushStack()
},incrStack:function(){this.stackSlot++;
if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)
}return this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var w=this.inlineStack;
if(w.length){this.inlineStack=[];
for(var v=0,l=w.length;
v<l;
v++){var x=w[v];
if(x instanceof h){this.compileStack.push(x)
}else{this.pushStack(x)
}}}},isInline:function(){return this.inlineStack.length
},popStack:function(i){var v=this.isInline(),l=(v?this.inlineStack:this.compileStack).pop();
if(!i&&(l instanceof h)){return l.value
}else{if(!v){if(!this.stackSlot){throw new n("Invalid stack pop")
}this.stackSlot--
}return l
}},topStack:function(l){var i=(this.isInline()?this.inlineStack:this.compileStack),v=i[i.length-1];
if(!l&&(v instanceof h)){return v.value
}else{return v
}},quotedString:function(i){return'"'+i.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},setupHelper:function(x,v,l){var w=[],y=this.setupParams(x,w,l);
var i=this.nameLookup("helpers",v,"helper");
return{params:w,paramsInit:y,name:i,callParams:["depth0"].concat(w).join(", "),helperMissingParams:l&&["depth0",this.quotedString(v)].concat(w).join(", ")}
},setupOptions:function(w,v){var C=[],z=[],B=[],l,x,A;
C.push("hash:"+this.popStack());
if(this.options.stringParams){C.push("hashTypes:"+this.popStack());
C.push("hashContexts:"+this.popStack())
}x=this.popStack();
A=this.popStack();
if(A||x){if(!A){this.context.aliases.self="this";
A="self.noop"
}if(!x){this.context.aliases.self="this";
x="self.noop"
}C.push("inverse:"+x);
C.push("fn:"+A)
}for(var y=0;
y<w;
y++){l=this.popStack();
v.push(l);
if(this.options.stringParams){B.push(this.popStack());
z.push(this.popStack())
}}if(this.options.stringParams){C.push("contexts:["+z.join(",")+"]");
C.push("types:["+B.join(",")+"]")
}if(this.options.data){C.push("data:data")
}return C
},setupParams:function(w,v,l){var i="{"+this.setupOptions(w,v).join(",")+"}";
if(l){this.useRegister("options");
v.push("options");
return"options="+i
}else{v.push(i);
return""
}}};
var g=("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
var q=u.RESERVED_WORDS={};
for(var o=0,j=g.length;
o<j;
o++){q[g[o]]=true
}u.isValidJavaScriptVariableName=function(i){if(!u.RESERVED_WORDS[i]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(i)){return true
}return false
};
r["default"]=u
});
e("handlebars",["./handlebars.runtime","./handlebars/compiler/ast","./handlebars/compiler/base","./handlebars/compiler/compiler","./handlebars/compiler/javascript-compiler","exports"],function(o,u,g,k,n,q){var f=o["default"];
var m=u["default"];
var j=g.parser;
var i=g.parse;
var p=k.Compiler;
var s=k.compile;
var h=k.precompile;
var v=n["default"];
var r=f.create;
var l=function(){var w=r();
w.compile=function(x,y){return s(x,y,w)
};
w.precompile=function(x,y){return h(x,y,w)
};
w.AST=m;
w.Compiler=p;
w.JavaScriptCompiler=v;
w.Parser=j;
w.parse=i;
return w
};
f=l();
f.create=l;
q["default"]=f
});
e("disruptionMessage",["jquery","lodash","handlebars","jquery.hammer","clickTouch"],function(k,C,m,B,v){var j;
var l;
var u=k("body");
var i;
var z={travelAlertsExpand:"travel-alert-expand",travelAlertsExpanding:"travel-alerts-expanding",travelAlertCollapsing:"travel-alerts-collapsing",iconClass:"icon",expandIconClass:"icon-down",collapseIconClass:"icon-up"};
var p;
var n={tapMaxTime:800};
var o=function(E){var D=k(E.target);
if(D.closest(".summary-panel").length===0&&D.closest(".message-items").length===0){j.find(".summary-panel").trigger(v)
}};
var x=function(){l=j.find(".message-items");
var D=0;
C.each(l.children("li"),function(E){D+=k(E).outerHeight()
});
return D
};
var h=function(D){clearTimeout(p);
l=j.find(".message-items");
u.removeClass(z.travelAlertCollapsing).addClass(z.travelAlertsExpanding);
l.css("max-height",x()).attr("aria-expanded","true");
u.addClass(z.travelAlertsExpand).removeClass(z.travelAlertsExpanding);
j.find("."+z.expandIconClass).removeClass(z.expandIconClass).addClass(z.collapseIconClass);
j.find(".is-visually-hidden").empty().append(j.data("collapseHint"));
l.find("a:first").focus();
k("header, main, footer").on("click.collapsePanelOnBodyClick",o)
};
var A=function(){u.addClass(z.travelAlertCollapsing);
p=setTimeout(function(){u.removeClass(z.travelAlertsExpand).removeClass(z.travelAlertCollapsing)
},400);
l=j.find(".message-items");
l.css("max-height","0").attr("aria-expanded","false");
j.find("."+z.collapseIconClass).removeClass(z.collapseIconClass).addClass(z.expandIconClass);
j.find(".is-visually-hidden").empty().append(j.data("expandHint"));
k("header, main, footer").off("click.collapsePanelOnBodyClick")
};
var r=function(G,D,E){var F;
if(G.travelAlerts&&!G.errors){F=m["default"].compile(i);
j.append(F({response:G,hasMultipleAlerts:(G.travelAlerts.length>1)}))
}};
var f=function(D){if(D.which===32||D.which===13){y(D)
}};
var y=function(D){D.preventDefault();
if(u.hasClass(z.travelAlertsExpand)&&(!u.hasClass(z.travelAlertCollapsing))){A()
}else{h()
}};
var s=function(E){var D=k.ajax({url:E,type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
D.done(r)
};
var w=function(){if((u).hasClass(z.travelAlertsExpand)){l.css("max-height",x())
}};
var g=function(){j.hammer(n).on(v,".summary-panel",y).on("keypress",".summary-panel",f);
k(window).smartresize(w)
};
var q=function(D){j=D;
i=k("#travel-alerts-template").html();
g()
};
return{init:function(D){if(!C.isEmpty(D)){q(D);
s(CX.disruption.endpoint)
}}}
});
e("geoLocationServices",["jquery","lodash","geolocation"],function(k,x,q){var j={};
var w="";
var n=0;
var p={code:"",distance:""};
var u={latitude:0,longitude:0};
var s=false;
var h=new k.Deferred();
var f;
var o;
var m=function(y){return y*Math.PI/180
};
var v=function(C,D){var F=6371;
var I=parseFloat(u.latitude);
var A=parseFloat(u.longitude);
var E=parseFloat(C);
var B=parseFloat(D);
var G=m(E-I);
var y=m(B-A);
var J=Math.sin(G/2)*Math.sin(G/2)+Math.cos(m(I))*Math.cos(m(E))*Math.sin(y/2)*Math.sin(y/2);
var H=2*Math.atan2(Math.sqrt(J),Math.sqrt(1-J));
var z=F*H;
return z
};
var i=function(){var z;
var y=j.airports;
x.forEach(y,function(A){z=v(A.latitude,A.longitude);
if(p.code===""||z<p.distance){p.code=A.airportCode;
p.distance=z
}});
return p
};
var r=function(y,z){if(u.latitude===0&&u.longitude===0){return""
}else{var F;
var C=0;
var A=j.airports;
var E=k.map(y,function(H,G){return H.portCode
});
var D=k.map(A,function(H,G){if(k.inArray(H[z.codeType],E)>-1){return H
}});
var B=D.length;
for(;
C<B;
C++){F=v(D[C].latitude,D[C].longitude);
if(x.isEmpty(w)||F<n){w=D[C][z.codeType];
n=F
}}return w
}};
var g=function(){var z;
var y=f.getDeferred();
k.when(y).done(function(A){z=f.getUserGeoCoordinate();
if(A.byAkamai){s=true;
u.latitude=z.latitude;
u.longitude=z.longitude
}else{if(A.byHTML5){s=false;
u.latitude=z.latitude;
u.longitude=z.longitude
}}})
};
var l=function(){var z=o.getDeferred();
var y;
k.when(z).done(function(A){j=o.getAirportCoordinatesList()
})
};
return{init:function(y,z){f=y;
o=z;
l();
g()
},isUsedAkamaiLocation:function(){return s
},getAirportCoorListDefobj:function(){return h
},getGeolocationDeferredObject:function(){return f.getDeferred()
},calNearestAirportCityCode:r,getNearestAirport:i}
});
e("offersAndDestinations",["require","jquery","lodash","moment","handlebars","breakpoints","geoLocationServices"],function(q){var o=q("jquery");
var L=q("lodash");
var K=q("moment");
var p=q("handlebars");
var u=q("breakpoints");
var s=q("geoLocationServices");
var f;
var z;
var y;
var l;
var v;
var C;
var I={header:".header",destinationListTrigger:".destinations-list-trigger",destination:".destination",destinationsListWrapper:".destinations-list-wrapper",description:".description"};
var i=true;
var D=function(N,M){var P=document.createElement(N);
var O;
for(O in M){P[O]=M[O]
}return P
};
var H=function(M){var N=f.find(I.destinationListTrigger).width();
f.find(".destination-list").width(N+10)
};
var n=function(P){var M=o(P.target);
var Q=M.find("option:selected").val();
var N=M.find("option:selected").text();
o(P.target).prev(I.destinationListTrigger).find(I.destination).html(N);
var O=[C.endPoints,Q,C.noOfOffers.primary,C.noOfOffers.secondary,C.extension];
E(O.join("."))
};
var j=function(){f.on("change",".destination-list",n).on("change.onChangeDestinationListWidth",".destination-list",H)
};
var F=function(P,S){var Q=f.find(I.description);
var N=f.find(I.destinationsListWrapper);
var O="destinations-list-wrapper-multiple-origins";
var R="description-multiple-origins";
if(!L.isEmpty(P)){var M=document.createElement("select");
M.setAttribute("class","destination-list");
L.each(P,function(U,T){o(M).append(D("option",{value:U.portCode,innerHTML:U.cityName}))
});
if(!L.isUndefined(S)){o(M).val(S.portCode);
N.find(I.destination).html(S.cityName)
}else{N.find(I.destination).html(P[0].cityName)
}N.addClass(O);
Q.addClass(R);
N.find(".destination-list").remove();
N.find(I.destinationListTrigger).after(M);
f.find(".destination-list").trigger("change.onChangeDestinationListWidth")
}};
var h=function(M){var N={isFlightOffer:true,isFlightHotelOffer:false,isHotelOffer:false,secondaryPromotionOfferType:"F",isOpenNewWindow:false};
if(L.isEmpty(M.offerDetailsPath)){if(M.promotionManager.productType==="H"){N.isHotelOffer=true;
N.isFlightOffer=false;
N.secondaryPromotionOfferType=M.promotionManager.productType
}else{if(M.promotionManager.productType==="HF"){N.isFlightHotelOffer=true;
N.isFlightOffer=false;
N.secondaryPromotionOfferType=M.promotionManager.productType
}}}return N
};
var G=function(M){var N={offerType:"F",secondOfferType:"F",showFlightOffer:true,showFlightHotelOffer:false,showHotelOffer:false,isShowViewGuideLink:true,isOpenNewWindow:false};
if(L.isEmpty(M.offerDetailsPath)){N.showFlightOffer=false
}if(!L.isNull(M.promotionManager)){N.isShowViewGuideLink=false;
N.isOpenNewWindow=M.promotionManager.openLinkOfferDetails;
if(M.promotionManager.productType==="H"){N.primaryPromotionOfferType=M.promotionManager.productType;
N.showHotelOffer=true
}else{if(M.promotionManager.productType==="HF"){N.primaryPromotionOfferType=M.promotionManager.productType;
N.showFlightHotelOffer=true
}}}return N
};
var x=function(M){if(M){return K(M).format(C.date.formats.summaryShort)
}};
var k=function(P,O){var M={currency:null,formattedFare:null};
if(P.showHotelOffer||P.showFlightHotelOffer){if(!L.isNull(O.promotionManager)){var N=O.promotionManager;
M.currency=N.currency;
M.formattedFare=N.formatPrice
}}return M
};
var g=function(P,O){var M={};
if(P.isFlightOffer){M.currency=O.currency;
M.formattedFare=O.formattedFare
}else{var N=O.promotionManager;
M.currency=N.currency;
M.formattedFare=N.formatPrice
}return M
};
var w=function(P,O){var M={offerPath:"",secondaryOfferPath:O.offerDetailsPath};
if(!L.isNull(O.promotionManager)){var N=O.promotionManager;
M.offerPath=N.promotionDeepLink;
if(!P.isFlightOffer){M.secondaryOfferPath=N.promotionDeepLink
}}return M
};
var B=function(Q,O){var M={description:"",isBVG:false,specialCallOutMessage:O.specialCallOutMessage,specialCallOutMessageHP:O.specialCallOutMessageHP};
var P="";
if(!L.isNull(O.promotionManager)){var N=O.promotionManager;
if(N.productType==="H"){P=(C.hotelDescriptionPlaceholder)
}else{if(N.productType==="HF"){P=(C.flightHotelDescriptionPlaceholder);
M.isBVG=N.isBVG;
if(N.isBVG&&!Q.isFlightOffer){M.specialCallOutMessage=""
}}}M.description=(P+"").replace("#noOfNights#",N.duration).replace("#travelStartDate#",x(N.travelStartDate)).replace("#cabinClass#",C.cabinClassMapping[N.cabinClass]).replace("#travelEndDate#",x(N.travelEndDate))
}return M
};
var J=function(O){var S=false;
var N=O.destination;
var T="";
var U=G(O);
var Q=k(U,O);
var V=h(O);
var M=g(V,O);
var R=B(V,O);
var P=w(V,O);
if(N&&N.cityName===N.countryName){S=true
}if(N&&!L.isEmpty(N.destinationCityName)){T=(C.destinationGuideEndPoints+"").replace("#cityName#",O.destination.destinationCityName)
}return{imagePath:O.imagePath,imageAltText:O.imageAltText,origin:O.origin,destination:O.destination,primaryPromotionOfferType:C.offerTypeMapping[U.primaryPromotionOfferType],secondOfferOfPrimaryPromotion:C.offerTypeMapping[U.secondOfferType],secondaryOfferType:C.offerTypeMapping[V.secondaryPromotionOfferType],isBVG:R.isBVG,isHotelOffer:V.isHotelOffer,isFlightOffer:V.isFlightOffer,isFlightHotelOffer:V.isFlightHotelOffer,hotelDescriptionPlaceholder:R.description,flightHotelDescriptionPlaceholder:R.description,isShowViewGuideLink:U.isShowViewGuideLink,farePlaceholder:(C.farePlaceholder+"").replace("#currency#","<b>"+Q.currency).replace("#fare#",Q.formattedFare+"</b>"),secondaryFarePlacehoder:(C.farePlaceholder+"").replace("#currency#","<b>"+M.currency).replace("#fare#",M.formattedFare+"</b>"),farePlaceholderForFlightPromotion:(C.farePlaceholder+"").replace("#currency#","<b>"+O.currency).replace("#fare#",O.formattedFare+"</b>"),cabinClass:C.cabinClassMapping[O.cabinClass],currency:O.currency,fare:O.fare,primaryDestination:O.primaryDestination,specialCallOutMessage:R.specialCallOutMessage,specialCallOutMessageHP:R.specialCallOutMessageHP,linkUrl:T,linkText:(C.destinationGuidePlaceholder+"").replace("#cityName#",O.destination.cityName),newWindow:C.destinationGuideInNewWindow,flightHotelOfferPath:P.offerPath,hotelOfferPath:P.offerPath,offerDetailsPath:O.offerDetailsPath,secondaryOfferPath:P.secondaryOfferPath,showFlightOffer:U.showFlightOffer,showFlightHotelOffer:U.showFlightHotelOffer,showHotelOffer:U.showHotelOffer,showCountryOnly:S,spCode:O.spCode,offerDetailsNewWindow:O.offerDetailsNewWindow,openLinkOfferDetails:U.isOpenNewWindow}
};
var m=function(N,P){var M="";
var O=p["default"].compile(z);
var Q=p["default"].compile(y);
f.find(".primary-promotion").remove();
f.find(".secondary-promotions").remove();
f.find(".progress-bar").addClass("progress-bar-disabled");
f.find(".progress-bar-fallback").addClass("progress-bar-fallback-disabled");
if(!L.isEmpty(N)){M+=O({primaryPromotion:J(N[0])})
}if(!L.isEmpty(P)){M+=Q({secondaryPromotions:L.map(P,J)})
}if(!L.isEmpty(M)){f.find(I.header).after(M)
}if(o("html").hasClass("less-than-ie9")){f.find(".secondary-promotions .item:nth-child(3n+1)").addClass("clearfix")
}o(window).trigger("refresh.skroll")
};
var r=function(Q,M,N){if(L.isNull(Q.errors)||L.isEmpty(Q.errors)){if(i&&Q.originList.length>1){var P=l.getDeferred();
var O=v.getDeferred();
if(!s.isUsedAkamaiLocation()){i=false;
F(Q.originList);
m(Q.primaryPromotions,Q.secondaryPromotions)
}o.when(P,O).done(function(U){if(s.isUsedAkamaiLocation()||!i&&(U.byAkamai===true||U.byHTML5===true)){var R=s.calNearestAirportCityCode(Q.originList,{codeType:"cityCode"});
i=false;
if(!L.isEmpty(R)&&Q.originList[0].portCode!==R){var T=L.filter(Q.originList,{portCode:R})[0];
var S=[C.endPoints,T.portCode,C.noOfOffers.primary,C.noOfOffers.secondary,C.extension];
F(Q.originList,T);
E(S.join("."))
}else{F(Q.originList);
m(Q.primaryPromotions,Q.secondaryPromotions)
}}})
}else{m(Q.primaryPromotions,Q.secondaryPromotions)
}}};
var E=function(M){f.find(".primary-promotion").remove();
f.find(".secondary-promotions").remove();
f.find(".progress-bar").removeClass("progress-bar-disabled");
f.find(".progress-bar-fallback").removeClass("progress-bar-fallback-disabled");
var N=o.ajax(M,{type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
N.done(r)
};
var A=function(Q,M,P,O){f=Q;
z=o("#primary-promotion-template").html();
y=o("#secondary-promotions-template").html();
C=O;
l=M;
v=P;
j();
s.init(M,P);
var N=[C.endPoints,C.defaultPort,C.noOfOffers.primary,C.noOfOffers.secondary,C.extension];
E(N.join("."))
};
return{init:function(N,M,P,O){if(N.length>0){A(N,M,P,O)
}}}
});
e("offerHero",["require","jquery","lodash","breakpoints","jquerydotdotdot"],function(i){var k=i("jquery");
var h=i("lodash");
var j=i("breakpoints");
var g=i("jquerydotdotdot");
var f=function(o){var n;
var m;
var r=function(){n.find(".headline").dotdotdot({wrap:"letter"});
n.find(".description").dotdotdot({wrap:"letter"})
};
var q=function(){n.find(".headline").trigger("destroy");
n.find(".description").trigger("destroy")
};
var p=function(){k(window).on("resize",h.debounce(function(){if(j.isLargeUp()){r()
}else{q()
}},300))
};
var l=function(s){m=s;
n=m.find(".messages-wrapper .content");
r();
p()
};
if(o.length>0){l(o)
}};
return f
});
e("offersList",["require","jquery","lodash","moment","modernizr","breakpoints","jquerydotdotdot","jquery.hammer","clickTouch","offerHero"],function(h){var j=h("jquery");
var n=h("lodash");
var p=h("moment");
var i=h("modernizr");
var l=h("breakpoints");
var k=h("jquerydotdotdot");
var o=h("jquery.hammer");
var g=h("clickTouch");
var m=h("offerHero");
var f=function(A){var I;
var u;
var w;
var U;
var q;
var Q;
var T;
var J;
var O;
var R;
var S;
var C;
var D=12;
var z=function(W,V){return W.isSame(V)||W.isAfter(V)
};
var E=function(W,aa){var Z=false;
var ad="YYYY-MM-DD";
var X=0;
var ae=aa.length;
var V=p(W.startDate,ad);
var Y=!(n.isEmpty(W.endDate))?p(W.endDate,ad):"";
for(;
X<ae;
X++){if(n.isEmpty(aa[X].startDate)&&n.isEmpty(aa[X].endDate)){Z=true;
break
}else{var ac=p(aa[X].startDate,ad);
var ab=p(aa[X].endDate,ad);
if(n.isEmpty(Y)){if(V.isSame(ac)||V.isBetween(ac,ab)||V.isSame(ab)){Z=true;
break
}}else{if(z(ab,V)&&z(Y,ac)){Z=true;
break
}}}}return Z
};
var y=function(W){var V=w.find(".equal-height-watch").not(".hidden");
if(!i.flexbox){if(n.isEmpty(W)||n.isUndefined(W)){V.matchHeight()
}else{V.matchHeight._update()
}}};
var x=function(W){if(!n.isUndefined(C)&&!n.isEmpty(C)){var V=W.length===1?C.single:C.plural;
U.html(V.replace("#currentNo#",W.filter(":not(.hidden)").length).replace("#totalNo#",W.length))
}};
var H=function(Y){var X=w.find(".card");
var Z=X.filter(".hidden");
var V=0;
var W=0;
n.forEach(Z,function(aa){var ab=j(aa);
V=V+ab.data("card-type")
});
if(V<=D){Z.removeClass("hidden");
T.addClass("hidden")
}else{n.forEach(Z,function(aa){var ab=j(aa);
if(W<D){W+=ab.data("card-type");
ab.removeClass("hidden")
}});
T.removeClass("hidden")
}x(X);
y(Y)
};
var s=function(V){if(V.which===32||V.which===13){H(V)
}};
var M=function(X,Y){var aa=Q.clone();
var W=j();
var ab={startDate:u.find(".calendar-depart").val(),endDate:u.find(".calendar-return").val()};
aa=aa.filter(function(ad,ae){var ac=j(ae).data("offer-origins");
return n.contains(ac,X.toUpperCase())
});
if(!n.isEmpty(Y)){n.each(Y,function(ad){var ac=aa;
if(!n.isEmpty(ad.type)&&!n.isUndefined(ad.type)){ac=ac.filter('[data-offer-type="'+ad.type+'"]')
}if(!n.isEmpty(ad.cabinClass)&&!n.isEmpty(ad.cabinClass)){ac=ac.filter('[data-offer-cabin-class="'+ad.cabinClass+'"]')
}if(!n.isEmpty(ab.startDate)){ac=ac.filter(function(){return E(ab,j(this).data("offer-period"))
})
}if(!n.isEmpty(ac)){W=W.add(ac)
}})
}else{var V=aa;
if(!n.isEmpty(ab.startDate)){V=V.filter(function(){return E(ab,j(this).data("offer-period"))
})
}if(!n.isEmpty(V)){W=W.add(V)
}}var Z=j(B(W));
w.empty().append(Z.addClass("hidden"));
if(W.length!==0){J.addClass("hidden")
}else{J.removeClass("hidden")
}H()
};
var P=function(W){var V=Q.clone();
w.empty().append(V.addClass("hidden"));
if(V.length!==0){J.addClass("hidden")
}else{J.removeClass("hidden")
}H()
};
var N=function(W){var X=u.find("select option:selected");
var V=O.val();
if(!n.isEmpty(V)&&!n.isUndefined(V)){M(V,X.data("offer"))
}};
var B=function(aa){var af=aa;
var ag=[];
var ac=af.length;
var ad=0;
var Y=v(aa);
var ab=Y.noOfCards;
var X=Y.lastCardIndex;
if(ab%2!==0){af.push(af[X]);
af.splice(X,1)
}for(var Z=0;
Z<ac;
Z++){var ae=j(af[Z]);
var W=ae.data("card-type");
if(W===2&&ad%4===3){var V=G(Z,af);
ag.push(af[V]);
ag.push(af[Z]);
ad=ad+3;
af.splice(V,1);
ac=af.length
}else{ag.push(af[Z]);
ad=ad+W
}}return ag
};
var v=function(W){var V=0;
var Z=0;
var X=W;
var Y;
n.forEach(X,function(ab,aa){Y=j(ab);
if(Y.data("card-type")===1){V++;
Z=aa
}});
return{noOfCards:V,lastCardIndex:Z}
};
var G=function(W,X){var Z=X;
var aa;
for(var V=W;
V<Z.length;
V++){aa=j(Z[V]);
var Y=aa.data("card-type");
if(Y===1){return V
}}};
var F=function(X){var V=j(X.target);
var W=V.find("option:selected").text();
V.siblings(".custom-select-trigger").find(".custom-select-text").text(W);
N()
};
var L=function(V){if(V.which===32||V.which===13){N()
}};
var r=function(){u.on("change","select",F);
u.on("select.calendar",".dates-picker",N);
u.hammer().on(g,".control-clear",N);
u.on("keypress",".control-clear",L);
T.on("click",H);
T.on("keypress",s);
O.on("change",N)
};
var K=function(V){I=V;
u=I.find(".panel");
U=I.find(".counter");
w=I.find(".offers-display");
q=I.find(".offers-fallback");
Q=q.find(".card").clone();
T=I.siblings(".explore-more-wrapper");
J=I.find(".no-offer-message");
O=I.find(".target-landing-city-code");
C=U.data("offer-counter-placeholder");
Q.find(".equal-height-watch").removeAttr("style");
r();
if(I.hasClass("city-offer-list-dynamic")){P()
}else{N()
}j(".primary-offer").each(function(){m(j(this))
})
};
if(A.length>0){K(A)
}};
return f
});
e("offersListStatic",["require","jquery"],function(f){var h=f("jquery");
var g=function(l){var j;
var k={smallOnlyButton:"see-more-wrapper"};
var o=function(p){if(p.which===32||p.which===13){m(p)
}};
var m=function(p){var r="";
if(p!==undefined&&p.target!==undefined){r=h(p.target).closest(".see-more-wrapper")
}var s=r.prev();
var u=s.find(".static-card");
var q=u.slice(0,5);
q.removeClass("static-card");
u=s.find(".static-card");
if(u.length>0){r.removeClass("hidden")
}else{r.addClass("hidden")
}};
var n=function(){j.on("click","."+k.smallOnlyButton,m);
j.on("keypress","."+k.smallOnlyButton,o)
};
var i=function(p){j=p;
n()
};
if(l.length>0){i(l)
}};
return g
});
e("destinationsListing",["require","jquery","lodash","breakpoints","jquery.hammer","handlebars","clickTouch"],function(h){var E=h("jquery");
var V=h("lodash");
var i=h("breakpoints");
var C=h("jquery.hammer");
var N=h("handlebars");
var Q=h("clickTouch");
var r;
var J;
var I;
var U;
var L;
var M;
var P;
var x;
var B;
var K={tapMaxTime:800,preventDefault:true};
var m={isDisplayNone:"is-display-none",loadingIconWrapperClass:"destinations-listing-loading-wrapper",content:"section-content",results:"results",exploreMoreWrapper:"explore-more-wrapper",categoriesActiveClass:"categories-active",orderListTrigger:".order-list-trigger",orderStyle:".order-style"};
var S;
var k=0;
var v=false;
var u=true;
var y=function(){E("."+m.loadingIconWrapperClass).removeClass(m.isDisplayNone)
};
var g=function(){E("."+m.loadingIconWrapperClass).addClass(m.isDisplayNone)
};
var o=function(W){if(u){var X=S.noOfDestinationsPlaceholder.replace("#noOfResults#","<b>"+W+"</b>");
r.find(".no-of-results").empty().append(X)
}};
var z=function(){v=false;
E("."+m.exploreMoreWrapper).removeClass(m.isDisplayNone)
};
var j=function(){v=true;
E("."+m.exploreMoreWrapper).addClass(m.isDisplayNone)
};
var n=function(W){j()
};
var s=function(W){var X=W%S.noOfTwoImageItemCalculateRemainder;
if(V.indexOf(S.noOfTwoImageItemRemainder,X)>-1){return true
}return false
};
var O=function(X){var Y="";
var W=N["default"].compile(L);
var Z=N["default"].compile(M);
V.forEach(X,function(ab,aa){k++;
if(s(k)){Y+=Z({destinationItem:ab})
}else{Y+=W({destinationItem:ab})
}});
if(!V.isEmpty(Y)){P.find("."+m.loadingIconWrapperClass).before(Y)
}};
var q=function(Y,W,X){if(!V.isEmpty(Y)&&!V.isEmpty(Y.destinationList)){o(Y.totalResults);
O(Y.destinationList);
if(!Y.hasMore){j()
}else{z()
}}else{n()
}g()
};
var w=function(W){var X=E.ajax({url:W,type:"GET",contentType:"application/json; charset=utf-8",dataType:"json",data:""});
X.done(q)
};
var F=function(W){if(W.which===32||W.which===13){R(W)
}};
var R=function(Y){if(!v){var Z=[];
var W=[];
var X;
X=B.find("option:selected").val();
V.each(U,function(aa){if(E(aa).is(":checked")){Z.push(E(aa).data("filterId"))
}});
if(V.isEmpty(Z)){W=[S.endPoints.destinationsListing,k,S.noOfDestinationRetrieve,X,S.extension]
}else{W=[S.endPoints.destinationsListing,k,S.noOfDestinationRetrieve,X,Z.join(","),S.extension]
}w(W.join("."));
y()
}};
var l=function(Y){var Z=[];
var W=[];
var X;
k=0;
X=B.find("option:selected").val();
V.each(U,function(aa){if(E(aa).is(":checked")){Z.push(E(aa).data("filterId"))
}});
if(V.isEmpty(Z)){W=[S.endPoints.destinationsListing,k,S.noOfDestinationRetrieve,X,S.extension]
}else{W=[S.endPoints.destinationsListing,k,S.noOfDestinationRetrieve,X,Z.join(","),S.extension]
}P.find(".item").remove();
y();
w(W.join("."))
};
var f=function(W){var X=x.find(m.orderListTrigger).width();
if(i.isSmall()){B.css("width","100%")
}else{B.width(X+10)
}};
var A=function(Y){var W=E(Y.target);
var X=W.find("option:selected").val();
var Z=W.find("option:selected").text();
E(Y.target).prev(m.orderListTrigger).find(m.orderStyle).html(Z);
l()
};
var G=function(W){I.addClass(m.categoriesActiveClass);
J.find(".filters-toggle .icon").removeClass("icon-expand").addClass("icon-collapse")
};
var D=function(W){I.removeClass(m.categoriesActiveClass);
J.find(".filters-toggle .icon").addClass("icon-expand").removeClass("icon-collapse")
};
var H=function(W){W.preventDefault();
if(I.hasClass(m.categoriesActiveClass)){D(W)
}else{G(W)
}};
var p=function(X,W){r=X;
S=W;
J=r.find(".filters");
I=J.find(".categories");
U=J.find("input");
P=X.find("."+m.results);
L=E("#destination-one-image-item-template").html();
M=E("#destination-two-image-item-template").html();
x=r.find(".destination-order");
B=x.find(".order-select-list");
B.find("option:first").prop("selected",true)
};
var T=function(){J.on("click",".filters-toggle",H);
U.on("change",l);
E(".explore-more").hammer(K).on(Q,R);
E(".explore-more").on("keypress",F);
x.on("change",".order-select-list",A).on("change.onChangeDestinationListWidth",".order-select-list",f);
E(window).on("resize.onResizeWindow",V.debounce(f,10))
};
return{init:function(W,X){if(!V.isEmpty(W)){p(W,X);
T();
R("load")
}}}
});
e("destinationsGuideMenu",["jquery","lodash"],function(i,h){var k;
var g=function(l){var m=l.target.value;
window.location.href=m
};
var f=function(l){k=l
};
var j=function(){k.on("change",".region-list",g);
if(i("html").hasClass("less-than-ie9")){k.find(".cities-group:nth-child(6n+1)").addClass("clearfix")
}};
return{init:function(l){if(!h.isEmpty(l)){f(l);
j()
}}}
});
e("detectionOs",["jquery"],function(g){var h="";
var f=function(){var i=navigator.userAgent;
this.ios=i.match(/(iPad|iPhone|iPod)/g)?true:false;
this.android=i.indexOf("Android")>-1;
if(this.ios){h="ios"
}else{if(this.android){h="android"
}else{h="windows"
}}g(".app-promotion").addClass(h)
};
return{init:function(i){if(i.length!==0){f()
}}}
});
!function(f){f.flexslider=function(H,G){var F=f(H);
F.vars=f.extend({},f.flexslider.defaults,G);
var z,E=F.vars.namespace,D=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,C=("ontouchstart" in window||D||window.DocumentTouch&&document instanceof DocumentTouch)&&F.vars.touch,B="click touchend MSPointerUp",A="",y="vertical"===F.vars.direction,x=F.vars.reverse,w=F.vars.itemWidth>0,v="fade"===F.vars.animation,u=""!==F.vars.asNavFor,s={},r=!0;
f.data(H,"flexslider",F),s={init:function(){F.animating=!1,F.currentSlide=parseInt(F.vars.startAt?F.vars.startAt:0,10),isNaN(F.currentSlide)&&(F.currentSlide=0),F.animatingTo=F.currentSlide,F.atEnd=0===F.currentSlide||F.currentSlide===F.last,F.containerSelector=F.vars.selector.substr(0,F.vars.selector.search(" ")),F.slides=f(F.vars.selector,F),F.container=f(F.containerSelector,F),F.count=F.slides.length,F.syncExists=f(F.vars.sync).length>0,"slide"===F.vars.animation&&(F.vars.animation="swing"),F.prop=y?"top":"marginLeft",F.args={},F.manualPause=!1,F.stopped=!1,F.started=!1,F.startTimeout=null,F.transitions=!F.vars.video&&!v&&F.vars.useCSS&&function(){var h=document.createElement("div"),g=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var i in g){if(void 0!==h.style[g[i]]){return F.pfx=g[i].replace("Perspective","").toLowerCase(),F.prop="-"+F.pfx+"-transform",!0
}}return !1
}(),F.ensureAnimationEnd="",""!==F.vars.controlsContainer&&(F.controlsContainer=f(F.vars.controlsContainer).length>0&&f(F.vars.controlsContainer)),""!==F.vars.manualControls&&(F.manualControls=f(F.vars.manualControls).length>0&&f(F.vars.manualControls)),F.vars.randomize&&(F.slides.sort(function(){return Math.round(Math.random())-0.5
}),F.container.empty().append(F.slides)),F.doMath(),F.setup("init"),F.vars.controlNav&&s.controlNav.setup(),F.vars.directionNav&&s.directionNav.setup(),F.vars.keyboard&&(1===f(F.containerSelector).length||F.vars.multipleKeyboard)&&f(document).bind("keyup",function(h){var g=h.keyCode;
if(!F.animating&&(39===g||37===g)){var i=39===g?F.getTarget("next"):37===g?F.getTarget("prev"):!1;
F.flexAnimate(i,F.vars.pauseOnAction)
}}),F.vars.mousewheel&&F.bind("mousewheel",function(h,g){h.preventDefault();
var i=0>g?F.getTarget("next"):F.getTarget("prev");
F.flexAnimate(i,F.vars.pauseOnAction)
}),F.vars.pausePlay&&s.pausePlay.setup(),F.vars.slideshow&&F.vars.pauseInvisible&&s.pauseInvisible.init(),F.vars.slideshow&&(F.vars.pauseOnHover&&F.hover(function(){F.manualPlay||F.manualPause||F.pause()
},function(){F.manualPause||F.manualPlay||F.stopped||F.play()
}),F.vars.pauseInvisible&&s.pauseInvisible.isHidden()||(F.vars.initDelay>0?F.startTimeout=setTimeout(F.play,F.vars.initDelay):F.play())),u&&s.asNav.setup(),C&&F.vars.touch&&s.touch(),(!v||v&&F.vars.smoothHeight)&&f(window).bind("resize orientationchange focus",s.resize),F.find("img").attr("draggable","false"),setTimeout(function(){F.vars.start(F)
},200)
},asNav:{setup:function(){F.asNav=!0,F.animatingTo=Math.floor(F.currentSlide/F.move),F.currentItem=F.currentSlide,F.slides.removeClass(E+"active-slide").eq(F.currentItem).addClass(E+"active-slide"),D?(H._slider=F,F.slides.each(function(){var g=this;
g._gesture=new MSGesture,g._gesture.target=g,g.addEventListener("MSPointerDown",function(h){h.preventDefault(),h.currentTarget._gesture&&h.currentTarget._gesture.addPointer(h.pointerId)
},!1),g.addEventListener("MSGestureTap",function(h){h.preventDefault();
var j=f(this),i=j.index();
f(F.vars.asNavFor).data("flexslider").animating||j.hasClass("active")||(F.direction=F.currentItem<i?"next":"prev",F.flexAnimate(i,F.vars.pauseOnAction,!1,!0,!0))
})
})):F.slides.on(B,function(h){h.preventDefault();
var k=f(this),j=k.index(),i=k.offset().left-f(F).scrollLeft();
0>=i&&k.hasClass(E+"active-slide")?F.flexAnimate(F.getTarget("prev"),!0):f(F.vars.asNavFor).data("flexslider").animating||k.hasClass(E+"active-slide")||(F.direction=F.currentItem<j?"next":"prev",F.flexAnimate(j,F.vars.pauseOnAction,!1,!0,!0))
})
}},controlNav:{setup:function(){F.manualControls?s.controlNav.setupManual():s.controlNav.setupPaging()
},setupPaging:function(){var n,m,h="thumbnails"===F.vars.controlNav?"control-thumbs":"control-paging",o=1;
if(F.controlNavScaffold=f('<ol class="'+E+"control-nav "+E+h+'"></ol>'),F.pagingCount>1){for(var l=0;
l<F.pagingCount;
l++){if(m=F.slides.eq(l),n="thumbnails"===F.vars.controlNav?'<img src="'+m.attr("data-thumb")+'"/>':"<a>"+o+"</a>","thumbnails"===F.vars.controlNav&&!0===F.vars.thumbCaptions){var i=m.attr("data-thumbcaption");
""!=i&&void 0!=i&&(n+='<span class="'+E+'caption">'+i+"</span>")
}F.controlNavScaffold.append("<li>"+n+"</li>"),o++
}}F.controlsContainer?f(F.controlsContainer).append(F.controlNavScaffold):F.append(F.controlNavScaffold),s.controlNav.set(),s.controlNav.active(),F.controlNavScaffold.delegate("a, img",B,function(g){if(g.preventDefault(),""===A||A===g.type){var k=f(this),j=F.controlNav.index(k);
k.hasClass(E+"active")||(F.direction=j>F.currentSlide?"next":"prev",F.flexAnimate(j,F.vars.pauseOnAction))
}""===A&&(A=g.type),s.setToClearWatchedEvent()
})
},setupManual:function(){F.controlNav=F.manualControls,s.controlNav.active(),F.controlNav.bind(B,function(g){if(g.preventDefault(),""===A||A===g.type){var i=f(this),h=F.controlNav.index(i);
i.hasClass(E+"active")||(F.direction=h>F.currentSlide?"next":"prev",F.flexAnimate(h,F.vars.pauseOnAction))
}""===A&&(A=g.type),s.setToClearWatchedEvent()
})
},set:function(){var g="thumbnails"===F.vars.controlNav?"img":"a";
F.controlNav=f("."+E+"control-nav li "+g,F.controlsContainer?F.controlsContainer:F)
},active:function(){F.controlNav.removeClass(E+"active").eq(F.animatingTo).addClass(E+"active")
},update:function(g,h){F.pagingCount>1&&"add"===g?F.controlNavScaffold.append(f("<li><a>"+F.count+"</a></li>")):1===F.pagingCount?F.controlNavScaffold.find("li").remove():F.controlNav.eq(h).closest("li").remove(),s.controlNav.set(),F.pagingCount>1&&F.pagingCount!==F.controlNav.length?F.update(h,g):s.controlNav.active()
}},directionNav:{setup:function(){var g=f('<ul class="'+E+'direction-nav"><li><a class="'+E+'prev" href="#">'+F.vars.prevText+'</a></li><li><a class="'+E+'next" href="#">'+F.vars.nextText+"</a></li></ul>");
F.controlsContainer?(f(F.controlsContainer).append(g),F.directionNav=f("."+E+"direction-nav li a",F.controlsContainer)):(F.append(g),F.directionNav=f("."+E+"direction-nav li a",F)),s.directionNav.update(),F.directionNav.bind(B,function(h){h.preventDefault();
var i;
(""===A||A===h.type)&&(i=f(this).hasClass(E+"next")?F.getTarget("next"):F.getTarget("prev"),F.flexAnimate(i,F.vars.pauseOnAction)),""===A&&(A=h.type),s.setToClearWatchedEvent()
})
},update:function(){var g=E+"disabled";
1===F.pagingCount?F.directionNav.addClass(g).attr("tabindex","-1"):F.vars.animationLoop?F.directionNav.removeClass(g).removeAttr("tabindex"):0===F.animatingTo?F.directionNav.removeClass(g).filter("."+E+"prev").addClass(g).attr("tabindex","-1"):F.animatingTo===F.last?F.directionNav.removeClass(g).filter("."+E+"next").addClass(g).attr("tabindex","-1"):F.directionNav.removeClass(g).removeAttr("tabindex")
}},pausePlay:{setup:function(){var g=f('<div class="'+E+'pauseplay"><a></a></div>');
F.controlsContainer?(F.controlsContainer.append(g),F.pausePlay=f("."+E+"pauseplay a",F.controlsContainer)):(F.append(g),F.pausePlay=f("."+E+"pauseplay a",F)),s.pausePlay.update(F.vars.slideshow?E+"pause":E+"play"),F.pausePlay.bind(B,function(h){h.preventDefault(),(""===A||A===h.type)&&(f(this).hasClass(E+"pause")?(F.manualPause=!0,F.manualPlay=!1,F.pause()):(F.manualPause=!1,F.manualPlay=!0,F.play())),""===A&&(A=h.type),s.setToClearWatchedEvent()
})
},update:function(g){"play"===g?F.pausePlay.removeClass(E+"pause").addClass(E+"play").html(F.vars.playText):F.pausePlay.removeClass(E+"play").addClass(E+"pause").html(F.vars.pauseText)
}},touch:function(){function k(g){F.animating?g.preventDefault():(window.navigator.msPointerEnabled||1===g.touches.length)&&(F.pause(),L=y?F.h:F.w,J=Number(new Date),n=g.touches[0].pageX,m=g.touches[0].pageY,M=w&&x&&F.animatingTo===F.last?0:w&&x?F.limit-(F.itemW+F.vars.itemMargin)*F.move*F.animatingTo:w&&F.currentSlide===F.last?F.limit:w?(F.itemW+F.vars.itemMargin)*F.move*F.currentSlide:x?(F.last-F.currentSlide+F.cloneOffset)*L:(F.currentSlide+F.cloneOffset)*L,O=y?m:n,N=y?n:m,H.addEventListener("touchmove",T,!1),H.addEventListener("touchend",S,!1))
}function T(g){n=g.touches[0].pageX,m=g.touches[0].pageY,K=y?O-m:O-n,I=y?Math.abs(K)<Math.abs(n-N):Math.abs(K)<Math.abs(m-N);
var h=500;
(!I||Number(new Date)-J>h)&&(g.preventDefault(),!v&&F.transitions&&(F.vars.animationLoop||(K/=0===F.currentSlide&&0>K||F.currentSlide===F.last&&K>0?Math.abs(K)/L+2:1),F.setProps(M+K,"setTouch")))
}function S(){if(H.removeEventListener("touchmove",T,!1),F.animatingTo===F.currentSlide&&!I&&null!==K){var h=x?-K:K,g=h>0?F.getTarget("next"):F.getTarget("prev");
F.canAdvance(g)&&(Number(new Date)-J<550&&Math.abs(h)>50||Math.abs(h)>L/2)?F.flexAnimate(g,F.vars.pauseOnAction):v||F.flexAnimate(F.currentSlide,F.vars.pauseOnAction,!0)
}H.removeEventListener("touchend",S,!1),O=null,N=null,K=null,M=null
}function R(g){g.stopPropagation(),F.animating?g.preventDefault():(F.pause(),H._gesture.addPointer(g.pointerId),l=0,L=y?F.h:F.w,J=Number(new Date),M=w&&x&&F.animatingTo===F.last?0:w&&x?F.limit-(F.itemW+F.vars.itemMargin)*F.move*F.animatingTo:w&&F.currentSlide===F.last?F.limit:w?(F.itemW+F.vars.itemMargin)*F.move*F.currentSlide:x?(F.last-F.currentSlide+F.cloneOffset)*L:(F.currentSlide+F.cloneOffset)*L)
}function Q(g){g.stopPropagation();
var j=g.target._slider;
if(j){var i=-g.translationX,h=-g.translationY;
return l+=y?h:i,K=l,I=y?Math.abs(l)<Math.abs(-i):Math.abs(l)<Math.abs(-h),g.detail===g.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){H._gesture.stop()
}),void 0):((!I||Number(new Date)-J>500)&&(g.preventDefault(),!v&&j.transitions&&(j.vars.animationLoop||(K=l/(0===j.currentSlide&&0>l||j.currentSlide===j.last&&l>0?Math.abs(l)/L+2:1)),j.setProps(M+K,"setTouch"))),void 0)
}}function P(g){g.stopPropagation();
var j=g.target._slider;
if(j){if(j.animatingTo===j.currentSlide&&!I&&null!==K){var i=x?-K:K,h=i>0?j.getTarget("next"):j.getTarget("prev");
j.canAdvance(h)&&(Number(new Date)-J<550&&Math.abs(i)>50||Math.abs(i)>L/2)?j.flexAnimate(h,j.vars.pauseOnAction):v||j.flexAnimate(j.currentSlide,j.vars.pauseOnAction,!0)
}O=null,N=null,K=null,M=null,l=0
}}var O,N,M,L,K,J,I=!1,n=0,m=0,l=0;
D?(H.style.msTouchAction="none",H._gesture=new MSGesture,H._gesture.target=H,H.addEventListener("MSPointerDown",R,!1),H._slider=F,H.addEventListener("MSGestureChange",Q,!1),H.addEventListener("MSGestureEnd",P,!1)):H.addEventListener("touchstart",k,!1)
},resize:function(){!F.animating&&F.is(":visible")&&(w||F.doMath(),v?s.smoothHeight():w?(F.slides.width(F.computedW),F.update(F.pagingCount),F.setProps()):y?(F.viewport.height(F.h),F.setProps(F.h,"setTotal")):(F.vars.smoothHeight&&s.smoothHeight(),F.newSlides.width(F.computedW),F.setProps(F.computedW,"setTotal")))
},smoothHeight:function(h){if(!y||v){var g=v?F:F.viewport;
h?g.animate({height:F.slides.eq(F.animatingTo).height()},h):g.height(F.slides.eq(F.animatingTo).height())
}},sync:function(g){var i=f(F.vars.sync).data("flexslider"),h=F.animatingTo;
switch(g){case"animate":i.flexAnimate(h,F.vars.pauseOnAction,!1,!0);
break;
case"play":i.playing||i.asNav||i.play();
break;
case"pause":i.pause()
}},uniqueID:function(g){return g.find("[id]").each(function(){var h=f(this);
h.attr("id",h.attr("id")+"_clone")
}),g
},pauseInvisible:{visProp:null,init:function(){var h=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var g=0;
g<h.length;
g++){h[g]+"Hidden" in document&&(s.pauseInvisible.visProp=h[g]+"Hidden")
}if(s.pauseInvisible.visProp){var i=s.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(i,function(){s.pauseInvisible.isHidden()?F.startTimeout?clearTimeout(F.startTimeout):F.pause():F.started?F.play():F.vars.initDelay>0?setTimeout(F.play,F.vars.initDelay):F.play()
})
}},isHidden:function(){return document[s.pauseInvisible.visProp]||!1
}},setToClearWatchedEvent:function(){clearTimeout(z),z=setTimeout(function(){A=""
},3000)
}},F.flexAnimate=function(I,p,o,n,m){if(F.vars.animationLoop||I===F.currentSlide||(F.direction=I>F.currentSlide?"next":"prev"),u&&1===F.pagingCount&&(F.direction=F.currentItem<I?"next":"prev"),!F.animating&&(F.canAdvance(I,m)||o)&&F.is(":visible")){if(u&&n){var l=f(F.vars.asNavFor).data("flexslider");
if(F.atEnd=0===I||I===F.count-1,l.flexAnimate(I,!0,!1,!0,m),F.direction=F.currentItem<I?"next":"prev",l.direction=F.direction,Math.ceil((I+1)/F.visible)-1===F.currentSlide||0===I){return F.currentItem=I,F.slides.removeClass(E+"active-slide").eq(I).addClass(E+"active-slide"),!1
}F.currentItem=I,F.slides.removeClass(E+"active-slide").eq(I).addClass(E+"active-slide"),I=Math.floor(I/F.visible)
}if(F.animating=!0,F.animatingTo=I,p&&F.pause(),F.vars.before(F),F.syncExists&&!m&&s.sync("animate"),F.vars.controlNav&&s.controlNav.active(),w||F.slides.removeClass(E+"active-slide").eq(I).addClass(E+"active-slide"),F.atEnd=0===I||I===F.last,F.vars.directionNav&&s.directionNav.update(),I===F.last&&(F.vars.end(F),F.vars.animationLoop||F.pause()),v){C?(F.slides.eq(F.currentSlide).css({opacity:0,zIndex:1}),F.slides.eq(I).css({opacity:1,zIndex:2}),F.wrapup(k)):(F.slides.eq(F.currentSlide).css({zIndex:1}).animate({opacity:0},F.vars.animationSpeed,F.vars.easing),F.slides.eq(I).css({zIndex:2}).animate({opacity:1},F.vars.animationSpeed,F.vars.easing,F.wrapup))
}else{var g,K,J,k=y?F.slides.filter(":first").height():F.computedW;
w?(g=F.vars.itemMargin,J=(F.itemW+g)*F.move*F.animatingTo,K=J>F.limit&&1!==F.visible?F.limit:J):K=0===F.currentSlide&&I===F.count-1&&F.vars.animationLoop&&"next"!==F.direction?x?(F.count+F.cloneOffset)*k:0:F.currentSlide===F.last&&0===I&&F.vars.animationLoop&&"prev"!==F.direction?x?0:(F.count+1)*k:x?(F.count-1-I+F.cloneOffset)*k:(I+F.cloneOffset)*k,F.setProps(K,"",F.vars.animationSpeed),F.transitions?(F.vars.animationLoop&&F.atEnd||(F.animating=!1,F.currentSlide=F.animatingTo),F.container.unbind("webkitTransitionEnd transitionend"),F.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(F.ensureAnimationEnd),F.wrapup(k)
}),clearTimeout(F.ensureAnimationEnd),F.ensureAnimationEnd=setTimeout(function(){F.wrapup(k)
},F.vars.animationSpeed+100)):F.container.animate(F.args,F.vars.animationSpeed,F.vars.easing,function(){F.wrapup(k)
})
}F.vars.smoothHeight&&s.smoothHeight(F.vars.animationSpeed)
}},F.wrapup=function(g){v||w||(0===F.currentSlide&&F.animatingTo===F.last&&F.vars.animationLoop?F.setProps(g,"jumpEnd"):F.currentSlide===F.last&&0===F.animatingTo&&F.vars.animationLoop&&F.setProps(g,"jumpStart")),F.animating=!1,F.currentSlide=F.animatingTo,F.vars.after(F)
},F.animateSlides=function(){!F.animating&&r&&F.flexAnimate(F.getTarget("next"))
},F.pause=function(){clearInterval(F.animatedSlides),F.animatedSlides=null,F.playing=!1,F.vars.pausePlay&&s.pausePlay.update("play"),F.syncExists&&s.sync("pause")
},F.play=function(){F.playing&&clearInterval(F.animatedSlides),F.animatedSlides=F.animatedSlides||setInterval(F.animateSlides,F.vars.slideshowSpeed),F.started=F.playing=!0,F.vars.pausePlay&&s.pausePlay.update("pause"),F.syncExists&&s.sync("play")
},F.stop=function(){F.pause(),F.stopped=!0
},F.canAdvance=function(h,g){var i=u?F.pagingCount-1:F.last;
return g?!0:u&&F.currentItem===F.count-1&&0===h&&"prev"===F.direction?!0:u&&0===F.currentItem&&h===F.pagingCount-1&&"next"!==F.direction?!1:h!==F.currentSlide||u?F.vars.animationLoop?!0:F.atEnd&&0===F.currentSlide&&h===i&&"next"!==F.direction?!1:F.atEnd&&F.currentSlide===i&&0===h&&"next"===F.direction?!1:!0:!1
},F.getTarget=function(g){return F.direction=g,"next"===g?F.currentSlide===F.last?0:F.currentSlide+1:0===F.currentSlide?F.last:F.currentSlide-1
},F.setProps=function(h,g,j){var i=function(){var l=h?h:(F.itemW+F.vars.itemMargin)*F.move*F.animatingTo,k=function(){if(w){return"setTouch"===g?h:x&&F.animatingTo===F.last?0:x?F.limit-(F.itemW+F.vars.itemMargin)*F.move*F.animatingTo:F.animatingTo===F.last?F.limit:l
}switch(g){case"setTotal":return x?(F.count-1-F.currentSlide+F.cloneOffset)*h:(F.currentSlide+F.cloneOffset)*h;
case"setTouch":return x?h:h;
case"jumpEnd":return x?h:F.count*h;
case"jumpStart":return x?F.count*h:h;
default:return h
}}();
return -1*k+"px"
}();
F.transitions&&(i=y?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",j=void 0!==j?j/1000+"s":"0s",F.container.css("-"+F.pfx+"-transition-duration",j),F.container.css("transition-duration",j)),F.args[F.prop]=i,(F.transitions||void 0===j)&&F.container.css(F.args),F.container.css("transform",i)
},F.setup=function(g){if(v){F.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===g&&(C?F.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+F.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(F.currentSlide).css({opacity:1,zIndex:2}):F.slides.css({opacity:0,display:"block",zIndex:1}).eq(F.currentSlide).css({zIndex:2}).animate({opacity:1},F.vars.animationSpeed,F.vars.easing)),F.vars.smoothHeight&&s.smoothHeight()
}else{var i,h;
"init"===g&&(F.viewport=f('<div class="'+E+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(F).append(F.container),F.cloneCount=0,F.cloneOffset=0,x&&(h=f.makeArray(F.slides).reverse(),F.slides=f(h),F.container.empty().append(F.slides))),F.vars.animationLoop&&!w&&(F.cloneCount=2,F.cloneOffset=1,"init"!==g&&F.container.find(".clone").remove(),s.uniqueID(F.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(F.container),s.uniqueID(F.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(F.container)),F.newSlides=f(F.vars.selector,F),i=x?F.count-1-F.currentSlide+F.cloneOffset:F.currentSlide+F.cloneOffset,y&&!w?(F.container.height(200*(F.count+F.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){F.newSlides.css({display:"block"}),F.doMath(),F.viewport.height(F.h),F.setProps(i*F.h,"init")
},"init"===g?100:0)):(F.container.width(200*(F.count+F.cloneCount)+"%"),F.setProps(i*F.computedW,"init"),setTimeout(function(){F.doMath(),F.newSlides.css({width:F.computedW,"float":"left",display:"block"}),F.vars.smoothHeight&&s.smoothHeight()
},"init"===g?100:0))
}w||F.slides.removeClass(E+"active-slide").eq(F.currentSlide).addClass(E+"active-slide"),F.vars.init(F)
},F.doMath=function(){var h=F.slides.first(),g=F.vars.itemMargin,j=F.vars.minItems,i=F.vars.maxItems;
F.w=void 0===F.viewport?F.width():F.viewport.width(),F.h=h.height(),F.boxPadding=h.outerWidth()-h.width(),w?(F.itemT=F.vars.itemWidth+g,F.minW=j?j*F.itemT:F.w,F.maxW=i?i*F.itemT-g:F.w,F.itemW=F.minW>F.w?(F.w-g*(j-1))/j:F.maxW<F.w?(F.w-g*(i-1))/i:F.vars.itemWidth>F.w?F.w:F.vars.itemWidth,F.visible=Math.floor(F.w/F.itemW),F.move=F.vars.move>0&&F.vars.move<F.visible?F.vars.move:F.visible,F.pagingCount=Math.ceil((F.count-F.visible)/F.move+1),F.last=F.pagingCount-1,F.limit=1===F.pagingCount?0:F.vars.itemWidth>F.w?F.itemW*(F.count-1)+g*(F.count-1):(F.itemW+g)*F.count-F.w-g):(F.itemW=F.w,F.pagingCount=F.count,F.last=F.count-1),F.computedW=F.itemW-F.boxPadding
},F.update=function(h,g){F.doMath(),w||(h<F.currentSlide?F.currentSlide+=1:h<=F.currentSlide&&0!==h&&(F.currentSlide-=1),F.animatingTo=F.currentSlide),F.vars.controlNav&&!F.manualControls&&("add"===g&&!w||F.pagingCount>F.controlNav.length?s.controlNav.update("add"):("remove"===g&&!w||F.pagingCount<F.controlNav.length)&&(w&&F.currentSlide>F.last&&(F.currentSlide-=1,F.animatingTo-=1),s.controlNav.update("remove",F.last))),F.vars.directionNav&&s.directionNav.update()
},F.addSlide=function(g,i){var h=f(g);
F.count+=1,F.last=F.count-1,y&&x?void 0!==i?F.slides.eq(F.count-i).after(h):F.container.prepend(h):void 0!==i?F.slides.eq(i).before(h):F.container.append(h),F.update(i,"add"),F.slides=f(F.vars.selector+":not(.clone)",F),F.setup(),F.vars.added(F)
},F.removeSlide=function(g){var h=isNaN(g)?F.slides.index(f(g)):g;
F.count-=1,F.last=F.count-1,isNaN(g)?f(g,F.slides).remove():y&&x?F.slides.eq(F.last).remove():F.slides.eq(g).remove(),F.doMath(),F.update(h,"remove"),F.slides=f(F.vars.selector+":not(.clone)",F),F.setup(),F.vars.removed(F)
},s.init()
},f(window).blur(function(){focused=!1
}).focus(function(){focused=!0
}),f.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},f.fn.flexslider=function(g){if(void 0===g&&(g={}),"object"==typeof g){return this.each(function(){var k=f(this),j=g.selector?g.selector:".slides > li",i=k.find(j);
1===i.length&&g.allowOneSlide===!0||0===i.length?(i.fadeIn(400),g.start&&g.start(k)):void 0===k.data("flexslider")&&new f.flexslider(this,g)
})
}var h=f(this).data("flexslider");
switch(g){case"play":h.play();
break;
case"pause":h.pause();
break;
case"stop":h.stop();
break;
case"next":h.flexAnimate(h.getTarget("next"),!0);
break;
case"prev":case"previous":h.flexAnimate(h.getTarget("prev"),!0);
break;
default:"number"==typeof g&&h.flexAnimate(g,!0)
}}
}(jQuery);
e("flexslider2",function(){});
e("destinationGallery",["jquery","lodash","handlebars","flexslider2"],function(h,g,j,i){var f=function(o,v){var m={animation:"slide",easing:"linear",pauseOnHover:true,smoothHeight:false,prevText:"",nextText:"",animationLoop:false,slideshow:false,animationSpeed:300,touch:true,controlNav:false,useCSS:false};
var n={wrapper:"image-caption-wrapper",noCreditWrapper:"js-no-credit",captions:"image-caption",credit:"image-credit",currentIndex:"image-number-emphasize",totalNumber:"image-number-total"};
var q=true;
var s;
var p=function(w){if(!q){if(s.find(".flex-prev").hasClass("flex-disabled")){w.find(".flex-disabled").parent().append('<div class="disable-nav-left"></div>');
s.find(".flex-next").focus()
}else{if(s.find(".flex-next").hasClass("flex-disabled")){w.find(".flex-disabled").parent().append('<div class="disable-nav-right"></div>');
s.find(".flex-prev").focus()
}else{w.find(".disable-nav-left").remove();
w.find(".disable-nav-right").remove()
}}}};
var r=function(w){w.find(".disable-nav-left").remove();
w.find(".disable-nav-right").remove()
};
var u=function(z){var A=s.find("li").eq(z.currentSlide);
var y=A.find("img");
var x=y.data("credit");
var w=h("#id");
p(z);
if(q){s.find("."+n.totalNumber).text("/"+z.count);
q=false
}s.find("."+n.captions).text(y.data("captions"));
s.find("."+n.credit).text(y.data("credit"));
if(g.isEmpty(y.data("credit"))){s.find("."+n.wrapper).addClass(n.noCreditWrapper)
}else{s.find("."+n.wrapper).removeClass(n.noCreditWrapper)
}s.find("."+n.currentIndex).text(z.currentSlide+1)
};
var l=function(){var w=s.find(".slides");
if(w.find("li").length>1){return true
}else{return false
}};
var k=function(x,w){s=x;
m=h.extend({},m,{start:u,before:r,after:u},w);
if(!l()){m=h.extend({},m,{directionNav:false})
}s.find(".flexslider").flexslider(m)
};
if(!g.isEmpty(o)){k(o,v)
}};
return f
});
e("productFlyingClasses",["jquery","lodash"],function(h,g){var f=function(k,i,j){h(i).click(function(){var l=h(this).parent().is(k)?h(this).parent():h(this).find(k);
l.find(j).toggleClass("active");
l.find("i.icon").toggleClass("icon-up");
if(l.find(j).hasClass("active")){h("html, body").animate({scrollTop:l.offset().top},300)
}})
};
return{init:function(i){if(!g.isEmpty(i)){f("div.cell","button.content-trigger-small","div.content")
}}}
});
e("toDoList",["jquery","lodash","jquery.hammer","breakpoints","clickTouch"],function(k,g,f,j,h){var i=function(C,D,J){var af;
var K;
var Q=C;
var X;
var L;
var M;
var P;
var N;
var A=[];
var H=D;
var y=1;
var q={};
var aa=0;
var V=0;
var v;
var B;
var m=1;
var U="";
var u={displayContainer:"to-do-list",isDisplayNone:"is-display-none",isExpand:"text-expand",isExpanding:"text-expanding",isCollapsing:"is-collapsing",itemClass:"item",iconExpand:"icon-expand",iconClose:"icon-close",columnPrefix:"column-",fallBack:"to-do-list-fallback",filterSelectWrapper:"catalogues-list-wrapper",filterSelectTrigger:"catalogues-list-trigger",filterSelect:"select-list",moreButton:"explore-more",toDoColumn:"to-do-column",moreDetail:"more-detail",expandButton:"expand-button",loadingIconWrapperClass:"to-do-list-loading-wrapper"};
var R={itemIndex:"item-index",itemCategory:"item-category",itemLocation:"item-location",collapseHint:"collapse-hint",expandHint:"expand-hint"};
var I={small:{displayColumn:1,displayItemNo:5},medium:{displayColumn:2,displayItemNo:5},large:{displayColumn:3,displayItemNo:10}};
K={classes:u,dataItemPrefix:R,viewPortControll:I};
af=k.extend({},K,J);
var ab=["a:not(."+af.classes.expandButton+")"];
var E=function(){if(j.isSmall()){return"small"
}if(j.isMedium()){return"medium"
}if(j.isLarge()){return"large"
}return"large"
};
var W=function(al){var ak=al.outerHeight();
var aj=al.find(".text").outerHeight();
return ak+aj
};
var T=function(al){var ak=al.outerHeight();
var aj=0;
aj+=k(al).find("."+af.classes.moreDetail).height();
ak=ak-aj;
return ak
};
var ad=function(){X.removeClass(af.classes.isDisplayNone)
};
var F=function(){X.addClass(af.classes.isDisplayNone)
};
var Y=function(){L.removeClass(af.classes.isDisplayNone)
};
var ai=function(){L.addClass(af.classes.isDisplayNone)
};
var S=function(aj){if(aj===0){ai()
}else{Y()
}};
var Z=function(){var ak=1;
var am=af.viewPortControll[N].displayColumn;
for(;
ak<=am;
ak++){var aj=document.createElement("div");
var al=af.classes.toDoColumn+" "+af.classes.columnPrefix+ak;
aj.setAttribute("class",al);
M.append(aj)
}};
var G=function(ak){var aj=V+v;
if(ak==="onReSize"){aj=V;
V=0
}if(ak==="onFilter"){V=0;
aj=V+v
}return aj
};
var l=function(ak){var aj=G(ak);
q={};
while(V<aj&&V<aa){var al=A[V].html;
if(!g.isEmpty(q[y])){q[y]+=al
}else{q[y]=al
}y++;
if(y>B){y=m
}V++
}g.each(q,function(am,ao){var an=M.find(" ."+af.classes.columnPrefix+ao);
an.append(am)
});
if(V>=aa){ai()
}F();
M.css("min-height","0")
};
var O=function(aj){q={};
N=E();
B=af.viewPortControll[N].displayColumn;
v=af.viewPortControll[N].displayItemNo;
aa=A.length;
M.empty();
if(aj!=="onExplore"){y=m
}ad();
S(aa);
Z();
l(aj)
};
var o=function(aj){if(g.isEmpty(aj)||aj===U){A=g.cloneDeep(H)
}else{A=g.filter(H,{category:aj})
}};
var n=function(al){var ak=E();
if(N!==ak){var aj=M.height();
M.css("min-height",aj);
O("onReSize")
}};
var ah=function(am){var ak=am.data(af.dataItemPrefix.itemIndex);
var al=g.findIndex(A,{indexNo:ak});
am.removeClass(af.classes.isCollapsing).addClass(af.classes.isExpanding).addClass(af.classes.isExpand).removeClass(af.classes.isExpanding).attr("aria-expanded",true);
var aj=am.find(".icon");
aj.addClass(af.classes.iconClose).removeClass(af.classes.iconExpand).siblings("span").html(aj.closest("a").data(af.dataItemPrefix.collapseHint));
A[al].html=am[0].outerHTML
};
var x=function(am){var ak=am.data(af.dataItemPrefix.itemIndex);
var al=g.findIndex(A,{indexNo:ak});
am.removeClass(af.classes.isExpand).addClass(af.classes.isCollapsing).removeClass(af.classes.isCollapsing).attr("aria-expanded",false);
var aj=am.find(".icon");
aj.addClass(af.classes.iconExpand).removeClass(af.classes.iconClose).siblings("span").html(aj.closest("a").data(af.dataItemPrefix.expandHint));
A[al].html=am[0].outerHTML
};
var z=function(aj){if(aj.which===13){aj.preventDefault();
s(aj)
}};
var s=function(al){var ak=k(al.target);
if(!ak.is(ab.join())){al.preventDefault();
var aj=k(al.target).closest("."+af.classes.itemClass);
if(aj.hasClass(af.classes.isExpand)&&(!aj.hasClass(af.classes.isCollapsing))){x(aj)
}else{ah(aj)
}}};
var p=function(){var aj=P.find("."+af.classes.filterSelectTrigger).width();
P.find("."+af.classes.filterSelect).width(aj)
};
var w=function(){if(event.which===13){event.preventDefault();
l("onExplore")
}};
var r=function(){l("onExplore")
};
var ac=function(ak){o(this.value);
var aj=k(ak.target);
P.find("."+af.classes.filterSelectTrigger+" span").html(aj.find("option:selected").text());
aj.trigger("change.onChangeSelectListWidth");
O("onFilter")
};
var ag=function(){M.on("keypress","."+af.classes.itemClass,z).hammer().on(h,"."+af.classes.itemClass,s);
k(window).on("resize",g.debounce(n,150));
P.on("change","."+af.classes.filterSelect,ac).on("change.onChangeSelectListWidth","."+af.classes.filterSelect,p);
L.on("click",r).on("keypress",w)
};
var ae=function(){X=Q.find("."+af.classes.loadingIconWrapperClass);
L=Q.find("."+af.classes.moreButton);
M=Q.find("."+af.classes.displayContainer);
P=Q.find("."+af.classes.filterSelectWrapper);
var aj=P.find("."+af.classes.filterSelect);
aj.val(aj.find("option:first-child").attr("value"));
if(!g.isEmpty(H)){o();
O("load");
ag()
}};
ae();
return{}
};
return i
});
e("thingsToDo",["jquery","lodash","breakpoints","toDoList"],function(k,q,m,j){var p={};
var o=[];
var g={itemIndex:"item-index",itemCategory:"item-category",itemLocation:"item-location",collapseHint:"collapse-hint",expandHint:"expand-hint"};
var f={featuredLocation:"featured-location"};
var i={itemClass:"item",fallBack:"to-do-list-fallback"};
var n=function(){q.each(k("."+i.fallBack+" ."+i.itemClass),function(s,u){var r={};
r.indexNo=u;
r.html=s.outerHTML;
r.itemLocation=k(s).data(g.itemLocation);
r.category=k(s).data(g.itemCategory);
o.push(r)
})
};
var l=function(r){var v=k(r).closest(".tab-panel");
var u=q.cloneDeep(o);
var s=v.data(f.featuredLocation);
if(!q.isEmpty(s)){u=q.filter(o,{itemLocation:s})
}p[s]=new j(k(r),u,{viewPortControll:CX.thingsToDo.viewPortControll,dataItemPrefix:g})
};
var h=function(s,r){n();
q.each(s,l)
};
return{init:function(r){if(!q.isEmpty(r)){h(r,"load")
}}}
});
e("standardTab",["jquery","lodash","jquery.hammer","clickTouch"],function(j,g,f,i){var h=function(o,l){var n={};
var q={selectors:{tabPanel:".tab-panel",tabActive:".tab-active",tabPanelActive:".tab-panel-active",tabPanelAdaptive:".tab-panel-adaptive"},namespace:"tabs"};
var p;
var k;
var m;
n.create=function(s,r){if(g.isEmpty(j(s))){return
}n.$el=j(s);
n.settings=j.extend({},q,r);
n.setup();
return this
};
n.setup=function(){m=n.$el.find(".tab-button").map(function(){var s=j(this).data("tabId");
var r=j('[data-tab-panel="'+s+'"]');
return{id:s,tab:j(this),panel:r}
});
p=n.$el.find(n.settings.selectors.tabActive);
if(!p.length){p=n.$el.find(".tabs:first-child .tab-button")
}k=p.data("tabId");
n.setActiveTab(k);
n.bindEvents()
};
n.bindEvents=function(){var r="tab."+this.settings.namespace;
n.$el.find(".tab-button").hammer().on(i,n.onTabPress);
n.$el.find(".tab-button").on("keypress",n.onTabEntered);
j("body").on("tab.prepare",this.onTabChange)
};
n.onTabChange=function(s,r){if(r.ignore||s.namespace!==n.settings.namespace){return false
}n.setActiveTab(r.tabId)
};
n.onTabEntered=function(r){if(r.which===13){n.onTabPress(r)
}};
n.onTabPress=function(s){var r;
if(j(s.target).data("radio")==="radio"){r=j(s.target).parent().data("tabId");
j(this).find('input[type="radio"]').attr("checked","checked")
}else{r=j(s.target).data("tabId");
j(this).find('input[type="radio"]').attr("checked","checked");
if(i==="tap"){s.gesture.srcEvent.preventDefault()
}s.preventDefault()
}n.setActiveTab(r);
j("body").trigger("tab.hometabs",[r,true])
};
n.setActiveTab=function(v,r){var y=n.settings.selectors.tabActive.substring(1);
var s=n.settings.selectors.tabPanelActive.substring(1);
var x=n.settings.selectors.tabPanelAdaptive.substring(1);
var u;
m.each(function(A,z){z.tab.removeClass(y);
z.tab.attr("aria-selected","false");
z.panel.removeClass(s);
z.panel.removeClass(x);
z.panel.attr("aria-hidden","true")
});
u=m.filter(function(A,z){return z.id===v
})[0];
u.tab.addClass(y);
u.tab.attr("aria-selected","true");
u.panel.addClass(s);
u.panel.addClass(x);
u.panel.attr("aria-hidden","false");
n.setSlickGalleryPosition(u.panel);
var w=j.Event("tab.shown",{target:u.panel});
n.$el.trigger(w);
p=u.tab;
k=v;
return this
};
n.setSlickGalleryPosition=function(s){var r=s.find(".slick-slider");
g.each(r,function(u){j(u).slick("setPosition")
})
};
if(!n.$el){n.create(o,l)
}return n
};
return h
});
e("darkSite",["jquery","lodash","handlebars","jquery.cookie"],function(k,H,n,D){var q="";
var r;
var G;
var g;
var p;
var y;
var u=[];
var I;
var E={closeButton:"close-dark-site-box",doNotShowAgain:"check-do-not-show-this-again",darkSiteBox:"dark-site-box",title:"title",darkSiteLink:"dark-site-link",darkSiteBarWrapper:"dark-site-message-container"};
var v={darkSiteID:"dark-site-id"};
var w=function(){var K;
var L;
var J=k("."+E.darkSiteBarWrapper);
if(u.length>0&&J.length>0){K=n["default"].compile(I);
L=K({response:u});
J.prepend(L)
}};
var o=function(J){p.css("display","none");
g.css("display","none");
w()
};
var A=function(){p.css("display","block");
g.css("display","block");
p.trigger("show.circularTab");
p.find(":tabbable:first").focus()
};
var h=function(K){var J=k.cookie(K);
if(!H.isEmpty(J)){return true
}return false
};
var x=function(J){return k.cookie(J,"isDisabled",{path:"/",expires:CX.darkSite.expiryDate})
};
var s=function(J){if(k.cookie(J)){k.removeCookie(J,{path:"/"})
}return h(J)
};
var f=function(K){K.preventDefault();
var J=p.find("."+E.doNotShowAgain+" input[type=checkbox]");
if(J.is(":checked")){x(r)
}o(K);
p.trigger("hide.circularTab")
};
var j=function(J){if(J.which===32||J.which===13){J.preventDefault();
f(J)
}};
var F=function(J){if(J.keyCode===9&&J.shiftKey){p.find(":tabbable:last").focus();
J.preventDefault()
}};
var B=function(J){if(J.keyCode===9&&!J.shiftKey){p.find(":tabbable:first").focus();
J.preventDefault()
}};
var l=function(J){p.on("keydown.first",":tabbable:first",F);
p.on("keydown.last",":tabbable:last",B)
};
var C=function(J){p.off("keydown.first");
p.off("keydown.last")
};
var i=function(){k("."+E.closeButton).on("click",f).on("keypress",j);
p.on("show.circularTab",l);
p.on("hide.circularTab",C)
};
var m=function(){u=[];
H.each(g,function(K,L){var J={};
J.title=k(K).find("."+E.title+":first").html();
J.url=k(K).find("."+E.darkSiteLink).attr("href");
u.push(J)
})
};
var z=function(J){p=J;
g=p.find("."+E.darkSiteBox);
y=p.find("."+E.closeButton);
r=q+CX.darkSite.cookieName;
I=k("#dark-site-bar-template").html();
if(g.length>0){m();
if(!h(r)){i();
A()
}else{w()
}}};
return{init:function(J){if(!H.isEmpty(J)){z(J)
}}}
});
e("lightBox",["jquery","lodash","handlebars"],function(g,f,i){var h=function(r,n){var s;
var v;
var p;
var u='<div class="overlay"></div>';
var A={onEscClose:true,onClickGreyOutClose:true};
var D={greyOut:"overlay",overlayActive:"js-overlay-active",lightboxActive:"js-lightbox-active"};
var y=function(G){s.removeClass(D.overlayActive);
v.removeClass(D.lightboxActive)
};
var m=function(G){G.preventDefault();
v.trigger("hide.circularTab");
y(G);
w()
};
var F=function(G){if(A.onClickGreyOutClose){m(G)
}};
var o=function(G){if(G.which===32||G.which===13){G.preventDefault();
j();
m(G)
}};
var k=function(G){if(G.which===27){G.preventDefault();
j();
m(G)
}};
var E=function(G){if(G.keyCode===9&&G.shiftKey){v.find(":tabbable:last").focus();
G.preventDefault()
}};
var B=function(G){if(G.keyCode===9&&!G.shiftKey){v.find(":tabbable:first").focus();
G.preventDefault()
}};
var q=function(G){v.find(":tabbable:first").focus();
v.on("keydown.first",":tabbable:first",E);
v.on("keydown.last",":tabbable:last",B)
};
var C=function(G){v.off("keydown.first");
v.off("keydown.last")
};
var j=function(){var G=v.data("$el");
if(!f.isNull(G)){G.focus()
}};
var l=function(){s.off("click").on("click",F);
v.on("click","."+A.closeButtonClass,m).on("keypress","."+A.closeButtonClass,o);
v.on("show.circularTab",q);
v.on("hide.circularTab",C);
if(A.onEscClose){g(document).on("keyup",k)
}};
var x=function(){s=g("."+D.greyOut);
if(f.isEmpty(s)){s=g(u);
g("body").append(s)
}};
var w=function(){v.data("$el",null)
};
var z=function(I,H){var G=I.html();
A=g.extend({},A,H);
v=g(G);
x();
w();
l();
g("body").append(v)
};
if(!f.isEmpty(r)){z(r,n)
}};
return h
});
e("bestValueGuaranteeLightbox",["jquery","lodash","breakpoints","lightBox"],function(k,o,l,j){var s;
var p;
var m;
var h={overlay:"overlay",lightbox:"bvg-lightbox",lightboxActive:"js-lightbox-active",overlayActive:"js-overlay-active"};
var n=function(){var u=k(window).scrollTop();
if(l.isSmall()){u+=18
}else{if(l.isMedium()){u+=150
}else{u+=150
}}s.css("top",u)
};
var f=function(u){u.stopImmediatePropagation();
if(u.which===13||u.which===32){u.preventDefault();
q(u)
}};
var r=function(v){var u=k(v.target);
if(!u.hasClass(m)){u=u.closest("."+m)
}s.data("$el",u)
};
var q=function(u){u.stopImmediatePropagation();
r(u);
n();
p.addClass("js-overlay-active");
s.addClass("js-lightbox-active");
s.trigger("show.circularTab");
u.preventDefault()
};
var i=function(){k("body").on("click","."+m,q).on("keypress","."+m,f)
};
var g=function(v,u){j(v,{closeButtonClass:"close-lightbox"});
p=k("."+h.overlay);
s=k("."+h.lightbox);
m=u;
i()
};
return{init:function(v,u){if(v.length>0){g(v,u)
}}}
});
e("subscribeNewsletter",["jquery","lodash","jquery.hammer","clickTouch","modernizr"],function(i,z,y,s,k){var x;
var w={subscribeListTrigger:".custom-select-trigger",subscribeTitle:".custom-select-text"};
var l=function(A){if(!k.input.placeholder){i('.subscription-form input[type="text"]').each(function(){Placeholders.enable(i(this)[0])
})
}};
var v=function(A){var B={};
jQuery.each(A,function(C,D){B[D.name]=D.value
});
return B
};
var p=function(A,C){var B=i.ajax(A,{type:"POST",data:JSON.stringify(C),contentType:"application/json; charset=utf-8",dataType:"json"});
B.done(g)
};
var g=function(D,A,C){i('.subscription-form input[type="text"]').removeClass("has-error");
i(".legal-notice .ui-checkbox-target").removeClass("has-error");
i(".subscription-form").find(".error-wrapper").find(".error").remove();
var B="";
if(D.isSuccessful===true){i(".subscription-form").find(".form-wrapper").addClass("is-display-none");
i(".subscribe-confirm").removeClass("is-display-none")
}else{if(D.errors.length>0){var E=o(D);
n(E);
m(D.errors)
}}};
var q=function(D){var A;
var C;
var B;
A=window.CX.subscribeNewsletter.endPoints.subscribeForNonMember;
B=i('form.subscription-form [name!="legal-notice-check"]').serializeArray();
C=v(B);
if(A){p(A,C)
}D.preventDefault()
};
var o=function(B){var A=[];
z.each(B.errors,function(D){var C=window.CX.subscribeNewsletter.endPoints.subscriptionError;
if(typeof D.code!=="undefined"||D.code!==""){C+=D.code+"."
}if(typeof D.parameters!=="undefined"&&D.parameters.length>0){z.each(D.parameters,function(E){C+=E+"."
})
}C+="JSON";
A.push(C)
});
return A
};
var n=function(A){z.each(A,function(C){var B=i.ajax({url:C,type:"GET",dataType:"json"});
B.done(function(D){var E="";
if(D.errorMessages.length>0){i(D.errorMessages).each(function(F,G){E+='<div class="error"><i class="icon icon-warning" aria-hidden="true"></i><span class="error-description">'+G+"</span></div>"
})
}i(".subscription-form").find(".error-wrapper").prepend(E)
})
});
l()
};
var m=function(A){z.each(A,function(B,C){var D=B.parameters;
if(typeof D!=="undefined"&&D.length>0){i.each(D,function(E,F){i('.subscription-form input[name="'+F+'"]').addClass("has-error");
if(F==="consent"){i(".legal-notice .ui-checkbox-target").addClass("has-error")
}})
}})
};
var j=function(){if(i('.subscription-form input[name="legal-notice-check"]').is(":checked")){i("input[name=consent]").attr("value","yes")
}else{i("input[name=consent]").val("")
}};
var f=function(){i(".legal-notice").addClass("legal-notice-active")
};
var u=function(C){var A=i(C.target);
var B=A.find("option:selected").text();
i(C.target).prev(w.subscribeListTrigger).find(w.subscribeTitle).html(B)
};
var h=function(){x.on("change",".custom-select-control",u);
x.on("submit",".subscription-form",q);
x.find('input[name="legal-notice-check"]').on("change",j);
i(".form-wrapper").on("focusin",f);
i(".button-subscribe").on(s,f)
};
var r=function(A){x=A;
h()
};
return{init:function(A){if(A){r(A)
}}}
});
e("browserAlert",["jquery"],function(j){var p=navigator.userAgent.toLowerCase();
var k;
var g={closeButton:"close-browser-alert"};
var n=function(){var q;
var r=p.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
if(r&&(q=p.match(/version\/([\.\d]+)/i))!=null){r[2]=q[1]
}r=r?[r[1],r[2]]:[navigator.appName,navigator.appVersion,"-?"];
return r
};
var h=function(){var r;
var q=navigator.appName;
if(p.indexOf("windows nt 5.1")!==-1||p.indexOf("windows xp")!==-1){r="xp"
}else{if(p.indexOf("windows nt 6.0")!==-1){r="vista"
}else{if(p.indexOf("windows nt 6.1")!==-1){r="windows 7"
}else{r="*"
}}}return r
};
var o=function(q){var v=window.CX.browserAlert.reminderList;
var r=n();
var w=h();
var u=false;
for(var s=0;
v.length>s;
s++){if(r[0].indexOf(v[s].browserType)>=0&&v[s].minBrowserVersion<=parseInt(r[1])&&v[s].maxBrowserVersion>=parseInt(r[1])&&(v[s].osVersion===w||v[s].osVersion==="*")){u=true;
break
}}if(u){l(v[s].browserType);
j("body").addClass("js-browser-wrapper-active")
}};
var l=function(r){var q;
if(r.toLowerCase()==="ie"){q=window.CX.browserAlert.linkForIE
}else{if(r.toLowerCase()==="firefox"){q=window.CX.browserAlert.linkForFirefox
}else{if(r.toLowerCase()==="chrome"){q=window.CX.browserAlert.linkForChrome
}else{if(r.toLowerCase()==="safari"){q=window.CX.browserAlert.linkForSafari
}}}}k.find(".notification > a").attr("href",q)
};
var m=function(){k.on("click","."+g.closeButton,i)
};
var i=function(q){k.remove();
q.stopPropagation()
};
var f=function(q){k=q;
o(k);
m()
};
return{init:function(q){if(q.length!==0){f(q)
}}}
});
e("placeholdersPassword",["jquery"],function(k){var i={fallbackClass:"fallback-password-input",showInputClass:"enabled",hideInputClass:"disabled"};
var g=function(n,o){var m=document.createElement("input");
m.type="text";
m.className=n+" "+i.fallbackClass+" "+i.showInputClass;
m.value=o;
return m
};
var j=function(n){var p=n||window.event;
var o=p.target?p.target:p.srcElement;
var m=o.nextSibling;
o.className=o.className.replace(" "+i.showInputClass,"");
o.className=o.className+" "+i.hideInputClass;
m.className=m.className.replace(" "+i.hideInputClass,"");
m.className=m.className+" "+i.showInputClass;
m.focus()
};
var h=function(n){var p=n||window.event;
var m=p.target?p.target:p.srcElement;
var o=m.previousSibling;
if(m.value===""||m.value===m.getAttribute("placeholder")){m.className=m.className.replace(" "+i.showInputClass,"");
m.className=m.className+" "+i.hideInputClass;
o.className=o.className.replace(" "+i.hideInputClass,"");
o.className=o.className+" "+i.showInputClass
}};
var l=function(m,n){m.className=m.className+" "+i.hideInputClass;
m.parentNode.insertBefore(n,m);
n.attachEvent("onfocus",j);
m.attachEvent("onblur",h)
};
var f=function(){var q=document.querySelectorAll('input[type="password"][placeholder]');
var m;
var n;
var p=0;
var o=q.length;
for(;
p<o;
p++){m=q[p];
n=g(m.getAttribute("class"),m.getAttribute("placeholder"));
l(m,n)
}};
return{init:function(){if(k("html").hasClass("less-than-ie9")){f()
}}}
});
e("timezone",["jquery","lodash"],function(h,f){var g=function(k,j){var i=new h.Deferred();
var o=[];
var l;
var m=function(r){if(o.length===0){var q=h.ajax({url:r,type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
q.done(function(s){h.each(s.timeZone,function(){o[this.airportCode]=this.offset
});
i.resolve()
})
}};
var p=function(r,q){var u=new Date(r);
var s=0;
var v=0;
u.setMinutes(u.getMinutes()+u.getTimezoneOffset());
if(q&&q!==null&&q!==""&&q!=="Z"){s=parseInt(q.substr(1,2),10);
v=parseInt(q.substr(4,2),10);
if(!isNaN(s)&&!isNaN(v)){u.setMinutes(u.getMinutes()+parseInt(q.substr(0,1)+((s*60)+v),10))
}}return u
};
var n=function(r,q){if(h(r).length>0){l=q;
m(l.endPoint)
}};
n(k,j);
return{getDeferred:function(){return i
},calculateMinTimeZoneOffset:function(q){var r=new Date();
if(q!==null&&q!==""){r=p(new Date(),o[q]);
r.setHours(r.getHours()+1)
}return r
},calculateMaxTimeZoneOffset:function(r,q){var s=new Date();
if(r!==null&&r!==""){s=p(new Date(),o[r])
}s.setDate(s.getDate()+q);
return s
}}
};
return g
});
e("airportsServices",["jquery","lodash","geolocation"],function(i,g,f){var h=function(l){var n;
var k=new i.Deferred();
var j=function(o){n=o;
k.resolve()
};
var m=function(o){var p=i.ajax(o,{type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
p.done(j)
};
m(l);
return{getDeferred:function(){return k
},getAirportCoordinatesList:function(){return n
}}
};
return h
});
e("flightSearchTypeaheadFilter",["jquery","lodash"],function(j,h){var k="(?:^|\\s|\\()";
var i=function(q,s){var r=new RegExp(j.ui.autocomplete.escapeRegex(q.term),"i");
var y=new RegExp(k+j.ui.autocomplete.escapeRegex(q.term),"i");
var A=[];
var x=[];
var w=[];
var m=[];
var u=[];
var z=[];
var p=[];
var v=[];
var o=[];
var n=[];
var l=[];
A=h.filter(s,function(B){return r.test(B.airportDetails.city.name)
});
x=h.filter(s,function(B){return y.test(B.airportDetails.city.pinyin)
});
w=h.filter(s,function(B){return r.test(B.airportDetails.airportShortName)
});
m=h.filter(s,function(B){return y.test(B.airportDetails.airportShortName_pinyin)||y.test(B.airportDetails.airportFullName_pinyin)
});
u=h.filter(s,function(B){return y.test(B.airportCode)
});
z=h.filter(s,function(B){return r.test(B.airportDetails.country.name)
});
p=h.filter(s,function(B){return y.test(B.airportDetails.country.pinyin)
});
v=h.filter(s,function(B){return y.test(B.airportDetails.city.code)
});
o=h.filter(s,function(B){return y.test(B.airportDetails.city.defaultName)
});
n=h.filter(s,function(B){return y.test(B.airportDetails.defaultAirportShortName)
});
l=h.filter(s,function(B){return y.test(B.airportDetails.country.defaultName)
});
return h.union(A,x,v,w,m,u,z,p,o,n,l)
};
var f=function(o,q){var p=new RegExp(j.ui.autocomplete.escapeRegex(o.term),"i");
var v=new RegExp(k+j.ui.autocomplete.escapeRegex(o.term),"i");
var x=[];
var u=[];
var r=[];
var w=[];
var s=[];
var n=[];
var m=[];
var l=[];
x=h.filter(q,function(y){return p.test(y.airportDetails.city.name)
});
u=h.filter(q,function(y){return p.test(y.airportDetails.airportShortName)
});
r=h.filter(q,function(y){return v.test(y.airportCode)
});
w=h.filter(q,function(y){return p.test(y.airportDetails.country.name)
});
s=h.filter(q,function(y){return v.test(y.airportDetails.city.code)
});
n=h.filter(q,function(y){return v.test(y.airportDetails.city.defaultName)
});
m=h.filter(q,function(y){return v.test(y.airportDetails.defaultAirportShortName)
});
l=h.filter(q,function(y){return v.test(y.airportDetails.country.defaultName)
});
return h.union(x,s,u,r,w,n,m,l)
};
var g=function(o,p){var u=new RegExp(k+j.ui.autocomplete.escapeRegex(o.term),"i");
var w=[];
var s=[];
var q=[];
var v=[];
var r=[];
var n=[];
var m=[];
var l=[];
w=h.filter(p,function(x){return u.test(x.airportDetails.city.name)
});
s=h.filter(p,function(x){return u.test(x.airportDetails.airportShortName)
});
q=h.filter(p,function(x){return u.test(x.airportCode)
});
v=h.filter(p,function(x){return u.test(x.airportDetails.country.name)
});
r=h.filter(p,function(x){return u.test(x.airportDetails.city.code)
});
if(window.CX.global.currentLanguage.toLowerCase()!=="en"){n=h.filter(p,function(x){return u.test(x.airportDetails.city.defaultName)
});
m=h.filter(p,function(x){return u.test(x.airportDetails.defaultAirportShortName)
});
l=h.filter(p,function(x){return u.test(x.airportDetails.country.defaultName)
})
}return h.union(w,r,s,q,v,n,m,l)
};
return{run:function(m,n){var l=[];
if(window.CX.global.currentLanguage.toLowerCase()==="sc"&&window.CX.global.currentRegion.toLowerCase()==="cn"){l=i(m,n)
}else{if(window.CX.global.currentLanguage.toLowerCase()==="zh"||window.CX.global.currentLanguage.toLowerCase()==="ja"||window.CX.global.currentLanguage.toLowerCase()==="ko"){l=f(m,n)
}else{l=g(m,n)
}}return l
}}
});
e("flightSearchTypeahead",["require","jquery","lodash","modernizr","moment","jquery.cookie","breakpoints","flightSearchTypeaheadFilter","geoLocationServices"],function(i){var k=i("jquery");
var p=i("lodash");
var j=i("modernizr");
var q=i("moment");
var f=i("jquery.cookie");
var m=i("breakpoints");
var g=i("flightSearchTypeaheadFilter");
var l=i("geoLocationServices");
var o=function(){return k("html").hasClass("less-than-ie9")
};
var h=function(r){if(!j.input.placeholder){Placeholders.enable(r[0])
}};
var n=function(ar,ag,aj,am,ad,O,J,W){var N;
var an;
var L;
var ab;
var D;
var x;
var P;
var ac;
var A=6;
var au=".json";
var F;
var ah=[];
var B;
var S;
var v;
var E={autocompleteActive:"ui-connector-field-group",autocompleteClass:"ui-cx-autocomplete"};
var av={minLength:1,delay:0,};
var C=function(aw){var ax=aw.siblings("."+E.autocompleteClass);
var az=ax.find("li");
var ay="auto";
if(az.length>A){ay=0;
az.slice(0,A).each(function(){ay+=k(this).outerHeight()
})
}ax.css({height:ay,width:(m.isLargeUp())?"177%":"100%",top:"auto"})
};
var G=function(aw,ax){k(this).after('<span class="'+E.autocompleteActive+'"></span>');
C(k(this))
};
var z=function(aw,ax){k(this).siblings("."+E.autocompleteActive).remove()
};
var al=function(aw,ax){aw.preventDefault()
};
var I=function(aw,ax){if(ax.item===null){N.val("").data("airport-code","");
an.val("").data("airport-code","");
s(an);
an.attr("disabled",true);
h(N);
h(an)
}};
var ak=function(aw,ax){if(ax.item!==null&&ax.item.airportCode!==N.data("airport-code")){N.val("").data("airport-code",ax.item.airportCode);
an.val("").data("airport-code","");
an.attr("disabled",true);
s(ag);
r(ax.item.excludeInfants);
M(ax.item.airportCode);
u(ax.item.airportCode);
h(an)
}};
var V=function(aw,ax){if(ax.item===null){an.val("").data("airport-code","");
h(an)
}};
var ae=function(aw,ax){if(ax.item!==null){an.val("").data("airport-code",ax.item.airportCode)
}};
var at=function(aw){an.autocomplete("search")
};
var w=function(aw){C(N);
C(an)
};
var y=function(aw){if(!o()){this.selectionStart=0;
this.selectionEnd=this.value.length;
k(this).mouseup(function(ax){ax.preventDefault();
k(this).unbind("mouseup")
})
}else{k(this).select()
}};
var R=function(ax){var aw=k(ax.target);
if(ax.which===13){aw.blur().focus()
}};
var K=function(aw){if(aw.originalEvent.persisted){X()
}};
var Z=function(az,aw){var ay=this.element.val();
var aA=new RegExp(k.ui.autocomplete.escapeRegex(ay),"ig");
var ax=aw.label.replace(aA,"<b>$&</b>");
return k("<li></li>").data("item.autocomplete",aw).append(k("<a></a>").html(ax)).appendTo(az)
};
var U=function(az,ax){var aA=this;
var ay=this.element.val();
var aw="";
k.each(ax,function(aB,aC){if((ay===null||ay==="")&&aC.category&&aC.category!==aw){az.append('<li class="ui-menu-title">'+aC.category+"</li>");
aw=aC.category
}aA._renderItemData(az,aC)
})
};
var aa=function(aw){var ax=p.findIndex(ah,{airportCode:aw});
var ay;
if(ax!==-1){ay=ah[ax];
N.val(ay.value);
N.data("airport-code",ay.airportCode);
an.val("");
an.data("airport-code","");
M(ay.airportCode);
u(ay.airportCode);
r(ay.excludeInfants);
h(an)
}};
var aq=function(aA){var aB=ab.data("dp-preferred-duration");
var aH=ab.data("dp-preferred-period");
var az=CX.calendar.formats.form;
var ax=q(aA,az);
var aG=ax;
var aF=af(ab,CX.calendar);
var aw=q(aG,az).add(aF,"days");
var aD;
var aE=0;
if(!(p.isUndefined(aH))&&aH.length>0){var aI=aH.length;
var ay;
var aC;
for(;
aE<aI;
aE++){ay=q(aH[aE].startDate,az);
aC=q(aH[aE].endDate,az);
if(ax.isSame(ay)||ax.isBetween(ay,aC)||ax.isSame(aC)){aG=ax;
break
}else{if(ax.isBefore(ay)){aG=ay;
break
}}}}aD=q(aG,az).add(aB,"days");
if(aD.isAfter(aw)){aD=aw
}return{from:aG.format(az),to:aD.format(az)}
};
var Q=function(az,ay){var aw=[ay.getFullYear(),ay.getMonth()+1,ay.getDate()].join("-");
var ax=aq(aw);
if(p.isUndefined(ab.data("isDefaultDate"))){az.$overlay.on("select.calendar",function(){ab.data("isDefaultDate",false)
});
az.setDates(ax);
az.setSummaryValue("from",ax.from);
az.setSummaryValue("to",ax.to)
}};
var af=function(ax,aw){var ay=ax.data("datePickerId");
switch(ay){case"book-hotel":case"book-hotel-subsidiary":return aw.maxDate.hotel;
default:return aw.maxDate.standard
}};
var u=function(ay){var ax;
if(D.requireTimeZone){ax=k.data(ab[0],"datePicker");
if(ab){var aw=af(ab,CX.calendar);
ax.calendar.setMaxDate(P.calculateMaxTimeZoneOffset(ay,aw));
ax.calendar.setMinDate(P.calculateMinTimeZoneOffset(ay));
Q(ax,P.calculateMinTimeZoneOffset(ay))
}}};
var r=function(aw){var ax=L.closest(".field-group");
if(aw){ax.addClass("is-display-none");
L.val("0").trigger("change.updateButtonSummary")
}else{ax.removeClass("is-display-none")
}};
var ai=function(ax){var ay=-1;
var aw=[];
var aA;
var az=k.cookie("recentDestinations");
if(!p.isUndefined(az)){az=az.split(",");
az.reverse();
p.forEach(az,function(aB){ay=p.findIndex(ax,{airportCode:aB});
if(ay!==-1){aA=ax[ay];
aA.category=F;
aw.push(aA)
}})
}return aw
};
var T=function(){var ax=N.data("od-preferred-origin");
var aw=an.data("od-preferred-destination");
if(!p.isUndefined(ax)&&!p.isEmpty(ax)){S=ax
}if(!p.isUndefined(aw)&&!p.isEmpty(aw)){v=aw
}};
var Y=function(){var az=decodeURIComponent(window.location.search);
if(az!==""){var aw=az.slice(az.indexOf("?")+1).split("&");
var ay=aw.length;
var aB=[];
var aA;
var ax=0;
for(;
ax<ay;
ax++){aA=aw[ax].split("=");
aB[aA[0]]=aA[1]
}if(aB["ORIGIN[1]"]!==""&&aB["ORIGIN[1]"]!=="undefined"){S=aB["ORIGIN[1]"]
}if(aB["DESTINATION[1]"]!==""&&aB["DESTINATION[1]"]!=="undefined"){v=aB["DESTINATION[1]"]
}}};
var M=function(ax){var aC=D.endPoints.destination;
var aB=aC.indexOf(au);
var az=[];
var aw=-1;
var aA={};
aC=aC.slice(0,aB)+"."+ax+aC.slice(aB);
var ay=k.ajax({type:"GET",url:aC,contentType:"application/json; charset=utf-8",dataType:"json"});
k.when(ay).done(function(aD){az=aD.airports;
an.attr("disabled",false);
aA={source:function(aF,aE){if(aF.term!==""){aE(g.run(aF,az))
}else{aE(ai(az))
}}};
an.autocomplete("option",aA).autocomplete("enable");
if(!p.isUndefined(v)&&v!==""){aw=p.findIndex(az,{airportCode:v});
if(aw!==-1){an.val(az[aw].value).data("airport-code",az[aw].airportCode)
}}})
};
var s=function(ax){var aw={source:"",disabled:true};
ax.autocomplete("option",aw)
};
var X=function(){var aA=D.endPoints.origin;
var az={};
var aw="";
var aD=k.ajax({type:"GET",url:aA,contentType:"application/json; charset=utf-8",dataType:"json"});
var ay=P.getDeferred();
var aB=ac.getDeferred();
var ax=x.getDeferred();
var aC=k(".booking-modules").data("section")==="book-panel-offer-detail";
k.when(aD,aB,ax,ay).done(function(aF,aE,aH,aG){B=aF[0].defaultDeparturePort;
ah=aF[0].airports;
az={source:function(aJ,aI){aI(g.run(aJ,ah))
}};
N.autocomplete("option",az).autocomplete("enable");
if(!p.isUndefined(S)&&S!==""){aa(S)
}else{if(aE.byAkamai===true||aE.byHTML5===true){aw=l.getNearestAirport();
aa(aw.code)
}else{aa(B)
}}})
};
var H=function(){var ax={autoFocus:true,minLength:1,delay:0,open:G,close:z,focus:al};
var aw={appendTo:N.parent(),change:I,select:ak};
var ay={minLength:0,appendTo:an.parent(),change:V,select:ae};
N.autocomplete(k.extend({},ax,aw));
an.autocomplete(k.extend({},ax,ay));
N.autocomplete({}).data("ui-autocomplete")._renderItem=Z;
N.autocomplete({}).data("ui-autocomplete")._renderMenu=U;
an.autocomplete({}).data("ui-autocomplete")._renderItem=Z;
an.autocomplete({}).data("ui-autocomplete")._renderMenu=U;
N.autocomplete("widget").addClass(E.autocompleteClass);
an.autocomplete("widget").addClass(E.autocompleteClass);
s(N);
s(an)
};
var ap=function(){N.on("click",y).on("keypress",R);
ag.on("click",y).on("keypress",R).on("focusin",at);
k(window).on("resize.onResizeWindow",p.debounce(w,10)).on("pageshow.onReloadOriginTypeahead",K)
};
var ao=function(aC,aB,ax,aA,aw,az,aD,ay){N=aC;
an=aB;
L=ax;
ab=aA;
D=ay;
P=aD;
ac=aw;
x=az;
l.init(aw,x);
F=an.data("recentLabel");
Y();
T();
H();
ap();
X()
};
if(ar.length>0&&ag.length>0&&aj.length>0&&am.length>0){ao(ar,ag,aj,am,ad,O,J,W)
}};
return n
});
e("trpSearchTypeaheadFilter",["jquery","lodash"],function(h,f){var i="(?:^|\\s|\\()";
var g=function(m){var k=[];
var l={};
var j;
m=m.replace(/^\s+|\s+$/g,"").replace("<ul>","").replace("</ul>","");
j=h.parseHTML(m);
f.each(j,function(n){l={};
l.id=n.getAttribute("id");
l.name=n.getAttribute("name");
l.gw=n.getAttribute("gw").toUpperCase();
l.country=n.getAttribute("country");
l.label=n.innerHTML;
l.value=l.label;
k.push(l)
});
return k
};
return{runMatchWord:function(l,m){var k=new RegExp(i+h.ui.autocomplete.escapeRegex(l),"i");
var j=f.filter(m,function(n){return k.test(n.label)
});
return j
},runCheckCharacterExist:function(k,l){var j=f.filter(l,function(m){return m.value.toLowerCase().indexOf(k.toLowerCase())>=0
});
return j
},parseResponseIntoJSON:g}
});
e("trpSearchTypeahead",["require","jquery","lodash","moment","modernizr","breakpoints","trpSearchTypeaheadFilter","geoLocationServices"],function(h){var j=h("jquery");
var o=h("lodash");
var p=h("moment");
var i=h("modernizr");
var k=h("breakpoints");
var f=h("trpSearchTypeaheadFilter");
var l=h("geoLocationServices");
var g=function(q){if(!i.input.placeholder){Placeholders.enable(q[0])
}};
var n=function(){return j("html").hasClass("less-than-ie9")
};
var m=function(ad,V,al,ac,Q,K,W){var M;
var q;
var aa;
var C;
var ab;
var y;
var T;
var r=new j.Deferred();
var ae=[];
var L={};
var x="";
var Z=new j.Deferred();
var ag=6;
var E={autocompleteActive:"ui-connector-field-group",autocompleteClass:"ui-cx-autocomplete"};
var B=function(ao){var ap=ao.siblings("."+E.autocompleteClass);
var ar=ap.find("li");
var aq="auto";
if(ar.length>ag){aq=0;
ar.slice(0,ag).each(function(){aq+=j(this).outerHeight()
})
}ap.css({height:aq,width:(k.isLargeUp())?"177%":"100%",top:"auto"})
};
var aj=function(ao,ap){ao.preventDefault()
};
var G=function(ao,ap){j(this).after('<span class="'+E.autocompleteActive+'"></span>');
B(j(this))
};
var z=function(ao,ap){j(this).siblings("."+E.autocompleteActive).remove()
};
var Y=function(ar,ao){var aq=this.element.val().replace(/^\s+|\s+$/g,"");
var at=new RegExp(j.ui.autocomplete.escapeRegex(aq),"ig");
var ap=ao.label.replace(at,"<b>$&</b>");
return j("<li></li>").data("item.autocomplete",ao).append(j("<a></a>").html(ap)).appendTo(ar)
};
var w=function(ao,ap){if(ap.item===null){M.val("");
q.val("").trigger("change",[{airportCode:""}]);
g(M)
}};
var D=function(ao,ap){if(ap.item!==null){q.val(ap.item.id).trigger("change",[{airportCode:ap.item.gw}]);
P(ap.item.gw)
}};
var v=function(ao){B(M)
};
var N=function(ao){if(!n()){this.selectionStart=0;
this.selectionEnd=this.value.length;
j(this).mouseup(function(ap){ap.preventDefault();
j(this).unbind("mouseup")
})
}else{j(this).select()
}};
var U=function(ap){var ao=j(ap.target);
if(ap.which===13){ao.blur().focus()
}};
var S=function(ao){if(ao.originalEvent.persisted){X()
}};
var af=function(ap,ao){var aq=ap.data("datePickerId");
switch(aq){case"book-hotel":case"book-hotel-subsidiary":return ao.maxDate.hotel;
default:return ao.maxDate.standard
}};
var u=function(aq){var ap;
if(C.requireTimeZone){ap=j.data(al[0],"datePicker");
if(al){var ao=af(al,CX.calendar);
ap.calendar.setMaxDate(T.calculateMaxTimeZoneOffset(aq,ao));
ap.calendar.setMinDate(T.calculateMinTimeZoneOffset(aq));
R(ap,T.calculateMinTimeZoneOffset(aq))
}}};
var R=function(au,at){var ar=au.$el;
var av=ar.data("dp-preferred-duration");
if(o.isUndefined(ar.data("isDefaultDate"))){au.$overlay.on("select.calendar",function(){ar.data("isDefaultDate",false)
});
var aq=CX.calendar.formats.form;
var ao=p(at).format(aq);
var ap=p(at).add(av,"days").format(aq);
au.setDates({from:ao,to:ap})
}};
var ai=function(ap){var ao;
var aq=-1;
if(C.enablePreloading){j.when(r).done(function(){aq=o.findIndex(ae,{gw:ap});
if(aq!==-1){var ar=T.getDeferred();
var at=j.data(al[0],"datePicker");
M.val(ae[aq].label);
q.val(ae[aq].id).trigger("change",[{airportCode:ae[aq].gw}]);
P(ae[aq].gw);
j.when(ar).done(function(au){R(at,T.calculateMinTimeZoneOffset(ae[aq].gw))
})
}})
}else{ao=ah("GET",ap);
ao.done(function(aw,at,au){var ar=f.parseResponseIntoJSON(aw);
aq=o.findIndex(ar,{gw:ap});
if(aq!==-1){var av=T.getDeferred();
var ax=j.data(al[0],"datePicker");
M.val(ar[aq].label);
q.val(ar[aq].id).trigger("change",[{airportCode:ar[aq].gw}]);
P(ar[aq].gw);
j.when(av).done(function(ay){R(ax,T.calculateMinTimeZoneOffset(ar[aq].gw))
})
}})
}};
var A=function(){var at=y.getDeferred();
var aq=ab.getDeferred();
var ap;
var ao={};
var au=-1;
var ar;
j.when(at,aq).done(function(aw,av){if(av.byAkamai===true||av.byHTML5===true){ap=l.getNearestAirport();
ai(ap.code)
}})
};
var ak=function(){if(!o.isUndefined(C.defaultAirportCode)&&C.defaultAirportCode!==""){ai(C.defaultAirportCode)
}else{if(C.importGeolocataion){A()
}}};
var ah=function(at,aq){var ap;
var ao;
var ar={};
ar={searchableOnly:C.searchableOnly,language:C.language,ajaxSearch:aq.toLowerCase()};
ap=C.domainPart+"&"+j.param(ar);
ao=j.ajax({url:ap,dataType:"html",type:at});
return ao
};
var I=function(ar,ap){var ao=ar.term.replace(/^\s+|\s+$/g,"").toLowerCase();
var aq=ao.slice(0,C.minLength);
if(aq.length>=C.minLength){j.when(r).done(function(){ap(f.runMatchWord(ao,ae))
})
}};
var O=function(ar,ap){var ao=ar.term.replace(/^\s+|\s+$/g,"").toLowerCase();
var aq=ao.slice(0,C.minLength);
if(aq.length>=C.minLength){if(!o.isUndefined(L[aq])){ap(f.runCheckCharacterExist(ao,L[aq]));
Z=new j.Deferred()
}else{if((Z.state()==="pending"&&x!==aq)||Z.state()!=="pending"&&x!==aq){Z=new j.Deferred();
x=aq;
Z=ah("GET",aq);
Z.done(function(aw,au,av){var at=f.parseResponseIntoJSON(aw);
L[aq]=at;
ap(f.runCheckCharacterExist(ao,at));
M.autocomplete("search")
})
}}}else{M.autocomplete("close")
}};
var P=function(ao){if(C.requireTimeZone){u(ao)
}};
var X=function(){var ap;
var aq=[];
var ao={source:(C.enablePreloading)?I:O};
M.autocomplete("option",ao).autocomplete("enable")
};
var s=function(ap){var ao={source:"",disabled:true};
ap.autocomplete("option",ao)
};
var H=function(){var ao={autoFocus:true,delay:0,focus:aj,open:G,close:z,minLength:C.minLength,appendTo:M.parent(),change:w,select:D};
M.autocomplete(ao);
M.autocomplete("widget").addClass(E.autocompleteClass);
M.autocomplete({}).data("ui-autocomplete")._renderItem=Y;
s(M)
};
var an=function(){M.on("click",N).on("keypress",U);
j(window).on("resize.onResizeTRPTypeahead",o.debounce(v,10)).on("pageshow.onReloadInputTypeahead",S)
};
var J=function(){var ao=ah("GET","");
var ap=window.CX.global.countryAirports;
ao.done(function(at,aq,ar){if(C.doFilterList&&!o.isEmpty(ap)){var au=f.parseResponseIntoJSON(at);
ae=o.filter(au,function(av){return o.contains(ap,av.gw.toUpperCase())
})
}else{ae=f.parseResponseIntoJSON(at)
}r.resolve();
ak()
})
};
var am=function(){if(C.enablePreloading){J()
}else{ak()
}H();
an();
X()
};
var F=function(av,au,ar,ao,aq,at,ap){M=av;
q=au;
aa=ar;
y=aq;
ab=ao;
T=at;
C=ap;
l.init(ao,aq);
am()
};
if(ad.length>0&&V.length>0){F(ad,V,al,ac,Q,K,W)
}};
return m
});
e("htmlTemplates",["jquery","lodash"],function(h,g){var i='<% _.forEach(messages, function(message) { %><div class="error"><i class="icon icon-warning" aria-hidden="true" lang="en"></i><span class="error-description"><%= message %></span></div><% }); %>';
var f='<div class="error"><i class="icon icon-warning" aria-hidden="true" lang="en"></i><span class="error-description"><%= message %></span></div>';
return{error:function(){return f
},errors:function(){return i
}}
});
function d(f){var j=[],l=0,n=0,m=0,k=0,h=0,g=0;
f+="";
while(l<f.length){m=f.charCodeAt(l);
if(m<=191){j[n++]=String.fromCharCode(m);
l++
}else{if(m<=223){k=f.charCodeAt(l+1);
j[n++]=String.fromCharCode(((m&31)<<6)|(k&63));
l+=2
}else{if(m<=239){k=f.charCodeAt(l+1);
h=f.charCodeAt(l+2);
j[n++]=String.fromCharCode(((m&15)<<12)|((k&63)<<6)|(h&63));
l+=3
}else{k=f.charCodeAt(l+1);
h=f.charCodeAt(l+2);
g=f.charCodeAt(l+3);
m=((m&7)<<18)|((k&63)<<12)|((h&63)<<6)|(g&63);
m-=65536;
j[n++]=String.fromCharCode(55296|((m>>10)&1023));
j[n++]=String.fromCharCode(56320|(m&1023));
l+=4
}}}}return j.join("")
}e("UTF8Decoder",function(){});
e("flightPanelHandler",["require","jquery","lodash","moment","htmlTemplates","UTF8Decoder"],function(o){var l=o("jquery");
var J=o("lodash");
var H=o("moment");
var A=o("htmlTemplates");
var F=o("UTF8Decoder");
var g;
var v;
var M;
var L;
var u;
var I;
var h;
var B;
var p;
var q;
var x;
var y=function(){var N=[];
if(window.location.hash){var O=decodeURIComponent(window.location.hash);
N=O.slice(O.indexOf("#")+1).split("#")
}return N[0]
};
var i=function(P,V){var N=decodeURIComponent(P);
var Y=N.slice(N.indexOf(V)+1).split("&");
var O=Y.length;
var Q=[];
var X=[];
var S=[];
var R={};
var U;
var W="";
var T=0;
for(;
T<O;
T++){R={};
W="";
U=Y[T].split("=");
if(/^ERRORCODE.*$/i.test(Y[T])){W=U[0].match(/[^[\]]+(?=])/g);
R[W[0]]={code:U[1]};
Q.push(R)
}else{if(/^ERRORMSG.*$/i.test(Y[T])){W=U[0].match(/[^[\]]+(?=])/g);
R[W[0]]={message:d(U[1]).replace(/\+/g," ")};
X.push(R)
}else{S[U[0]]=U[1]
}}}q=J.merge({},Q,X);
return S
};
var k=function(){var R=g.closest(".book-trip");
var P=A.errors();
var Q=A.error();
var O=x.endPoint;
var S=".JSON";
var N=O.indexOf(S);
J.forEach(q,function(T){J.forEach(T,function(V){if(!J.isUndefined(V.code)){if(/^ibe_.*$/i.test(V.code)){if(N>-1){O=O.slice(0,N)+"."+V.code.toLowerCase()+O.slice(N);
var U=l.ajax(O,{type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
U.done(function(W){p.append(J.template(P,{messages:W.errorMessages}))
})
}}else{p.append(J.template(Q,{message:V.message}))
}}})
});
if(R.hasClass("flight-only")){R.find(".button-show").trigger("click")
}else{R.find('input[name="trip-type"]').first().trigger("change")
}};
var n=function(){var O=i(window.location.search,"?");
var P=null;
var N=null;
if(!J.isUndefined(O.ACTION)){if(!J.isEmpty(q)){k()
}if(!J.isEmpty(O.DEPARTUREDATE)){P=O.DEPARTUREDATE
}else{if(!J.isEmpty(O["DEPARTUREDATE[1]"])){P=O["DEPARTUREDATE[1]"]
}}if(!J.isEmpty(O.ARRIVALDATE)){N=O.ARRIVALDATE
}else{if(!J.isEmpty(O["ARRIVALDATE[1]"])){N=O["ARRIVALDATE[1]"]
}}j(O.TRIPTYPE,O.FLEXIBLEDATE,P,N);
K(O.CABINCLASS);
E(O.ADULT,O.CHILD,O.INFANT)
}};
var G=function(N){var O="";
switch(N.toLowerCase()){case"first":O="F";
break;
case"business":O="C";
break;
case"premiumeconomy":O="W";
break;
case"economy":O="Y";
break
}return O
};
var D=function(){var N=y();
if(!J.isEmpty(N)){var O=G(N);
if(!J.isEmpty(O)){K(O)
}}};
var j=function(N,Q,O,P){var S=null;
var R=null;
if(!J.isUndefined(O)&&O!==null){S=O.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3")
}if(!J.isUndefined(P)&&P!==null){R=P.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3")
}M.filter('[value="'+N+'"]').prop("checked",true).trigger("change");
if(Q==="true"){v.prop("checked",true)
}else{v.prop("checked",false)
}L.data("datePicker").setDates({from:S,to:R});
L.data("isDefaultDate",false)
};
var K=function(N){u.filter('[value="'+N+'"]').prop("checked",true).trigger("change")
};
var E=function(O,N,P){I.val(O).trigger("change");
h.val(N).trigger("change");
B.val(P).trigger("change")
};
var C=function(Q,N){var O="";
var P=A.errors();
if(!J.isEmpty(Q)){O=J.template(P,{messages:Q})
}N.find(".error-message-container").html(O);
N.find(".error-message-container-medium-up").html(O)
};
var f=function(O){var N=true;
if(J.isEmpty(O.val())||J.isEmpty(O.data("airportCode"))){N=false
}return N
};
var m=function(P,O){var N=true;
if(O==="O"){if(J.isNull(P.data("datePicker").dates.from)){N=false
}}else{if(J.isNull(P.data("datePicker").dates.from)||J.isNull(P.data("datePicker").dates.to)){N=false
}}return N
};
var z=function(N){var S=N.find('input[name="depart-label"]');
var R=N.find('input[name="destination-label"]');
var Q=N.find(".button-date-picker");
var O=N.find('input[name="round-trip"]:checked').val();
var T=[];
var P=true;
S.removeClass("has-error");
R.removeClass("has-error");
Q.removeClass("has-error");
if(!f(S)){S.addClass("has-error");
T.push(x.origin);
P=false
}if(!f(R)){R.addClass("has-error");
T.push(x.destination);
P=false
}if(!m(Q,O)){Q.addClass("has-error");
T.push(x.date);
P=false
}C(T,N);
return P
};
var r=function(N){if(N.which===13){l(N.target).closest(".trip-form").trigger("submit");
N.preventDefault()
}};
var s=function(O){var N=l(O.target);
if(!z(N)){O.preventDefault()
}};
var w=function(O,N){x=N;
if(O.closest(".book-trip").data("role")==="home"){g=O;
v=O.find('input[name="flexible-dates"]');
M=O.find('input[name="round-trip"]');
L=O.find(".button-date-picker");
u=O.find('input[name="cabin-class"]');
I=O.find('select[name="passenger-adults"]');
h=O.find('select[name="passenger-children"]');
B=O.find('select[name="passenger-infants"]');
p=g.find(".error-message-container,.error-message-container-medium-up");
n();
D()
}J.each(O,function(P){l(P).find(".trip-form").on("submit",s).on("keypress",'input[name="depart-label"]',r).on("keypress",'input[name="destination-label"]',r)
})
};
return{init:function(O,N){if(!J.isEmpty(O)){w(O,N)
}}}
});
e("hotelPanelHandler",["jquery","lodash","moment","htmlTemplates"],function(l,r,u,n){var q;
var v;
var k={targetUrl:"targetUrl",encodedFormElements:"encodedFormElement"};
var h=function(z,x){var w="";
var y=n.errors();
if(!r.isEmpty(z)){w=r.template(y,{messages:z})
}x.find(".error-message-container").html(w);
x.find(".error-message-container-medium-up").html(w)
};
var g=function(y,x){var w=true;
if(r.isEmpty(y.val())||r.isEmpty(x.val())){w=false
}return w
};
var p=function(y){var A=y.find('input[name="DES-layout"]');
var w=y.find('input[name="DES"]');
var x=y.find(".button-date-picker");
var B=[];
var z=true;
A.removeClass("has-error");
x.removeClass("has-error");
if(!g(A,w)){A.addClass("has-error");
B.push(v.errorMessages.destination);
z=false
}if(r.isNull(x.data("datePicker").dates.from)||r.isNull(x.data("datePicker").dates.to)){x.addClass("has-error");
B.push(v.errorMessages.date);
z=false
}h(B,y);
return z
};
var s=function(w){var x=w.serialize();
sessionStorage.setItem(k.targetUrl,w.attr("action"));
sessionStorage.setItem(k.encodedFormElements,x)
};
var m=function(){sessionStorage.removeItem(k.targetUrl);
sessionStorage.removeItem(k.encodedFormElements)
};
var o=function(){window.location.href=v.endPoints.interstitial
};
var f=function(w){if(w.which===13){l(w.target).closest(".hotel-form").trigger("submit");
w.preventDefault()
}};
var j=function(x){var w=l(x.target);
if(!p(w)){x.preventDefault()
}else{if(typeof(Storage)!=="undefined"){s(w);
o();
x.preventDefault()
}}};
var i=function(x,w){v=w;
m();
r.each(x,function(y){l(y).find(".hotel-form").on("submit",j).on("keypress",'input[name="DES-layout"]',f)
})
};
return{init:function(x,w){if(!r.isEmpty(x)){i(x,w)
}}}
});
e("packagePanelHandler",["jquery","lodash","moment","htmlTemplates"],function(l,r,u,n){var g;
var v;
var k={targetUrl:"targetUrl",encodedFormElements:"encodedFormElement"};
var i=function(z,w){var x="";
var y=n.errors();
if(!r.isEmpty(z)){x=r.template(y,{messages:z})
}w.find(".error-message-container").html(x);
w.find(".error-message-container-medium-up").html(x)
};
var h=function(y,x){var w=true;
if(r.isEmpty(y.val())||r.isEmpty(x.val())){w=false
}return w
};
var q=function(x){var C=x.find('input[name="ORI-layout"]');
var B=x.find('input[name="ORI"]');
var A=x.find('input[name="DES-layout"]');
var w=x.find('input[name="DES"]');
var y=x.find(".button-date-picker");
var D=[];
var z=true;
C.removeClass("has-error");
A.removeClass("has-error");
y.removeClass("has-error");
if(!h(C,B)){C.addClass("has-error");
D.push(v.errorMessages.origin);
z=false
}if(!h(A,w)){A.addClass("has-error");
D.push(v.errorMessages.destination);
z=false
}if(r.isNull(y.data("datePicker").dates.from)||r.isNull(y.data("datePicker").dates.to)){y.addClass("has-error");
D.push(v.errorMessages.date);
z=false
}i(D,x);
return z
};
var s=function(w){var x=w.serialize();
sessionStorage.setItem(k.targetUrl,w.attr("action"));
sessionStorage.setItem(k.encodedFormElements,x)
};
var m=function(){sessionStorage.removeItem(k.targetUrl);
sessionStorage.removeItem(k.encodedFormElements)
};
var o=function(){window.location.href=v.endPoints.interstitial
};
var f=function(w){if(w.which===13){l(w.target).closest(".trip-package-form").trigger("submit");
w.preventDefault()
}};
var p=function(x){var w=l(x.target);
if(!q(w)){x.preventDefault()
}else{if(typeof(Storage)!=="undefined"){s(w);
o();
x.preventDefault()
}}};
var j=function(x,w){v=w;
m();
r.each(x,function(y){l(y).find(".trip-package-form").on("submit",p).on("keypress",'input[name="ORI-layout"]',f).on("keypress",'input[name="DES-layout"]',f)
})
};
return{init:function(x,w){if(!r.isEmpty(x)){j(x,w)
}}}
});
e("bookTripPanel",["require","jquery","lodash","flightSearchTypeahead","trpSearchTypeahead","flightPanelHandler","hotelPanelHandler","packagePanelHandler"],function(i){var l=i("jquery");
var q=i("lodash");
var m=i("flightSearchTypeahead");
var f=i("trpSearchTypeahead");
var k=i("flightPanelHandler");
var o=i("hotelPanelHandler");
var n=i("packagePanelHandler");
var h;
var w;
var g;
var v;
var r=function(){var y=m(l("#depart-label"),l("#destination-label"),l("#passenger-infants"),l('[data-date-picker-id="book-trip"]'),w,h,g,v.flightSearch.originAndDestination);
var x=m(l("#depart-label-subsidiary"),l("#destination-label-subsidiary"),l("#passenger-infants-subsidiary"),l('[data-date-picker-id="book-trip-subsidiary"]'),w,h,g,v.flightSearch.originAndDestination);
k.init(l(".flight-booking-panel"),v.flightSearch.errorMessages)
};
var u=function(){var x=f(l("#hotel-destination-layout"),l("#hotel-destination"),"",w,h,g,v.hotelSearch);
var y=f(l("#hotel-destination-layout-subsidiary"),l("#hotel-destination-subsidiary"),"",w,h,g,v.hotelSearch);
o.init(l(".hotel-booking-panel"),{errorMessages:v.hotelSearch.errorMessages,endPoints:v.hotelSearch.endPoints})
};
var p=function(){var z=f(l("#package-depart-layout"),l("#package-depart"),l('[data-date-picker-id="book-package"]'),w,h,g,v.packageSearch.origin);
var A=f(l("#package-depart-layout-subsidiary"),l("#package-depart-subsidiary"),l('[data-date-picker-id="book-package-subsidiary"]'),w,h,g,v.packageSearch.origin);
var y=f(l("#package-destination-layout"),l("#package-destination"),"",w,h,g,v.packageSearch.destination);
var x=f(l("#package-destination-layout-subsidiary"),l("#package-destination-subsidiary"),"",w,h,g,v.packageSearch.destination);
n.init(l(".package-booking-panel"),{errorMessages:v.packageSearch.errorMessages,endPoints:v.packageSearch.endPoints})
};
var s=function(){r();
u();
p()
};
var j=function(z,x,A,y){h=z;
w=x;
g=A;
v=y;
s()
};
return{init:function(z,x,A,y){j(z,x,A,y)
}}
});
e("interstitialPage",["jquery","lodash"],function(k,q){var n;
var s;
var i={targetUrl:"targetUrl",encodedFormElements:"encodedFormElement"};
var f=function(){var v=sessionStorage.getItem(i.targetUrl);
var u=sessionStorage.getItem(i.encodedFormElements);
if(document.readyState==="complete"){clearInterval(n);
m();
if(v!==null){if(u!==null){window.location.href=v+"?"+u
}else{window.location.href=v
}}}};
var r=function(u){sessionStorage.setItem(i.targetUrl,u)
};
var m=function(){sessionStorage.removeItem(i.targetUrl);
sessionStorage.removeItem(i.encodedFormElements)
};
var o=function(u){if(u){window.open(s.endPoints,"_blank")
}else{window.location.href=s.endPoints
}};
var j=function(v){var u=false;
if(typeof(Storage)!=="undefined"){r(k(this).attr("href"));
if(!q.isNull(k(this).attr("target"))&&k(this).attr("target")==="_blank"){u=true
}o(u);
v.preventDefault()
}};
var l=function(u){if(u.which===13||u.which===32){u.preventDefault();
j(u)
}};
var p=function(){n=setInterval(f,100)
};
var h=function(){k("body").on("click","a.trp-link",j).on("keypress","a.trp-link",l)
};
var g=function(u){h();
p();
s=u
};
return{init:function(u){g(u)
}}
});
e("anchoring",["jquery","lodash","breakpoints"],function(j,m,k){var l;
var h={bookTripOnNav:"nav-book-trip",bookTripPanel:"book-trip-panel",isHome:"is-home"};
var f;
var n=function(){var r=f.hash;
var u=[];
var q;
var s;
var p=0;
if(r!==""&&r!==undefined){r=r.slice(r.indexOf("#")+1).split("&");
q=r.length;
for(;
p<q;
p++){s=r[p].split("=");
u[s[0]]=s[1]
}}return u
};
var o=function(){var p=0;
var q=j("."+h.bookTripPanel);
p=q.offset().top;
if(k.isLargeUp()){p-=43
}else{if(k.isMedium()){p+=11
}}return p
};
var i=function(){var q=n();
var p;
if(q.panel!==undefined){p=j("#"+q.panel);
if(p.is(":radio")){p.prop("checked",true).trigger("change")
}setTimeout(function(){j("body, html").animate({scrollTop:o()},500)
})
}};
var g=function(p){l=p;
if(l.find("."+h.bookTripOnNav).hasClass(h.isHome)){i()
}};
return{init:function(q,p){if(!m.isEmpty(q)){f=p;
g(q)
}}}
});
e("guideProductPageOffers",["jquery","lodash","handlebars","geoLocationServices","matchHeight","modernizr","breakpoints"],function(k,n,g,m,h,i,l){var j={offerModules:'[class^="related-"][class$="offers"]',description:"description",multipleOrigins:"multiple-origins",destinationsListWrapper:"destinations-list-wrapper",destinationListTrigger:"destinations-list-trigger",destination:"destination",destinationList:"destination-list",offersDispaly:"offers-display",offersFallBack:"offers-fallback",offersList:"ul",offersWrapper:"offers-wrapper",progressBar:"progress-bar",progressBarFallBack:"progress-bar-fallback",progressBarDisabled:"progress-bar-disabled",progressBarFallBackDisabled:"progress-bar-fallback-disabled",addOns:"add-ons",addOnsShown:"add-ons-shown",blockGrid:"block-grid",matchHeight:"match-height"};
var f=function(B,y,H){var E;
var I;
var F;
var u;
var q;
var w;
var z=function(J){if(!k("html").hasClass("less-than-ie9")){var K=E.find("."+j.destinationListTrigger).width();
E.find("."+j.destinationList).width(K)
}};
var o=function(J){var K=k(j.offerModules).filter(function(){return k(this).attr("class")!==E.attr("class")
}).find("."+j.destinationList+' option[value="'+J+'"]').parent();
K.val(J);
K.trigger("change.triggerByAnotherOffer")
};
var s=function(L){var J=k(L.target);
var M=J.find("option:selected").val();
var K=J.find("option:selected").text();
D({portCode:M,cityName:K});
if(L.namespace!=="triggerByAnotherOffer"){o(M)
}};
var x=function(K){var J=K.filter("."+j.blockGrid+"."+j.matchHeight).find("."+j.offersWrapper);
if(l.isLargeUp()){J.matchHeight()
}k(window).on("resize",n.debounce(function(){if(l.isLargeUp()){J.matchHeight()
}else{J.matchHeight("remove")
}},300))
};
var D=function(K){K=!n.isEmpty(K)?K:!n.isEmpty(u)?u[0]:{portCode:F.find(j.offersList)[0].getAttribute("data-offer-origin"),cityName:""};
var J=F.find(j.offersList+'[data-offer-origin="'+K.portCode+'"]').clone();
E.find("."+j.progressBar).addClass(j.progressBarDisabled);
E.find("."+j.progressBarFallBack).addClass(j.progressBarFallBackDisabled);
I.find(j.offersList).remove();
E.find("."+j.destinationList).val(K.portCode);
E.find("."+j.destination).html(K.cityName);
J.appendTo(I);
if(J.hasClass(j.matchHeight)&&!i.flexbox){x(J)
}z()
};
var A=function(L){if(L.byAkamai===true||L.byHTML5===true){var J=m.calNearestAirportCityCode(u,{codeType:"cityCode"});
if(!n.isEmpty(J)){var K=n.filter(u,{portCode:J})[0];
D(K)
}else{var M=F.find(j.offersList)[0].getAttribute("data-offer-origin");
D()
}}E.find("."+j.addOns).addClass(j.addOnsShown)
};
var G=function(){E.find("."+j.progressBar).removeClass(j.progressBarDisabled);
E.find("."+j.progressBarFallBack).removeClass(j.progressBarFallBackDisabled);
var K=q.getDeferred();
var J=w.getDeferred();
if(!m.isUsedAkamaiLocation()&&!(K.state()==="resolved"&&J.state()==="resolved")){D()
}k.when(K,J).done(A)
};
var p=function(){E.on("change.triggerByAnotherOffer","."+j.destinationList,s)
};
var v=function(){if(u.length>1){E.find("."+j.description).addClass(j.multipleOrigins);
E.find("."+j.destinationsListWrapper).addClass(j.multipleOrigins)
}};
var r=function(){var K=E.find("."+j.destinationList+" option");
var J=[];
n.each(K,function(L){J.push({portCode:L.value,cityName:L.innerHTML})
});
return J
};
var C=function(){q=y;
w=H;
E=B;
I=E.find("."+j.offersDispaly);
F=E.find("."+j.offersFallBack);
u=r();
p();
v();
G()
};
C()
};
return{init:function(q,o,p){if(q.length>0){m.init(o,p);
f(q,o,p)
}}}
});
e("productHeader",["require","jquery","lodash","clickTouch","jquery.hammer","breakpoints"],function(p){var l=p("jquery");
var A=p("lodash");
var u=p("clickTouch");
var z=p("jquery.hammer");
var q=p("breakpoints");
var k;
var j;
var x={navigation:"navigation",subWrapperTrigger:"sub-wrapper-trigger",subWrapperTriggerActive:"js-trigger-active",subWrapper:"sub-wrapper",subWrapperActice:"js-sub-wrapper-active",iconDown:"icon-down",iconUp:"icon-up"};
var s=function(){k.attr("role","button").attr("aria-expanded","false");
j.attr("aria-labelledby",k.attr("id"))
};
var n=function(){if(q.isSmall()){k.attr("tabindex","0")
}else{k.attr("tabindex","-1");
k.blur()
}};
var w=function(){j.addClass(x.subWrapperActice);
k.attr("aria-expanded","true").addClass(x.subWrapperTriggerActive);
l(document).hammer().on(u+".productHeaderSubWrapper",o);
l(document).on("keyup.productHeader.onEscKeyPress",f)
};
var y=function(){j.removeClass(x.subWrapperActice);
k.attr("aria-expanded","false").removeClass(x.subWrapperTriggerActive);
if(q.isSmall()){k.focus()
}l(document).off(u+".productHeaderSubWrapper");
l(document).off("keyup.productHeader.onEscKeyPress")
};
var o=function(C){var B=l(C.target);
if(B.closest("."+x.subWrapper).length===0){y()
}};
var i=function(B){if(B.which===32||B.which===13){m(B)
}};
var m=function(B){if(j.hasClass(x.subWrapperActice)){y()
}else{w()
}if(!A.isUndefined(B.gesture)){B.gesture.stopPropagation()
}B.stopPropagation()
};
var f=function(B){if(B.which===27&&j.hasClass(x.subWrapperActice)){y()
}};
var h=function(B){n()
};
var g=function(){k.on("keypress",i);
k.hammer().on(u,m);
l(window).on("resize.onResizeSubWrapper",A.debounce(h,300))
};
var v=function(){s();
n()
};
var r=function(B){k=B.find("."+x.subWrapperTrigger);
j=B.find("."+x.subWrapper);
v();
g()
};
return{init:function(B){if(!A.isEmpty(B)){r(B)
}}}
});
e("pageTitleMenu",["require","jquery","lodash","clickTouch","jquery.hammer","breakpoints"],function(o){var k=o("jquery");
var A=o("lodash");
var u=o("clickTouch");
var z=o("jquery.hammer");
var p=o("breakpoints");
var j;
var q;
var x={menuWrapperTrigger:"menu-trigger",menuWrapperTriggerActive:"js-trigger-active",menuWrapper:"menu-wrapper",menuWrapperActice:"js-menu-active",iconDown:"icon-down",iconUp:"icon-up"};
var s=function(){j.attr("role","button").attr("aria-expanded","false");
q.attr("aria-labelledby",j.attr("id"))
};
var m=function(){if(p.isLarge()){j.attr("tabindex","-1")
}else{j.attr("tabindex","0");
j.blur()
}};
var w=function(){q.addClass(x.menuWrapperActice);
j.attr("aria-expanded","true").addClass(x.menuWrapperTriggerActive);
k(document).hammer().on(u+".productHeaderSubWrapper",n);
k(document).on("keyup.productHeader.onEscKeyPress",f)
};
var y=function(){q.removeClass(x.menuWrapperActice);
j.attr("aria-expanded","false").removeClass(x.menuWrapperTriggerActive);
if(p.isSmall()){j.focus()
}k(document).off(u+".productHeaderSubWrapper");
k(document).off("keyup.productHeader.onEscKeyPress")
};
var n=function(C){var B=k(C.target);
if(B.closest("."+x.menuWrapper).length===0){y()
}};
var i=function(B){if(B.which===32||B.which===13){l(B)
}};
var l=function(B){if(q.hasClass(x.menuWrapperActice)){y()
}else{w()
}if(!A.isUndefined(B.gesture)){B.gesture.stopPropagation()
}B.stopPropagation()
};
var f=function(B){if(B.which===27&&q.hasClass(x.menuWrapperActice)){y()
}};
var h=function(B){m()
};
var g=function(){j.on("keypress",i);
j.hammer().on(u,l);
k(window).on("resize.onResizeSubWrapper",A.debounce(h,300))
};
var v=function(){s();
m()
};
var r=function(B){j=B.find("."+x.menuWrapperTrigger);
q=B.find("."+x.menuWrapper);
v();
g()
};
return{init:function(B){if(!A.isEmpty(B)){r(B)
}}}
});
e("pageDetailshareWidget",["jquery","breakpoints","lodash"],function(j,k,p){var l;
var o;
var h={button:"share-button",addthisbutton:"addthis_button_more"};
var r="at3win";
var n=function(s){if(o.find(".icon").hasClass("icon-down")){o.find("."+h.button).find(".icon").removeClass("icon-down").addClass("icon-up")
}};
var q=function(u){var s=j("#"+r);
o.find("."+h.button).find(".icon").removeClass("icon-up").addClass("icon-down")
};
var m=function(u){var s=j(u.target);
if(s.closest(".addthis_button_more").length===0){q(u)
}};
var g=function(s){if(s.which===27){q(s)
}};
var i=function(){l.on("click","."+h.addthisbutton,n);
j("body").on("click.offers.addthis.close",m);
j("body").on("keyup.offers.addthis.close",g)
};
var f=function(s){l=s;
o=s.find("."+h.addthisbutton);
i()
};
return{init:function(s){if(!p.isEmpty(s)){f(s)
}}}
});
e("pageDetail",["require","jquery","lodash","jquerydotdotdot","pageTitleMenu","pageDetailshareWidget"],function(i){var n=i("jquery");
var r=i("lodash");
var o=i("jquerydotdotdot");
var h=i("pageTitleMenu");
var m=i("pageDetailshareWidget");
var s;
var g;
var j={addThis:"addthis-wrapper",menu:"menu-bar"};
var p=function(w,x){var v=n(this);
if(!w){v.find(".toggle").remove()
}};
var q=function(x){var v=n(x.target).closest("a");
var w;
if(v.hasClass("expand")){w=v.closest(".auto-ellipsis");
w.trigger("destroy").find(".compress").removeClass("hidden");
w.addClass("js-auto-ellipsis-off");
w.find(".expand").addClass("hidden")
}else{w=v.closest(".auto-ellipsis");
w.find(".compress").addClass("hidden");
w.find(".expand").removeClass("hidden");
w.removeClass("js-auto-ellipsis-off");
w.dotdotdot({watch:true,after:"a.expand",callback:p})
}};
var l=function(v){if(v.which===32||v.which===13){q(v);
g.find(".toggle").focus()
}};
var k=function(){g.on("click",".toggle",q);
g.on("keypress",".toggle",l)
};
var f=function(){var v=g.html();
if(!r.isEmpty(v)){v=v.replace("<p","<span");
v=v.replace("</p>","</span>");
g.html(v);
g.find(".compress").appendTo(g.find("p").last())
}};
var u=function(v){s=v;
g=s.find(".auto-ellipsis");
m.init(s.find("."+j.addThis));
h.init(s.find("."+j.menu));
f();
if(!r.isUndefined(g)&&!r.isEmpty(g)){g.dotdotdot({watch:true,after:"a.expand",callback:p});
k()
}};
return{init:function(v){if(v.length>0){u(v)
}}}
});
+function(g){function f(){var j=document.createElement("bootstrap");
var i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var h in i){if(j.style[h]!==undefined){return{end:i[h]}
}}return false
}g.fn.emulateTransitionEnd=function(j){var i=false;
var h=this;
g(this).one("bsTransitionEnd",function(){i=true
});
var k=function(){if(!i){g(h).trigger(g.support.transition.end)
}};
setTimeout(k,j);
return this
};
g(function(){g.support.transition=f();
if(!g.support.transition){return
}g.event.special.bsTransitionEnd={bindType:g.support.transition.end,delegateType:g.support.transition.end,handle:function(h){if(g(h.target).is(this)){return h.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
e("bsTransition",function(){});
+function(i){var j=function(l,k){this.$element=i(l);
this.options=i.extend({},j.DEFAULTS,k);
this.$trigger=i('[data-toggle="collapse"][href="#'+l.id+'"],[data-toggle="collapse"][data-target="#'+l.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
j.VERSION="3.3.4";
j.TRANSITION_DURATION=350;
j.DEFAULTS={toggle:true};
j.prototype.dimension=function(){var k=this.$element.hasClass("width");
return k?"width":"height"
};
j.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var m;
var o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(o&&o.length){m=o.data("bs.collapse");
if(m&&m.transitioning){return
}}var l=i.Event("show.bs.collapse");
this.$element.trigger(l);
if(l.isDefaultPrevented()){return
}if(o&&o.length){g.call(o,"hide");
m||o.data("bs.collapse",null)
}var p=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[p](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var k=function(){this.$element.removeClass("collapsing").addClass("collapse in")[p]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!i.support.transition){return k.call(this)
}var n=i.camelCase(["scroll",p].join("-"));
this.$element.one("bsTransitionEnd",i.proxy(k,this)).emulateTransitionEnd(j.TRANSITION_DURATION)[p](this.$element[0][n])
};
j.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var l=i.Event("hide.bs.collapse");
this.$element.trigger(l);
if(l.isDefaultPrevented()){return
}var m=this.dimension();
this.$element[m](this.$element[m]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var k=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!i.support.transition){return k.call(this)
}this.$element[m](0).one("bsTransitionEnd",i.proxy(k,this)).emulateTransitionEnd(j.TRANSITION_DURATION)
};
j.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
j.prototype.getParent=function(){return i(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(i.proxy(function(m,l){var k=i(l);
this.addAriaAndCollapsedClass(h(k),k)
},this)).end()
};
j.prototype.addAriaAndCollapsedClass=function(l,k){var m=l.hasClass("in");
l.attr("aria-expanded",m);
k.toggleClass("collapsed",!m).attr("aria-expanded",m)
};
function h(k){var l;
var m=k.attr("data-target")||(l=k.attr("href"))&&l.replace(/.*(?=#[^\s]+$)/,"");
return i(m)
}function g(k){return this.each(function(){var n=i(this);
var m=n.data("bs.collapse");
var l=i.extend({},j.DEFAULTS,n.data(),typeof k=="object"&&k);
if(!m&&l.toggle&&/show|hide/.test(k)){l.toggle=false
}if(!m){n.data("bs.collapse",(m=new j(this,l)))
}if(typeof k=="string"){m[k]()
}})
}var f=i.fn.collapse;
i.fn.collapse=g;
i.fn.collapse.Constructor=j;
i.fn.collapse.noConflict=function(){i.fn.collapse=f;
return this
};
i(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var n=i(this);
if(!n.attr("data-target")){o.preventDefault()
}var k=h(n);
var m=k.data("bs.collapse");
var l=m?"toggle":n.data();
g.call(k,l)
})
}(jQuery);
e("bsCollapse",function(){});
e("tabComponent",["require","jquery","lodash","bsTransition","bsCollapse","breakpoints","standardTab"],function(h){var l=h("jquery");
var g=h("lodash");
var m=h("bsTransition");
var f=h("bsCollapse");
var k=h("breakpoints");
var j=h("standardTab");
var i=function(r){var q;
var p=false;
var o={accordion:"panel-group",accordionTrigger:"panel-heading",accordionPanel:"panel-collapse",tab:"tabs-wrapper",tabPanel:"tab-panel"};
var n=function(z){var x=l(z.target);
var w=x.siblings("."+o.accordionTrigger);
var y=q.find("."+o.accordionTrigger).index(w);
if(!p){p=true;
q.find("."+o.tab+" .tab-button").eq(y).trigger("click")
}else{p=false
}};
var v=function(z){var x=l(z.target);
var y=q.find("."+o.tabPanel).index(x);
var w=l(this).find(".tab-button").eq(y).find('input[type="radio"]');
if(!p){p=true;
if(q.find("."+o.accordionTrigger)){q.find("."+o.accordionTrigger).eq(y).trigger("click")
}}else{p=false
}if(w&&x.attr("type")!=="radio"){w.attr("checked","checked")
}};
var u=function(){if(q.find("."+o.accordion)){q.find("."+o.accordion).on("shown.bs.collapse",n)
}q.find("."+o.tab).on("tab.shown",v)
};
var s=function(w){q=w;
q.find("."+o.accordion).collapse({toggle:false});
j(q.find("."+o.tab),{namespace:"tabComponent"});
u()
};
if(r.length>0){s(r)
}};
return i
});
e("baggageAllowanceSummary",["jquery","lodash"],function(l,x){var m;
var v;
var w;
var h;
var s;
var g;
var q;
var p;
var i;
var k;
var o;
var u={tipsSelector:"select-tips-wrapper",selectFlightWrapper:"select-flight-wrapper",flightContentWrapper:'div[class^="tab-content-"]',levelContentWrapper:"tabs-small",dropDownWrapper:"custom-select-wrapper",selectedText:"custom-select-text",selectList:"custom-select-control",listWrapper:"list",responsiveTableList:"responsive-table-list"};
var r=function(C){var D=l("option:selected",this);
var z=D.val();
var B=D.text();
var A=D.parents(".responsive-table-list");
A.find(".tabs-small").addClass("is-display-none");
A.find(".tabs-small").filter("."+z+"").removeClass("is-display-none");
A.find("."+u.selectedText).first().html(B)
};
var y=function(D){var F=l("option:selected",this);
var z=F.val();
var G=z.replace(/[^\d]/g,"");
var C=G-1;
var A=F.parents(".baggage-allowance-summary");
var B=F.text();
var E=A.find(".tips-group").find(".select-tips-wrapper");
E.removeClass("is-display-table").addClass("is-display-none");
E.eq(C).removeClass("is-display-none").addClass("is-display-table");
A.find(u.flightContentWrapper).addClass("is-display-none");
A.find(".tab-content-"+G+"").removeClass("is-display-none");
k=A.find(".tab-content-"+G+"").find("."+u.dropDownWrapper).find("."+u.selectList).find('option[value="level-1"]').text();
A.find("."+u.selectedText).first().html(B);
A.find(".tab-content-"+G+"").find("."+u.responsiveTableList).find("."+u.selectedText).html(k);
A.find(".tab-content-"+G+"").find("."+u.responsiveTableList).find("."+u.levelContentWrapper).first().removeClass("is-display-none").siblings("."+u.levelContentWrapper).addClass("is-display-none")
};
var j=function(z){if(z.which===32||z.which===13){y(z)
}};
var f=function(){p.on("change","."+u.selectList,y).on("keypress","."+u.selectList,j);
h.on("change","."+u.selectList,r)
};
var n=function(A,z){o=z;
m=A.find("."+u.selectFlightWrapper);
v=A.find(".select-flight");
q=l("."+u.selectFlightWrapper).find("."+u.dropDownWrapper);
p=A.find(".select-flight");
w=l("."+u.responsiveTableList).find("."+u.levelContentWrapper);
h=l("."+u.responsiveTableList).find("."+u.dropDownWrapper);
f()
};
return{init:function(z,A){if(!x.isEmpty(z)){n(z,A)
}}}
});
e("baggageDropdown",["jquery","lodash"],function(j,g){var m;
var l;
var i;
var k;
var h={selectFlightWrapper:"select-flight-wrapper",dropDownWrapper:"custom-select-wrapper",reponsiveTableListDiv:"responsive-table-list"};
var f=function(o,n){m=o;
l=m.find("."+h.dropDownWrapper);
i=l.find("select");
k=j("."+h.reponsiveTableListDiv);
if(/iPhone/i.test(navigator.userAgent)){i.append('<optgroup label=""></optgroup>');
k.append('<optgroup label=""></optgroup>')
}};
return{init:function(n){if(!g.isEmpty(n)){f(n)
}}}
});
e("overlay",["jquery","lodash","breakpoints"],function(k,G,o){var l;
var x=k("body");
var E=null;
var i="ui-overlay-active";
var s="ui-connector";
var u="ui-takeover-active";
var n=function(){return x.hasClass("less-than-ie9")
};
var C=function(I){var J=/ui-datepicker-next|ui-datepicker-prev/;
var H=false;
if(I.target.className.match(J)||I.target.parentNode.className.match(J)){H=true
}return H
};
var j=function(I){var H=k(I).data("uiOverlayId");
k.data(I,"overlay",{el:k('[data-ui-overlay="'+H+'"]'),id:H,isVisible:false})
};
var z=function(J){var I=J.el;
var L=I.closest(".book-trip");
var K=L.data("role")==="home";
var H;
if(!K){if(J.id.indexOf("rooms-selector")!==-1&&!o.isSmall()){H=(window.innerHeight-k("header").height()-L.height())*0.9;
I.css("max-height",H)
}}};
var r=function(){var I=k(".book-trip").data("role")==="home";
var H=(window.innerHeight-k("header").height()-k(".book-trip").height())*0.9;
if(o.isSmall()){k(".hotel-rooms-selector,.package-rooms-selector").css("max-height","")
}else{if(!I){k(".hotel-rooms-selector,.package-rooms-selecto").css("max-height",H)
}}};
var B=function(H){if(o.isSmall()){k("html,body").scrollTop(H)
}};
var q=function(){x.addClass(u)
};
var y=function(){x.removeClass(u)
};
var A=function(H){H.el.addClass(i);
H.isVisible=true
};
var D=function(I,H){if(I!==null){I.trigger("close.overlay")
}H.el.removeClass(i);
H.isVisible=false
};
var f=function(H){if(E!==null&&!C(H)){h(E)
}};
var w=function(H){H.stopPropagation()
};
var m=function(H){if(H.hasClass("button-date-picker")&&!n()&&H.data("dp-type")!=="flyout"){return true
}return false
};
var h=function(J){var I=k(J);
var H=I.data("overlay");
E=null;
G.forEach(l,function(M){var L=k.data(M,"overlay");
if(L.id!==H.id){D(null,L);
k(M).removeClass(s)
}if(!n()){y()
}});
if(!H.isVisible){E=J;
z(H);
if(m(I)){q();
B(0)
}I.addClass(s);
A(H)
}else{D(I,H);
I.removeClass(s);
if(m(I)){var K=I.offset().top;
if(/(lumia 520)/ig.test(navigator.userAgent)){G.delay(function(){B(K)
},100)
}else{B(K)
}}}};
var p=function(H){h(H.button)
};
var F=function(H){h(H.currentTarget);
if(!G.isUndefined(H.gesture)){H.gesture.preventDefault()
}H.preventDefault();
H.stopPropagation();
if(!k(".nav-book-trip").hasClass("list-active")){x.removeClass("secondary-active");
k("html").removeClass("menu-active");
k(".menu-container").find(".list-active").removeClass("list-active");
k(".secondary-nav-container.active").removeClass("active")
}k(".field-input").blur()
};
var g=function(){l.on("click",F);
x.on("click.overlay",f);
x.on("click.overlay","."+i,w);
x.on("show.overlay",p);
x.on("hide.overlay",p);
k(window).on("resize.unSetOverlayHeightSmall",G.debounce(r,300))
};
var v=function(H){l=H;
G.forEach(l,j);
g()
};
return{init:function(H){if(H.length>0){v(H)
}}}
});
+function(i){var g=function(k,j){this.options=j;
this.$body=i(document.body);
this.$element=i(k);
this.$dialog=this.$element.find(".modal-dialog");
this.$backdrop=null;
this.isShown=null;
this.originalBodyPad=null;
this.scrollbarWidth=0;
this.ignoreBackdropClick=false;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,i.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
g.VERSION="3.3.4";
g.TRANSITION_DURATION=300;
g.BACKDROP_TRANSITION_DURATION=150;
g.DEFAULTS={backdrop:true,keyboard:true,show:true};
g.prototype.toggle=function(j){return this.isShown?this.hide():this.show(j)
};
g.prototype.show=function(l){var j=this;
var k=i.Event("show.bs.modal",{relatedTarget:l});
this.$element.trigger(k);
if(this.isShown||k.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',i.proxy(this.hide,this));
this.$dialog.on("mousedown.dismiss.bs.modal",function(){j.$element.one("mouseup.dismiss.bs.modal",function(m){if(i(m.target).is(j.$element)){j.ignoreBackdropClick=true
}})
});
this.backdrop(function(){var n=i.support.transition&&j.$element.hasClass("fade");
if(!j.$element.parent().length){j.$element.appendTo(j.$body)
}j.$element.show().scrollTop(0);
j.adjustDialog();
if(n){j.$element[0].offsetWidth
}j.$element.addClass("in").attr("aria-hidden",false);
j.enforceFocus();
var m=i.Event("shown.bs.modal",{relatedTarget:l});
n?j.$dialog.one("bsTransitionEnd",function(){j.$element.trigger("focus").trigger(m)
}).emulateTransitionEnd(g.TRANSITION_DURATION):j.$element.trigger("focus").trigger(m)
})
};
g.prototype.hide=function(j){if(j){j.preventDefault()
}j=i.Event("hide.bs.modal");
this.$element.trigger(j);
if(!this.isShown||j.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
i(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
this.$dialog.off("mousedown.dismiss.bs.modal");
i.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",i.proxy(this.hideModal,this)).emulateTransitionEnd(g.TRANSITION_DURATION):this.hideModal()
};
g.prototype.enforceFocus=function(){i(document).off("focusin.bs.modal").on("focusin.bs.modal",i.proxy(function(j){if(this.$element[0]!==j.target&&!this.$element.has(j.target).length){this.$element.trigger("focus")
}},this))
};
g.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",i.proxy(function(j){j.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
g.prototype.resize=function(){if(this.isShown){i(window).on("resize.bs.modal",i.proxy(this.handleUpdate,this))
}else{i(window).off("resize.bs.modal")
}};
g.prototype.hideModal=function(){var j=this;
this.$element.hide();
this.backdrop(function(){j.$body.removeClass("modal-open");
j.resetAdjustments();
j.resetScrollbar();
j.$element.trigger("hidden.bs.modal")
})
};
g.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
g.prototype.backdrop=function(n){var m=this;
var k=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var j=i.support.transition&&k;
this.$backdrop=i('<div class="modal-backdrop '+k+'" />').appendTo(this.$body);
this.$element.on("click.dismiss.bs.modal",i.proxy(function(o){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;
return
}if(o.target!==o.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus():this.hide()
},this));
if(j){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!n){return
}j?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(g.BACKDROP_TRANSITION_DURATION):n()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var l=function(){m.removeBackdrop();
n&&n()
};
i.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",l).emulateTransitionEnd(g.BACKDROP_TRANSITION_DURATION):l()
}else{if(n){n()
}}}};
g.prototype.handleUpdate=function(){this.adjustDialog()
};
g.prototype.adjustDialog=function(){var j=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&j?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!j?this.scrollbarWidth:""})
};
g.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
g.prototype.checkScrollbar=function(){var k=window.innerWidth;
if(!k){var j=document.documentElement.getBoundingClientRect();
k=j.right-Math.abs(j.left)
}this.bodyIsOverflowing=document.body.clientWidth<k;
this.scrollbarWidth=this.measureScrollbar()
};
g.prototype.setScrollbar=function(){var j=parseInt((this.$body.css("padding-right")||0),10);
this.originalBodyPad=document.body.style.paddingRight||"";
if(this.bodyIsOverflowing){this.$body.css("padding-right",j+this.scrollbarWidth)
}};
g.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
};
g.prototype.measureScrollbar=function(){var k=document.createElement("div");
k.className="modal-scrollbar-measure";
this.$body.append(k);
var j=k.offsetWidth-k.clientWidth;
this.$body[0].removeChild(k);
return j
};
function h(j,k){return this.each(function(){var n=i(this);
var m=n.data("bs.modal");
var l=i.extend({},g.DEFAULTS,n.data(),typeof j=="object"&&j);
if(!m){n.data("bs.modal",(m=new g(this,l)))
}if(typeof j=="string"){m[j](k)
}else{if(l.show){m.show(k)
}}})
}var f=i.fn.modal;
i.fn.modal=h;
i.fn.modal.Constructor=g;
i.fn.modal.noConflict=function(){i.fn.modal=f;
return this
};
i(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var m=i(this);
var k=m.attr("href");
var j=i(m.attr("data-target")||(k&&k.replace(/.*(?=#[^\s]+$)/,"")));
var l=j.data("bs.modal")?"toggle":i.extend({remote:!/#/.test(k)&&k},j.data(),m.data());
if(m.is("a")){n.preventDefault()
}j.one("show.bs.modal",function(o){if(o.isDefaultPrevented()){return
}j.one("hidden.bs.modal",function(){m.is(":visible")&&m.trigger("focus")
})
});
h.call(j,l,this)
})
}(jQuery);
e("bsModal",function(){});
e("fareTable",["require","jquery","lodash","moment","handlebars","bsModal","breakpoints","datePicker"],function(k){var E=k("jquery");
var X=k("lodash");
var L=k("moment");
var M=k("handlebars");
var w=k("bsModal");
var l=k("breakpoints");
var B=k("datePicker");
var R;
var n;
var W;
var Y;
var y;
var Q;
var f;
var p={passengerTrigger:".custom-select-trigger",passengerTitle:".custom-select-text",button:"tooltip-button",tooltipActive:"tooltip-active",wrapper:"fare-table-component"};
var K={staicFareTable:"fare-table-static",includeFilterPanel:"fare-table-filter-enabled",excludeFilterPanel:"fare-table-filter-disabled"};
var I={Y:"years",M:"months",D:"days"};
var v=new E.Deferred();
var o;
var G=0;
var m=function(ac,ae,aa,ad){var af=L(ac,ae);
var ab=L(ac,ae).add(aa,ad);
var Z=af.date();
if(ab.month()!==1){if(Z>30){ab.date(Z)
}}else{if(ab.isLeapYear()&&Z>29||!ab.isLeapYear()&&Z>28){ab.add(1,I.M);
ab.date(1)
}}return ab
};
var N=function(ac,ag){var ae=CX.calendar.formats.form;
var ab=new RegExp(/^([0][d|D|m|M|y|Y]{0,1})$/);
var ad;
if(!X.isEmpty(ag)&&!ab.test(ag)){var aa=ag.substring(0,ag.length-1);
var af=I[ag.substring(ag.length-1).toUpperCase()];
if(af===I.D){ad=L(ac).add(aa,af).format(ae)
}else{var Z=m(ac,ae,aa,af);
ad=Z.format(ae)
}}else{if(!X.isNaN(parseInt(ag))){ad=L(ac).add(ag,"days").format(ae)
}else{ad=L(ac).format(ae)
}}return ad
};
var T=function(Z,ad){var ae=Z.data("dp-preferred-duration");
var aj=Z.data("dp-preferred-period");
var ac=CX.calendar.formats.form;
var aa=L(ad,ac);
var ai=aa;
var ag;
var ah=0;
if(!(X.isUndefined(aj))&&aj.length>0){var ak=aj.length;
var ab;
var af;
for(;
ah<ak;
ah++){ab=L(aj[ah].startDate,ac);
af=L(aj[ah].endDate,ac);
if(aa.isSame(ab)||aa.isBetween(ab,af)||aa.isSame(af)){ai=aa;
break
}else{if(aa.isBefore(ab)){ai=ab;
break
}}}}ag=N(ai,ae);
return{from:ai,to:ag}
};
var z=function(ad,ac){var ab=ad.$el;
var Z=[ac.getFullYear(),ac.getMonth()+1,ac.getDate()].join("-");
var aa=T(ab,Z);
if(X.isUndefined(ab.data("isDefaultDate"))){ad.$overlay.on("select.calendar",function(){ab.data("isDefaultDate",false)
});
ad.setDates(aa);
ad.setSummaryValue("from",aa.from);
ad.setSummaryValue("to",aa.to)
}};
var H=function(aa,Z){var ab=aa.data("datePickerId");
switch(ab){case"book-hotel":case"book-hotel-subsidiary":return Z.maxDate.hotel;
default:return Z.maxDate.standard
}};
var g=function(ac){var ad=ac.find(".button-date-picker");
var ab;
var aa=ac.find('[name="ORIGIN"]').val();
if(Q.fareTable.requireTimeZone){ab=E.data(ad[0],"datePicker");
var Z=H(ad,CX.calendar);
ab.calendar.setMaxDate(y.calculateMaxTimeZoneOffset(aa,Z));
ab.calendar.setMinDate(y.calculateMinTimeZoneOffset(aa));
z(ab,y.calculateMinTimeZoneOffset(aa))
}};
var j=function(ab){var Z=E(ab.target);
var aa=Z.closest(".table-list");
if(!Z.is("a")){if(aa.hasClass("select")){aa.removeClass("select")
}else{var ad=aa.find(".button-date-picker");
ad.each(function(){if(!E.data(this,"datePicker")){E.data(this,"datePicker",new B(this,{calendar:CX.calendar}))
}});
g(aa);
E(".table-list").removeClass("select");
var ac=aa.offset().top;
if(l.isLargeUp()){ac-=43
}aa.addClass("select");
E("body, html").animate({scrollTop:ac},600)
}}};
var J=function(ab){var Z=E(ab.target);
var aa=Z.find("option:selected").text();
E(ab.target).prev(p.passengerTrigger).find(p.passengerTitle).html(aa)
};
var V=function(Z){var aa={};
Z.find(".calendar-depart, .calendar-return").val(function(ab,ac){return ac.replace(/-/g,"")
});
aa={DEPARTUREDATE:Z.find('input[name="DEPARTUREDATE"]').val().replace(/-/g,""),ARRIVALDATE:Z.find('input[name="ARRIVALDATE"]').val().replace(/-/g,""),ADULT:Z.find('select[name="ADULT"]').val(),CHILD:Z.find('select[name="CHILD"]').val(),INFANT:Z.find('select[name="INFANT"]').val(),CABINCLASS:Z.find('input[name="CABINCLASS"]').val(),ORIGIN:Z.find('[name="ORIGIN"]').val()};
Z.find('input[name="ERRORURL"]').val(function(ab,ac){return ac+E.param(aa)
})
};
var O=function(Z){var ac={};
var aa=Z.find(".check-flexible-dates input");
var ab=Z.find('[name="FLEXIBLEDATE"]');
Z.find(".calendar-depart, .calendar-return").val(function(ad,ae){return ae.replace(/-/g,"")
});
if(aa.is(":checked")){ab.val("true")
}else{ab.val("false")
}ac={FLEXIBLEDATE:ab.val(),DEPARTUREDATE:Z.find('input[name="DEPARTUREDATE"]').val().replace(/-/g,""),ARRIVALDATE:Z.find('input[name="ARRIVALDATE"]').val().replace(/-/g,""),ADULT:Z.find('select[name="ADULT"]').val(),CHILD:Z.find('select[name="CHILD"]').val(),INFANT:Z.find('select[name="INFANT"]').val()};
Z.find('input[name="ERRORURL"]').val(function(ad,ae){return(/\&$/.test(ae))?ae+E.param(ac):ae+"&"+E.param(ac)
})
};
var D=function(aa){var Z=E(this);
if(!R.hasClass(K.staicFareTable)){V(Z)
}else{O(Z)
}return true
};
var h=function(aa){var ab=U(aa.origin);
var Z=U(aa.destination);
var ac=parseFloat(aa.fareAmount).toLocaleString();
return{fareId:aa.fareId,description:aa.description,origin:ab,destination:Z,currencyCode:aa.currencyCode,fareAmount:ac,travelPeriod:aa.travelPeriod,travelPeriods:aa.travelPeriods,flightRestriction:aa.flightRestriction,salesPeriod:aa.salesPeriod,noOfPassenger:aa.noOfPassenger,minMaxStay:aa.minMaxStay,childFare:aa.childFare,infantFare:aa.infantFare,dateChange:aa.dateChange,stopOver:aa.stopOver,mileageAccrual:aa.mileageAccrual,upgradeWithMiles:aa.upgradeWithMiles,prebookSeat:aa.prebookSeat,changeFee:aa.changeFee,cancellationCharge:aa.cancellationCharge,noShowCharge:aa.noShowCharge,otherInfo:aa.otherInfo}
};
var U=function(aa){var Z=X.pluck(X.filter(o,{airportCode:aa}),"cityName");
return Z
};
var A=function(ae){var aa=E(ae.target);
var ad={fareId:aa.data("fare-id"),brand:E('input[name="brand"]').val(),locale:E('input[name="locale"]').val(),};
var Z;
var ac=Q.fareTable.endPoints.fareRules;
var ab;
G=E("body").scrollTop();
Y.addClass("modal-loading");
if(Y.find(".progress-bar").hasClass("progress-bar-disabled")){Y.removeClass("modal-loading")
}Y.modal("show");
Y.removeAttr("style");
Y.attr("style","display:block;");
ab=E.ajax(ac,{type:"POST",contentType:"application/json; charset=utf-8",data:JSON.stringify(ad),dataType:"json"});
ab.done(function(ai,af,ag){Z=h(ai);
Y.find(".progress-bar-wrapper").addClass("progress-bar-fallback-disabled");
Y.find(".progress-bar").addClass("progress-bar-disabled");
Y.removeClass("modal-loading");
var ah=M["default"].compile(f);
E(".fare-rules-content").empty().append(ah(Z))
})
};
var C=function(Z){Z.preventDefault();
var aa=E(this).closest(".tooltip");
aa.toggleClass(p.tooltipActive)
};
var i=function(Z){if(Z.which===13){Z.preventDefault();
C(Z)
}};
var u=function(Z){var aa=[];
X.each(Z,function(ab){aa.push({cityName:ab.airportDetails.city.name,cityNameEN:ab.airportDetails.city.defaultName,countryName:ab.airportDetails.country.name,countryCode:ab.airportDetails.country.code,airportName:ab.airportDetails.airportShortName,airportNameEN:ab.airportDetails.defaultAirportShortName,airportCode:ab.airportCode,isVirtualAirport:ab.isVirtualAirport})
});
return aa
};
var x=function(){var Z=E.ajax({url:Q.fareTable.endPoints.airportList,type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
Z.done(function(ac,aa,ab){o=u(ac.airports)
})
};
var s=function(Z){var aa=X.find(o,function(ab){return ab.airportCode.toUpperCase()===Z.toUpperCase()
})
};
var r=function(Z){E(this).addClass("modal-padding-fix")
};
var F=function(Z){E("body").addClass("modal-padding-fix");
E(this).addClass("modal-padding-fix")
};
var P=function(Z){E("html, body").scrollTop(parseInt(G)+0.1)
};
var S=function(){n.find(".table-list").on("click",".panel-heading",j);
n.on("change",".custom-select-control",J);
n.on("submit","form",D);
n.on("click",".toggle-fare-rule",A);
Y.on("show.bs.modal",F);
Y.on("hidden.bs.modal",P);
Y.on("shown.bs.modal",r);
if(!R.hasClass(K.staicFareTable)){n.on("click","."+p.button,C).on("keypress","."+p.button,i)
}};
var q=function(ab,aa,Z){n=ab;
R=n.closest("."+p.wrapper);
y=aa;
Q=Z;
Y=E(".fare-rules-modal");
f=E("#fare-rule-template").html();
E("body").append(Y);
x();
S()
};
return{init:function(Z,ab,aa){if(Z.length>0){q(Z,ab,aa)
}}}
});
e("filterPanel",["require","jquery","lodash","moment","handlebars","fareTable"],function(k){var N=k("jquery");
var ah=k("lodash");
var W=k("moment");
var X=k("handlebars");
var Q=k("fareTable");
var l;
var f;
var M;
var G;
var Y;
var ag;
var i;
var T;
var V;
var A=new N.Deferred();
var D;
var r;
var aa;
var U={staicFareTable:"fare-table-static",includeFilterPanel:"fare-table-filter-enabled",excludeFilterPanel:"fare-table-filter-disabled"};
var s={filterPanel:"filter-panel",filterResultsWrapper:"filter-results-wrapper",filterResults:"filter-results",noResult:"no-result",datePicker:"button-date-picker",submitButton:"button-submit",selectControl:"custom-select-control",selectTrigger:"custom-select-trigger",selectLabel:"custom-select-text",loadingFallback:"progress-bar-fallback",loading:"progress-bar",disabledLoadingFallback:"progress-bar-fallback-disabled",disabledLoading:"progress-bar-disabled"};
var h=function(am,al){var ak=S(am);
var aj=S(al);
return ak+" - "+aj
};
var ai=function(ak){var aj=ah.filter(r,function(al){return al.cityCode.toLowerCase()===ak.toLowerCase()
});
return aj.length
};
var S=function(aj){var ak=ah.find(r,{airportCode:aj});
var al=(ak.cityName!==undefined)?ak.cityName:"";
if(ak.cityCode!==undefined){if(!ak.isVirtualAirport){if(ai(ak.cityCode)>1){al+=" / "+ak.airportName
}}}return al
};
var O=function(al){var aj=N(al.target);
var ak=aj.find("option:selected").text();
aj.siblings("."+s.selectTrigger).find("."+s.selectLabel).text(ak);
I()
};
var ad=function(ao,an){var ak=[];
var al="YYYYMMDD";
var aj;
var am;
W.locale(aa.calendar.lang);
ah.forEach(ao,function(ap){aj=W(ap.startDate,al).format(an);
am=W(ap.endDate,al).format(an);
ak.push({startDate:aj,endDate:am})
});
return ak
};
var af=function(aj){if(aj){return aa.fareTable.canEarnAsiaMiles.Y
}else{return aa.fareTable.canEarnAsiaMiles.N
}};
var n=function(al,aj){var aq=aa.fareTable.dates.durations;
var ao=aa.fareTable.dates.units;
var at="";
var an="";
var ar=new RegExp(/^([0][d|D|m|M|y|Y]{0,1})$/);
if(!ah.isEmpty(aj)){if(!ar.test(aj)){var am=aj.substring(0,aj.length-1);
var ap=ao[aj.substring(aj.length-1)];
an=aq.replace("#noOfDates#",am).replace("#unit#",ap);
if(ah.isEmpty(al)||ar.test(al)){at=0
}else{var ak=al.substring(0,al.length-1);
var au=ao[al.substring(al.length-1)];
at=aq.replace("#noOfDates#",ak).replace("#unit#",au)
}}}return at+" - "+an
};
var P=function(aj){var al=true;
var am=[];
if(aj.indexOf("-")>-1){var ak=aj.split("-");
if(ak[1]>0){al=false;
for(;
ak[0]<=ak[1];
ak[0]++){am.push({value:ak[0]})
}}else{am.push({value:0})
}}return{isHidden:al,options:am}
};
var H=function(au){var an=aa.fareTable.dates.formats.presentation;
var am=aa.fareTable.dates.formats.hidden;
var aj=h(au.origin,au.destination);
var ak=parseFloat(au.fareAmount).toLocaleString();
var ao=au.currencyCode+" "+ak;
var ar=ad(au.depPeriod,an);
var al=n(au.minStay,au.maxStay);
var aw=aa.fareTable.cabinClassMapping[au.cabinClass];
var at=af(au.earnMileages);
var av=ad(au.depPeriod,am);
var ap=(au.tripType==="OW")?true:false;
var aq=(au.tripType==="RT")?true:false;
return{fareId:au.fareId,fromTo:aj,price:ao,periods:ar,duration:al,cabinClassLabel:aw,canEarnAsiaMiles:at,isOneWayTrip:ap,isReturnTrip:aq,inputs:{promotionCode:au.promotionCode,origin:au.origin,destination:au.destination,preferredPeriod:JSON.stringify(av),preferredDuration:au.minStay,cabinClass:au.cabinClass,adults:P(au.allowedAdult),children:P(au.allowedChild),infants:P(au.allowedInfant)}}
};
var I=function(){var aj=f.find('[name="origin"]').val();
var al=f.find('[name="destination"]').val();
if(ah.isEmpty(aj)){aj="ALL"
}if(ah.isEmpty(al)){al="ALL"
}var ak=window.cxDataLayer||{};
N.extend(ak.offer,{origin:aj,destination:al})
};
var J=function(ao){var ak=f.find("form");
var am=ak.attr("action");
var aq=ak.attr("method");
ak.find('input[name="depDate"], input[name="returnDate"]').val(function(ar,at){return at.replace(/-/g,"")
});
var an={brand:ak.find('input[name="brand"]').val(),locale:ak.find('input[name="locale"]').val(),code:ak.find('input[name="code"]').val(),type:ak.find('input[name="type"]').val(),};
var ap;
if(!ao){var aj=ak.find('input[name="round-trip"]:checked').val();
ap={searchCriteria:{origin:ak.find('[name="origin"]').val(),destination:ak.find('[name="destination"]').val(),tripType:aj,cabinClass:"",depDate:ak.find('input[name="depDate"]').val(),returnDate:(aj!=="OW")?ak.find('input[name="returnDate"]').val():""}}
}else{ap={searchCriteria:{origin:"",destination:"",tripType:"",cabinClass:"",depDate:"",returnDate:""}}
}an=N.extend({},an,ap);
var al=N.ajax(am,{type:aq,contentType:"application/json; charset=utf-8",data:JSON.stringify(an),dataType:"json"});
return al
};
var K=function(al){var aj=[];
var ak=al.val();
if(!ah.isEmpty(ak)){aj.push(ak)
}if(al.is("select")){if(!ah.isUndefined(al.find("option:selected").data("airport-collection"))){aj=ah.pluck(ah.filter(r,{countryCode:ak}),"airportCode")
}}return aj
};
var w=function(ak){var am=aa.fareTable.selectedOrigins;
var ao=f.find('[name="origin"]');
var ap=f.find('[name="destination"]');
var an=K(ao);
var aj=K(ap);
var al;
if(!ah.isEmpty(an)){al=ah.filter(ak,function(aq){return ah.contains(an,aq.origin)
})
}else{al=ah.filter(ak,function(aq){return ah.contains(am,aq.origin)
})
}if(!ah.isEmpty(aj)){al=ah.filter(al,function(aq){return ah.contains(aj,aq.destination)
})
}return al
};
var ae=function(al){var ak="";
var aj=X["default"].compile(V);
var am=w(al);
ag.find("."+s.loadingFallback).addClass(s.disabledLoadingFallback);
ag.find("."+s.loading).addClass(s.disabledLoading);
if(!ah.isEmpty(am)){ak+=aj({offers:ah.map(am,H)});
l.find("."+s.noResult).addClass("hidden");
Y.html(ak);
Q.init(Y,D,aa)
}};
var m=function(aj){var ak=l.find("."+s.noResult);
var al="";
ah.forEach(aj.errorMessages,function(am){al+="<p>"+am+"</p>"
});
ak.append(al).removeClass("hidden")
};
var B=function(am){var ak=aa.fareTable.endPoints.errors;
var al=".JSON";
var aj=ak.indexOf(al);
if(aj>-1){l.find("."+s.noResult).empty();
ah.forEach(am,function(ao){ak=ak.slice(0,aj)+"."+ao.code+ak.slice(aj);
var an=N.ajax(ak,{type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
an.done(m)
})
}};
var p=function(al,aj,ak){if(al.errors.length>0){ag.find("."+s.loadingFallback).addClass(s.disabledLoadingFallback);
ag.find("."+s.loading).addClass(s.disabledLoading);
B(al.errors)
}if(al.promotions.length===0){}else{if(al.promotions[0].fares.length===0){}else{ae(al.promotions[0].fares)
}}};
var q=function(ak){ak.preventDefault();
var aj=J(false);
I();
Y.empty();
N.when(aj,A).done(function(al){ag.find("."+s.loadingFallback).removeClass(s.disabledLoadingFallback);
ag.find("."+s.loading).removeClass(s.disabledLoading);
p(al[0])
})
};
var Z=function(al){var an=[];
var aj;
var am;
ah.forEach(al,function(ao){var ap=ah.find(r,function(aq){return aq.airportCode.toUpperCase()===ao.toUpperCase()
});
if(!ah.isUndefined(ap)){an.push(ap)
}});
var ak={};
if(an.length>0){ah.each(an,function(ao){aj=N.grep(r,function(ap){if((ap.cityName.toUpperCase()===ao.cityName.toUpperCase())&&(ap.countryName.toUpperCase()===ao.countryName.toUpperCase())){return ap
}});
am=N.grep(an,function(ap){if((ap.countryName.toUpperCase()===ao.countryName.toUpperCase())){return ap
}});
ak[ao.cityName]=aj.length;
ak[ao.countryName]=am.length
})
}return ak
};
var x=function(aj){var ak=ah.find(r,function(al){return al.airportCode.toUpperCase()===aj.toUpperCase()
});
return ak
};
var L=function(ao,am){var ak=x(am);
var an;
var aj;
var al=null;
if(ak){if(ao[ak.cityName]>1){if(ak.isVirtualAirport){an=ak.cityName;
aj=ak.cityNameEN
}else{an=ak.cityName+" / "+ak.airportName;
aj=ak.cityNameEN+" / "+ak.airportNameEN
}}else{an=ak.cityName;
aj=ak.cityNameEN
}al={cityLabel:an,countryName:ak.countryName,countryCode:ak.countryCode,sortByEN:aj}
}return al
};
var j=function(ap,an){var ak=x(an);
var ao;
var aj;
var am;
var al=null;
if(ak){ao=ak.countryName;
am=ak.countryNameEN;
if(ap[ak.cityName]>1){if(ak.isVirtualAirport){ao+=" - "+ak.cityName+" / "+ak.airportName;
am+=" - "+ak.cityNameEN+" / "+ak.airportNameEN
}else{ao+=" - "+ak.airportName;
am+=" - "+ak.airportNameEN
}}else{if(ao!==ak.cityName){ao+=" - "+ak.cityName;
am+=" - "+ak.cityNameEN
}}aj=(ap[ak.countryName]>1);
al={cityLabel:ao,hasAllCities:aj,countryName:ak.countryName,countryCode:ak.countryCode,countryNameEN:ak.countryNameEN,sortByEN:am}
}return al
};
var ac=function(an){var ao=M.data("dp-preferred-duration");
var av=M.data("dp-preferred-period");
var am=CX.calendar.formats.form;
var ak=W(an,am);
var au=ak;
var at=R(M,CX.calendar);
var aj=W(au,am).add(at,"days");
var aq;
var ar=0;
if(!(ah.isUndefined(av))&&av.length>0){var aw=av.length;
var al;
var ap;
for(;
ar<aw;
ar++){al=W(av[ar].startDate,am);
ap=W(av[ar].endDate,am);
if(ak.isSame(al)||ak.isBetween(al,ap)||ak.isSame(ap)){au=ak;
break
}else{if(ak.isBefore(al)){au=al;
break
}}}}aq=W(au,am).add(ao,"days");
if(aq.isAfter(aj)){aq=aj
}return{from:au.format(am),to:aq.format(am)}
};
var E=function(an,am){var al=an.$el;
var aj=[am.getFullYear(),am.getMonth()+1,am.getDate()].join("-");
var ak=ac(aj);
if(ah.isUndefined(al.data("isDefaultDate"))){an.$overlay.on("select.calendar",function(){al.data("isDefaultDate",false)
});
an.setDates(ak);
an.setSummaryValue("from",ak.from);
an.setSummaryValue("to",ak.to)
}};
var R=function(ak,aj){var al=ak.data("datePickerId");
switch(al){case"book-hotel":case"book-hotel-subsidiary":return aj.maxDate.hotel;
default:return aj.maxDate.standard
}};
var g=function(){var am=f.find(".button-date-picker");
var al;
var ak=f.find('[name="origin"]').val();
if(aa.fareTable.requireTimeZone){al=N.data(am[0],"datePicker");
var aj=R(am,CX.calendar);
al.calendar.setMaxDate(D.calculateMaxTimeZoneOffset(ak,aj));
al.calendar.setMinDate(D.calculateMinTimeZoneOffset(ak));
E(al,D.calculateMinTimeZoneOffset(ak))
}};
var y=function(al){var aj=aa.fareTable.selectedOrigins;
var ak=[];
ah.forEach(aj,function(an){var am=ah.find(al,function(ao){return ao.origin.toUpperCase()===an.toUpperCase()
});
if(!ah.isUndefined(am)){ak.push(an)
}});
return ak
};
var o=function(ar){var ak=y(ar);
var aj=[];
var aq=[];
var am=X["default"].compile(i);
var ap=X["default"].compile(T);
var ao=f.find("select");
var al=ah.filter(ar,function(ay){return ah.contains(ak,ay.origin)
});
var au=ah.unique(ah.pluck(al,"destination"));
var ax="";
var av="";
var aw={};
if(ak.length===1){ax+=am({type:"origin",code:ak[0],label:S(x(ak[0]).airportCode),placeholder:aa.fareTable.translations.origin})
}else{var an=Z(ak);
if(an){aw={};
ah.forEach(ak,function(ay){var az=L(an,ay);
if(az){aj.push({label:az.cityLabel,sortByEN:az.sortByEN,code:ay})
}});
aj.sort(function(az,ay){if(az.sortByEN.toLowerCase()<ay.sortByEN.toLowerCase()){return -1
}if(az.sortByEN.toLowerCase()>ay.sortByEN.toLowerCase()){return 1
}return 0
});
ax+=ap({type:"origin",hasMultiCities:true,multiCitiesLabel:aa.fareTable.translations.selectOrigin,airports:aj,placeholder:aa.fareTable.translations.selectOrigin})
}}if(au.length===1){av+=am({type:"destination",code:au[0],label:S(x(au[0]).airportCode),placeholder:aa.fareTable.translations.destination})
}else{var at=Z(au);
if(at){aw={};
ah.forEach(au,function(ay){var az=j(at,ay);
if(az){if(az.hasAllCities&&!aw.hasOwnProperty(az.countryCode)){aw[az.countryCode]=az.countryCode;
aq.push({hasAllCities:true,label:az.countryName,sortByEN:az.countryNameEN,countryName:az.countryName,countryCode:az.countryCode,code:ay});
aq.push({label:az.cityLabel,sortByEN:az.sortByEN,code:ay})
}else{aq.push({label:az.cityLabel,sortByEN:az.sortByEN,code:ay})
}}});
aq.sort(function(az,ay){if(az.sortByEN.toLowerCase()<ay.sortByEN.toLowerCase()){return -1
}if(az.sortByEN.toLowerCase()>ay.sortByEN.toLowerCase()){return 1
}return 0
});
av+=ap({type:"destination",hasMultiCities:true,multiCitiesLabel:aa.fareTable.translations.multiCities,airports:aq,placeholder:aa.fareTable.translations.destination})
}}f.find(".flight-depart").empty().html(ax);
f.find(".flight-destination").empty().html(av);
g()
};
var u=function(){var aj=J(true);
N.when(aj,A).done(function(ak){if(!ah.isUndefined(ak[0].errors)&&ak[0].errors.length>0){B(ak[0].errors)
}else{if(ak[0].promotions.length===0){}else{if(ak[0].promotions[0].fares.length===0){}else{o(ak[0].promotions[0].fares)
}}}})
};
var z=function(aj){var ak=[];
ah.each(aj,function(al){ak.push({cityCode:al.airportDetails.city.code,cityName:al.airportDetails.city.name,cityNameEN:al.airportDetails.city.defaultName,countryName:al.airportDetails.country.name,countryNameEN:al.airportDetails.country.defaultName,countryCode:al.airportDetails.country.code,airportName:al.airportDetails.airportShortName,airportNameEN:al.airportDetails.defaultAirportShortName,airportCode:al.airportCode,isVirtualAirport:al.isVirtualAirport})
});
return ak
};
var C=function(){var aj=N.ajax({url:aa.fareTable.endPoints.airportList,type:"GET",contentType:"application/json; charset=utf-8",dataType:"json"});
aj.done(function(am,ak,al){r=z(am.airports);
A.resolve()
})
};
var ab=function(){f.on("change","."+s.selectControl,O);
if(!l.hasClass(U.staicFareTable)){f.on("submit","form",q)
}};
var F=function(){if(l.hasClass(U.staicFareTable)){Q.init(Y,D,aa)
}else{if(l.is("."+U.includeFilterPanel)){u()
}else{f.find("form").trigger("submit")
}}};
var v=function(al,ak,aj){l=al;
f=l.find("."+s.filterPanel);
M=f.find(".button-date-picker");
G=l.find("."+s.filterResultsWrapper);
Y=l.find("."+s.filterResults);
ag=G.find(".progress-bar-wrapper");
i=N("#filter-input-template").html();
T=N("#filter-dropdown-template").html();
V=N("#fare-table-template").html();
D=ak;
aa=aj;
ab();
C();
F()
};
return{init:function(aj,al,ak){if(aj.length>0){v(aj,al,ak)
}}}
});
e("dropdownLinks",["jquery","lodash"],function(h,g){var f=function(s,v){var r;
var l;
var i=true;
var m={triggerWrap:"custom-select-wrapper",trigger:"custom-select-trigger",label:"custom-select-text",list:"custom-select-control"};
var o=function(A){var w=h(A.target);
var y=w.find("option:selected").text();
var z=w.find("option:selected").data("dropdown-state");
var x=A.target.value;
var B=l.global.source+"_offer_selected_city";
if(!g.isUndefined(z)&&!g.isEmpty(z)){h.cookie(B,z.toLowerCase(),{expires:null})
}w.siblings("."+m.trigger).find("."+m.label).text(y);
window.location.href=x
};
var p=function(w){if(i){i=false;
h(this).find("."+m.trigger).css({"z-index":"2",border:"1px dotted #000"});
h(this).find("."+m.list).css("opacity","1").trigger("focus")
}};
var u=function(){h(this).parents("."+m.triggerWrap).find("."+m.trigger).removeAttr("style");
h(this).removeAttr("style");
i=true
};
var q=function(z){if(z.keyCode===38||z.keyCode===40){var w=h(z.target);
var x=w.find("option:selected").text();
var y=w.find("option:selected").data("dropdown-state");
w.siblings("."+m.trigger).find("."+m.label).text(x)
}};
var j=function(w){w.stopPropagation()
};
var n=function(){r.on("change","."+m.list,o);
r.on("focus","."+m.triggerWrap,p);
r.on("blur","."+m.list,u);
r.on("keyup","."+m.list,q);
r.on("focus","."+m.list,j)
};
var k=function(x,w){r=x;
l=w;
n()
};
if(s.length>0){k(s,v)
}};
return f
});
e("pageListDynamicFilter",["require","jquery","lodash","jquery.cookie","jquerydotdotdot","breakpoints","geoLocationServices"],function(l){var i=l("jquery");
var F=l("lodash");
var C=l("jquery.cookie");
var v=l("jquerydotdotdot");
var n=l("breakpoints");
var m=l("geoLocationServices");
var z;
var g;
var r;
var s="";
var f;
var o;
var y;
var j=[];
var A;
var B={hidden:"js-hidden",addthisWrapper:"addthis-wrapper",offerList:"offer-list",targetLandingCityCode:"target-landing-city-code",customSelectTrigger:"custom-select-trigger",customSelectText:"custom-select-text",customSelectControl:"custom-select-control",singleOriginLabel:"single-origin-label",offerListPlain:"offer-list-popular-destinations"};
var h=function(G){var I=r.find('[data-dropdown-state="'+G+'"]');
var H=I.html();
g.find("."+B.customSelectTrigger+" ."+B.customSelectText).html(H);
r.val(I.val());
g.removeClass(B.hidden)
};
var x=function(I){var J=window.location.href;
var G=J.split("/");
var H=G[0]+"//"+G[2]+I;
if(window.addthis&&addthis.layers){addthis.update("share","url",H)
}else{setTimeout(x,100)
}};
var E=function(G){location.hash=G
};
var k=function(G){var I;
if(F.isEmpty(s)||G!==s){var H=F.find(j,{portCode:G});
var J=i("."+B.offerList).find("input."+B.targetLandingCityCode);
E(H.label);
J.val(G);
J.trigger("change");
q();
z.addClass(B.hidden);
F.each(z,function(L){var K=i(L);
if(K.data("states").key.toUpperCase()===G.toUpperCase()){K.removeClass(B.hidden)
}});
if(i("."+B.addthisWrapper).length>0){x(H.url)
}if(!F.isEmpty(r)){h(G)
}s=G;
if(n.isLargeUp()){i(".offer-landing-content").find(".headline").dotdotdot({wrap:"letter"});
i(".offer-landing-content").find(".description").dotdotdot({wrap:"letter"})
}}};
var D=function(){var G=f.getDeferred();
var H=o.getDeferred();
var J;
var I;
i.when(G,H).done(function(K,L){if(K.byAkamai===true||K.byHTML5===true){I=m.calNearestAirportCityCode(j,{codeType:"cityCode"});
k(I.toUpperCase())
}else{k(j[0].portCode.toUpperCase())
}})
};
var u=function(){var G=i.cookie(y);
var I=-1;
if(!F.isUndefined(G)&&!F.isEmpty(G)){I=F.findIndex(j,{portCode:G.toUpperCase()});
if(I>-1){k(j[I].portCode)
}else{D()
}}else{if(!F.isEmpty(location.hash)){var H=location.hash.replace(/#/,"");
I=F.findIndex(j,{label:H});
if(I>-1){k(j[I].portCode)
}else{D()
}}else{D()
}}};
var p=function(){var G;
var H;
if(!F.isEmpty(r)){var J=r.find("option");
F.each(J,function(K){var L=i(K);
j.push({portCode:L.data("dropdown-state").toUpperCase(),label:L.data("slug"),url:L.data("url")})
})
}else{var I=g.find("."+B.singleOriginLabel);
j.push({portCode:I.data("dropdown-state").toUpperCase(),label:I.data("slug"),url:I.data("url")})
}};
var q=function(){var G=z.find("."+B.offerList);
G.find(".item").removeAttr("style")
};
var w=function(J,G,I,H){g=J;
r=g.find("."+B.customSelectControl);
z=i("[data-states]");
f=G;
o=I;
A=H;
y=A.global.source+"_offer_selected_city";
p();
u()
};
return{init:function(H,G,J,I){if(I.global.isMasterOfferLandingPage&&H.length>0){w(H,G,J,I)
}}}
});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js ) (v 1.1)
 *
 */
(function(g){jQuery.fn.extend({slimScroll:function(h){var f=g.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);
this.each(function(){function Q(k){if(G){k=k||window.event;
var l=0;
k.wheelDelta&&(l=-k.wheelDelta/120);
k.detail&&(l=k.detail/3);
g(k.target||k.srcTarget||k.srcElement).closest("."+f.wrapperClass).is(V.parent())&&P(l,!0);
k.preventDefault&&!S&&k.preventDefault();
S||(k.returnValue=!1)
}}function P(p,m,l){S=!1;
var n=p,k=V.outerHeight()-U.outerHeight();
m&&(n=parseInt(U.css("top"))+p*parseInt(f.wheelStep)/100*U.outerHeight(),n=Math.min(Math.max(n,0),k),n=0<p?Math.ceil(n):Math.floor(n),U.css({top:n+"px"}));
R=parseInt(U.css("top"))/(V.outerHeight()-U.outerHeight());
n=R*(V[0].scrollHeight-V.outerHeight());
l&&(n=p,p=n/V[0].scrollHeight*V.outerHeight(),p=Math.min(Math.max(p,0),k),U.css({top:p+"px"}));
V.scrollTop(n);
V.trigger("slimscrolling",~~n);
s();
M()
}function I(){window.addEventListener?(this.addEventListener("DOMMouseScroll",Q,!1),this.addEventListener("mousewheel",Q,!1)):document.attachEvent("onmousewheel",Q)
}function H(){window.removeEventListener?(this.removeEventListener("DOMMouseScroll",Q),this.removeEventListener("mousewheel",Q)):document.detachEvent("onmousewheel",Q)
}function o(){F=Math.max(V.outerHeight()/V[0].scrollHeight*V.outerHeight(),30);
U.css({height:F+"px"});
var k=F==V.outerHeight()?"none":"block";
U.css({display:k})
}function s(){o();
clearTimeout(L);
R==~~R?(S=f.allowPageScroll,K!=R&&V.trigger("slimscroll",0==~~R?"top":"bottom")):S=!1;
K=R;
F>=V.outerHeight()?S=!0:(U.stop(!0,!0).fadeIn("fast"),f.railVisible&&T.stop(!0,!0).fadeIn("fast"))
}function M(){f.alwaysVisible||(L=setTimeout(function(){f.disableFadeOut&&G||j||i||(U.fadeOut("slow"),T.fadeOut("slow"))
},1000))
}var G,j,i,L,O,F,R,K,S=!1,V=g(this);
if(V.parent().hasClass(f.wrapperClass)){var N=V.scrollTop(),U=V.parent().find("."+f.barClass),T=V.parent().find("."+f.railClass);
o();
if(g.isPlainObject(h)){if("height" in h&&"auto"==h.height){V.parent().css("height","auto");
V.css("height","auto");
var J=V.parent().parent().height();
V.parent().css("height",J);
V.css("height",J)
}if("scrollTo" in h){N=parseInt(f.scrollTo)
}else{if("scrollBy" in h){N+=parseInt(f.scrollBy)
}else{if("destroy" in h){H();
U.remove();
T.remove();
V.unwrap();
return
}}}P(N,!1,!0)
}}else{f.height="auto"==h.height?V.parent().height():h.height;
N=g("<div></div>").addClass(f.wrapperClass).css({position:"relative",overflow:"hidden",width:f.width,height:f.height});
V.css({overflow:"hidden",width:f.width,height:f.height});
var T=g("<div></div>").addClass(f.railClass).css({width:f.size,height:"100%",position:"absolute",top:0,display:f.alwaysVisible&&f.railVisible?"block":"none","border-radius":f.railBorderRadius,background:f.railColor,opacity:f.railOpacity,zIndex:90}),U=g("<div></div>").addClass(f.barClass).css({background:f.color,width:f.size,position:"absolute",top:0,opacity:f.opacity,display:f.alwaysVisible?"block":"none","border-radius":f.borderRadius,BorderRadius:f.borderRadius,MozBorderRadius:f.borderRadius,WebkitBorderRadius:f.borderRadius,zIndex:99}),J="right"==f.position?{right:f.distance}:{left:f.distance};
T.css(J);
U.css(J);
V.wrap(N);
V.parent().append(U);
V.parent().append(T);
f.railDraggable&&U.bind("mousedown",function(l){var k=g(document);
i=!0;
t=parseFloat(U.css("top"));
pageY=l.pageY;
k.bind("mousemove.slimscroll",function(m){currTop=t+m.pageY-pageY;
U.css("top",currTop);
P(0,U.position().top,!1)
});
k.bind("mouseup.slimscroll",function(m){i=!1;
M();
k.unbind(".slimscroll")
});
return !1
}).bind("selectstart.slimscroll",function(k){k.stopPropagation();
k.preventDefault();
return !1
});
T.hover(function(){s()
},function(){M()
});
U.hover(function(){j=!0
},function(){j=!1
});
V.hover(function(){G=!0;
s();
M()
},function(){G=!1;
M()
});
V.bind("touchstart",function(l,k){l.originalEvent.touches.length&&(O=l.originalEvent.touches[0].pageY)
});
V.bind("touchmove",function(k){S||k.originalEvent.preventDefault();
k.originalEvent.touches.length&&(P((O-k.originalEvent.touches[0].pageY)/f.touchScrollStep,!0),O=k.originalEvent.touches[0].pageY)
});
o();
"bottom"===f.start?(U.css({top:V.outerHeight()-U.outerHeight()}),P(0,!0)):"top"!==f.start&&(P(g(f.start).position().top,null,!0),f.alwaysVisible||U.hide());
I()
}});
return this
}});
jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})
})(jQuery);
e("fullPageSlimScroll",function(){});
(function(g,f){if(typeof e==="function"&&e.amd){e("fullPage",["jquery"],function(h){return f(h,g,g.document,g.Math)
})
}else{if(typeof exports!=="undefined"){module.exports=f(a("jquery"),g,g.document,g.Math)
}else{f(jQuery,g,g.document,g.Math)
}}})(typeof window!=="undefined"?window:this,function(T,ab,k,J,w){var ah="fullpage-wrapper";
var I="."+ah;
var z="fp-scrollable";
var f="."+z;
var S=".slimScrollBar";
var B=".slimScrollRail";
var C="fp-responsive";
var X="fp-notransition";
var G="fp-destroyed";
var Y="fp-enabled";
var Q="fp-viewing";
var K="active";
var E="."+K;
var u=".section";
var ag="fp-section";
var F="."+ag;
var h=F+E;
var p=F+":first";
var v=F+":last";
var g="fp-tableCell";
var y="."+g;
var o="fp-nav";
var P="#"+o;
var R="fp-tooltip";
var ac="fp-show-active";
var Z=".slide";
var l="fp-slide";
var aa="."+l;
var q=aa+E;
var af="fp-slides";
var j="."+af;
var A="fp-slidesContainer";
var M="."+A;
var O="fp-table";
var s="fp-slidesNav";
var r="."+s;
var i=r+" a";
var D="fp-controlArrow";
var V="."+D;
var H="fp-prev";
var L="."+H;
var n=D+" "+H;
var m=V+L;
var ae="fp-next";
var U="."+ae;
var W=D+" "+ae;
var x=V+U;
var ad=T(ab);
var N=T(k);
T.fn.fullpage=function(a8){var bm=T("html, body");
var aX=T("body");
var aF=T.fn.fullpage;
a8=T.extend({menu:false,anchors:[],navigation:false,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:false,slidesNavigation:false,slidesNavPosition:"bottom",scrollBar:false,css3:true,scrollingSpeed:700,autoScrolling:true,fitToSection:true,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:false,loopTop:false,loopHorizontal:true,continuousVertical:false,normalScrollElements:null,scrollOverflow:false,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:true,animateAnchor:true,recordHistory:true,controlArrows:true,controlArrowColor:"#fff",verticalCentered:true,resize:false,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:u,slideSelector:Z,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},a8);
by();
T.extend(T.easing,{easeInOutCubic:function(bT,bU,bS,bW,bV){if((bU/=bV/2)<1){return bW/2*bU*bU*bU+bS
}return bW/2*((bU-=2)*bU*bU+2)+bS
}});
T.extend(T.easing,{easeInQuart:function(bT,bU,bS,bW,bV){return bW*(bU/=bV)*bU*bU*bU+bS
}});
aF.setAutoScrolling=function(bU,bT){bC("autoScrolling",bU,bT);
var bS=T(h);
if(a8.autoScrolling&&!a8.scrollBar){bm.css({overflow:"hidden",height:"100%"});
aF.setRecordHistory(a8.recordHistory,"internal");
bk.css({"-ms-touch-action":"none","touch-action":"none"});
if(bS.length){bp(bS.position().top)
}}else{bm.css({overflow:"visible",height:"initial"});
aF.setRecordHistory(false,"internal");
bk.css({"-ms-touch-action":"","touch-action":""});
bp(0);
if(bS.length){bm.scrollTop(bS.position().top)
}}};
aF.setRecordHistory=function(bT,bS){bC("recordHistory",bT,bS)
};
aF.setScrollingSpeed=function(bT,bS){bC("scrollingSpeed",bT,bS)
};
aF.setFitToSection=function(bT,bS){bC("fitToSection",bT,bS)
};
aF.setMouseWheelScrolling=function(bS){if(bS){ao()
}else{aS()
}};
aF.setAllowScrolling=function(bS,bT){if(typeof bT!="undefined"){bT=bT.replace(/ /g,"").split(",");
T.each(bT,function(bU,bV){aI(bS,bV)
})
}else{if(bS){aF.setMouseWheelScrolling(true);
bj()
}else{aF.setMouseWheelScrolling(false);
bc()
}}};
aF.setKeyboardScrolling=function(bS){a8.keyboardScrolling=bS
};
aF.moveSectionUp=function(){var bS=T(h).prev(F);
if(!bS.length&&(a8.loopTop||a8.continuousVertical)){bS=T(F).last()
}if(bS.length){bz(bS,null,true)
}};
aF.moveSectionDown=function(){var bS=T(h).next(F);
if(!bS.length&&(a8.loopBottom||a8.continuousVertical)){bS=T(F).first()
}if(bS.length){bz(bS,null,false)
}};
aF.silentMoveTo=function(bS,bT){aF.setScrollingSpeed(0,"internal");
aF.moveTo(bS,bT);
aF.setScrollingSpeed(a6.scrollingSpeed,"internal")
};
aF.moveTo=function(bT,bU){var bS=bF(bT);
if(typeof bU!=="undefined"){an(bT,bU)
}else{if(bS.length>0){bz(bS)
}}};
aF.moveSlideRight=function(){bi("next")
};
aF.moveSlideLeft=function(){bi("prev")
};
aF.reBuild=function(bT){if(bk.hasClass(G)){return
}aP=true;
var bV=ad.width();
bK=ad.height();
if(a8.resize){aT(bK,bV)
}T(F).each(function(){var bX=T(this).find(j);
var bW=T(this).find(aa);
if(a8.verticalCentered){T(this).find(y).css("height",aO(T(this))+"px")
}T(this).css("height",bK+"px");
if(a8.scrollOverflow){if(bW.length){bW.each(function(){aZ(T(this))
})
}else{aZ(T(this))
}}if(bW.length>1){ba(bX,bX.find(q))
}});
var bS=T(h);
var bU=bS.index(F);
if(bU){aF.silentMoveTo(bU+1)
}aP=false;
T.isFunction(a8.afterResize)&&bT&&a8.afterResize.call(bk);
T.isFunction(a8.afterReBuild)&&!bT&&a8.afterReBuild.call(bk)
};
var bG=false;
var at=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
var ak=(("ontouchstart" in ab)||(navigator.msMaxTouchPoints>0)||(navigator.maxTouchPoints));
var bk=T(this);
var bK=ad.height();
var aP=false;
var aG;
var a9;
var bh=true;
var aj=[];
var aC;
var az;
var aD={up:true,down:true,left:true,right:true};
var a6=T.extend(true,{},a8);
if(T(this).length){bk.css({height:"100%",position:"relative"});
bk.addClass(ah);
T("html").addClass(Y)
}else{bJ("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();")
}if(a8.css3){a8.css3=bf()
}aF.setAllowScrolling(true);
bk.removeClass(G);
T(a8.sectionSelector).each(function(){T(this).addClass(ag)
});
T(a8.slideSelector).each(function(){T(this).addClass(l)
});
if(a8.navigation){a3()
}T(F).each(function(bS){var bX=T(this);
var bV=T(this).find(aa);
var bU=bV.length;
if(!bS&&T(h).length===0){T(this).addClass(K)
}T(this).css("height",bK+"px");
if(a8.paddingTop){T(this).css("padding-top",a8.paddingTop)
}if(a8.paddingBottom){T(this).css("padding-bottom",a8.paddingBottom)
}if(typeof a8.sectionsColor[bS]!=="undefined"){T(this).css("background-color",a8.sectionsColor[bS])
}if(typeof a8.anchors[bS]!=="undefined"){T(this).attr("data-anchor",a8.anchors[bS]);
if(T(this).hasClass(K)){aK(a8.anchors[bS],bS)
}}if(bU>0){var bW=bU*100;
var bY=100/bU;
bV.wrapAll('<div class="'+A+'" />');
bV.parent().wrap('<div class="'+af+'" />');
T(this).find(M).css("width",bW+"%");
if(a8.controlArrows&&bU>1){av(T(this))
}if(a8.slidesNavigation){aM(T(this),bU)
}bV.each(function(bZ){T(this).css("width",bY+"%");
if(a8.verticalCentered){a4(T(this))
}});
var bT=bX.find(q);
if(!bT.length){bV.eq(0).addClass(K)
}else{aW(bT)
}}else{if(a8.verticalCentered){a4(T(this))
}}}).promise().done(function(){aF.setAutoScrolling(a8.autoScrolling,"internal");
var bV=T(h).find(q);
if(bV.length&&(T(h).index(F)!==0||(T(h).index(F)===0&&bV.index()!==0))){aW(bV)
}if(a8.fixedElements&&a8.css3){T(a8.fixedElements).appendTo(aX)
}if(a8.navigation){aC.css("margin-top","-"+(aC.height()/2)+"px");
aC.find("li").eq(T(h).index(F)).find("a").addClass(K)
}if(a8.menu&&a8.css3&&T(a8.menu).closest(I).length){T(a8.menu).appendTo(aX)
}if(a8.scrollOverflow){if(k.readyState==="complete"){a7()
}ad.on("load",a7)
}else{bg()
}bM();
if(!a8.animateAnchor){var bT=ab.location.hash.replace("#","").split("/");
var bS=bT[0];
if(bS.length){var bU=T('[data-anchor="'+bS+'"]');
if(bU.length){if(a8.autoScrolling){bp(bU.position().top)
}else{bp(0);
bm.scrollTop(bU.position().top)
}aK(bS,null);
T.isFunction(a8.afterLoad)&&a8.afterLoad.call(bU,bS,(bU.index(F)+1));
bU.addClass(K).siblings().removeClass(K)
}}}aR();
ad.on("load",function(){bN()
})
});
function av(bS){bS.find(j).after('<div class="'+n+'"></div><div class="'+W+'"></div>');
if(a8.controlArrowColor!="#fff"){bS.find(x).css("border-color","transparent transparent transparent "+a8.controlArrowColor);
bS.find(m).css("border-color","transparent "+a8.controlArrowColor+" transparent transparent")
}if(!a8.loopHorizontal){bS.find(m).hide()
}}function a3(){aX.append('<div id="'+o+'"><ul></ul></div>');
aC=T(P);
aC.addClass(function(){return a8.showActiveTooltip?ac+" "+a8.navigationPosition:a8.navigationPosition
});
for(var bT=0;
bT<T(F).length;
bT++){var bU="";
if(a8.anchors.length){bU=a8.anchors[bT]
}var bS='<li><a href="#'+bU+'"><span></span></a>';
var bV=a8.navigationTooltips[bT];
if(typeof bV!=="undefined"&&bV!==""){bS+='<div class="'+R+" "+a8.navigationPosition+'">'+bV+"</div>"
}bS+="</li>";
aC.find("ul").append(bS)
}}function a7(){T(F).each(function(){var bS=T(this).find(aa);
if(bS.length){bS.each(function(){aZ(T(this))
})
}else{aZ(T(this))
}});
bg()
}function bg(){var bS=T(h);
bS.find(".fp-scrollable").mouseover();
T.isFunction(a8.afterLoad)&&a8.afterLoad.call(bS,bS.data("anchor"),(bS.index(F)+1));
T.isFunction(a8.afterRender)&&a8.afterRender.call(this)
}var bO;
var bl;
var aA=false;
ad.on("scroll",bt);
function bt(){var bS;
if(!a8.autoScrolling||a8.scrollBar){var bV=ad.scrollTop();
var bY=0;
var b1=J.abs(bV-k.querySelectorAll(F)[0].offsetTop);
var b7=k.querySelectorAll(F);
for(var bW=0;
bW<b7.length;
++bW){var b4=b7[bW];
var b0=J.abs(bV-b4.offsetTop);
if(b0<b1){bY=bW;
b1=b0
}}bS=T(b7).eq(bY)
}if(!a8.autoScrolling||a8.scrollBar){if(!bS.hasClass(K)){aA=true;
var bT=T(h);
var b6=bT.index(F)+1;
var bX=aB(bS);
var bU=bS.data("anchor");
var b3=bS.index(F)+1;
var b5=bS.find(q);
if(b5.length){var bZ=b5.data("anchor");
var b2=b5.index()
}if(bh){bS.addClass(K).siblings().removeClass(K);
T.isFunction(a8.onLeave)&&a8.onLeave.call(bT,b6,b3,bX);
T.isFunction(a8.afterLoad)&&a8.afterLoad.call(bS,bU,b3);
aK(bU,b3-1);
if(a8.anchors.length){aG=bU;
bo(b2,bZ,bU,b3)
}}clearTimeout(bO);
bO=setTimeout(function(){aA=false
},100)
}if(a8.fitToSection){clearTimeout(bl);
bl=setTimeout(function(){if(bh){if(T(h).is(bS)){aP=true
}bz(bS);
aP=false
}},1000)
}}}function al(bS){if(bS.find(j).length){return bS.find(q).find(f)
}return bS.find(f)
}function bx(bU,bV){if(!aD[bU]){return
}var bS,bT;
if(bU=="down"){bS="bottom";
bT=aF.moveSectionDown
}else{bS="top";
bT=aF.moveSectionUp
}if(bV.length>0){if(bB(bS,bV)){bT()
}else{return true
}}else{bT()
}}var bu=0;
var bv=0;
var bq=0;
var br=0;
function bA(bU){var bW=bU.originalEvent;
if(!ax(bU.target)&&bI(bW)){if(a8.autoScrolling){bU.preventDefault()
}var bS=T(h);
var bV=al(bS);
if(bh&&!bG){var bT=am(bW);
bq=bT.y;
br=bT.x;
if(bS.find(j).length&&J.abs(bv-br)>(J.abs(bu-bq))){if(J.abs(bv-br)>(ad.width()/100*a8.touchSensitivity)){if(bv>br){if(aD.right){aF.moveSlideRight()
}}else{if(aD.left){aF.moveSlideLeft()
}}}}else{if(a8.autoScrolling){if(J.abs(bu-bq)>(ad.height()/100*a8.touchSensitivity)){if(bu>bq){bx("down",bV)
}else{if(bq>bu){bx("up",bV)
}}}}}}}}function ax(bU,bS){bS=bS||0;
var bT=T(bU).parent();
if(bS<a8.normalScrollElementTouchThreshold&&bT.is(a8.normalScrollElements)){return true
}else{if(bS==a8.normalScrollElementTouchThreshold){return false
}else{return ax(bT,++bS)
}}}function bI(bS){return typeof bS.pointerType==="undefined"||bS.pointerType!="mouse"
}function bQ(bT){var bU=bT.originalEvent;
if(a8.fitToSection){bm.stop()
}if(bI(bU)){var bS=am(bU);
bu=bS.y;
bv=bS.x
}}function aU(bW,bV){var bU=0;
var bS=bW.slice(J.max(bW.length-bV,1));
for(var bT=0;
bT<bS.length;
bT++){bU=bU+bS[bT]
}return J.ceil(bU/bV)
}var ar=new Date().getTime();
function aY(bX){var bU=new Date().getTime();
if(a8.autoScrolling&&!az){bX=ab.event||bX;
var bZ=bX.wheelDelta||-bX.deltaY||-bX.detail;
var b0=J.max(-1,J.min(1,bZ));
if(aj.length>149){aj.shift()
}aj.push(J.abs(bZ));
if(a8.scrollBar){bX.preventDefault?bX.preventDefault():bX.returnValue=false
}var b1=T(h);
var bY=al(b1);
var bS=bU-ar;
ar=bU;
if(bS>200){aj=[]
}if(bh){var bW=aU(aj,10);
var bT=aU(aj,70);
var bV=bW>=bT;
if(bV){if(b0<0){bx("down",bY)
}else{bx("up",bY)
}}}return false
}if(a8.fitToSection){bm.stop()
}}function bi(bV){var bS=T(h);
var bU=bS.find(j);
if(!bU.length||bG){return
}var bW=bU.find(q);
var bT=null;
if(bV==="prev"){bT=bW.prev(aa)
}else{bT=bW.next(aa)
}if(!bT.length){if(!a8.loopHorizontal){return
}if(bV==="prev"){bT=bW.siblings(":last")
}else{bT=bW.siblings(":first")
}}bG=true;
ba(bU,bT)
}function be(){T(q).each(function(){aW(T(this),"internal")
})
}function bz(bV,bY,bT){var bU=bV.position();
if(typeof bU==="undefined"){return
}var bS={element:bV,callback:bY,isMovementUp:bT,dest:bU,dtop:bU.top,yMovement:aB(bV),anchorLink:bV.data("anchor"),sectionIndex:bV.index(F),activeSlide:bV.find(q),activeSection:T(h),leavingSection:T(h).index(F)+1,localIsResizing:aP};
if((bS.activeSection.is(bV)&&!aP)||(a8.scrollBar&&ad.scrollTop()===bS.dtop)){return
}if(bS.activeSlide.length){var bX=bS.activeSlide.data("anchor");
var bW=bS.activeSlide.index()
}if(a8.autoScrolling&&a8.continuousVertical&&typeof(bS.isMovementUp)!=="undefined"&&((!bS.isMovementUp&&bS.yMovement=="up")||(bS.isMovementUp&&bS.yMovement=="down"))){bS=bL(bS)
}bV.addClass(K).siblings().removeClass(K);
bh=false;
bo(bW,bX,bS.anchorLink,bS.sectionIndex);
T.isFunction(a8.onLeave)&&!bS.localIsResizing&&a8.onLeave.call(bS.activeSection,bS.leavingSection,(bS.sectionIndex+1),bS.yMovement);
bs(bS);
aG=bS.anchorLink;
aK(bS.anchorLink,bS.sectionIndex)
}function bs(bS){if(a8.css3&&a8.autoScrolling&&!a8.scrollBar){var bT="translate3d(0px, -"+bS.dtop+"px, 0px)";
bd(bT,true);
if(a8.scrollingSpeed){setTimeout(function(){bD(bS)
},a8.scrollingSpeed)
}else{bD(bS)
}}else{var bU=aL(bS);
T(bU.element).animate(bU.options,a8.scrollingSpeed,a8.easing).promise().done(function(){bD(bS)
})
}}function aL(bT){var bS={};
if(a8.autoScrolling&&!a8.scrollBar){bS.options={top:-bT.dtop};
bS.element=I
}else{bS.options={scrollTop:bT.dtop};
bS.element="html, body"
}return bS
}function bL(bS){if(!bS.isMovementUp){T(h).after(bS.activeSection.prevAll(F).get().reverse())
}else{T(h).before(bS.activeSection.nextAll(F))
}bp(T(h).position().top);
be();
bS.wrapAroundElements=bS.activeSection;
bS.dest=bS.element.position();
bS.dtop=bS.dest.top;
bS.yMovement=aB(bS.element);
return bS
}function aV(bS){if(!bS.wrapAroundElements||!bS.wrapAroundElements.length){return
}if(bS.isMovementUp){T(p).before(bS.wrapAroundElements)
}else{T(v).after(bS.wrapAroundElements)
}bp(T(h).position().top);
be()
}function bD(bS){aV(bS);
bS.element.find(".fp-scrollable").mouseover();
T.isFunction(a8.afterLoad)&&!bS.localIsResizing&&a8.afterLoad.call(bS.element,bS.anchorLink,(bS.sectionIndex+1));
bh=true;
T.isFunction(bS.callback)&&bS.callback.call(this)
}function bN(){var bT=ab.location.hash.replace("#","").split("/");
var bU=bT[0];
var bS=bT[1];
if(bU){an(bU,bS)
}}ad.on("hashchange",aH);
function aH(){if(!aA){var bU=ab.location.hash.replace("#","").split("/");
var bW=bU[0];
var bS=bU[1];
if(bW.length){var bV=(typeof aG==="undefined");
var bT=(typeof aG==="undefined"&&typeof bS==="undefined"&&!bG);
if((bW&&bW!==aG)&&!bV||bT||(!bG&&a9!=bS)){an(bW,bS)
}}}}N.keydown(bE);
N.keyup(function(bS){az=bS.ctrlKey
});
var bb;
function bE(bV){clearTimeout(bb);
az=bV.ctrlKey;
var bS=T(k.activeElement);
if(!bS.is("textarea")&&!bS.is("input")&&!bS.is("select")&&a8.keyboardScrolling&&a8.autoScrolling){var bU=bV.which;
var bT=[40,38,32,33,34];
if(T.inArray(bU,bT)>-1){bV.preventDefault()
}bb=setTimeout(function(){a1(bV)
},150)
}}function a1(bT){var bS=bT.shiftKey;
switch(bT.which){case 38:case 33:aF.moveSectionUp();
break;
case 32:if(bS){aF.moveSectionUp();
break
}case 40:case 34:aF.moveSectionDown();
break;
case 36:aF.moveTo(1);
break;
case 35:aF.moveTo(T(F).length);
break;
case 37:aF.moveSlideLeft();
break;
case 39:aF.moveSlideRight();
break;
default:return
}}bk.mousedown(function(bS){if(bS.which==2){a0=bS.pageY;
bk.on("mousemove",bP)
}});
bk.mouseup(function(bS){if(bS.which==2){bk.off("mousemove")
}});
var a0=0;
function bP(bS){if(bh){if(bS.pageY<a0){aF.moveSectionUp()
}else{if(bS.pageY>a0){aF.moveSectionDown()
}}}a0=bS.pageY
}N.on("click touchstart",P+" a",function(bT){bT.preventDefault();
var bS=T(this).parent().index();
bz(T(F).eq(bS))
});
N.on("click touchstart",i,function(bU){bU.preventDefault();
var bT=T(this).closest(F).find(j);
var bS=bT.find(aa).eq(T(this).closest("li").index());
ba(bT,bS)
});
if(a8.normalScrollElements){N.on("mouseenter",a8.normalScrollElements,function(){aF.setMouseWheelScrolling(false)
});
N.on("mouseleave",a8.normalScrollElements,function(){aF.setMouseWheelScrolling(true)
})
}T(F).on("click touchstart",V,function(){if(T(this).hasClass(H)){if(aD.left){aF.moveSlideLeft()
}}else{if(aD.right){aF.moveSlideRight()
}}});
function ba(bT,bX){var b6=bX.position();
var b2=bX.index();
var b5=bT.closest(F);
var b3=b5.index(F);
var bZ=b5.data("anchor");
var bY=b5.find(r);
var bU=aq(bX);
var b0=aP;
if(a8.onSlideLeave){var bW=b5.find(q);
var bV=bW.index();
var b4=bw(bV,b2);
if(!b0&&b4!=="none"){T.isFunction(a8.onSlideLeave)&&a8.onSlideLeave.call(bW,bZ,(b3+1),bV,b4)
}}bX.addClass(K).siblings().removeClass(K);
if(!a8.loopHorizontal&&a8.controlArrows){b5.find(m).toggle(b2!==0);
b5.find(x).toggle(!bX.is(":last-child"))
}if(b5.hasClass(K)){bo(b2,bU,bZ,b3)
}var bS=function(){if(!b0){T.isFunction(a8.afterSlideLoad)&&a8.afterSlideLoad.call(bX,bZ,(b3+1),bU,b2)
}bG=false
};
if(a8.css3){var b1="translate3d(-"+J.round(b6.left)+"px, 0px, 0px)";
a5(bT.find(M),a8.scrollingSpeed>0).css(bn(b1));
setTimeout(function(){bS()
},a8.scrollingSpeed,a8.easing)
}else{bT.animate({scrollLeft:J.round(b6.left)},a8.scrollingSpeed,a8.easing,function(){bS()
})
}bY.find(E).removeClass(K);
bY.find("li").eq(b2).find("a").addClass(K)
}ad.resize(aN);
var bR=bK;
var ai;
function aN(){bM();
if(at){var bS=T(k.activeElement);
if(!bS.is("textarea")&&!bS.is("input")&&!bS.is("select")){var bT=ad.height();
if(J.abs(bT-bR)>(20*J.max(bR,bT)/100)){aF.reBuild(true);
bR=bT
}}}else{clearTimeout(ai);
ai=setTimeout(function(){aF.reBuild(true)
},350)
}}function bM(){if(a8.responsive){var bS=bk.hasClass(C);
if(ad.width()<a8.responsive){if(!bS){aF.setAutoScrolling(false,"internal");
aF.setFitToSection(false,"internal");
T(P).hide();
bk.addClass(C)
}}else{if(bS){aF.setAutoScrolling(a6.autoScrolling,"internal");
aF.setFitToSection(a6.autoScrolling,"internal");
T(P).show();
bk.removeClass(C)
}}}}function a5(bS){var bT="all "+a8.scrollingSpeed+"ms "+a8.easingcss3;
bS.removeClass(X);
return bS.css({"-webkit-transition":bT,transition:bT})
}function bH(bS){return bS.addClass(X)
}function aT(bZ,bV){var bY=825;
var bU=900;
if(bZ<bY||bV<bU){var bX=(bZ*100)/bY;
var bW=(bV*100)/bU;
var bT=J.min(bX,bW);
var bS=bT.toFixed(2);
aX.css("font-size",bS+"%")
}else{aX.css("font-size","100%")
}}function aQ(bS,bT){if(a8.navigation){T(P).find(E).removeClass(K);
if(bS){T(P).find('a[href="#'+bS+'"]').addClass(K)
}else{T(P).find("li").eq(bT).find("a").addClass(K)
}}}function a2(bS){if(a8.menu){T(a8.menu).find(E).removeClass(K);
T(a8.menu).find('[data-menuanchor="'+bS+'"]').addClass(K)
}}function aK(bT,bS){a2(bT);
aQ(bT,bS)
}function bB(bS,bT){if(bS==="top"){return !bT.scrollTop()
}else{if(bS==="bottom"){return bT.scrollTop()+1+bT.innerHeight()>=bT[0].scrollHeight
}}}function aB(bT){var bS=T(h).index(F);
var bU=bT.index(F);
if(bS==bU){return"none"
}if(bS>bU){return"up"
}return"down"
}function bw(bS,bT){if(bS==bT){return"none"
}if(bS>bT){return"left"
}return"right"
}function aZ(bS){bS.css("overflow","hidden");
var bW=bS.closest(F);
var bV=bS.find(f);
var bU;
if(bV.length){bU=bV.get(0).scrollHeight
}else{bU=bS.get(0).scrollHeight;
if(a8.verticalCentered){bU=bS.find(y).get(0).scrollHeight
}}var bT=bK-parseInt(bW.css("padding-bottom"))-parseInt(bW.css("padding-top"));
if(bU>bT){if(bV.length){bV.css("height",bT+"px").parent().css("height",bT+"px")
}else{if(a8.verticalCentered){bS.find(y).wrapInner('<div class="'+z+'" />')
}else{bS.wrapInner('<div class="'+z+'" />')
}bS.find(f).slimScroll({allowPageScroll:true,height:bT+"px",size:"10px",alwaysVisible:true})
}}else{ap(bS)
}bS.css("overflow","")
}function ap(bS){bS.find(f).children().first().unwrap().unwrap();
bS.find(S).remove();
bS.find(B).remove()
}function a4(bS){bS.addClass(O).wrapInner('<div class="'+g+'" style="height:'+aO(bS)+'px;" />')
}function aO(bT){var bU=bK;
if(a8.paddingTop||a8.paddingBottom){var bV=bT;
if(!bV.hasClass(ag)){bV=bT.closest(F)
}var bS=parseInt(bV.css("padding-top"))+parseInt(bV.css("padding-bottom"));
bU=(bK-bS)
}return bU
}function bd(bS,bT){if(bT){a5(bk)
}else{bH(bk)
}bk.css(bn(bS));
setTimeout(function(){bk.removeClass(X)
},10)
}function bF(bS){var bT=T(F+'[data-anchor="'+bS+'"]');
if(!bT.length){bT=T(F).eq((bS-1))
}return bT
}function au(bV,bU){var bT=bU.find(j);
var bS=bT.find(aa+'[data-anchor="'+bV+'"]');
if(!bS.length){bS=bT.find(aa).eq(bV)
}return bS
}function an(bT,bS){var bU=bF(bT);
if(typeof bS==="undefined"){bS=0
}if(bT!==aG&&!bU.hasClass(K)){bz(bU,function(){aJ(bU,bS)
})
}else{aJ(bU,bS)
}}function aJ(bU,bV){if(typeof bV!=="undefined"){var bT=bU.find(j);
var bS=au(bV,bU);
if(bS.length){ba(bT,bS)
}}}function aM(bU,bT){bU.append('<div class="'+s+'"><ul></ul></div>');
var bV=bU.find(r);
bV.addClass(a8.slidesNavPosition);
for(var bS=0;
bS<bT;
bS++){bV.find("ul").append('<li><a href="#"><span></span></a></li>')
}bV.css("margin-left","-"+(bV.width()/2)+"px");
bV.find("li").first().find("a").addClass(K)
}function bo(bV,bW,bS,bU){var bT="";
if(a8.anchors.length){if(bV){if(typeof bS!=="undefined"){bT=bS
}if(typeof bW==="undefined"){bW=bV
}a9=bW;
ay(bT+"/"+bW)
}else{if(typeof bV!=="undefined"){a9=bW;
ay(bS)
}else{ay(bS)
}}}aR()
}function ay(bS){if(a8.recordHistory){location.hash=bS
}else{if(at||ak){history.replaceState(w,w,"#"+bS)
}else{var bT=ab.location.href.split("#")[0];
ab.location.replace(bT+"#"+bS)
}}}function aq(bS){var bU=bS.data("anchor");
var bT=bS.index();
if(typeof bU==="undefined"){bU=bT
}return bU
}function aR(){var bW=T(h);
var bS=bW.find(q);
var bU=bW.data("anchor");
var bY=aq(bS);
var bV=bW.index(F);
var bX=String(bV);
if(a8.anchors.length){bX=bU
}if(bS.length){bX=bX+"-"+bY
}bX=bX.replace("/","-").replace("#","");
var bT=new RegExp("\\b\\s?"+Q+"-[^\\s]+\\b","g");
aX[0].className=aX[0].className.replace(bT,"");
aX.addClass(Q+"-"+bX)
}function bf(){var bU=k.createElement("p"),bV,bT={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};
k.body.insertBefore(bU,null);
for(var bS in bT){if(bU.style[bS]!==w){bU.style[bS]="translate3d(1px,1px,1px)";
bV=ab.getComputedStyle(bU).getPropertyValue(bT[bS])
}}k.body.removeChild(bU);
return(bV!==w&&bV.length>0&&bV!=="none")
}function aS(){if(k.addEventListener){k.removeEventListener("mousewheel",aY,false);
k.removeEventListener("wheel",aY,false)
}else{k.detachEvent("onmousewheel",aY)
}}function ao(){if(k.addEventListener){k.addEventListener("mousewheel",aY,false);
k.addEventListener("wheel",aY,false)
}else{k.attachEvent("onmousewheel",aY)
}}function bj(){if(at||ak){var bS=aw();
T(I).off("touchstart "+bS.down).on("touchstart "+bS.down,bQ);
T(I).off("touchmove "+bS.move).on("touchmove "+bS.move,bA)
}}function bc(){if(at||ak){var bS=aw();
T(I).off("touchstart "+bS.down);
T(I).off("touchmove "+bS.move)
}}function aw(){var bS;
if(ab.PointerEvent){bS={down:"pointerdown",move:"pointermove"}
}else{bS={down:"MSPointerDown",move:"MSPointerMove"}
}return bS
}function am(bT){var bS=[];
bS.y=(typeof bT.pageY!=="undefined"&&(bT.pageY||bT.pageX)?bT.pageY:bT.touches[0].pageY);
bS.x=(typeof bT.pageX!=="undefined"&&(bT.pageY||bT.pageX)?bT.pageX:bT.touches[0].pageX);
if(ak&&bI(bT)){bS.y=bT.touches[0].pageY;
bS.x=bT.touches[0].pageX
}return bS
}function aW(bT,bS){aF.setScrollingSpeed(0,"internal");
if(typeof bS!=="undefined"){aP=true
}ba(bT.closest(j),bT);
if(typeof bS!=="undefined"){aP=false
}aF.setScrollingSpeed(a6.scrollingSpeed,"internal")
}function bp(bT){if(a8.scrollBar){bk.scrollTop(bT)
}else{if(a8.css3){var bS="translate3d(0px, -"+bT+"px, 0px)";
bd(bS,false)
}else{bk.css("top",-bT)
}}}function bn(bS){return{"-webkit-transform":bS,"-moz-transform":bS,"-ms-transform":bS,transform:bS}
}function aI(bS,bT){switch(bT){case"up":aD.up=bS;
break;
case"down":aD.down=bS;
break;
case"left":aD.left=bS;
break;
case"right":aD.right=bS;
break;
case"all":aF.setAllowScrolling(bS)
}}aF.destroy=function(bS){aF.setAutoScrolling(false,"internal");
aF.setAllowScrolling(false);
aF.setKeyboardScrolling(false);
bk.addClass(G);
ad.off("scroll",bt).off("hashchange",aH).off("resize",aN);
N.off("click",P+" a").off("mouseenter",P+" li").off("mouseleave",P+" li").off("click",i).off("mouseover",a8.normalScrollElements).off("mouseout",a8.normalScrollElements);
T(F).off("click",V);
if(bS){aE()
}};
function aE(){bp(0);
T(P+", "+r+", "+V).remove();
T(F).css({height:"","background-color":"",padding:""});
T(aa).css({width:""});
bk.css({height:"",position:"","-ms-touch-action":"","touch-action":""});
T(F+", "+aa).each(function(){ap(T(this));
T(this).removeClass(O+" "+K)
});
bH(bk);
bk.find(y+", "+M+", "+j).each(function(){T(this).replaceWith(this.childNodes)
});
bm.scrollTop(0)
}function bC(bS,bU,bT){a8[bS]=bU;
if(bT!=="internal"){a6[bS]=bU
}}function by(){if(a8.continuousVertical&&(a8.loopTop||a8.loopBottom)){a8.continuousVertical=false;
bJ("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")
}if(a8.continuousVertical&&a8.scrollBar){a8.continuousVertical=false;
bJ("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")
}T.each(a8.anchors,function(bT,bS){if(T("#"+bS).length||T('[name="'+bS+'"]').length){bJ("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
}})
}function bJ(bS,bT){console&&console[bS]&&console[bS]("fullPage: "+bT)
}}
});
(function(f){if(typeof e==="function"&&e.amd){e("slick",["jquery"],f)
}else{if(typeof exports!=="undefined"){module.exports=f(a("jquery"))
}else{f(jQuery)
}}}(function(f){var g=window.Slick||{};
g=(function(){var h=0;
function i(m,o){var l=this,j,n,k;
l.defaults={accessibility:true,adaptiveHeight:false,appendArrows:f(m),appendDots:f(m),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(q,p){return'<button type="button" data-role="none">'+(p+1)+"</button>"
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true};
l.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};
f.extend(l,l.initials);
l.activeBreakpoint=null;
l.animType=null;
l.animProp=null;
l.breakpoints=[];
l.breakpointSettings=[];
l.cssTransitions=false;
l.hidden="hidden";
l.paused=false;
l.positionProp=null;
l.respondTo=null;
l.rowCount=1;
l.shouldClick=true;
l.$slider=f(m);
l.$slidesCache=null;
l.transformType=null;
l.transitionType=null;
l.visibilityChange="visibilitychange";
l.windowWidth=0;
l.windowTimer=null;
j=f(m).data("slick")||{};
l.options=f.extend({},l.defaults,j,o);
l.currentSlide=l.options.initialSlide;
l.originalSettings=l.options;
n=l.options.responsive||null;
if(n&&n.length>-1){l.respondTo=l.options.respondTo||"window";
for(k in n){if(n.hasOwnProperty(k)){l.breakpoints.push(n[k].breakpoint);
l.breakpointSettings[n[k].breakpoint]=n[k].settings
}}l.breakpoints.sort(function(q,p){if(l.options.mobileFirst===true){return q-p
}else{return p-q
}})
}if(typeof document.mozHidden!=="undefined"){l.hidden="mozHidden";
l.visibilityChange="mozvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){l.hidden="webkitHidden";
l.visibilityChange="webkitvisibilitychange"
}}l.autoPlay=f.proxy(l.autoPlay,l);
l.autoPlayClear=f.proxy(l.autoPlayClear,l);
l.changeSlide=f.proxy(l.changeSlide,l);
l.clickHandler=f.proxy(l.clickHandler,l);
l.selectHandler=f.proxy(l.selectHandler,l);
l.setPosition=f.proxy(l.setPosition,l);
l.swipeHandler=f.proxy(l.swipeHandler,l);
l.dragHandler=f.proxy(l.dragHandler,l);
l.keyHandler=f.proxy(l.keyHandler,l);
l.autoPlayIterator=f.proxy(l.autoPlayIterator,l);
l.instanceUid=h++;
l.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
l.init(true);
l.checkResponsive(true)
}return i
}());
g.prototype.addSlide=g.prototype.slickAdd=function(h,j,k){var i=this;
if(typeof(j)==="boolean"){k=j;
j=null
}else{if(j<0||(j>=i.slideCount)){return false
}}i.unload();
if(typeof(j)==="number"){if(j===0&&i.$slides.length===0){f(h).appendTo(i.$slideTrack)
}else{if(k){f(h).insertBefore(i.$slides.eq(j))
}else{f(h).insertAfter(i.$slides.eq(j))
}}}else{if(k===true){f(h).prependTo(i.$slideTrack)
}else{f(h).appendTo(i.$slideTrack)
}}i.$slides=i.$slideTrack.children(this.options.slide);
i.$slideTrack.children(this.options.slide).detach();
i.$slideTrack.append(i.$slides);
i.$slides.each(function(l,m){f(m).attr("data-slick-index",l)
});
i.$slidesCache=i.$slides;
i.reinit()
};
g.prototype.animateHeight=function(){var i=this;
if(i.options.slidesToShow===1&&i.options.adaptiveHeight===true&&i.options.vertical===false){var h=i.$slides.eq(i.currentSlide).outerHeight(true);
i.$list.animate({height:h},i.options.speed)
}};
g.prototype.animateSlide=function(k,j){var i={},h=this;
h.animateHeight();
if(h.options.rtl===true&&h.options.vertical===false){k=-k
}if(h.transformsEnabled===false){if(h.options.vertical===false){h.$slideTrack.animate({left:k},h.options.speed,h.options.easing,j)
}else{h.$slideTrack.animate({top:k},h.options.speed,h.options.easing,j)
}}else{if(h.cssTransitions===false){if(h.options.rtl===true){h.currentLeft=-(h.currentLeft)
}f({animStart:h.currentLeft}).animate({animStart:k},{duration:h.options.speed,easing:h.options.easing,step:function(l){l=Math.ceil(l);
if(h.options.vertical===false){i[h.animType]="translate("+l+"px, 0px)";
h.$slideTrack.css(i)
}else{i[h.animType]="translate(0px,"+l+"px)";
h.$slideTrack.css(i)
}},complete:function(){if(j){j.call()
}}})
}else{h.applyTransition();
k=Math.ceil(k);
if(h.options.vertical===false){i[h.animType]="translate3d("+k+"px, 0px, 0px)"
}else{i[h.animType]="translate3d(0px,"+k+"px, 0px)"
}h.$slideTrack.css(i);
if(j){setTimeout(function(){h.disableTransition();
j.call()
},h.options.speed)
}}}};
g.prototype.asNavFor=function(j){var i=this,h=i.options.asNavFor;
if(h&&h!==null){h=f(h).not(i.$slider)
}if(h!==null&&typeof h==="object"){h.each(function(){var k=f(this).slick("getSlick");
if(!k.unslicked){k.slideHandler(j,true)
}})
}};
g.prototype.applyTransition=function(h){var i=this,j={};
if(i.options.fade===false){j[i.transitionType]=i.transformType+" "+i.options.speed+"ms "+i.options.cssEase
}else{j[i.transitionType]="opacity "+i.options.speed+"ms "+i.options.cssEase
}if(i.options.fade===false){i.$slideTrack.css(j)
}else{i.$slides.eq(h).css(j)
}};
g.prototype.autoPlay=function(){var h=this;
if(h.autoPlayTimer){clearInterval(h.autoPlayTimer)
}if(h.slideCount>h.options.slidesToShow&&h.paused!==true){h.autoPlayTimer=setInterval(h.autoPlayIterator,h.options.autoplaySpeed)
}};
g.prototype.autoPlayClear=function(){var h=this;
if(h.autoPlayTimer){clearInterval(h.autoPlayTimer)
}};
g.prototype.autoPlayIterator=function(){var h=this;
if(h.options.infinite===false){if(h.direction===1){if((h.currentSlide+1)===h.slideCount-1){h.direction=0
}h.slideHandler(h.currentSlide+h.options.slidesToScroll)
}else{if((h.currentSlide-1===0)){h.direction=1
}h.slideHandler(h.currentSlide-h.options.slidesToScroll)
}}else{h.slideHandler(h.currentSlide+h.options.slidesToScroll)
}};
g.prototype.buildArrows=function(){var h=this;
if(h.options.arrows===true&&h.slideCount>h.options.slidesToShow){h.$prevArrow=f(h.options.prevArrow);
h.$nextArrow=f(h.options.nextArrow);
if(h.htmlExpr.test(h.options.prevArrow)){h.$prevArrow.appendTo(h.options.appendArrows)
}if(h.htmlExpr.test(h.options.nextArrow)){h.$nextArrow.appendTo(h.options.appendArrows)
}if(h.options.infinite!==true){h.$prevArrow.addClass("slick-disabled")
}}};
g.prototype.buildDots=function(){var j=this,k,h;
if(j.options.dots===true&&j.slideCount>j.options.slidesToShow){h='<ul class="'+j.options.dotsClass+'">';
for(k=0;
k<=j.getDotCount();
k+=1){h+="<li>"+j.options.customPaging.call(this,j,k)+"</li>"
}h+="</ul>";
j.$dots=f(h).appendTo(j.options.appendDots);
j.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
g.prototype.buildOut=function(){var h=this;
h.$slides=h.$slider.children(":not(.slick-cloned)").addClass("slick-slide");
h.slideCount=h.$slides.length;
h.$slides.each(function(i,j){f(j).attr("data-slick-index",i).data("originalStyling",f(j).attr("style")||"")
});
h.$slidesCache=h.$slides;
h.$slider.addClass("slick-slider");
h.$slideTrack=(h.slideCount===0)?f('<div class="slick-track"/>').appendTo(h.$slider):h.$slides.wrapAll('<div class="slick-track"/>').parent();
h.$list=h.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
h.$slideTrack.css("opacity",0);
if(h.options.centerMode===true||h.options.swipeToSlide===true){h.options.slidesToScroll=1
}f("img[data-lazy]",h.$slider).not("[src]").addClass("slick-loading");
h.setupInfinite();
h.buildArrows();
h.buildDots();
h.updateDots();
if(h.options.accessibility===true){h.$list.prop("tabIndex",0)
}h.setSlideClasses(typeof this.currentSlide==="number"?this.currentSlide:0);
if(h.options.draggable===true){h.$list.addClass("draggable")
}};
g.prototype.buildRows=function(){var q=this,p,o,m,h,n,l,i;
h=document.createDocumentFragment();
l=q.$slider.children();
if(q.options.rows>1){i=q.options.slidesPerRow*q.options.rows;
n=Math.ceil(l.length/i);
for(p=0;
p<n;
p++){var j=document.createElement("div");
for(o=0;
o<q.options.rows;
o++){var r=document.createElement("div");
for(m=0;
m<q.options.slidesPerRow;
m++){var k=(p*i+((o*q.options.slidesPerRow)+m));
if(l.get(k)){r.appendChild(l.get(k))
}}j.appendChild(r)
}h.appendChild(j)
}q.$slider.html(h);
q.$slider.children().children().children().css({width:(100/q.options.slidesPerRow)+"%",display:"inline-block"})
}};
g.prototype.checkResponsive=function(j){var i=this,h,n,m,o=false;
var l=i.$slider.width();
var k=window.innerWidth||f(window).width();
if(i.respondTo==="window"){m=k
}else{if(i.respondTo==="slider"){m=l
}else{if(i.respondTo==="min"){m=Math.min(k,l)
}}}if(i.originalSettings.responsive&&i.originalSettings.responsive.length>-1&&i.originalSettings.responsive!==null){n=null;
for(h in i.breakpoints){if(i.breakpoints.hasOwnProperty(h)){if(i.originalSettings.mobileFirst===false){if(m<i.breakpoints[h]){n=i.breakpoints[h]
}}else{if(m>i.breakpoints[h]){n=i.breakpoints[h]
}}}}if(n!==null){if(i.activeBreakpoint!==null){if(n!==i.activeBreakpoint){i.activeBreakpoint=n;
if(i.breakpointSettings[n]==="unslick"){i.unslick(n)
}else{i.options=f.extend({},i.originalSettings,i.breakpointSettings[n]);
if(j===true){i.currentSlide=i.options.initialSlide
}i.refresh(j)
}o=n
}}else{i.activeBreakpoint=n;
if(i.breakpointSettings[n]==="unslick"){i.unslick(n)
}else{i.options=f.extend({},i.originalSettings,i.breakpointSettings[n]);
if(j===true){i.currentSlide=i.options.initialSlide
}i.refresh(j)
}o=n
}}else{if(i.activeBreakpoint!==null){i.activeBreakpoint=null;
i.options=i.originalSettings;
if(j===true){i.currentSlide=i.options.initialSlide
}i.refresh(j);
o=n
}}if(!j&&o!==false){i.$slider.trigger("breakpoint",[i,o])
}}};
g.prototype.changeSlide=function(l,o){var j=this,h=f(l.target),n,k,m;
if(h.is("a")){l.preventDefault()
}if(!h.is("li")){h=h.closest("li")
}m=(j.slideCount%j.options.slidesToScroll!==0);
n=m?0:(j.slideCount-j.currentSlide)%j.options.slidesToScroll;
switch(l.data.message){case"previous":k=n===0?j.options.slidesToScroll:j.options.slidesToShow-n;
if(j.slideCount>j.options.slidesToShow){j.slideHandler(j.currentSlide-k,false,o)
}break;
case"next":k=n===0?j.options.slidesToScroll:n;
if(j.slideCount>j.options.slidesToShow){j.slideHandler(j.currentSlide+k,false,o)
}break;
case"index":var i=l.data.index===0?0:l.data.index||h.index()*j.options.slidesToScroll;
j.slideHandler(j.checkNavigable(i),false,o);
h.children().trigger("focus");
break;
default:return
}};
g.prototype.checkNavigable=function(i){var h=this,j,k;
j=h.getNavigableIndexes();
k=0;
if(i>j[j.length-1]){i=j[j.length-1]
}else{for(var l in j){if(i<j[l]){i=k;
break
}k=j[l]
}}return i
};
g.prototype.cleanUpEvents=function(){var h=this;
if(h.options.dots&&h.$dots!==null){f("li",h.$dots).off("click.slick",h.changeSlide);
if(h.options.pauseOnDotsHover===true&&h.options.autoplay===true){f("li",h.$dots).off("mouseenter.slick",f.proxy(h.setPaused,h,true)).off("mouseleave.slick",f.proxy(h.setPaused,h,false))
}}if(h.options.arrows===true&&h.slideCount>h.options.slidesToShow){h.$prevArrow&&h.$prevArrow.off("click.slick",h.changeSlide);
h.$nextArrow&&h.$nextArrow.off("click.slick",h.changeSlide)
}h.$list.off("touchstart.slick mousedown.slick",h.swipeHandler);
h.$list.off("touchmove.slick mousemove.slick",h.swipeHandler);
h.$list.off("touchend.slick mouseup.slick",h.swipeHandler);
h.$list.off("touchcancel.slick mouseleave.slick",h.swipeHandler);
h.$list.off("click.slick",h.clickHandler);
f(document).off(h.visibilityChange,h.visibility);
h.$list.off("mouseenter.slick",f.proxy(h.setPaused,h,true));
h.$list.off("mouseleave.slick",f.proxy(h.setPaused,h,false));
if(h.options.accessibility===true){h.$list.off("keydown.slick",h.keyHandler)
}if(h.options.focusOnSelect===true){f(h.$slideTrack).children().off("click.slick",h.selectHandler)
}f(window).off("orientationchange.slick.slick-"+h.instanceUid,h.orientationChange);
f(window).off("resize.slick.slick-"+h.instanceUid,h.resize);
f("[draggable!=true]",h.$slideTrack).off("dragstart",h.preventDefault);
f(window).off("load.slick.slick-"+h.instanceUid,h.setPosition);
f(document).off("ready.slick.slick-"+h.instanceUid,h.setPosition)
};
g.prototype.cleanUpRows=function(){var i=this,h;
if(i.options.rows>1){h=i.$slides.children().children();
h.removeAttr("style");
i.$slider.html(h)
}};
g.prototype.clickHandler=function(i){var h=this;
if(h.shouldClick===false){i.stopImmediatePropagation();
i.stopPropagation();
i.preventDefault()
}};
g.prototype.destroy=function(i){var h=this;
h.autoPlayClear();
h.touchObject={};
h.cleanUpEvents();
f(".slick-cloned",h.$slider).detach();
if(h.$dots){h.$dots.remove()
}if(h.$prevArrow&&(typeof h.options.prevArrow!=="object")){h.$prevArrow.remove()
}if(h.$nextArrow&&(typeof h.options.nextArrow!=="object")){h.$nextArrow.remove()
}if(h.$slides){h.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){f(this).attr("style",f(this).data("originalStyling"))
});
h.$slideTrack.children(this.options.slide).detach();
h.$slideTrack.detach();
h.$list.detach();
h.$slider.append(h.$slides)
}h.cleanUpRows();
h.$slider.removeClass("slick-slider");
h.$slider.removeClass("slick-initialized");
h.unslicked=true;
if(!i){h.$slider.trigger("destroy",[h])
}};
g.prototype.disableTransition=function(h){var i=this,j={};
j[i.transitionType]="";
if(i.options.fade===false){i.$slideTrack.css(j)
}else{i.$slides.eq(h).css(j)
}};
g.prototype.fadeSlide=function(i,j){var h=this;
if(h.cssTransitions===false){h.$slides.eq(i).css({zIndex:1000});
h.$slides.eq(i).animate({opacity:1},h.options.speed,h.options.easing,j)
}else{h.applyTransition(i);
h.$slides.eq(i).css({opacity:1,zIndex:1000});
if(j){setTimeout(function(){h.disableTransition(i);
j.call()
},h.options.speed)
}}};
g.prototype.filterSlides=g.prototype.slickFilter=function(i){var h=this;
if(i!==null){h.unload();
h.$slideTrack.children(this.options.slide).detach();
h.$slidesCache.filter(i).appendTo(h.$slideTrack);
h.reinit()
}};
g.prototype.getCurrent=g.prototype.slickCurrentSlide=function(){var h=this;
return h.currentSlide
};
g.prototype.getDotCount=function(){var i=this;
var k=0;
var h=0;
var j=0;
if(i.options.infinite===true){while(k<i.slideCount){++j;
k=h+i.options.slidesToShow;
h+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow
}}else{if(i.options.centerMode===true){j=i.slideCount
}else{while(k<i.slideCount){++j;
k=h+i.options.slidesToShow;
h+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow
}}}return j-1
};
g.prototype.getLeft=function(k){var i=this,m,j,h=0,l;
i.slideOffset=0;
j=i.$slides.first().outerHeight();
if(i.options.infinite===true){if(i.slideCount>i.options.slidesToShow){i.slideOffset=(i.slideWidth*i.options.slidesToShow)*-1;
h=(j*i.options.slidesToShow)*-1
}if(i.slideCount%i.options.slidesToScroll!==0){if(k+i.options.slidesToScroll>i.slideCount&&i.slideCount>i.options.slidesToShow){if(k>i.slideCount){i.slideOffset=((i.options.slidesToShow-(k-i.slideCount))*i.slideWidth)*-1;
h=((i.options.slidesToShow-(k-i.slideCount))*j)*-1
}else{i.slideOffset=((i.slideCount%i.options.slidesToScroll)*i.slideWidth)*-1;
h=((i.slideCount%i.options.slidesToScroll)*j)*-1
}}}}else{if(k+i.options.slidesToShow>i.slideCount){i.slideOffset=((k+i.options.slidesToShow)-i.slideCount)*i.slideWidth;
h=((k+i.options.slidesToShow)-i.slideCount)*j
}}if(i.slideCount<=i.options.slidesToShow){i.slideOffset=0;
h=0
}if(i.options.centerMode===true&&i.options.infinite===true){i.slideOffset+=i.slideWidth*Math.floor(i.options.slidesToShow/2)-i.slideWidth
}else{if(i.options.centerMode===true){i.slideOffset=0;
i.slideOffset+=i.slideWidth*Math.floor(i.options.slidesToShow/2)
}}if(i.options.vertical===false){m=((k*i.slideWidth)*-1)+i.slideOffset
}else{m=((k*j)*-1)+h
}if(i.options.variableWidth===true){if(i.slideCount<=i.options.slidesToShow||i.options.infinite===false){l=i.$slideTrack.children(".slick-slide").eq(k)
}else{l=i.$slideTrack.children(".slick-slide").eq(k+i.options.slidesToShow)
}m=l[0]?l[0].offsetLeft*-1:0;
if(i.options.centerMode===true){if(i.options.infinite===false){l=i.$slideTrack.children(".slick-slide").eq(k)
}else{l=i.$slideTrack.children(".slick-slide").eq(k+i.options.slidesToShow+1)
}m=l[0]?l[0].offsetLeft*-1:0;
m+=(i.$list.width()-l.outerWidth())/2
}}return m
};
g.prototype.getOption=g.prototype.slickGetOption=function(i){var h=this;
return h.options[i]
};
g.prototype.getNavigableIndexes=function(){var k=this,l=0,i=0,j=[],h;
if(k.options.infinite===false){h=k.slideCount
}else{l=k.options.slidesToScroll*-1;
i=k.options.slidesToScroll*-1;
h=k.slideCount*2
}while(l<h){j.push(l);
l=i+k.options.slidesToScroll;
i+=k.options.slidesToScroll<=k.options.slidesToShow?k.options.slidesToScroll:k.options.slidesToShow
}return j
};
g.prototype.getSlick=function(){return this
};
g.prototype.getSlideCount=function(){var j=this,i,k,h;
h=j.options.centerMode===true?j.slideWidth*Math.floor(j.options.slidesToShow/2):0;
if(j.options.swipeToSlide===true){j.$slideTrack.find(".slick-slide").each(function(m,l){if(l.offsetLeft-h+(f(l).outerWidth()/2)>(j.swipeLeft*-1)){k=l;
return false
}});
i=Math.abs(f(k).attr("data-slick-index")-j.currentSlide)||1;
return i
}else{return j.options.slidesToScroll
}};
g.prototype.goTo=g.prototype.slickGoTo=function(h,j){var i=this;
i.changeSlide({data:{message:"index",index:parseInt(h)}},j)
};
g.prototype.init=function(h){var i=this;
if(!f(i.$slider).hasClass("slick-initialized")){f(i.$slider).addClass("slick-initialized");
i.buildRows();
i.buildOut();
i.setProps();
i.startLoad();
i.loadSlider();
i.initializeEvents();
i.updateArrows();
i.updateDots()
}if(h){i.$slider.trigger("init",[i])
}};
g.prototype.initArrowEvents=function(){var h=this;
if(h.options.arrows===true&&h.slideCount>h.options.slidesToShow){h.$prevArrow.on("click.slick",{message:"previous"},h.changeSlide);
h.$nextArrow.on("click.slick",{message:"next"},h.changeSlide)
}};
g.prototype.initDotEvents=function(){var h=this;
if(h.options.dots===true&&h.slideCount>h.options.slidesToShow){f("li",h.$dots).on("click.slick",{message:"index"},h.changeSlide)
}if(h.options.dots===true&&h.options.pauseOnDotsHover===true&&h.options.autoplay===true){f("li",h.$dots).on("mouseenter.slick",f.proxy(h.setPaused,h,true)).on("mouseleave.slick",f.proxy(h.setPaused,h,false))
}};
g.prototype.initializeEvents=function(){var h=this;
h.initArrowEvents();
h.initDotEvents();
h.$list.on("touchstart.slick mousedown.slick",{action:"start"},h.swipeHandler);
h.$list.on("touchmove.slick mousemove.slick",{action:"move"},h.swipeHandler);
h.$list.on("touchend.slick mouseup.slick",{action:"end"},h.swipeHandler);
h.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},h.swipeHandler);
h.$list.on("click.slick",h.clickHandler);
f(document).on(h.visibilityChange,f.proxy(h.visibility,h));
h.$list.on("mouseenter.slick",f.proxy(h.setPaused,h,true));
h.$list.on("mouseleave.slick",f.proxy(h.setPaused,h,false));
if(h.options.accessibility===true){h.$list.on("keydown.slick",h.keyHandler)
}if(h.options.focusOnSelect===true){f(h.$slideTrack).children().on("click.slick",h.selectHandler)
}f(window).on("orientationchange.slick.slick-"+h.instanceUid,f.proxy(h.orientationChange,h));
f(window).on("resize.slick.slick-"+h.instanceUid,f.proxy(h.resize,h));
f("[draggable!=true]",h.$slideTrack).on("dragstart",h.preventDefault);
f(window).on("load.slick.slick-"+h.instanceUid,h.setPosition);
f(document).on("ready.slick.slick-"+h.instanceUid,h.setPosition)
};
g.prototype.initUI=function(){var h=this;
if(h.options.arrows===true&&h.slideCount>h.options.slidesToShow){h.$prevArrow.show();
h.$nextArrow.show()
}if(h.options.dots===true&&h.slideCount>h.options.slidesToShow){h.$dots.show()
}if(h.options.autoplay===true){h.autoPlay()
}};
g.prototype.keyHandler=function(i){var h=this;
if(i.keyCode===37&&h.options.accessibility===true){h.changeSlide({data:{message:"previous"}})
}else{if(i.keyCode===39&&h.options.accessibility===true){h.changeSlide({data:{message:"next"}})
}}};
g.prototype.lazyLoad=function(){var j=this,h,m,l,k;
function i(n){f("img[data-lazy]",n).each(function(){var p=f(this),q=f(this).attr("data-lazy"),o=document.createElement("img");
o.onload=function(){p.animate({opacity:1},200)
};
o.src=q;
p.css({opacity:0}).attr("src",q).removeAttr("data-lazy").removeClass("slick-loading")
})
}if(j.options.centerMode===true){if(j.options.infinite===true){l=j.currentSlide+(j.options.slidesToShow/2+1);
k=l+j.options.slidesToShow+2
}else{l=Math.max(0,j.currentSlide-(j.options.slidesToShow/2+1));
k=2+(j.options.slidesToShow/2+1)+j.currentSlide
}}else{l=j.options.infinite?j.options.slidesToShow+j.currentSlide:j.currentSlide;
k=l+j.options.slidesToShow;
if(j.options.fade===true){if(l>0){l--
}if(k<=j.slideCount){k++
}}}h=j.$slider.find(".slick-slide").slice(l,k);
i(h);
if(j.slideCount<=j.options.slidesToShow){m=j.$slider.find(".slick-slide");
i(m)
}else{if(j.currentSlide>=j.slideCount-j.options.slidesToShow){m=j.$slider.find(".slick-cloned").slice(0,j.options.slidesToShow);
i(m)
}else{if(j.currentSlide===0){m=j.$slider.find(".slick-cloned").slice(j.options.slidesToShow*-1);
i(m)
}}}};
g.prototype.loadSlider=function(){var h=this;
h.setPosition();
h.$slideTrack.css({opacity:1});
h.$slider.removeClass("slick-loading");
h.initUI();
if(h.options.lazyLoad==="progressive"){h.progressiveLazyLoad()
}};
g.prototype.next=g.prototype.slickNext=function(){var h=this;
h.changeSlide({data:{message:"next"}})
};
g.prototype.orientationChange=function(){var h=this;
h.checkResponsive();
h.setPosition()
};
g.prototype.pause=g.prototype.slickPause=function(){var h=this;
h.autoPlayClear();
h.paused=true
};
g.prototype.play=g.prototype.slickPlay=function(){var h=this;
h.paused=false;
h.autoPlay()
};
g.prototype.postSlide=function(i){var h=this;
h.$slider.trigger("afterChange",[h,i]);
h.animating=false;
h.setPosition();
h.swipeLeft=null;
if(h.options.autoplay===true&&h.paused===false){h.autoPlay()
}};
g.prototype.prev=g.prototype.slickPrev=function(){var h=this;
h.changeSlide({data:{message:"previous"}})
};
g.prototype.preventDefault=function(h){h.preventDefault()
};
g.prototype.progressiveLazyLoad=function(){var i=this,h,j;
h=f("img[data-lazy]",i.$slider).length;
if(h>0){j=f("img[data-lazy]",i.$slider).first();
j.attr("src",j.attr("data-lazy")).removeClass("slick-loading").load(function(){j.removeAttr("data-lazy");
i.progressiveLazyLoad();
if(i.options.adaptiveHeight===true){i.setPosition()
}}).error(function(){j.removeAttr("data-lazy");
i.progressiveLazyLoad()
})
}};
g.prototype.refresh=function(h){var i=this,j=i.currentSlide;
i.destroy(true);
f.extend(i,i.initials);
i.init();
if(!h){i.changeSlide({data:{message:"index",index:j}},false)
}};
g.prototype.reinit=function(){var h=this;
h.$slides=h.$slideTrack.children(h.options.slide).addClass("slick-slide");
h.slideCount=h.$slides.length;
if(h.currentSlide>=h.slideCount&&h.currentSlide!==0){h.currentSlide=h.currentSlide-h.options.slidesToScroll
}if(h.slideCount<=h.options.slidesToShow){h.currentSlide=0
}h.setProps();
h.setupInfinite();
h.buildArrows();
h.updateArrows();
h.initArrowEvents();
h.buildDots();
h.updateDots();
h.initDotEvents();
if(h.options.focusOnSelect===true){f(h.$slideTrack).children().on("click.slick",h.selectHandler)
}h.setSlideClasses(0);
h.setPosition();
h.$slider.trigger("reInit",[h])
};
g.prototype.resize=function(){var h=this;
if(f(window).width()!==h.windowWidth){clearTimeout(h.windowDelay);
h.windowDelay=window.setTimeout(function(){h.windowWidth=f(window).width();
h.checkResponsive();
if(!h.unslicked){h.setPosition()
}},50)
}};
g.prototype.removeSlide=g.prototype.slickRemove=function(i,k,j){var h=this;
if(typeof(i)==="boolean"){k=i;
i=k===true?0:h.slideCount-1
}else{i=k===true?--i:i
}if(h.slideCount<1||i<0||i>h.slideCount-1){return false
}h.unload();
if(j===true){h.$slideTrack.children().remove()
}else{h.$slideTrack.children(this.options.slide).eq(i).remove()
}h.$slides=h.$slideTrack.children(this.options.slide);
h.$slideTrack.children(this.options.slide).detach();
h.$slideTrack.append(h.$slides);
h.$slidesCache=h.$slides;
h.reinit()
};
g.prototype.setCSS=function(i){var j=this,k={},h,l;
if(j.options.rtl===true){i=-i
}h=j.positionProp=="left"?Math.ceil(i)+"px":"0px";
l=j.positionProp=="top"?Math.ceil(i)+"px":"0px";
k[j.positionProp]=i;
if(j.transformsEnabled===false){j.$slideTrack.css(k)
}else{k={};
if(j.cssTransitions===false){k[j.animType]="translate("+h+", "+l+")";
j.$slideTrack.css(k)
}else{k[j.animType]="translate3d("+h+", "+l+", 0px)";
j.$slideTrack.css(k)
}}};
g.prototype.setDimensions=function(){var h=this;
if(h.options.vertical===false){if(h.options.centerMode===true){h.$list.css({padding:("0px "+h.options.centerPadding)})
}}else{h.$list.height(h.$slides.first().outerHeight(true)*h.options.slidesToShow);
if(h.options.centerMode===true){h.$list.css({padding:(h.options.centerPadding+" 0px")})
}}h.listWidth=h.$list.width();
h.listHeight=h.$list.height();
if(h.options.vertical===false&&h.options.variableWidth===false){h.slideWidth=Math.ceil(h.listWidth/h.options.slidesToShow);
h.$slideTrack.width(Math.ceil((h.slideWidth*h.$slideTrack.children(".slick-slide").length)))
}else{if(h.options.variableWidth===true){h.$slideTrack.width(5000*h.slideCount)
}else{h.slideWidth=Math.ceil(h.listWidth);
h.$slideTrack.height(Math.ceil((h.$slides.first().outerHeight(true)*h.$slideTrack.children(".slick-slide").length)))
}}var i=h.$slides.first().outerWidth(true)-h.$slides.first().width();
if(h.options.variableWidth===false){h.$slideTrack.children(".slick-slide").width(h.slideWidth-i)
}};
g.prototype.setFade=function(){var h=this,i;
h.$slides.each(function(j,k){i=(h.slideWidth*j)*-1;
if(h.options.rtl===true){f(k).css({position:"relative",right:i,top:0,zIndex:800,opacity:0})
}else{f(k).css({position:"relative",left:i,top:0,zIndex:800,opacity:0})
}});
h.$slides.eq(h.currentSlide).css({zIndex:900,opacity:1})
};
g.prototype.setHeight=function(){var i=this;
if(i.options.slidesToShow===1&&i.options.adaptiveHeight===true&&i.options.vertical===false){var h=i.$slides.eq(i.currentSlide).outerHeight(true);
i.$list.css("height",h)
}};
g.prototype.setOption=g.prototype.slickSetOption=function(j,k,i){var h=this;
h.options[j]=k;
if(i===true){h.unload();
h.reinit()
}};
g.prototype.setPosition=function(){var h=this;
h.setDimensions();
h.setHeight();
if(h.options.fade===false){h.setCSS(h.getLeft(h.currentSlide))
}else{h.setFade()
}h.$slider.trigger("setPosition",[h])
};
g.prototype.setProps=function(){var i=this,h=document.body.style;
i.positionProp=i.options.vertical===true?"top":"left";
if(i.positionProp==="top"){i.$slider.addClass("slick-vertical")
}else{i.$slider.removeClass("slick-vertical")
}if(h.WebkitTransition!==undefined||h.MozTransition!==undefined||h.msTransition!==undefined){if(i.options.useCSS===true){i.cssTransitions=true
}}if(h.OTransform!==undefined){i.animType="OTransform";
i.transformType="-o-transform";
i.transitionType="OTransition";
if(h.perspectiveProperty===undefined&&h.webkitPerspective===undefined){i.animType=false
}}if(h.MozTransform!==undefined){i.animType="MozTransform";
i.transformType="-moz-transform";
i.transitionType="MozTransition";
if(h.perspectiveProperty===undefined&&h.MozPerspective===undefined){i.animType=false
}}if(h.webkitTransform!==undefined){i.animType="webkitTransform";
i.transformType="-webkit-transform";
i.transitionType="webkitTransition";
if(h.perspectiveProperty===undefined&&h.webkitPerspective===undefined){i.animType=false
}}if(h.msTransform!==undefined){i.animType="msTransform";
i.transformType="-ms-transform";
i.transitionType="msTransition";
if(h.msTransform===undefined){i.animType=false
}}if(h.transform!==undefined&&i.animType!==false){i.animType="transform";
i.transformType="transform";
i.transitionType="transition"
}i.transformsEnabled=(i.animType!==null&&i.animType!==false)
};
g.prototype.setSlideClasses=function(k){var j=this,h,i,m,l;
j.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center");
i=j.$slider.find(".slick-slide");
if(j.options.centerMode===true){h=Math.floor(j.options.slidesToShow/2);
if(j.options.infinite===true){if(k>=h&&k<=(j.slideCount-1)-h){j.$slides.slice(k-h,k+h+1).addClass("slick-active").attr("aria-hidden","false")
}else{m=j.options.slidesToShow+k;
i.slice(m-h+1,m+h+2).addClass("slick-active").attr("aria-hidden","false")
}if(k===0){i.eq(i.length-1-j.options.slidesToShow).addClass("slick-center")
}else{if(k===j.slideCount-1){i.eq(j.options.slidesToShow).addClass("slick-center")
}}}j.$slides.eq(k).addClass("slick-center")
}else{if(k>=0&&k<=(j.slideCount-j.options.slidesToShow)){j.$slides.slice(k,k+j.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(i.length<=j.options.slidesToShow){i.addClass("slick-active").attr("aria-hidden","false")
}else{l=j.slideCount%j.options.slidesToShow;
m=j.options.infinite===true?j.options.slidesToShow+k:k;
if(j.options.slidesToShow==j.options.slidesToScroll&&(j.slideCount-k)<j.options.slidesToShow){i.slice(m-(j.options.slidesToShow-l),m+l).addClass("slick-active").attr("aria-hidden","false")
}else{i.slice(m,m+j.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(j.options.lazyLoad==="ondemand"){j.lazyLoad()
}};
g.prototype.setupInfinite=function(){var h=this,j,l,k;
if(h.options.fade===true){h.options.centerMode=false
}if(h.options.infinite===true&&h.options.fade===false){l=null;
if(h.slideCount>h.options.slidesToShow){if(h.options.centerMode===true){k=h.options.slidesToShow+1
}else{k=h.options.slidesToShow
}for(j=h.slideCount;
j>(h.slideCount-k);
j-=1){l=j-1;
f(h.$slides[l]).clone(true).attr("id","").attr("data-slick-index",l-h.slideCount).prependTo(h.$slideTrack).addClass("slick-cloned")
}for(j=0;
j<k;
j+=1){l=j;
f(h.$slides[l]).clone(true).attr("id","").attr("data-slick-index",l+h.slideCount).appendTo(h.$slideTrack).addClass("slick-cloned")
}h.$slideTrack.find(".slick-cloned").find("[id]").each(function(){f(this).attr("id","")
})
}}};
g.prototype.setPaused=function(i){var h=this;
if(h.options.autoplay===true&&h.options.pauseOnHover===true){h.paused=i;
if(!i){h.autoPlay()
}else{h.autoPlayClear()
}}};
g.prototype.selectHandler=function(k){var j=this;
var i=f(k.target).is(".slick-slide")?f(k.target):f(k.target).parents(".slick-slide");
var h=parseInt(i.attr("data-slick-index"));
if(!h){h=0
}if(j.slideCount<=j.options.slidesToShow){j.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true");
j.$slides.eq(h).addClass("slick-active").attr("aria-hidden","false");
if(j.options.centerMode===true){j.$slider.find(".slick-slide").removeClass("slick-center");
j.$slides.eq(h).addClass("slick-center")
}j.asNavFor(h);
return
}j.slideHandler(h)
};
g.prototype.slideHandler=function(j,m,i){var h,p,l,n,k=null,o=this;
m=m||false;
if(o.animating===true&&o.options.waitForAnimate===true){return
}if(o.options.fade===true&&o.currentSlide===j){return
}if(o.slideCount<=o.options.slidesToShow){return
}if(m===false){o.asNavFor(j)
}h=j;
k=o.getLeft(h);
n=o.getLeft(o.currentSlide);
o.currentLeft=o.swipeLeft===null?n:o.swipeLeft;
if(o.options.infinite===false&&o.options.centerMode===false&&(j<0||j>o.getDotCount()*o.options.slidesToScroll)){if(o.options.fade===false){h=o.currentSlide;
if(i!==true){o.animateSlide(n,function(){o.postSlide(h)
})
}else{o.postSlide(h)
}}return
}else{if(o.options.infinite===false&&o.options.centerMode===true&&(j<0||j>(o.slideCount-o.options.slidesToScroll))){if(o.options.fade===false){h=o.currentSlide;
if(i!==true){o.animateSlide(n,function(){o.postSlide(h)
})
}else{o.postSlide(h)
}}return
}}if(o.options.autoplay===true){clearInterval(o.autoPlayTimer)
}if(h<0){if(o.slideCount%o.options.slidesToScroll!==0){p=o.slideCount-(o.slideCount%o.options.slidesToScroll)
}else{p=o.slideCount+h
}}else{if(h>=o.slideCount){if(o.slideCount%o.options.slidesToScroll!==0){p=0
}else{p=h-o.slideCount
}}else{p=h
}}o.animating=true;
o.$slider.trigger("beforeChange",[o,o.currentSlide,p]);
l=o.currentSlide;
o.currentSlide=p;
o.setSlideClasses(o.currentSlide);
o.updateDots();
o.updateArrows();
if(o.options.fade===true){if(i!==true){o.fadeSlide(p,function(){o.postSlide(p)
})
}else{o.postSlide(p)
}o.animateHeight();
return
}if(i!==true){o.animateSlide(k,function(){o.postSlide(p)
})
}else{o.postSlide(p)
}};
g.prototype.startLoad=function(){var h=this;
if(h.options.arrows===true&&h.slideCount>h.options.slidesToShow){h.$prevArrow.hide();
h.$nextArrow.hide()
}if(h.options.dots===true&&h.slideCount>h.options.slidesToShow){h.$dots.hide()
}h.$slider.addClass("slick-loading")
};
g.prototype.swipeDirection=function(){var h,k,j,l,i=this;
h=i.touchObject.startX-i.touchObject.curX;
k=i.touchObject.startY-i.touchObject.curY;
j=Math.atan2(k,h);
l=Math.round(j*180/Math.PI);
if(l<0){l=360-Math.abs(l)
}if((l<=45)&&(l>=0)){return(i.options.rtl===false?"left":"right")
}if((l<=360)&&(l>=315)){return(i.options.rtl===false?"left":"right")
}if((l>=135)&&(l<=225)){return(i.options.rtl===false?"right":"left")
}if(i.options.verticalSwiping===true){if((l>=35)&&(l<=135)){return"left"
}else{return"right"
}}return"vertical"
};
g.prototype.swipeEnd=function(j){var i=this,h;
i.dragging=false;
i.shouldClick=(i.touchObject.swipeLength>10)?false:true;
if(i.touchObject.curX===undefined){return false
}if(i.touchObject.edgeHit===true){i.$slider.trigger("edge",[i,i.swipeDirection()])
}if(i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(i.swipeDirection()){case"left":h=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount();
i.slideHandler(h);
i.currentDirection=0;
i.touchObject={};
i.$slider.trigger("swipe",[i,"left"]);
break;
case"right":h=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount();
i.slideHandler(h);
i.currentDirection=1;
i.touchObject={};
i.$slider.trigger("swipe",[i,"right"]);
break
}}else{if(i.touchObject.startX!==i.touchObject.curX){i.slideHandler(i.currentSlide);
i.touchObject={}
}}};
g.prototype.swipeHandler=function(i){var h=this;
if((h.options.swipe===false)||("ontouchend" in document&&h.options.swipe===false)){return
}else{if(h.options.draggable===false&&i.type.indexOf("mouse")!==-1){return
}}h.touchObject.fingerCount=i.originalEvent&&i.originalEvent.touches!==undefined?i.originalEvent.touches.length:1;
h.touchObject.minSwipe=h.listWidth/h.options.touchThreshold;
if(h.options.verticalSwiping===true){h.touchObject.minSwipe=h.listHeight/h.options.touchThreshold
}switch(i.data.action){case"start":h.swipeStart(i);
break;
case"move":h.swipeMove(i);
break;
case"end":h.swipeEnd(i);
break
}};
g.prototype.swipeMove=function(k){var j=this,o=false,m,i,l,h,n;
n=k.originalEvent!==undefined?k.originalEvent.touches:null;
if(!j.dragging||n&&n.length!==1){return false
}m=j.getLeft(j.currentSlide);
j.touchObject.curX=n!==undefined?n[0].pageX:k.clientX;
j.touchObject.curY=n!==undefined?n[0].pageY:k.clientY;
j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curX-j.touchObject.startX,2)));
if(j.options.verticalSwiping===true){j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curY-j.touchObject.startY,2)))
}i=j.swipeDirection();
if(i==="vertical"){return
}if(k.originalEvent!==undefined&&j.touchObject.swipeLength>4){k.preventDefault()
}h=(j.options.rtl===false?1:-1)*(j.touchObject.curX>j.touchObject.startX?1:-1);
if(j.options.verticalSwiping===true){h=j.touchObject.curY>j.touchObject.startY?1:-1
}l=j.touchObject.swipeLength;
j.touchObject.edgeHit=false;
if(j.options.infinite===false){if((j.currentSlide===0&&i==="right")||(j.currentSlide>=j.getDotCount()&&i==="left")){l=j.touchObject.swipeLength*j.options.edgeFriction;
j.touchObject.edgeHit=true
}}if(j.options.vertical===false){j.swipeLeft=m+l*h
}else{j.swipeLeft=m+(l*(j.$list.height()/j.listWidth))*h
}if(j.options.verticalSwiping===true){j.swipeLeft=m+l*h
}if(j.options.fade===true||j.options.touchMove===false){return false
}if(j.animating===true){j.swipeLeft=null;
return false
}j.setCSS(j.swipeLeft)
};
g.prototype.swipeStart=function(i){var h=this,j;
if(h.touchObject.fingerCount!==1||h.slideCount<=h.options.slidesToShow){h.touchObject={};
return false
}if(i.originalEvent!==undefined&&i.originalEvent.touches!==undefined){j=i.originalEvent.touches[0]
}h.touchObject.startX=h.touchObject.curX=j!==undefined?j.pageX:i.clientX;
h.touchObject.startY=h.touchObject.curY=j!==undefined?j.pageY:i.clientY;
h.dragging=true
};
g.prototype.unfilterSlides=g.prototype.slickUnfilter=function(){var h=this;
if(h.$slidesCache!==null){h.unload();
h.$slideTrack.children(this.options.slide).detach();
h.$slidesCache.appendTo(h.$slideTrack);
h.reinit()
}};
g.prototype.unload=function(){var h=this;
f(".slick-cloned",h.$slider).remove();
if(h.$dots){h.$dots.remove()
}if(h.$prevArrow&&(typeof h.options.prevArrow!=="object")){h.$prevArrow.remove()
}if(h.$nextArrow&&(typeof h.options.nextArrow!=="object")){h.$nextArrow.remove()
}h.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")
};
g.prototype.unslick=function(i){var h=this;
h.$slider.trigger("unslick",[h,i]);
h.destroy()
};
g.prototype.updateArrows=function(){var i=this,h;
h=Math.floor(i.options.slidesToShow/2);
if(i.options.arrows===true&&i.options.infinite!==true&&i.slideCount>i.options.slidesToShow){i.$prevArrow.removeClass("slick-disabled");
i.$nextArrow.removeClass("slick-disabled");
if(i.currentSlide===0){i.$prevArrow.addClass("slick-disabled");
i.$nextArrow.removeClass("slick-disabled")
}else{if(i.currentSlide>=i.slideCount-i.options.slidesToShow&&i.options.centerMode===false){i.$nextArrow.addClass("slick-disabled");
i.$prevArrow.removeClass("slick-disabled")
}else{if(i.currentSlide>=i.slideCount-1&&i.options.centerMode===true){i.$nextArrow.addClass("slick-disabled");
i.$prevArrow.removeClass("slick-disabled")
}}}}};
g.prototype.updateDots=function(){var h=this;
if(h.$dots!==null){h.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
h.$dots.find("li").eq(Math.floor(h.currentSlide/h.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
g.prototype.visibility=function(){var h=this;
if(document[h.hidden]){h.paused=true;
h.autoPlayClear()
}else{if(h.options.autoplay===true){h.paused=false;
h.autoPlay()
}}};
f.fn.slick=function(){var m=this,o=arguments[0],k=Array.prototype.slice.call(arguments,1),h=m.length,n=0,j;
for(n;
n<h;
n++){if(typeof o=="object"||typeof o=="undefined"){m[n].slick=new g(m[n],o)
}else{j=m[n].slick[o].apply(m[n].slick,k)
}if(typeof j!="undefined"){return j
}}return m
}
}));
e("flightClassPages",["require","jquery","lodash","modernizr","clickTouch","fullPageSlimScroll","fullPage","breakpoints","slick"],function(i){var I=i("jquery");
var V=i("lodash");
var J=i("modernizr");
var R=i("clickTouch");
var N=i("fullPageSlimScroll");
var D=i("fullPage");
var j=i("breakpoints");
var q=i("slick");
var x;
var A;
var E;
var O;
var s;
var B;
var v;
var K;
var n;
var H;
var p;
var w;
var W;
var y=140;
var L=43;
var F=function(){E=I(".cx-section.active");
O=E.find(".cx-exp-slider .slick-slider");
s=O.find(".flight-class-buttons")
};
var h=function(Z){var X=I(Z.target);
var Y=X.data("slideNumber");
u(Y);
O.slick("slickGoTo",Y,false)
};
var u=function(Y){var X=s.find(".active");
X.removeClass("active");
var Z=s.find('[data-slide-number="'+Y+'"]');
Z.addClass("active")
};
var Q=function(X,Z){var Y=I(X).find(".slide-text");
if(Z==="up"){Y.addClass("shift-down")
}if(Z==="down"){Y.addClass("shift-up")
}};
var m=function(X){var Y=I(X).find(".slide-text");
Y.removeClass("shift-down");
Y.removeClass("shift-up")
};
var U=function(X){var Y=I(X).prevAll().find(".slide-text");
var Z=I(X).nextAll().find(".slide-text");
Y.removeClass("shift-down").addClass("shift-up");
Z.removeClass("shift-up").addClass("shift-down")
};
var k=function(){var X=I(window).height();
var ab=I(window).width();
var ah=I(".frame-navigation-bottom .menu-bar").height();
var ad=I(".cx-section.active").index();
var ae;
var Y=x.find(".fp-section:first-child");
var ai=x.find(".fp-section:last-child");
var ac=x.find(".fp-section:not(:first-child)");
var aa=I(Y).find(".fp-tableCell");
var Z=I(ac).find(".fp-tableCell");
var af=I(ai).find(".slimScrollDiv");
var ag=I(ai).find(".fp-scrollable");
if(j.isSmallUp()){x.height(X-L);
Y.height(X-L);
aa.height(X-L);
ac.height(X-L-ah);
Z.height(X-L-ah);
af.height(X-L-ah);
ag.height(X-L-ah);
if(ad===0){ae=0
}else{ae=(X-L-ah)*ad*-1;
ae=ae-ah
}}if(j.isLargeUp()){x.height(X-y);
Y.height(X-y);
aa.height(X-y);
ac.height(X-L);
Z.height(X-L);
af.height(X-L);
ag.height(X-L);
if(ad===0){ae=0
}else{ae=-1*((X-y)+((X-L)*(ad-1)))
}}x.css("transform","translate3d(0px, "+ae+"px, 0px)");
x.css("-webkit-transform","translate3d(0px, "+ae+"px, 0px)")
};
var M=function(Y,X,Z){if(X!==1){H.addClass("collapse-header-active");
n.addClass("js-collapse");
p.addClass("main-adjusted")
}else{H.removeClass("collapse-header-active");
n.removeClass("js-collapse");
p.removeClass("main-adjusted")
}z(I(I(".cx-section")[X-1]))
};
var z=function(X){if(X.hasClass("hide-frame-navigation")){w.animate({top:"0"});
W.addClass("hidden");
W.find(".nav-list").removeClass("is-display-block")
}else{w.animate({top:"43px"});
W.removeClass("hidden")
}};
var P=function(){I.fn.fullpage.moveSectionDown()
};
var o=function(){I(document).keydown(function(X){if(X.keyCode===37){O.slick("slickPrev")
}if(X.keyCode===39){O.slick("slickNext")
}})
};
var T=function(){I(".menu-container").toggleClass("expand-book-trip");
I(".button-book-trip").toggleClass("list-active");
I(".nav-book-trip").toggleClass("list-active");
I(".secondary-nav-book-trip-container").toggleClass("active");
I(".button-book-trip .icon").toggleClass("icon-up")
};
var r=function(Y){var aa=I(Y.target).closest(".toggle");
var Z=aa.closest(".toggle-wrapper");
var X=Z.parent().find(".auto-ellipsis");
if(aa.hasClass("expand")){X.addClass("js-auto-ellipsis-off");
Z.find(".expand").addClass("hidden");
Z.find(".compress").removeClass("hidden")
}else{X.removeClass("js-auto-ellipsis-off");
Z.find(".expand").removeClass("hidden");
Z.find(".compress").addClass("hidden")
}};
var l=function(X){var Y=x.find(".auto-ellipsis");
V.each(Y,function(ad){var ac=I(ad);
var ae=ac.find(".white-inverted").height();
var Z=ac.closest(".cx-section").find(".slick-dots").height();
var ab=parseInt(ac.css("padding-bottom"),10);
var aa=ac.height()-(Z-ab);
if(ae>aa){ac.siblings(".toggle-wrapper").removeClass("hidden")
}else{if(!ac.hasClass("js-auto-ellipsis-off")){ac.siblings(".toggle-wrapper").addClass("hidden")
}}})
};
var g=function(){if(j.isLargeUp()){v.appendTo(I(".cx-section").last())
}else{var X=I(document.createElement("div"));
X.addClass("cx-section ");
X.attr("data-anchor","footer");
v.appendTo(X);
X.appendTo(".flight-class-page")
}};
var G=function(Y){var X=1;
V.each(Y,function(ab){var aa=I(ab);
var Z;
if(aa.find(".page-list .snap-in-block").length>0&&aa.find(".two-columns-wrapper").length===0){Z=aa.find(".page-list")
}else{Z=aa.find(".slider-"+X)
}if(!V.isEmpty(Z)){Z.slick({slidesToShow:1,accessibility:true,arrows:false,dots:false,infinite:false,draggable:false,fade:true,touchThreshold:10,responsive:[{breakpoint:1279,settings:{accessibility:true,dots:true,slidesToShow:1,arrows:false,slidesPerRow:1,centerPadding:0,fade:false}}]});
if(Z.find(".parbase .snap-in-block").length>1){Z.find(".toggle-wrapper").addClass("toggle-wrapper-up")
}}X=X+1
});
I(".page-list .two-columns-init").slick({slidesToShow:2,arrows:false,dots:true,infinite:false,draggable:false,responsive:[{breakpoint:1279,settings:{dots:true,slidesToShow:1,arrows:false,slidesPerRow:1,centerPadding:0}}]})
};
var C=function(){if(K.hasClass("less-than-ie9")){var X=I(".cx-section");
V.each(X,function(aa){var Z=I(aa);
var Y=I(aa).find(".slide-text");
if(Y.hasClass("first-text")){Y.css({top:"auto",position:"absolute",bottom:(Z.height()-Y.height())/2})
}else{if(Y.hasClass("left")||Y.hasClass("right")){Y.css({top:"auto",bottom:(Z.height()-Y.height())/2})
}}})
}};
var S=function(){x.on("click",".flight-class-button",h);
x.on("click",".button-down-round",P);
I(".button-book-trip").on("click",T);
I(".cx-exp-slider").on("afterChange",function(Y,Z){var X=O.find(".slick-active").data("slickIndex");
u(X)
});
I(".cx-section").on("click",function(){if(I(".menu-container").hasClass("expand-book-trip")){T()
}if(!(I("header").hasClass("collapse-header-active"))&&I(".cx-section.active").index()!==0){H.addClass("collapse-header-active");
n.addClass("js-collapse");
p.addClass("main-adjusted")
}});
o();
x.on("click",".toggle",r)
};
var f=function(){if(!J.touch){setTimeout(function(){n.trigger("mouseenter").trigger("mouseleave")
},500)
}};
return{init:function(X){if(X.length>0){x=X;
K=I("html");
n=I("header");
H=I("body");
p=I("main");
w=I(".frame-navigation-top");
W=I(".frame-navigation-bottom");
A=I(x.find(".cx-section"));
var Z=I(".cx-section");
v=I("footer");
C();
if(!K.hasClass("less-than-ie9")){n.addClass("fixed-element");
var Y=[];
I(".cx-section").each(function(){Y.push(I(this).data("anchor"))
});
G(Z);
g();
x.fullpage({anchors:Y,loopHorizontal:false,keyboardScrolling:true,css:true,touchSensitivity:25,sectionSelector:".cx-section",scrollOverflow:true,recordHistory:false,normalScrollElementTouchThreshold:0,normalScrollElements:"header",afterResize:function(){k();
F();
m(E);
l();
f()
},afterRender:function(){H.scrollTop(0);
k();
F();
z(I(I(".cx-section")[0]));
I(".fp-scrollable").css("overflow-y","scroll");
if(!j.isLargeUp()){I(".fp-scrollable").last().addClass("hide-scroll-bar")
}x.find(".flight-class-buttons").find('[data-slide-number="0"]').addClass("active");
f()
},afterLoad:function(ab,aa){F();
O.focus();
l();
if(aa===1){H.scrollTop(0)
}},onLeave:function(ad,aa,ag){M(ad,aa,ag);
var ah=I(".cx-section")[aa-1];
var af=I(ah).data("anchor");
var ae=w.find("li a[href=#"+af+"]");
var ab=w.find(".bg-ahove");
var ac=I('.nav-list a[href="#'+af+'"]');
if(ae.length>0){ab.show();
ac.trigger(R)
}else{ab.hide();
w.trigger("nolabel")
}if(j.isLargeUp()){Q(A[ad-1],ag);
m(A[aa-1]);
U(A[aa-1])
}}});
S()
}x.removeClass("inactive").addClass("active")
}}}
});
e("offerCollectionGallery",["jquery","lodash","breakpoints","slick"],function(i,g,h){var f=function(z,m){var s;
var w;
var k;
var v;
var p;
var q=window.CX.gallery.numOfSlideL;
var C=1;
var r=false;
var A={galleryImage:"gallery-image",galleryInfo:"gallery-info",imageContainer:"image-contaner",infoContainer:"image-info",navNext:"gallery-nav-next",navPrev:"gallery-nav-prev"};
var y={infinite:false,draggable:false,slidesToShow:q===2?2:1,slidesToScroll:q===2?2:1,responsive:[{breakpoint:1280,settings:{slidesToShow:C,slidesToScroll:C}}]};
var D=i(document.createElement("button").setAttribute("type","button")).addClass(A.slickNext);
var B=i(document.createElement("button").setAttribute("type","button")).addClass(A.slickPrev);
var o=function(E){E.preventDefault();
if(E.which===32||E.which===13){i(E.target).trigger("click")
}};
var l=function(){if(h.isLargeUp()&&p>q){return true
}else{if(!h.isLargeUp()&&p>C){return true
}else{return false
}}};
var x=function(){var E=l();
if(E){s.find("."+A.navNext).removeClass("hidden");
s.find("."+A.navPrev).removeClass("hidden")
}else{s.find("."+A.navNext).addClass("hidden");
s.find("."+A.navPrev).addClass("hidden")
}};
var j=function(){var F=s.find("."+A.navNext);
var E=s.find("."+A.navPrev);
F.on("keypress",o);
E.on("keypress",o);
if(p===3){w.on("beforeChange",function(H,G,J,I){if(J===0&&I===2){i(w.find("."+A.imageContainer)[1]).addClass("no-margin");
i(k.find("."+A.infoContainer)[1]).addClass("no-margin")
}else{i(w.find("."+A.imageContainer)[1]).removeClass("no-margin");
i(k.find("."+A.infoContainer)[1]).removeClass("no-margin")
}})
}i(window).on("resize",g.debounce(function(){x()
},300))
};
var n=function(){var F=i.extend({},y,{accessibility:false,swipe:false,arrows:false,speed:0},m);
var E=i.extend({},y,{asNavFor:"."+A.galleryInfo+'[data-slick-identifier="'+v+'"]',nextArrow:s.find("."+A.navNext),prevArrow:s.find("."+A.navPrev)},m);
k.on("init",function(H,G){r=true
});
k.on("setPosition",function(H,G){if(r){k.removeClass("hidden");
i(window).trigger("resize");
G.slickPrev();
k.off("setPosition")
}});
x();
k.slick(F);
w.slick(E)
};
var u=function(F,E){s=F;
w=s.find("."+A.galleryImage);
k=s.find("."+A.galleryInfo);
v=(new Date()).getTime();
k.attr("data-slick-identifier",v);
p=w.find("."+A.imageContainer).length;
if(q>1){s.addClass("double-image-in-large")
}n();
j()
};
if(!g.isEmpty(z)){u(z,m)
}};
return{init:function(j,k){f(j,k)
}}
});
e("offerFlightHighlights",["jquery","lodash","breakpoints"],function(l,h,k){var j;
var i={termsAndConditions:"accordion-terms-and-conditions"};
var g=function(o){if(j!==undefined){var m=j.find(".panel-heading");
var n=j.offset().top;
if(k.isLargeUp()){n-=43
}if(m.hasClass("collapsed")){m.click()
}l("body, html").animate({scrollTop:n},500)
}};
var f=function(n,m){j=l("."+i.termsAndConditions);
n.on("click",'a[href="#'+i.termsAndConditions+'"]',g);
if(m!==undefined){var o=m.substring(1);
if(o===i.termsAndConditions){g()
}}};
return{init:function(m,n){if(m.length>0){f(m,n)
}}}
});
e("contentBlock",["jquery","lodash"],function(j,g){var i;
var h={inCollectionPage:"in-collection-page",offerList:"offer-list-wrapper",noCollectionOffer:"no-collection-offer",parsys:"parsys",offerListContentPar:"offer-list-contentpar",hidden:"hidden"};
var k=function(){var m=i.find("."+h.offerList).find("."+h.noCollectionOffer);
if(!g.isEmpty(m)){var l=m.parent();
var n=i.children("."+h.parsys).children().not(l);
n.addClass(h.hidden)
}i.removeClass(h.hidden)
};
var f=function(l){i=l;
if(i.hasClass(h.inCollectionPage)){k()
}};
return{init:function(l){if(!g.isEmpty(l)){f(l)
}}}
});
e("frameNavigation",["jquery","lodash","jquery.hammer","clickTouch","breakpoints"],function(E,P,B,K,j){var r,s,H,q,F,l,G,A,y,x=null,p=false,D,u,n,f,g,C;
var o=function(U,Z,W,Y){var S=8;
var V=4;
var Q=0.5;
var R={};
var X=0;
var T=function(){U.flexV+=(100-X)/V;
U.flexV*=Q;
if(Math.abs(U.flexV)>S){U.flexV=U.flexV>0?S:-S
}X+=U.flexV;
for(var ac in Z){R[ac]=(W[ac]-Z[ac])*X/100+Z[ac]
}var ab=function(){if(Y){Y.call(U,R)
}if(Math.abs(U.flexV)<1&&Math.abs(100-X)<1){clearInterval(U.timer);
U.flexV=0
}};
ab()
};
if(!U.flexV){U.flexV=0
}if(!U.lastTimer){U.lastTimer=0
}var aa=new Date().getTime();
if(aa-U.lastTimer>20){T();
U.lastTimer=aa
}clearInterval(U.timer);
U.timer=setInterval(T,20)
};
var O=function(Q){l.toggleClass("is-display-block");
E(this).find(".view-more").find(".icon").toggleClass("icon-down");
Q.stopPropagation()
};
var v=function(T){var Q=E(T.target);
var S=Q.find("option:selected").text();
var R=T.target.value;
Q.parents(".menu-bar").find(".dropdown-text").text(S);
window.location.href=R
};
var w=function(){u=l.find(".current").find("a").width();
n=l.offset().left;
g=l.find(".current").find("a").offset().left-n
};
var h=function(){w();
D.css({width:u+"px",left:g+"px",visibility:"visible"})
};
var M=function(){C=location.hash;
E('a[href="'+C+'"]').parent().addClass("current currentli").siblings().removeClass("current currentli");
if(j.isLarge()){h()
}};
var L=function(){var Q=E(this);
Q.parent().addClass("current currentli").siblings().removeClass("current currentli");
C=Q.attr("href");
if(j.isLarge()&&!p){w();
if(D.hasClass("hidden")){D.css("width",u+"px");
D.css("left",g+"px")
}else{D.animate({width:u+"px",left:g+"px"},150);
setTimeout(function(){E('a[href="'+C+'"]').parent().addClass("current currentli").siblings().removeClass("current currentli")
},50)
}}if(D.hasClass("hidden")){D.removeClass("hidden")
}};
var I=function(){p=true;
if(j.isLarge()){clearTimeout(x);
o(D[0],{left:D[0].offsetLeft},{left:this.offsetLeft+this.parentNode.offsetLeft},function(Q){D[0].style.left=Math.round(Q.left)+"px"
});
D[0].style.width=this.offsetWidth+"px"
}};
var k=function(){p=false;
if(j.isLarge()){clearTimeout(x);
x=setTimeout(function(){w();
D.animate({width:u+"px",left:g+"px"},300)
},300)
}};
var J=function(){D.addClass("hidden");
var R=H.find("li.currentli");
R.removeClass("currentli current");
var Q=s.find("li.currentli");
Q.removeClass("currentli current")
};
var i=function(){s.find(".nav-list").removeClass("is-display-block");
var Q=E(this).parents(".frame-navigation-bottom").find(".menu-bar").find(".view-more").find(".icon");
if(Q.hasClass("icon-down")){Q.toggleClass("icon-down")
}};
var z=function(Q){var R=E(Q.target).parents(".frame-navigation-bottom").lenght;
if(!R){s.find(".nav-list").removeClass("is-display-block");
s.find(".view-more").find(".icon").removeClass("icon-down")
}Q.stopPropagation()
};
var N=function(){s.on(K,"a",i);
F.hammer().on(K,O);
H.on("change",".dropdown-list",v);
H.on("nolabel",J);
l.on(K,"a",L);
l.on("mouseout","a",k);
E("body").on(K,z);
E(window).resize(h)
};
var m=function(Q){r=Q;
s=E(".frame-navigation-bottom");
H=E(".frame-navigation-top");
F=s.find(".menu-bar");
l=Q.find(".nav-list");
y=Q.find(".nav-list").find("li");
D=H.find(".bg-ahove");
f=l.find("li").eq(1).find("a").attr("href");
C=location.hash;
N()
};
return{init:function(Q){if(!P.isEmpty(Q)){m(Q)
}}}
});
e("adaptiveImageMap",["require","jquery","breakpoints"],function(f){var h=f("jquery");
var g=f("breakpoints");
var i=function(m){var l;
var n=function(){var p=l.find("img");
var q=l.data("thumbnail-map");
if(g.isSmall()){if(p.attr("usemap")!==q.small){p.attr("usemap",q.small)
}}else{if(g.isMedium()){if(p.attr("usemap")!==q.medium){p.attr("usemap",q.medium)
}}else{if(g.isLarge()){if(p.attr("usemap")!==q.large){p.attr("usemap",q.large)
}}}}};
var k=function(){var q=l.find("[data-picture]");
var p=l.find("img");
if(q.length>0){if(p.length>0){n()
}else{setTimeout(k,100)
}}};
var o=function(){h(window).smartresize(k)
};
var j=function(p){l=p;
o();
k()
};
if(m.length>0){j(m)
}};
return i
});
a(["jquery","lodash","modernizr","matchMedia","picturefill","jquery.cookie","jqueryui","clickTouch","hammer","placeholders","jquerydotdotdot","gridMatchHeight","tables","header","geolocation","datePicker","flightSearch","tooltip","regionSelector","manageBookingRouting","onlineCheckinRouting","mpo","tabs","manageBookingTabs","disruptionMessage","offersAndDestinations","offersList","offersListStatic","offerHero","destinationsListing","destinationsGuideMenu","detectionOs","destinationGallery","productFlyingClasses","thingsToDo","standardTab","darkSite","bestValueGuaranteeLightbox","subscribeNewsletter","browserAlert","placeholdersPassword","timezone","airportsServices","bookTripPanel","interstitialPage","anchoring","guideProductPageOffers","productHeader","pageDetail","tabComponent","baggageAllowanceSummary","baggageDropdown","overlay","filterPanel","dropdownLinks","pageListDynamicFilter","flightClassPages","offerCollectionGallery","offerFlightHighlights","contentBlock","frameNavigation","adaptiveImageMap"],function(Y,ax,aa,I,ai,P,al,ar,R,ad,ay,D,aq,o,W,H,Z,ae,ao,F,X,af,u,v,m,A,G,ap,au,r,q,s,g,y,ak,aw,T,av,O,an,K,x,N,i,aj,p,ac,ab,B,J,z,V,at,U,f,C,L,am,ag,n,l,j){window.CX=cx;
Y.fn.matchHeight._throttle=50;
D.init();
(function(aB,aA){var az=function(aF,aC,aD){var aG;
return function aE(){var aJ=this,aI=arguments;
function aH(){if(!aD){aF.apply(aJ,aI);
aG=null
}}if(aG){clearTimeout(aG)
}else{if(aD){aF.apply(aJ,aI)
}}aG=setTimeout(aH,aC||100)
}
};
aB.fn[aA]=function(aC){return aC?this.bind("resize",az(aC)):this.trigger(aA)
}
})(Y,"smartresize");
if(!aa.touch){delete window.Hammer.defaults.behavior.userSelect
}K.init();
aq.init(Y(".table-responsive"));
aj.init(window.CX.interstitial);
var S=W(window.CX.info);
var h=N(window.CX.global.endPoints.airportsCoordinates);
var E=x(".book-trip",window.CX.bookTrip.timeZone);
o.init(Y("header"));
Z.init(".book-trip");
ae.init(Y(".tooltip-button"));
ao.init(Y(".regions"),window.CX.global);
af.init(Y(".mpo-trigger"),window.location);
m.init(Y(".travel-alert-container"));
at.init(Y(".button-date-picker, .button-passengers, .button-package, .button-rooms-picker"));
Y(".button-date-picker").each(function(){if(!Y.data(this,"datePicker")){Y.data(this,"datePicker",new H(this,{calendar:CX.calendar}))
}});
i.init(h,S,E,window.CX.bookTrip);
Y(".destination-gallery").each(function(){g(Y(this))
});
Y(".offer-collection-gallery").each(function(){am.init(Y(this))
});
var k=u(Y(".home-tabs .tabs"),{namespace:"prepare"});
v(Y(".prepare-for-flight .tabs"),{namespace:"hometabs"});
var Q=F(".manage-booking",{endPoints:CX.manageBooking.endPoints,redirects:CX.manageBooking.redirects,locale:CX.global.currentLanguage+"_"+CX.global.currentRegion,source:CX.global.source});
var M=X(".online-checkin",{locale:CX.global.currentLanguage+"_"+CX.global.currentRegion,source:CX.global.source});
av.init(Y("#lightbox-template"),"bvg-trigger");
A.init(Y(".offers-and-destinations"),S,h,window.CX.exploreDestinations);
ac.init(Y(".related-flight-offers"),S,h);
ac.init(Y(".related-packages-offers"),S,h);
ac.init(Y(".related-hotel-offers"),S,h);
var ah=u(Y(".guide-menu-tabs .tabs"),{namespace:"guideMenuTab"});
var w=aw(Y(".standard-tab .tabs"),{namespace:"standardMenuTab"});
r.init(Y(".destinations-listing"),window.CX.destinationsListing);
q.init(Y(".destination-guide-menu"));
ab.init(Y(".destinations-guide-header"));
ab.init(Y(".destination-product-header"));
s.init(Y(".app-promotion"));
y.init(Y(".product-flying-classes"));
ak.init(Y(".things-to-do"));
T.init(Y(".dark-site-wrapper"));
O.init(Y(".newsletter-subscription"));
an.init(Y(".browser-wrapper"));
B.init(Y(".abstract"));
z.init(Y(".baggage-allowance-summary"));
V.init(Y(".baggage-allowance-summary"));
U.init(Y(".fare-table-component"),E,{fareTable:window.CX.fareTable,calendar:window.CX.calendar});
n.init(Y(".content-block"));
Y(".offer-list-dynamic").each(function(){G(Y(this))
});
Y(".offer-list-static").each(function(){ap(Y(this))
});
C.init(Y(".dropdown-links"),S,h,{global:window.CX.global,location:window.location});
ag.init(Y(".offer-flight-highlights"),window.location.hash);
Y(".tab-component").each(function(){J(Y(this))
});
Y(".dropdown-links").each(function(){f(Y(this),{global:window.CX.global,location:window.location})
});
L.init(Y(".flight-class-page"));
l.init(Y(".frame-navigation-top, .frame-navigation-bottom"));
Y(".thumbnail-map").each(function(){j(Y(this))
});
p.init(Y(".menu-container"),window.location);
Y("html").removeClass("js")
});
e("common/js/main.js",function(){})
}());
var foundation=foundation||{};
foundation={getCookie:function(b){var e=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var f=a[d];
while(f.charAt(0)===" "){f=f.substring(1,f.length)
}if(f.indexOf(e)===0){return f.substring(e.length,f.length)
}}return null
},isInt:function(a){if((parseFloat(a)==parseInt(a,10))&&!isNaN(a)){return true
}else{return false
}},setCookie:function(f,b,e){if(!this.isInt(e)){e=0
}var a="";
if(e!==0){var c=new Date();
c.setDate(c.getDate()+e);
a="expires="+c.toUTCString()
}var d=b+"; path=/; "+a;
document.cookie=f+"="+d
}};
var cxUrl="cathaypacific.com";
var kaUrl="dragonair.com";
var CMSGlobal={fnContentOpenHomepage:function(){var a=window.location.protocol+"//"+window.location.host+"/"+CX.global.source.toLowerCase()+"/"+CX.global.currentLanguage+"_"+CX.global.currentRegion+".html";
externalUrlWindow=window.open(a,"_self");
externalUrlWindow.focus()
},fnContentSelfOpenCore:function(f,d,b){var c=f+"//"+d+"/";
var a=CX.global.source.toLowerCase();
if(d.toLowerCase().indexOf(cxUrl)>-1){a="cx"
}else{if(d.toLowerCase().indexOf(kaUrl)>-1){a="ka"
}}var e=c+a+"/"+CX.global.currentLanguage+"_"+CX.global.currentRegion+"/"+b;
externalUrlWindow=window.open(e,"_self");
externalUrlWindow.focus()
},fnContentSelfOpen:function(a){this.fnContentSelfOpenCore(window.location.protocol,window.location.host,a)
},fnContentSelfOpenHttps:function(a){this.fnContentSelfOpenCore("https:",window.location.host,a)
},dutyFreeRedirection:function(a){var b=a+"?locale="+CX.global.currentLanguage+"_"+CX.global.currentRegion;
externalUrlWindow=window.open(b,"_self");
externalUrlWindow.focus()
},fnContentCrossSiteOpen:function(b,a){this.fnContentSelfOpenCore(window.location.protocol,b,a)
},fnContentCrossSiteOpenHttps:function(b,a){this.fnContentSelfOpenCore("https:",b,a)
}};
var foundation=foundation||{};
var FlightSearchModule=(function(f){var a=f(".trip-form");
var e;
var d;
var c=3;
var b={submitForm:function(){e.find("input[name=ORIGIN]").val(e.find("input[name=depart-label]").data("airport-code"));
e.find("input[name=DESTINATION]").val(e.find("input[name=destination-label]").data("airport-code"));
var i=e.find("input[name=cabin-class]:checked").val();
e.find("input[name=CABINCLASS]").val(i);
var h=e.find("input[name=round-trip]:checked").val();
e.find("input[name=TRIPTYPE]").val(h);
var j=e.find(".calendar-depart").val().replace(/-/g,"");
e.find("input[name=DEPARTUREDATE]").val(j);
var g=e.find(".calendar-return").val().replace(/-/g,"");
e.find("input[name=ARRIVALDATE]").val(g);
if(h==="O"){e.find("input[name=ARRIVALDATE]").val(j)
}e.find("input[name=ADULT]").val(e.find("[name=passenger-adults]").val());
e.find("input[name=CHILD]").val(e.find("[name=passenger-children]").val());
if(e.find("[name=passenger-infants]").parent().hasClass("is-visually-hidden")){e.find("input[name=INFANT]").val(0)
}else{e.find("input[name=INFANT]").val(e.find("[name=passenger-infants]").val())
}if(e.find("[name=flexible-dates]").is(":checked")){e.find("input[name=FLEXIBLEDATE]").val("true")
}else{e.find("input[name=FLEXIBLEDATE]").val("false")
}return false
},toggleSubmitFormAction:function(g){e=f(g.target);
b.saveRecentSearch();
b.submitForm()
},bindEvents:function(){a.on("submit",b.toggleSubmitFormAction)
},saveRecentSearch:function(){var n=[];
var g=e.find("[name=destination-label]").data("airport-code");
if(g!==null&&g!==""){var k=foundation.getCookie("recentDestinations");
var l=[];
if(k){l=k.split(",")
}var m=l.length;
for(var j=0;
j<m&&n.length<c-1;
j++){var h=l[m-1-j];
if(h!==g){n.push(h)
}}n.reverse();
n.push(g);
foundation.setCookie("recentDestinations",n.toString(),30)
}return n
},init:function(){b.bindEvents()
}};
return b
})(jQuery);
var cx=cx||{};
var FlightSearchModule=FlightSearchModule||{};
cx.FlightSearchPanelForm=FlightSearchModule;
cx.FlightSearchPanelForm.init();