import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../components/common/Card";
import LoadIcon from "../components/common/LoadIcon";
import Title from "../components/common/Title";

interface Coupons {
  name: String;
  description: String;
  isExpired: boolean;
  slug: String;
  img?: String;
}

const Home: NextPage = () => {
  const [coupons, setCoupons] = useState<Coupons[]>([]);
  const [ocoupons, setOCoupons] = useState<Coupons[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);

  const data = [
    {
      name: "Pizza Pizza",
      description: "50% off",
      isExpired: false,
      img: undefined,
      slug: "1",
    },
    {
      name: "Pizza Pizza",
      description: "50% off",
      isExpired: true,
      img: undefined,
      slug: "2",
    },
  ];

  useEffect(() => {
    // set fetch here
    let fetchedData: Coupons[] = data;

    // check if <3
    if (coupons.length < 3) {
      fetchedData.splice(2, 0, {
        name: "UNIQUEPROMOTION",
        description: "",
        isExpired: false,
        slug: "1",
      });
    } else {
      fetchedData.push({
        name: "UNIQUEPROMOTION",
        description: "",
        isExpired: false,
        slug: "1",
      });
    }
    setOCoupons(fetchedData);
    setCoupons(fetchedData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // set to filtered from original coupons
    setCoupons(
      ocoupons.filter(
        (item) =>
          item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      )
    );
  }, [search]);

  return (
    <>
      <Title title="Student Coupons" />
      <div className="text-center mt-12">
        <Link href="/">
          <Image
            alt="Coupon icon"
            src={"/headericon.png"}
            width={279}
            height={110}
          />
        </Link>
        <p className="text-3xl">Coupons for students</p>
      </div>

      <div className="mt-24 w-3/4 m-auto shadow-lg">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Coupons"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
            Search
          </button>
        </div>
      </div>

      <div className="mt-24 mb-12">
        {!isLoading ? (
          coupons.map((item) => {
            if (item.name === "UNIQUEPROMOTION") {
              return (
                <Link href={"/login"}>
                  <div className="mt-8 flex items-center justify-center text-center m-auto h-32 shadow-lg rounded-2xl w-3/4 p-4 bg-primary text-white relative overflow-hidden">
                    <p className="text-3xl font-bold align-middle">
                      Promote your <br /> Store here
                    </p>
                  </div>
                </Link>
              );
            } else {
              return (
                <Card link={`coupon/${item.slug}`}>
                  <div className="flex flex-row items-center h-full">
                    <div>
                      {!item.isExpired ? (
                        <Image src={"/colored.png"} height={70} width={70} />
                      ) : (
                        <Image src={"/grayout.png"} height={70} width={70} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {item.name}
                        {item.isExpired ? " (Expired)" : ""}
                      </h3>
                      <p
                        className={`${
                          item.isExpired ? "line-through text-red-500" : ""
                        } `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            }
          })
        ) : (
          <LoadIcon />
        )}
      </div>
    </>
  );
};

export default Home;
