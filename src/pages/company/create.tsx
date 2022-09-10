import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import SubmitButton from "../../components/common/SubmitButton";
import Title from "../../components/common/Title";

const CreateCompany: NextPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [header, setHeader] = useState("");
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
      <Title title="Create company" />
      <main>
        <Header hasSubHeader={false} />
        <form className="mt-12 mb-20 flex flex-col">
          <input
            type="text"
            id="rounded-email"
            className="m-auto rounded-lg border-transparent appearance-none border border-gray-300 w-3/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Company Name*"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="rounded-email"
            className="m-auto mt-10 rounded-lg border-transparent appearance-none border border-gray-300 w-3/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Address*"
            onChange={(e) => setAddress(e.target.value)}
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
export default CreateCompany;
