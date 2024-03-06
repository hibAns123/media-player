import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category({removeCategoryVideoResponse}) {
  const [allCategories, setAllCategories] = useState("")
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  const handleAddCategory = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      handleClose()
      getAllCategories()
    } else {
      alert('please fill the form completely!!')
    }
  }
  const getAllCategories = async () => {
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }
  useEffect(() => {
    getAllCategories()
  }, [removeCategoryVideoResponse])
  const handleRemoveCategory=async(cId)=>{
    await removeCategoryAPI(cId)
    getAllCategories()
  }
  const dragOverCategory =(e)=>{
    e.preventDefault()

    console.log(`dragging over category`);
  }
  const videoDropped=async(e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log(`video Dropped with vId:${videoId},inside category id:${categoryId}`);
    // get detail od videoId
    const {data}=await getAVideoAPI(videoId)
    console.log(data);
    // get category detail wher evideo added
    let selectecCategory=allCategories.find(item=>item.id==categoryId)
    selectecCategory.allVideos.push(data)
    console.log(selectecCategory);
    await updateCategoryAPI(categoryId,selectecCategory)
    getAllCategories()
  }
  const videoDragStarted = (e,videoId,categoryId)=>{
    console.log(`Drag started from category id: ${categoryId} with video id:${videoId}`);
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }
  return (
    <>
      <div className='d-flex justify-content-around'>
        <h3>All Categories</h3>
        <button onClick={handleShow} style={{ width: '60px', height: '60px' }} className='btn btn-info rounded-circle fs-5 '> + </button></div>
      <div className="container-fluid mt-3">
        {allCategories.length > 0 ? allCategories.map((item, index) => (
          <div droppable='true' onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item.id)} key={index} className="border rounded p-3 mb-2">
            <div className='d-flex justify-content-between'>
              <h5>{item.categoryName}</h5>
              <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
              <div className="row mt-2">
              {
                item.allVideos?.length>0&& item.allVideos?.map((video,index)=>(
                  <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                                      <VideoCard insideCategory={true} displayData={video}/>

                  </div>

                ))
              }
              </div>
             
           
            </div>
            )

            )

          
        :
          <div className='text-danger fw-bolder'>No categories are added yet!!</div>
        }
      </div>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard='false'>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded border-secondary p-3'>
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control value={categoryName} onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Video Caption" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category