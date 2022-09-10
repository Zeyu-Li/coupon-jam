import { NextPage } from "next";
import { useEffect, useState } from "react";
import Title from "../../components/common/Title";

const Create: NextPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [header, setHeader] = useState("");

  useEffect(() => {
    // fetch if company exists
    return;
  }, []);

  return (
    <>
      <Title title="Create company" />
      <main>
        <div className="text-center justify-center max-w-4xl text-4xl m-auto">
          <h1 className="my-16">Page not found ¯\(°_o)/¯</h1>
        </div>
      </main>
    </>
  );
};
export default Create;
