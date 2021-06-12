import React , {useEffect} from "react";
import ChartistGraph from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import Chartist from "react-chartist";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";







var options1 = {
  height: '350px',
  showArea: false,
  fullWidth: true,
  lineSmooth: false,
  chartPadding: {
    right: 20,
    left: 10
  },
  axisX: {
    showGrid: true,
  
  },

  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
 


     
}

                  

const plugins = [
  ChartistTooltip()
]

function Dashboard(page) {

  var questions = new Array();

  for(var i=0; i<page.todos1.national_vs_regional_chart.datasets.length;i++){
       questions.push({'series': page.todos1.national_vs_regional_chart.datasets[i].data});
 }




 var j_series = [];
 for(var i=0; i<questions.length;i++){
   j_series.push(questions[i].series)


}

var data = {
  labels: page.todos1.national_vs_regional_chart.labels,  
  series:j_series,
}



const data1 = {
  labels:page.todos1.factor_chart.labels,  
  series: [ page.todos1.factor_chart.datasets[0].data],

};
                         
  const ChartSettings = {
    options: {
      axisX: {
      },
    
      chartPadding: {
        top: 0,
        right: 1,
        bottom: 0,
        left: 0
      }
    },
    responsiveOptions: [
      ['screen and (min-width: 300px)', {
        reverseData: false,
        horizontalBars: false,
        stackBars: true,

      
      }],
      ['screen and (min-width: 800px)', {
        stackBars: false,
        seriesBarDistance: 10
      }],
      ['screen and (min-width: 1000px)', {
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ]
    
     };




  return (
    <>

<Container fluid id="dashboard_content">

        <Row >

        {
        page.todos1.score_tiles_data.map(todo => 
            <Col lg="2" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="12">
                  <Card.Title as="h4" style={{textAlign:'left',color: '#FF439B'}}>{todo.value}</Card.Title>

<Card.Title as="h4" style={{textAlign:'left',color:'#5B5E61',fontFamily: "Hyundai Sans Head Office"}}>{todo.display_header}</Card.Title>

                  </Col>
                  <Col xs="6">
                   
                  </Col>
                 
                </Row>
              </Card.Body>
             
            </Card>
          </Col>
          )
}
         
        </Row>

        </Container>

      <Container fluid id="dashboard_content1">
       
        <Row>
          <Col md="8">
            <Card style={{height:'480px'}}>
              <Card.Header>
                <Card.Title as="h4" style={{fontFamily: "Hyundai Sans Head Office"}}>Day wise Usage</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
             <Chartist responsiveOptions={ChartSettings.responsiveOptions} options={{...options1,plugins}}  data={data}   type='Line' />
                </div>
              </Card.Body>
             
            </Card>
          </Col>
          <Col md="4">
            <Card style={{height:'480px'}}>
            <Card.Header>
                <Card.Title as="h4" style={{fontFamily: "Hyundai Sans Head Office"}}>Top Performer</Card.Title>
              </Card.Header>
            <Table responsive className="styled-table">
  <thead>
    <tr>
      <th>Dealer Code</th>
      <th>Dealer Name</th>
      <th>Region</th>
      <th>City</th>
      <th>Score</th>

      
    </tr>
  </thead>
  <tbody>
  {page.todos1.top_performers.map(todos2 => 

    <tr>
        <td >{todos2.dealer_code}</td>
        <td >{todos2.dealer_name}</td>
        <td >{todos2.region}</td>
        <td >{todos2.city}</td>
        <td >{todos2.score}</td>

    </tr>
           )
          }
  </tbody>
</Table>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <Card style={{height:'480px'}}>
              <Card.Header>
                <Card.Title as="h4" style={{fontFamily: "Hyundai Sans Head Office"}}>Factor Wise Score</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                <Chartist data={data1} responsiveOptions={ChartSettings.responsiveOptions} options={{...options1, plugins}} type="Bar" className="ct-series-g ct-major-tenth" />

                </div>
              </Card.Body>
             
            </Card>
          </Col>
          <Col md="4">
            <Card style={{height:'480px'}}>
              <Card.Header>
                <Card.Title as="h4" style={{fontFamily: "Hyundai Sans Head Office"}}>Bottom Performer</Card.Title>
              </Card.Header>
              <Table responsive className="styled-table">
  <thead>
    <tr>
      <th>Dealer Code</th>
      <th>Dealer Name</th>
      <th>Region</th>
      <th>City</th>
      <th>Score</th>

      
    </tr>
  </thead>
  <tbody>
  {page.todos1.bottom_performers.map(todos2 => 

    <tr>
        <td >{todos2.dealer_code}</td>
        <td >{todos2.dealer_name}</td>
        <td >{todos2.region}</td>
        <td >{todos2.city}</td>
        <td >{todos2.score}</td>

    </tr>
           )
          }
  </tbody>
</Table>
            </Card>
          </Col>


         
        </Row>
       
      </Container>



    </>
  );
}

export default Dashboard;
