import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [mobile, setMobile] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e)=>{
  //  e.preventDefault();
   const data = { 
    Name:name,
    Email:email,
    School:school,
    Grade:grade,
    Subject:subject,
    Mobile:mobile,
    Suggestion:suggestion
   }
   axios.post('https://sheet.best/api/sheets/fa0463dc-7321-46bb-8da9-67766bf25185',data).then((response)=>{
    console.log(response);
    setName('');
    setEmail('');
    setSchool('');
    setGrade('');
    setSubject('');
    setMobile('');
    setSuggestion('');
   })
 }

  

  return (
    
    <div className="container">
              <center> <h1>Book a Free Trial Session</h1> </center>

      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <fieldset>  
        
        <input type="text" placeholder='Name' className="form-control" onChange={(e)=> setName(e.target.value)} required />
        <br />
        
       <input type="email" placeholder='Email' className="form-control" onChange={(e)=> setEmail(e.target.value)} required />
        <br />
      
         <input type="text" placeholder='School' className="form-control" onChange={(e)=> setSchool(e.target.value)} required/>
        
        <br />
       <input type="text" placeholder='Grade' className="form-control" onChange={(e)=> setGrade(e.target.value)} required/>
        <br />
      
       <input type="text" placeholder='Subject' className="form-control" onChange={(e)=> setSubject(e.target.value)} required/>
        <br />
      
       <input type="tel" placeholder='Mobile' className="form-control" onChange={(e)=> setMobile(e.target.value)} required/> 
      <br />
    <div className="d-grid">
       <textarea  className="form-control" cols="60" rows="5" placeholder='Suggestion' onChange={(e)=> setSuggestion(e.target.value)}></textarea>
       </div>
        <br />
      <div className='d-grid py-2'>
        <button type="submit" className="btn btn-primary btn-lg active">Submit</button>
      </div>
      </fieldset>
      </form>
       </div>
  );
}

export default App;

// https://script.google.com/macros/s/AKfycbw10XMG5y0Crd7e4DRvTO02HY234alKlhsRc_2UN3c7Us6MXrvu3oDGed5eQZU7rHxYNg/exec