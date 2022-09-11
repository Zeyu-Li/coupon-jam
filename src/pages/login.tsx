import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/common/Header";
import SubmitButton from "../components/common/SubmitButton";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push("/company/create");
  }
  return (
    <div>
      <Header />
      <div className="flex items-center v-full justify-center mt-24">
        <button
          type="submit"
          onClick={() => signIn()}
          className="mb-8 inline text-3xl transition-all text-white bg-white rounded-lg py-3.5 px-6 m-4 hover:bg-white font-bold shadow-xl"
        >
          <Image
            src={"/google.png"}
            height={32}
            width={32}
            className="inline-block align-middle pt-10"
          />
          <p className="font-bold pb-12 text-black inline px-12">Sign in</p>
        </button>
      </div>
    </div>
  );
}
