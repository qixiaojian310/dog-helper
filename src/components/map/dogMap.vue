<template>
  <div id="world_map_box">
    <div id="world_map"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/world.js";
export default {
  name: "dogMap",
  data() {
    return {
      //echart 配制option
      options: {
        backgroundColor: "#ffffff00",
        tooltip: {
          triggerOn: "mousemove", //mousemove、click
          padding: 8,
          borderWidth: 1,
          borderColor: "#409eff",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          formatter: function (e) {
            let data = e.data;
            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b>(导盲犬数量)</p>
                   <p class="tooltip_style"><span class="tooltip_left"><svg t="1650598835020" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="866" width="32" height="32"><path d="M815.006751 253.054332c-31.223897 108.82296-111.740603 181.303352-180.023684 161.69884s-97.76663-123.206428-66.542732-232.029389S680.232125 1.420431 748.310459 20.61545s97.971376 123.615922 66.696292 232.438882zM334.619412 1.062124c-69.921055 11.158704-112.09891 110.768056-94.18356 222.559846S329.50074 417.005387 399.524169 405.89787s112.150097-110.768056 94.183559-222.559846S404.642841-10.09658 334.619412 1.062124zM67.680682 309.001414c-65.007131 25.593359-87.017419 123.411175-49.190435 218.055415s121.107773 150.488948 186.114903 124.690842 87.017419-123.411175 49.190436-218.106601S132.636626 283.203309 67.680682 309.001414zM959.353293 378.92247c-64.290517-27.43608-149.004533 26.309973-189.390853 119.981664s-20.474687 191.847815 43.66227 219.232709 149.004533-26.309973 189.390853-119.981664 20.628247-191.694255-43.66227-219.232709z m-152.178109 586.906897c79.339411-83.997403-137.078028-431.504025-295.859225-438.721352-165.947337-7.524447-418.553785 366.804014-331.94586 453.10482s245.337935 14.383467 331.94586 0 173.420597 115.323674 295.859225-14.383468z" fill="#1296db" p-id="867"></path></svg></span><span class="tooltip_right">${data.value}</span></p>
               </div>
            `;
            return context;
          },
        },
        visualMap: {
          show: true,
          left: 26,
          top: 40,
          showLabel: true,
          textStyle: {
            color: "rgba(152, 161, 68, 1)",
            fontWeight: "bold",
            fontSize: 20
          },
          pieces: [
            {
              gte: 10000,
              label: ">= 10000",
              color: "#ffff66",
            },
            {
              gte: 1000,
              lt: 9999,
              label: "1000 - 10000",
              color: "#ffcc66",
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#ff9966",
            },
            {
              gte: 100,
              lt: 499,
              label: "100 - 499",
              color: "#ff6666",
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#ff3366",
            },
            {
              lt: 10,
              label: "<10",
              color: "#ff0066",
            },
          ],
        },
        geo: {
          map: "world",
          scaleLimit: {
            min: 1,
            max: 2,
          },
          zoom: 1,
          top: 120,
          label: {
            normal: {
              show: false,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            name: "导盲犬数量",
            type: "map",
            geoIndex: 0,
            data: [],
          },
        ],
      },
      dataList: [
        { name: "Australia", value: 500 },
        { name: "China", value: 180 },
        { name: "Germany", value: 1100 },
        { name: "France", value: 600 },
        { name: "United Kingdom", value: 4000 },
        { name: "Japan", value: 1000 },
        { name: "United States", value: 10000 },
      ],
    };
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById("world_map");
      let myChart = echarts.init(mapDiv);
      myChart.setOption(this.options);
    },
    //修改echart配制
    setEchartOption() {
      this.options.series[0]["data"] = this.dataList;
    },
  },
  created() {
    this.setEchartOption();
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchartMap();
    });
  },
};
</script>

<style scoped>
#world_map_box {
  height: 100%;
  position: relative;
  margin-bottom: 40px;
}
#world_map_box #world_map {
  height: 100%;
}
#world_map_box .world_map_logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
</style>
<style>
#world_map .tooltip_style {
  line-height: 1.7;
  overflow: hidden;
}
#world_map .tooltip_left {
  float: left;
}
#world_map .tooltip_right {
  float: right;
  font-size: 1.2rem;
}
</style>