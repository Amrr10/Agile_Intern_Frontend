import React from 'react';
import Nav_bar from './nav_bar';
import './request.css';
import 'react-datepicker/dist/react-datepicker.css';
import{useNavigate} from "react-router-dom";
import{useRef} from 'react';
import axios from 'axios';
export const getPosts=()=>{
return axios.post ('http://bsbackend.agiletz.com/api/v1/client', data);
}
var data={name:'',email:'',address:'',language:'',ageGroup:'',budget:0,landline:0,mobilePhone:0,date:'',workingDays:[]};
function Request() {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const DaysInputRef = [
    {checked:false,value:''},
    {checked:false,value:''},
    {checked:false,value:''},
    {checked:false,value:''},
    {checked:false,value:''},
    {checked:false,value:''},
    {checked:false,value:''},
  ];
  function check(key){
    DaysInputRef[key].checked=true;
  }
  const NameInputRef=useRef();
  const EmailInputRef=useRef();
  const AddressInputRef=useRef();
  const LandlineInputRef=useRef();
  const BudgetInputRef=useRef();
  const MobileInputRef=useRef();
  const LanguageInputRef=useRef();
  const KidsInputRef=useRef();
  const DateInputRef=useRef();
  DaysInputRef[0]=useRef();
  DaysInputRef[1]=useRef();
  DaysInputRef[2]=useRef();
  DaysInputRef[3]=useRef();
  DaysInputRef[4]=useRef();
  DaysInputRef[5]=useRef();
  DaysInputRef[6]=useRef();

  function submitHandler(event){
    event.preventDefault();
    const enteredName=NameInputRef.current.value;
    const enteredEmail=EmailInputRef.current.value;
    const enteredAddress=AddressInputRef.current.value;
    const enteredLandline=LandlineInputRef.current.value;
    const enteredBudget=BudgetInputRef.current.value;
    const enteredMobile=MobileInputRef.current.value;
    const enteredLanguage=LanguageInputRef.current.value;
    const enteredKids=KidsInputRef.current.value;
    const enteredDate=DateInputRef.current.value;

    let valid=false;
    let enteredDays=[];
    for (let i = 0; i < 7; i++) {
      if(DaysInputRef[i].current.checked!==false){
        enteredDays.push(DaysInputRef[i].current.value); 
        valid=true;
      }

    }
    if(valid)
    {
        data={
        name: enteredName,
        email: enteredEmail,
        address:enteredAddress,
        language:enteredLanguage,
        ageGroup:enteredKids,
        budget:enteredBudget,
        landline:enteredLandline,
        mobilePhone:enteredMobile,
        date:enteredDate,
        workingDays:enteredDays,
      };
  
      console.log(data);
      navigate('/done');
      getPosts().then((response )=>{
        console.log('response is:',response);
    }).catch((err)=>console.log(err));
    }
    else setErrorMessage("Please select atleast one day!")

  }
  return (
    <div className="Request">
      <Nav_bar/>
      <div className='req_title'>
        Request a Nanny
      </div>
      <div className='req_subtitle'>
        You are just few steps away!
      </div>
      <div className='req_container'>
        <div className='guide'>
        Please fill all the fileds are required
        </div>
              <form action="#" onSubmit={submitHandler}>
        <div className="user-details">
          <div className="input-box">
            <span className="details"><img src={require('./images/Name.jpeg')} alt="Full name"/> </span>
            <input type="text" placeholder="Contact Person Name*" required ref={NameInputRef}></input>
          </div>
          <div className="input-box">
            <span className="details"><img src={require('./images/Email.jpeg')} alt="Email"/> </span>
            <input type="text" placeholder="Contact Person Email*" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"required ref={EmailInputRef}></input>
          </div>
          <div className="input-box">
            <span className="details"><img src={require('./images/address.jpeg')}alt="address"/> </span>
            <input type="text" placeholder="Address*"  required ref={AddressInputRef}></input>

          </div>
          <div className="input-box">
            <span className="details"><img src={require('./images/Landline.jpeg')}alt="Landline"/> </span>
            <input type="text" placeholder="Land Line"  pattern="[+]?\d+(?:[.,]\d+)?" ref={LandlineInputRef}></input>
          </div>
          <div className="input-box">
            <span className="details"><img src={require('./images/Phone.jpeg')} alt="Phone"/> </span>
            <input type="text" placeholder="Moblie*" pattern="[+]?\d+(?:[.,]\d+)?" required ref={MobileInputRef}></input>
          </div>
          <div className="input-box">
            <span className="details"><img src={require('./images/Budget.jpeg')} alt="Full name"/> </span>
            <input type="text" placeholder="Budget*                                                                LE" pattern="[0-9]*" required ref={BudgetInputRef}></input>
          </div>
        <div className="input-box">
          <span className="details"><img src={require('./images/Language.jpeg')} alt="Full name"/> </span>
          <select required id='Languages' ref={LanguageInputRef}  className='select'>
            <option value="">Prefered Language*</option>
            <option value='Arabic'> Arabic</option>
            <option value='English'> English</option>
          </select>
        </div>
      <div className="input-box">
        <span className="details"><img src={require('./images/Kids.jpeg')}alt="Full name"/> </span>
        <select required id='ageRange' ref={KidsInputRef}  className='select'>
            <option value="">Kids Age Group*</option>
            <option value='0-2'> 0-2</option>
            <option value='3-5'> 3-5</option>
            <option value='6-10'> 6-10</option>
            <option value='10-12'> 10-12</option>
          </select>
      </div>
      <div className="input-box">
        <span className="details"><img src={require('./images/Calender.jpeg')} alt="Full name" position='absolute'/> </span>
        <input type="text" className="Date" placeholder='Starting Day*'
        onFocus={() => (DateInputRef.current.type = "date")} 
        onBlur={() => (DateInputRef.current.type = "text")}
        required  ref={DateInputRef}></input>
      </div>
      </div>
      <div  className='Days' required>
        <div className='title'>Select Working Days*</div>
      <label>
          <input type="checkbox" value='Saturday' ref={DaysInputRef[0]} checked={check(0)}/> Saturday
      </label>
      <label>
          <input type="checkbox" value='Sunday' ref={DaysInputRef[1]} checked={check(1)}/> Sunday
      </label>
      <label>
          <input type="checkbox" value='Monday' ref={DaysInputRef[2]} checked={check(2)}/> Monday
      </label>
      <label>
          <input type="checkbox" value='Tuesday' ref={DaysInputRef[3]} checked={check(3)}/> Tuesday
      </label>
      <label>
          <input type="checkbox" value='Wednesday' ref={DaysInputRef[4]} checked={check(4)}/> Wednesday
      </label>
      <label>
          <input type="checkbox" value='Thursday' ref={DaysInputRef[5]} checked={check(5)}/> Thursday
      </label>
      <label>
          <input type="checkbox" value='Friday' ref={DaysInputRef[6]} checked={check(6)}/> Friday
      </label>
  </div>
      <div className="button"  >
      {errorMessage && (<p className="error"> {errorMessage} </p>)}
    <input type="submit" value="Request Now"></input>
  </div>
      </form>
    </div>
    </div>

  );
}


export default Request;