import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface BotStatsProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  positive: boolean;
}

export const BotStats: React.FC<BotStatsProps> = ({
  title,
  value,
  icon,
  change,
  positive,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">{icon}</div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-semibold text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className={`bg-gray-50 px-5 py-3 ${positive ? 'text-green-600' : 'text-red-600'}`}>
        <div className="text-sm flex items-center">
          {positive ? (
            <ArrowUpRight className="h-4 w-4 mr-1 flex-shrink-0" />
          ) : (
            <ArrowDownRight className="h-4 w-4 mr-1 flex-shrink-0" />
          )}
          <span className="font-medium text-sm">{change}</span>
        </div>
      </div>
    </div>
  );
};