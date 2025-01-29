import H1 from "../titles/H1";
import Image from "next/image";

export default function Banner({ title }: { title: string }) {
  return (
    <article
      className="flex flex-col w-full justify-center bg-[url('/images/bg_header.jpg')] bg-no-repeat bg-cover mb-12 xl:bg-[center_bottom_-120px] items-center md:h-[300px] relative"
      id="banner"
    >
      <section className="flex flex-col justify-center items-center w-full max-w-[1440px] z-1">
        <Image
          src="/images/depanneurFly.png"
          alt="bg_header"
          width={361}
          height={340}
          className="absolute top-[25px] landscape:top-[75px] md:landscape:top-[0] md:top-[0] left-2 w-[220px] md:w-[361px] md:h-[340px] z-10"
        />
        <H1>{title}</H1>
        <Image
          src="/images/bg_header_computers.png"
          alt="bg_header"
          width={784}
          height={212}
        />
      </section>
    </article>
  );
}
