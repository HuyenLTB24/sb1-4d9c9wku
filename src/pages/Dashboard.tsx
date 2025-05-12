import React, { useState } from 'react';
import { 
  BarChart2, CheckCircle, Clock, Power, RefreshCw, TrendingUp, User, Users 
} from 'lucide-react';
import { BotStats } from '../components/BotStats';
import { AccountCard } from '../components/AccountCard';
import { BotModeSelection } from '../components/BotModeSelection';
import { RecentActivity } from '../components/RecentActivity';

export const Dashboard: React.FC = () => {
  const [accounts, setAccounts] = useState([
    {
      id: '1',
      username: '@TwitterBot1',
      profileId: 'profile123',
      status: 'Running',
      mode: 'Feed Mode',
      lastActive: '2 minutes ago',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: {
        tweets: 152,
        replies: 87,
        likes: 243,
        follows: 56
      }
    },
    {
      id: '2',
      username: '@TwitterBot2',
      profileId: 'profile456',
      status: 'Paused',
      mode: 'Trending Mode',
      lastActive: '1 hour ago',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: {
        tweets: 98,
        replies: 42,
        likes: 187,
        follows: 31
      }
    }
  ]);

  const toggleBotStatus = (id: string) => {
    setAccounts(accounts.map(account => {
      if (account.id === id) {
        return {
          ...account,
          status: account.status === 'Running' ? 'Paused' : 'Running'
        };
      }
      return account;
    }));
  };

  const changeBotMode = (id: string, mode: string) => {
    setAccounts(accounts.map(account => {
      if (account.id === id) {
        return {
          ...account,
          mode
        };
      }
      return account;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <BotStats 
          title="Total Tweets" 
          value="250" 
          icon={<BarChart2 className="h-6 w-6 text-blue-500" />} 
          change="+12% from last week" 
          positive={true} 
        />
        <BotStats 
          title="Active Bots" 
          value="1" 
          icon={<Power className="h-6 w-6 text-green-500" />} 
          change="1 account online" 
          positive={true} 
        />
        <BotStats 
          title="Follower Growth" 
          value="87" 
          icon={<Users className="h-6 w-6 text-purple-500" />} 
          change="+23% from last month" 
          positive={true} 
        />
        <BotStats 
          title="Engagement Rate" 
          value="4.2%" 
          icon={<TrendingUp className="h-6 w-6 text-indigo-500" />} 
          change="+1.2% from last week" 
          positive={true} 
        />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Twitter Bot Accounts</h2>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <User className="h-4 w-4 mr-2" />
            Add New Account
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {accounts.map(account => (
            <AccountCard
              key={account.id}
              account={account}
              onStatusToggle={() => toggleBotStatus(account.id)}
              onModeChange={(mode) => changeBotMode(account.id, mode)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BotModeSelection />
        <RecentActivity />
      </div>
    </div>
  );
};