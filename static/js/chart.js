    function httpGet(url)
				{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
				}
var url = 'https://api.deezer.com/playlist/1111142221/tracks';

var response = httpGet(url)



		var ctx1 = document.getElementById('myChart1');
var stackedBar = new Chart(ctx1, {
    type: 'polarArea',
    data: {
   	labels: [response['data'][0]['title_short'], response['data'][1]['title_short'], response['data'][2]['title_short'], response['data'][3]['title_short'], response['data'][4]['title_short']],
      datasets: [
        {
          label: "Popularity",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [Math.round(response['data'][0]['rank']/10000),Math.round(response['data'][1]['rank']/10000),Math.round(response['data'][2]['rank']/10000),Math.round(response['data'][3]['rank']/10000),Math.round(response['data'][4]['rank']/10000)]}
      ]},
		options:{
            scales: {
                xAxes : [{
                    ticks : {
                        max : 100,    
                        min : 70
                    }
                }]
            }
        }

    });

var ctx2 = document.getElementById('myChart2');
var stackedBar = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
   	labels: [response['data'][0]['title_short'], response['data'][1]['title_short'], response['data'][2]['title_short'], response['data'][3]['title_short'], response['data'][4]['title_short'],response['data'][5]['title_short'], response['data'][6]['title_short'], response['data'][7]['title_short'], response['data'][8]['title_short'], response['data'][9]['title_short']],
      datasets: [
        {
          label: "Popularity",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [Math.round(response['data'][0]['rank']/10000),Math.round(response['data'][1]['rank']/10000),Math.round(response['data'][2]['rank']/10000),Math.round(response['data'][3]['rank']/10000),Math.round(response['data'][4]['rank']/10000),Math.round(response['data'][5]['rank']/10000),Math.round(response['data'][6]['rank']/10000),Math.round(response['data'][7]['rank']/10000),Math.round(response['data'][8]['rank']/10000),Math.round(response['data'][9]['rank']/10000)],
       backgroundColor: [
                'rgba(185, 0, 0, 0.5)',
                'rgba(185, 128, 0, 0.5)',
                'rgba(185, 185, 0, 0.5)',
                'rgba(128, 185, 0, 0.5)',
                'rgba(0, 185, 128, 0.5)',
                'rgba(0, 128, 185, 0.5)',
                'rgba(0, 0, 185, 0.5)',
                'rgba(127, 0, 165, 0.5)',
                'rgba(185, 0, 165, 0.5)',
                'rgba(102, 0, 52, 0.5)'

            ]}
      ]},
		options:{
            scales: {
                xAxes : [{
                    ticks : {
                        max : 100,    
                        min : 70
                    }
                }]
            }
        }

    });