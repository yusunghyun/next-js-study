import Image from "next/image";
import axios from "axios";

async function callApi() {
  const userReq = await fetch("https://api.rwnjs.com/04/users");
  let result = await userReq.json();
  console.log("result : ", result);
  return result;
}

export default async function Home() {
  const userReq = await callApi;

  console.log("userReq : ", userReq);

  return <div />;
}
