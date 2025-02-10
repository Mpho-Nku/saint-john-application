
import SearchForm from "@/components/SearchForm";
import CircuitCard from "@/components/CircuitCard";
import { client } from "@/sanity/lib/client";
import { CIRCUITS_QUERY } from "@/sanity/lib/queries";
import { CircuitCardType } from "@/components/CircuitCard";

import { sanityFetch, SanityLive } from "@/sanity/lib/live";
export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;
  const params = { search: query || null };
  //const posts = await client.fetch(CIRCUITS_QUERY);
  const { data: posts } = await sanityFetch({ query: CIRCUITS_QUERY, params });
  return (
   <>
   
       <section className="pink_container">
            <h1 className="heading">You cant find your circuit?<br/>Don't worry Add To Make things Easier</h1>
            <p className="sub-heading !max-w-3xl" >
               This is the platform to find all Saint John Apostolic Faith Mission circuits around South Africa, Botswana, Namibia, Swaziland, and Lesotho
            </p>
            <SearchForm query={query}/>
       </section>

       <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All circuits"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: CircuitCardType) => (
              <CircuitCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No circuit found</p>
          )}
        </ul>
      </section>

      <SanityLive/>

      
     
   </>
  );
}
