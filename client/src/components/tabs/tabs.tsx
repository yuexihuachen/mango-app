import { TabItem } from '@/types';

type TabProps = {
  items: TabItem[];
  selectedKey: string;
  onSelectTab: (key: string) => void;
}

export default function Tabs(props: TabProps) {
  const { items, selectedKey, onSelectTab } = props;
  return (
    <div className="w-full">
      <nav className="bg-white">
        <div className="px-4">
          <div className="flex items-center justify-between h-16 border-b border-gray-300">
            <div className="flex items-center">
              <div className="block">
                <div className="flex items-baseline space-x-4">
                  {items.filter(item => item.label).map((item) => (
                    <div
                      key={item.key}
                      onClick={() => onSelectTab(item.key)}
                      className={`px-3 py-5 text-sm font-medium relative  after:w-full after:h-0.5 after:absolute after:-bottom-0.5 after:left-0 cursor-pointer ${
                        selectedKey === item.key
                          ? 'after:bg-blue-500 font-medium text-blue-600'
                          : 'hover:after:bg-blue-500 text-gray-900'
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
