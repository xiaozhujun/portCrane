      function RealGraphDrawer (target,data) {
        this.drawGraph = function(sensorValue){
          RGraph.Clear(document.getElementById(target));
          RGraph.ObjectRegistry.Clear();
          if(sensorValue==null){
             sensorValue = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          }
          data = sensorValue.concat(data);
          for (var i = 0; i < sensorValue.length; i++) {
                data.pop();
          };

          var YMax = arrrayMax(data);
          if(YMax<5){
              YMax=5;
          }
          var line = new RGraph.Line(target, data)
              .Set('colors', ['green'])
              .Set('linewidth', 1)
              .Set('filled', true)
              .Set('fillstyle', 'rgba(128,255,128,0.5)')
              .Set('ymax', YMax)
              .Set('gutter.left', 50)
              .Set('xaxispos', 'center')
              .Set('numxticks', 5)
              .Set('labels', ['Now','10','20','30','40','50','60'])
              .Draw();
              //alert(target+":"+sensorValue);

        };
      }

      function arrrayMax(data){
          var max = data[0];
          var min = data[0];
          var length = data.length;
          for(i=0;i<length;i++){
              if(data[i]>max){
                  max=data[i];
              }

              if(data[i]<min){
                  min=data[i];
              }
          }
          if(max>Math.abs(min)){
              return max;
          }else{
              return Math.abs(min);
          }
      }

/*      function RealGraphDrawer (target,data) {
        this.drawGraph = function(){
          RGraph.Clear(document.getElementById(target));
          RGraph.ObjectRegistry.Clear();
          var line = new RGraph.Line(target, data)
              .Set('colors', ['green'])
              .Set('linewidth', 1)
              .Set('filled', true)
              .Set('fillstyle', 'rgba(128,255,128,0.5)')
              .Set('ymax', 60)
              .Set('numxticks', 5)
              .Set('labels', ['Now','10s','20s','30s','40s','50s','60s'])
              .Draw();
          data = sensorValue.concat(data);
          for (var i = 0; i < sensorValue.length; i++) {
            data.pop();
          };
          this.timer = setInterval(this.drawGraph, 1000);
        };
        this.stopDrawing = function(){
          clearInterval(this.timer);
        };
      }*/


      function GraphDrawer (target,data) {
        var that = this;
        this.drawGraph = function(){
          RGraph.Clear(document.getElementById(target));
          RGraph.ObjectRegistry.Clear();
          var line = new RGraph.Line(target, data)
              .Set('colors', ['green'])
              .Set('linewidth', 1)
              .Set('filled', true)
              .Set('fillstyle', 'rgba(128,255,128,0.5)')
              .Set('ymax', 60)
              .Set('xaxispos', 'center')
              .Set('numxticks', 5)
              .Set('labels', ['Now','10s','15s','20s','25s','30s','35s','40s','45s','50s','55s','60s'])
              .Draw();
          var r = RGraph.random(-60,60);
          data = [r].concat(data);
          data.pop();

          if(typeof that.timer=="undefined" || that.timer==null)
          {
            that.timer = setInterval(that.drawGraph, 1000);
          }
          
          };
          this.stopDrawing = function(){
            clearInterval(that.timer);
            that.timer = null;
          };
        }

