const Talks = () => {
  return <div className="root pt-5">
    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
      <div className="absolute inset-px rounded-lg bg-white" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-9 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-sm tracking-tight text-gray-900">茶馆伙计的技术博客</h3>
                  <p className="text-xs text-gray-500">2025-08-12 12:12:00</p>
                </div>
              </div>
          <p className="text-sm text-gray-600 mt-5">
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
          </p>
        </div>
        <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
            className="h-[min(152px,40cqw)] object-cover"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
    </div>

  </div>
}

export default Talks