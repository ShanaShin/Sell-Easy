import Card from "@/components/card";
import { createClient } from "@/supabase/client";

export default async function Home() {
  const supabase = createClient();
  // const products = [
  //   {
  //     id: 0,
  //     name: "Mushroom Orange Lamp",
  //     description: "mol desc",
  //     price: 40,
  //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FNmOZEQc8tOOCO8BXxlyfGnGDiS8v_llDw&s",
  //   },
  // ];
  const { data: products, error } = await supabase.from("selleasy-products").select()
  
  if (!products) {
    return <p>Not found</p>;
  }
  return (
    <main className="min-h-screen mx-auto max-w-[100rem]">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {products.map((product) => (
              <Card key={`${product.name}-${product.id}`} {...product}
              imageUrl={'/${process.env.SUPABASE_URL}/storage/v1/object/public/storage${product.imageUrl}'}/>
            ))}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {/* {products && products.length > 0 ? ( */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={`${product.name}-${product.id}`} {...product}
              imageUrl={'/${process.env.SUPABASE_URL}/storage/v1/object/public/storage${product.imageUrl}'}/>
            ))}
          </div>
        </div>
      
    </main>
  );
}
