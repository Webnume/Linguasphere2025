import React from "react";

export default function GoogleReviews() {
  async function getData() {
    const res = await fetch("https://api.example.com/");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = getData();

  return <div>{data}</div>;
}
