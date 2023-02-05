import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

import { Event, Events } from "@/types";
import { CategoryEvents } from "@/components";

interface Props {
  events: Event[];
  pageName: string;
}

const EventsCategoryPage: React.FC<Props> = ({ events, pageName }) => (
  <CategoryEvents events={events} pageName={pageName} />
);

export default EventsCategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
  const allEvents: Events = await import("../../../data/events.json");
  const { events_categories } = allEvents;

  const paths = events_categories.map((category) => ({
    params: { category: category.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const category = context?.params?.category;
  const events: Events = await import("../../../data/events.json");
  const { allEvents } = events;

  const categoryEvents = allEvents.filter((event) => {
    if (typeof category === "string") {
      return event?.city.toLowerCase() === category?.toLowerCase();
    }
  });
  return {
    props: {
      events: categoryEvents,
      pageName:
        typeof category === "string"
          ? `${category[0].toUpperCase()}${category.slice(1).toLowerCase()}`
          : "",
    },
  };
};
