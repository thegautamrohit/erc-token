"use client";
import { useEffect } from "react";
import { useAppProvider } from "@/components/context/AppContext";
import Interaction from "@/components/Interaction";
import Marquee from "@/components/common/Marquee/Marquee";
import Header from "@/components/common/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const { account } = useAppProvider();
  const router = useRouter();

  console.log(account);

  useEffect(() => {
    if (!account) {
      router.push("/auth");
    }
  }, []);

  return (
    <main>
      <main>
        <Header account={account} />

        <div>
          <Marquee />
          <Interaction />
        </div>
      </main>
    </main>
  );
}
