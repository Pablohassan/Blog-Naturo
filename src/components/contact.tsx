import { Form } from "react-router-dom";
import React from "react"; // Ensure React is in scope when using JSX

// Define TypeScript interfaces
interface ContactType {
  first: string;
  last: string;
  avatar: string;
  twitter?: string;
  notes?: string;
  favorite: boolean;
}

interface FavoriteProps {
  contact: ContactType;
}

// Update Contact component with TypeScript
const Contact: React.FC = () => {
  const contact: ContactType = {
    first: "Laure",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "Mon",
    notes: "Mon contact",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || undefined} alt="Avatar" />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!window.confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

// Update Favorite component with TypeScript
const Favorite: React.FC<FavoriteProps> = ({ contact }) => {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        type="button"
        name="favorite"
        value={!favorite ? "true" : "false"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};

export default Contact;
