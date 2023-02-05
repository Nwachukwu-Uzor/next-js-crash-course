import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Event, Events } from "@/types";

interface Props {
  events: Event[];
  pageName: string;
}

export const CategoryEvents: React.FC<Props> = ({ events, pageName }) => {
  return (
    <section className="category_event">
      <h1 className="title">Events in {pageName}</h1>

      <div className="content">
        {events.map((event) => (
          <div className="card">
            <Link
              href={`/events/${event.city.toLowerCase()}/${event.id}`}
              key={event.id}
              passHref
            >
              <Image
                alt={event.description}
                src={event?.image}
                height={300}
                width={300}
              />
              <h2>{event?.title}</h2>
              <p>{event?.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
