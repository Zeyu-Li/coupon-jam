import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import Header from "../../components/common/Header";
import LoadIcon from "../../components/common/LoadIcon";
import Title from "../../components/common/Title";
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

  const companyData = {
    name: "Pizza Pizza",
    address: "8404 109 St NW Edmonton, AB T6G 1E2",
  };
  const couponsData = [
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
      slug: "1",
    },
  ];

  useEffect(() => {
    // get coupon belonging to company
    setCompany(companyData);
    setCoupons(couponsData);
  }, []);

  return (
    <>
      {/* TODO: fetch coupon and store */}
      <Title title="Company Home" />
      <main>
        <Header />
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
                      {companyData.name}
                    </h3>
                    <div className="flex flex-row">
                      <p className="max-w-[70%]">{companyData.address}</p>
                      <Image src={"/map.png"} height={50} width={50} />
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
              <Card link={`${item.slug}`}>
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
