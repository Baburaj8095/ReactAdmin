import React, { useState, useEffect } from 'react';
import { Navbar, Brand, Container, Table, Nav, Dropdown, Button, CardGroup, Card, Form, Row, Col } from "react-bootstrap";
import logo_hyundai from '../img/MOBIS_LOGO.png';
import logo_hyundai1 from '../img/Icon ionic-md-arrow-dropdown.svg'
import Dropdowns from '../components/select_dropdown'
import "./vertical_dashboard.css";
import axios from 'axios';
import Select from 'react-select';
import { trackPromise } from 'react-promise-tracker';
import $ from 'jquery';
import Dashboard from '../components/dashboard'
import jQuery from 'jquery';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import ReactPaginate from 'react-paginate';



const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px dotted green',
      color: state.isSelected ? 'yellow' : 'black',
      backgroundColor: state.isSelected ? 'green' : 'white'
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    })
  };



  const options1 = [
    { value: 'National', label: 'National' },
    { value: 'Region', label: 'Region' },
    { value: 'Dealer', label: 'Dealer' }
  ]

function Vertical() {

  const [pageResponse, pageCountResponse] = useState({page_count : null});

  const [current, currenPage] = useState(1);

    const [showForm, setShowForm] = useState('National');
    const [resp, setGitData] = useState({ data: null, repos: null });
    const [selectValue, setSelectValue] = useState('');
    const [state, setState] = useState({
      start: moment().subtract(100, 'days'),
      end: moment().subtract(70, 'days'),
    });
    const [response, setResponse] = useState({ resonse_data: null});

    let comp , comp1;

    const handleAddrTypeChange = (e) => 
  { 


  

    if(e.value == "Region")
    {
      var region_east = localStorage.getItem("region_east")
      setSelectValue(region_east);
    }
    else if(e.value == "Dealer")
    {
      var dealer  = localStorage.getItem("dealer");
      setSelectValue(dealer);
  
    }
    else if(e.value == "National")
    {
      setSelectValue(' ');

    }


    setShowForm(e.value)


  }

  const handleAddrTypeChange1 = (e) => 
  { 
    setSelectValue((e.value)); 

  

  }

  const handleAddrTypeChange2 = (e) => 
  { 
    setSelectValue((e.value)); 

   

  }



  const fetchData = async () => {


    const respGlobal = await axios.get(
      `https://kmi-salessatisfaction.apprikart.com/secured_api/dashboard_api/get_dealer_list/?username=login1&permission=[%22KIA%22]&start_date=01/01/2021&end_date=30/01/2021&report_type=DCSI`
    );
    const respRepos = await axios.get(
      'https://kmi-salessatisfaction.apprikart.com/secured_api/dashboard_api/get_region_list/',{ params: { username: 'login' , permission : '["KIA"]' , start_date : '01/01/2021' , end_date : '30/01/2021' , report_type :'DCSI'  } },
      
      );

  

    setGitData({ data: respGlobal.data, repos: respRepos.data })

    

    localStorage.setItem("region_east",resp.repos[0].value);
    localStorage.setItem("dealer",resp.data[0].value);

  };

  const fetchData1 = async () => {

    try {
    const dashApi = await axios.get(
      'https://kmi-salessatisfaction.apprikart.com/secured_api/dashboard_api/get_table_data/',{ params : {username: 'login' , hierarchy : showForm , dealer_code : selectValue , region_name  : selectValue , permission : '["KIA"]', start_date : state.start.format('DD/MM/YYYY') , end_date : state.end.format('DD/MM/YYYY'), report_type : 'DCSI', current_page :current, records_per_page : '50' } },
    );

    setResponse({ resonse_data: dashApi.data})
    pageCountResponse({ page_count: Math.ceil(dashApi.data.meta.total_records / dashApi.data.meta.record_limit_per_page)})
    }
    catch (err) {
      return {err};

    }

  };
  console.log(pageResponse.page_count)


  useEffect(() => {

    
    trackPromise(
      fetchData()
    );


    trackPromise(
      fetchData1()
    );
   
 

  }, [showForm,state,selectValue,current]);


 
 



  if (showForm == 'Region') {
  

    comp =  <Select className="col-md-2 col-offset-4"  styles = { customStyles } options = {resp.repos}  defaultValue={resp.repos[0]}
    onChange={e => handleAddrTypeChange1(e)}     
    />

  }
  else if(showForm == 'Dealer')
  {
    
    comp1 = <Select className="col-md-2 col-offset-4"
    styles = { customStyles } 
    options = {resp.data} 
    defaultValue={resp.data[0]}
    onChange={e => handleAddrTypeChange2(e)}  
/>
  }


  const handleEvent = (e) => 
{
    console.log(e.ranges);
  }

 



  console.log(state.start.format('DD/MM/YYYY') + "-"+ state.end.format('DD/MM/YYYY'))

  const { start, end } = state;
  const handleCallback = (start, end) => {
    setState({ start, end });
  };
  const label =
  start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');



  if(response.resonse_data)
  {
    var  getKey = Object.keys(response.resonse_data.table_data[0])


  }

  const handlePageClick = (e) => 
  { 
    currenPage((e.selected + 1)); 
   
   

  }



  return (
   
    <>
    <Navbar bg="light1">
    <Navbar.Brand href="#home"><img src={logo_hyundai} />
    </Navbar.Brand>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
     <a href="#login" style={{marginRight:'20px',color:'#707070',fontFamily: "Hyundai Sans Head Office"}}>Logout</a>
     <a href="#"></a>
     <img src={logo_hyundai1} />
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>

  <Nav
   style={{borderBottom :'1px solid #B2B2B2',     margin: '10px'}}
   defaultActiveKey="vertical_dashboard"
>
  <Nav.Item>
    <Nav.Link href="/" style={{fontFamily: "Hyundai Sans Head Office"}}>Vertical Dashboard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="vertical_dashboard"  style={{fontFamily: "Hyundai Sans Head Office"}}>Horizontal Dashboard</Nav.Link>
  </Nav.Item>
 
  <Nav.Item className="justify-content-end" style={{    flex: '1'}}>
    <Nav.Link eventKey="disabled" style={{    textAlign: 'right',color:'#0A0A0A',fontFamily: "Hyundai Sans Head Office"}}>
      Dowload Report
    </Nav.Link>
  </Nav.Item>

</Nav>


<Container fluid >
        <Row style={{margin:'1px'}}>

    

   
        <DateRangePicker    initialSettings={{
          startDate: start.toDate(),
          endDate: end.toDate()
        }}
        onCallback={handleCallback}

   styles = { customStyles }
 >
        <input id = "someRandomID" className="col-sm-2 col-offset-4"  style={{    height: '40px', margin: '10px'}}/>
      </DateRangePicker>
    
     <Select className="col-sm-2 col-offset-4" 
     styles = { customStyles }
     defaultValue={{ value: 'National', label: 'National' }}
  options = {options1} 
  onChange={e => handleAddrTypeChange(e)}


  
  />







{comp}
{comp1}



</Row>
</Container >


<Container fluid>


<Row style={{margin:'5px'}}>

<Table responsive className="styled-table">
                <thead>
        <tr >
          { response.resonse_data && getKey.map((key, index) => {
              return <th key={key}>{key}</th>
          })}
        </tr>
                </thead>
                <tbody>
                    
               {  
               response.resonse_data &&  (response.resonse_data.table_data).map((element,index) => {
               
                 
                     return  (  <tr>
{
getKey.map((keys, indexs) => 
{
  return <td>{element[keys]}</td>
})

}
                             </tr>  
                     )
                 

                 
                    })
                }
                </tbody>
                <ReactPaginate 
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageResponse.page_count}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={'pagination'}
          activeClassName={'active'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
          onPageChange={e => handlePageClick(e)}

        />
            </Table>

</Row>


</Container>



 
</>


  );
}

export default Vertical;
