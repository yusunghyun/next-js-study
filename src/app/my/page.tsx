import { ThemeSwitch } from "./ThemeSwitch";

async function callApi() {
  const userReq = await fetch("https://jsonplaceholder.typicode.com/users");
  let result = await userReq.json();
  //   console.log("result : ", result);
  return result;
}

export default async function Page() {
  const userReq = await callApi();

  console.log("userReq : ", userReq.length);

  return (
    <div>
      {userReq.map((user) => (
        <li
          key={user.id}
          className="dark:bg-gray-900 bg-gray-50 w-full max-h-screen"
        >
          {user.name}
        </li>
      ))}
      <ThemeSwitch />
    </div>
  );
}
