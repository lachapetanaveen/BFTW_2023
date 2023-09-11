import React, { Component,useState } from 'react';
import Button from "@mui/material/Button";
import axios from 'axios';
import { Interests } from '../../../constants/constants'
import { toast } from 'react-toastify';
import { uploadresourse } from '../../../services/resourseService';
import NGLVHeader from '../../components/header';


const ChristianResources = () => {
    const [files, setFiles] = useState([]);
    const [interest, setInterest] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [fileUrls, setFileUrls] = useState([]);
  
    const handleFileChange = (event) => {
  
      const selectedFiles = event.target.files;
      const fileList = Array.from(selectedFiles);
      const types = fileList.map((file) => file.type);
      setFileType(types)
      setFiles(fileList);
    };
    const resourseupload = async () => {
        try {
          const formData = new FormData();
          for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
          }
          formData.append('interests', interest);
          formData.append('filetype', fileType);
          console.log(formData, 'formdata');
          const response = await uploadresourse(formData)
          console.log(response, 'response');
          toast.success('Resourses Upload SuccessFully')
        } catch (ex) {
          toast.error('Something Went Wrong')
        }
      }
      const handleselect = (item) => {
        if (interest.includes(item)) {
          const det = interest.filter(value => value !== item);
          setInterest(det)
        } else {
          let arr = [...interest];
          arr.push(item);
    
          setInterest(arr)
        }
      }
    return ( 
        <div>
          <NGLVHeader />
             {/* <header>
                    <h2>Christian Resources</h2>
                </header> */}
                <section id="intro" class="content-section">
                <div className='container-fluid content'>
            <div className='profile-box' style={{ marginTop: '60px', }}>
                <div style={{ padding: '10px', textAlign: 'center' }} className='th-bg'>
                  <h4>Resources</h4>
                </div>
                <div style={{ padding: '20px' }}>

                  <div className="mb-4">
                    <h6 style={{ marginTop: '20px' }}>Choose Interests : </h6>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {Interests.map((item, index) => {
                        return (
                          <div style={{ display: 'flex', marginLeft: '16px' }}>
                            <input checked={interest.includes(item)} onChange={() => handleselect(item)} style={{ marginRight: '6px' }} type="checkbox" />
                            <label style={{ marginTop: '10px' }}>{item === 'cwc' ? 'Connect With Church' : item === 'ms' ? 'More Scripture' : item}</label>
                          </div>
                        )
                      })}

                      {/* <div style={{ display: 'flex', marginLeft: '16px' }}>
                        <input checked={interest.includes('Counselling')} onChange={() => handleselect('Counselling')} style={{ marginRight: '6px' }} type="checkbox" />
                        <label style={{ marginTop: '10px' }}>Counselling</label>
                      </div>
                      <div style={{ display: 'flex', marginLeft: '16px' }}>
                        <input checked={interest.includes('Connect with a Church')} onChange={() => handleselect('Connect with a Church')} style={{ marginRight: '6px' }} type="checkbox" />
                        <label style={{ marginTop: '10px' }}>Connect with a Church</label>
                      </div>
                      <div style={{ display: 'flex', marginLeft: '16px' }}>
                        <input checked={interest.includes('More Scripture')} onChange={() => handleselect('More Scripture')} style={{ marginRight: '6px' }} type="checkbox" />
                        <label style={{ marginTop: '10px' }}>More Scripture</label>
                      </div> */}
                    </div>

                  </div>
                  <div>
                    <select style={{ display: 'block', borderRadius: 10, width: '100%', height: '40px', borderColor: 'gray', borderWidth: 0.5, padding: 4 }}>
                      <option>Select Upload File Type</option>
                      <option value="pdf">PDF</option>
                      <option value="audio">Audio</option>
                      <option value="video">Video</option>
                    </select>
                  </div>
                  <div >
                    <label htmlFor="file-upload" className="custom-file-upload">
                      <div className="background-image"></div>
                      Upload File
                    </label>
                    <input id="file-upload" multiple onChange={handleFileChange} type="file" hidden />
                  </div>

                  {files.map((file, index) => {
                    const fileType = file.type;

                    if (fileType.startsWith('image')) {
                      return (
                        <div key={index}>
                          <img src={URL.createObjectURL(file)} alt={`File ${index}`} />
                        </div>
                      );
                    } else if (fileType.startsWith('video')) {
                      return (
                        <div key={index}>
                          <video controls>
                            <source src={URL.createObjectURL(file)} type={fileType} />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      );
                    } else if (fileType.startsWith('audio')) {
                      return (
                        <div key={index}>
                          <audio controls>
                            <source src={URL.createObjectURL(file)} type={fileType} />
                            Your browser does not support the audio tag.
                          </audio>
                        </div>
                      );
                    } else if (fileType.startsWith('application/pdf')) {
                      return (
                        <div key={index}>
                          <embed
                            src={URL.createObjectURL(file)}
                            type="application/pdf"
                            width="100%"
                            height="250px"
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div key={index}>
                          <p>Unsupported file type: {file.name}</p>
                        </div>
                      );
                    }
                  })}
                  <div style={{ marginTop: '20px' }}>
                    <Button
                      className="btn btn-lg btn-primary"
                      style={{ width: '100%' }}
                      variant="contained"
                      onClick={() => resourseupload()}
                    >
                      Upload Details
                    </Button>
                  </div>
               </div></div>
               </div>
               </section>
        </div>
     );
}
 
export default ChristianResources;