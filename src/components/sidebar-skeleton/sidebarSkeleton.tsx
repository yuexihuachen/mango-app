export default () => {
  const list = [1,2,3,4,5,6,7,8,9]
    return <>
         {
          list.map((_, index) => {
            return  <li key={index} className="mt-2">
            <div
              className={`truncate text-base px-4 py-2 rounded text-slate-700 font-medium bg-gray-50`}
            >
              &nbsp;
            </div>
          </li>
          })
         }
    </>
}