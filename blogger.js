// BloggerJS (c) Kenny Cruz
var _0x14ac=['type','substr','../../','rel','entry','apiKey','href','.html','#max-results=150#orderby=published#alt=json-in-script#callback=parseData','head','posts','hostname','substring','feed','pages','pathname','createElement','https://www.googleapis.com/blogger/v3/blogs/','../','nextPageToken','length','forEach','link','indexOf','getElementsByTagName','script','location','&amp;','?key=','items','AIzaSyAiGHFipChX5C8uTSDcU8EefA9vKulwim4','url','alternate','replaceState','/summary?start-index=','accessOnly','#pageToken=','useApiV3','push','#maxResults=500#fields=nextPageToken%2Citems(url)#callback=parseData','openSearch$totalResults','/feeds/','search'];(function(_0x2f9d7e,_0x14ac0f){var _0x1cb476=function(_0x4c18df){while(--_0x4c18df){_0x2f9d7e['push'](_0x2f9d7e['shift']());}};_0x1cb476(++_0x14ac0f);}(_0x14ac,0x12c));var _0x1cb4=function(_0x2f9d7e,_0x14ac0f){_0x2f9d7e=_0x2f9d7e-0x0;var _0x1cb476=_0x14ac[_0x2f9d7e];return _0x1cb476;};var config={'postsDatePrefix':![],'accessOnly':![],'useApiV3':!![],'apiKey':_0x1cb4('0x1f')},postsOrPages=[_0x1cb4('0xf'),_0x1cb4('0xb')],blogId='<data:blog.blogId/>',urlTotal,fetchIndex=0x1,ampChar=_0x1cb4('0x1c')[0x0],secondRequest=!0x0,feedPriority=0x0,nextPageToken;function urlVal(){var _0x29be17=window[_0x1cb4('0x1b')]['pathname'],_0x3cdc42=_0x29be17[_0x1cb4('0x15')],_0x448396=_0x29be17[_0x1cb4('0xd')](_0x3cdc42-0x5);if(_0x448396===_0x1cb4('0x8'))return 0x0;else{if(_0x3cdc42>0x1)return 0x1;else return 0x2;}}function urlMod(){var _0x4d5d1a=window[_0x1cb4('0x1b')]['pathname'];if(_0x4d5d1a[_0x1cb4('0xd')](0x1,0x2)==='p')_0x4d5d1a=_0x4d5d1a['substring'](_0x4d5d1a[_0x1cb4('0x18')]('/',0x1)+0x1),_0x4d5d1a=_0x4d5d1a[_0x1cb4('0x2')](0x0,_0x4d5d1a[_0x1cb4('0x18')](_0x1cb4('0x8'))),history['replaceState'](null,null,_0x1cb4('0x13')+_0x4d5d1a);else{if(!config['postsDatePrefix'])_0x4d5d1a=_0x4d5d1a[_0x1cb4('0xd')](_0x4d5d1a['indexOf']('/',0x7)+0x1);else _0x4d5d1a=_0x4d5d1a['substring'](0x1);_0x4d5d1a=_0x4d5d1a[_0x1cb4('0x2')](0x0,_0x4d5d1a[_0x1cb4('0x18')](_0x1cb4('0x8'))),history[_0x1cb4('0x22')](null,null,_0x1cb4('0x3')+_0x4d5d1a);}}function urlSearch(_0x2243ac,_0x638daa){var _0x1413ab=_0x2243ac+_0x1cb4('0x8');_0x638daa[_0x1cb4('0x16')](function(_0x29185c){var _0x57084c=_0x29185c[_0x1cb4('0x0')](_0x1413ab);if(_0x57084c!==-0x1)window[_0x1cb4('0x1b')]=_0x29185c;});}function urlManager(){var _0x574bf1=urlVal();if(_0x574bf1===0x0){if(!config[_0x1cb4('0x24')])urlMod();}else{if(_0x574bf1===0x1)fetchData(postsOrPages[feedPriority],0x1);else{if(_0x574bf1===0x2){if(!config[_0x1cb4('0x24')])history[_0x1cb4('0x22')](null,null,'/');}}}}function fetchData(_0x4373e9,_0x5c04eb){var _0x1957b8=document[_0x1cb4('0x11')](_0x1cb4('0x1a'));if(config['useApiV3']){var _0x46d4b9=_0x1cb4('0x12')+blogId+'/'+_0x4373e9+_0x1cb4('0x1d')+config[_0x1cb4('0x6')]+_0x1cb4('0x28');if(nextPageToken)_0x46d4b9+=_0x1cb4('0x25')+nextPageToken;nextPageToken=undefined;}else var _0x46d4b9=window['location']['protocol']+'//'+window[_0x1cb4('0x1b')][_0x1cb4('0xc')]+_0x1cb4('0x2a')+_0x4373e9+_0x1cb4('0x23')+_0x5c04eb+_0x1cb4('0x9');_0x46d4b9=_0x46d4b9['replace'](/#/g,ampChar),_0x1957b8[_0x1cb4('0x1')]='text/javascript',_0x1957b8['src']=_0x46d4b9,document[_0x1cb4('0x19')](_0x1cb4('0xa'))[0x0]['appendChild'](_0x1957b8);}function parseData(_0x380504){var _0x3a5052=[];if(!config[_0x1cb4('0x26')]){!urlTotal&&(urlTotal=parseInt(_0x380504[_0x1cb4('0xe')][_0x1cb4('0x29')]['$t']));try{_0x380504[_0x1cb4('0xe')]['entry'][_0x1cb4('0x16')](function(_0x2574cc,_0x5d598a){var _0x45b52d=_0x380504[_0x1cb4('0xe')][_0x1cb4('0x5')][_0x5d598a];_0x45b52d[_0x1cb4('0x17')][_0x1cb4('0x16')](function(_0x3c1de5,_0xd59cff){if(_0x45b52d[_0x1cb4('0x17')][_0xd59cff][_0x1cb4('0x4')]===_0x1cb4('0x21'))_0x3a5052[_0x1cb4('0x27')](_0x45b52d[_0x1cb4('0x17')][_0xd59cff][_0x1cb4('0x7')]);});});}catch(_0x1d145c){}}else{try{_0x380504[_0x1cb4('0x1e')]['forEach'](function(_0x4eb1f3,_0x5a8870){_0x3a5052['push'](_0x4eb1f3[_0x1cb4('0x20')]);});}catch(_0x48eacc){}nextPageToken=_0x380504[_0x1cb4('0x14')];}urlSearch(window[_0x1cb4('0x1b')][_0x1cb4('0x10')],_0x3a5052);if(urlTotal>0x96)fetchIndex+=0x96,urlTotal-=0x96,fetchData(postsOrPages[feedPriority],fetchIndex);else{if(nextPageToken)fetchData(postsOrPages[feedPriority]);else{if(secondRequest){nextPageToken=undefined,urlTotal=0x0,fetchIndex=0x1,secondRequest=!0x1;if(feedPriority===0x0)feedPriority=0x1,fetchData(_0x1cb4('0xb'),0x1);else feedPriority===0x1&&(feedPriority=0x0,fetchData(_0x1cb4('0xf'),0x1));}}}}function bloggerJS(_0x31d319){if(_0x31d319)feedPriority=_0x31d319;urlManager();}bloggerJS();
const uri = window.location.toString();if (uri.indexOf("?m=1","?m=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}