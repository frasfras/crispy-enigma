import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
function Login(props) {

    const activRoutes=(
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top text-primary bg-dark portfolio-navbar gradient" >
        <div className="container-fluid"><Link className="navbar-brand logo" href="/">Rep Alert Expert</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
                id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation"><Link className="nav-link" to="/login"><i style={{marginRight:'5px'}} className="fa fa-user"></i>Login</Link></li>
                <li className="nav-item" role="presentation"><Link className="nav-link" to="/signup"><i style={{marginRight:'5px'}} className="fa fa-user"></i>Signup</Link></li>
                    
                    
                    
                    

                    
                    
                    
                </ul>
            </div>
        </div>
    </nav>
    );

    useEffect(() => {
        document.getElementById('body').style.backgroundColor='#0275d8';
        
    }, [])

    const [user,setUser]=useState({
        email:'',
        password:''
    })

    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const submit=(e)=>{
        e.preventDefault();

        const {email,password}=user;
        if(email === '' || password === ''){
            alert('Email/Password cannot be empty');
        }
        //https://expertai.herokuapp.com/login
        
        axios.post('https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/login',{
            email,
            password
        }).then(res=>{
            console.log(res);
            localStorage.setItem('token',res.data.user.token);
            localStorage.setItem('name',res.data.user.name);
            localStorage.setItem('email',res.data.user.email);
            props.history.push('/dashboard');
        }).catch(err=>{
            alert('Invalid Login ');
            
        })



        
    }
    return (
        
        <div>
        {activRoutes}
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-md-7 col-lg-7 col-xl-7">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                
                                <div class="col-lg-12">
                                
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Reputation Expert</h4>
                                        </div>
    
                                        <h5>MENTIONS FEED build analysis for brand mentions.Get summary for online MENTIONS in a few clicks</h5>
                                        <ul class="list-group">
                                            <li class="list-group-item d-flex justify-content-between align-items-center active">
                                            Analyzes tonality and sentiment
                                                <span class="badge badge-danger badge-pill">100</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Filters out irrelevant data
                                                <span class="badge badge-primary badge-pill">175</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Setup Alert 
                                                <span class="badge badge-primary badge-pill">10</span>
                                            </li>
                                        </ul>

                                        <a href="https://airtable.com/"><img src="https://v5.airtableusercontent.com/v1/10/10/1667433600000/q0SliateS-3lrvjkzlARFA/5Xut2ow7GNHd33_QTU9zXmzsVWFy_X8DVQwtPNnh7_R1uxdeeePiY_zk4r9H1lN8c9IOaYVTtjlqPBbkjqLEuQ/-SjCVTYs0XKUKyciePcF4Zr7pDtfPHGxlJi9G5xP_3U" alt="Reputation Alert" border="0"/></a>
                                        
                                        <h5><a href="https://heroic-twilight-rep.netlify.app/" target="_blank">Setup Alert for Media Monitoring</a></h5>
                                        <p><b> 2022<a href="frans-77.fred.sensetecnic.com/api/monitor" target="_blank">keyword</a> driven by  Expert.AI</b></p>
                                        
                                       
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5 col-xl-5">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                
                                <div class="col-lg-12">
                                
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Get Started!</h4>
                                        </div>
                                        <form class="user" onSubmit={submit}>
                                            <div class="form-group"><input class="form-control form-control-user" type="email" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" onChange={onChange} value={user.email}/></div>
                                            <div class="form-group"><input class="form-control form-control-user" type="password" id="password" placeholder="Password" name="password" onChange={onChange} value={user.password}/></div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"/><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                                </div>
                                            </div><button class="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                            
                                        </form>
                                       
                                        <div class="text-center"><Link class="small" to="/signup">Create an Account!</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    )
}


export default Login;
