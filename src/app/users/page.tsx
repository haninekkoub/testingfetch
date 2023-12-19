import Link from "next/link";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData: Promise<User[]> = res.json();
  const users = await usersData;

  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <h1 className="text-3xl font-semibold">User page</h1>
      <div className="grid grid-cols-3 gap-8 w-3/4">
        <div>
          <h1>Users</h1>
          {users.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user.id} className="flex justify-between items-center">
                  {user.name} ({user.id})
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading users...</p>
          )}
        </div>
      </div>
      <Link href="/" prefetch>
        Go Home
      </Link>
    </div>
  );
}
