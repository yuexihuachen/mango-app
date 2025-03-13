import Header from "../components/header";

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const { slug } = await params
    return <div>
        <Header />
        My Post: {slug}
        </div>
  }