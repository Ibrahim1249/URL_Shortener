import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { ClipboardCopy, Loader2 } from "lucide-react";

function LandingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [redirectUrl, setRedirectUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function handleUrl(data) {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:6969/url", {
        url: data.original_URL,
      });
      setIsLoading(false);
      setRedirectUrl(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }



  return (
    <>
      <div className="xl:w-[80%] lg:w-[100%] md:px-12 px-8 mx-auto">
        <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-red-950 text-center font-extrabold">
          The only URL Shortener <br /> you&rsquo;ll ever need! 👇
        </h2>

        <form
          className="xl:w-[40%] lg:w-[80%]  mx-auto flex items-center justify-center gap-4 mb-8 relative"
          onSubmit={handleSubmit(handleUrl)}
        >
          <Input
            className="border-2 border-red-900"
            placeholder="enter your url to short"
            {...register("original_URL", {
              required: "url is required",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                message: "Invalid URL address",
              },
            })}
          />
          <Button type="submit">Get Url</Button>
          {errors.url && (
            <p className="text-red-500 absolute top-10 text-center">
              {errors.url.message}
            </p>
          )}
        </form>

        {isLoading && (
          <div className="flex justify-center">
            <Loader2 className="animate-spin text-blue-500" size={48} />
          </div>
        )}

        {!isLoading && redirectUrl && (
          <div className="w-full md:w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="font-bold text-red-900 text-xl">Shortened URL:</p>
            <a
              href={redirectUrl.userShortIdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-xl cursor-pointer hover:underline "
            >
              {redirectUrl.userShortId}
            </a>
              <Button onClick={()=> navigator.clipboard.writeText(redirectUrl.userShortIdUrl)} className="bg-white text-black p-2 border hover:bg-slate-100 "><ClipboardCopy/></Button>

          </div>
        )}

        <div className="xl:w-[60%] lg:w-[90%]  mx-auto mt-20">
          <Accordion type="single" collapsible className="text-red-900 ">
            <AccordionItem value="item-1" className="border-b-2 border-red-900">
              <AccordionTrigger className="text-xl">
                How does the Trimrr URL shortener works?
              </AccordionTrigger>
              <AccordionContent className="text-[17px]">
                When you enter a long URL, our system generates a shorter
                version of that URL. This shortened URL redirects to the
                original long URL when accessed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-2 border-red-900">
              <AccordionTrigger className="text-xl">
                Do I need an account to use the app?
              </AccordionTrigger>
              <AccordionContent className="text-[17px]">
                Yes. Creating an account allows you to manage your URLs, view
                analytics, and customize your short URLs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-2 border-red-900">
              <AccordionTrigger className="text-xl">
                What analytics are available for my shortened URLs?
              </AccordionTrigger>
              <AccordionContent className="text-[17px]">
                You can view the number of clicks, geolocation data of the
                clicks and device types (mobile/desktop) for each of your
                shortened URLs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
