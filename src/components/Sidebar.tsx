import React from 'react';
import { Home, TrendingUp, Settings, MessageSquare, Image, User, Users, BarChart2 } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="flex flex-col flex-grow pt-5 pb-4">
        <div className="flex items-center justify-center flex-shrink-0 px-4">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <TrendingUp size={18} className="text-white" />
          </div>
          <span className="ml-2 text-xl font-semibold text-gray-800">TwitterBot</span>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" active />
          <SidebarItem icon={<TrendingUp size={20} />} label="Trending Mode" />
          <SidebarItem icon={<MessageSquare size={20} />} label="Replies" />
          <SidebarItem icon={<Image size={20} />} label="Media Manager" />
          <SidebarItem icon={<User size={20} />} label="Accounts" />
          <SidebarItem icon={<Users size={20} />} label="Followers" />
          <SidebarItem icon={<BarChart2 size={20} />} label="Analytics" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" />
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <div className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200">
              <User size={20} className="text-gray-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs font-medium text-gray-500">View profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => {
  return (
    <a
      href="#"
      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
        active
          ? 'bg-gray-100 text-blue-600'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <div className={`mr-3 ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}`}>
        {icon}
      </div>
      {label}
    </a>
  );
};