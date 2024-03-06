
import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"
import { uploadVideoAPI } from '../services/allAPI';



function Add({setUploadVideoResponse}) {

  const [uploadVideo, setUploadVideo] = useState({
    caption: "", imageURL: "", youtubeLink: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setUploadVideo({ ...uploadVideo, caption: "", imageURL: "", youtubeLink: "" })
  }
  const handleShow = () => setShow(true);
  console.log(uploadVideo);

  const getYoutubeEmbedlink = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      setUploadVideo({ ...uploadVideo, youtubeLink: `http://www.youtube.com/embed/${videoId}` })
    } else {
      setUploadVideo({ ...uploadVideo, youtubeLink: "" })
      alert("input proper youtube link!!!")
    }
  }

  const handleUpload = async () => {
    // store video in local host 3000/videos
    const { caption, imageURL, youtubeLink } = uploadVideo
    if (caption && imageURL && youtubeLink) {
      // proceed to store video from http://localhost:5173/home to http://localhost:3000/
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        alert(`video '${result.data.caption}' uploaded successfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose()
      } else {
        alert("API call failed..please try after some time!!")
      }
    } else {
      alert("please fill the form completely!!!")
    }
  }
  return (
    <>
      <div className="d-flex">
        <h5>Upload A Video</h5>
        <button onClick={handleShow} className='btn  bg-secondary ms-2 '><i className="fa-solid fa-plus"></i></button></div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please  Fill The Following Details!!!</p>
          <div className='border rounded border-secondary p-3'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type="text" placeholder="Video Caption" value={uploadVideo.caption} />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputImg"
              label="Image Url"
              className="mb-3"
            >
              <Form.Control onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })} type="text" placeholder="Image Url" value={uploadVideo.imageURL} />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Link"
              className="mb-3"
            >
              <Form.Control onChange={e => getYoutubeEmbedlink(e.target.value)} type="text" placeholder="Youtube Video Link" value={uploadVideo.youtubeLink} />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add