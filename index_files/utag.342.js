//tealium universal tag - utag.342 ut4.0.201507160131, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1};u.map={"google_gid":"tealium_trace_id"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//cm.g.doubleclick.net/pixel?","google_nid":"tealium_dmp","tealium_selector":"","tealium_trace_id":""};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
c.push("google_nid"+u.data.kvp_delim+u.data.google_nid);c.push("google_cm");c.push("tealium_vid"+u.data.kvp_delim+b["cp.utag_main_v_id"]);c.push("tealium_account"+u.data.kvp_delim+utag.cfg.utid.split("/")[0]);c.push("tealium_profile"+u.data.kvp_delim+utag.cfg.utid.split("/")[1]);if(u.data.tealium_selector){c.push("tealium_selector"+u.data.kvp_delim+u.data.tealium_selector);}
if(u.data.tealium_trace_id){c.push("tealium_trace_id"+u.data.kvp_delim+u.data.tealium_trace_id);}
u.loader({"type":"img","src":u.data.base_url+c.join(u.data.qsp_delim)});}};utag.o[loader].loader.LOAD(id);}("342","cathaypacific.main"));}catch(error){utag.DB(error);}
