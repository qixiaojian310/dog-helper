<template>
  <div id="dog-statistics-box"><div id="dog-statistics"></div></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "dogStatistics",
  data() {
    return {
      options: {
        tooltip: {
          triggerOn: "mousemove", //mousemove、click
          padding: 8,
          borderWidth: 1,
          borderColor: "#ffb697",
          backgroundColor: "rgba(255,255,255,0.7)",
          textStyle: {
            color: "#000000",
            fontSize: 13,
          },
          formatter: function (e) {
            let data = e.data;
            let context = `
              <div>
                  <p><b style="font-size:15px;">${data.name}</b>(导盲犬名称)</p>
                  <p class="tooltip_style"><span class="tooltip_left">狗龄</span><span class="tooltip_right">${data.value}</span></p>
                  <p class="tooltip_style"><span class="tooltip_left">导盲犬种类</span></span><span class="tooltip_right">${data.dogType}</span></p>
                  <p class="tooltip_style"><span class="tooltip_left">导盲犬性别</span></span><span class="tooltip_right">${data.gender}</span></p>
                  <p class="tooltip_style"><span class="tooltip_left">导盲犬服务时间</span></span><span class="tooltip_right">${data.serviceTime}</span></p>
              </div>
            `;
            return context;
          },
        },
        xAxis: {
          type: "category",
          data: ["飞飞", "罗拉", "哈尼", "凯瑞", "薇薇", "安妮", "华荷拉"],
          nameTextStyle: {
            color: "#000000",
            fontSize: 13,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255, 1)",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255, 1)",
            },
          },
        },
        series: [
          {
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
            itemStyle: {
              color: "#ffb697",
            },
          },
        ],
      },
      dataList: [
        {
          name: "飞飞",
          value: 12,
          dogType: "布列塔尼型拉布拉多",
          gender: "male",
          serviceTime: "2013.5",
        },
        {
          name: "罗拉",
          value: 10,
          dogType: "唐那宾型拉布拉多",
          gender: "<i class='fa fa-2x fa-venus'></i>",
          serviceTime: "2015.11",
        },
        {
          name: "哈尼",
          value: 9,
          dogType: "唐那宾型拉布拉多",
          gender: "<i class='fa fa-2x fa-mars'></i>",
          serviceTime: "2015.11",
        },
        {
          name: "凯瑞",
          value: 7,
          dogType: "金毛猎犬",
          gender: "<i class='fa fa-2x fa-mars'></i>",
          serviceTime: "2017.3",
        },
        {
          name: "薇薇",
          value: 7,
          dogType: "金毛猎犬",
          gender: "<i class='fa fa-2x fa-venus'></i>",
          serviceTime: "2017.7",
        },
        {
          name: "安妮",
          value: 7,
          dogType: "金毛猎犬",
          gender: "<i class='fa fa-2x fa-venus'></i>",
          serviceTime: "2018.8",
        },
        {
          name: "华荷拉",
          value: 6,
          dogType: "朗伍德型拉布拉多",
          gender: "<i class='fa fa-2x fa-venus'></i>",
          serviceTime: "2020.11",
        },
      ],
    };
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById("dog-statistics");
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
#dog-statistics-box {
  height: 100%;
  position: relative;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
}
#dog-statistics-box #dog-statistics {
  width: 50%;
  height: 100%;
}
#dog-statistics-box .dog-statistics-logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
}
</style>
<style>
#dog-statistics .tooltip_style {
  line-height: 1.7;
  overflow: hidden;
}
#dog-statistics .tooltip_left {
  float: left;
}
#dog-statistics .tooltip_right {
  float: right;
  font-size: 1.2rem;
}
</style>
