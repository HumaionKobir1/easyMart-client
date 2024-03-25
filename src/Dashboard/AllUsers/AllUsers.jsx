import { useEffect, useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://easymart-server.vercel.app//users')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            console.log(data)
        })
    },[])

    return (
        <div className="w-full max-h-full md:p-16">
            <h3 className="text-2xl font-semibold my-4">Total Users: {users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>Remove User</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td className="flex gap-2">
                                {user.role === 'admin' ? 'admin' : <button  className="btn btn-ghost btn-sm bg-orange-400"><FaUserShield></FaUserShield></button> }
                                {user.role === 'customer' ? 'customer' : <button className="btn btn-ghost btn-sm bg-orange-400"></button>}
                            </td>
                            <td><button className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
</td>
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;