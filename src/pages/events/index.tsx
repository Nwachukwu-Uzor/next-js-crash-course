import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Category, Events } from "@/types";
import { EventsPage } from "@/components";

interface Prop {
  categories: Category[];
}

const AllEventsPage: React.FC<Prop> = ({ categories }) => {
  return <EventsPage categories={categories} />;
};

export default AllEventsPage;

export const getStaticProps: GetStaticProps<Prop> = async (context) => {
  // ...
  const data: Events = await import("../../data/events.json");
  const { events_categories } = data;
  return {
    props: {
      categories: events_categories,
    },
  };
};
