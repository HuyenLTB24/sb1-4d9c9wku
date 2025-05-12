import React from 'react';
import { Power, RefreshCw, Settings, Trash2 } from 'lucide-react';

interface AccountProps {
  account: {
    id: string;
    username: string;
    profileId: string;
    status: string;
    mode: string;
    lastActive: string;
    image: string;
    stats: {
      tweets: number;
      replies: number;
      likes: number;
      follows: number;
    };
  };
  onStatusToggle: () => void;
  onModeChange: (mode: string) => void;
}

export const AccountCard: React.FC<AccountProps> = ({
  account,
  onStatusToggle,
  onModeChange,
}) => {
  const isRunning = account.status === 'Running';

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
      <div className="p-5">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-100 overflow-hidden">
            <img src={account.image} alt={account.username} className="h-full w-full object-cover" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-gray-900">{account.username}</h3>
            <p className="text-sm text-gray-500">{account.profileId}</p>
          </div>
          <div className="ml-auto">
            <button
              onClick={onStatusToggle}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isRunning ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isRunning ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center text-sm">
            <div className={`flex-shrink-0 h-3 w-3 rounded-full ${
              isRunning ? 'bg-green-500' : 'bg-yellow-500'
            } mr-1.5`}></div>
            <p className="text-gray-700">
              Status: <span className="font-medium">{account.status}</span>
            </p>
          </div>
          
          <div className="flex items-center justify-end text-sm">
            <RefreshCw className="h-4 w-4 text-gray-500 mr-1" />
            <p className="text-gray-700 truncate">{account.lastActive}</p>
          </div>
          
          <div className="col-span-2">
            <div className="flex flex-col">
              <label htmlFor={`mode-${account.id}`} className="text-xs text-gray-500 mb-1">
                Bot Mode
              </label>
              <select
                id={`mode-${account.id}`}
                className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={account.mode}
                onChange={(e) => onModeChange(e.target.value)}
              >
                <option value="Feed Mode">Feed Mode</option>
                <option value="Trending Mode">Trending Mode</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 pt-3 border-t border-gray-100">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{account.stats.tweets}</p>
            <p className="text-xs text-gray-500">Tweets</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{account.stats.replies}</p>
            <p className="text-xs text-gray-500">Replies</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{account.stats.likes}</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{account.stats.follows}</p>
            <p className="text-xs text-gray-500">Follows</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <button className="inline-flex items-center px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
            <Settings className="h-3 w-3 mr-1" />
            Settings
          </button>
          <button className="inline-flex items-center px-2 py-1 text-xs text-red-700 bg-red-100 rounded-md hover:bg-red-200">
            <Trash2 className="h-3 w-3 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};