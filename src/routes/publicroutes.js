import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/allusers/allusers';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import ContactUs from '../pages/contact/contact';
import Register from '../pages/no_greater_love/register';
import AfterRegister from '../pages/no_greater_love/afterregister';
import QuestionsStepper from '../pages/no_greater_love/questions.stepper';
import StepperAnimation from '../pages/no_greater_love/stepperanimation';

import NgHome from '../no_greater_love/pages/home/home'
import DownloadForm from '../no_greater_love/pages/additionalpages/gospelofjohndownload';
import BookletForm from '../no_greater_love/pages/additionalpages/gospelofjohnbooklet';
import EmailSignup from '../no_greater_love/pages/additionalpages/jesusiamemailsignup';
import IHaveAcceptedJesus from '../no_greater_love/pages/additionalpages/ihaveacceptedjesus';
import IWanttoAcceptJesus from '../no_greater_love/pages/additionalpages/iwanttoacceptjesus';
import IWantToLearnAboutJesus from '../no_greater_love/pages/additionalpages/iwanttolearnaboutjesus';
const PublicRoutes = () => {
    return ( 
        <>
       <Routes>
        <Route path='/' element={<NgHome/>} />
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path='/home' element={<NgHome/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/afterregister' element={<AfterRegister/>} />
        <Route path='/questionstepper' element={<QuestionsStepper/>} />
        <Route path='/stepperanimation' element={<StepperAnimation/>} />
        <Route path='/gospelofjohndownload' element={<DownloadForm/>} />
        <Route path='/gospelofjohnbooklet' element={<BookletForm/>} />
        <Route path='/jesusiamemailsignup' element={<EmailSignup/>} />
        <Route path='/ihaveacceptedjesus' element={<IHaveAcceptedJesus/>} />
        <Route path='/iwanttoacceptjesus' element={<IWanttoAcceptJesus/>} />
        <Route path='/iwanttolearnaboutjesus' element={<IWantToLearnAboutJesus/>} />
       </Routes>
       </>
     );
}
 
export default PublicRoutes;