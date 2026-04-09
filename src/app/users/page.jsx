import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return (
    <div className="grid grid-cols-3 gap-4 my-4 container mx-auto">
      {users.map((user) => (
        <div key={user.id} className="card bg-blue-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            
            <div className="card-actions justify-end">
              <Link href={`/users/${user.id}`}><button className="btn btn-primary">Show Info</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
