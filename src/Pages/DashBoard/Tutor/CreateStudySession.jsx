

const CreateStudySession = () => {
    return (
        <div>
            <div className='border w-2/3 container mx-auto bg-gray-100 mt-14 mb-48'>
            <h1 className='text-center font-bold text-3xl p-4'>Add Tourist Spot</h1>


            <section className="p-6 bg-fuchsia-50 container mx-auto mt-6 mb-14 rounded-2xl dark:text-gray-900">
	<form  noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-3 col-span-full lg:col-span-1">
				<p className="font-semibold text-2xl">Create Notes</p>
				<p className="text-xs text-center mt-2"></p>
				{/* <div className="col-span-full sm:col-span-3">
					<label htmlFor="f" className="text-sm font-semibold text-orange-600">Added By : (Name)</label>
					<input id="name" disabled defaultValue={user?.displayName } name='name' type="text" placeholder='' className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full  sm:col-span-3">
					<label htmlFor="email" className="text-sm font-semibold text-orange-600">Added By : (Email)</label>
					<input id="email" disabled defaultValue={user?.email} name='email' type="email" placeholder="Email" className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div> */}
				
			</div>
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

           
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="foodName" className="text-sm font-semibold">Made By</label>
					<input id="made_by"  name='made_by' type="text" placeholder="Made by" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="foodName" className="text-sm font-semibold">Food Name</label>
					<input id="foodName" name='food_name' type="text" placeholder="Food Name" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="photo" className="text-sm font-semibold">Food PhotoURL</label>
					<input id="photo" name='photo' type="text" placeholder="PhotoURL" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="category" className="text-sm font-semibold">Category</label>
					<input id="category" name='category' type="category" placeholder="Category" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="description" className="text-sm font-semibold">Description</label>
					<input id="description" name='description' type="text" placeholder="Description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="origin" className="text-sm font-semibold">Origin(Country)</label>
					<input id="food_origin" name='food_origin' type="text" placeholder="Country" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm font-semibold">Quantity</label>
					<input id="quantity" name='quantity' type="number" placeholder="Quantity" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm font-semibold">Price</label>
					<input id="price" name='Price' type="number" placeholder="Price" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</div>
		</fieldset>
        <button className='w-2/3 mx-auto bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold p-3 rounded-2xl' type="submit" value='add'>ADD</button>
	</form>
</section>
        </div>
        </div>
    );
};

export default CreateStudySession;