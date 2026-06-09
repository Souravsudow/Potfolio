import { useState, useEffect } from 'react';
import axios from 'axios';

interface YouTubeStats {
  subscriberCount: string;
  viewCount: string;
}

const YouTubeLatest = () => {
  const [channelStats, setChannelStats] = useState<YouTubeStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const VIDEO_ID = import.meta.env.VITE_YOUTUBE_VIDEO_ID;

  useEffect(() => {
    if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
      setStatsLoading(false);
      return;
    }

    const fetchChannelStats = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&id=${CHANNEL_ID}&part=statistics`
        );

        if (response.data.items?.length) {
          const stats = response.data.items[0].statistics;
          setChannelStats({
            subscriberCount: Number(stats.subscriberCount).toLocaleString(),
            viewCount: Number(stats.viewCount).toLocaleString()
          });
        }
      } catch (error) {
        console.error('Error fetching channel stats:', error);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchChannelStats();
  }, [YOUTUBE_API_KEY, CHANNEL_ID]);

  // Show loading skeleton until video ID is available
  if (!VIDEO_ID) {
    return (
      <div className="space-y-6">
        <div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Stats for Desktop */}
      <div>
        <div className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-lg font-semibold">Latest Video</h2>
          {channelStats && !statsLoading && (
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z" />
                </svg>
                <span>{channelStats.subscriberCount} subscribers</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                <span>{channelStats.viewCount} views</span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Header */}
        <div className="sm:hidden">
          <h2 className="text-lg font-semibold">Latest Video</h2>
        </div>

        {/* Video */}
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1`}
            title="Latest YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Mobile Stats */}
        {channelStats && !statsLoading && (
          <div className="sm:hidden flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-2">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z" />
              </svg>
              <span>{channelStats.subscriberCount} subscribers</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              <span>{channelStats.viewCount} views</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeLatest;
