if (!window.CROSS) {
  CROSS = {};
  (function($){
      $.extend = function(dest, src, skipexist){
          var overwrite = !skipexist; 
          for (var i in src) 
              if (overwrite || !dest.hasOwnProperty(i)) dest[i] = src[i];
          return dest;
      }
        
      $.extend($, {
          addTo : function(html){
              var x = document.body;
              var div = document.createElement('div');        
              div.innerHTML = html.join('');    
              while (div.childNodes.length > 0) x.appendChild(div.childNodes[0]);
              return x;
          },
          
          remove : function(el){
              el.parentNode.removeChild(el)
          },
      
          genId : function(){
            return 'genid_' + ($.lastGenId ? ++$.lastGenId : $.lastGenId=1);
          }
      })      
  })(CROSS)
}
(function($){

  function iframe(id){
    return '<iframe style="display:none" onload="CROSS.XSS.onload(this)" src="javascript:true" id="'+id+'" name="'+id+'" style="display:none"></iframe>';
  }
  var finish = {};
  $.extend($, {
      XSS : {
          version : 'CROSS XSS v0.9 beta (build 1)',
          onload : function(iframe){
              var window = iframe.contentWindow;
              try{
                  if (!iframe.xss && window.location == 'about:blank') return;
              } catch (ex){}
              if (iframe.xss) return $.XSS.getData(iframe); else window.location = 'about:blank';
              iframe.xss = 1;
          },
          getData : function(iframe){
              var func = finish[iframe.id];
              if (func) {
                  func(iframe.contentWindow.name);
                  delete finish[iframe.id];
              } 
              setTimeout(function(){$.remove(iframe)}, 0)
              return;
          },
          post : function(url, data, callback){
              var id = $.genId();
              finish[id] = callback;
              var html = [iframe(id), '<form method="post" action="'+url+'" target="'+id+'" style="display:none">'];
              for (var i = 0, arr = data.split('&'), l = arr.length; i < l; i++){
                  var val = arr[i].split('=');
                  html.push('<input name="'+val[0]+'" value="'+val[1]+'"/>');
              }
              html.push('</form>');
              var form = $.addTo(html).lastChild;
              form.submit();
              $.remove(form);
          } 
      }
  })
})(CROSS);