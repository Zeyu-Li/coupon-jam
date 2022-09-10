import type { NextPage } from "next";
import Title from "../components/common/Title";
import CardsSection from "../components/home/CardsSection";

const Home: NextPage = () => {
  return (
    <>
      <Title title="Student Coupons" />
      <CardsSection />
    </>
  );
};

export default Home;
