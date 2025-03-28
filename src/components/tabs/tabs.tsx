import { useAppSelector, useAppDispatch } from '~/hooks';
import { updateStatus } from '~/features/global/globalSlice';

export default function Tabs(props) {
  const { items } = props;
  const itemKey = useAppSelector((state) => state.global.tab);
  const dispatch = useAppDispatch();
  const onSelectTab = (key) => {
    dispatch(
      updateStatus({
        tab: key,
      }),
    );
  };
  return (
    <div className="min-h-full">
      <nav className="bg-white">
        <div className="w-9/12 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 border-b border-gray-300">
            <div className="flex items-center">
              <div className="block">
                <div className="flex items-baseline space-x-4">
                  {items.filter(item => item.label).map((item) => (
                    <div
                      key={item.key}
                      onClick={() => onSelectTab(item.key)}
                      className={`px-3 py-5 text-sm font-medium relative  after:w-full after:h-0.5 after:absolute after:-bottom-0.5 after:left-0 ${
                        itemKey === item.key
                          ? 'after:bg-indigo-500 font-medium text-indigo-600'
                          : 'hover:after:bg-indigo-500 text-gray-900'
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {items.map((item) => (
                    <div
                      key={item.key}
                      className={`mt-4 text-gray-500 ${
                        itemKey === item.key
                          ? 'block'
                          : 'hidden'
                      }`}
                    >
                      {item.children}
                    </div>
                  ))}
            </div>
        </div>
      </nav>
    </div>
  );
}
