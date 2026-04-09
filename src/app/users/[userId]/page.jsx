

const UserDetails = async({params}) => {
    const {userId} = await params;
    console.log(userId);

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);
    return (
        <div className="p-2 shadow rounded-md bg-blue-200">
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
        </div>
    );
};

export default UserDetails;