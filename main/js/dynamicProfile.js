
			function RealGraphDrawer1 (target,dataArr1) {
        this.drawGraph = function(){
          RGraph.Clear(document.getElementById(target));
          RGraph.ObjectRegistry.Clear();
          var line = new RGraph.Line(target, dataArr1)
              .Set('colors', ['green'])
              .Set('linewidth', 1)
              .Set('filled', true)
              .Set('fillstyle', 'rgba(128,255,128,0.5)')
              .Set('ymax', 60)
              .Set('numxticks', 5)
              .Set('labels', ['Now','10s','20s','30s','40s','50s','60s'])
              .Draw();
          if(sensorValue1.length==0){
          	sensorValue1 = RGraph.random(0,60);
            dataArr1 = [sensorValue1].concat(dataArr1);
          } else{
            dataArr1 = sensorValue1.concat(dataArr1);
            for (var i = 0; i < popLen1; i++) {
              dataArr1.pop();
            };
          }
          this.timer = setInterval(this.drawGraph, 1000);
          };
          this.stopDrawing = function(){
            clearInterval(this.timer);
          };
        }


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
          
          this.timer = setInterval(this.drawGraph, 1000);
          };
          this.stopDrawing = function(){
            clearInterval(this.timer);
          };
        }

