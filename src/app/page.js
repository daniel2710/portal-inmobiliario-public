import { Banner } from "../Templates/Banner";
import { Eligenos } from "../Templates/Eligenos";
import { InmReciente } from "../Templates/InmReciente";
import { Testimoniales } from "../Templates/Testimoniales";
import { FeaturedProperties } from "../Templates/FeaturedProperties";
import { Toaster } from 'react-hot-toast';
import { Header } from "@/Templates/Header";

export default function Home() {

  return (
    <>
      <Toaster containerStyle={{ zIndex: 10000000 }} position="top-right" />
      <Header />
      <Banner main />
      <FeaturedProperties />
      <InmReciente />
      <Eligenos />
      <Testimoniales />
    </>
  )
}


