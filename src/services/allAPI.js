import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// upload video
export const uploadVideoAPI = async (video) => {
    // send response to add component
    return await commonAPI("POST", `${SERVER_URL}/videos`, video)
}
// get video api called by view component
export const getAllVideosAPI = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/videos`, "")

}
// store watch history by videocard to local host 3000
export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
// get history to watch component 
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
//remove history to watch component 
export const removeHistoryAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
// delete video 
export const removeVideosAPI = async(videoId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/videos/${videoId}`,{})

}
// save category to category component
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}
// get category to category component

export const getCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}
// remove category api

export const  removeCategoryAPI=async(categoryId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${categoryId}`,{})

}
// get video api
export const getAVideoAPI=async(videoId)=>{
    return await commonAPI("GET", `${SERVER_URL}/videos/${videoId}`, "")

}
// update category api
export const updateCategoryAPI = async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
}
// get single category api
export const getSingleCategoryAPI = async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}