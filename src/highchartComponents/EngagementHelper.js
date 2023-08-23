export const engagementMessageOverTimeChartOptions = (x,y) => {
    console.log("x",x)
    console.log("y",y)

    let categories = []
    let count = []
    x.map((d) => {
        categories.push(new Date(d.timeBucket).toDateString().substring(4,10))
        count.push(Number(d.count))
    })
 

    const options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'MY CHART'
        },
        
        xAxis: {
                tite:{
                text:	'Date'
            },
            categories:categories,
           
        },
        yAxis: {
            title: {
                text: 'count'
            },
            
        },
       
        
        series: [{
            data: count

        }, ]
      }

    return options
    
}