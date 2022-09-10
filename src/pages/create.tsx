import { NextPage } from "next";
import { getSession, GetSessionParams } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SubmitButton from "../components/common/SubmitButton";
import Title from "../components/common/Title";

const CreateCompany: NextPage = () => {
  const [description, setDescription] = useState("");
  const [expire, setExpire] = useState("");
  const [preview, setPreview] = useState();
  const router = useRouter();

  useEffect(() => {
    // fetch if company exists
    return;
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
    // submit to database

    const pid = "1";

    router.push(`/home/${pid}`);
  };
  return (
    <>
      <Title title="Create Company" />
      <main>
        <Header hasSubHeader={false} />
        <form className="mt-12 mb-20 flex flex-col">
          <input
            type="text"
            id="rounded-email"
            className="m-auto rounded-lg border-transparent appearance-none border border-gray-300 w-3/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Company Name*"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            id="rounded-email"
            className="m-auto mt-10 rounded-lg border-transparent appearance-none border border-gray-300 w-3/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Address*"
            onChange={(e) => setExpire(e.target.value)}
          />
          <div className="mt-12 m-auto ">
            <SubmitButton
              title="Submit company"
              onClick={submit}
              text="Submit"
            />
          </div>
        </form>
      </main>
    </>
  );
};

// export async function getServerSideProps(context: any) {
//   const session = await getSession(context);
//   if (!session) {
//     context.res.writeHead(302, { Location: "/user" });
//     context.res.end();
//     return {};
//   }
//   return {
//     props: {
//       user: session.user,
//     },
//   };
// }

export default CreateCompany;
