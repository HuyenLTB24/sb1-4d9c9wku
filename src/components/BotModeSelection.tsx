import React from 'react';
import { BarChart2, CheckCircle2, MessageSquare, TrendingUp } from 'lucide-react';

export const BotModeSelection: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Bot Mode Selection</h2>
        
        <div className="space-y-4">
          <div className="flex items-start p-4 border border-gray-200 rounded-lg">
            <div className="flex-shrink-0 p-2 rounded-full bg-blue-100">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">Feed Mode (Mode 1)</h3>
              <p className="mt-1 text-sm text-gray-500">
                Bot monitors your Twitter feed and automatically interacts with tweets based on your settings. Replies with AI-generated responses.
              </p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Active
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start p-4 border border-gray-200 rounded-lg">
            <div className="flex-shrink-0 p-2 rounded-full bg-purple-100">
              <BarChart2 className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">Trending Mode (Mode 4)</h3>
              <p className="mt-1 text-sm text-gray-500">
                Bot identifies trending topics and automatically posts content related to these trends. Includes media downloads and AI content generation.
              </p>
            </div>
          </div>
          
          <div className="flex items-start p-4 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex-shrink-0 p-2 rounded-full bg-gray-200">
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">Custom Mode (Coming Soon)</h3>
              <p className="mt-1 text-sm text-gray-500">
                Create your own custom bot behavior by combining different actions and triggers. Available in the next update.
              </p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};