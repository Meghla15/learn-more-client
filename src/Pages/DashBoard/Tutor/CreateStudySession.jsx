import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const CreateStudySession = () => {
	const {user} = UseAuth()
	const navigate = useNavigate()
	const handleAddSession = async e =>{
		e.preventDefault()
		const form = e.target;
		const name = form.name.value;
        const email = form.email.value;
		const sessionTitle = form.sessionTitle.value;
        const status = form.status.value;
        const description = form.description.value;
        const sessionDuration = form.sessionDuration.value;
        const registrationStartDate = form.registrationStartDate.value;
        const registrationEndDate = form.registrationEndDate.value;
        const classStart = form.classStart.value;
        const classEnd = form.classEnd.value;
        const fee = form.fee.value;

		const addSession = {name, email,sessionTitle,status,description,sessionDuration,registrationStartDate, registrationEndDate,classStart,classEnd,fee}
		console.log(addSession)

		try{
			const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/studySession`, addSession)
			console.log(data)
			navigate('/')
			Swal.fire({
				title: "Study Session Added Successfully",
				text: "You clicked the button!",
				icon: "success"
		    })}
		catch(error){
			console.log(error)
		}
	}
    return (
        <div>
			<Helmet><title>Learn More || Create Study Session</title></Helmet>
            <div className=' w-full container mx-auto  mb-48'>
           


            <section className="p-6 bg-fuchsia-50 container mx-auto mt-6 mb-14 rounded-2xl dark:text-gray-900">
	<form onSubmit={handleAddSession} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-3 col-span-full lg:col-span-1">
				<p className="font-semibold text-xl">Create Study Session</p>
				<p className="text-xs text-center mt-2"></p>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="f" className="text-sm font-semibold text-fuchsia-600">Added By : (Name)</label>
					<input id="name" disabled defaultValue={user?.displayName } name='name' type="text" placeholder='' className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full  sm:col-span-3">
					<label htmlFor="email" className="text-sm font-semibold text-fuchsia-600">Added By : (Email)</label>
					<input id="email" disabled defaultValue={user?.email} name='email' type="email" placeholder="Email" className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
			</div>
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

           
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-semibold">Session Title</label>
					<input   name='sessionTitle' type="text" placeholder="Session Title" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-semibold">Status</label>
					<input name='status' type="text" defaultValue='pending' className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-semibold">Session Description</label>
					<input  name='description' type="text" placeholder="Description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm font-semibold">Session Duration</label>
					<input  name='sessionDuration' type="number" placeholder="Session duration" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm font-semibold">Registration Start Date</label>
					<input  name='registrationStartDate' type="date" placeholder="Registration Start Date" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm font-semibold">Registration End Date</label>
					<input  name='registrationEndDate' type="date" placeholder="Registration End Date" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
				
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm font-semibold">Class Start</label>
					<input  name='classStart' type="date" placeholder="Quantity" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm font-semibold">Class End</label>
					<input  name='classEnd' type="date" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm font-semibold">Registration Fee</label>
					<input  name='fee' type="text" defaultValue='Free' className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</div>
		</fieldset>
        <button className='w-1/3 mx-auto bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold p-3 rounded-2xl' type="submit" value='add'>ADD</button>
	</form>
</section>
        </div>
        </div>
    );
};

export default CreateStudySession;