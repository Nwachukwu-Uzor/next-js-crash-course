import React from "react";

import { Category, Events } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  categories: Category[];
}

export const EventsPage: React.FC<Props> = ({ categories }) => {
  return (
    <section className="events_page">
      {categories?.map((category) => (
        <Link href={`/events/${category.id}`} passHref key={category.id}>
          <div className="card">
            <Image
              src={category.image}
              width={200}
              height={400}
              alt={category.description}
            />
            <h2>{category.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};
