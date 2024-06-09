import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const storeNote = useLoaderData();
    console.log(storeNote)
    const {_id,title,description} = storeNote ||{}
    const navigate = useNavigate()
    const handleUpdate = async e =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.description.value
        const updateNote = {title, description}
        console.log(updateNote)    
        
        try {
            const { data } = await axios.put(
              `${import.meta.env.VITE_API_URL}/storeNote/${_id}`,
              updateNote
            )
            console.log(data)
            navigate('/dashboard/managePersonalNote')
            Swal.fire({
                title: "Update Note Successfully",
				text: "You clicked the button!",
				icon: "success"
            })

          } catch (err) {
            console.log(err)
          }
    }
   
    return (
        <div>
            <div className="w-full container mx-auto">
            <h1 className="font-semibold text-center text-2xl">Update Your notes here</h1>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
   

    <form onSubmit={handleUpdate} >
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
		
		
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Title</label>
                <input name="title" type="text"
                defaultValue={title} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" >Description</label>
                <input name="description" type="text"
                defaultValue={description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

           

           

           
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 transition-colors duration-300 transform  bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
        </div>
        </div>
    );
};

export default Update;