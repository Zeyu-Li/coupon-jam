import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import Header from "../../components/common/Header";
import LoadIcon from "../../components/common/LoadIcon";
import Title from "../../components/common/Title";
import { Coupons, CouponsData } from "../../components/interfaces/Coupons";
import CONSTANTS from "../../components/constants/constants";

interface CompanyData {
  name: string;
  address: string;
  header?: string;
}

const Coupon: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [coupon, setCoupon] = useState<CouponsData>();
  const [company, setCompany] = useState<CompanyData>();
  const [coupons, setCoupons] = useState<Coupons[]>();

  const fetchCoupon = async () => {
    // set fetch here
    try {
      const body = {
        slug: pid,
      };
      const res = await fetch(`${CONSTANTS.DEFAULT_BASE_URL}/api/readcoupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(body),
      });
      // console.log(res);
      const fetchedData = await res.json();
      setCoupon(fetchedData);
    } catch (err) {
      console.log(err);
    }
  };

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
    fetchCoupon();
  }, [pid]);

  useEffect(() => {
    if (!coupon) {
      return;
    }

    const storeId = coupon.storeId;

    fetchCompany(storeId);
    fetchCompanyCoupons(storeId);
  }, [coupon]);

  const copy = () => {
    // copy to clipboard
    navigator.clipboard.writeText(coupon?.code as string);
  };

  return (
    <>
      {/* TODO: fetch coupon and store */}
      <Title title={`Coupon for ${pid}`} />
      <main>
        <Header />
        <div className="mb-20">
          {coupon ? (
            <>
              <Card>
                <div className="flex flex-row items-center h-full">
                  <div>
                    <Image src={"/colored.png"} height={70} width={70} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {coupon.storeName}
                    </h3>
                    <p>{coupon.description}</p>
                  </div>
                </div>
              </Card>
              <div
                onClick={copy}
                className="mt-24 m-auto h-12 shadow-lg rounded-2xl w-3/4 p-4 bg-white relative overflow-hidden hover:bg-slate-50"
              >
                <div className="justify-center flex flex-row items-center h-full">
                  <p className="text-center text-2xl">
                    <b>{coupon.code}</b>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <LoadIcon />
          )}
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
                        rel="noreferrer"
                        target="_blank"
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
          <h2 className="text-4xl text-center mt-6 mb-12">Other Coupons</h2>

          {coupons ? (
            coupons.map((item) => (
              <Card link={`${item.isExpired ? "" : item.slug}`} key={item.slug}>
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
              </Card>
            ))
          ) : (
            <LoadIcon />
          )}
        </div>
      </main>
    </>
  );
};
export default Coupon;
