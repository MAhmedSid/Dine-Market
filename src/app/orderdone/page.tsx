import { ArrowBigRightIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return <main className="min-h-[50vh] flex justify-center items-center">
    <section className="flex flex-col justify-center items-center gap-y-4">
        <h2 className="text-3xl font-bold text-pri_black">Purchase has Done (^_^)</h2>
        <Link href={"/"} className="flex gap-x-3 p-4 bg-pri_black text-slate-300 rounded-lg group"><span>Back to Shopping</span><span className="group-hover:translate-x-2 transition-all duration-100"><ArrowRight /></span></Link>
    </section>
  </main>;
}

export default Page;
