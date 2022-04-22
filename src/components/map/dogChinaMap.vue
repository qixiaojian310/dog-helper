<template>
  <div id="china_map_box">
    <div id="china_map"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
export default {
  name: "dogChinaMap",
  data() {
    return {
      //echart 配制option
      options: {
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
                   <p><b style="font-size:15px;">${data.name}</b>(各区域导盲犬总数)</p>
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
          textStyle: {
            color: "rgba(152, 161, 68, 1)",
            fontWeight: "bold",
            fontSize: 20,
          },
          showLabel: true,
          pieces: [
            {
              gte: 10,
              label: ">= 10",
              color: "#ffff66",
            },
            {
              gte: 5,
              lt: 9,
              label: "5 - 9",
              color: "#ffcc66",
            },
            {
              gte: 1,
              lt: 5,
              label: "1 - 4",
              color: "#ff9966",
            },
            {
              lt: 0,
              label: "0",
              color: "#ff6666",
            },
          ],
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2,
          },
          zoom: 1,
          top: 120,
          label: {
            normal: {
              show: true,
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
            name: "国内导盲犬总数",
            type: "map",
            geoIndex: 0,
            data: [],
          },
        ],
      },
      //echart data
      dataList: [
        {
          name: "南海诸岛",
          value: 1,
        },
        {
          name: "北京",
          value: 11,
        },
        {
          name: "天津",
          value: 3,
        },
        {
          name: "上海",
          value: 7,
        },
        {
          name: "重庆",
          value: 4,
        },
        {
          name: "河北",
          value: 7,
        },
        {
          name: "河南",
          value: 6,
        },
        {
          name: "云南",
          value: 2,
        },
        {
          name: "辽宁",
          value: 79,
        },
        {
          name: "黑龙江",
          value: 3,
        },
        {
          name: "湖南",
          value: 6,
        },
        {
          name: "安徽",
          value: 2,
        },
        {
          name: "山东",
          value: 4,
        },
        {
          name: "新疆",
          value: 3,
        },
        {
          name: "江苏",
          value: 6,
        },
        {
          name: "浙江",
          value: 7,
        },
        {
          name: "江西",
          value: 3,
        },
        {
          name: "湖北",
          value: 3,
        },
        {
          name: "广西",
          value: 3,
        },
        {
          name: "甘肃",
          value: 2,
        },
        {
          name: "山西",
          value: 3,
        },
        {
          name: "内蒙古",
          value: 2,
        },
        {
          name: "陕西",
          value: 3,
        },
        {
          name: "吉林",
          value: 6,
        },
        {
          name: "福建",
          value: 5,
        },
        {
          name: "贵州",
          value: 5,
        },
        {
          name: "广东",
          value: 8,
        },
        {
          name: "青海",
          value: 2,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "四川",
          value: 4,
        },
        {
          name: "宁夏",
          value: 2,
        },
        {
          name: "海南",
          value: 2,
        },
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
}
</style>
