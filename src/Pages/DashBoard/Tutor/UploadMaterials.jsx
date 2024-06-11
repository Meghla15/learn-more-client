
// import { useLoaderData } from "react-router-dom";
import axios from "axios";
import UseAuth from "../../../Hooks/UseAuth";
import { imageUpload } from "../../../api/utilis";
// import GoogleDrivePicker from "./GoogleDrivePicker";
// import { useLoaderData } from "react-router-dom";


const UploadMaterials = () => {
	const{user}= UseAuth();
	// const [materials, setMaterials] = useState('')
	// const materials= useLoaderData()
	// console.log(materials)

	const handleUpload =async e =>{
		e.preventDefault()
		const form = e.target;
		const email = form.email.value 
		const sessionId = form.sessionId.value 
		// const title = form.title.value
        // const link = form.link.value
        const image= form.image.files[0]
		// const formData = new FormData()
		// formData.append('image',image)
		// const tutor ={
		// 	name: user?.displayName,
		// 	// image: user?.photoURL,
		// 	email:user?.email
		// }
        const image_url = await imageUpload(image)
		console.log(image_url)
		const materials = {email, sessionId} 
		console.log(materials)
		

		try{
            const{data} =await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
			console.log(data.data.display_url)
			// how to set this in image

		}catch(err){
	       console.log(err)
		}
		
	}
	
	// useEffect(() => {
	// 	getData()
	//    }, [user])

	//    const getData = async () => {
	// 	const { data } = await axios ( `${import.meta.env.VITE_API_URL}/materials`)
	// 	console.log(data)
	//   }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-8'>Upload Materials</h1>
            <section className=" dark:bg-gray-100 dark:text-gray-900  border-fuchsia-100 rounded-2xl">
	<form onSubmit={handleUpload} className="container flex flex-col mx-auto space-y-12">
	
		<fieldset className="grid grid-cols-4 gap-6 p-6  dark:bg-gray-50">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Tutor Email</label>
					<input name="email" type="email" defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Study Session Id</label>
					<input name="sessionId" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>


				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Title</label>
					<input name="title" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>

				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Upload Image</label>
					<input name="image" required type="file" id="image" accept="image/*" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				
				
				
				
			</div>
		</fieldset>
		<button className="btn w-full  bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm mx-auto">Upload</button>
	</form>
	
</section>
        </div>
    );
};

export default UploadMaterials;