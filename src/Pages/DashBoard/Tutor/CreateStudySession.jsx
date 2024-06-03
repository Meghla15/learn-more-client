

const CreateStudySession = () => {
    return (
        <div>
            <div className='border w-2/3 container mx-auto bg-gray-100 mt-14 mb-48'>
            <h1 className='text-center font-bold text-3xl p-4'>Add Tourist Spot</h1>


            <section className="p-6  text-gray-900">
	<form  noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			
			<div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-4">
				<div className="col-span-full sm:col-span-4">
					<label className="text-xm font-semibold">User name</label>
					<input name="name" type="text" placeholder="User name" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label className="text-xm font-semibold">User Email</label>
					<input name="email" type="text" placeholder="User Email" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label className="text-xm font-semibold">PhotoURL</label>
					<input name="photo" type="text" placeholder="PhotoURL" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label  className="text-xm font-semibold">Tourist Spot Name</label>
					<input name="spotName" type="text" placeholder="Tourist Spot Name" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label  className="text-xm font-semibold">Country Name</label>
					<input name="countryName" type="text" placeholder="Country name" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label  className="text-xm font-semibold">Location</label>
					<input name="location" type="text" placeholder="location" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>


				<div className="col-span-full">
					<label className="text-xm font-semibold">Description</label>
					<input name="description" type="text" placeholder="description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm font-semibold">Travel Time</label>
					<input name="travelTime" type="text" placeholder="Travel time" className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-xm font-semibold">Average Cost</label>
					<input name="averageCost" type="text" placeholder="Average Cost" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-xm font-semibold">Total Visiter Per Year</label>
					<input name="totalVisiter" type="text" placeholder="Total Visiter Per Year" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-xm font-semibold">Seasonality</label>
					<input name="seasonality" type="text" placeholder="Seasonality" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                
			</div>
		</fieldset>
		<button className='w-full bg-slate-400 font-semibold p-3 rounded-2xl' type="submit" value='add'>ADD</button>
	</form>
</section>
        </div>
        </div>
    );
};

export default CreateStudySession;