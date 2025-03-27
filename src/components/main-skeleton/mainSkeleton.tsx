export default () => {
    return <>
          <main className="grid px-6 pt-24 bg-white place-items-center">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">学无止尽</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">
            Note not found
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
            Sorry, we couldn’t find the Note you’re looking for.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">

            <a href="/" className="text-sm font-semibold text-gray-900">
            View Other Note <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
}