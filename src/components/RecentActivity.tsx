import React from 'react';
import { Clock } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: '1',
      type: 'tweet',
      bot: '@TwitterBot1',
      content: 'Just posted a trending tweet about #AI and machine learning!',
      time: '2 minutes ago',
      status: 'success'
    },
    {
      id: '2',
      type: 'reply',
      bot: '@TwitterBot1',
      content: 'Replied to @user123 with AI-generated response',
      time: '15 minutes ago',
      status: 'success'
    },
    {
      id: '3',
      type: 'follow',
      bot: '@TwitterBot2',
      content: 'Followed verified user @verifiedUser',
      time: '48 minutes ago',
      status: 'success'
    },
    {
      id: '4',
      type: 'like',
      bot: '@TwitterBot1',
      content: 'Liked 5 tweets in the feed',
      time: '1 hour ago',
      status: 'success'
    },
    {
      id: '5',
      type: 'error',
      bot: '@TwitterBot2',
      content: 'Rate limit exceeded, waiting for reset',
      time: '2 hours ago',
      status: 'error'
    }
  ];

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className={`relative px-1 ${
                        activity.status === 'error' ? 'bg-red-100' : 'bg-green-100'
                      } rounded-full flex items-center justify-center h-8 w-8`}>
                        <ActivityIcon type={activity.type} status={activity.status} />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{activity.bot}</span>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {activity.content}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 flex items-center">
                        <Clock className="mr-1.5 h-3 w-3 text-gray-400" />
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View all activity
          </a>
        </div>
      </div>
    </div>
  );
};

const ActivityIcon = ({ type, status }: { type: string; status: string }) => {
  if (status === 'error') {
    return (
      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  switch (type) {
    case 'tweet':
      return (
        <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      );
    case 'reply':
      return (
        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'follow':
      return (
        <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      );
    case 'like':
      return (
        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return (
        <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
};