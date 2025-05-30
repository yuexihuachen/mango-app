const Loading = () => {
  return <div className={`fixed top-0 left-0 w-full bg-gray-50/60 h-dvh`}>
  <img
    width={32}
    height={32}
    className="w-8 h-8 m-auto mt-72 animate-spin size-5"
    alt="logo"
    src="/loading.svg"
  />
</div>
}

export {
    Loading
}