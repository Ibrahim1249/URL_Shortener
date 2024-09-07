import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function LandingPage() {
    const [originalUrl , setOriginalUrl ] = useState("");

  return (
    <>
      <div className="w-[80%] mx-auto">
        <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-red-950 text-center font-extrabold">
          The only URL Shortener <br /> you&rsquo;ll ever need! 👇
        </h2>

        <form className="w-[40%] mx-auto flex items-center justify-center gap-4 mb-24">
          <Input className="border-2 border-red-900" placeholder="enter your url to short" required/>
          <Button type="submit">Get Url</Button>
        </form>

        <div className="w-[60%] mx-auto ">
          <Accordion
            type="single"
            collapsible
            className="text-red-900 "
          >
            <AccordionItem value="item-1" className="border-b-2 border-red-900">
              <AccordionTrigger>
                How does the Trimrr URL shortener works?
              </AccordionTrigger>
              <AccordionContent>
                When you enter a long URL, our system generates a shorter
                version of that URL. This shortened URL redirects to the
                original long URL when accessed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-2 border-red-900">
              <AccordionTrigger>
                Do I need an account to use the app?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Creating an account allows you to manage your URLs, view
                analytics, and customize your short URLs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-2 border-red-900">
              <AccordionTrigger>
                What analytics are available for my shortened URLs?
              </AccordionTrigger>
              <AccordionContent>
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
