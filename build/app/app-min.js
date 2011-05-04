YUI.add("app",function(d){function e(){}e.prototype={render:function(q,p){var n=this,o=n.get("renderer");if(o){o.call(n,function(){n.set("rendered",true);if(q){q.call(n,p);}},p);}}};d.RenderTarget=e;var h={},c="appStateChange",m="currentViewId",g="defaultViewId",j="id",k="parent",l="stateDelimiter",i="viewState",f=function(n){f.superclass.constructor.apply(this,arguments);};f.NAME="app";f.ATTRS={id:h,modal:h,modalFocus:h,renderer:h};d.extend(f,d.Base,{_stateChangeNotifier:function(q){var o,r,n,p=this.navs;for(o in p){if(p.hasOwnProperty(o)){r=p[o];n=r.get(m);r.fire(c,q);r.getView(n).fire(c,q);}}},initializer:function(){if(d.History){this.history=new d.History();}else{}this.navs={};this.on(c,this._stateChangeNotifier);},addNav:function(o){var n=this,p=o.get(j);n.navs[p]=o;o.set(k,n);o.on(m+"Change",function(q){n.save(o,o.getView(q.newVal));});return o;},removeNav:function(o){var p=o,n;if(d.Lang.isObject(o)){p=o.get(j);}delete this.navs[p];return n||o;},save:function(s,n,p){if(!n.get("ephemeral")){var o,r,t=n.get("state"),q=n.get(j);if(t){q+=s.get(l)+t;}if(this.history){o=n.get("url");r=n.get("title");if(o||r){p=(p)?d.merge(p):{};p.url=p.url||o;p.title=p.title||r;}this.history.addValue(s.get(j),q,p);}}else{}return this;}});d.augment(f,d.RenderTarget);d.App=f;var b=function(n){b.superclass.constructor.apply(this,arguments);};b.NAME="nav";b.ATTRS={id:h,parent:h,defaultViewId:h,currentViewId:h,stateDelimiter:{value:"|"},renderer:h};d.extend(b,d.Base,{initializer:function(){var n=this;n.views={};d.on("history:change",function(o){if(o.src==="hash"||o.src==="popstate"){var q=n.get(j),p=o.changed[q];if(p){n.navigate(function(){},p.newVal);}else{if(o.removed.nav){}}}});},addView:function(n){var o=n.get("id");this.views[o]=n;if(!this.get(g)){this.set(g,o);}n.set(k,this);return this;},removeView:function(n){var p=this.getViewId(n)[0],o=this.getView(n);delete this.views[p];return o;},getViewId:function(n){var q=n,p,o;if(d.Lang.isObject(n)){q=n.get(j);o=n.get(i);}p=q.split(this.get(l));if(!p[1]&&o){p[1]=o;}return p;},getView:function(n){var o=this.getViewId(n)[0];return this.views[o];},navigate:function(u,s){var w=this,t,p,o=u,r,q=w.get(m),v,n=function(){s=w.getView(p[0]);if(p[1]){s.set("viewState",p[1]);}s.render(function(){w.set(m,s.get(j));if(o){o.call(w,s);}},p[1]);};if(!s){r=w.get(k).history;if(r){t=r.get(w.get(j));}}p=w.getViewId(s||t||q||w.get(g));if(q){q=w.getView(q);v=q.get("transitioner");if(v){v.call(w,function(){w.fire("transitionComplete");n();},s);}else{n();}}else{n();}}});d.augment(b,d.RenderTarget);d.Nav=b;var a=function(n){a.superclass.constructor.apply(this,arguments);};a.NAME="view";a.ATTRS={id:h,parent:h,header:h,footer:h,renderer:h,transitioner:h,viewState:h,url:h,title:h,ephemeral:{value:false}};d.extend(a,d.Base);d.augment(a,d.RenderTarget);d.View=a;},"@VERSION@",{optional:["history"],requires:["base-base"]});