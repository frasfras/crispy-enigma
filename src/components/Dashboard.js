import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import Context from '../context';
import { useParams } from 'react-router-dom'

import BarChart from 'react-bar-chart';
import './dashboard.css';



function Dashboard(props) {

    const [search,setSearch]=useState('');
    const [ifmentioned,setIfmentioned]=useState(false);
    const {id} = useParams()

    const logout=()=>{
       
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        props.history.push('/');
    }

    var Routes=(
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top text-primary bg-dark portfolio-navbar gradient" >
        <div className="container-fluid"><Link className="navbar-brand logo" to="/">Rep alert </Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                   
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/dashboard"><i style={{marginRight:'5px'}} className="fa fa-donut-chart">👉🏽</i>Dashboard</Link></li>
                    <li className="nav-item" role="presentation" onClick={logout}><Link className="nav-link" to="/dashboard"><i style={{marginRight:'5px'}} className="fa fa-user"></i>Logout</Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to={`/cocktail/${id}`}><i style={{marginRight:'5px'}} className="fa fa-pie-chart"></i>Single Mention</Link></li>
                       
        
                    
                    
                    
                    
                    
                    
                    
                </ul>
                
            </div>
           
        </div>
    </nav>
    )

    useEffect(()=>{
        if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
            props.history.push('/login')
        }

        document.getElementById('body').style.backgroundColor='white';
    },[])
    const [data,setData] =useState ([
        {text: 'Positive', value: 500}, 
        {text: 'Negative', value: 300},
        {text: 'Overall', value: 300} 
      ]);
       
      const margin = {top: 20, right: 20, bottom: 30, left: 40};

    

    const [text,setText]=useState('');
    const [topics,setTopics]=useState([]);
    const [main,setMain]=useState([]);
    const [entities,setEntities]=useState([]);
    
    

    const onChange=(e)=>{
        setText(e.target.value);
    }

    

    const appURL='https://nlapi.expert.ai/v2/analyze/standard/en/relevants'
    
     

  /*  const config = {
        headers: { 'Authorization': `Bearer eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IlBIIiwic3ViIjoiOTdmNTA0OWYtZDBmNC00MDRmLTg5N2MtM2RkMzhjYWExODRiIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTpwZXJzb25hbGl6YXRpb25BdXRoIjoiMSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsImNvZ25pdG86dXNlcm5hbWUiOiI5N2Y1MDQ5Zi1kMGY0LTQwNGYtODk3Yy0zZGQzOGNhYTE4NGIiLCJjdXN0b206Y29tcGFueSI6ImtvcnZlciIsImF1ZCI6IjFlZ3M2M3E5OXAzc2ViZWNoc2I3Mjl0ODBvIiwiZXZlbnRfaWQiOiI1NDFkY2EzZC1iMTk5LTRiYmUtYWRkNS1kYjUyNTU2NWY1NDEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY5NDYwNzY4MywibmFtZSI6ImZyYXMiLCJleHAiOjE2OTQ2OTQwODMsImlhdCI6MTY5NDYwNzY4MywiZmFtaWx5X25hbWUiOiJzaWx2IiwiZW1haWwiOiJjb25zaXN0ZW5nb2xmMUBnbWFpbC5jb20iLCJjdXN0b206bWFya2V0aW5nQXV0aCI6IjEifQ.j2wGS0RFsNaShyTVfaddleK59NxQeSPn4fVqS7hwNl7Nk36qqae7IIyJDKCN8nFzJEmVluFA83bUfNPqQpf3Z3J64T7Wxwl5joLtf-IfWJLS55zplt50yM0fAT8cert5ffIcrLFOeInDP6ksyXC_AI33p6q6PosUzfrl9TtElmTXbwn8EkVSJXP4aM4VR6cnLa62SUYhq6RmJMq-20zC4hUBFIlp7w62oPgI1NXZhdMcwZ4meINVOojvHS8c4hu7rTce8eWqvRreEK0Ho3_8hcLrHexj95EUfm5EDXLeOaF6GEcjNl4ntkHuBALBiLGMGeL-30sQLKVxqGqcJyxvkg`,
        'Content-type':'application/json'
     } 
    }; */
      const config = {
        headers: { 'Authorization': `Bearer ${process.env.REACT_APP_EXPERT_AI_TOKEN}`,
        'Content-type':'application/json'
     }
    };
    
    const refreshPage=(e)=> {
        window.location.reload(false);
      }

    const submit=(e)=>{
        e.preventDefault();
        axios.post(appURL,{
            document:{
                text:text
            }
        },config).then((res)=>{
        console.log(process.env.REACT_APP_EXPERT_AI_TOKEN);
            console.log(res.data)
            setTopics(res.data.data.topics)
            setMain(res.data.data.mainSentences)
        }).catch(err=>{
            console.log(err);
        })

        axios.post('https://nlapi.expert.ai/v2/analyze/standard/en/entities',{
            document:{
                text:text
            }
        },config).then((res)=>{
            console.log(res.data)
            setEntities(res.data.data.entities)
        }).catch((err)=>{
            console.log(err);
        })
        
        axios.post('https://nlapi.expert.ai/v2/analyze/standard/en/sentiment',{
            document:{
                text:text
            }
        },config).then((res)=>{

            const datavalues=[...data];
            var item=datavalues[0];
            item.value=res.data.data.sentiment.positivity;
            datavalues[0]=item;

            item=datavalues[1];
            item.value=Math.abs(res.data.data.sentiment.negativity);
            datavalues[1]=item;

            item=datavalues[2];
            item.value=res.data.data.sentiment.overall;
            datavalues[2]=item;

            
           setData(datavalues);

            console.log(data);

            
        }).catch((err)=>{
            console.log(err);
        })
        
        setIfmentioned(true);

    }


   
    return ifmentioned?(
        <div>
            {Routes}
            <div className="container">
           
            <label for="exampleFormControlTextarea1" style={{marginTop:'3rem'}}>Enter Review Text</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" value={text}></textarea>
            <button onClick={refreshPage}> Try another!</button>
            <div style={{marginTop:'2rem'}}class="form-group">
          
        
          </div>
          <div class="container">
            <div class="row">
                <div class="col-sm">
                One of three columns
                <div class="card" style={{marginTop:'2rem'}} >
                
                    <div class="card-body">
                    <h5 class="card-title">Summary</h5>
                    {
                        main.map((maintext)=>{
                            return(
                                <p className="text-justify">{maintext.value}</p>
                            )
                        })
                    }
                        
                    
                    </div>
                </div>
                </div>
                <div class="col-sm">
                

                </div>
                <div class="col-sm">
                <ul class="list-group" style={{marginTop:'2rem'}}>
                <li class="list-group-item"><b> Entities mentioned</b></li>
                {
                    entities.map((entity)=>{
                        return(
                            <li class="list-group-item">{entity.lemma}</li>
                            
                        )
                    })
                }
                
                
            </ul>
                </div>
            </div>
            </div>
         {/* <h4>Phrases</h4>
        <div className="row">
        {
                topics.map((topic)=>{
                    return(
                        <h5><span class="badge rounded-pill badge-secondary">{topic.label}</span></h5>
                    )
                })
            }
            </div> */}
            <div className="row">
                <div className="col col-lg-4" style={{marginTop:'2rem'}}>
                {
                    topics.map((topic)=>{
                        return(
                            <h5><span style={{marginRight:'10px'}} class="badge badge-warning">{topic.label}</span></h5>
                        )
                    })
                }
                </div>
                <div className="col col-lg-8">
                <ul class="list-group" style={{marginTop:'2rem'}}>
                <li class="list-group-item"><b>Main Entities mentioned</b></li>
                {
                    entities.map((entity)=>{
                        return(
                            <li class="list-group-item">{entity.lemma}</li>
                        )
                    })
                }
                
                
            </ul>
                    
                </div>
            </div>

            <div class="card" style={{marginTop:'2rem'}} >
                
                    <div class="card-body">
                    <h5 class="card-title">Summary</h5>
                    {
                        main.map((maintext)=>{
                            return(
                                <p className="text-justify">{maintext.value}</p>
                            )
                        })
                    }
                        
                    
                    </div>
                </div>

            
          
                    
            </div>
            <h5 style={{textAlign:'center',marginTop:'2rem'}}>Sentiment</h5>
            <div style={{width: '100%'}}> 
                <BarChart ylabel='Scale'
                  width={500}
                  height={500}
                  margin={margin}
                  data={data}
                  />
            </div>
                
            
        </div>

    ):(
        <div>
        {Routes}
           
            <div className="container">
                <input type='text'
                name='name'
                id='name'
                placeholder='search'
                onChange={(e)=> setSearch(e.target.value)} 
                />
           
            <Context/>
                </div>
                
        
        </div>
    )
}

export default Dashboard;
