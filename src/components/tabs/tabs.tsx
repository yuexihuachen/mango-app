import { useState } from 'react';

export default function Tabs(props) {
  const { items, itemKey } = props;
  const [selectedKey, setSelectedKey] = useState(itemKey);
  const onSelectTab = (key) => {
    setSelectedKey(key);
  };
  return (
    <div className="min-h-full">
      <nav className="bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 border-b border-gray-300">
            <div className="flex items-center">
              <div className="block">
                <div className="flex items-baseline space-x-4">
                  {items.map((item) => (
                    <div
                      key={item.key}
                      onClick={() => onSelectTab(item.key)}
                      className={`px-3 py-5 text-sm font-medium relative  after:w-full after:h-1 after:absolute after:-bottom-1 after:left-0 ${
                        selectedKey === item.key
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
                      onClick={() => onSelectTab(item.key)}
                      className={`mt-4 text-gray-500 ${
                        selectedKey === item.key
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
