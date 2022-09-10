import { NextPage } from "next";
import LinkButton from "../components/common/LinkButton";
import Title from "../components/common/Title";

const Custom404: NextPage = () => {
  return (
    <>
      <Title title="Page Stolen 😳" />
      <main>
        <div className="text-center justify-center max-w-4xl text-4xl">
          <h1 className="my-16">Page not found ¯\(°_o)/¯</h1>
          <LinkButton text={"Back to Home"} />
        </div>
      </main>
    </>
  );
};
export default Custom404;
