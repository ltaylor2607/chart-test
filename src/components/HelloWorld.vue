<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <JSCharting :options="pie"></JSCharting>
    <JSCharting :options="bar"></JSCharting>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      pie: {
        debug: true,
        grid: {
          enabled: true,
        },
        legend: {
          position: 'inside left bottom',
          template: '%value {%percentOfTotal:n1}% %icon %name'
        },
        title_position: 'center',
        defaultSeries_type: 'pieDonut',
        defaultPoint_label_text: '<b>%name</b>',
        title_label_text: 'Countries GDP',
        yAxis: { label_text: 'GDP', formatString: 'n'  },
        series: [
          {
            name: 'Countries',
            points: [
              { name: 'United States', y: 5452500  },
              { name: 'Canada', y: 786052  },
              { name: 'United Kingdom', y: 477338  },
              { name: 'Mexico', y: 155313  }
            ]
          }
        ]
      },
      bar: {
        debug: true, 
        grid: {
          enabled: true,
        },
        type: 'column', 
        yAxis: { 
          scale_type: 'stacked', 
          label_text: 'Units Sold'
        }, 
        title_label_text: 'Acme Tool Sales', 
        xAxis_label_text: 'Quarter', 
        series: [ 
          { 
            name: 'Saw', 
            id: 's1', 
            points: [ 
              { x: 'Q1', y: 230 }, 
              { x: 'Q2', y: 240 }, 
              { x: 'Q3', y: 267 }, 
              { x: 'Q4', y: 238 } 
            ] 
          }, 
          { 
            name: 'Hammer', 
            points: [ 
              { x: 'Q1', y: 325 }, 
              { x: 'Q2', y: 367 }, 
              { x: 'Q3', y: 382 }, 
              { x: 'Q4', y: 371 } 
            ] 
          }, 
          { 
            name: 'Grinder', 
            points: [ 
              { x: 'Q1', y: 285 }, 
              { x: 'Q2', y: 292 }, 
              { x: 'Q3', y: 267 }, 
              { x: 'Q4', y: 218 } 
            ] 
          }, 
          { 
            name: 'Drill', 
            points: [ 
              { x: 'Q1', y: 185 }, 
              { x: 'Q2', y: 192 }, 
              { x: 'Q3', y: 198 }, 
              { x: 'Q4', y: 248 } 
            ] 
          } 
        ] 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
