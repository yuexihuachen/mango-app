import SideNav from "@components/side-nav/side-nav";

export default function Home() {
  return (
    <div>
      <div className="px-4 m-auto max-w-screen-2xl md:px-8">
        <div className="lg:block fixed w-[20.2666rem] inset-0 z-20  top-[3.8125rem] left-[max(0px,calc(50%-48rem))] right-auto pb-10 pl-8 pr-6 overflow-y-auto">
          <SideNav />
        </div>
        <div className="lg:pl-[20.8rem]">
          <main className="relative z-20 max-w-3xl pt-10 xl:max-w-none  h-[calc(100vh-61px)]">
            content
          </main>
        </div>
      </div>
    </div>
  );
}
