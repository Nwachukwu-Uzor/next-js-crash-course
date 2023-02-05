import React, { useState } from "react";

import Image from "next/image";
import { Event, Events } from "@/types";

interface Props {
  event: Event;
}

export const SingleEvent: React.FC<Props> = ({ event }) => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div className="single_event">
      <h1>{event?.title}</h1>
      <Image
        src={event.image}
        alt={event.description}
        height={400}
        width={400}
      />
      <p>{event.description}</p>
      <p>
        <strong>Register Emails</strong>{" "}
        {event?.emails_registered.map((email, index) => (
          <span key={`${email}${index}`}>{email}</span>
        ))}
      </p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form_input">
          <label>Enter your email to register for the event</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
