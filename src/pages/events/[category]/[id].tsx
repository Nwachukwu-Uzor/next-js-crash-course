import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Event, Events } from "@/types";
import { SingleEvent } from "@/components";

interface Props {
  event: Event;
}

const Event: React.FC<Props> = ({ event }) => <SingleEvent event={event} />;

export default Event;

export const getStaticPaths: GetStaticPaths = async () => {
  const events: Events = await import("../../../data/events.json");
  const { allEvents } = events;

  const paths = allEvents.map((event) => ({
    params: { category: event.city.toLowerCase(), id: event.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const events: Events = await import("../../../data/events.json");
  const { allEvents } = events;

  const category = context?.params?.category;
  const id = context?.params?.id;

  const event = allEvents.filter((event) => {
    if (typeof category === "string" && typeof id === "string") {
      return (
        event.city.toLowerCase() === category.toLowerCase() &&
        event.id.toLowerCase() === id.toLowerCase()
      );
    }
  });

  return {
    props: {
      event: event[0],
    },
  };
};
