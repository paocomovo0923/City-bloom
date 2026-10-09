import{g as Mc,a as fo}from"./index-Cuiuj9HB.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="185",Sc=0,po=1,bc=2,Bs=1,Cl=2,$i=3,Xn=0,Ht=1,Pt=2,Tn=0,Ri=1,mo=2,go=3,_o=4,yc=5,ti=100,wc=101,Ec=102,Tc=103,Ac=104,Rc=200,Cc=201,Pc=202,Dc=203,Vr=204,Wr=205,Ic=206,Lc=207,Uc=208,Nc=209,Fc=210,Oc=211,Bc=212,zc=213,Gc=214,Xr=0,Yr=1,qr=2,Di=3,Zr=4,Kr=5,$r=6,Jr=7,Pl=0,kc=1,Hc=2,fn=0,Dl=1,Il=2,Ll=3,Ul=4,Nl=5,Fl=6,Ol=7,Bl=300,ri=301,Ii=302,rr=303,ar=304,Qs=306,es=1e3,wn=1001,Qr=1002,It=1003,Vc=1004,cs=1005,Ot=1006,or=1007,ii=1008,qt=1009,zl=1010,Gl=1011,ts=1012,Ua=1013,mn=1014,nn=1015,Rn=1016,Na=1017,Fa=1018,ns=1020,kl=35902,Hl=35899,Vl=1021,Wl=1022,sn=1023,Cn=1026,si=1027,Oa=1028,Ba=1029,ai=1030,za=1031,Ga=1033,zs=33776,Gs=33777,ks=33778,Hs=33779,jr=35840,ea=35841,ta=35842,na=35843,ia=36196,sa=37492,ra=37496,aa=37488,oa=37489,Ws=37490,la=37491,ca=37808,ha=37809,ua=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,xa=37817,va=37818,Ma=37819,Sa=37820,ba=37821,ya=36492,wa=36494,Ea=36495,Ta=36283,Aa=36284,Xs=36285,Ra=36286,Wc=3200,Ca=0,Xc=1,Hn="",Jt="srgb",Ys="srgb-linear",qs="linear",et="srgb",hi=7680,xo=519,Yc=512,qc=513,Zc=514,ka=515,Kc=516,$c=517,Ha=518,Jc=519,vo=35044,Mo="300 es",dn=2e3,is=2001;function Qc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jc(){const s=Zs("canvas");return s.style.display="block",s}const So={};function bo(...s){const e="THREE."+s.shift();console.log(e,...s)}function Xl(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Le(...s){s=Xl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ke(...s){s=Xl(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ci(...s){const e=s.join(" ");e in So||(So[e]=!0,Le(...s))}function eh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const th={[Xr]:Yr,[qr]:$r,[Zr]:Jr,[Di]:Kr,[Yr]:Xr,[$r]:qr,[Jr]:Zr,[Kr]:Di};class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const Qi=Math.PI/180,ss=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function We(s,e,t){return Math.max(e,Math.min(t,s))}function Va(s,e){return(s%e+e)%e}function nh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ih(s,e,t){return s!==e?(t-s)/(e-s):0}function ji(s,e,t){return(1-t)*s+t*e}function sh(s,e,t,n){return ji(s,e,1-Math.exp(-t*n))}function rh(s,e=1){return e-Math.abs(Va(s,e*2)-e)}function ah(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function oh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ch(s,e){return s+Math.random()*(e-s)}function hh(s){return s*(.5-Math.random())}function uh(s){s!==void 0&&(yo=s);let e=yo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dh(s){return s*Qi}function fh(s){return s*ss}function ph(s){return(s&s-1)===0&&s!==0}function mh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _h(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),m=r((n-e)/2),x=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*d,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*d,o*c);break;case"ZXZ":s.set(l*d,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*x,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*x,o*c);break;case"ZYZ":s.set(l*x,l*m,o*u,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ti={DEG2RAD:Qi,RAD2DEG:ss,generateUUID:Ni,clamp:We,euclideanModulo:Va,mapLinear:nh,inverseLerp:ih,lerp:ji,damp:sh,pingpong:rh,smoothstep:ah,smootherstep:oh,randInt:lh,randFloat:ch,randFloatSpread:hh,seededRandom:uh,degToRad:dh,radToDeg:fh,isPowerOfTwo:ph,ceilPowerOfTwo:mh,floorPowerOfTwo:gh,setQuaternionFromProperEuler:_h,normalize:zt,denormalize:Ei},Qa=class Qa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qa.prototype.isVector2=!0;let He=Qa;class Fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==m||u!==x){let f=l*h+c*m+u*x+d*S;f<0&&(h=-h,m=-m,x=-x,S=-S,f=-f);let p=1-o;if(f<.9995){const M=Math.acos(f),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+h*o,c=c*p+m*o,u=u*p+x*o,d=d*p+S*o}else{l=l*p+h*o,c=c*p+m*o,u=u*p+x*o,d=d*p+S*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[a],h=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+u*d+l*m-c*h,e[t+1]=l*x+u*h+c*d-o*m,e[t+2]=c*x+u*m+o*h-l*d,e[t+3]=u*x-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(r/2),h=l(n/2),m=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"YXZ":this._x=h*u*d+c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"ZXY":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d-h*m*x;break;case"ZYX":this._x=h*u*d-c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d+h*m*x;break;case"YZX":this._x=h*u*d+c*m*x,this._y=c*m*d+h*u*x,this._z=c*u*x-h*m*d,this._w=c*u*d-h*m*x;break;case"XZY":this._x=h*u*d-c*m*x,this._y=c*m*d-h*u*x,this._z=c*u*x+h*m*d,this._w=c*u*d+h*m*x;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ja=class ja{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=i+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ja.prototype.isVector3=!0;let C=ja;const lr=new C,wo=new Fi,eo=class eo{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],x=n[8],S=i[0],f=i[3],p=i[6],M=i[1],w=i[4],v=i[7],E=i[2],y=i[5],R=i[8];return r[0]=a*S+o*M+l*E,r[3]=a*f+o*w+l*y,r[6]=a*p+o*v+l*R,r[1]=c*S+u*M+d*E,r[4]=c*f+u*w+d*y,r[7]=c*p+u*v+d*R,r[2]=h*S+m*M+x*E,r[5]=h*f+m*w+x*y,r[8]=h*p+m*v+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,m=c*r-a*l,x=t*d+n*h+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=d*S,e[1]=(i*c-u*n)*S,e[2]=(o*n-i*a)*S,e[3]=h*S,e[4]=(u*t-i*l)*S,e[5]=(i*r-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cr.makeScale(e,t)),this}rotate(e){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};eo.prototype.isMatrix3=!0;let Fe=eo;const cr=new Fe,Eo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xh(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?qs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ci("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ci("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ys]:{primaries:e,whitePoint:n,transfer:qs,toXYZ:Eo,fromXYZ:To,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Eo,fromXYZ:To,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),s}const qe=xh();function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ui;class vh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ui===void 0&&(ui=Zs("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=An(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mh=0;class Wa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(hr(i[a].image)):r.push(hr(i[a]))}else r=hr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function hr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Sh=0;const ur=new C;class Bt extends oi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=wn,i=wn,r=Ot,a=ii,o=sn,l=qt,c=Bt.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ni(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ur).x}get height(){return this.source.getSize(ur).y}get depth(){return this.source.getSize(ur).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Bl;Bt.DEFAULT_ANISOTROPY=1;const to=class to{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],x=l[9],S=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(x-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(m+1)/2,E=(p+1)/2,y=(u+h)/4,R=(d+S)/4,g=(x+f)/4;return w>v&&w>E?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=y/n,r=R/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=y/i,r=g/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=g/r),this.set(n,i,r,t),this}let M=Math.sqrt((f-x)*(f-x)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(f-x)/M,this.y=(d-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};to.prototype.isVector4=!0;let ut=to;class bh extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Bt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yl extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Js=class Js{constructor(e,t,n,i,r,a,o,l,c,u,d,h,m,x,S,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,d,h,m,x,S,f)}set(e,t,n,i,r,a,o,l,c,u,d,h,m,x,S,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=x,p[11]=S,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Js().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*d,x=o*u,S=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,x=c*u,S=c*d;t[0]=h+S*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,x=c*u,S=c*d;t[0]=h-S*o,t[4]=-a*d,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,x=o*u,S=o*d;t[0]=l*u,t[4]=x*c-m,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=S-h*d,t[8]=x*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+x,t[10]=h-S*d}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=a*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=o*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wh,e,Eh)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ln.crossVectors(n,Wt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ln.crossVectors(n,Wt)),Ln.normalize(),hs.crossVectors(Wt,Ln),i[0]=Ln.x,i[4]=hs.x,i[8]=Wt.x,i[1]=Ln.y,i[5]=hs.y,i[9]=Wt.y,i[2]=Ln.z,i[6]=hs.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],x=n[2],S=n[6],f=n[10],p=n[14],M=n[3],w=n[7],v=n[11],E=n[15],y=i[0],R=i[4],g=i[8],T=i[12],D=i[1],I=i[5],L=i[9],Y=i[13],W=i[2],B=i[6],q=i[10],X=i[14],j=i[3],ne=i[7],ae=i[11],ue=i[15];return r[0]=a*y+o*D+l*W+c*j,r[4]=a*R+o*I+l*B+c*ne,r[8]=a*g+o*L+l*q+c*ae,r[12]=a*T+o*Y+l*X+c*ue,r[1]=u*y+d*D+h*W+m*j,r[5]=u*R+d*I+h*B+m*ne,r[9]=u*g+d*L+h*q+m*ae,r[13]=u*T+d*Y+h*X+m*ue,r[2]=x*y+S*D+f*W+p*j,r[6]=x*R+S*I+f*B+p*ne,r[10]=x*g+S*L+f*q+p*ae,r[14]=x*T+S*Y+f*X+p*ue,r[3]=M*y+w*D+v*W+E*j,r[7]=M*R+w*I+v*B+E*ne,r[11]=M*g+w*L+v*q+E*ae,r[15]=M*T+w*Y+v*X+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],x=e[3],S=e[7],f=e[11],p=e[15],M=l*m-c*h,w=o*m-c*d,v=o*h-l*d,E=a*m-c*u,y=a*h-l*u,R=a*d-o*u;return t*(S*M-f*w+p*v)-n*(x*M-f*E+p*y)+i*(x*w-S*E+p*R)-r*(x*v-S*y+f*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],x=e[12],S=e[13],f=e[14],p=e[15],M=t*o-n*a,w=t*l-i*a,v=t*c-r*a,E=n*l-i*o,y=n*c-r*o,R=i*c-r*l,g=u*S-d*x,T=u*f-h*x,D=u*p-m*x,I=d*f-h*S,L=d*p-m*S,Y=h*p-m*f,W=M*Y-w*L+v*I+E*D-y*T+R*g;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(o*Y-l*L+c*I)*B,e[1]=(i*L-n*Y-r*I)*B,e[2]=(S*R-f*y+p*E)*B,e[3]=(h*y-d*R-m*E)*B,e[4]=(l*D-a*Y-c*T)*B,e[5]=(t*Y-i*D+r*T)*B,e[6]=(f*v-x*R-p*w)*B,e[7]=(u*R-h*v+m*w)*B,e[8]=(a*L-o*D+c*g)*B,e[9]=(n*D-t*L-r*g)*B,e[10]=(x*y-S*v+p*M)*B,e[11]=(d*v-u*y-m*M)*B,e[12]=(o*T-a*I-l*g)*B,e[13]=(t*I-n*T+i*g)*B,e[14]=(S*w-x*E-f*M)*B,e[15]=(u*E-d*w+h*M)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,m=r*u,x=r*d,S=a*u,f=a*d,p=o*d,M=l*c,w=l*u,v=l*d,E=n.x,y=n.y,R=n.z;return i[0]=(1-(S+p))*E,i[1]=(m+v)*E,i[2]=(x-w)*E,i[3]=0,i[4]=(m-v)*y,i[5]=(1-(h+p))*y,i[6]=(f+M)*y,i[7]=0,i[8]=(x+w)*R,i[9]=(f-M)*R,i[10]=(1-(h+S))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=di.set(i[0],i[1],i[2]).length();const o=di.set(i[4],i[5],i[6]).length(),l=di.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Qt.copy(this);const c=1/a,u=1/o,d=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=dn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),m=(n+i)/(n-i);let x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===dn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===is)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=dn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),m=-(n+i)/(n-i);let x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===dn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===is)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Js.prototype.isMatrix4=!0;let at=Js;const di=new C,Qt=new at,wh=new C(0,0,0),Eh=new C(1,1,1),Ln=new C,hs=new C,Wt=new C,Ao=new at,Ro=new Fi;class Yn{constructor(e=0,t=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Th=0;const Co=new C,fi=new Fi,_n=new at,us=new C,Gi=new C,Ah=new C,Rh=new Fi,Po=new C(1,0,0),Do=new C(0,1,0),Io=new C(0,0,1),Lo={type:"added"},Ch={type:"removed"},pi={type:"childadded",child:null},dr={type:"childremoved",child:null};class Et extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new C,t=new Yn,n=new Fi,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Fe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Po,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(Io,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Po,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(Io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Gi,us,this.up):_n.lookAt(us,Gi,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(_n),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),pi.child=e,this.dispatchEvent(pi),pi.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),dr.child=e,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new C(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ph={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const f=t.getJointPose(S,n),p=this._getHandJoint(c,S);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ph)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ds={h:0,s:0,l:0};function pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Va(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pr(a,r,e+1/3),this.g=pr(a,r,e),this.b=pr(a,r,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return qe.workingToColorSpace(Nt.copy(this),e),Math.round(We(Nt.r*255,0,255))*65536+Math.round(We(Nt.g*255,0,255))*256+Math.round(We(Nt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,r=Nt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Jt){qe.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(ds);const n=ji(Un.h,ds.h,t),i=ji(Un.s,ds.s,t),r=ji(Un.l,ds.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ne;Ne.NAMES=ql;class Ya{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Ya(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jt=new C,xn=new C,mr=new C,vn=new C,mi=new C,gi=new C,Uo=new C,gr=new C,_r=new C,xr=new C,vr=new ut,Mr=new ut,Sr=new ut;class tn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),xn.subVectors(n,t),mr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(xn),l=jt.dot(mr),c=xn.dot(xn),u=xn.dot(mr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(e,t),Mr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(Mr,r.y),a.addScaledVector(Sr,r.z),a}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),xn.subVectors(e,t),jt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;mi.subVectors(i,n),gi.subVectors(r,n),gr.subVectors(e,n);const l=mi.dot(gr),c=gi.dot(gr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,i);const u=mi.dot(_r),d=gi.dot(_r);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(mi,a);xr.subVectors(e,r);const m=mi.dot(xr),x=gi.dot(xr);if(x>=0&&m<=x)return t.copy(r);const S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(gi,o);const f=u*x-m*d;if(f<=0&&d-u>=0&&m-x>=0)return Uo.subVectors(r,i),o=(d-u)/(d-u+(m-x)),t.copy(i).addScaledVector(Uo,o);const p=1/(f+S+h);return a=S*p,o=h*p,t.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),ps.subVectors(this.max,ki),_i.subVectors(e.a,ki),xi.subVectors(e.b,ki),vi.subVectors(e.c,ki),Nn.subVectors(xi,_i),Fn.subVectors(vi,xi),Kn.subVectors(_i,vi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!br(t,_i,xi,vi,ps)||(t=[1,0,0,0,1,0,0,0,1],!br(t,_i,xi,vi,ps))?!1:(ms.crossVectors(Nn,Fn),t=[ms.x,ms.y,ms.z],br(t,_i,xi,vi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,fs=new qn,_i=new C,xi=new C,vi=new C,Nn=new C,Fn=new C,Kn=new C,ki=new C,ps=new C,ms=new C,$n=new C;function br(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$n.fromArray(s,r);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const St=new C,gs=new He;let Ih=0;class Zt extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zl extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kl extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Lh=new qn,Hi=new C,yr=new C;class Oi{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(yr)),this.expandByPoint(Hi.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uh=0;const $t=new at,wr=new Et,Mi=new C,Xt=new qn,Vi=new qn,Ct=new C;class gt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qc(e)?Kl:Zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Xt.min,Vi.min),Xt.expandByPoint(Ct),Ct.addVectors(Xt.max,Vi.max),Xt.expandByPoint(Ct)):(Xt.expandByPoint(Vi.min),Xt.expandByPoint(Vi.max))}Xt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),Ct.add(Mi)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new C,l[g]=new C;const c=new C,u=new C,d=new C,h=new He,m=new He,x=new He,S=new C,f=new C;function p(g,T,D){c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,g),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,D),u.sub(c),d.sub(c),m.sub(h),x.sub(h);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(I),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(I),o[g].add(S),o[T].add(S),o[D].add(S),l[g].add(f),l[T].add(f),l[D].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let g=0,T=M.length;g<T;++g){const D=M[g],I=D.start,L=D.count;for(let Y=I,W=I+L;Y<W;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new C,v=new C,E=new C,y=new C;function R(g){E.fromBufferAttribute(i,g),y.copy(E);const T=o[g];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(y,T);const I=v.dot(l[g])<0?-1:1;a.setXYZW(g,w.x,w.y,w.z,I)}for(let g=0,T=M.length;g<T;++g){const D=M[g],I=D.start,L=D.count;for(let Y=I,W=I+L;Y<W;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),S=e.getX(h+1),f=e.getX(h+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,f),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*u;for(let p=0;p<u;p++)h[x++]=c[m++]}return new Zt(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Nh=0;class Bi extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ri,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Wr,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sn=new C,Er=new C,_s=new C,On=new C,Tr=new C,xs=new C,Ar=new C;class qa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Er.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),On.copy(this.origin).sub(Er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=On.dot(this.direction),l=-On.dot(_s),c=On.lengthSq(),u=Math.abs(1-a*a);let d,h,m,x;if(u>0)if(d=a*l-o,h=a*o-l,x=r*u,d>=0)if(h>=-x)if(h<=x){const S=1/u;d*=S,h*=S,m=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Er).addScaledVector(_s,h),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Tr.subVectors(t,e),xs.subVectors(n,e),Ar.crossVectors(Tr,xs);let a=this.direction.dot(Ar),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;On.subVectors(this.origin,e);const l=o*this.direction.dot(xs.crossVectors(On,xs));if(l<0)return null;const c=o*this.direction.dot(Tr.cross(On));if(c<0||l+c>a)return null;const u=-o*On.dot(Ar);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const No=new at,Jn=new qa,vs=new Oi,Fo=new C,Ms=new C,Ss=new C,bs=new C,Rr=new C,ys=new C,Oo=new C,ws=new C;class P extends Et{constructor(e=new gt,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Rr.fromBufferAttribute(d,e),a?ys.addScaledVector(Rr,u):ys.addScaledVector(Rr.sub(t),u))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(vs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(vs,Fo)===null||Jn.origin.distanceToSquared(Fo)>(e.far-e.near)**2))&&(No.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(No),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const f=h[x],p=a[f.materialIndex],M=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let v=M,E=w;v<E;v+=3){const y=o.getX(v),R=o.getX(v+1),g=o.getX(v+2);i=Es(this,p,e,n,c,u,d,y,R,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let f=x,p=S;f<p;f+=3){const M=o.getX(f),w=o.getX(f+1),v=o.getX(f+2);i=Es(this,a,e,n,c,u,d,M,w,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const f=h[x],p=a[f.materialIndex],M=Math.max(f.start,m.start),w=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let v=M,E=w;v<E;v+=3){const y=v,R=v+1,g=v+2;i=Es(this,p,e,n,c,u,d,y,R,g),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let f=x,p=S;f<p;f+=3){const M=f,w=f+1,v=f+2;i=Es(this,a,e,n,c,u,d,M,w,v),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Fh(s,e,t,n,i,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Xn,o),l===null)return null;ws.copy(o),ws.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:s}}function Es(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ms),s.getVertexPosition(l,Ss),s.getVertexPosition(c,bs);const u=Fh(s,e,t,n,Ms,Ss,bs,Oo);if(u){const d=new C;tn.getBarycoord(Oo,Ms,Ss,bs,d),i&&(u.uv=tn.getInterpolatedAttribute(i,o,l,c,d,new He)),r&&(u.uv1=tn.getInterpolatedAttribute(r,o,l,c,d,new He)),a&&(u.normal=tn.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};tn.getNormal(Ms,Ss,bs,h.normal),u.face=h,u.barycoord=d}return u}class $l extends Bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=It,u=It,d,h){super(null,a,o,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Si=new at,zo=new at,Ts=[],Go=new qn,Oh=new at,Wi=new P,Xi=new Oi;class Cr extends P{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Oh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Go.copy(e.boundingBox).applyMatrix4(Si),this.boundingBox.union(Go)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Si),Xi.copy(e.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),e.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Si),zo.multiplyMatrices(n,Si),Wi.matrixWorld=zo,Wi.raycast(e,Ts);for(let a=0,o=Ts.length;a<o;a++){const l=Ts[a];l.instanceId=r,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $l(new Float32Array(i*this.count),i,this.count,Oa,nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pr=new C,Bh=new C,zh=new Fe;class kn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Pr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Oi,Gh=new He(.5,.5),As=new C;class Za{constructor(e=new kn,t=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],x=r[8],S=r[9],f=r[10],p=r[11],M=r[12],w=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-a,m-u,p-x,E-M).normalize(),i[1].setComponents(c+a,m+u,p+x,E+M).normalize(),i[2].setComponents(c+o,m+d,p+S,E+w).normalize(),i[3].setComponents(c-o,m-d,p-S,E-w).normalize(),n)i[4].setComponents(l,h,f,v).normalize(),i[5].setComponents(c-l,m-h,p-f,E-v).normalize();else if(i[4].setComponents(c-l,m-h,p-f,E-v).normalize(),t===dn)i[5].setComponents(c+l,m+h,p+f,E+v).normalize();else if(t===is)i[5].setComponents(l,h,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Gh.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(As.x=i.normal.x>0?e.max.x:e.min.x,As.y=i.normal.y>0?e.max.y:e.min.y,As.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class js extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new C,$s=new C,ko=new at,Yi=new qa,Rs=new Oi,Dr=new C,Ho=new C;class Jl extends Et{constructor(e=new gt,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ks.fromBufferAttribute(t,i-1),$s.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ks.distanceTo($s);e.setAttribute("lineDistance",new Ze(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;ko.copy(i).invert(),Yi.copy(e.ray).applyMatrix4(ko);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=m,f=x-1;S<f;S+=c){const p=u.getX(S),M=u.getX(S+1),w=Cs(this,e,Yi,l,p,M,S);w&&t.push(w)}if(this.isLineLoop){const S=u.getX(x-1),f=u.getX(m),p=Cs(this,e,Yi,l,S,f,x-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=m,f=x-1;S<f;S+=c){const p=Cs(this,e,Yi,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=Cs(this,e,Yi,l,x-1,m,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cs(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ks.fromBufferAttribute(o,i),$s.fromBufferAttribute(o,r),t.distanceSqToSegment(Ks,$s,Dr,Ho)>n)return;Dr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Dr);if(!(c<e.near||c>e.far))return{distance:c,point:Ho.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Vo=new C,Wo=new C;class Ql extends Jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Vo.fromBufferAttribute(t,i),Wo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vo.distanceTo(Wo);e.setAttribute("lineDistance",new Ze(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jl extends Bt{constructor(e=[],t=ri,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends Bt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Li extends Bt{constructor(e,t,n=mn,i,r,a,o=It,l=It,c,u=Cn,d=1){if(u!==Cn&&u!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hh extends Li{constructor(e,t=mn,n=ri,i,r,a=It,o=It,l,c=Cn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ec extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class H extends gt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,i,a,2),x("x","z","y",1,-1,e,n,-t,i,a,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(d,2));function x(S,f,p,M,w,v,E,y,R,g,T){const D=v/R,I=E/g,L=v/2,Y=E/2,W=y/2,B=R+1,q=g+1;let X=0,j=0;const ne=new C;for(let ae=0;ae<q;ae++){const ue=ae*I-Y;for(let _e=0;_e<B;_e++){const Xe=_e*D-L;ne[S]=Xe*M,ne[f]=ue*w,ne[p]=W,c.push(ne.x,ne.y,ne.z),ne[S]=0,ne[f]=0,ne[p]=y>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(_e/R),d.push(1-ae/g),X+=1}}for(let ae=0;ae<g;ae++)for(let ue=0;ue<R;ue++){const _e=h+ue+B*ae,Xe=h+ue+B*(ae+1),tt=h+(ue+1)+B*(ae+1),be=h+(ue+1)+B*ae;l.push(_e,Xe,be),l.push(Xe,tt,be),j+=6}o.addGroup(m,j,T),m+=j,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new H(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ge extends gt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],m=[];let x=0;const S=[],f=n/2;let p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(m,2));function M(){const v=new C,E=new C;let y=0;const R=(t-e)/n;for(let g=0;g<=r;g++){const T=[],D=g/r,I=D*(t-e)+e;for(let L=0;L<=i;L++){const Y=L/i,W=Y*l+o,B=Math.sin(W),q=Math.cos(W);E.x=I*B,E.y=-D*n+f,E.z=I*q,d.push(E.x,E.y,E.z),v.set(B,R,q).normalize(),h.push(v.x,v.y,v.z),m.push(Y,1-D),T.push(x++)}S.push(T)}for(let g=0;g<i;g++)for(let T=0;T<r;T++){const D=S[T][g],I=S[T+1][g],L=S[T+1][g+1],Y=S[T][g+1];(e>0||T!==0)&&(u.push(D,I,Y),y+=3),(t>0||T!==r-1)&&(u.push(I,L,Y),y+=3)}c.addGroup(p,y,0),p+=y}function w(v){const E=x,y=new He,R=new C;let g=0;const T=v===!0?e:t,D=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,f*D,0),h.push(0,D,0),m.push(.5,.5),x++;const I=x;for(let L=0;L<=i;L++){const W=L/i*l+o,B=Math.cos(W),q=Math.sin(W);R.x=T*q,R.y=f*D,R.z=T*B,d.push(R.x,R.y,R.z),h.push(0,D,0),y.x=B*.5+.5,y.y=q*.5*D+.5,m.push(y.x,y.y),x++}for(let L=0;L<i;L++){const Y=E+L,W=I+L;v===!0?u.push(W,W+1,Y):u.push(W+1,W,Y),g+=3}c.addGroup(p,g,v===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ge(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ka extends Ge{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ka(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $a extends gt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new C,v=new C,E=new C;for(let y=0;y<t.length;y+=3)m(t[y+0],w),m(t[y+1],v),m(t[y+2],E),l(w,v,E,M)}function l(M,w,v,E){const y=E+1,R=[];for(let g=0;g<=y;g++){R[g]=[];const T=M.clone().lerp(v,g/y),D=w.clone().lerp(v,g/y),I=y-g;for(let L=0;L<=I;L++)L===0&&g===y?R[g][L]=T:R[g][L]=T.clone().lerp(D,L/I)}for(let g=0;g<y;g++)for(let T=0;T<2*(y-g)-1;T++){const D=Math.floor(T/2);T%2===0?(h(R[g][D+1]),h(R[g+1][D]),h(R[g][D])):(h(R[g][D+1]),h(R[g+1][D+1]),h(R[g+1][D]))}}function c(M){const w=new C;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function u(){const M=new C;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const v=f(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;a.push(v,1-E)}x(),d()}function d(){for(let M=0;M<a.length;M+=6){const w=a[M+0],v=a[M+2],E=a[M+4],y=Math.max(w,v,E),R=Math.min(w,v,E);y>.9&&R<.1&&(w<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function m(M,w){const v=M*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function x(){const M=new C,w=new C,v=new C,E=new C,y=new He,R=new He,g=new He;for(let T=0,D=0;T<r.length;T+=9,D+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),y.set(a[D+0],a[D+1]),R.set(a[D+2],a[D+3]),g.set(a[D+4],a[D+5]),E.copy(M).add(w).add(v).divideScalar(3);const I=f(E);S(y,D+0,M,I),S(R,D+2,w,I),S(g,D+4,v,I)}}function S(M,w,v,E){E<0&&M.x===1&&(a[w]=M.x-1),v.x===0&&v.z===0&&(a[w]=E/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.vertices,e.indices,e.radius,e.detail)}}class rs extends $a{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rs(e.radius,e.detail)}}class En extends gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,m=[],x=[],S=[],f=[];for(let p=0;p<u;p++){const M=p*h-a;for(let w=0;w<c;w++){const v=w*d-r;x.push(v,-M,0),S.push(0,0,1),f.push(w/o),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const w=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),y=M+1+c*p;m.push(w,v,y),m.push(v,E,y)}this.setIndex(m),this.setAttribute("position",new Ze(x,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.widthSegments,e.heightSegments)}}class as extends gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new C,h=new C,m=[],x=[],S=[],f=[];for(let p=0;p<=n;p++){const M=[],w=p/n,v=a+w*o,E=e*Math.cos(v),y=Math.sqrt(e*e-E*E);let R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let g=0;g<=t;g++){const T=g/t,D=i+T*r;d.x=-y*Math.cos(D),d.y=E,d.z=y*Math.sin(D),x.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),f.push(T+R,1-w),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const w=u[p][M+1],v=u[p][M],E=u[p+1][M],y=u[p+1][M+1];(p!==0||a>0)&&m.push(w,v,y),(p!==n-1||l<Math.PI)&&m.push(v,E,y)}this.setIndex(m),this.setAttribute("position",new Ze(x,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ai extends gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new C,m=new C,x=new C;for(let S=0;S<=n;S++){const f=a+S/n*o;for(let p=0;p<=i;p++){const M=p/i*r;m.x=(e+t*Math.cos(f))*Math.cos(M),m.y=(e+t*Math.cos(f))*Math.sin(M),m.z=t*Math.sin(f),c.push(m.x,m.y,m.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),x.subVectors(m,h).normalize(),u.push(x.x,x.y,x.z),d.push(p/i),d.push(S/n)}}for(let S=1;S<=n;S++)for(let f=1;f<=i;f++){const p=(i+1)*S+f-1,M=(i+1)*(S-1)+f-1,w=(i+1)*(S-1)+f,v=(i+1)*S+f;l.push(p,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ui(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Xo(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Xo(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const n=Ui(s[t]);for(const i in n)e[i]=n[i]}return e}function Xo(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Vh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Wh={clone:Ui,merge:Gt};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new He().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new at().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qh extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Me extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nc extends Me{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zh extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kh extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class er extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $h extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ir=new at,Yo=new C,qo=new C;class ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===is||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ps=new C,Ds=new Fi,ln=new C;class sc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ps,Ds,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ps,Ds,ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ps,Ds,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ps,Ds,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new C,Zo=new He,Ko=new He;class Yt extends sc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,Zo,Ko),t.subVectors(Ko,Zo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jh extends ic{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class Is extends er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ja extends sc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qh extends ic{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Qh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class eu extends er{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const bi=-90,yi=1;class tu extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(bi,yi,e,t);i.layers=this.layers,this.add(i);const r=new Yt(bi,yi,e,t);r.layers=this.layers,this.add(r);const a=new Yt(bi,yi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(bi,yi,e,t);o.layers=this.layers,this.add(o);const l=new Yt(bi,yi,e,t);l.layers=this.layers,this.add(l);const c=new Yt(bi,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class nu extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $o=new at;class iu{constructor(e,t,n=0,i=1/0){this.ray=new qa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $o.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($o),this}intersectObject(e,t=!0,n=[]){return Pa(e,this,n,t),n.sort(Jo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pa(e[i],this,n,t);return n.sort(Jo),n}}function Jo(s,e){return s.distance-e.distance}function Pa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Pa(r[a],e,t,!0)}}class su{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const no=class no{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};no.prototype.isMatrix2=!0;let Qo=no;class ru extends Ql{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ne(n),i=new Ne(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,m=0,x=-o;h<=t;h++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const S=h===r?n:i;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const u=new gt;u.setAttribute("position",new Ze(l,3)),u.setAttribute("color",new Ze(c,3));const d=new js({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ls=new qn;class au extends Ql{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new gt;r.setIndex(new Zt(n,1)),r.setAttribute("position",new Zt(i,3)),super(r,new js({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ls.setFromObject(this.object),Ls.isEmpty())return;const e=Ls.min,t=Ls.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function jo(s,e,t,n){const i=ou(n);switch(t){case Vl:return s*e;case Oa:return s*e/i.components*i.byteLength;case Ba:return s*e/i.components*i.byteLength;case ai:return s*e*2/i.components*i.byteLength;case za:return s*e*2/i.components*i.byteLength;case Wl:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case Ga:return s*e*4/i.components*i.byteLength;case zs:case Gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ks:case Hs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ea:case na:return Math.max(s,16)*Math.max(e,8)/4;case jr:case ta:return Math.max(s,8)*Math.max(e,8)/2;case ia:case sa:case aa:case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ra:case Ws:case la:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ua:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case va:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ya:case wa:case Ea:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ta:case Aa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xs:case Ra:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ou(s){switch(s){case qt:case zl:return{byteLength:1,components:1};case ts:case Gl:case Rn:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case mn:case Ua:case nn:return{byteLength:4,components:1};case kl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lu(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,u);else{d.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<d.length;m++){const x=d[h],S=d[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,d[h]=S)}d.length=h+1;for(let m=0,x=d.length;m<x;m++){const S=d[m];s.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,od=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,If=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:cu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:_u,batching_vertex:xu,begin_vertex:vu,beginnormal_vertex:Mu,bsdfs:Su,iridescence_fragment:bu,bumpmap_pars_fragment:yu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Au,color_fragment:Ru,color_pars_fragment:Cu,color_pars_vertex:Pu,color_vertex:Du,common:Iu,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Nu,displacementmap_vertex:Fu,emissivemap_fragment:Ou,emissivemap_pars_fragment:Bu,colorspace_fragment:zu,colorspace_pars_fragment:Gu,envmap_fragment:ku,envmap_common_pars_fragment:Hu,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:td,envmap_vertex:Xu,fog_vertex:Yu,fog_pars_vertex:qu,fog_fragment:Zu,fog_pars_fragment:Ku,gradientmap_pars_fragment:$u,lightmap_pars_fragment:Ju,lights_lambert_fragment:Qu,lights_lambert_pars_fragment:ju,lights_pars_begin:ed,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:hd,lightprobes_pars_fragment:ud,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:fd,logdepthbuf_pars_vertex:pd,logdepthbuf_vertex:md,map_fragment:gd,map_pars_fragment:_d,map_particle_fragment:xd,map_particle_pars_fragment:vd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphinstance_vertex:bd,morphcolor_vertex:yd,morphnormal_vertex:wd,morphtarget_pars_vertex:Ed,morphtarget_vertex:Td,normal_fragment_begin:Ad,normal_fragment_maps:Rd,normal_pars_fragment:Cd,normal_pars_vertex:Pd,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Fd,opaque_fragment:Od,packing:Bd,premultiplied_alpha_fragment:zd,project_vertex:Gd,dithering_fragment:kd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Wd,shadowmap_pars_fragment:Xd,shadowmap_pars_vertex:Yd,shadowmap_vertex:qd,shadowmask_pars_fragment:Zd,skinbase_vertex:Kd,skinning_pars_vertex:$d,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:jd,specularmap_pars_fragment:ef,tonemapping_fragment:tf,tonemapping_pars_fragment:nf,transmission_fragment:sf,transmission_pars_fragment:rf,uv_pars_fragment:af,uv_pars_vertex:of,uv_vertex:lf,worldpos_vertex:cf,background_vert:hf,background_frag:uf,backgroundCube_vert:df,backgroundCube_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:_f,distance_vert:xf,distance_frag:vf,equirect_vert:Mf,equirect_frag:Sf,linedashed_vert:bf,linedashed_frag:yf,meshbasic_vert:wf,meshbasic_frag:Ef,meshlambert_vert:Tf,meshlambert_frag:Af,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Pf,meshnormal_frag:Df,meshphong_vert:If,meshphong_frag:Lf,meshphysical_vert:Uf,meshphysical_frag:Nf,meshtoon_vert:Ff,meshtoon_frag:Of,points_vert:Bf,points_frag:zf,shadow_vert:Gf,shadow_frag:kf,sprite_vert:Hf,sprite_frag:Vf},fe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},un={basic:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Gt([fe.common,fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Gt([fe.lights,fe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};un.physical={uniforms:Gt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Us={r:0,b:0,g:0},Wf=new at,ac=new Fe;ac.set(-1,0,0,0,1,0,0,0,1);function Xf(s,e,t,n,i,r){const a=new Ne(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function m(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const v=M.backgroundBlurriness>0;w=e.get(w,v)}return w}function x(M){let w=!1;const v=m(M);v===null?f(a,o):v&&v.isColor&&(f(v,1),w=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(M,w){const v=m(w);v&&(v.isCubeTexture||v.mapping===Qs)?(c===void 0&&(c=new P(new H(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ui(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wf.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ac),c.material.toneMapped=qe.getTransfer(v.colorSpace)!==et,(u!==v||d!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new P(new En(2,2),new gn({name:"BackgroundMaterial",uniforms:Ui(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,w){M.getRGB(Us,tc(s)),t.buffers.color.setClear(Us.r,Us.g,Us.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:x,addToRenderList:S,dispose:p}}function Yf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(I,L,Y,W,B){let q=!1;const X=d(I,W,Y,L);r!==X&&(r=X,c(r.object)),q=m(I,W,Y,B),q&&x(I,W,Y,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(I,L,Y,W),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function d(I,L,Y,W){const B=W.wireframe===!0;let q=n[L.id];q===void 0&&(q={},n[L.id]=q);const X=I.isInstancedMesh===!0?I.id:0;let j=q[X];j===void 0&&(j={},q[X]=j);let ne=j[Y.id];ne===void 0&&(ne={},j[Y.id]=ne);let ae=ne[B];return ae===void 0&&(ae=h(l()),ne[B]=ae),ae}function h(I){const L=[],Y=[],W=[];for(let B=0;B<t;B++)L[B]=0,Y[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:W,object:I,attributes:{},index:null}}function m(I,L,Y,W){const B=r.attributes,q=L.attributes;let X=0;const j=Y.getAttributes();for(const ne in j)if(j[ne].location>=0){const ue=B[ne];let _e=q[ne];if(_e===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;X++}return r.attributesNum!==X||r.index!==W}function x(I,L,Y,W){const B={},q=L.attributes;let X=0;const j=Y.getAttributes();for(const ne in j)if(j[ne].location>=0){let ue=q[ne];ue===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),B[ne]=_e,X++}r.attributes=B,r.attributesNum=X,r.index=W}function S(){const I=r.newAttributes;for(let L=0,Y=I.length;L<Y;L++)I[L]=0}function f(I){p(I,0)}function p(I,L){const Y=r.newAttributes,W=r.enabledAttributes,B=r.attributeDivisors;Y[I]=1,W[I]===0&&(s.enableVertexAttribArray(I),W[I]=1),B[I]!==L&&(s.vertexAttribDivisor(I,L),B[I]=L)}function M(){const I=r.newAttributes,L=r.enabledAttributes;for(let Y=0,W=L.length;Y<W;Y++)L[Y]!==I[Y]&&(s.disableVertexAttribArray(Y),L[Y]=0)}function w(I,L,Y,W,B,q,X){X===!0?s.vertexAttribIPointer(I,L,Y,B,q):s.vertexAttribPointer(I,L,Y,W,B,q)}function v(I,L,Y,W){S();const B=W.attributes,q=Y.getAttributes(),X=L.defaultAttributeValues;for(const j in q){const ne=q[j];if(ne.location>=0){let ae=B[j];if(ae===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){const ue=ae.normalized,_e=ae.itemSize,Xe=e.get(ae);if(Xe===void 0)continue;const tt=Xe.buffer,be=Xe.type,Z=Xe.bytesPerElement,ie=be===s.INT||be===s.UNSIGNED_INT||ae.gpuType===Ua;if(ae.isInterleavedBufferAttribute){const te=ae.data,Ue=te.stride,Pe=ae.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<ne.locationSize;we++)p(ne.location+we,te.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<ne.locationSize;we++)f(ne.location+we);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let we=0;we<ne.locationSize;we++)w(ne.location+we,_e/ne.locationSize,be,ue,Ue*Z,(Pe+_e/ne.locationSize*we)*Z,ie)}else{if(ae.isInstancedBufferAttribute){for(let te=0;te<ne.locationSize;te++)p(ne.location+te,ae.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let te=0;te<ne.locationSize;te++)f(ne.location+te);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let te=0;te<ne.locationSize;te++)w(ne.location+te,_e/ne.locationSize,be,ue,_e*Z,_e/ne.locationSize*te*Z,ie)}}else if(X!==void 0){const ue=X[j];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(ne.location,ue);break;case 3:s.vertexAttrib3fv(ne.location,ue);break;case 4:s.vertexAttrib4fv(ne.location,ue);break;default:s.vertexAttrib1fv(ne.location,ue)}}}}M()}function E(){T();for(const I in n){const L=n[I];for(const Y in L){const W=L[Y];for(const B in W){const q=W[B];for(const X in q)u(q[X].object),delete q[X];delete W[B]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;const L=n[I.id];for(const Y in L){const W=L[Y];for(const B in W){const q=W[B];for(const X in q)u(q[X].object),delete q[X];delete W[B]}}delete n[I.id]}function R(I){for(const L in n){const Y=n[L];for(const W in Y){const B=Y[W];if(B[I.id]===void 0)continue;const q=B[I.id];for(const X in q)u(q[X].object),delete q[X];delete B[I.id]}}}function g(I){for(const L in n){const Y=n[L],W=I.isInstancedMesh===!0?I.id:0,B=Y[W];if(B!==void 0){for(const q in B){const X=B[q];for(const j in X)u(X[j].object),delete X[j];delete B[q]}delete Y[W],Object.keys(Y).length===0&&delete n[L]}}}function T(){D(),a=!0,r!==i&&(r=i,c(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:f,disableUnusedAttributes:M}}function qf(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==nn&&!g)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:y}}function Kf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new kn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||i;return i=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,S=d.clipIntersection,f=d.clipShadows,p=s.get(d);if(!i||x===null||x.length===0||r&&!f)r?u(null):c();else{const M=r?0:n,w=M*4;let v=p.clippingState||null;l.value=v,v=u(x,h,w,m);for(let E=0;E!==w;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,x){const S=d!==null?d.length:0;let f=null;if(S!==0){if(f=l.value,x!==!0||f===null){const p=m+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let w=0,v=m;w!==S;++w,v+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}const Vn=4,el=[.125,.215,.35,.446,.526,.582],ni=20,$f=256,qi=new Ja,tl=new Ne;let Lr=null,Ur=0,Nr=0,Fr=!1;const Jf=new C;class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Jf}=r;Lr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Ur,Nr),this._renderer.xr.enabled=Fr,e.scissorTest=!1,wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Rn,format:sn,colorSpace:Ys,depthBuffer:!1},i=il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qf(r)),this._blurMaterial=ep(r,e,t),this._ggxMaterial=jf(r,e,t)}return i}_compileMaterial(e){const t=new P(new gt,e);this._renderer.compile(t,qi)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(tl),d.toneMapping=fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new P(new H,new Wn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,f=S.material;let p=!1;const M=e.background;M?M.isColor&&(f.color.copy(M),e.background=null,p=!0):(f.color.copy(tl),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const E=this._cubeSize;wi(i,v*E,w>2?E:0,E,E),d.setRenderTarget(i),p&&d.render(S,l),d.render(e,l)}d.toneMapping=m,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ri||e.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,m=d*h,{_lodMax:x}=this,S=this._sizeLods[n],f=3*S*(n>x-Vn?n-x+Vn:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,wi(r,f,p,3*S,2*S),i.setRenderTarget(r),i.render(o,qi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,wi(e,f,p,3*S,2*S),i.setRenderTarget(e),i.render(o,qi)}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),S=r/x,f=isFinite(r)?1+Math.floor(u*S):ni;f>ni&&Le(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ni}`);const p=[];let M=0;for(let R=0;R<ni;++R){const g=R/S,T=Math.exp(-g*g/2);p.push(T),R===0?M+=T:R<f&&(M+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=x,h.mipInt.value=w-n;const v=this._sizeLods[i],E=3*v*(i>w-Vn?i-w+Vn:0),y=4*(this._cubeSize-v);wi(t,E,y,3*v,2*v),l.setRenderTarget(t),l.render(d,qi)}}function Qf(s){const e=[],t=[],n=[];let i=s;const r=s-Vn+1+el.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Vn?l=el[a-s+Vn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,S=3,f=2,p=1,M=new Float32Array(S*x*m),w=new Float32Array(f*x*m),v=new Float32Array(p*x*m);for(let y=0;y<m;y++){const R=y%3*2/3-1,g=y>2?0:-1,T=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];M.set(T,S*x*y),w.set(h,f*x*y);const D=[y,y,y,y,y,y];v.set(D,p*x*y)}const E=new gt;E.setAttribute("position",new Zt(M,S)),E.setAttribute("uv",new Zt(w,f)),E.setAttribute("faceIndex",new Zt(v,p)),n.push(new P(E,null)),i>Vn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function il(s,e,t){const n=new pn(s,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function jf(s,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$f,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ep(s,e,t){const n=new Float32Array(ni),i=new C(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function sl(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function rl(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function tr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class oc extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new H(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Tn});r.uniforms.tEquirect.value=t;const a=new P(i,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=Ot),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function tp(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===rr||m===ar)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const S=new oc(x.height);return S.fromEquirectangularTexture(s,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,x=m===rr||m===ar,S=m===ri||m===Ii;if(x||S){let f=t.get(h);const p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new nl(s)),f=x?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{const M=h.image;return x&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new nl(s)),f=x?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,m){return m===rr?h.mapping=ri:m===ar&&(h.mapping=Ii),h}function l(h){let m=0;const x=6;for(let S=0;S<x;S++)h[S]!==void 0&&m++;return m===x}function c(h){const m=h.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function np(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ci("WebGLRenderer: "+n+" extension not supported."),i}}}function ip(s,e,t,n){const i={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],s.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,x=d.attributes.position;let S=0;if(x===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let w=0,v=M.length;w<v;w+=3){const E=M[w+0],y=M[w+1],R=M[w+2];h.push(E,y,y,R,R,E)}}else{const M=x.array;S=x.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const E=w+0,y=w+1,R=w+2;h.push(E,y,y,R,R,E)}}const f=new(x.count>=65535?Kl:Zl)(h,1);f.version=S;const p=r.get(d);p&&e.remove(p),r.set(d,f)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function sp(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){s.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,m){m!==0&&(s.drawElementsInstanced(n,h,r,d*a,m),t.update(h,n,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let S=0;for(let f=0;f<m;f++)S+=h[f];t.update(S,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ap(s,e,t){const n=new WeakMap,i=new ut;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),x===!0&&(w=2),S===!0&&(w=3);let v=o.attributes.position.count*w,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const y=new Float32Array(v*E*4*d),R=new Yl(y,v,E,d);R.type=nn,R.needsUpdate=!0;const g=w*4;for(let D=0;D<d;D++){const I=f[D],L=p[D],Y=M[D],W=v*E*4*D;for(let B=0;B<I.count;B++){const q=B*g;m===!0&&(i.fromBufferAttribute(I,B),y[W+q+0]=i.x,y[W+q+1]=i.y,y[W+q+2]=i.z,y[W+q+3]=0),x===!0&&(i.fromBufferAttribute(L,B),y[W+q+4]=i.x,y[W+q+5]=i.y,y[W+q+6]=i.z,y[W+q+7]=0),S===!0&&(i.fromBufferAttribute(Y,B),y[W+q+8]=i.x,y[W+q+9]=i.y,y[W+q+10]=i.z,y[W+q+11]=Y.itemSize===4?i.w:1)}}h={count:d,texture:R,size:new He(v,E)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function op(s,e,t,n,i){let r=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const lp={[Dl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Ul]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function cp(s,e,t,n,i,r){const a=new pn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new Li(e,t):void 0}),o=new pn(e,t,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new gt;l.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const c=new qh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new P(l,c),d=new Ja(-1,1,1,-1,0,1);let h=null,m=null,x=!1,S,f=null,p=[],M=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let E=0;E<p.length;E++){const y=p[E];y.setSize&&y.setSize(w,v)}},this.setEffects=function(w){p=w,M=p.length>0&&p[0].isRenderPass===!0;const v=a.width,E=a.height;for(let y=0;y<p.length;y++){const R=p[y];R.setSize&&R.setSize(v,E)}},this.begin=function(w,v){if(x||w.toneMapping===fn&&p.length===0)return!1;if(f=v,v!==null){const E=v.width,y=v.height;(a.width!==E||a.height!==y)&&this.setSize(E,y)}return M===!1&&w.setRenderTarget(a),S=w.toneMapping,w.toneMapping=fn,!0},this.hasRenderPass=function(){return M},this.end=function(w,v){w.toneMapping=S,x=!0;let E=a,y=o;for(let R=0;R<p.length;R++){const g=p[R];if(g.enabled!==!1&&(g.render(w,y,E,v),g.needsSwap!==!1)){const T=E;E=y,y=T}}if(h!==w.outputColorSpace||m!==w.toneMapping){h=w.outputColorSpace,m=w.toneMapping,c.defines={},qe.getTransfer(h)===et&&(c.defines.SRGB_TRANSFER="");const R=lp[m];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(f),w.render(u,d),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const lc=new Bt,Da=new Li(1,1),cc=new Yl,hc=new yh,uc=new jl,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),hl=new Float32Array(4);function zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=al[i];if(r===void 0&&(r=new Float32Array(i),al[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function nr(s,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function pp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;hl.set(n),s.uniformMatrix2fv(this.addr,!1,hl),At(t,n)}}function mp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;cl.set(n),s.uniformMatrix3fv(this.addr,!1,cl),At(t,n)}}function gp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ll.set(n),s.uniformMatrix4fv(this.addr,!1,ll),At(t,n)}}function _p(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function Mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function Sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function wp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Da.compareFunction=t.isReversedDepthBuffer()?Ha:ka,r=Da):r=lc,t.setTexture2D(e||r,i)}function Tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hc,i)}function Ap(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uc,i)}function Rp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cc,i)}function Cp(s){switch(s){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return bp;case 36295:return yp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}function Pp(s,e){s.uniform1fv(this.addr,e)}function Dp(s,e){const t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function Ip(s,e){const t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function Lp(s,e){const t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function Up(s,e){const t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Np(s,e){const t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fp(s,e){const t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Op(s,e){s.uniform1iv(this.addr,e)}function Bp(s,e){s.uniform2iv(this.addr,e)}function zp(s,e){s.uniform3iv(this.addr,e)}function Gp(s,e){s.uniform4iv(this.addr,e)}function kp(s,e){s.uniform1uiv(this.addr,e)}function Hp(s,e){s.uniform2uiv(this.addr,e)}function Vp(s,e){s.uniform3uiv(this.addr,e)}function Wp(s,e){s.uniform4uiv(this.addr,e)}function Xp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Da:a=lc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Yp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hc,r[a])}function qp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uc,r[a])}function Zp(s,e,t){const n=this.cache,i=e.length,r=nr(t,i);Tt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cc,r[a])}function Kp(s){switch(s){case 5126:return Pp;case 35664:return Dp;case 35665:return Ip;case 35666:return Lp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return Gp;case 5125:return kp;case 36294:return Hp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Zp}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cp(t.type)}}class Jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function ul(s,e){s.seq.push(e),s.map[e.id]=e}function jp(s,e,t){const n=s.name,i=n.length;for(Or.lastIndex=0;;){const r=Or.exec(n),a=Or.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ul(t,c===void 0?new $p(o,s,e):new Jp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Qp(o),ul(t,d)),t=d}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jp(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const em=37297;let tm=0;function nm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fl=new Fe;function im(s){qe._getMatrix(fl,qe.workingColorSpace,s);const e=`mat3( ${fl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case qs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+nm(s.getShaderSource(e),o)}else return r}function sm(s,e){const t=im(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rm={[Dl]:"Linear",[Il]:"Reinhard",[Ll]:"Cineon",[Ul]:"ACESFilmic",[Fl]:"AgX",[Ol]:"Neutral",[Nl]:"Custom"};function am(s,e){const t=rm[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new C;function om(){qe.getLuminanceCoefficients(Ns);const s=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function cm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ji(s){return s!==""}function ml(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(s){return s.replace(um,fm)}const dm=new Map;function fm(s,e){let t=ke[e];if(t===void 0){const n=dm.get(e);if(n!==void 0)t=ke[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ia(t)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(s){return s.replace(pm,mm)}function mm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gm={[Bs]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function _m(s){return gm[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xm={[ri]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function vm(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":xm[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mm={[Ii]:"ENVMAP_MODE_REFRACTION"};function Sm(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Mm[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bm={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[kc]:"ENVMAP_BLENDING_MIX",[Hc]:"ENVMAP_BLENDING_ADD"};function ym(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bm[s.combine]||"ENVMAP_BLENDING_NONE"}function wm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Em(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_m(t),c=vm(t),u=Sm(t),d=ym(t),h=wm(t),m=lm(t),x=cm(r),S=i.createProgram();let f,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ji).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(f=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==fn?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Ia(a),a=ml(a,t),a=gl(a,t),o=Ia(o),o=ml(o,t),o=gl(o,t),a=_l(a),o=_l(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+f+a,v=M+p+o,E=dl(i,i.VERTEX_SHADER,w),y=dl(i,i.FRAGMENT_SHADER,v);i.attachShader(S,E),i.attachShader(S,y),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function R(I){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(S)||"",Y=i.getShaderInfoLog(E)||"",W=i.getShaderInfoLog(y)||"",B=L.trim(),q=Y.trim(),X=W.trim();let j=!0,ne=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,S,E,y);else{const ae=pl(i,E,"vertex"),ue=pl(i,y,"fragment");Ke("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ae+`
`+ue)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(ne=!1);ne&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:q,prefix:f},fragmentShader:{log:X,prefix:p}})}i.deleteShader(E),i.deleteShader(y),g=new Vs(i,S),T=hm(i,S)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(S,em)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=y,this}let Tm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rm(e),t.set(e,n)),n}}class Rm{constructor(e){this.id=Tm++,this.code=e,this.usedTimes=0}}function Cm(s){return s===ai||s===Ws||s===Xs}function Pm(s,e,t,n,i,r){const a=new Xa,o=new Am,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,T,D,I,L,Y){const W=I.fog,B=L.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,j=e.get(g.envMap||q,X),ne=j&&j.mapping===Qs?j.image.height:null,ae=m[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const ue=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Xe=0;B.morphAttributes.position!==void 0&&(Xe=1),B.morphAttributes.normal!==void 0&&(Xe=2),B.morphAttributes.color!==void 0&&(Xe=3);let tt,be,Z,ie;if(ae){const ye=un[ae];tt=ye.vertexShader,be=ye.fragmentShader}else{tt=g.vertexShader,be=g.fragmentShader;const ye=o.getVertexShaderStage(g),pt=o.getFragmentShaderStage(g);o.update(g,ye,pt),Z=ye.id,ie=pt.id}const te=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,we=L.isBatchedMesh===!0,ht=!!g.map,ze=!!g.matcap,Qe=!!j,$e=!!g.aoMap,Ye=!!g.lightMap,ot=!!g.bumpMap&&g.wireframe===!1,dt=!!g.normalMap,Rt=!!g.displacementMap,Dt=!!g.emissiveMap,ft=!!g.metalnessMap,Mt=!!g.roughnessMap,N=g.anisotropy>0,kt=g.clearcoat>0,je=g.dispersion>0,A=g.iridescence>0,_=g.sheen>0,O=g.transmission>0,k=N&&!!g.anisotropyMap,K=kt&&!!g.clearcoatMap,se=kt&&!!g.clearcoatNormalMap,oe=kt&&!!g.clearcoatRoughnessMap,$=A&&!!g.iridescenceMap,Q=A&&!!g.iridescenceThicknessMap,le=_&&!!g.sheenColorMap,Ae=_&&!!g.sheenRoughnessMap,de=!!g.specularMap,ce=!!g.specularColorMap,De=!!g.specularIntensityMap,Ie=O&&!!g.transmissionMap,Oe=O&&!!g.thicknessMap,U=!!g.gradientMap,re=!!g.alphaMap,J=g.alphaTest>0,he=!!g.alphaHash,ge=!!g.extensions;let ee=fn;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ee=s.toneMapping);const Te={shaderID:ae,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:be,defines:g.defines,customVertexShaderID:Z,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:we,batchingColor:we&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ht,matcap:ze,envMap:Qe,envMapMode:Qe&&j.mapping,envMapCubeUVHeight:ne,aoMap:$e,lightMap:Ye,bumpMap:ot,normalMap:dt,displacementMap:Rt,emissiveMap:Dt,normalMapObjectSpace:dt&&g.normalMapType===Xc,normalMapTangentSpace:dt&&g.normalMapType===Ca,packedNormalMap:dt&&g.normalMapType===Ca&&Cm(g.normalMap.format),metalnessMap:ft,roughnessMap:Mt,anisotropy:N,anisotropyMap:k,clearcoat:kt,clearcoatMap:K,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:je,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:_,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:de,specularColorMap:ce,specularIntensityMap:De,transmission:O,transmissionMap:Ie,thicknessMap:Oe,gradientMap:U,opaque:g.transparent===!1&&g.blending===Ri&&g.alphaToCoverage===!1,alphaMap:re,alphaTest:J,alphaHash:he,combine:g.combine,mapUv:ht&&x(g.map.channel),aoMapUv:$e&&x(g.aoMap.channel),lightMapUv:Ye&&x(g.lightMap.channel),bumpMapUv:ot&&x(g.bumpMap.channel),normalMapUv:dt&&x(g.normalMap.channel),displacementMapUv:Rt&&x(g.displacementMap.channel),emissiveMapUv:Dt&&x(g.emissiveMap.channel),metalnessMapUv:ft&&x(g.metalnessMap.channel),roughnessMapUv:Mt&&x(g.roughnessMap.channel),anisotropyMapUv:k&&x(g.anisotropyMap.channel),clearcoatMapUv:K&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(g.sheenRoughnessMap.channel),specularMapUv:de&&x(g.specularMap.channel),specularColorMapUv:ce&&x(g.specularColorMap.channel),specularIntensityMapUv:De&&x(g.specularIntensityMap.channel),transmissionMapUv:Ie&&x(g.transmissionMap.channel),thicknessMapUv:Oe&&x(g.thicknessMap.channel),alphaMapUv:re&&x(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||N),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(ht||re),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,decodeVideoTexture:ht&&g.map.isVideoTexture===!0&&qe.getTransfer(g.map.colorSpace)===et,decodeVideoTextureEmissive:Dt&&g.emissiveMap.isVideoTexture===!0&&qe.getTransfer(g.emissiveMap.colorSpace)===et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Pt,flipSided:g.side===Ht,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&g.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function f(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)T.push(D),T.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(p(T,g),M(T,g),T.push(s.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function p(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function M(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function w(g){const T=m[g.type];let D;if(T){const I=un[T];D=Wh.clone(I.uniforms)}else D=g.uniforms;return D}function v(g,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new Em(s,T,g,i),c.push(D),u.set(T,D)),D}function E(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function y(g){o.remove(g)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:y,programs:c,dispose:R}}function Dm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function vl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ml(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,S,f,p){let M=s[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:f,group:p},s[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=x,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=f,M.group=p),e++,M}function l(h,m,x,S,f,p){const M=o(h,m,x,S,f,p);x.transmission>0?n.push(M):x.transparent===!0?i.push(M):t.push(M)}function c(h,m,x,S,f,p){const M=o(h,m,x,S,f,p);x.transmission>0?n.unshift(M):x.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,m,x){t.length>1&&t.sort(h||Im),n.length>1&&n.sort(m||vl),i.length>1&&i.sort(m||vl),x&&(t.reverse(),n.reverse(),i.reverse())}function d(){for(let h=e,m=s.length;h<m;h++){const x=s[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:u}}function Lm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ml,s.set(n,[a])):i>=r.length?(a=new Ml,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Um(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ne};break;case"SpotLight":t={position:new C,direction:new C,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Nm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Fm=0;function Om(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bm(s){const e=new Um,t=Nm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new at,a=new at;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,x=0,S=0,f=0,p=0,M=0,w=0,v=0,E=0,y=0,R=0;c.sort(Om);for(let T=0,D=c.length;T<D;T++){const I=c[T],L=I.color,Y=I.intensity,W=I.distance;let B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ai?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=L.r*Y,d+=L.g*Y,h+=L.b*Y;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],Y);R++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,j=t.get(I);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=q,m++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(L).multiplyScalar(Y),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[S]=q;const X=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,X.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[S]=X.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=B,v++}S++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(L).multiplyScalar(Y),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=q,f++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const X=I.shadow,j=t.get(I);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=B,n.pointShadowMatrix[x]=I.shadow.matrix,w++}n.point[x]=q,x++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(Y),q.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[p]=q,p++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const g=n.hash;(g.directionalLength!==m||g.pointLength!==x||g.spotLength!==S||g.rectAreaLength!==f||g.hemiLength!==p||g.numDirectionalShadows!==M||g.numPointShadows!==w||g.numSpotShadows!==v||g.numSpotMaps!==E||g.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=f,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+E-y,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,g.directionalLength=m,g.pointLength=x,g.spotLength=S,g.rectAreaLength=f,g.hemiLength=p,g.numDirectionalShadows=M,g.numPointShadows=w,g.numSpotShadows=v,g.numSpotMaps=E,g.numLightProbes=R,n.version=Fm++)}function l(c,u){let d=0,h=0,m=0,x=0,S=0;const f=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const w=c[p];if(w.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),d++}else if(w.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),m++}else if(w.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(f),h++}else if(w.isHemisphereLight){const v=n.hemi[S];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:n}}function Sl(s){const e=new Bm(s),t=[],n=[],i=[];function r(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Sl(s),e.set(i,[o])):r>=a.length?(o=new Sl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Hm=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Vm=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],bl=new at,Zi=new C,Br=new C;function Wm(s,e,t){let n=new Za;const i=new He,r=new He,a=new ut,o=new Zh,l=new Kh,c={},u=t.maxTextureSize,d={[Xn]:Ht,[Ht]:Xn,[Pt]:Pt},h=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Gm,fragmentShader:km}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new gt;x.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new P(x,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let p=this.type;this.render=function(y,R,g){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;this.type===Cl&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bs);const T=s.getRenderTarget(),D=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Tn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const Y=p!==this.type;Y&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=y.length;W<B;W++){const q=y[W],X=q.shadow;if(X===void 0){Le("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const j=X.getFrameExtents();i.multiply(j),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,X.mapSize.y=r.y));const ne=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ne,X.map===null||Y===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===$i){if(q.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pn(i.x,i.y,{format:ai,type:Rn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Li(i.x,i.y,nn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Cn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=It,X.map.depthTexture.magFilter=It}else q.isPointLight?(X.map=new oc(i.x),X.map.depthTexture=new Hh(i.x,mn)):(X.map=new pn(i.x,i.y),X.map.depthTexture=new Li(i.x,i.y,mn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Cn,this.type===Bs?(X.map.depthTexture.compareFunction=ne?Ha:ka,X.map.depthTexture.minFilter=Ot,X.map.depthTexture.magFilter=Ot):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=It,X.map.depthTexture.magFilter=It);X.camera.updateProjectionMatrix()}const ae=X.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<ae;ue++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,ue),s.clear();else{ue===0&&(s.setRenderTarget(X.map),s.clear());const _e=X.getViewport(ue);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),L.viewport(a)}if(q.isPointLight){const _e=X.camera,Xe=X.matrix,tt=q.distance||_e.far;tt!==_e.far&&(_e.far=tt,_e.updateProjectionMatrix()),Zi.setFromMatrixPosition(q.matrixWorld),_e.position.copy(Zi),Br.copy(_e.position),Br.add(Hm[ue]),_e.up.copy(Vm[ue]),_e.lookAt(Br),_e.updateMatrixWorld(),Xe.makeTranslation(-Zi.x,-Zi.y,-Zi.z),bl.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),X._frustum.setFromProjectionMatrix(bl,_e.coordinateSystem,_e.reversedDepth)}else X.updateMatrices(q);n=X.getFrustum(),v(R,g,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===$i&&M(X,g),X.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(T,D,I)};function M(y,R){const g=e.update(S);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new pn(i.x,i.y,{format:ai,type:Rn})),h.uniforms.shadow_pass.value=y.map.depthTexture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(R,null,g,h,S,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(R,null,g,m,S,null)}function w(y,R,g,T){let D=null;const I=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)D=I;else if(D=g.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=D.uuid,Y=R.uuid;let W=c[L];W===void 0&&(W={},c[L]=W);let B=W[Y];B===void 0&&(B=D.clone(),W[Y]=B,R.addEventListener("dispose",E)),D=B}if(D.visible=R.visible,D.wireframe=R.wireframe,T===$i?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=s.properties.get(D);L.light=g}return D}function v(y,R,g,T,D){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&D===$i)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);const Y=e.update(y),W=y.material;if(Array.isArray(W)){const B=Y.groups;for(let q=0,X=B.length;q<X;q++){const j=B[q],ne=W[j.materialIndex];if(ne&&ne.visible){const ae=w(y,ne,T,D);y.onBeforeShadow(s,y,R,g,Y,ae,j),s.renderBufferDirect(g,null,Y,ae,y,j),y.onAfterShadow(s,y,R,g,Y,ae,j)}}}else if(W.visible){const B=w(y,W,T,D);y.onBeforeShadow(s,y,R,g,Y,B,null),s.renderBufferDirect(g,null,Y,B,y,null),y.onAfterShadow(s,y,R,g,Y,B,null)}}const L=y.children;for(let Y=0,W=L.length;Y<W;Y++)v(L[Y],R,g,T,D)}function E(y){y.target.removeEventListener("dispose",E);for(const g in c){const T=c[g],D=y.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function Xm(s,e){function t(){let U=!1;const re=new ut;let J=null;const he=new ut(0,0,0,0);return{setMask:function(ge){J!==ge&&!U&&(s.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ee,Te,ye,pt){pt===!0&&(ge*=ye,ee*=ye,Te*=ye),re.set(ge,ee,Te,ye),he.equals(re)===!1&&(s.clearColor(ge,ee,Te,ye),he.copy(re))},reset:function(){U=!1,J=null,he.set(-1,0,0,0)}}}function n(){let U=!1,re=!1,J=null,he=null,ge=null;return{setReversed:function(ee){if(re!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),re=ee;const ye=ge;ge=null,this.setClear(ye)}},getReversed:function(){return re},setTest:function(ee){ee?te(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(ee){J!==ee&&!U&&(s.depthMask(ee),J=ee)},setFunc:function(ee){if(re&&(ee=th[ee]),he!==ee){switch(ee){case Xr:s.depthFunc(s.NEVER);break;case Yr:s.depthFunc(s.ALWAYS);break;case qr:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case Zr:s.depthFunc(s.EQUAL);break;case Kr:s.depthFunc(s.GEQUAL);break;case $r:s.depthFunc(s.GREATER);break;case Jr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=ee}},setLocked:function(ee){U=ee},setClear:function(ee){ge!==ee&&(ge=ee,re&&(ee=1-ee),s.clearDepth(ee))},reset:function(){U=!1,J=null,he=null,ge=null,re=!1}}}function i(){let U=!1,re=null,J=null,he=null,ge=null,ee=null,Te=null,ye=null,pt=null;return{setTest:function(lt){U||(lt?te(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(lt){re!==lt&&!U&&(s.stencilMask(lt),re=lt)},setFunc:function(lt,rn,an){(J!==lt||he!==rn||ge!==an)&&(s.stencilFunc(lt,rn,an),J=lt,he=rn,ge=an)},setOp:function(lt,rn,an){(ee!==lt||Te!==rn||ye!==an)&&(s.stencilOp(lt,rn,an),ee=lt,Te=rn,ye=an)},setLocked:function(lt){U=lt},setClear:function(lt){pt!==lt&&(s.clearStencil(lt),pt=lt)},reset:function(){U=!1,re=null,J=null,he=null,ge=null,ee=null,Te=null,ye=null,pt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},m=new WeakMap,x=[],S=null,f=!1,p=null,M=null,w=null,v=null,E=null,y=null,R=null,g=new Ne(0,0,0),T=0,D=!1,I=null,L=null,Y=null,W=null,B=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const ne=s.getParameter(s.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),X=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),X=j>=2);let ae=null,ue={};const _e=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),tt=new ut().fromArray(_e),be=new ut().fromArray(Xe);function Z(U,re,J,he){const ge=new Uint8Array(4),ee=s.createTexture();s.bindTexture(U,ee),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<J;Te++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(re+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return ee}const ie={};ie[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(s.DEPTH_TEST),a.setFunc(Di),ot(!1),dt(po),te(s.CULL_FACE),$e(Tn);function te(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function Ue(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Pe(U,re){return h[U]!==re?(s.bindFramebuffer(U,re),h[U]=re,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=re),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=re),!0):!1}function we(U,re){let J=x,he=!1;if(U){J=m.get(re),J===void 0&&(J=[],m.set(re,J));const ge=U.textures;if(J.length!==ge.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,Te=ge.length;ee<Te;ee++)J[ee]=s.COLOR_ATTACHMENT0+ee;J.length=ge.length,he=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,he=!0);he&&s.drawBuffers(J)}function ht(U){return S!==U?(s.useProgram(U),S=U,!0):!1}const ze={[ti]:s.FUNC_ADD,[wc]:s.FUNC_SUBTRACT,[Ec]:s.FUNC_REVERSE_SUBTRACT};ze[Tc]=s.MIN,ze[Ac]=s.MAX;const Qe={[Rc]:s.ZERO,[Cc]:s.ONE,[Pc]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[Fc]:s.SRC_ALPHA_SATURATE,[Uc]:s.DST_COLOR,[Ic]:s.DST_ALPHA,[Dc]:s.ONE_MINUS_SRC_COLOR,[Wr]:s.ONE_MINUS_SRC_ALPHA,[Nc]:s.ONE_MINUS_DST_COLOR,[Lc]:s.ONE_MINUS_DST_ALPHA,[Oc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[zc]:s.CONSTANT_ALPHA,[Gc]:s.ONE_MINUS_CONSTANT_ALPHA};function $e(U,re,J,he,ge,ee,Te,ye,pt,lt){if(U===Tn){f===!0&&(Ue(s.BLEND),f=!1);return}if(f===!1&&(te(s.BLEND),f=!0),U!==yc){if(U!==p||lt!==D){if((M!==ti||E!==ti)&&(s.blendEquation(s.FUNC_ADD),M=ti,E=ti),lt)switch(U){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mo:s.blendFunc(s.ONE,s.ONE);break;case go:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _o:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case go:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}w=null,v=null,y=null,R=null,g.set(0,0,0),T=0,p=U,D=lt}return}ge=ge||re,ee=ee||J,Te=Te||he,(re!==M||ge!==E)&&(s.blendEquationSeparate(ze[re],ze[ge]),M=re,E=ge),(J!==w||he!==v||ee!==y||Te!==R)&&(s.blendFuncSeparate(Qe[J],Qe[he],Qe[ee],Qe[Te]),w=J,v=he,y=ee,R=Te),(ye.equals(g)===!1||pt!==T)&&(s.blendColor(ye.r,ye.g,ye.b,pt),g.copy(ye),T=pt),p=U,D=!1}function Ye(U,re){U.side===Pt?Ue(s.CULL_FACE):te(s.CULL_FACE);let J=U.side===Ht;re&&(J=!J),ot(J),U.blending===Ri&&U.transparent===!1?$e(Tn):$e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const he=U.stencilWrite;o.setTest(he),he&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){I!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),I=U)}function dt(U){U!==Sc?(te(s.CULL_FACE),U!==L&&(U===po?s.cullFace(s.BACK):U===bc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),L=U}function Rt(U){U!==Y&&(X&&s.lineWidth(U),Y=U)}function Dt(U,re,J){U?(te(s.POLYGON_OFFSET_FILL),(W!==re||B!==J)&&(W=re,B=J,a.getReversed()&&(re=-re),s.polygonOffset(re,J))):Ue(s.POLYGON_OFFSET_FILL)}function ft(U){U?te(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function Mt(U){U===void 0&&(U=s.TEXTURE0+q-1),ae!==U&&(s.activeTexture(U),ae=U)}function N(U,re,J){J===void 0&&(ae===null?J=s.TEXTURE0+q-1:J=ae);let he=ue[J];he===void 0&&(he={type:void 0,texture:void 0},ue[J]=he),(he.type!==U||he.texture!==re)&&(ae!==J&&(s.activeTexture(J),ae=J),s.bindTexture(U,re||ie[U]),he.type=U,he.texture=re)}function kt(){const U=ue[ae];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function je(){try{s.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function _(){try{s.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function O(){try{s.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function k(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function se(){try{s.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function oe(){try{s.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function $(){try{s.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Q(){try{s.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function le(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function Ae(U,re){d[U]!==re&&(s.pixelStorei(U,re),d[U]=re)}function de(U){tt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function ce(U){be.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),be.copy(U))}function De(U,re){let J=c.get(re);J===void 0&&(J=new WeakMap,c.set(re,J));let he=J.get(U);he===void 0&&(he=s.getUniformBlockIndex(re,U.name),J.set(U,he))}function Ie(U,re){const he=c.get(re).get(U);l.get(re)!==he&&(s.uniformBlockBinding(re,he,U.__bindingPointIndex),l.set(re,he))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,ue={},h={},m=new WeakMap,x=[],S=null,f=!1,p=null,M=null,w=null,v=null,E=null,y=null,R=null,g=new Ne(0,0,0),T=0,D=!1,I=null,L=null,Y=null,W=null,B=null,tt.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Ue,bindFramebuffer:Pe,drawBuffers:we,useProgram:ht,setBlending:$e,setMaterial:Ye,setFlipSided:ot,setCullFace:dt,setLineWidth:Rt,setPolygonOffset:Dt,setScissorTest:ft,activeTexture:Mt,bindTexture:N,unbindTexture:kt,compressedTexImage2D:je,compressedTexImage3D:A,texImage2D:$,texImage3D:Q,pixelStorei:Ae,getParameter:le,updateUBOMapping:De,uniformBlockBinding:Ie,texStorage2D:se,texStorage3D:oe,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:K,scissor:de,viewport:ce,reset:Oe}}function Ym(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,_){return x?new OffscreenCanvas(A,_):Zs("canvas")}function f(A,_,O){let k=1;const K=je(A);if((K.width>O||K.height>O)&&(k=O/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(k*K.width),oe=Math.floor(k*K.height);h===void 0&&(h=S(se,oe));const $=_?S(se,oe):h;return $.width=se,$.height=oe,$.getContext("2d").drawImage(A,0,0,se,oe),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+oe+")."),$}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,_,O,k,K,se=!1){if(A!==null){if(s[A]!==void 0)return s[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;k&&(oe=e.get("EXT_texture_norm16"),oe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8),O===s.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),O===s.SHORT&&oe&&($=oe.R16_SNORM_EXT)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),_===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8),O===s.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),O===s.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),_===s.RGB&&(O===s.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),O===s.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),_===s.RGBA){const Q=se?qs:qe.getTransfer(K);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=Q===et?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),O===s.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(A,_){let O;return A?_===null||_===mn||_===ns?O=s.DEPTH24_STENCIL8:_===nn?O=s.DEPTH32F_STENCIL8:_===ts&&(O=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mn||_===ns?O=s.DEPTH_COMPONENT24:_===nn?O=s.DEPTH_COMPONENT32F:_===ts&&(O=s.DEPTH_COMPONENT16),O}function y(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function g(A){const _=A.target;_.removeEventListener("dispose",g),I(_)}function T(A){const _=n.get(A);if(_.__webglInit===void 0)return;const O=A.source,k=m.get(O);if(k){const K=k[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(A),Object.keys(k).length===0&&m.delete(O)}n.remove(A)}function D(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const O=A.source,k=m.get(O);delete k[_.__cacheKey],a.memory.textures--}function I(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let K=0;K<_.__webglFramebuffer[k].length;K++)s.deleteFramebuffer(_.__webglFramebuffer[k][K]);else s.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)s.deleteFramebuffer(_.__webglFramebuffer[k]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let k=0,K=O.length;k<K;k++){const se=n.get(O[k]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(A)}let L=0;function Y(){L=0}function W(){return L}function B(A){L=A}function q(){const A=L;return A>=i.maxTextures&&Le("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function X(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){const O=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const k=A.image;if(k===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function ne(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ue(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function ae(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ue(O,A,_);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function ue(A,_){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Pe(O,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const _e={[es]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Qr]:s.MIRRORED_REPEAT},Xe={[It]:s.NEAREST,[Vc]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},tt={[Yc]:s.NEVER,[Jc]:s.ALWAYS,[qc]:s.LESS,[ka]:s.LEQUAL,[Zc]:s.EQUAL,[Ha]:s.GEQUAL,[Kc]:s.GREATER,[$c]:s.NOTEQUAL};function be(A,_){if(_.type===nn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ot||_.magFilter===or||_.magFilter===cs||_.magFilter===ii||_.minFilter===Ot||_.minFilter===or||_.minFilter===cs||_.minFilter===ii)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,_e[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,_e[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,_e[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Xe[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Xe[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,tt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==cs&&_.minFilter!==ii||_.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Z(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const k=_.source;let K=m.get(k);K===void 0&&(K={},m.set(k,K));const se=X(_);if(se!==A.__cacheKey){K[se]===void 0&&(K[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[se].usedTimes++;const oe=K[A.__cacheKey];oe!==void 0&&(K[A.__cacheKey].usedTimes--,oe.usedTimes===0&&D(_)),A.__cacheKey=se,A.__webglTexture=K[se].texture}return O}function ie(A,_,O){return Math.floor(Math.floor(A/O)/_)}function te(A,_,O,k){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,O,k,_.data);else{se.sort((Ae,de)=>Ae.start-de.start);let oe=0;for(let Ae=1;Ae<se.length;Ae++){const de=se[oe],ce=se[Ae],De=de.start+de.count,Ie=ie(ce.start,_.width,4),Oe=ie(de.start,_.width,4);ce.start<=De+1&&Ie===Oe&&ie(ce.start+ce.count-1,_.width,4)===Ie?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,se[oe]=ce)}se.length=oe+1;const $=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,de=se.length;Ae<de;Ae++){const ce=se[Ae],De=Math.floor(ce.start/4),Ie=Math.ceil(ce.count/4),Oe=De%_.width,U=Math.floor(De/_.width),re=Ie,J=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Oe,U,re,J,O,k,_.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,le)}}function Ue(A,_,O){let k=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=s.TEXTURE_3D);const K=Z(A,_),se=_.source;t.bindTexture(k,A.__webglTexture,s.TEXTURE0+O);const oe=n.get(se);if(se.version!==oe.__version||K===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=qe.getPrimaries(qe.workingColorSpace),he=_.colorSpace===Hn?null:qe.getPrimaries(_.colorSpace),ge=_.colorSpace===Hn||J===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=f(_.image,!1,i.maxTextureSize);Q=kt(_,Q);const le=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let de=v(_.internalFormat,le,Ae,_.normalized,_.colorSpace,_.isVideoTexture);be(k,_);let ce;const De=_.mipmaps,Ie=_.isVideoTexture!==!0,Oe=oe.__version===void 0||K===!0,U=se.dataReady,re=y(_,Q);if(_.isDepthTexture)de=E(_.format===si,_.type),Oe&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,de,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ae,null));else if(_.isDataTexture)if(De.length>0){Ie&&Oe&&t.texStorage2D(s.TEXTURE_2D,re,de,De[0].width,De[0].height);for(let J=0,he=De.length;J<he;J++)ce=De[J],Ie?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,le,Ae,ce.data):t.texImage2D(s.TEXTURE_2D,J,de,ce.width,ce.height,0,le,Ae,ce.data);_.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(s.TEXTURE_2D,re,de,Q.width,Q.height),U&&te(_,Q,le,Ae)):t.texImage2D(s.TEXTURE_2D,0,de,Q.width,Q.height,0,le,Ae,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,de,De[0].width,De[0].height,Q.depth);for(let J=0,he=De.length;J<he;J++)if(ce=De[J],_.format!==sn)if(le!==null)if(Ie){if(U)if(_.layerUpdates.size>0){const ge=jo(ce.width,ce.height,_.format,_.type);for(const ee of _.layerUpdates){const Te=ce.data.subarray(ee*ge/ce.data.BYTES_PER_ELEMENT,(ee+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ee,ce.width,ce.height,1,le,Te)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,le,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,de,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,le,Ae,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,de,ce.width,ce.height,Q.depth,0,le,Ae,ce.data)}else{Ie&&Oe&&t.texStorage2D(s.TEXTURE_2D,re,de,De[0].width,De[0].height);for(let J=0,he=De.length;J<he;J++)ce=De[J],_.format!==sn?le!==null?Ie?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,J,de,ce.width,ce.height,0,ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,le,Ae,ce.data):t.texImage2D(s.TEXTURE_2D,J,de,ce.width,ce.height,0,le,Ae,ce.data)}else if(_.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,re,de,Q.width,Q.height,Q.depth),U)if(_.layerUpdates.size>0){const J=jo(Q.width,Q.height,_.format,_.type);for(const he of _.layerUpdates){const ge=Q.data.subarray(he*J/Q.data.BYTES_PER_ELEMENT,(he+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Q.width,Q.height,1,le,Ae,ge)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ae,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,Q.width,Q.height,Q.depth,0,le,Ae,Q.data);else if(_.isData3DTexture)Ie?(Oe&&t.texStorage3D(s.TEXTURE_3D,re,de,Q.width,Q.height,Q.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ae,Q.data)):t.texImage3D(s.TEXTURE_3D,0,de,Q.width,Q.height,Q.depth,0,le,Ae,Q.data);else if(_.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(s.TEXTURE_2D,re,de,Q.width,Q.height);else{let J=Q.width,he=Q.height;for(let ge=0;ge<re;ge++)t.texImage2D(s.TEXTURE_2D,ge,de,J,he,0,le,Ae,null),J>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(_),J.onpaint=he=>{const ge=he.changedElements;for(const ee of d)ge.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{const ge=s.RGBA,ee=s.RGBA,Te=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ge,ee,Te,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ie&&Oe){const J=je(De[0]);t.texStorage2D(s.TEXTURE_2D,re,de,J.width,J.height)}for(let J=0,he=De.length;J<he;J++)ce=De[J],Ie?U&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le,Ae,ce):t.texImage2D(s.TEXTURE_2D,J,de,le,Ae,ce);_.generateMipmaps=!1}else if(Ie){if(Oe){const J=je(Q);t.texStorage2D(s.TEXTURE_2D,re,de,J.width,J.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,Ae,Q)}else t.texImage2D(s.TEXTURE_2D,0,de,le,Ae,Q);p(_)&&M(k),oe.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Pe(A,_,O){if(_.image.length!==6)return;const k=Z(A,_),K=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const se=n.get(K);if(K.version!==se.__version||k===!0){t.activeTexture(s.TEXTURE0+O);const oe=qe.getPrimaries(qe.workingColorSpace),$=_.colorSpace===Hn?null:qe.getPrimaries(_.colorSpace),Q=_.colorSpace===Hn||oe===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const le=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!le&&!Ae?de[ee]=f(_.image[ee],!0,i.maxCubemapSize):de[ee]=Ae?_.image[ee].image:_.image[ee],de[ee]=kt(_,de[ee]);const ce=de[0],De=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type),Oe=v(_.internalFormat,De,Ie,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,re=se.__version===void 0||k===!0,J=K.dataReady;let he=y(_,ce);be(s.TEXTURE_CUBE_MAP,_);let ge;if(le){U&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Oe,ce.width,ce.height);for(let ee=0;ee<6;ee++){ge=de[ee].mipmaps;for(let Te=0;Te<ge.length;Te++){const ye=ge[Te];_.format!==sn?De!==null?U?J&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ye.width,ye.height,De,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Oe,ye.width,ye.height,0,ye.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ye.width,ye.height,De,Ie,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Oe,ye.width,ye.height,0,De,Ie,ye.data)}}}else{if(ge=_.mipmaps,U&&re){ge.length>0&&he++;const ee=je(de[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ae){U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,De,Ie,de[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,de[ee].width,de[ee].height,0,De,Ie,de[ee].data);for(let Te=0;Te<ge.length;Te++){const pt=ge[Te].image[ee].image;U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,pt.width,pt.height,De,Ie,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Oe,pt.width,pt.height,0,De,Ie,pt.data)}}else{U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Ie,de[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,De,Ie,de[ee]);for(let Te=0;Te<ge.length;Te++){const ye=ge[Te];U?J&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,De,Ie,ye.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Oe,De,Ie,ye.image[ee])}}}p(_)&&M(s.TEXTURE_CUBE_MAP),se.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function we(A,_,O,k,K,se){const oe=r.convert(O.format,O.colorSpace),$=r.convert(O.type),Q=v(O.internalFormat,oe,$,O.normalized,O.colorSpace),le=n.get(_),Ae=n.get(O);if(Ae.__renderTarget=_,!le.__hasExternalTextures){const de=Math.max(1,_.width>>se),ce=Math.max(1,_.height>>se);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,se,Q,de,ce,_.depth,0,oe,$,null):t.texImage2D(K,se,Q,de,ce,0,oe,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Mt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,K,Ae.__webglTexture,0,ft(_)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,K,Ae.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(A,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const k=_.depthTexture,K=k&&k.isDepthTexture?k.type:null,se=E(_.stencilBuffer,K),oe=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Mt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(_),se,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(_),se,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,se,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,A)}else{const k=_.textures;for(let K=0;K<k.length;K++){const se=k[K],oe=r.convert(se.format,se.colorSpace),$=r.convert(se.type),Q=v(se.internalFormat,oe,$,se.normalized,se.colorSpace);Mt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(_),Q,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(_),Q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Q,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ze(A,_,O){const k=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),be(s.TEXTURE_CUBE_MAP,_.depthTexture);const le=r.convert(_.depthTexture.format),Ae=r.convert(_.depthTexture.type);let de;_.depthTexture.format===Cn?de=s.DEPTH_COMPONENT24:_.depthTexture.format===si&&(de=s.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,_.width,_.height,0,le,Ae,null)}}else j(_.depthTexture,0);const se=K.__webglTexture,oe=ft(_),$=k?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Q=_.depthTexture.format===si?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Cn)Mt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,$,se,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,Q,$,se,0);else if(_.depthTexture.format===si)Mt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,$,se,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,Q,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(A){const _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const k=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=k}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)ze(_.__webglFramebuffer[k],A,k);else{const k=A.texture.mipmaps;k&&k.length>0?ze(_.__webglFramebuffer[0],A,0):ze(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=s.createRenderbuffer(),ht(_.__webglDepthbuffer[k],A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,se)}}else{const k=A.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ht(_.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(A,_,O){const k=n.get(A);_!==void 0&&we(k.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Qe(A)}function Ye(A){const _=A.texture,O=n.get(A),k=n.get(_);A.addEventListener("dispose",g);const K=A.textures,se=A.isWebGLCubeRenderTarget===!0,oe=K.length>1;if(oe||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=_.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[$][Q]=s.createFramebuffer()}else O.__webglFramebuffer[$]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)O.__webglFramebuffer[$]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(oe)for(let $=0,Q=K.length;$<Q;$++){const le=n.get(K[$]);le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Mt(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){const Q=K[$];O.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const le=r.convert(Q.format,Q.colorSpace),Ae=r.convert(Q.type),de=v(Q.internalFormat,le,Ae,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),ce=ft(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,de,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,O.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),be(s.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)we(O.__webglFramebuffer[$][Q],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else we(O.__webglFramebuffer[$],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,Q=K.length;$<Q;$++){const le=K[$],Ae=n.get(le);let de=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),be(de,le),we(O.__webglFramebuffer,A,le,s.COLOR_ATTACHMENT0+$,de,0),p(le)&&M(de)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,k.__webglTexture),be($,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)we(O.__webglFramebuffer[Q],A,_,s.COLOR_ATTACHMENT0,$,Q);else we(O.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,$,0);p(_)&&M($),t.unbindTexture()}A.depthBuffer&&Qe(A)}function ot(A){const _=A.textures;for(let O=0,k=_.length;O<k;O++){const K=_[O];if(p(K)){const se=w(A),oe=n.get(K).__webglTexture;t.bindTexture(se,oe),M(se),t.unbindTexture()}}}const dt=[],Rt=[];function Dt(A){if(A.samples>0){if(Mt(A)===!1){const _=A.textures,O=A.width,k=A.height;let K=s.COLOR_BUFFER_BIT;const se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(A),$=_.length>1;if($)for(let le=0;le<_.length;le++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<_.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ae=n.get(_[le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,O,k,0,0,O,k,K,s.NEAREST),l===!0&&(dt.length=0,Rt.length=0,dt.push(s.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(dt.push(se),Rt.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<_.length;le++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ae=n.get(_[le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function ft(A){return Math.min(i.maxSamples,A.samples)}function Mt(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function kt(A,_){const O=A.colorSpace,k=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ys&&O!==Hn&&(qe.getTransfer(O)===et?(k!==sn||K!==qt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",O)),_}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.getTextureUnits=W,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=ae,this.setTextureCube=ue,this.rebindTextures=$e,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qm(s,e){function t(n,i=Hn){let r;const a=qe.getTransfer(i);if(n===qt)return s.UNSIGNED_BYTE;if(n===Na)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zl)return s.BYTE;if(n===Gl)return s.SHORT;if(n===ts)return s.UNSIGNED_SHORT;if(n===Ua)return s.INT;if(n===mn)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===Rn)return s.HALF_FLOAT;if(n===Vl)return s.ALPHA;if(n===Wl)return s.RGB;if(n===sn)return s.RGBA;if(n===Cn)return s.DEPTH_COMPONENT;if(n===si)return s.DEPTH_STENCIL;if(n===Oa)return s.RED;if(n===Ba)return s.RED_INTEGER;if(n===ai)return s.RG;if(n===za)return s.RG_INTEGER;if(n===Ga)return s.RGBA_INTEGER;if(n===zs||n===Gs||n===ks||n===Hs)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra||n===aa||n===oa||n===Ws||n===la)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===aa)return r.COMPRESSED_R11_EAC;if(n===oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ws)return r.COMPRESSED_RG11_EAC;if(n===la)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===Ma||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===wa||n===Ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ta||n===Aa||n===Xs||n===Ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:Zm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new P(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends oi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",f=new $m,p={},M=t.getContextAttributes();let w=null,v=null;const E=[],y=[],R=new He;let g=null;const T=new Yt;T.viewport=new ut;const D=new Yt;D.viewport=new ut;const I=[T,D],L=new nu;let Y=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=E[Z];return ie===void 0&&(ie=new fr,E[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=E[Z];return ie===void 0&&(ie=new fr,E[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=E[Z];return ie===void 0&&(ie=new fr,E[Z]=ie),ie.getHandSpace()};function B(Z){const ie=y.indexOf(Z.inputSource);if(ie===-1)return;const te=E[ie];te!==void 0&&(te.update(Z.inputSource,Z.frame,c||a),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",X);for(let Z=0;Z<E.length;Z++){const ie=y[Z];ie!==null&&(y[Z]=null,E[Z].disconnect(ie))}Y=null,W=null,f.reset();for(const Z in p)delete p[Z];e.setRenderTarget(w),m=null,h=null,d=null,i=null,v=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ue=null,Pe=null;M.depth&&(Pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?si:Cn,Ue=M.stencil?ns:mn);const we={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(we),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new pn(h.textureWidth,h.textureHeight,{format:sn,type:qt,depthTexture:new Li(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new pn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function X(Z){for(let ie=0;ie<Z.removed.length;ie++){const te=Z.removed[ie],Ue=y.indexOf(te);Ue>=0&&(y[Ue]=null,E[Ue].disconnect(te))}for(let ie=0;ie<Z.added.length;ie++){const te=Z.added[ie];let Ue=y.indexOf(te);if(Ue===-1){for(let we=0;we<E.length;we++)if(we>=y.length){y.push(te),Ue=we;break}else if(y[we]===null){y[we]=te,Ue=we;break}if(Ue===-1)break}const Pe=E[Ue];Pe&&Pe.connect(te)}}const j=new C,ne=new C;function ae(Z,ie,te){j.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(te.matrixWorld);const Ue=j.distanceTo(ne),Pe=ie.projectionMatrix.elements,we=te.projectionMatrix.elements,ht=Pe[14]/(Pe[10]-1),ze=Pe[14]/(Pe[10]+1),Qe=(Pe[9]+1)/Pe[5],$e=(Pe[9]-1)/Pe[5],Ye=(Pe[8]-1)/Pe[0],ot=(we[8]+1)/we[0],dt=ht*Ye,Rt=ht*ot,Dt=Ue/(-Ye+ot),ft=Dt*-Ye;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ft),Z.translateZ(Dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Mt=ht+Dt,N=ze+Dt,kt=dt-ft,je=Rt+(Ue-ft),A=Qe*ze/N*Mt,_=$e*ze/N*Mt;Z.projectionMatrix.makePerspective(kt,je,A,_,Mt,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ie=Z.near,te=Z.far;f.texture!==null&&(f.depthNear>0&&(ie=f.depthNear),f.depthFar>0&&(te=f.depthFar)),L.near=D.near=T.near=ie,L.far=D.far=T.far=te,(Y!==L.near||W!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),Y=L.near,W=L.far),L.layers.mask=Z.layers.mask|6,T.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;const Ue=Z.parent,Pe=L.cameras;ue(L,Ue);for(let we=0;we<Pe.length;we++)ue(Pe[we],Ue);Pe.length===2?ae(L,T,D):L.projectionMatrix.copy(T.projectionMatrix),_e(Z,L,Ue)};function _e(Z,ie,te){te===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ss*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(L)},this.getCameraTexture=function(Z){return p[Z]};let Xe=null;function tt(Z,ie){if(u=ie.getViewerPose(c||a),x=ie,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ue=!1;te.length!==L.cameras.length&&(L.cameras.length=0,Ue=!0);for(let ze=0;ze<te.length;ze++){const Qe=te[ze];let $e=null;if(m!==null)$e=m.getViewport(Qe);else{const ot=d.getViewSubImage(h,Qe);$e=ot.viewport,ze===0&&(e.setRenderTargetTextures(v,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(v))}let Ye=I[ze];Ye===void 0&&(Ye=new Yt,Ye.layers.enable(ze),Ye.viewport=new ut,I[ze]=Ye),Ye.matrix.fromArray(Qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set($e.x,$e.y,$e.width,$e.height),ze===0&&(L.matrix.copy(Ye.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ue===!0&&L.cameras.push(Ye)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const ze=d.getDepthInformation(te[0]);ze&&ze.isValid&&ze.texture&&f.init(ze,i.renderState)}if(Pe&&Pe.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<te.length;ze++){const Qe=te[ze].camera;if(Qe){let $e=p[Qe];$e||($e=new ec,p[Qe]=$e);const Ye=d.getCameraImage(Qe);$e.sourceTexture=Ye}}}}for(let te=0;te<E.length;te++){const Ue=y[te],Pe=E[te];Ue!==null&&Pe!==void 0&&Pe.update(Ue,ie,c||a)}Xe&&Xe(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),x=null}const be=new rc;be.setAnimationLoop(tt),this.setAnimationLoop=function(Z){Xe=Z},this.dispose=function(){}}}const Qm=new at,dc=new Fe;dc.set(-1,0,0,0,1,0,0,0,1);function jm(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,tc(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,M,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,v)):p.isMeshMatcapMaterial?(r(f,p),x(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),S(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?l(f,p,M,w):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ht&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ht&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,v=M.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(dc),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,w){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=w*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,p){p.matcap&&(f.matcap.value=p.matcap)}function S(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e0(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const y=E.program;n.uniformBlockBinding(v,y)}function c(v,E){let y=i[v.id];y===void 0&&(f(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",M));const R=E.program;n.updateUBOMapping(v,R);const g=e.render.frame;r[v.id]!==g&&(h(v),r[v.id]=g)}function u(v){const E=d();v.__bindingPointIndex=E;const y=s.createBuffer(),R=v.__size,g=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,g),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=i[v.id],y=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let g=0,T=y.length;g<T;g++){const D=y[g];if(Array.isArray(D))for(let I=0,L=D.length;I<L;I++)m(D[I],g,I,R);else m(D,g,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,E,y,R){if(S(v,E,y,R)===!0){const g=v.__offset,T=v.value;if(Array.isArray(T)){let D=0;for(let I=0;I<T.length;I++){const L=T[I],Y=p(L);x(L,v.__data,D),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,g,v.__data)}}function x(v,E,y){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,y)}function S(v,E,y,R){const g=v.value,T=E+"_"+y;if(R[T]===void 0)return typeof g=="number"||typeof g=="boolean"?R[T]=g:ArrayBuffer.isView(g)?R[T]=g.slice():R[T]=g.clone(),!0;{const D=R[T];if(typeof g=="number"||typeof g=="boolean"){if(D!==g)return R[T]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(D.equals(g)===!1)return D.copy(g),!0}}return!1}function f(v){const E=v.uniforms;let y=0;const R=16;for(let T=0,D=E.length;T<D;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let L=0,Y=I.length;L<Y;L++){const W=I[L],B=Array.isArray(W.value)?W.value:[W.value];for(let q=0,X=B.length;q<X;q++){const j=B[q],ne=p(j),ae=y%R,ue=ae%ne.boundary,_e=ae+ue;y+=ue,_e!==0&&R-_e<ne.storage&&(y+=R-_e),W.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=ne.storage}}}const g=y%R;return g>0&&(y+=R-g),v.__size=y,v.__cache={},this}function p(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){const E=v.target;E.removeEventListener("dispose",M);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}const t0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function n0(){return cn===null&&(cn=new $l(t0,16,16,ai,Rn),cn.name="DFG_LUT",cn.minFilter=Ot,cn.magFilter=Ot,cn.wrapS=wn,cn.wrapT=wn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class i0{constructor(e={}){const{canvas:t=jc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=qt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const S=m,f=new Set([Ga,za,Ba]),p=new Set([qt,mn,ts,ns,Na,Fa]),M=new Uint32Array(4),w=new Int32Array(4),v=new C;let E=null,y=null;const R=[],g=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1,L=null,Y=null,W=null,B=null;this._outputColorSpace=Jt;let q=0,X=0,j=null,ne=-1,ae=null;const ue=new ut,_e=new ut;let Xe=null;const tt=new Ne(0);let be=0,Z=t.width,ie=t.height,te=1,Ue=null,Pe=null;const we=new ut(0,0,Z,ie),ht=new ut(0,0,Z,ie);let ze=!1;const Qe=new Za;let $e=!1,Ye=!1;const ot=new at,dt=new C,Rt=new ut,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Mt(){return j===null?te:1}let N=n;function kt(b,F){return t.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",rn,!1),N===null){const F="webgl2";if(N=kt(F,b),N===null)throw kt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ke("WebGLRenderer: "+b.message),b}let je,A,_,O,k,K,se,oe,$,Q,le,Ae,de,ce,De,Ie,Oe,U,re,J,he,ge,ee;function Te(){je=new np(N),je.init(),he=new qm(N,je),A=new Zf(N,je,e,he),_=new Xm(N,je),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),Y=N.createFramebuffer(),W=N.createFramebuffer(),B=N.createFramebuffer(),O=new rp(N),k=new Dm,K=new Ym(N,je,_,k,A,he,O),se=new tp(D),oe=new lu(N),ge=new Yf(N,oe),$=new ip(N,oe,O,ge),Q=new op(N,$,oe,ge,O),U=new ap(N,A,K),De=new Kf(k),le=new Pm(D,se,je,A,ge,De),Ae=new jm(D,k),de=new Lm,ce=new zm(je),Oe=new Xf(D,se,_,Q,x,l),Ie=new Wm(D,Q,A),ee=new e0(N,O,A,_),re=new qf(N,je,O),J=new sp(N,je,O),O.programs=le.programs,D.capabilities=A,D.extensions=je,D.properties=k,D.renderLists=de,D.shadowMap=Ie,D.state=_,D.info=O}Te(),S!==qt&&(T=new cp(S,t.width,t.height,o,i,r));const ye=new Jm(D,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Z,ie,!1))},this.getSize=function(b){return b.set(Z,ie)},this.setSize=function(b,F,V=!0){if(ye.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,ie=F,t.width=Math.floor(b*te),t.height=Math.floor(F*te),V===!0&&(t.style.width=b+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Z*te,ie*te).floor()},this.setDrawingBufferSize=function(b,F,V){Z=b,ie=F,te=V,t.width=Math.floor(b*V),t.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(S===qt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ue)},this.getViewport=function(b){return b.copy(we)},this.setViewport=function(b,F,V,z){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,F,V,z),_.viewport(ue.copy(we).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(ht)},this.setScissor=function(b,F,V,z){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,F,V,z),_.scissor(_e.copy(ht).multiplyScalar(te).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){_.setScissorTest(ze=b)},this.setOpaqueSort=function(b){Ue=b},this.setTransparentSort=function(b){Pe=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,V=!0){let z=0;if(b){let G=!1;if(j!==null){const me=j.texture.format;G=f.has(me)}if(G){const me=j.texture.type,ve=p.has(me),pe=Oe.getClearColor(),Ee=Oe.getClearAlpha(),Re=pe.r,Be=pe.g,Ve=pe.b;ve?(M[0]=Re,M[1]=Be,M[2]=Ve,M[3]=Ee,N.clearBufferuiv(N.COLOR,0,M)):(w[0]=Re,w[1]=Be,w[2]=Ve,w[3]=Ee,N.clearBufferiv(N.COLOR,0,w))}else z|=N.COLOR_BUFFER_BIT}F&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Oe.dispose(),de.dispose(),ce.dispose(),k.dispose(),se.dispose(),Q.dispose(),ge.dispose(),ee.dispose(),le.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",so),ye.removeEventListener("sessionend",ro),Zn.stop()};function pt(b){b.preventDefault(),bo("WebGLRenderer: Context Lost."),I=!0}function lt(){bo("WebGLRenderer: Context Restored."),I=!1;const b=O.autoReset,F=Ie.enabled,V=Ie.autoUpdate,z=Ie.needsUpdate,G=Ie.type;Te(),O.autoReset=b,Ie.enabled=F,Ie.autoUpdate=V,Ie.needsUpdate=z,Ie.type=G}function rn(b){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function an(b){const F=b.target;F.removeEventListener("dispose",an),fc(F)}function fc(b){pc(b),k.remove(b)}function pc(b){const F=k.get(b).programs;F!==void 0&&(F.forEach(function(V){le.releaseProgram(V)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,z,G,me){F===null&&(F=Dt);const ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=_c(b,F,V,z,G);_.setMaterial(z,ve);let Ee=V.index,Re=1;if(z.wireframe===!0){if(Ee=$.getWireframeAttribute(V),Ee===void 0)return;Re=2}const Be=V.drawRange,Ve=V.attributes.position;let Ce=Be.start*Re,nt=(Be.start+Be.count)*Re;me!==null&&(Ce=Math.max(Ce,me.start*Re),nt=Math.min(nt,(me.start+me.count)*Re)),Ee!==null?(Ce=Math.max(Ce,0),nt=Math.min(nt,Ee.count)):Ve!=null&&(Ce=Math.max(Ce,0),nt=Math.min(nt,Ve.count));const _t=nt-Ce;if(_t<0||_t===1/0)return;ge.setup(G,z,pe,V,Ee);let mt,it=re;if(Ee!==null&&(mt=oe.get(Ee),it=J,it.setIndex(mt)),G.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Mt()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(G.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),_.setLineWidth(Lt*Mt()),G.isLineSegments?it.setMode(N.LINES):G.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else G.isPoints?it.setMode(N.POINTS):G.isSprite&&it.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,xe=G._multiDrawCounts,Vt=G._multiDrawCount,Je=Ee?oe.get(Ee).bytesPerElement:1,Kt=k.get(z).currentProgram.getUniforms();for(let on=0;on<Vt;on++)Kt.setValue(N,"_gl_DrawID",on),it.render(Lt[on]/Je,xe[on])}else if(G.isInstancedMesh)it.renderInstances(Ce,_t,G.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,Lt);it.renderInstances(Ce,_t,xe)}else it.render(Ce,_t)};function io(b,F,V){b.transparent===!0&&b.side===Pt&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,ls(b,F,V),b.side=Xn,b.needsUpdate=!0,ls(b,F,V),b.side=Pt):ls(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),y=ce.get(V),y.init(F),g.push(y),V.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),b!==V&&b.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){const pe=me[ve];io(pe,V,G),z.add(pe)}else io(me,V,G),z.add(me)}),y=g.pop(),z},this.compileAsync=function(b,F,V=null){const z=this.compile(b,F,V);return new Promise(G=>{function me(){if(z.forEach(function(ve){k.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){G(b);return}setTimeout(me,10)}je.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ir=null;function mc(b){ir&&ir(b)}function so(){Zn.stop()}function ro(){Zn.start()}const Zn=new rc;Zn.setAnimationLoop(mc),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(b){ir=b,ye.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},ye.addEventListener("sessionstart",so),ye.addEventListener("sessionend",ro),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(b,F);const V=ye.enabled===!0&&ye.isPresenting===!0,z=T!==null&&(j===null||V)&&T.begin(D,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(F),F=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,F,j),y=ce.get(b,g.length),y.init(F),y.state.textureUnits=K.getTextureUnits(),g.push(y),ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qe.setFromProjectionMatrix(ot,dn,F.reversedDepth),Ye=this.localClippingEnabled,$e=De.init(this.clippingPlanes,Ye),E=de.get(b,R.length),E.init(),R.push(E),ye.enabled===!0&&ye.isPresenting===!0){const ve=D.xr.getDepthSensingMesh();ve!==null&&sr(ve,F,-1/0,D.sortObjects)}sr(b,F,0,D.sortObjects),E.finish(),D.sortObjects===!0&&E.sort(Ue,Pe,F.reversedDepth),ft=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ft&&Oe.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$e===!0&&De.beginShadows();const G=y.state.shadowsArray;if(Ie.render(G,b,F),$e===!0&&De.endShadows(),(z&&T.hasRenderPass())===!1){const ve=E.opaque,pe=E.transmissive;if(y.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(pe.length>0)for(let Re=0,Be=Ee.length;Re<Be;Re++){const Ve=Ee[Re];oo(ve,pe,b,Ve)}ft&&Oe.render(b);for(let Re=0,Be=Ee.length;Re<Be;Re++){const Ve=Ee[Re];ao(E,b,Ve,Ve.viewport)}}else pe.length>0&&oo(ve,pe,b,F),ft&&Oe.render(b),ao(E,b,F)}j!==null&&X===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),z&&T.end(D),b.isScene===!0&&b.onAfterRender(D,b,F),ge.resetDefaultState(),ne=-1,ae=null,g.pop(),g.length>0?(y=g[g.length-1],K.setTextureUnits(y.state.textureUnits),$e===!0&&De.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,L!==null&&L.renderEnd()};function sr(b,F,V,z){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)y.pushLightProbeGrid(b);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Qe.intersectsSprite(b)){z&&Rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const ve=Q.update(b),pe=b.material;pe.visible&&E.push(b,ve,pe,V,Rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Qe.intersectsObject(b))){const ve=Q.update(b),pe=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Rt.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Rt.copy(ve.boundingSphere.center)),Rt.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(pe)){const Ee=ve.groups;for(let Re=0,Be=Ee.length;Re<Be;Re++){const Ve=Ee[Re],Ce=pe[Ve.materialIndex];Ce&&Ce.visible&&E.push(b,ve,Ce,V,Rt.z,Ve)}}else pe.visible&&E.push(b,ve,pe,V,Rt.z,null)}}const me=b.children;for(let ve=0,pe=me.length;ve<pe;ve++)sr(me[ve],F,V,z)}function ao(b,F,V,z){const{opaque:G,transmissive:me,transparent:ve}=b;y.setupLightsView(V),$e===!0&&De.setGlobalState(D.clippingPlanes,V),z&&_.viewport(ue.copy(z)),G.length>0&&os(G,F,V),me.length>0&&os(me,F,V),ve.length>0&&os(ve,F,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function oo(b,F,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){const Ce=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new pn(1,1,{generateMipmaps:!0,type:Ce?Rn:qt,minFilter:ii,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const me=y.state.transmissionRenderTarget[z.id],ve=z.viewport||ue;me.setSize(ve.z*D.transmissionResolutionScale,ve.w*D.transmissionResolutionScale);const pe=D.getRenderTarget(),Ee=D.getActiveCubeFace(),Re=D.getActiveMipmapLevel();D.setRenderTarget(me),D.getClearColor(tt),be=D.getClearAlpha(),be<1&&D.setClearColor(16777215,.5),D.clear(),ft&&Oe.render(V);const Be=D.toneMapping;D.toneMapping=fn;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),$e===!0&&De.setGlobalState(D.clippingPlanes,z),os(b,V,z),K.updateMultisampleRenderTarget(me),K.updateRenderTargetMipmap(me),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let nt=0,_t=F.length;nt<_t;nt++){const mt=F[nt],{object:it,geometry:Lt,material:xe,group:Vt}=mt;if(xe.side===Pt&&it.layers.test(z.layers)){const Je=xe.side;xe.side=Ht,xe.needsUpdate=!0,lo(it,V,z,Lt,xe,Vt),xe.side=Je,xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(K.updateMultisampleRenderTarget(me),K.updateRenderTargetMipmap(me))}D.setRenderTarget(pe,Ee,Re),D.setClearColor(tt,be),Ve!==void 0&&(z.viewport=Ve),D.toneMapping=Be}function os(b,F,V){const z=F.isScene===!0?F.overrideMaterial:null;for(let G=0,me=b.length;G<me;G++){const ve=b[G],{object:pe,geometry:Ee,group:Re}=ve;let Be=ve.material;Be.allowOverride===!0&&z!==null&&(Be=z),pe.layers.test(V.layers)&&lo(pe,F,V,Ee,Be,Re)}}function lo(b,F,V,z,G,me){b.onBeforeRender(D,F,V,z,G,me),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(D,F,V,z,b,me),G.transparent===!0&&G.side===Pt&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,D.renderBufferDirect(V,F,z,G,b,me),G.side=Xn,G.needsUpdate=!0,D.renderBufferDirect(V,F,z,G,b,me),G.side=Pt):D.renderBufferDirect(V,F,z,G,b,me),b.onAfterRender(D,F,V,z,G,me)}function ls(b,F,V){F.isScene!==!0&&(F=Dt);const z=k.get(b),G=y.state.lights,me=y.state.shadowsArray,ve=G.state.version,pe=le.getParameters(b,G.state,me,F,V,y.state.lightProbeGridArray),Ee=le.getProgramCacheKey(pe);let Re=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=se.get(b.envMap||z.environment,Be),z.envMapRotation=z.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",an),Re=new Map,z.programs=Re);let Ve=Re.get(Ee);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===ve)return ho(b,pe),Ve}else pe.uniforms=le.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,V,pe),b.onBeforeCompile(pe,D),Ve=le.acquireProgram(pe,Ee),Re.set(Ee,Ve),z.uniforms=pe.uniforms;const Ce=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=De.uniform),ho(b,pe),z.needsLights=vc(b),z.lightsStateVersion=ve,z.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=y.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function co(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Vs.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ho(b,F){const V=k.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function gc(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let V=0,z=b.length;V<z;V++){const G=b[V];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function _c(b,F,V,z,G){F.isScene!==!0&&(F=Dt),K.resetTextureUnits();const me=F.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,pe=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qe.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Re=se.get(z.envMap||ve,Ee),Be=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color;let mt=fn;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(mt=D.toneMapping);const it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=it!==void 0?it.length:0,xe=k.get(z),Vt=y.state.lights;if($e===!0&&(Ye===!0||b!==ae)){const ct=b===ae&&z.id===ne;De.setState(z,b,ct)}let Je=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Vt.state.version||xe.outputColorSpace!==pe||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==Re||z.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==De.numPlanes||xe.numIntersection!==De.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ve||xe.morphTargets!==Ce||xe.morphNormals!==nt||xe.morphColors!==_t||xe.toneMapping!==mt||xe.morphTargetsCount!==Lt||!!xe.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,xe.__version=z.version);let Kt=xe.currentProgram;Je===!0&&(Kt=ls(z,F,G),L&&z.isNodeMaterial&&L.onUpdateProgram(z,Kt,xe));let on=!1,Pn=!1,li=!1;const st=Kt.getUniforms(),xt=xe.uniforms;if(_.useProgram(Kt.program)&&(on=!0,Pn=!0,li=!0),z.id!==ne&&(ne=z.id,Pn=!0),xe.needsLights){const ct=gc(y.state.lightProbeGridArray,G);xe.lightProbeGrid!==ct&&(xe.lightProbeGrid=ct,Pn=!0)}if(on||ae!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",b.projectionMatrix),st.setValue(N,"viewMatrix",b.matrixWorldInverse);const In=st.map.cameraPosition;In!==void 0&&In.setValue(N,dt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),ae!==b&&(ae=b,Pn=!0,li=!0)}if(xe.needsLights&&(Vt.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",Vt.state.directionalShadowMap,K),Vt.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",Vt.state.spotShadowMap,K),Vt.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",Vt.state.pointShadowMap,K)),G.isSkinnedMesh){st.setOptional(N,G,"bindMatrix"),st.setOptional(N,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),st.setValue(N,"boneTexture",ct.boneTexture,K))}G.isBatchedMesh&&(st.setOptional(N,G,"batchingTexture"),st.setValue(N,"batchingTexture",G._matricesTexture,K),st.setOptional(N,G,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",G._indirectTexture,K),st.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",G._colorsTexture,K));const Dn=V.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&U.update(G,V,Kt),(Pn||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,st.setValue(N,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(xt.envMapIntensity.value=F.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=n0()),Pn){if(st.setValue(N,"toneMappingExposure",D.toneMappingExposure),xe.needsLights&&xc(xt,li),me&&z.fog===!0&&Ae.refreshFogUniforms(xt,me),Ae.refreshMaterialUniforms(xt,z,te,ie,y.state.transmissionRenderTarget[b.id]),xe.needsLights&&xe.lightProbeGrid){const ct=xe.lightProbeGrid;xt.probesSH.value=ct.texture,xt.probesMin.value.copy(ct.boundingBox.min),xt.probesMax.value.copy(ct.boundingBox.max),xt.probesResolution.value.copy(ct.resolution)}Vs.upload(N,co(xe),xt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vs.upload(N,co(xe),xt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(N,"center",G.center),st.setValue(N,"modelViewMatrix",G.modelViewMatrix),st.setValue(N,"normalMatrix",G.normalMatrix),st.setValue(N,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const ct=z.uniformsGroups;for(let In=0,ci=ct.length;In<ci;In++){const uo=ct[In];ee.update(uo,Kt),ee.bind(uo,Kt)}}return Kt}function xc(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function vc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,F,V){const z=k.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=F,k.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const V=k.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,V=0){j=b,q=F,X=V;let z=null,G=!1,me=!1;if(b){const pe=k.get(b);if(pe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,pe.__webglFramebuffer),ue.copy(b.viewport),_e.copy(b.scissor),Xe=b.scissorTest,_.viewport(ue),_.scissor(_e),_.setScissorTest(Xe),ne=-1;return}else if(pe.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(pe.__hasExternalTextures)K.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&k.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const Re=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?z=Re[F][V]:z=Re[F],G=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?z=k.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?z=Re[V]:z=Re,ue.copy(b.viewport),_e.copy(b.scissor),Xe=b.scissorTest}else ue.copy(we).multiplyScalar(te).floor(),_e.copy(ht).multiplyScalar(te).floor(),Xe=ze;if(V!==0&&(z=Y),_.bindFramebuffer(N.FRAMEBUFFER,z)&&_.drawBuffers(b,z),_.viewport(ue),_.scissor(_e),_.setScissorTest(Xe),G){const pe=k.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,V)}else if(me){const pe=F;for(let Ee=0;Ee<b.textures.length;Ee++){const Re=k.get(b.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,V,pe)}}else if(b!==null&&V!==0){const pe=k.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pe.__webglTexture,V)}ne=-1},this.readRenderTargetPixels=function(b,F,V,z,G,me,ve,pe=0){if(!(b&&b.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){_.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const Re=b.textures[pe],Be=Re.format,Ve=Re.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Be)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ve)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-z&&V>=0&&V<=b.height-G&&N.readPixels(F,V,z,G,he.convert(Be),he.convert(Ve),me)}finally{const Re=j!==null?k.get(j).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,F,V,z,G,me,ve,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee)if(F>=0&&F<=b.width-z&&V>=0&&V<=b.height-G){_.bindFramebuffer(N.FRAMEBUFFER,Ee);const Re=b.textures[pe],Be=Re.format,Ve=Re.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pe),!A.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,me.byteLength,N.STREAM_READ),N.readPixels(F,V,z,G,he.convert(Be),he.convert(Ve),0);const nt=j!==null?k.get(j).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,nt);const _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await eh(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,me),N.deleteBuffer(Ce),N.deleteSync(_t),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,V=0){const z=Math.pow(2,-V),G=Math.floor(b.image.width*z),me=Math.floor(b.image.height*z),ve=F!==null?F.x:0,pe=F!==null?F.y:0;K.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,ve,pe,G,me),_.unbindTexture()},this.copyTextureToTexture=function(b,F,V=null,z=null,G=0,me=0){let ve,pe,Ee,Re,Be,Ve,Ce,nt,_t;const mt=b.isCompressedTexture?b.mipmaps[me]:b.image;if(V!==null)ve=V.max.x-V.min.x,pe=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,Be=V.min.y,Ve=V.isBox3?V.min.z:0;else{const xt=Math.pow(2,-G);ve=Math.floor(mt.width*xt),pe=Math.floor(mt.height*xt),b.isDataArrayTexture?Ee=mt.depth:b.isData3DTexture?Ee=Math.floor(mt.depth*xt):Ee=1,Re=0,Be=0,Ve=0}z!==null?(Ce=z.x,nt=z.y,_t=z.z):(Ce=0,nt=0,_t=0);const it=he.convert(F.format),Lt=he.convert(F.type);let xe;F.isData3DTexture?(K.setTexture3D(F,0),xe=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),xe=N.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),xe=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Vt=_.getParameter(N.UNPACK_ROW_LENGTH),Je=_.getParameter(N.UNPACK_IMAGE_HEIGHT),Kt=_.getParameter(N.UNPACK_SKIP_PIXELS),on=_.getParameter(N.UNPACK_SKIP_ROWS),Pn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),_.pixelStorei(N.UNPACK_SKIP_ROWS,Be),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);const li=b.isDataArrayTexture||b.isData3DTexture,st=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const xt=k.get(b),Dn=k.get(F),ct=k.get(xt.__renderTarget),In=k.get(Dn.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,ct.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let ci=0;ci<Ee;ci++)li&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(b).__webglTexture,G,Ve+ci),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(F).__webglTexture,me,_t+ci)),N.blitFramebuffer(Re,Be,ve,pe,Ce,nt,ve,pe,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||k.has(b)){const xt=k.get(b),Dn=k.get(F);_.bindFramebuffer(N.READ_FRAMEBUFFER,W),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let ct=0;ct<Ee;ct++)li?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,G,Ve+ct):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,G),st?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dn.__webglTexture,me,_t+ct):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Dn.__webglTexture,me),G!==0?N.blitFramebuffer(Re,Be,ve,pe,Ce,nt,ve,pe,N.COLOR_BUFFER_BIT,N.NEAREST):st?N.copyTexSubImage3D(xe,me,Ce,nt,_t+ct,Re,Be,ve,pe):N.copyTexSubImage2D(xe,me,Ce,nt,Re,Be,ve,pe);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(xe,me,Ce,nt,_t,ve,pe,Ee,it,Lt,mt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,me,Ce,nt,_t,ve,pe,Ee,it,mt.data):N.texSubImage3D(xe,me,Ce,nt,_t,ve,pe,Ee,it,Lt,mt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,me,Ce,nt,ve,pe,it,Lt,mt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,me,Ce,nt,mt.width,mt.height,it,mt.data):N.texSubImage2D(N.TEXTURE_2D,me,Ce,nt,ve,pe,it,Lt,mt);_.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),_.pixelStorei(N.UNPACK_SKIP_ROWS,on),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Pn),me===0&&F.generateMipmaps&&N.generateMipmap(xe),_.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,j=null,_.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const Se=new Map;function vt(s,e,t){const n=document.createElement("canvas");n.width=s,n.height=e;const i=n.getContext("2d");switch(t){case"roof_shingle_dark":{i.fillStyle="#22262d",i.fillRect(0,0,s,e);const a=32,o=48;let l=0;for(let c=0;c<e;c+=a){const u=l%2*(o/2),d=i.createLinearGradient(0,c,0,c+a);d.addColorStop(0,"#16191f"),d.addColorStop(.12,"#313740"),d.addColorStop(.85,"#282d35"),d.addColorStop(1,"#181b20"),i.fillStyle=d,i.fillRect(0,c,s,a);for(let h=-o+u;h<s+o;h+=o)i.fillStyle="rgba(10, 12, 16, 0.9)",i.fillRect(h-1,c,3,a),i.fillStyle="rgba(255, 255, 255, 0.12)",i.fillRect(h+2,c+a-3,o-4,1.5),i.fillStyle="rgba(255, 255, 255, 0.05)",i.fillRect(h+8,c+6,4,3),i.fillRect(h+22,c+14,5,2.5);i.fillStyle="rgba(0, 0, 0, 0.65)",i.fillRect(0,c+a-2,s,2),l++}break}case"roof_terracotta":{i.fillStyle="#b44a2b",i.fillRect(0,0,s,e);const a=40,o=64;for(let l=0;l<s;l+=a){const c=i.createLinearGradient(l,0,l+a,0);c.addColorStop(0,"#662210"),c.addColorStop(.2,"#aa3e22"),c.addColorStop(.5,"#dc633e"),c.addColorStop(.8,"#c24f2e"),c.addColorStop(1,"#531b0c"),i.fillStyle=c,i.fillRect(l,0,a,e);for(let u=0;u<e;u+=o)i.fillStyle="rgba(0, 0, 0, 0.45)",i.fillRect(l,u+o-3,a,4),i.fillStyle="rgba(255, 255, 255, 0.2)",i.fillRect(l+4,u+2,a-8,2)}break}case"roof_slate":{i.fillStyle="#334155",i.fillRect(0,0,s,e);const a=36,o=56;let l=0;for(let c=0;c<e;c+=a){const u=l%2*(o/2);for(let d=-o+u;d<s+o;d+=o){const h=(d*13+c*7)%25-12;i.fillStyle=`rgb(${51+h}, ${65+h}, ${85+h})`,i.fillRect(d+1,c+1,o-2,a-2),i.fillStyle="rgba(255, 255, 255, 0.15)",i.fillRect(d+2,c+2,o-4,1.5),i.fillStyle="rgba(0, 0, 0, 0.45)",i.fillRect(d+1,c+a-2,o-2,2)}l++}break}case"roof_metal":{i.fillStyle="#475569",i.fillRect(0,0,s,e);const a=48;for(let o=0;o<s;o+=a){const l=i.createLinearGradient(o,0,o+a,0);l.addColorStop(0,"#334155"),l.addColorStop(.06,"#64748b"),l.addColorStop(.12,"#475569"),l.addColorStop(.9,"#3f4e61"),l.addColorStop(1,"#1e293b"),i.fillStyle=l,i.fillRect(o,0,a,e),i.fillStyle="#94a3b8",i.fillRect(o,0,2,e),i.fillStyle="#0f172a",i.fillRect(o+2,0,3,e)}break}case"roof_wood_shake":{i.fillStyle="#855b38",i.fillRect(0,0,s,e);const a=40;for(let o=0;o<e;o+=a){let l=0;for(;l<s;){const c=30+(l*19+o*11)%28,u=(l+o*3)%20-10;i.fillStyle=`rgb(${133+u}, ${91+u}, ${56+u})`,i.fillRect(l+1,o+1,c-2,a-2),i.fillStyle="rgba(40, 20, 10, 0.2)",i.fillRect(l+6,o,1.5,a),i.fillRect(l+c/2,o,1.5,a),i.fillStyle="rgba(0,0,0,0.4)",i.fillRect(l,o+a-3,c,3),l+=c}}break}case"wood_oak":{i.fillStyle="#c79860",i.fillRect(0,0,s,e);const a=32,o=128;let l=0;for(let c=0;c<e;c+=a){const u=l%2*(o/2);for(let d=-o+u;d<s+o;d+=o){const h=(d*17+c*31)%20-10,m=i.createLinearGradient(d,c,d,c+a);m.addColorStop(0,`rgb(${210+h}, ${162+h}, ${108+h})`),m.addColorStop(.5,`rgb(${199+h}, ${152+h}, ${96+h})`),m.addColorStop(1,`rgb(${185+h}, ${138+h}, ${85+h})`),i.fillStyle=m,i.fillRect(d+1,c+1,o-2,a-2),i.fillStyle="rgba(100, 65, 25, 0.12)";for(let x=4;x<a-4;x+=6)i.fillRect(d+2,c+x,o-4,1.2);i.fillStyle="rgba(255, 255, 255, 0.18)",i.fillRect(d+1,c+1,o-2,1.2),i.fillStyle="rgba(40, 25, 10, 0.4)",i.fillRect(d,c+a-1.5,o,1.8),i.fillRect(d+o-1.5,c,1.8,a)}l++}break}case"wood_dark":{i.fillStyle="#422818",i.fillRect(0,0,s,e);const a=32,o=128;let l=0;for(let c=0;c<e;c+=a){const u=l%2*(o/2);for(let d=-o+u;d<s+o;d+=o){const h=(d*19+c*23)%18-9;i.fillStyle=`rgb(${72+h}, ${44+h}, ${28+h})`,i.fillRect(d+1,c+1,o-2,a-2),i.fillStyle="rgba(20, 10, 5, 0.3)";for(let m=5;m<a-4;m+=7)i.fillRect(d+2,c+m,o-4,1.5);i.fillStyle="rgba(255, 255, 255, 0.08)",i.fillRect(d+1,c+1,o-2,1),i.fillStyle="rgba(0, 0, 0, 0.55)",i.fillRect(d,c+a-1.5,o,1.8),i.fillRect(d+o-1.5,c,1.8,a)}l++}break}case"tile_ceramic":{i.fillStyle="#d1d5db",i.fillRect(0,0,s,e);const a=64;for(let o=0;o<s;o+=a)for(let l=0;l<e;l+=a){const c=i.createRadialGradient(o+a*.4,l+a*.4,4,o+a*.5,l+a*.5,a*.7);c.addColorStop(0,"#ffffff"),c.addColorStop(.7,"#f3f4f6"),c.addColorStop(1,"#e5e7eb"),i.fillStyle=c,i.fillRect(o+2,l+2,a-4,a-4),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(o+3,l+3,a-6,2),i.fillRect(o+3,l+3,2,a-6)}break}case"marble_luxury":{i.fillStyle="#f8fafc",i.fillRect(0,0,s,e),i.strokeStyle="rgba(148, 163, 184, 0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(0,e*.2),i.bezierCurveTo(s*.3,e*.1,s*.6,e*.7,s,e*.5),i.stroke(),i.strokeStyle="rgba(100, 116, 139, 0.2)",i.lineWidth=2,i.beginPath(),i.moveTo(s*.2,0),i.bezierCurveTo(s*.5,e*.4,s*.8,e*.8,s*.7,e),i.stroke();const a=128;i.strokeStyle="rgba(0, 0, 0, 0.08)",i.lineWidth=2;for(let o=0;o<=s;o+=a)i.beginPath(),i.moveTo(o,0),i.lineTo(o,e),i.stroke();for(let o=0;o<=e;o+=a)i.beginPath(),i.moveTo(0,o),i.lineTo(s,o),i.stroke();break}case"stone_slate":{i.fillStyle="#27272a",i.fillRect(0,0,s,e);const a=64;for(let o=0;o<s;o+=a)for(let l=0;l<e;l+=a){const c=(o*13+l*29)%24-12;i.fillStyle=`rgb(${63+c}, ${63+c}, ${70+c})`,i.fillRect(o+2,l+2,a-4,a-4),i.fillStyle="rgba(255, 255, 255, 0.08)",i.fillRect(o+4,l+4,a-8,2),i.fillStyle="rgba(0, 0, 0, 0.5)",i.fillRect(o+2,l+a-3,a-4,2)}break}case"carpet_blue":{i.fillStyle="#1e40af",i.fillRect(0,0,s,e);const a=i.getImageData(0,0,s,e),o=a.data;for(let l=0;l<o.length;l+=4){const c=(Math.random()-.5)*35;o[l]=Math.min(255,Math.max(0,o[l]+c*.3)),o[l+1]=Math.min(255,Math.max(0,o[l+1]+c*.5)),o[l+2]=Math.min(255,Math.max(0,o[l+2]+c))}i.putImageData(a,0,0);break}case"brick":{i.fillStyle="#d4d4d8",i.fillRect(0,0,s,e);const a=24,o=52;let l=0;for(let c=0;c<e;c+=a){const u=l%2*(o/2);for(let d=-o+u;d<s+o;d+=o){const h=(d*19+c*31)%30-15,m=Math.min(255,Math.max(0,185+h)),x=Math.min(255,Math.max(0,75+h*.8)),S=Math.min(255,Math.max(0,50+h*.6));i.fillStyle=`rgb(${m}, ${x}, ${S})`,i.fillRect(d+2,c+2,o-4,a-4),i.fillStyle="rgba(255, 255, 255, 0.15)",i.fillRect(d+3,c+3,o-6,1.5),i.fillStyle="rgba(0, 0, 0, 0.35)",i.fillRect(d+2,c+a-3,o-4,1.5)}l++}break}case"brick_white":{i.fillStyle="#e2e8f0",i.fillRect(0,0,s,e);const a=24,o=52;let l=0;for(let c=0;c<e;c+=a){const u=l%2*(o/2);for(let d=-o+u;d<s+o;d+=o){const m=245+((d*13+c*17)%12-6);i.fillStyle=`rgb(${m}, ${m}, ${m})`,i.fillRect(d+2,c+2,o-4,a-4),i.fillStyle="rgba(0, 0, 0, 0.08)",i.fillRect(d+2,c+a-3,o-4,1.5)}l++}break}case"wall_wood":{i.fillStyle="#ba8c5b",i.fillRect(0,0,s,e);const a=28;for(let o=0;o<e;o+=a){const l=i.createLinearGradient(0,o,0,o+a);l.addColorStop(0,"#d4a373"),l.addColorStop(.7,"#c29060"),l.addColorStop(1,"#a37446"),i.fillStyle=l,i.fillRect(0,o+1,s,a-2),i.fillStyle="rgba(40, 20, 5, 0.45)",i.fillRect(0,o+a-2,s,2),i.fillStyle="rgba(255, 255, 255, 0.2)",i.fillRect(0,o+1,s,1.2)}break}case"wallpaper_striped":{i.fillStyle="#f8fafc",i.fillRect(0,0,s,e);const a=24;for(let o=0;o<s;o+=a*2)i.fillStyle="#e2e8f0",i.fillRect(o,0,a,e),i.fillStyle="#eab308",i.fillRect(o+a-2,0,1.5,e);break}case"plaster_stucco":{i.fillStyle="#f1f5f9",i.fillRect(0,0,s,e);const a=i.getImageData(0,0,s,e),o=a.data;for(let l=0;l<o.length;l+=4){const c=(Math.random()-.5)*16;o[l]=Math.min(255,Math.max(0,o[l]+c)),o[l+1]=Math.min(255,Math.max(0,o[l+1]+c)),o[l+2]=Math.min(255,Math.max(0,o[l+2]+c))}i.putImageData(a,0,0);break}case"grass":{i.fillStyle="#529b35",i.fillRect(0,0,s,e);const a=i.getImageData(0,0,s,e),o=a.data;for(let l=0;l<o.length;l+=4){const c=(Math.random()-.5)*32;o[l]=Math.min(255,Math.max(0,o[l]+c*.4)),o[l+1]=Math.min(255,Math.max(0,o[l+1]+c)),o[l+2]=Math.min(255,Math.max(0,o[l+2]+c*.2))}i.putImageData(a,0,0);break}}const r=new kh(n);return r.wrapS=es,r.wrapT=es,r}function s0(s){const e={side:Pt,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1};switch(s){case"wood_oak":{Se.has("wood_oak")||Se.set("wood_oak",vt(512,512,"wood_oak"));const t=Se.get("wood_oak");return t.repeat.set(1.5,1.5),new Me({map:t,roughness:.35,metalness:.05,...e})}case"wood_dark":{Se.has("wood_dark")||Se.set("wood_dark",vt(512,512,"wood_dark"));const t=Se.get("wood_dark");return t.repeat.set(1.5,1.5),new Me({map:t,roughness:.3,metalness:.05,...e})}case"tile_ceramic":{Se.has("tile_ceramic")||Se.set("tile_ceramic",vt(512,512,"tile_ceramic"));const t=Se.get("tile_ceramic");return t.repeat.set(2,2),new Me({map:t,roughness:.15,metalness:.08,...e})}case"marble_luxury":{Se.has("marble_luxury")||Se.set("marble_luxury",vt(512,512,"marble_luxury"));const t=Se.get("marble_luxury");return t.repeat.set(1,1),new Me({map:t,roughness:.1,metalness:.12,...e})}case"stone_slate":{Se.has("stone_slate")||Se.set("stone_slate",vt(512,512,"stone_slate"));const t=Se.get("stone_slate");return t.repeat.set(1.5,1.5),new Me({map:t,roughness:.8,metalness:0,...e})}case"carpet_blue":{Se.has("carpet_blue")||Se.set("carpet_blue",vt(512,512,"carpet_blue"));const t=Se.get("carpet_blue");return t.repeat.set(2,2),new Me({map:t,roughness:.95,metalness:0,...e})}default:return new Me({color:14870768,roughness:.45,...e})}}function r0(s){switch(s){case"brick":{Se.has("brick")||Se.set("brick",vt(512,512,"brick"));const e=Se.get("brick");return e.repeat.set(1,1),new Me({map:e,roughness:.75,metalness:.02})}case"brick_white":{Se.has("brick_white")||Se.set("brick_white",vt(512,512,"brick_white"));const e=Se.get("brick_white");return e.repeat.set(1,1),new Me({map:e,roughness:.6,metalness:.02})}case"wood":{Se.has("wall_wood")||Se.set("wall_wood",vt(512,512,"wall_wood"));const e=Se.get("wall_wood");return e.repeat.set(1,1),new Me({map:e,roughness:.45,metalness:.05})}case"wallpaper_striped":{Se.has("wallpaper_striped")||Se.set("wallpaper_striped",vt(512,512,"wallpaper_striped"));const e=Se.get("wallpaper_striped");return e.repeat.set(2,1),new Me({map:e,roughness:.4})}case"beige":return Se.has("stucco_beige")||Se.set("stucco_beige",vt(256,256,"plaster_stucco")),new Me({color:16117468,map:Se.get("stucco_beige"),roughness:.55});case"gray":return Se.has("stucco_gray")||Se.set("stucco_gray",vt(256,256,"plaster_stucco")),new Me({color:9741240,map:Se.get("stucco_gray"),roughness:.55});case"blue":return Se.has("stucco_blue")||Se.set("stucco_blue",vt(256,256,"plaster_stucco")),new Me({color:3718648,map:Se.get("stucco_blue"),roughness:.5});case"green":return Se.has("stucco_green")||Se.set("stucco_green",vt(256,256,"plaster_stucco")),new Me({color:8843180,map:Se.get("stucco_green"),roughness:.5});case"white":default:return Se.has("stucco_white")||Se.set("stucco_white",vt(256,256,"plaster_stucco")),new Me({color:16317180,map:Se.get("stucco_white"),roughness:.45})}}function a0(s){switch(s){case"roof_terracotta":{Se.has("roof_terracotta")||Se.set("roof_terracotta",vt(512,512,"roof_terracotta"));const e=Se.get("roof_terracotta");return e.repeat.set(2,2),new Me({map:e,roughness:.65,metalness:.05,side:Pt})}case"roof_slate":{Se.has("roof_slate")||Se.set("roof_slate",vt(512,512,"roof_slate"));const e=Se.get("roof_slate");return e.repeat.set(2,2),new Me({map:e,roughness:.5,metalness:.1,side:Pt})}case"roof_metal":{Se.has("roof_metal")||Se.set("roof_metal",vt(512,512,"roof_metal"));const e=Se.get("roof_metal");return e.repeat.set(2,2),new Me({map:e,roughness:.35,metalness:.4,side:Pt})}case"roof_wood_shake":{Se.has("roof_wood_shake")||Se.set("roof_wood_shake",vt(512,512,"roof_wood_shake"));const e=Se.get("roof_wood_shake");return e.repeat.set(2,2),new Me({map:e,roughness:.7,metalness:.02,side:Pt})}case"roof_shingle_dark":default:{Se.has("roof_shingle_dark")||Se.set("roof_shingle_dark",vt(512,512,"roof_shingle_dark"));const e=Se.get("roof_shingle_dark");return e.repeat.set(2,2),new Me({map:e,roughness:.6,metalness:.05,side:Pt})}}}function o0(){if(!Se.has("grass")){const s=vt(512,512,"grass");s.repeat.set(12,12),Se.set("grass",s)}return Se.get("grass")}const bt=new Me({color:4073251,roughness:.65}),zr=new Me({color:14596231,roughness:.55}),yt=new Me({color:9268835,roughness:.6}),zn=new Me({color:1920728,roughness:.85}),bn=new Me({color:1013358,roughness:.85}),jn=new Me({color:16117994,roughness:.9}),Gn=new Me({color:2565930,roughness:.85}),Gr=new Me({color:16777215,roughness:.75}),Fs=new Me({color:16096779,roughness:.85}),Ft=new Me({color:13751771,metalness:.9,roughness:.15}),wt=new Me({color:1579035,metalness:.6,roughness:.35}),hn=new Me({color:13938487,metalness:.85,roughness:.25}),yn=new Me({color:16317180,roughness:.15,metalness:.05}),kr=new Me({color:15857145,roughness:.2,metalness:.1}),ei=new nc({color:12573694,transmission:.85,opacity:.45,transparent:!0,roughness:.08,ior:1.5}),Ki=new Me({color:592139,roughness:.1,metalness:.8}),Hr=new Wn({color:1981066}),Os=new Me({color:1409085,roughness:.55}),yl=new Me({color:1467700,roughness:.6}),l0=new Me({color:13273604,roughness:.7}),wl=new Me({color:3718648,opacity:.65,transparent:!0,roughness:.1}),El=new Wn({color:16347926});function Tl(s,e=0){const t=new rt;switch(s){case"sofa":{const i=new P(new H(2.1,.28,.88),zn);i.position.y=.24;const r=new P(new H(2.1,.55,.22),zn);r.position.set(0,.62,-.33);const a=new P(new H(.2,.45,.9),zn);a.position.set(-1.05,.44,.01);const o=a.clone();o.position.x=1.05;for(let S=-1;S<=1;S++){const f=new P(new H(.62,.14,.65),zn);f.position.set(S*.66,.42,.04),t.add(f)}const l=new P(new H(.32,.32,.1),jn);l.rotation.set(0,.25,.1),l.position.set(-.78,.56,-.15);const c=new P(new H(.32,.32,.1),Fs);c.rotation.set(0,-.25,-.1),c.position.set(.78,.56,-.15);const u=new Ge(.035,.02,.12,8),d=new P(u,yt);d.position.set(-.95,.06,.35);const h=d.clone();h.position.set(.95,.06,.35);const m=d.clone();m.position.set(-.95,.06,-.35);const x=d.clone();x.position.set(.95,.06,-.35),t.add(i,r,a,o,l,c,d,h,m,x);break}case"sofa_corner":{const i=new P(new H(2.4,.28,.9),Gn);i.position.set(0,.24,0);const r=new P(new H(2.4,.55,.22),Gn);r.position.set(0,.62,-.34);const a=new P(new H(.9,.28,1),Gn);a.position.set(.75,.24,.95);const o=new P(new H(.18,.45,1.85),Gn);o.position.set(1.25,.44,.45);const l=new P(new H(.18,.45,.9),Gn);l.position.set(-1.25,.44,0);const c=new P(new H(.35,.35,.12),Fs);c.position.set(-.9,.56,-.15);const u=new P(new H(.35,.35,.12),Gr);u.position.set(.75,.56,.3),t.add(i,r,a,o,l,c,u);break}case"armchair":{const i=new P(new H(.95,.28,.85),bn);i.position.y=.24;const r=new P(new H(.95,.58,.2),bn);r.position.set(0,.64,-.32);const a=new P(new H(.16,.45,.85),bn);a.position.set(-.48,.44,0);const o=a.clone();o.position.x=.48;const l=new P(new H(.32,.28,.1),jn);l.position.set(0,.52,-.18);const c=new Ge(.03,.02,.14,8),u=new P(c,yt);u.position.set(-.4,.07,.35);const d=u.clone();d.position.set(.4,.07,.35);const h=u.clone();h.position.set(-.4,.07,-.35);const m=u.clone();m.position.set(.4,.07,-.35),t.add(i,r,a,o,l,u,d,h,m);break}case"chair":{const i=new P(new H(.5,.06,.48),jn);i.position.y=.46;const r=new P(new H(.48,.42,.05),zr);r.position.set(0,.68,-.22);const a=new Ge(.022,.016,.45,8),o=new P(a,bt);o.position.set(-.2,.22,-.19);const l=o.clone();l.position.set(.2,.22,-.19);const c=o.clone();c.position.set(-.2,.22,.19);const u=o.clone();u.position.set(.2,.22,.19),t.add(i,r,o,l,c,u);break}case"barstool":{const i=new P(new Ge(.2,.2,.08,16),Gn);i.position.y=.85;const r=new P(new Ge(.03,.03,.8,8),Ft);r.position.y=.42;const a=new P(new Ge(.25,.25,.04,16),Ft);a.position.y=.02;const o=new P(new Ai(.14,.015,8,16),Ft);o.rotation.x=Math.PI/2,o.position.y=.35,t.add(i,r,a,o);break}case"office_chair":{const i=new P(new H(.55,.08,.52),Gn);i.position.y=.5;const r=new P(new H(.52,.65,.08),Gn);r.position.set(0,.82,-.23);const a=new P(new H(.3,.16,.08),bn);a.position.set(0,1.18,-.22);const o=new P(new H(.08,.25,.3),wt);o.position.set(-.28,.65,0);const l=o.clone();l.position.x=.28;const c=new P(new Ge(.03,.03,.35,8),Ft);c.position.y=.25;const u=new Ge(.32,.32,.05,5),d=new P(u,wt);d.position.y=.08,t.add(i,r,a,o,l,c,d);break}case"bed":{const i=new P(new H(2,.28,2.2),bt);i.position.y=.16;const r=new P(new H(2,1,.15),bt);r.position.set(0,.65,-1.05);const a=new P(new H(1.85,.8,.08),jn);a.position.set(0,.65,-.97);const o=new P(new H(1.82,.3,2.05),Gr);o.position.set(0,.42,.03);const l=new P(new H(1.84,.06,1.3),zn);l.position.set(0,.58,.45);const c=new H(.65,.14,.4),u=new P(c,jn);u.position.set(-.48,.61,-.68);const d=u.clone();d.position.x=.48;const h=new P(new H(.5,.12,.3),Fs);h.position.set(-.45,.66,-.45);const m=h.clone();m.position.x=.45,t.add(i,r,a,o,l,u,d,h,m);break}case"bed_single":{const i=new P(new H(1.2,.25,2.1),yt);i.position.y=.15;const r=new P(new H(1.2,.8,.12),yt);r.position.set(0,.55,-1);const a=new P(new H(1.05,.26,1.95),Gr);a.position.set(0,.38,.02);const o=new P(new H(1.08,.06,1.2),bn);o.position.set(0,.52,.4);const l=new P(new H(.65,.12,.35),jn);l.position.set(0,.54,-.65),t.add(i,r,a,o,l);break}case"bunk_bed":{const i=new H(.08,1.85,.08),r=new P(i,yt);r.position.set(-.56,.92,-1);const a=new P(i,yt);a.position.set(.56,.92,-1);const o=new P(i,yt);o.position.set(-.56,.92,1);const l=new P(i,yt);l.position.set(.56,.92,1);const c=new P(new H(1.05,.22,1.9),zn);c.position.set(0,.38,0);const u=new P(new H(1.05,.22,1.9),bn);u.position.set(0,1.35,0);const d=new P(new H(.04,.25,1.9),yt);d.position.set(.56,1.55,0);for(let h=1;h<=4;h++){const m=new P(new Ge(.02,.02,.35,8),zr);m.rotation.z=Math.PI/2,m.position.set(-.56,h*.32,.6),t.add(m)}t.add(r,a,o,l,c,u,d);break}case"nightstand":{const i=new P(new H(.52,.48,.44),bt);i.position.y=.28;const r=new P(new H(.12,.03,.02),hn);r.position.set(0,.32,.23);const a=new P(new H(.14,.08,.06),wt);a.position.set(-.12,.56,0),t.add(i,r,a);break}case"table":{const i=new P(new H(1.8,.08,.95),bt);i.position.y=.74;const r=new P(new H(1.5,.02,.65),ei);r.position.y=.785;const a=new Ge(.04,.03,.7,8),o=new P(a,yt);o.position.set(-.8,.35,-.4);const l=o.clone();l.position.set(.8,.35,-.4);const c=o.clone();c.position.set(-.8,.35,.4);const u=o.clone();u.position.set(.8,.35,.4),t.add(i,r,o,l,c,u);break}case"coffee_table":{const i=new P(new H(1.2,.06,.65),yt);i.position.y=.42;const r=new P(new H(1.1,.03,.55),zr);r.position.y=.18;const a=new H(.04,.42,.04),o=new P(a,wt);o.position.set(-.52,.21,-.26);const l=o.clone();l.position.set(.52,.21,-.26);const c=o.clone();c.position.set(-.52,.21,.26);const u=o.clone();u.position.set(.52,.21,.26);const d=new P(new H(.24,.02,.18),bn);d.rotation.y=.2,d.position.set(.2,.46,0),t.add(i,r,o,l,c,u,d);break}case"desk":{const i=new P(new H(1.4,.06,.7),yt);i.position.y=.74;const r=new P(new H(.05,.72,.65),wt);r.position.set(-.65,.36,0);const a=r.clone();a.position.x=.65;const o=new P(new H(.35,.6,.6),bt);o.position.set(.45,.4,0);const l=new P(new H(.32,.015,.24),Ft);l.position.set(-.15,.78,.05);const c=new P(new H(.32,.22,.015),wt);c.rotation.x=-.25,c.position.set(-.15,.88,-.06),t.add(i,r,a,o,l,c);break}case"cabinet":{const i=new P(new H(1.4,1.95,.6),bt);i.position.y=.98;const r=new P(new H(.62,1.75,.02),ei);r.position.set(-.32,.98,.31);const a=new P(new H(.02,1.9,.02),hn);a.position.set(0,.98,.31);const o=new P(new Ge(.015,.015,.2,8),hn);o.position.set(.08,.98,.32),t.add(i,r,a,o);break}case"bookshelf":{const i=new P(new H(1.1,1.9,.38),bt);i.position.y=.95;for(let r=1;r<=4;r++){const a=r*.42,o=r%2===0?zn:bn,l=new P(new H(.35,.22,.22),o);l.position.set(r%2===0?-.25:.25,a+.12,.02),t.add(l)}t.add(i);break}case"tv":{const i=new P(new H(1.8,.45,.45),bt);i.position.y=.225;const r=new P(new H(1.45,.82,.05),Ki);r.position.set(0,.92,0);const a=new P(new H(1.38,.75,.01),Hr);a.position.set(0,.92,.03);const o=new P(new Ge(.035,.05,.1,8),Ft);o.position.set(0,.49,0);const l=new P(new H(.9,.06,.08),wt);l.position.set(0,.48,.12),t.add(i,r,a,o,l);break}case"tv_wall":{const i=new P(new H(1.5,.88,.04),Ki);i.position.set(0,1.4,0);const r=new P(new H(1.44,.82,.01),Hr);r.position.set(0,1.4,.025),t.add(i,r);break}case"computer":{const i=new P(new H(1.3,.05,.65),wt);i.position.y=.74;const r=new P(new H(1.2,.72,.55),wt);r.position.y=.36;const a=new P(new H(.5,.32,.03),Ki);a.rotation.y=.15,a.position.set(-.26,.96,-.05);const o=new P(new H(.5,.32,.03),Ki);o.rotation.y=-.15,o.position.set(.26,.96,-.05);const l=new P(new H(.2,.4,.38),wt);l.position.set(.48,.96,.05);const c=new P(new H(.02,.35,.02),El);c.position.set(.38,.96,.22),t.add(i,r,a,o,l,c);break}case"speaker":{const i=new P(new H(.32,1.05,.32),bt);i.position.y=.525;const r=new P(new Ge(.1,.1,.02,16),hn);r.rotation.x=Math.PI/2,r.position.set(0,.78,.17);const a=r.clone();a.position.y=.45,t.add(i,r,a);break}case"fridge":{const i=new P(new H(.9,1.9,.8),Ft);i.position.y=.95;const r=new P(new H(.02,1.85,.02),wt);r.position.set(0,.95,.41);const a=new P(new H(.92,.02,.02),wt);a.position.set(0,.7,.41);const o=new P(new H(.22,.3,.02),wt);o.position.set(-.25,1.25,.415),t.add(i,r,a,o);break}case"counter":{const i=new P(new H(1,.86,.65),yt);i.position.y=.43;const r=new P(new H(1.04,.08,.69),kr);r.position.y=.9;const a=new P(new H(.52,.02,.42),Ft);a.position.set(0,.945,.02);const o=new P(new Ge(.018,.018,.22,8),Ft);o.position.set(0,1.05,-.16),t.add(i,r,a,o);break}case"kitchen_island":{const i=new P(new H(1.5,.85,.85),bt);i.position.y=.425;const r=new P(new H(1.65,.08,.95),kr);r.position.y=.89;const a=new P(new Ge(.18,.1,.08,12),yn);a.position.set(0,.97,0),t.add(i,r,a);break}case"stove":{const i=new P(new H(.88,.88,.65),Ft);i.position.y=.44;const r=new P(new H(.65,.45,.02),wt);r.position.set(0,.42,.33);for(let o=-.22;o<=.22;o+=.44)for(let l=-.15;l<=.15;l+=.3){const c=new P(new Ge(.09,.09,.02,12),wt);c.position.set(o,.89,l),t.add(c)}const a=new P(new H(.9,.35,.6),Ft);a.position.set(0,1.75,0),t.add(i,r,a);break}case"toilet":{const i=new P(new Ge(.18,.22,.42,16),yn);i.position.set(0,.21,.08);const r=new P(new Ge(.24,.2,.16,16),yn);r.position.set(0,.44,.12);const a=new P(new Ge(.16,.16,.02,16),wl);a.position.set(0,.46,.12);const o=new P(new H(.48,.45,.22),yn);o.position.set(0,.6,-.18);const l=new P(new Ge(.02,.02,.02,8),Ft);l.position.set(0,.835,-.18),t.add(i,r,a,o,l);break}case"bath":{const i=new P(new Ge(.55,.45,.58,24),yn);i.scale.set(1.55,1,.9),i.position.y=.29;const r=new P(new Ge(.5,.42,.02,24),wl);r.scale.set(1.5,1,.85),r.position.y=.48;const a=new P(new Ge(.025,.025,.35,8),hn);a.position.set(.72,.6,0),t.add(i,r,a);break}case"shower":{const i=new P(new H(1,.06,1),yn);i.position.y=.03;const r=new P(new H(.02,2,1),ei);r.position.set(-.49,1.04,0);const a=new P(new H(.7,2,.02),ei);a.position.set(-.14,1.04,.49);const o=new P(new H(.12,1.5,.04),Ft);o.position.set(.46,1.1,0);const l=new P(new Ge(.14,.14,.02,16),Ft);l.position.set(.28,1.95,0),t.add(i,r,a,o,l);break}case"sink_vanity":{const i=new P(new H(.95,.75,.52),bt);i.position.y=.375;const r=new P(new H(.98,.06,.55),kr);r.position.y=.77;const a=new P(new Ge(.2,.16,.12,16),yn);a.position.set(0,.86,.02);const o=new P(new Ge(.015,.015,.22,8),hn);o.position.set(0,.97,-.16);const l=new P(new H(.85,.85,.02),ei);l.position.set(0,1.45,-.22),t.add(i,r,a,o,l);break}case"lamp":{const i=new P(new Ge(.16,.18,.04,12),hn);i.position.y=.02;const r=new P(new Ge(.02,.02,.5,8),hn);r.position.y=.27;const a=new P(new Ge(.18,.26,.32,16,1,!0),new Me({color:16776171,roughness:.35,side:Pt}));a.position.y=.48;const o=new Is(16772565,.8,6,2);o.position.set(0,.48,0),t.add(i,r,a,o);break}case"floor_lamp":{const i=new Ge(.018,.014,1.45,8),r=new P(i,yt);r.rotation.set(.12,0,.12),r.position.set(-.16,.72,.16);const a=new P(i,yt);a.rotation.set(.12,0,-.12),a.position.set(.16,.72,.16);const o=new P(i,yt);o.rotation.set(-.16,0,0),o.position.set(0,.72,-.2);const l=new P(new Ge(.28,.34,.42,20,1,!0),new Me({color:16707722,roughness:.3,side:Pt}));l.position.y=1.45;const c=new Is(16707722,1.2,8,2);c.position.set(0,1.45,0),t.add(r,a,o,l,c);break}case"ceiling_lamp":{const i=new P(new Ge(.01,.01,.8,8),wt);i.position.y=2.4;const r=new P(new Ai(.3,.02,8,24),hn);r.position.y=1.95,r.rotation.x=Math.PI/2+.2;const a=new P(new Ai(.2,.018,8,24),hn);a.position.y=1.85,a.rotation.x=Math.PI/2-.2;const o=new Is(16775149,1.4,9,2);o.position.set(0,1.85,0),t.add(i,r,a,o);break}case"plant":{const i=new P(new Ge(.25,.18,.45,16),l0);i.position.y=.225;const r=new P(new Ge(.23,.23,.04,16),bt);r.position.y=.43;const a=new rs(.32,1),o=new P(a,Os);o.scale.set(1.1,.4,1.1),o.rotation.set(.3,.4,-.2),o.position.set(.12,.72,.1);const l=new P(a,yl);l.scale.set(.9,.35,.9),l.rotation.set(-.3,-.4,.2),l.position.set(-.15,.65,-.08);const c=new P(a,Os);c.scale.set(1,.3,1),c.position.set(0,.88,0),t.add(i,r,o,l,c);break}case"plant_tree":{const i=new P(new Ge(.32,.25,.55,16),yn);i.position.y=.275;const r=new P(new Ge(.04,.05,1.2,8),bt);r.position.set(0,.85,0);for(let a=0;a<5;a++){const o=new P(new rs(.35-a*.03,1),Os);o.position.set(Math.sin(a)*.18,1.2+a*.2,Math.cos(a)*.18),t.add(o)}t.add(i,r);break}case"fireplace":{const i=new P(new H(1.5,1.15,.45),bt);i.position.y=.575;const r=new P(new H(.9,.65,.35),wt);r.position.set(0,.45,.08);const a=new P(new H(.65,.12,.22),El);a.position.set(0,.2,.12);const o=new Is(16347926,1.2,4);o.position.set(0,.35,.2),t.add(i,r,a,o);break}case"rug":{const i=new P(new H(2.4,.02,1.6),jn);i.position.y=.01;const r=new P(new H(2.1,.025,1.3),bn);r.position.y=.012,t.add(i,r);break}case"wall_art":{const i=new P(new H(1.2,.8,.04),bt);i.position.set(0,1.5,0);const r=new P(new H(1.12,.72,.01),Fs);r.position.set(0,1.5,.025),t.add(i,r);break}case"guitar":{const i=new P(new Ge(.02,.02,.9,8),wt);i.position.set(0,.45,0);const r=new P(new H(.38,.55,.12),yt);r.position.set(0,.48,.08);const a=new P(new H(.08,.6,.04),bt);a.position.set(0,.95,.08),t.add(i,r,a);break}case"cash_register":{const i=new P(new H(.72,.42,.58),bt);i.position.y=.22;const r=new P(new H(.62,.12,.5),Ft);r.position.set(0,.17,.04);const a=new P(new H(.76,.06,.62),yt);a.position.y=.46;const o=new P(new H(.34,.18,.22),wt);o.position.set(.1,.61,-.12),o.rotation.x=-.2;const l=new P(new H(.28,.11,.018),Hr);l.position.set(.1,.63,-.005),l.rotation.x=-.2;const c=new P(new H(.2,.018,.15),ei);c.position.set(-.2,.51,.1);const u=new Me({color:15067115,roughness:.55});for(let d=0;d<2;d++)for(let h=0;h<3;h++){const m=new P(new H(.055,.018,.05),u);m.position.set(-.16+h*.075,.51,-.2+d*.08),t.add(m)}t.add(i,r,a,o,l,c);break}case"display_case":{const i=new P(new H(1.5,.18,.72),bt);i.position.y=.09;const r=new P(new H(1.4,.34,.62),yt);r.position.y=.34;const a=new nc({color:14938879,roughness:.1,metalness:.05,transmission:.72,transparent:!0,opacity:.48,thickness:.04}),o=new P(new H(1.36,.63,.025),a);o.position.set(0,.83,.29);const l=o.clone();l.position.z=-.29;const c=new H(.025,.63,.58),u=new P(c,a);u.position.set(-.68,.83,0);const d=u.clone();d.position.x=.68;const h=new P(new H(1.42,.055,.68),Ft);h.position.y=1.17;const m=new P(new H(1.3,.035,.55),yn);m.position.y=.78;const x=new Me({color:13203779,roughness:.78});for(let S=0;S<5;S++){const f=new P(new Ai(.075,.035,6,12),x);f.position.set(-.48+S*.24,.58,.02),f.rotation.x=Math.PI/2,t.add(f)}t.add(i,r,o,l,u,d,h,m);break}case"menu_board":{const i=new P(new H(1.35,1.25,.09),bt);i.position.y=1.25;const r=new Me({color:2503983,roughness:.92}),a=new P(new H(1.21,1.1,.025),r);a.position.set(0,1.25,.055);const o=new Me({color:16050898,roughness:.88}),l=new P(new H(.62,.035,.012),o);l.position.set(0,1.62,.075),t.add(i,a,l);for(let c=0;c<4;c++){const u=new P(new H(c%2===0?.8:.68,.018,.012),o);u.position.set(c%2===0?-.03:.04,1.43-c*.17,.075),t.add(u)}break}default:{const i=new P(new H(.8,.8,.8),zn);i.position.y=.4,t.add(i);break}}const n=Mc(s);if(n.length>0&&e>=0){const i=n[e%n.length],r=new Ne(i.colorA),a=new Ne(i.colorB);let o=0;t.traverse(l=>{if(l instanceof P&&l.material instanceof Me){if(l.material!==Os&&l.material!==yl&&l.material!==Ki){const c=l.material.clone();o%2===0?c.color.copy(r):c.color.copy(a),l.material=c}o++}})}return t.traverse(i=>{i instanceof P&&(i.castShadow=!0,i.receiveShadow=!0)}),t}function Al(){const s=new rt,e=new Me({color:4861464,roughness:.6}),t=new Me({color:8145444,roughness:.5}),n=new Me({color:13938487,metalness:.9,roughness:.2}),i=new H(.1,2.25,.24),r=new P(i,e);r.position.set(-.5,1.125,0);const a=r.clone();a.position.set(.5,1.125,0);const o=new P(new H(1.1,.1,.24),e);o.position.set(0,2.25,0),s.add(r,a,o);const l=new P(new H(.9,2.18,.08),t);l.position.set(0,1.09,0),s.add(l);const c=new P(new as(.04,8,8),n);c.position.set(.35,1.05,.06);const u=c.clone();return u.position.z=-.06,s.add(c,u),s.traverse(d=>{d instanceof P&&(d.castShadow=!0,d.receiveShadow=!0)}),s}function Rl(){const s=new rt,e=new Me({color:16317180,roughness:.35}),t=1.2,n=1.3,i=.24,r=new P(new H(t,.08,i),e);r.position.set(0,1.9,0);const a=r.clone();a.position.set(0,.65,0);const o=new P(new H(.08,n,i),e);o.position.set(-.56,1.275,0);const l=o.clone();l.position.set(.56,1.275,0);const c=new P(new H(.05,n,.08),e);c.position.set(0,1.275,0);const u=new P(new H(t-.16,n-.16,.03),ei);u.position.set(0,1.275,0);const d=new P(new H(t+.16,.06,i+.08),e);return d.position.set(0,.62,0),s.add(r,a,o,l,c,u,d),s.traverse(h=>{h instanceof P&&(h.castShadow=!0,h.receiveShadow=!0)}),s}function c0(s){const e=[],t=[],n=[];for(const r of s){const a=r.x,o=r.x+1,l=r.z,c=r.z+1,u=.04;e.push(a,u,l,a,u,c,o,u,c),t.push(0,1,0,0,1,0,0,1,0),n.push(a,l,a,c,o,c),e.push(a,u,l,o,u,c,o,u,l),t.push(0,1,0,0,1,0,0,1,0),n.push(a,l,o,c,o,l)}const i=new gt;return i.setAttribute("position",new Ze(e,3)),i.setAttribute("normal",new Ze(t,3)),i.setAttribute("uv",new Ze(n,2)),i.computeVertexNormals(),i}class h0{constructor(){this.baseboardMat=new Me({color:16317180,roughness:.6,metalness:.05}),this.crownMat=new Me({color:15857145,roughness:.5}),this.topCapMat=new Me({color:1976635,roughness:.4,metalness:.2})}createUnifiedBoxGeometry(e,t,n,i,r,a=1){const o=new H(e,t,n),l=o.attributes.uv,c=i/a,u=(i+e)/a,d=r/a,h=(r+t)/a;return l.setXY(16,c,h),l.setXY(17,u,h),l.setXY(18,c,d),l.setXY(19,u,d),l.setXY(20,u,h),l.setXY(21,c,h),l.setXY(22,u,d),l.setXY(23,c,d),l.needsUpdate=!0,o}build(e,t,n,i){const r=new rt;r.name="WallsMeshRoot";const{currentFloor:a,wallCutMode:o,camera:l,cameraTarget:c}=i,u=new Map,d=(M,w,v)=>`${M.toFixed(2)}_${w.toFixed(2)}_${v}`,h=M=>{if(M.floor!==a)return{height:3,isCutaway:!1};if(o==="full")return{height:3,isCutaway:!1};if(o==="down")return{height:.45,isCutaway:!0};const E=(M.x1+M.x2)/2,y=(M.z1+M.z2)/2,R=c.x-l.position.x,g=c.z-l.position.z,T=Math.hypot(R,g)||1,D=R/T,I=g/T,L=E-l.position.x,Y=y-l.position.z;return L*D+Y*I<T*.98?{height:.45,isCutaway:!0}:{height:3,isCutaway:!1}};for(const M of e){const w=M.floor,v=d(M.x1,M.z1,w),E=d(M.x2,M.z2,w),{height:y,isCutaway:R}=h(M),g=(T,D,I)=>{let L=u.get(T);L||(L={x:D,z:I,floor:w,incidentWallCount:0,maxHeight:y,material:M.material||"white",isCutaway:R},u.set(T,L)),L.incidentWallCount+=1,L.maxHeight=Math.max(L.maxHeight,y),R||(L.isCutaway=!1)};g(v,M.x1,M.z1),g(E,M.x2,M.z2)}const m=[],x=[],S=[],f=new Et;for(const M of e){M.floor;const w=M.floor<a,v=M.x2-M.x1,E=M.z2-M.z1,y=Math.hypot(v,E);if(y<.05)continue;const R=v/y,g=E/y,T=-g,D=R,I=Math.atan2(E,v),L=M.thickness||.22,Y=(M.floor-1)*3,{height:W}=h(M);let B=1,q=!1;w&&(B=.45,q=!0);const X=0,j=y;if(j<=X+.02)continue;const ne=new rt;ne.userData={type:"wall",data:M};const ae=r0(M.material||"white").clone();q&&(ae.transparent=!0,ae.opacity=B);const ue=[];if(W>1.2){for(const be of t){if(be.floor!==M.floor)continue;const Z=be.x-M.x1,ie=be.z-M.z1,te=Z*R+ie*g;if(Math.abs(Z*T+ie*D)<.45&&te>=X-.2&&te<=j+.2){const Pe=Math.max(X,te-.52),we=Math.min(j,te+.52);we>Pe+.1&&ue.push({start:Pe,end:we,type:"door"})}}for(const be of n){if(be.floor!==M.floor)continue;const Z=be.x-M.x1,ie=be.z-M.z1,te=Z*R+ie*g;if(Math.abs(Z*T+ie*D)<.45&&te>=X-.2&&te<=j+.2){const Pe=Math.max(X,te-.62),we=Math.min(j,te+.62);we>Pe+.1&&ue.push({start:Pe,end:we,type:"window"})}}}ue.sort((be,Z)=>be.start-Z.start);const _e=[];for(const be of ue)if(_e.length===0)_e.push(be);else{const Z=_e[_e.length-1];be.start<=Z.end+.05?Z.end=Math.max(Z.end,be.end):_e.push(be)}const Xe=(be,Z,ie,te,Ue)=>{const Pe=Z-be,we=te-ie;if(Pe<.02||we<.02)return;const ht=be+Pe/2,ze=M.x1+R*ht,Qe=M.z1+g*ht,$e=Y+ie+we/2,Ye=this.createUnifiedBoxGeometry(Pe,we,L,be,ie),ot=new P(Ye,ae);ot.position.set(ze,$e,Qe),ot.rotation.y=-I,ot.castShadow=!0,ot.receiveShadow=!0,ne.add(ot),ie===0&&W>.4&&(f.position.set(ze,Y+.12/2,Qe),f.rotation.set(0,-I,0),f.scale.set(Pe,.12,L+.015),f.updateMatrix(),m.push(f.matrix.clone())),te>=W&&W>=2.4&&(f.position.set(ze,Y+W-.06/2,Qe),f.rotation.set(0,-I,0),f.scale.set(Pe,.06,L+.015),f.updateMatrix(),x.push(f.matrix.clone())),te>=W&&(f.position.set(ze,Y+W+.05/2,Qe),f.rotation.set(0,-I,0),f.scale.set(Pe+.01,.05,L+.025),f.updateMatrix(),S.push(f.matrix.clone()))};let tt=X;for(const be of _e)be.start>tt+.01&&Xe(tt,be.start,0,W),be.type==="door"?W>2.25&&Xe(be.start,be.end,2.25,W):be.type==="window"&&(Xe(be.start,be.end,0,Math.min(.65,W)),W>1.95&&Xe(be.start,be.end,1.95,W)),tt=be.end;tt<j-.01&&Xe(tt,j,0,W),r.add(ne)}const p=new H(1,1,1);if(S.length>0){const M=new Cr(p,this.topCapMat,S.length);M.castShadow=!0;for(let w=0;w<S.length;w++)M.setMatrixAt(w,S[w]);M.instanceMatrix.needsUpdate=!0,r.add(M)}if(m.length>0){const M=new Cr(p,this.baseboardMat,m.length);for(let w=0;w<m.length;w++)M.setMatrixAt(w,m[w]);M.instanceMatrix.needsUpdate=!0,r.add(M)}if(x.length>0){const M=new Cr(p,this.crownMat,x.length);for(let w=0;w<x.length;w++)M.setMatrixAt(w,x[w]);M.instanceMatrix.needsUpdate=!0,r.add(M)}return r}}class u0{constructor(){this.trimMaterial=new Me({color:15857145,roughness:.35,metalness:.05}),this.ridgeMaterial=new Me({color:1976635,roughness:.4,metalness:.1})}buildRoof(e,t){const n=new rt;n.name=`Roof_${e.id}`,n.userData={type:"roof",data:e};const{type:i="hipped",x:r,z:a,width:o=6,depth:l=6,height:c=2.2,pitchCurve:u=0,overhang:d=.35,material:h="roof_shingle_dark",rotation:m=0}=e,x=a0(h);n.position.set(r,t+3,a),n.rotation.y=Ti.degToRad(m);const S=o/2+d,f=l/2+d,p=Math.max(.6,c);switch(i){case"hipped":this.buildHippedRoof(n,S,f,p,u,x);break;case"gabled":this.buildGabledRoof(n,S,f,p,u,x);break;case"half_gabled":this.buildHalfGabledRoof(n,S,f,p,u,x);break;case"mansard":this.buildMansardRoof(n,S,f,p,x);break;case"flat":default:this.buildFlatRoof(n,S,f,x);break}return this.buildFasciaTrim(n,S,f,.14,.08),n}buildHippedRoof(e,t,n,i,r,a){const l=Math.abs(t-n)<.1?0:Math.max(0,Math.abs(t-n)),c=t>=n,u=Math.abs(r)>.05?12:2,d=(h,m,x,S)=>{const f=new gt,p=[],M=[],w=[];for(let E=0;E<=u;E++){const y=E/u,R=Math.sin(y*Math.PI)*r*.45,g=new C().lerpVectors(h,S,y),T=new C().lerpVectors(m,x,y);if(g.y+=R,T.y+=R,p.push(g.x,g.y,g.z),p.push(T.x,T.y,T.z),M.push(0,y*2),M.push(2,y*2),E<u){const D=E*2,I=(E+1)*2;w.push(D,D+1,I),w.push(D+1,I+1,I)}}f.setAttribute("position",new Ze(p,3)),f.setAttribute("uv",new Ze(M,2)),f.setIndex(w),f.computeVertexNormals();const v=new P(f,a);v.castShadow=!0,v.receiveShadow=!0,v.userData={isRoofSurface:!0},e.add(v)};if(c){const h=l;if(d(new C(-t,0,-n),new C(t,0,-n),new C(h,i,0),new C(-h,i,0)),d(new C(t,0,n),new C(-t,0,n),new C(-h,i,0),new C(h,i,0)),d(new C(-t,0,n),new C(-t,0,-n),new C(-h,i,0),new C(-h,i,0)),d(new C(t,0,-n),new C(t,0,n),new C(h,i,0),new C(h,i,0)),h>.1){const m=new H(h*2+.1,.08,.18),x=new P(m,this.ridgeMaterial);x.position.set(0,i+.02,0),e.add(x)}}else{const h=l;if(d(new C(-t,0,n),new C(-t,0,-n),new C(0,i,-h),new C(0,i,h)),d(new C(t,0,-n),new C(t,0,n),new C(0,i,h),new C(0,i,-h)),d(new C(-t,0,-n),new C(t,0,-n),new C(0,i,-h),new C(0,i,-h)),d(new C(t,0,n),new C(-t,0,n),new C(0,i,h),new C(0,i,h)),h>.1){const m=new H(.18,.08,h*2+.1),x=new P(m,this.ridgeMaterial);x.position.set(0,i+.02,0),e.add(x)}}}buildGabledRoof(e,t,n,i,r,a){const o=Math.abs(r)>.05?12:2,l=(x,S,f,p)=>{const M=new gt,w=[],v=[],E=[];for(let R=0;R<=o;R++){const g=R/o,T=Math.sin(g*Math.PI)*r*.45,D=new C().lerpVectors(x,p,g),I=new C().lerpVectors(S,f,g);if(D.y+=T,I.y+=T,w.push(D.x,D.y,D.z),w.push(I.x,I.y,I.z),v.push(0,g*2),v.push(2,g*2),R<o){const L=R*2,Y=(R+1)*2;E.push(L,L+1,Y),E.push(L+1,Y+1,Y)}}M.setAttribute("position",new Ze(w,3)),M.setAttribute("uv",new Ze(v,2)),M.setIndex(E),M.computeVertexNormals();const y=new P(M,a);y.castShadow=!0,y.receiveShadow=!0,y.userData={isRoofSurface:!0},e.add(y)};l(new C(-t,0,-n),new C(t,0,-n),new C(t,i,0),new C(-t,i,0)),l(new C(t,0,n),new C(-t,0,n),new C(-t,i,0),new C(t,i,0));const c=new gt,u=[-t+.1,0,-n+.1,-t+.1,0,n-.1,-t+.1,i-.05,0,t-.1,0,n-.1,t-.1,0,-n+.1,t-.1,i-.05,0];c.setAttribute("position",new Ze(u,3)),c.computeVertexNormals();const d=new P(c,this.trimMaterial);e.add(d);const h=new H(t*2+.2,.08,.2),m=new P(h,this.ridgeMaterial);m.position.set(0,i+.02,0),e.add(m)}buildHalfGabledRoof(e,t,n,i,r,a){const o=new gt,l=[],c=[],u=[],d=10;for(let S=0;S<=d;S++){const f=S/d,p=-n+f*(n*2),M=f*i+Math.sin(f*Math.PI)*r*.4;if(l.push(-t,M,p),l.push(t,M,p),c.push(0,f*2),c.push(2,f*2),S<d){const w=S*2,v=(S+1)*2;u.push(w,w+1,v),u.push(w+1,v+1,v)}}o.setAttribute("position",new Ze(l,3)),o.setAttribute("uv",new Ze(c,2)),o.setIndex(u),o.computeVertexNormals();const h=new P(o,a);h.castShadow=!0,h.receiveShadow=!0,e.add(h);const m=new En(t*2,i),x=new P(m,this.trimMaterial);x.position.set(0,i/2,n),e.add(x)}buildMansardRoof(e,t,n,i,r){const a=i*.65,o=t*.35,l=n*.35;this.buildHippedRoof(e,t,n,a,0,r);const c=t-o,u=n-l,d=new rt;d.position.set(0,a,0),this.buildHippedRoof(d,c,u,i-a,0,r),e.add(d)}buildFlatRoof(e,t,n,i){const r=new H(t*2,.12,n*2),a=new P(r,i);a.position.set(0,.06,0),a.receiveShadow=!0,e.add(a);const o=.45,l=.22,c=(u,d,h,m)=>{const x=new H(u,o,d),S=new P(x,this.trimMaterial);S.position.set(h,o/2+.1,m),S.castShadow=!0,e.add(S)};c(t*2,l,0,-n+l/2),c(t*2,l,0,n-l/2),c(l,n*2-l*2,-t+l/2,0),c(l,n*2-l*2,t-l/2,0)}buildFasciaTrim(e,t,n,i,r){const a=new rt;a.name="FasciaTrim";const o=new H(t*2+r*2,i,r),l=new P(o,this.trimMaterial);l.position.set(0,-i/2,-n-r/2),a.add(l);const c=new P(o,this.trimMaterial);c.position.set(0,-i/2,n+r/2),a.add(c);const u=new H(r,i,n*2),d=new P(u,this.trimMaterial);d.position.set(-t-r/2,-i/2,0),a.add(d);const h=new P(u,this.trimMaterial);h.position.set(t+r/2,-i/2,0),a.add(h),e.add(a)}}class d0{constructor(){this.gizmoGroup=new rt,this.highlightedMesh=null,this.originalColor=new Ne,this.whiteArrowMat=new Me({color:16777215,emissive:2236962,roughness:.2,metalness:.1}),this.goldArrowMat=new Me({color:16096779,emissive:4528643,roughness:.3,metalness:.2}),this.whiteSphereMat=new Me({color:16777215,emissive:3355443,roughness:.2,metalness:.1}),this.borderMat=new Wn({color:1976635}),this.gizmoGroup.name="SimsGizmoGroup"}createArrowMesh(e=.8,t=.28,n=.45,i){const r=new rt,a=new Ge(.08,.08,e-n,16);a.translate(0,(e-n)/2,0);const o=new P(a,i);r.add(o);const l=new Ka(t,n,16);l.translate(0,e-n/2,0);const c=new P(l,i);return r.add(c),r}buildRoofGizmo(e,t){this.clear();const n=new rt;n.name=`Gizmo_Roof_${e.id}`;const{x:i,z:r,width:a=6,depth:o=6,height:l=2.2,overhang:c=.35}=e,u=t+3,d=a/2+c,h=o/2+c,m=Math.max(.6,l),x=this.createArrowMesh(1.1,.32,.55,this.whiteArrowMat.clone());x.position.set(i,u+m+.1,r),x.userData={isGizmo:!0,handleType:"roof_height",targetId:e.id},n.add(x);const S=this.createArrowMesh(.9,.26,.45,this.whiteArrowMat.clone());S.position.set(i+d+.1,u+.1,r),S.rotation.z=-Math.PI/2,S.userData={isGizmo:!0,handleType:"roof_width_pos",targetId:e.id},n.add(S);const f=this.createArrowMesh(.9,.26,.45,this.whiteArrowMat.clone());f.position.set(i-d-.1,u+.1,r),f.rotation.z=Math.PI/2,f.userData={isGizmo:!0,handleType:"roof_width_neg",targetId:e.id},n.add(f);const p=this.createArrowMesh(.9,.26,.45,this.whiteArrowMat.clone());p.position.set(i,u+.1,r+h+.1),p.rotation.x=Math.PI/2,p.userData={isGizmo:!0,handleType:"roof_depth_pos",targetId:e.id},n.add(p);const M=this.createArrowMesh(.9,.26,.45,this.whiteArrowMat.clone());M.position.set(i,u+.1,r-h-.1),M.rotation.x=-Math.PI/2,M.userData={isGizmo:!0,handleType:"roof_depth_neg",targetId:e.id},n.add(M);const w=new as(.24,24,24),v=new P(w,this.whiteSphereMat.clone());v.position.set(i,u+m*.55,r-h*.45),v.userData={isGizmo:!0,handleType:"roof_curve",targetId:e.id},n.add(v);const E=new P(w,this.whiteSphereMat.clone());return E.position.set(i,u+m*.55,r+h*.45),E.userData={isGizmo:!0,handleType:"roof_curve",targetId:e.id},n.add(E),this.gizmoGroup.add(n),n}buildRoomGizmo(e,t){this.clear();const n=new rt;n.name=`Gizmo_Room_${e.id}`;const{minX:i,maxX:r,minZ:a,maxZ:o}=e.bounds,l=(i+r)/2,c=(a+o)/2,u=3,d=new rt,h=[new C(i,t+.05,a),new C(r,t+.05,a),new C(r,t+.05,o),new C(i,t+.05,o),new C(i,t+.05,a)],m=new gt().setFromPoints(h),x=new js({color:16096779,linewidth:3}),S=new Jl(m,x);d.add(S),n.add(d);const f=this.createArrowMesh(1,.32,.5,this.goldArrowMat.clone());f.position.set(r+.15,t+1.2,c),f.rotation.z=-Math.PI/2,f.userData={isGizmo:!0,handleType:"room_push_pos_x",targetId:e.id},n.add(f);const p=this.createArrowMesh(1,.32,.5,this.goldArrowMat.clone());p.position.set(i-.15,t+1.2,c),p.rotation.z=Math.PI/2,p.userData={isGizmo:!0,handleType:"room_push_neg_x",targetId:e.id},n.add(p);const M=this.createArrowMesh(1,.32,.5,this.goldArrowMat.clone());M.position.set(l,t+1.2,o+.15),M.rotation.x=Math.PI/2,M.userData={isGizmo:!0,handleType:"room_push_pos_z",targetId:e.id},n.add(M);const w=this.createArrowMesh(1,.32,.5,this.goldArrowMat.clone());w.position.set(l,t+1.2,a-.15),w.rotation.x=-Math.PI/2,w.userData={isGizmo:!0,handleType:"room_push_neg_z",targetId:e.id},n.add(w);const v=this.createArrowMesh(1.2,.36,.55,this.goldArrowMat.clone());return v.position.set(l,t+u+.2,c),v.userData={isGizmo:!0,handleType:"room_height",targetId:e.id},n.add(v),this.gizmoGroup.add(n),n}buildWallGizmo(e,t){this.clear();const n=new rt;n.name=`Gizmo_Wall_${e.id}`;const i=(e.x1+e.x2)/2,r=(e.z1+e.z2)/2,a=e.x2-e.x1,o=e.z2-e.z1,l=Math.hypot(a,o),c=a/(l||1),d=-(o/(l||1)),h=c,m=this.createArrowMesh(.9,.28,.45,this.goldArrowMat.clone());m.position.set(i+d*.25,t+1.4,r+h*.25),m.rotation.y=-Math.atan2(h,d)+Math.PI/2,m.rotation.z=-Math.PI/2,m.userData={isGizmo:!0,handleType:"wall_push",targetId:e.id},n.add(m);const x=new as(.2,16,16),S=new P(x,this.goldArrowMat.clone());S.position.set(e.x1,t+1.4,e.z1),S.userData={isGizmo:!0,handleType:"wall_end_start",targetId:e.id},n.add(S);const f=new P(x,this.goldArrowMat.clone());return f.position.set(e.x2,t+1.4,e.z2),f.userData={isGizmo:!0,handleType:"wall_end_finish",targetId:e.id},n.add(f),this.gizmoGroup.add(n),n}clear(){for(;this.gizmoGroup.children.length>0;){const e=this.gizmoGroup.children[0];this.gizmoGroup.remove(e)}this.highlightedMesh=null}highlightHandle(e){this.highlightedMesh!==e&&(this.highlightedMesh&&this.highlightedMesh.material.emissive&&this.highlightedMesh.material.emissive.copy(this.originalColor),this.highlightedMesh=e,e&&e.material.emissive&&(this.originalColor.copy(e.material.emissive),e.material.emissive.setHex(440020)))}}class p0{constructor(e,t={}){this.animFrameId=0,this.isPaused=!1,this.viewMode="free",this.cameraTarget=new C(0,0,0),this.cameraSpherical=new su(28,Math.PI/3.5,Math.PI/4),this.isPointerDown=!1,this.pointerButton=-1,this.prevPointerX=0,this.prevPointerY=0,this.touchDistance=0,this.touchAngle=0,this.twoFingerPanStart=null,this.raycaster=new iu,this.pointer=new He,this.groundPlane=new kn(new C(0,1,0),0),this.currentFloor=1,this.toolMode="none",this.selectedCatalogItem=null,this.selectedObject=null,this.wallCutMode="cutaway",this.callbacks={},this.wallStartPoint=null,this.ghostWallGroup=new rt,this.ghostObjectGroup=null,this.ghostRotation=0,this.ghostPosition=new C,this.isPlacementValid=!0,this.terrainGroup=new rt,this.gridGroup=new rt,this.wallsGroup=new rt,this.roomsGroup=new rt,this.doorsGroup=new rt,this.windowsGroup=new rt,this.furnitureGroup=new rt,this.roofsGroup=new rt,this.selectionHelper=null,this.roofBuilder=new u0,this.gizmoSystem=new d0,this.showRoofs=!0,this.selectedRoof=null,this.selectedRoom=null,this.selectedWall=null,this.isDraggingGizmo=!1,this.activeGizmoHandle=null,this.activeGizmoTargetId=null,this.wallsData=[],this.roomsData=[],this.doorsData=[],this.windowsData=[],this.objectsData=[],this.roofsData=[],this.baseboardMat=new Me({color:16317180,roughness:.35}),this.crownMat=new Me({color:16777215,roughness:.3}),this.wallBuilder=new h0,this.renderFrame=()=>{this.isPaused||(this.animFrameId=requestAnimationFrame(this.renderFrame),this.selectionHelper&&this.selectionHelper.update(),this.renderer.render(this.scene,this.camera))},this.container=e,this.callbacks=t,this.scene=new Dh,this.scene.background=new Ne(10212580),this.scene.fog=new Ya(10212580,.012);const n=e.clientWidth/e.clientHeight||1;this.camera=new Yt(45,n,.5,200),this.updateCameraPosition(),this.renderer=new i0({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cl,e.appendChild(this.renderer.domElement);const i=new En(100,100);i.rotateX(-Math.PI/2);const r=new Wn({visible:!1});this.raycastPlaneMesh=new P(i,r),this.scene.add(this.raycastPlaneMesh),this.scene.add(this.terrainGroup),this.scene.add(this.gridGroup),this.scene.add(this.roomsGroup),this.scene.add(this.wallsGroup),this.scene.add(this.doorsGroup),this.scene.add(this.windowsGroup),this.scene.add(this.furnitureGroup),this.scene.add(this.roofsGroup),this.scene.add(this.gizmoSystem.gizmoGroup),this.scene.add(this.ghostWallGroup),this.setupLighting(),this.buildTerrain(),this.buildGrid(),this.bindEvents(),this.startAnimationLoop()}get cutawayMode(){return this.wallCutMode==="cutaway"}set cutawayMode(e){this.wallCutMode=e?"cutaway":"full",this.rebuildWalls()}setWallCutMode(e){this.wallCutMode=e,this.rebuildWalls()}setupLighting(){const e=new eu(16777215,.7);this.scene.add(e);const t=new jh(16775917,1.25);t.position.set(20,35,20),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=80;const n=16;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-3e-4,this.scene.add(t);const i=new $h(12313082,5930294,.45);i.position.set(0,40,0),this.scene.add(i)}buildTerrain(){this.terrainGroup.clear();const e=new En(36,36),t=new Me({map:o0(),roughness:.9,metalness:.05}),n=new P(e,t);n.rotation.x=-Math.PI/2,n.position.y=-.02,n.receiveShadow=!0,this.terrainGroup.add(n);const i=new Me({color:14078929,roughness:.9}),r=24,a=.4,o=.08,l=new P(new H(r+a,o,a),i);l.position.set(0,o/2,-r/2);const c=l.clone();c.position.z=r/2;const u=new P(new H(a,o,r),i);u.position.set(-r/2,o/2,0);const d=u.clone();d.position.x=r/2,this.terrainGroup.add(l,c,u,d);const h=new Me({color:4028462,roughness:.7});for(let m=-14;m<=14;m+=4)if(Math.abs(m)>2){const x=new P(new rs(.8,1),h);x.position.set(m,.7,-13.5),x.castShadow=!0,this.terrainGroup.add(x)}}buildGrid(){this.gridGroup.clear();const e=24,t=24,n=new ru(e,t,4227327,9741240);n.position.y=(this.currentFloor-1)*3+.01,n.material.opacity=.4,n.material.transparent=!0,n.name="gridHelper",this.gridGroup.add(n);const i=new En(1,1);i.rotateX(-Math.PI/2);const r=new Wn({color:3718648,opacity:.4,transparent:!0,side:Pt}),a=new P(i,r);a.name="cursorHighlight",a.visible=!1,this.gridGroup.add(a)}setFloor(e){this.currentFloor=Math.max(1,Math.min(3,e)),this.groundPlane.constant=-(this.currentFloor-1)*3,this.raycastPlaneMesh.position.y=(this.currentFloor-1)*3,this.buildGrid(),this.rebuildScene()}setToolMode(e,t=null){this.toolMode=e,this.selectedCatalogItem=t,this.wallStartPoint=null,this.removeGhostWall(),e==="furniture"||e==="door"||e==="window"?this.setGhostItem(t):this.setGhostItem(null),this.selectedObject&&e!=="none"&&this.highlightSelectedObject(null)}setCameraView(e){if(this.viewMode=e,e==="top")this.cameraSpherical.phi=.05,this.cameraSpherical.radius=Math.max(16,this.cameraSpherical.radius);else if(e==="iso"){this.cameraSpherical.phi=Math.PI/3.2;const t=Math.PI/2;this.cameraSpherical.theta=Math.round((this.cameraSpherical.theta-Math.PI/4)/t)*t+Math.PI/4}else this.cameraSpherical.phi=Math.min(Math.PI/2-.08,Math.max(.25,this.cameraSpherical.phi));this.updateCameraPosition()}setCallbacks(e){this.callbacks=e}setPaused(e){if(this.isPaused===e)return;if(this.isPaused=e,e){cancelAnimationFrame(this.animFrameId);return}const t=this.container.clientWidth,n=this.container.clientHeight;t>0&&n>0&&(this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()),this.animFrameId=requestAnimationFrame(this.renderFrame)}updateCameraPosition(){this.cameraSpherical.phi=Math.max(.05,Math.min(Math.PI/2-.05,this.cameraSpherical.phi)),this.cameraSpherical.radius=Math.max(8,Math.min(55,this.cameraSpherical.radius));const e=new C().setFromSpherical(this.cameraSpherical);if(this.camera.position.copy(this.cameraTarget).add(e),this.camera.lookAt(this.cameraTarget),this.wallCutMode==="cutaway"&&this.rebuildWalls(),this.selectedObject&&this.callbacks.onObjectPositionUpdate){const t=this.getScreenPositionForObject(this.selectedObject);t&&this.callbacks.onObjectPositionUpdate(this.selectedObject,t)}}getScreenPositionForObject(e){const t=new C(e.x,(e.floor-1)*3+.6,e.z);t.project(this.camera);const n=this.container.getBoundingClientRect(),i=(t.x+1)*n.width/2+n.left,r=(-t.y+1)*n.height/2+n.top;return{x:i,y:r}}syncData(e,t,n,i,r,a=[]){this.wallsData=e,this.roomsData=t,this.doorsData=n,this.windowsData=i,this.objectsData=r,this.roofsData=a,this.rebuildScene()}rebuildScene(){this.rebuildWalls(),this.rebuildRooms(),this.rebuildDoors(),this.rebuildWindows(),this.rebuildFurniture(),this.rebuildRoofs()}setShowRoofs(e){this.showRoofs=e,this.roofsGroup.visible=e,!e&&this.selectedRoof&&(this.selectedRoof=null,this.gizmoSystem.clear())}rebuildRoofs(){if(this.roofsGroup.clear(),!!this.showRoofs)for(const e of this.roofsData){if(e.floor>this.currentFloor)continue;const t=(e.floor-1)*3,n=this.roofBuilder.buildRoof(e,t);this.roofsGroup.add(n)}}selectRoof(e){if(this.selectedRoof=e,this.selectedRoom=null,this.selectedWall=null,this.highlightSelectedObject(null),e){const t=(e.floor-1)*3;this.gizmoSystem.buildRoofGizmo(e,t)}else this.gizmoSystem.clear()}selectRoom(e){if(this.selectedRoom=e,this.selectedRoof=null,this.selectedWall=null,this.highlightSelectedObject(null),e){const t=(e.floor-1)*3;this.gizmoSystem.buildRoomGizmo(e,t)}else this.gizmoSystem.clear()}selectWall(e){if(this.selectedWall=e,this.selectedRoof=null,this.selectedRoom=null,this.highlightSelectedObject(null),e){const t=(e.floor-1)*3;this.gizmoSystem.buildWallGizmo(e,t)}else this.gizmoSystem.clear()}clearSelection(){this.selectedRoof=null,this.selectedRoom=null,this.selectedWall=null,this.highlightSelectedObject(null),this.gizmoSystem.clear()}rebuildWalls(){this.wallsGroup.clear();const e=this.wallsData.filter(n=>n.floor<=this.currentFloor);if(e.length===0)return;const t=this.wallBuilder.build(e,this.doorsData,this.windowsData,{currentFloor:this.currentFloor,wallCutMode:this.wallCutMode,camera:this.camera,cameraTarget:this.cameraTarget});this.wallsGroup.add(t)}rebuildRooms(){this.roomsGroup.clear();for(const e of this.roomsData){if(e.floor>this.currentFloor||!e.cells||e.cells.length===0)continue;const t=c0(e.cells),n=s0(e.floorMaterial||"wood_oak"),i=new P(t,n);i.position.y=(e.floor-1)*3,i.receiveShadow=!0,i.renderOrder=2,i.userData={type:"room",data:e},this.roomsGroup.add(i)}}rebuildDoors(){this.doorsGroup.clear();for(const e of this.doorsData){if(e.floor>this.currentFloor)continue;const t=Al();t.position.set(e.x,(e.floor-1)*3,e.z),t.rotation.y=Ti.degToRad(e.rotation||0),t.userData={type:"door",data:e},this.doorsGroup.add(t)}}rebuildWindows(){this.windowsGroup.clear();for(const e of this.windowsData){if(e.floor>this.currentFloor)continue;const t=Rl();t.position.set(e.x,(e.floor-1)*3,e.z),t.rotation.y=Ti.degToRad(e.rotation||0),t.userData={type:"window",data:e},this.windowsGroup.add(t)}}rebuildFurniture(){this.furnitureGroup.clear();for(const e of this.objectsData){if(e.floor>this.currentFloor)continue;const t=Tl(e.type,e.colorVariant||0);t.position.set(e.x,(e.floor-1)*3,e.z),t.rotation.y=Ti.degToRad(e.rotation||0),t.userData={type:"furniture",data:e},this.furnitureGroup.add(t)}this.selectedObject&&this.highlightSelectedObject(this.selectedObject)}highlightSelectedObject(e){if(this.selectedObject=e,this.selectionHelper&&(this.scene.remove(this.selectionHelper),this.selectionHelper=null),!e)return;const t=this.furnitureGroup.children.find(n=>n.userData.type==="furniture"&&n.userData.data.id===e.id);t&&(this.selectionHelper=new au(t,3718648),this.scene.add(this.selectionHelper))}updateGhostWall(e,t,n,i){this.removeGhostWall();const r=(this.currentFloor-1)*3,a=new Me({color:3718648,transparent:!0,opacity:.65});if(this.toolMode==="wall_room"){const o=Math.min(e,n),l=Math.max(e,n),c=Math.min(t,i),u=Math.max(t,i),d=l-o,h=u-c;if(d<1||h<1){this.callbacks.onLengthUpdate&&this.callbacks.onLengthUpdate(null);return}const m=new H(d,2.8,.2),x=new P(m,a);x.position.set((o+l)/2,r+1.4,c),this.ghostWallGroup.add(x);const S=new H(d,2.8,.2),f=new P(S,a);f.position.set((o+l)/2,r+1.4,u),this.ghostWallGroup.add(f);const p=new H(.2,2.8,h),M=new P(p,a);M.position.set(o,r+1.4,(c+u)/2),this.ghostWallGroup.add(M);const w=new H(.2,2.8,h),v=new P(w,a);v.position.set(l,r+1.4,(c+u)/2),this.ghostWallGroup.add(v);const E=new En(d,h);E.rotateX(-Math.PI/2);const y=new Wn({color:3718648,transparent:!0,opacity:.25}),R=new P(E,y);R.position.set((o+l)/2,r+.02,(c+u)/2),this.ghostWallGroup.add(R),this.callbacks.onLengthUpdate&&this.callbacks.onLengthUpdate(Math.round(d),`${Math.round(d)}m × ${Math.round(h)}m`)}else{const o=Math.abs(n-e),l=Math.abs(i-t);let c=n,u=i;o>=l?u=t:c=e;const d=Math.hypot(c-e,u-t);if(d<.1){this.callbacks.onLengthUpdate&&this.callbacks.onLengthUpdate(null);return}const h=new H(d,2.8,.2),m=new P(h,a),x=Math.atan2(u-t,c-e);m.rotation.y=-x,m.position.set((e+c)/2,r+1.4,(t+u)/2),this.ghostWallGroup.add(m),this.callbacks.onLengthUpdate&&this.callbacks.onLengthUpdate(Math.round(d),`${Math.round(d)}m`)}}removeGhostWall(){for(;this.ghostWallGroup.children.length>0;){const e=this.ghostWallGroup.children[0];this.ghostWallGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}this.callbacks.onLengthUpdate&&this.callbacks.onLengthUpdate(null)}setGhostItem(e){if(this.selectedCatalogItem=e,this.ghostObjectGroup&&(this.scene.remove(this.ghostObjectGroup),this.ghostObjectGroup=null),!!e){if(e.type==="furniture")this.ghostObjectGroup=Tl(e.subType||"sofa");else if(e.type==="door")this.ghostObjectGroup=Al();else if(e.type==="window")this.ghostObjectGroup=Rl();else if(e.type==="roof"){const t={id:"ghost_roof",floor:this.currentFloor,type:e.roofType||"hipped",x:0,z:0,width:e.width||6,depth:e.depth||6,height:e.height||2.2,pitchCurve:0,overhang:.35,material:e.materialKey||"roof_shingle_dark",rotation:0};this.ghostObjectGroup=this.roofBuilder.buildRoof(t,0)}this.ghostObjectGroup&&(this.ghostObjectGroup.traverse(t=>{t instanceof P&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=.7)}),this.ghostObjectGroup.visible=!1,this.scene.add(this.ghostObjectGroup))}}rotateGhost(){this.ghostRotation=(this.ghostRotation+90)%360,this.ghostObjectGroup&&(this.ghostObjectGroup.rotation.y=Ti.degToRad(this.ghostRotation)),this.selectedObject&&(this.selectedObject.rotation=(this.selectedObject.rotation+90)%360,this.rebuildFurniture())}updateGhostObject(e){if(!this.ghostObjectGroup||!this.selectedCatalogItem)return;const t=(this.currentFloor-1)*3;let n=this.snapCoord(e.x,.5),i=this.snapCoord(e.z,.5);if(this.selectedCatalogItem.type==="door"||this.selectedCatalogItem.type==="window"){const r=this.findNearestWall(e.x,e.z);r?(n=r.x,i=r.z,this.ghostRotation=r.rotation,this.isPlacementValid=!0):this.isPlacementValid=!1}else{const r=fo(this.selectedCatalogItem.subType||"sofa"),a=this.ghostRotation/90%2!==0,o=(a?r.depth:r.width)/2,l=(a?r.width:r.depth)/2,c=11.5;let u=Math.abs(n)+o<=c&&Math.abs(i)+l<=c;if(u)for(const d of this.objectsData){if(d.floor!==this.currentFloor||this.selectedObject&&d.id===this.selectedObject.id)continue;const h=fo(d.type),m=d.rotation/90%2!==0,x=(m?h.depth:h.width)/2,S=(m?h.width:h.depth)/2;if(Math.abs(n-d.x)<o+x-.1&&Math.abs(i-d.z)<l+S-.1){u=!1;break}}this.isPlacementValid=u}this.ghostPosition.set(n,t,i),this.ghostObjectGroup.position.copy(this.ghostPosition),this.ghostObjectGroup.rotation.y=Ti.degToRad(this.ghostRotation),this.ghostObjectGroup.visible=!0,this.ghostObjectGroup.traverse(r=>{r instanceof P&&(this.isPlacementValid?r.material.color.setHex(2278750):r.material.color.setHex(15680580))})}findNearestWall(e,t,n=1.2){let i=n,r=null;for(const a of this.wallsData){if(a.floor!==this.currentFloor)continue;if(a.z1===a.z2){const l=Math.min(a.x1,a.x2),c=Math.max(a.x1,a.x2);if(e>=l-.2&&e<=c+.2){const u=Math.abs(t-a.z1);u<i&&(i=u,r={x:Math.round(e),z:a.z1,rotation:0,wall:a})}}else{const l=Math.min(a.z1,a.z2),c=Math.max(a.z1,a.z2);if(t>=l-.2&&t<=c+.2){const u=Math.abs(e-a.x1);u<i&&(i=u,r={x:a.x1,z:Math.round(t),rotation:90,wall:a})}}}return r}bindEvents(){const e=this.container;e.addEventListener("mousedown",this.onMouseDown.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("mouseup",this.onMouseUp.bind(this)),e.addEventListener("wheel",this.onWheel.bind(this),{passive:!1}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!1}),e.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!1}),e.addEventListener("touchend",this.onTouchEnd.bind(this)),window.addEventListener("resize",this.onWindowResize.bind(this))}onMouseDown(e){var t,n;if(this.isPointerDown=!0,this.pointerButton=e.button,this.prevPointerX=e.clientX,this.prevPointerY=e.clientY,e.button===0){const i=this.container.getBoundingClientRect();this.pointer.x=(e.clientX-i.left)/i.width*2-1,this.pointer.y=-((e.clientY-i.top)/i.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=this.raycaster.intersectObjects(this.gizmoSystem.gizmoGroup.children,!0);if(r.length>0){let o=r[0].object;for(;o&&!((t=o.userData)!=null&&t.isGizmo)&&o.parent&&o.parent!==this.gizmoSystem.gizmoGroup;)o=o.parent;if(o&&((n=o.userData)!=null&&n.isGizmo)){this.isDraggingGizmo=!0,this.activeGizmoHandle=o.userData.handleType,this.activeGizmoTargetId=o.userData.targetId;return}}const a=this.getIntersection(e);if(!a)return;if(this.toolMode==="wall"||this.toolMode==="wall_continuous"||this.toolMode==="wall_room"){const o=this.snapCoord(a.x),l=this.snapCoord(a.z);this.wallStartPoint={x:o,z:l}}else(this.toolMode==="none"||this.toolMode==="delete"||this.toolMode==="floor_paint"||this.toolMode==="wall_paint"||this.toolMode==="roof_paint"||this.toolMode==="select_room"||this.toolMode==="select_wall")&&this.handleClickInteraction(e)}}onMouseMove(e){var i,r,a,o,l,c,u,d,h,m,x,S,f,p;const t=this.getIntersection(e),n=this.gridGroup.getObjectByName("cursorHighlight");if(n&&t&&(n.position.set(Math.floor(t.x)+.5,(this.currentFloor-1)*3+.015,Math.floor(t.z)+.5),n.visible=!0),!this.isPointerDown){const M=this.container.getBoundingClientRect();this.pointer.x=(e.clientX-M.left)/M.width*2-1,this.pointer.y=-((e.clientY-M.top)/M.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const w=this.raycaster.intersectObjects(this.gizmoSystem.gizmoGroup.children,!0);if(w.length>0){let v=w[0].object;for(;v&&!((i=v.userData)!=null&&i.isGizmo)&&v.parent&&v.parent!==this.gizmoSystem.gizmoGroup;)v=v.parent;v&&((r=v.userData)!=null&&r.isGizmo)?(this.gizmoSystem.highlightHandle(w[0].object),this.container.style.cursor="grab"):(this.gizmoSystem.highlightHandle(null),this.container.style.cursor="default")}else this.gizmoSystem.highlightHandle(null),this.container.style.cursor="default"}if(this.isPointerDown){const M=e.clientX-this.prevPointerX,w=e.clientY-this.prevPointerY;if(this.prevPointerX=e.clientX,this.prevPointerY=e.clientY,this.isDraggingGizmo&&this.activeGizmoHandle&&this.activeGizmoTargetId){const v=this.roofsData.find(R=>R.id===this.activeGizmoTargetId);if(v){this.activeGizmoHandle==="roof_height"?v.height=Math.max(.6,Math.min(4.5,v.height-w*.025)):this.activeGizmoHandle==="roof_width_pos"?v.width=Math.max(2,Math.min(24,v.width+M*.05)):this.activeGizmoHandle==="roof_width_neg"?v.width=Math.max(2,Math.min(24,v.width-M*.05)):this.activeGizmoHandle==="roof_depth_pos"?v.depth=Math.max(2,Math.min(24,v.depth+w*.05)):this.activeGizmoHandle==="roof_depth_neg"?v.depth=Math.max(2,Math.min(24,v.depth-w*.05)):this.activeGizmoHandle==="roof_curve"&&(v.pitchCurve=Math.max(-.8,Math.min(.8,v.pitchCurve-w*.02))),this.rebuildRoofs(),this.gizmoSystem.buildRoofGizmo(v,(v.floor-1)*3),this.callbacks.onRoofUpdated&&this.callbacks.onRoofUpdated(v);return}const E=this.roomsData.find(R=>R.id===this.activeGizmoTargetId);if(E){if(this.activeGizmoHandle==="room_push_pos_x"){const R=Math.sign(M);if(Math.abs(M)>15){const g=E.bounds.maxX+R;g-E.bounds.minX>=2&&g<=12&&(E.bounds.maxX=g,(o=(a=this.callbacks).onRoomResized)==null||o.call(a,E,E.bounds),this.gizmoSystem.buildRoomGizmo(E,(E.floor-1)*3))}}else if(this.activeGizmoHandle==="room_push_neg_x"){const R=Math.sign(M);if(Math.abs(M)>15){const g=E.bounds.minX+R;E.bounds.maxX-g>=2&&g>=-12&&(E.bounds.minX=g,(c=(l=this.callbacks).onRoomResized)==null||c.call(l,E,E.bounds),this.gizmoSystem.buildRoomGizmo(E,(E.floor-1)*3))}}else if(this.activeGizmoHandle==="room_push_pos_z"){const R=Math.sign(w);if(Math.abs(w)>15){const g=E.bounds.maxZ+R;g-E.bounds.minZ>=2&&g<=12&&(E.bounds.maxZ=g,(d=(u=this.callbacks).onRoomResized)==null||d.call(u,E,E.bounds),this.gizmoSystem.buildRoomGizmo(E,(E.floor-1)*3))}}else if(this.activeGizmoHandle==="room_push_neg_z"){const R=Math.sign(w);if(Math.abs(w)>15){const g=E.bounds.minZ+R;E.bounds.maxZ-g>=2&&g>=-12&&(E.bounds.minZ=g,(m=(h=this.callbacks).onRoomResized)==null||m.call(h,E,E.bounds),this.gizmoSystem.buildRoomGizmo(E,(E.floor-1)*3))}}return}const y=this.wallsData.find(R=>R.id===this.activeGizmoTargetId);if(y&&this.activeGizmoHandle==="wall_push"){const R=y.z1===y.z2;if(R&&Math.abs(w)>12){const g=Math.sign(w);y.z1+=g,y.z2+=g,this.rebuildWalls(),this.gizmoSystem.buildWallGizmo(y,(y.floor-1)*3),(S=(x=this.callbacks).onWallResized)==null||S.call(x,y,{z1:y.z1,z2:y.z2})}else if(!R&&Math.abs(M)>12){const g=Math.sign(M);y.x1+=g,y.x2+=g,this.rebuildWalls(),this.gizmoSystem.buildWallGizmo(y,(y.floor-1)*3),(p=(f=this.callbacks).onWallResized)==null||p.call(f,y,{x1:y.x1,x2:y.x2})}return}}if(this.pointerButton===2||this.pointerButton===0&&e.altKey)this.cameraSpherical.theta-=M*.008,this.cameraSpherical.phi-=w*.008,this.updateCameraPosition();else if(this.pointerButton===1||this.pointerButton===0&&e.shiftKey)this.panCamera(M,w);else if(this.pointerButton===0&&(this.toolMode==="wall"||this.toolMode==="wall_continuous"||this.toolMode==="wall_room")&&this.wallStartPoint&&t){const v=this.snapCoord(t.x),E=this.snapCoord(t.z);this.updateGhostWall(this.wallStartPoint.x,this.wallStartPoint.z,v,E)}}else t&&this.ghostObjectGroup&&this.updateGhostObject(t)}onMouseUp(e){if(this.isDraggingGizmo&&(this.isDraggingGizmo=!1,this.activeGizmoHandle=null,this.activeGizmoTargetId=null),!!this.isPointerDown&&(this.isPointerDown=!1,e.button===0)){const t=this.getIntersection(e);if((this.toolMode==="wall"||this.toolMode==="wall_continuous"||this.toolMode==="wall_room")&&this.wallStartPoint&&t){const n=this.snapCoord(t.x),i=this.snapCoord(t.z);if(this.toolMode==="wall_room"){const r=Math.min(this.wallStartPoint.x,n),a=Math.max(this.wallStartPoint.x,n),o=Math.min(this.wallStartPoint.z,i),l=Math.max(this.wallStartPoint.z,i);if(a-r>=1&&l-o>=1){const c=[{x1:r,z1:o,x2:a,z2:o},{x1:a,z1:o,x2:a,z2:l},{x1:a,z1:l,x2:r,z2:l},{x1:r,z1:l,x2:r,z2:o}];this.callbacks.onWallsCreatedBatch&&this.callbacks.onWallsCreatedBatch(c)}this.wallStartPoint=null,this.removeGhostWall()}else{const r=Math.abs(n-this.wallStartPoint.x),a=Math.abs(i-this.wallStartPoint.z),o=r>=a?n:this.wallStartPoint.x,l=r>=a?this.wallStartPoint.z:i;if(Math.hypot(o-this.wallStartPoint.x,l-this.wallStartPoint.z)>=1){const u={x1:this.wallStartPoint.x,z1:this.wallStartPoint.z,x2:o,z2:l};if(this.callbacks.onWallCreated&&this.callbacks.onWallCreated(u),this.toolMode==="wall_continuous"){this.wallStartPoint={x:o,z:l},this.removeGhostWall();return}}this.wallStartPoint=null,this.removeGhostWall()}}else(this.toolMode==="furniture"||this.toolMode==="door"||this.toolMode==="window"||this.toolMode==="roof")&&this.isPlacementValid&&this.selectedCatalogItem&&t&&this.confirmObjectPlacement()}}onWheel(e){e.preventDefault(),this.cameraSpherical.radius+=e.deltaY*.025,this.updateCameraPosition()}onTouchStart(e){if(e.preventDefault(),e.touches.length===1){const t=e.touches[0];this.isPointerDown=!0,this.pointerButton=0,this.prevPointerX=t.clientX,this.prevPointerY=t.clientY;const n=this.getIntersection({clientX:t.clientX,clientY:t.clientY});if(!n)return;if(this.toolMode==="wall"||this.toolMode==="wall_continuous"||this.toolMode==="wall_room"){const i=this.snapCoord(n.x),r=this.snapCoord(n.z);this.wallStartPoint={x:i,z:r}}else this.toolMode==="furniture"||this.toolMode==="door"||this.toolMode==="window"?this.updateGhostObject(n):this.handleClickInteraction({clientX:t.clientX,clientY:t.clientY})}else if(e.touches.length===2){const t=e.touches[0],n=e.touches[1];this.touchDistance=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),this.touchAngle=Math.atan2(n.clientY-t.clientY,n.clientX-t.clientX),this.twoFingerPanStart={x:(t.clientX+n.clientX)/2,y:(t.clientY+n.clientY)/2},this.wallStartPoint=null,this.removeGhostWall()}}onTouchMove(e){if(e.preventDefault(),e.touches.length===1&&this.isPointerDown){const t=e.touches[0],n=this.getIntersection({clientX:t.clientX,clientY:t.clientY});if((this.toolMode==="wall"||this.toolMode==="wall_continuous"||this.toolMode==="wall_room")&&this.wallStartPoint&&n){const i=this.snapCoord(n.x),r=this.snapCoord(n.z);this.updateGhostWall(this.wallStartPoint.x,this.wallStartPoint.z,i,r)}else if(this.ghostObjectGroup&&n)this.updateGhostObject(n);else if(this.toolMode==="none"){const i=t.clientX-this.prevPointerX,r=t.clientY-this.prevPointerY;this.prevPointerX=t.clientX,this.prevPointerY=t.clientY,this.cameraSpherical.theta-=i*.008,this.cameraSpherical.phi-=r*.008,this.updateCameraPosition()}}else if(e.touches.length===2){const t=e.touches[0],n=e.touches[1],i=Math.hypot(n.clientX-t.clientX,n.clientY-t.clientY),r=i-this.touchDistance;this.touchDistance=i,this.cameraSpherical.radius-=r*.06;const a=Math.atan2(n.clientY-t.clientY,n.clientX-t.clientX),o=a-this.touchAngle;if(this.touchAngle=a,this.cameraSpherical.theta-=o*.8,this.twoFingerPanStart){const l=(t.clientX+n.clientX)/2,c=(t.clientY+n.clientY)/2,u=l-this.twoFingerPanStart.x,d=c-this.twoFingerPanStart.y;this.twoFingerPanStart={x:l,y:c},this.panCamera(u,d)}this.updateCameraPosition()}}onTouchEnd(e){e.touches.length===0&&(this.isPointerDown&&(this.toolMode==="wall"||this.toolMode==="wall_continuous"||this.toolMode==="wall_room")&&this.wallStartPoint?(this.toolMode==="wall_room"&&this.ghostWallGroup.children.length>0,this.wallStartPoint=null,this.removeGhostWall()):(this.toolMode==="furniture"||this.toolMode==="door"||this.toolMode==="window")&&this.isPlacementValid&&this.selectedCatalogItem&&this.confirmObjectPlacement(),this.isPointerDown=!1,this.twoFingerPanStart=null)}confirmObjectPlacement(){const e=this.selectedCatalogItem;e&&(e.type==="furniture"&&this.callbacks.onObjectPlaced?this.callbacks.onObjectPlaced({type:e.subType||"sofa",name:e.name,x:this.ghostPosition.x,z:this.ghostPosition.z,rotation:this.ghostRotation}):e.type==="door"&&this.callbacks.onDoorPlaced?this.callbacks.onDoorPlaced({x:this.ghostPosition.x,z:this.ghostPosition.z,rotation:this.ghostRotation}):e.type==="window"&&this.callbacks.onWindowPlaced?this.callbacks.onWindowPlaced({x:this.ghostPosition.x,z:this.ghostPosition.z,rotation:this.ghostRotation}):e.type==="roof"&&this.callbacks.onRoofPlaced&&this.callbacks.onRoofPlaced({type:e.roofType||"hipped",x:this.ghostPosition.x,z:this.ghostPosition.z,width:e.width||6,depth:e.depth||6,height:e.height||2.2,material:e.materialKey||"roof_shingle_dark"}))}handleClickInteraction(e){var l,c,u,d,h,m,x,S;const t=this.container.getBoundingClientRect();if(this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.showRoofs){const f=this.raycaster.intersectObjects(this.roofsGroup.children,!0);if(f.length>0){let p=f[0].object;for(;p&&(!p.userData||p.userData.type!=="roof")&&p.parent&&p.parent!==this.roofsGroup;)p=p.parent;if(p&&((l=p.userData)==null?void 0:l.type)==="roof"){const M=p.userData.data;this.toolMode==="delete"?this.callbacks.onItemDeleted&&(this.callbacks.onItemDeleted("roof",M.id),this.gizmoSystem.clear()):this.toolMode==="roof_paint"&&((c=this.selectedCatalogItem)!=null&&c.materialKey)?(M.material=this.selectedCatalogItem.materialKey,this.rebuildRoofs(),(d=(u=this.callbacks).onRoofUpdated)==null||d.call(u,M)):(this.selectRoof(M),this.callbacks.onRoofClicked&&this.callbacks.onRoofClicked(M));return}}}const n=this.raycaster.intersectObjects(this.furnitureGroup.children,!0);if(n.length>0){let f=n[0].object;for(;f&&f.parent&&f.parent!==this.furnitureGroup&&!(f.userData&&f.userData.type==="furniture");)f=f.parent;if(f&&f.userData.type==="furniture"){const p=f.userData.data;this.toolMode==="delete"?this.callbacks.onItemDeleted&&this.callbacks.onItemDeleted("object",p.id):(this.highlightSelectedObject(p),this.callbacks.onObjectSelected&&this.callbacks.onObjectSelected(p,{x:e.clientX,y:e.clientY}));return}}const i=this.raycaster.intersectObjects(this.doorsGroup.children,!0);if(i.length>0){let f=i[0].object;for(;f&&f.parent&&f.parent!==this.doorsGroup&&!(f.userData&&f.userData.type==="door");)f=f.parent;if(f&&f.userData.type==="door"){const p=f.userData.data;this.toolMode==="delete"&&this.callbacks.onItemDeleted&&this.callbacks.onItemDeleted("door",p.id);return}}const r=this.raycaster.intersectObjects(this.windowsGroup.children,!0);if(r.length>0){let f=r[0].object;for(;f&&f.parent&&f.parent!==this.windowsGroup&&!(f.userData&&f.userData.type==="window");)f=f.parent;if(f&&f.userData.type==="window"){const p=f.userData.data;this.toolMode==="delete"&&this.callbacks.onItemDeleted&&this.callbacks.onItemDeleted("window",p.id);return}}const a=this.raycaster.intersectObjects(this.wallsGroup.children,!0);if(a.length>0){let f=a[0].object;for(;f&&f.parent&&f.parent!==this.wallsGroup&&!(f.userData&&f.userData.type==="wall");)f=f.parent;if(f&&f.userData&&f.userData.type==="wall"){const p=f.userData.data;this.toolMode==="delete"?this.callbacks.onItemDeleted&&(this.callbacks.onItemDeleted("wall",p.id),this.gizmoSystem.clear()):this.toolMode==="wall_paint"&&((h=this.selectedCatalogItem)!=null&&h.materialKey)?this.callbacks.onWallClicked&&this.callbacks.onWallClicked(p):(this.selectWall(p),this.callbacks.onWallClicked&&this.callbacks.onWallClicked(p));return}}const o=this.raycaster.intersectObjects(this.roomsGroup.children,!0);if(o.length>0){let f=o[0].object;for(;f&&(!f.userData||f.userData.type!=="room")&&f.parent&&f.parent!==this.roomsGroup;)f=f.parent;const p=((m=f==null?void 0:f.userData)==null?void 0:m.data)||o[0].object.userData.data;if(p){this.toolMode==="floor_paint"&&((x=this.selectedCatalogItem)!=null&&x.materialKey)?this.callbacks.onRoomClicked&&this.callbacks.onRoomClicked(p):(this.selectRoom(p),this.callbacks.onRoomClicked&&this.callbacks.onRoomClicked(p));return}}if(this.toolMode==="floor_paint"){const f=this.raycaster.intersectObject(this.raycastPlaneMesh,!1);if(f.length>0){const p=f[0].point,M=Math.floor(p.x),w=Math.floor(p.z),v=this.roomsData.find(E=>E.floor===this.currentFloor&&E.cells&&E.cells.some(y=>y.x===M&&y.z===w));if(v&&this.callbacks.onRoomClicked){this.callbacks.onRoomClicked(v);return}else if(this.callbacks.onFloorTilePlaced&&((S=this.selectedCatalogItem)!=null&&S.materialKey)){this.callbacks.onFloorTilePlaced({x:M,z:w,floor:this.currentFloor,material:this.selectedCatalogItem.materialKey});return}}}this.clearSelection(),this.callbacks.onObjectSelected&&this.callbacks.onObjectSelected(null)}panCamera(e,t){const i=new C(1,0,0).applyQuaternion(this.camera.quaternion);i.y=0,i.normalize();const r=new C(0,0,-1).applyQuaternion(this.camera.quaternion);r.y=0,r.normalize(),this.cameraTarget.addScaledVector(i,-e*.025),this.cameraTarget.addScaledVector(r,t*.025),this.cameraTarget.x=Math.max(-18,Math.min(18,this.cameraTarget.x)),this.cameraTarget.z=Math.max(-18,Math.min(18,this.cameraTarget.z)),this.updateCameraPosition()}onWindowResize(){if(!this.container)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}snapCoord(e,t=1){return Math.round(e/t)*t}getIntersection(e){const t=this.container.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.raycaster.intersectObject(this.raycastPlaneMesh);return n.length>0?n[0].point:null}startAnimationLoop(){this.animFrameId=requestAnimationFrame(this.renderFrame)}dispose(){cancelAnimationFrame(this.animFrameId),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}}export{p0 as ThreeSimsEngine};
