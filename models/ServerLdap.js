'use strict';const a29_0x28dd63=a29_0x33a6;(function(_0x100d0a,_0x1a8b19){const _0x432a28=a29_0x33a6,_0x5ae2d4=_0x100d0a();while(!![]){try{const _0x1a4aa7=parseInt(_0x432a28(0x1f3))/0x1+parseInt(_0x432a28(0x1fc))/0x2*(parseInt(_0x432a28(0x1f4))/0x3)+parseInt(_0x432a28(0x1e7))/0x4*(parseInt(_0x432a28(0x1f2))/0x5)+-parseInt(_0x432a28(0x1f7))/0x6*(-parseInt(_0x432a28(0x1e9))/0x7)+parseInt(_0x432a28(0x1fe))/0x8+parseInt(_0x432a28(0x1f1))/0x9+-parseInt(_0x432a28(0x1fb))/0xa*(parseInt(_0x432a28(0x1e8))/0xb);if(_0x1a4aa7===_0x1a8b19)break;else _0x5ae2d4['push'](_0x5ae2d4['shift']());}catch(_0x5ea676){_0x5ae2d4['push'](_0x5ae2d4['shift']());}}}(a29_0xaad2,0x94197));function a29_0xaad2(){const _0x31e5f1=['648581hFQyYr','153mfMaKB','dnuser','mongoose','1703976wHrGrA','ObjectId','encryption','ServerLdap','36052490usWVfa','43374hsMUnn','password','2526584nPvRpj','3401080vKTdBT','11YmXeFG','28syyjsx','ServerLdapInterface','port','Schema','host','defineProperty','Types','dnbase','1396521KPapEG','5OkGkaX'];a29_0xaad2=function(){return _0x31e5f1;};return a29_0xaad2();}Object[a29_0x28dd63(0x1ee)](exports,'__esModule',{'value':!![]}),exports[a29_0x28dd63(0x1fa)]=exports[a29_0x28dd63(0x1ea)]=void 0x0;const mongoose_1=require(a29_0x28dd63(0x1f6));function a29_0x33a6(_0x4dd791,_0x52f93b){const _0xaad236=a29_0xaad2();return a29_0x33a6=function(_0x33a698,_0x4a25b4){_0x33a698=_0x33a698-0x1e7;let _0x5b83fa=_0xaad236[_0x33a698];return _0x5b83fa;},a29_0x33a6(_0x4dd791,_0x52f93b);}class ServerLdapInterface{constructor(_0x198809){const _0x2eb76b=a29_0x28dd63;this[_0x2eb76b(0x1ed)]=_0x198809[_0x2eb76b(0x1ed)],this[_0x2eb76b(0x1eb)]=_0x198809[_0x2eb76b(0x1eb)],this['dnbase']=_0x198809[_0x2eb76b(0x1f0)],this[_0x2eb76b(0x1f5)]=_0x198809[_0x2eb76b(0x1f5)],this['encryption']=_0x198809[_0x2eb76b(0x1f9)],this['password']=_0x198809[_0x2eb76b(0x1fd)];}}exports[a29_0x28dd63(0x1ea)]=ServerLdapInterface;const schema=new mongoose_1[(a29_0x28dd63(0x1ec))]({'host':{'type':String,'required':!![],'unique':!![]},'port':{'type':Number,'required':!![]},'dnbase':{'type':String,'required':!![]},'dnuser':{'type':String,'required':!![]},'encryption':{'type':String,'required':!![]},'password':{'type':String,'required':!![]},'proxyservers':[{'type':mongoose_1[a29_0x28dd63(0x1ec)][a29_0x28dd63(0x1ef)][a29_0x28dd63(0x1f8)],'ref':'Server'}]},{'versionKey':![],'timestamps':!![]});exports[a29_0x28dd63(0x1fa)]=mongoose_1['model']('ServerLdap',schema);