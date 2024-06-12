import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Col, Row, Alert } from 'react-bootstrap';
import { AiTwotoneDelete } from 'react-icons/ai';
import { IoClose, IoDocumentTextOutline } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';



  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const base64ToFile = (base64String, fileName) => {
    const arr = base64String.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };  

const ResumeModel = () => {


  const [showModal, setShowModal] = useState(false);
      const [resume, setResume] = useState(null);
      const [error, setError] = useState('');
      const [downloadUrl, setDownloadUrl] = useState(null);
    
      const handleOpenModal = () => setShowModal(true);
      const handleCloseModal = () => {
        setShowModal(false);
        setError('');
      };
    
      const handleReplaceResume = () => {
        console.log('Replacing resume...');
        handleCloseModal();
      };
    
      useEffect(() => {
        const savedResume = localStorage.getItem('resume');
        const savedResumeName = localStorage.getItem('resumeName');
        if (savedResume && savedResumeName) {
          const resumeFile = base64ToFile(savedResume, savedResumeName);
          setResume(resumeFile);
          setDownloadUrl(URL.createObjectURL(resumeFile));
        }
      }, []);
    
      const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const fileType = file.type;
          const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
          if (validTypes.includes(fileType)) {
            const base64File = await fileToBase64(file);
            setResume(file);
            setError('');
            setDownloadUrl(URL.createObjectURL(file));
            localStorage.setItem('resume', base64File);
            localStorage.setItem('resumeName', file.name);
          } else {
            setError('Invalid file type. Only PDF and Word documents are accepted.');
          }
        }
      };
    
      const handleUpload = () => {
        if (resume) {
          console.log('Resume uploaded:', resume);
          handleCloseModal();
        } else {
          setError('Please select a file to upload.');
        }
      };
    
      const handleClear = () => {
        setResume(null);
        localStorage.removeItem('resume');
        localStorage.removeItem('resumeName');
        setDownloadUrl(null);
      };
    
      const handleDownload = () => {
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = resume.name;
        a.click();
      };




  // const [showModal, setShowModal] = useState(false);
  // const [resume, setResume] = useState(null);
  // const [error, setError] = useState('');
  // const [downloadUrl, setDownloadUrl] = useState(null);
  
  // const handleOpenModal = () => setShowModal(true);
  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setError('');
  // };

  // const handleReplaceResume = () => {
  //   // console.log('Replacing resume...');
  //   handleCloseModal();
  // };

  // useEffect(() => {
  //   const savedResume = localStorage.getItem('resume');
  //   if (savedResume) {
  //     const resumeBlob = new Blob([JSON.parse(savedResume)], { type: JSON.parse(savedResume).type });
  //     setResume(JSON.parse(savedResume));
  //     setDownloadUrl(URL.createObjectURL(resumeBlob));
  //   }
  // }, []);

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const fileType = file.type;
  //     const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  //     if (validTypes.includes(fileType)) {
  //       setResume(file);
  //       setError('');
  //       setDownloadUrl(URL.createObjectURL(file));
  //     } else {
  //       setError('Invalid file type. Only PDF and Word documents are accepted.');
  //     }
  //   }
  // };

  // const handleUpload = () => {
  //   if (resume) {
  //     console.log('Resume uploaded:', resume);
  //     localStorage.setItem('resume', JSON.stringify(resume));
  //     handleCloseModal();
  //   } else {
  //     setError('Please select a file to upload.');
  //   }
  // };

  // const handleClear = () => {
  //   setResume(null);
  //   localStorage.removeItem('resume');
  //   setDownloadUrl(null);
  // };

  // const handleDownload = () => {
  //   const a = document.createElement('a');
  //   a.href = downloadUrl;
  //   a.download = resume.name;
  //   a.click();
  // };

  

  return (
    <>
      <Row>
        <Col className='col-lg-12'>
          <div className='ResumeDivWrapper'>
            <div className='ResumeDivWrapperHeaddingdiv'>
              <h5>Resume</h5>
            </div>
            {resume ? (
              <div className='ResumedivWrapper'>
                <div className='resumeWrapperInnerDiv'>
                  <div className='ResumeIconDiv'>
                    <IoDocumentTextOutline size="26" color="#888888"/>
                  </div>
                  <div>
                    <h6>{resume.name}</h6>
                  </div>
                </div>
                <div className='DeleteandDownloadIcon'>
                  <div className='DeleteButton' onClick={handleClear}>
                    <AiTwotoneDelete size={18}/>
                  </div>
                  <div className='downloadIcon' onClick={handleDownload}>
                    <LuDownload size={18}/>
                  </div>
                </div>
              </div>
            ) : (
              <div>No resume uploaded</div>
            )}
            <div className='uploadResumeDiv'>
              <div onClick={handleOpenModal}>
                <button className='btn-uploadResume'>Upload Resume</button>
              </div>
              <div>
                <span>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <div className='resumeUploaderPopup'>
              <div className='resumeuploadinnerWrapper'>
                <div className='resumeUploaderHeadding'>
                  <h5>{resume ? "Replace Resume" : "Upload Resume"}</h5>
                </div>
                <div>
                    <IoClose size={22}/>
                </div>
              </div>

              <div>

                  <div className='mainResumeDiv'>
                    <Form>
                          <Form.Group controlId="formResume">
                          <Form.Label className='formLabelText'>{resume ? "Replace existing resume" : "Upload Resume"}</Form.Label>
                        <Form.Control className='forminputWrapper'
                          type="file"
                          onChange={handleFileChange}/>
                        </Form.Group>
                  </Form>

                  <div className='ErrorText'>
                      {error && <span className='error' >{error}</span>}
                  </div>
                  </div>
              </div>

              <div className='resumeButtons'>
                  <div>
                    <button className='popupCloseButton' onClick={handleCloseModal}>Close</button>
                  </div>
                  <div>
                    <button className='popupReplaceAndUploadBtn' onClick={resume ? handleReplaceResume : handleUpload}>
                      {resume ? "Replace" : "Upload"}
                    </button>
                  </div>
                  <div>
                  <button className='btn-ClearResume' onClick={handleClear}>
                    Clear Resume
                  </button>
                  </div>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResumeModel;
