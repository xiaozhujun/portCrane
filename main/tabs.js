      function showtab(n,count,url){
        parent.info.location.href=url;
        for(var i=1;i<=count;i++){
          if (i==n){                        
            getObject('tab'+i).style.display='block';
          } else {
            getObject('tab'+i).style.display='none';
          }
        }
      }   

      function getObject(objectId) {
        if(document.getElementById && document.getElementById(objectId)) {
          return document.getElementById(objectId);
        } else if (document.all && document.all(objectId)) {
          return document.all(objectId);
        } else if (document.layers && document.layers[objectId]) {
          return document.layers[objectId];
        } else {
          return false;
        }
      }