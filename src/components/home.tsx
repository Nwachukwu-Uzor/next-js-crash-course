import React from "react";

import { Category } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Prop {
  categories: Category[];
}

export const Home: React.FC<Prop> = ({ categories }) => {
  return (
    <section className="home__body">
      {categories?.map((category) => (
        <Link
          href={`/events/${category.id}`}
          key={category.id}
          passHref
        >
          <div className="card">
            <div className="image">
              <Image
                src={category.image}
                width={200}
                height={400}
                alt={category.description}
                className="card__image"
              />
            </div>
            <div className="content">
              <h1>{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
