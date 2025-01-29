import { contentData } from "../data/contentData";
import ListCard from "../listCard/ListCard";

// const { depannage, maintenance, assistance, recuperation } = contentData;

export default function Lists({ type }: { type: string }) {

  const data = contentData.find((content) => content.name === type);

  return (
    <article className="md:p-6 p-2 max-w-[1440px]">
      {data?.content?.map((service) => (
        <ListCard key={service.name} service={service} />
      ))}
    </article>
  );
}
