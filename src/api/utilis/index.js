import axios from "axios"

export const imageUpload = async image => {
  // console.log(image)
       const formData = new FormData()
		formData.append('image',image)

    const {data} =await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData,{
      headers: {
          'content-type': 'multipart/form-data'
      }
  })
    
    return data.data.display_url
}