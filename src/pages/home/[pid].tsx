import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import CardRemovable from "../../components/common/CardRemovable";
import Header from "../../components/common/Header";
import LinkButton from "../../components/common/LinkButton";
import LoadIcon from "../../components/common/LoadIcon";
import SubmitButton from "../../components/common/SubmitButton";
import Title from "../../components/common/Title";
import CONSTANTS from "../../components/constants/constants";
import { Coupons, CouponsData } from "../../components/interfaces/Coupons";

interface CompanyData {
  name: string;
  address: string;
  header?: string;
}

const Coupon: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [company, setCompany] = useState<CompanyData>();
  const [coupons, setCoupons] = useState<Coupons[]>();

  const fetchCompany = async (storeId: string) => {
    // set fetch here
    try {
      const body = {
        id: storeId,
      };
      const res = await fetch(`${CONSTANTS.DEFAULT_BASE_URL}/api/readstore`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(body),
      });
      const fetchedData = await res.json();
      setCompany(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCompanyCoupons = async (storeId: string) => {
    // set fetch here
    try {
      const body = {
        storeId: storeId,
      };
      const res = await fetch(
        `${CONSTANTS.DEFAULT_BASE_URL}/api/companycoupons`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(body),
        }
      );
      const fetchedData = await res.json();
      setCoupons(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCompany(pid);
    fetchCompanyCoupons(pid);
  }, [pid]);

  const removeItem = async (slug: string) => {
    // remove coupon from database
    const res = await fetch(`${CONSTANTS.DEFAULT_BASE_URL}/api/deletecoupon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    const postData: any = await res.json();

    if (postData) {
      alert("Refresh page to see changes");
    }
  };

  return (
    <>
      {/* TODO: fetch coupon and store */}
      <Title title="Company Home" />
      <main>
        <Header hasSubHeader={false} />
        <div className="mb-20">
          {company ? (
            <div className="mt-16">
              <Card>
                <div className="flex flex-row items-center h-full">
                  {company.header ? (
                    <div>
                      <Image src={company.header} height={70} width={"100%"} />
                    </div>
                  ) : null}
                  <div>
                    <h3 className="text-2xl font-semibold text-center">
                      {company.name}
                    </h3>
                    <div className="flex flex-row">
                      <p className="max-w-[70%]">{company.address}</p>
                      <a
                        href={`https://www.google.com/maps/search/${company.address
                          .split(" ")
                          .join("+")}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image src={"/map.png"} height={50} width={50} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <LoadIcon />
          )}
          <div className="flex items-center v-full justify-center">
            <SubmitButton
              title="Sign out"
              text="Sign out"
              onClick={() => signOut()}
            />
          </div>
          <h2 className="text-4xl text-center mt-6 mb-12">Your Coupons</h2>

          {coupons?.length ? (
            coupons.map((item) => (
              <CardRemovable
                link={`${item.isExpired ? "" : "/coupon/"+String(item.slug)}`}
                onRemove={removeItem}
                slug={item.slug}
                key={item.slug}
              >
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
                      {item.storeName}
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
              </CardRemovable>
            ))
          ) : (
            <div>
              <p className="text-center text-2xl mb-8">
                <b>No Coupons? :(</b>
              </p>
              <p className="text-center text-8xl mb-8">
                <b>🤷‍♂️</b>
              </p>
              <div className="w-full flex">
                <LinkButton
                  title="Create Coupon"
                  to="/create"
                  text="Create Coupon"
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* floating + icon */}
      <div>
        <div className="">
          <Link href={"/create"} title={"Create Coupon"}>
            <button className=" fixed float-right bottom-0 right-0 m-8 text-3xl transition-all text-white bg-blue-800 rounded-full p-4 px-6  hover:bg-blue-600 font-bold">
              +
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coupon;
