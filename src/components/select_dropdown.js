import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { trackPromise } from 'react-promise-tracker';
import $ from 'jquery';
import Dashboard from '../components/dashboard'
import jQuery from 'jquery';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import axios from 'axios';

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

  
  function Dropdown() {
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


    const dashApi = await axios.get(
      'https://kmi-salessatisfaction.apprikart.com/secured_api/dashboard_api/get_dashboard_data/',{ params : {username: 'login' , hierarchy : showForm , dealer_code : selectValue , region_name  : selectValue , permission : '["KIA"]', start_date : state.start.format('DD/MM/YYYY') , end_date : state.end.format('DD/MM/YYYY'), report_type : 'DCSI' } },
    );

    setResponse({ resonse_data: dashApi.data})


    

  };


  useEffect(() => {

    
    trackPromise(
      fetchData()
    );


    trackPromise(
      fetchData1()
    );
   
 

  }, [showForm,state,selectValue]);


 
 



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

    return (
        <>

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

{
  response.resonse_data && <Dashboard todos={selectValue} todos1={response.resonse_data}   />

}


</>
      );
    }
  
  
  export default Dropdown;