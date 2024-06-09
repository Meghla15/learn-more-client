

const UploadMaterials = () => {
	const handleUpload = e =>{
		e.preventDefault()
		const form = e.target;
		const email = form.email.value 
		const sessionId = form.sessionId.value 
		const title = form.title.value
        const link = form.link.value
        const img= form.img.value
	}
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-8'>Upload Materials</h1>
            <section className=" dark:bg-gray-100 dark:text-gray-900  border-fuchsia-100 rounded-2xl">
	<form onSubmit={handleUpload} className="container flex flex-col mx-auto space-y-12">
	
		<fieldset className="grid grid-cols-4 gap-6 p-6  dark:bg-gray-50">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Tutor Email</label>
					<input name="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Study Session Id</label>
					<input name="sessionId" type="text" placeholder="Id" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Title</label>
					<input name="title" type="text" placeholder="Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Upload Link</label>
					<input name="link" type="text" placeholder="Upload link" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				<div className="col-span-full sm:col-span-6">
					<label className="text-sm">Upload Image</label>
					<input name="img" type="link" placeholder="Upload Image" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-3" />
				</div>
				
				
			</div>
		</fieldset>
		
	</form>
	<button className="btn w-2/3  bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm mx-auto">Upload</button>
</section>
        </div>
    );
};

export default UploadMaterials;