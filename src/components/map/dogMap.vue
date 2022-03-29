<template>
  <div id="china_map_box">
    <div id="china_map"></div>
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
        backgroundColor:'#9e90415d',
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
          formatter: function (e, t, n) {
            let data = e.data;
            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b>(导盲犬数量)</p>
                   <p class="tooltip_style"><span class="tooltip_left"><svg t="1648494493787" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3922" width="32" height="32"><path d="M606 975.4c-49.3-49.3-55.5-125.7-18.5-181.8l-351-350.9c-56.1 37-132.5 30.8-181.8-18.5-56.4-56.4-56.4-148.1 0-204.5 31.4-31.4 74.6-45.4 116.4-41.3-8.4-45.4 4.9-94 39.9-129C267.4-7 359.1-7 415.5 49.4 464.8 98.7 471 175.1 434 231.2l350.9 350.9c56.1-37 132.5-30.8 181.8 18.5 56.4 56.4 56.4 148.1 0 204.5-31.4 31.4-74.5 45.5-116.4 41.5 8.5 45.4-4.9 93.9-39.8 128.8-56.4 56.3-148.2 56.3-204.5 0zM259.2 383l387.9 387.9c11.4 11.4 11.4 29.8 0 41.2-33.6 33.6-33.6 88.4 0 122 33.6 33.6 88.4 33.6 122 0 32.5-32.5 33.8-84.7 2.9-118.8-10.4-11.5-10-29.2 1-40.2l1.1-1.1c10.3-10.3 26.6-11.4 38.2-2.6 34.1 25.9 82.7 22.6 113.1-7.7 33.6-33.6 33.6-88.4 0-122-33.6-33.6-88.4-33.6-122 0-11.4 11.4-29.8 11.4-41.2 0l-388-387.8c-11.4-11.4-11.4-29.8 0-41.2 33.6-33.6 33.6-88.4 0-122s-88.4-33.6-122 0-33.6 88.4 0 122c11.4 11.4 11.4 29.8 0 41.2-10.7 10.7-28.2 11.8-39.7 2-33.9-28.6-85.1-26.4-116.5 5-33.6 33.6-33.6 88.4 0 122s88.4 33.6 122 0c11.4-11.3 29.8-11.3 41.2 0.1z" fill="#ED4CA5" p-id="3923"></path><path d="M606 975.4c-49.3-49.3-55.5-125.7-18.5-181.8L218 424.2c-11.4-11.4-11.4-29.8 0-41.2 11.4-11.4 29.8-11.4 41.2 0l387.9 387.9c11.4 11.4 11.4 29.8 0 41.2-33.6 33.6-33.6 88.4 0 122 33.6 33.6 88.4 33.6 122 0 32.5-32.5 33.8-84.7 2.9-118.8-10.4-11.5-10-29.2 1-40.2l1.1-1.1c11.4-11.4 29.8-11.4 41.2 0 2.9 2.9 5.1 6.3 6.5 9.8 44.9 57.1 40.7 139.3-11.4 191.4-56.3 56.5-148.1 56.5-204.4 0.2z" fill="#FFD500" p-id="3924"></path><path d="M54.8 424.2c-56.4-56.4-56.4-148.1 0-204.5 51.6-51.6 135.2-56.1 192-11 1.9 1.2 3.6 2.5 5.3 4.2 11.4 11.4 11.6 29.7 0.2 41l-0.4 0.4c-10.7 10.7-27.8 11.4-39.4 1.7-33.9-28.6-85.1-26.4-116.5 5-33.6 33.6-33.6 88.4 0 122s88.4 33.6 122 0c11.4-11.4 29.8-11.4 41.2 0 11.4 11.4 11.4 29.8 0 41.2-56.3 56.3-148.1 56.3-204.4 0z" fill="#FFD500" p-id="3925"></path></svg></span><span class="tooltip_right">${data.value}</span></p>
               </div>
            `;
            return context;
          },
        },
        visualMap: {
          show: true,
          left: 26,
          bottom: 40,
          showLabel: true,
          pieces: [
            {
              gte: 10000,
              label: ">= 10000",
              color: "#1f307b",
            },
            {
              gte: 1000,
              lt:9999,
              label: "1000 - 10000",
              color: "#1f307b",
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#3c57ce",
            },
            {
              gte: 100,
              lt: 499,
              label: "100 - 499",
              color: "#6f83db",
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#9face7",
            },
            {
              lt: 10,
              label: "<10",
              color: "#bcc5ee",
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
      let mapDiv = document.getElementById("china_map");
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
#china_map_box {
  height: 100%;
  position: relative;
}
#china_map_box #china_map {
  height: 100%;
}
#china_map_box .china_map_logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
</style>
<style>
#china_map .tooltip_style {
  line-height: 1.7;
  overflow: hidden;
}
#china_map .tooltip_left {
  float: left;
}
#china_map .tooltip_right {
  float: right;
  font-size: 1.2rem;
}
</style>