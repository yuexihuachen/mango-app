type TCategory = {
    _id: string;
    name: string;
    alias: string;
  };

export async function generateStaticParams() {
    const urls = await fetch(`https://mango.881103.xyz/categorys/find`, {
        method: "POST",
      }).then((res) => res.json())
   
    return urls.map((url: TCategory) => ({
      slug: url.name,
    }))
  }

export default function Page({ params }: { params: { slug: string } }) {
  return <div className="mx-auto bg-white h-dvh text-slate-500 max-w-8xl">My Post: {params.slug}</div>;
}
