import { defineQuery } from "next-sanity";

export const CIRCUITS_QUERY =
  defineQuery(`*[_type == "circuit" && defined(slug.current) && !defined($search) || title match $search || location match $search]{
  title,
  _id,
  slug, 
  bishop,
  views,
  description,
  location,
  address,
  image,
  
}`);

export const CIRCUIT_BY_ID_QUERY= 
defineQuery(`*[_type == "circuit" && _id==$id][0]{
    title,
    _id,
    slug, 
    bishop,
    views,
    description,
    location,
    address,
    image,
    author
}`)