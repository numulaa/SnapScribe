import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { loginWithGoogle } from "@/lib/auth-action";
import { createClient } from "@/utils/supabase/server";

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <main>
      <section className="pink_container">
        <span className="tag">Transform, Share, and Inspire</span>
        <h1 className="heading">From Snapshots to Shareable Stories</h1>
        <p className="sub-heading !max-w-3xl">
          Transform Your Screenshots Into Meaningful Shareable Insights
        </p>
        {user ? (
          <Link href="/create">
            <Button type="submit" className="mt-8" variant={"hero"}>
              Transform now
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button type="submit" className="mt-8" variant={"hero"}>
              Get Started
            </Button>
          </Link>
        )}
      </section>
      <section className="section_container">
        <h2 className="heading2">Built for you</h2>
        <p className="text-center">
          Transforming your screenshots into AI-ready shareable insights
        </p>
        <ul className="flex flex-col md:flex-row gap-6 my-14">
          <li className="bg-white border-[5px] border-black flex-1 py-10 px-5 rounded-[22px] shadow-200 flex flex-col gap-4 justify-center items-center">
            <div className="h-12 w-12 p-2 bg-primary-100 text-black rounded-lg ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
              </svg>
            </div>
            <h3 className="font-semibold">Instant Text Extraction</h3>
            <p className="text-center">
              Upload your screenshots and watch as our AI instantly extracts all
              text, making your images searchable and editable in seconds
            </p>
          </li>
          <li className="bg-white border-[5px] border-black flex-1 py-10 px-5 rounded-[22px] shadow-200 flex flex-col gap-4 justify-center items-center">
            <div className="h-12 w-12 p-2 bg-primary-100 text-black rounded-lg ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
              </svg>
            </div>
            <h3 className="font-semibold">Smart Categorization</h3>
            <p className="text-center">
              Our AI automatically organizes your extracted text into relevant
              categories, helping you find and manage your information
              effortlessly.
            </p>
          </li>
          <li className="bg-white border-[5px] border-black flex-1 py-10 px-5 rounded-[22px] shadow-200 flex flex-col gap-4 justify-center items-center">
            <div className="h-12 w-12 p-2 bg-primary-100 text-black rounded-lg ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M315.4 15.5C309.7 5.9 299.2 0 288 0s-21.7 5.9-27.4 15.5l-96 160c-5.9 9.9-6.1 22.2-.4 32.2s16.3 16.2 27.8 16.2l192 0c11.5 0 22.2-6.2 27.8-16.2s5.5-22.3-.4-32.2l-96-160zM288 312l0 144c0 22.1 17.9 40 40 40l144 0c22.1 0 40-17.9 40-40l0-144c0-22.1-17.9-40-40-40l-144 0c-22.1 0-40 17.9-40 40zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
              </svg>
            </div>
            <h3 className="font-semibold">Seamless Integration</h3>
            <p className="text-center">
              Access your extracted text and categories from any device. Copy,
              edit, and share your insights with just a few clicks.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
