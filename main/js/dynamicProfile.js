
			function GraphDrawer (target,data) {
        this.drawGraph = function(){
          RGraph.Clear(document.getElementById(target));
          RGraph.ObjectRegistry.Clear();
          var line = new RGraph.Line(target, data)
              .Set('colors', ['green'])
              .Set('linewidth', 1)
              .Set('filled', true)
              .Set('fillstyle', 'rgba(128,255,128,0.5)')
              .Set('ymax', 200)
              .Set('numxticks', 5)
              .Set('labels', ['Now','10s','20s','30s','40s','50s','60s'])
              .Draw();
          if(typeof(sensorValue)=="undefined"){
          	sensorValue = RGraph.random(0,200);
          }
          data = [sensorValue].concat(data);
          data.pop();
          this.timer = setInterval(this.drawGraph, 1000);
          };
          this.stopDrawing = function(){
            clearInterval(this.timer);
          };
        }

