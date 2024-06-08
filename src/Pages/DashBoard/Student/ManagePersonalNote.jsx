import React from 'react';

const ManagePersonalNote = () => {
    return (
        <div className='w-full'>
            <h1 className='text-2xl font-bold text-center mb-6'>Manage Your Personal Note Here</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td><button className='btn btn-secondary'>Update</button></td>
        <td><button className='btn btn-primary'>Delete</button></td>
      </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManagePersonalNote;