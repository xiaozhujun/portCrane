      function RealGraphDrawer (target,data) {
        this.drawGraph = function(sensorValue){
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
        };
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
          var r = RGraph.random(0,60);
          data = [r].concat(data);
          data.pop();
          this.timer = setInterval(this.drawGraph, 1000);
          };
          this.stopDrawing = function(){
            clearInterval(this.timer);
          };
        }

