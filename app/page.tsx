import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 0,
      name: "Mushroom Orange Lamp",
      description: "mol desc",
      price: 40,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FNmOZEQc8tOOCO8BXxlyfGnGDiS8v_llDw&s",
    },
  ];
  return (
    <main className="min-h-screen mx-auto max-w-[100rem]">
      {products.map((product) => (
        <Card key={`${product.name}-${product.id}`} {...product}/>
      ))}
    </main>
  );
}
