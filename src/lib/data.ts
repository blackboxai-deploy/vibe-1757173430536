import { Video, Channel, Category, ShortsVideo, SidebarItem } from '@/types';

export const channels: Channel[] = [
  {
    id: '1',
    name: 'Tech Insights',
    avatar: 'https://placehold.co/40x40?text=Tech+channel+profile+avatar+with+modern+logo',
    verified: true,
    subscribers: '2.1M'
  },
  {
    id: '2',
    name: 'Music Vibes',
    avatar: 'https://placehold.co/40x40?text=Music+channel+colorful+avatar+with+headphones',
    verified: true,
    subscribers: '890K'
  },
  {
    id: '3',
    name: 'Gaming Pro',
    avatar: 'https://placehold.co/40x40?text=Gaming+channel+avatar+with+controller+icon',
    verified: false,
    subscribers: '456K'
  },
  {
    id: '4',
    name: 'Daily Vlogs',
    avatar: 'https://placehold.co/40x40?text=Lifestyle+vlogger+profile+picture+casual+friendly',
    verified: true,
    subscribers: '1.5M'
  },
  {
    id: '5',
    name: 'Science Hub',
    avatar: 'https://placehold.co/40x40?text=Science+channel+avatar+with+atom+symbol',
    verified: true,
    subscribers: '3.2M'
  },
  {
    id: '6',
    name: 'Cooking Master',
    avatar: 'https://placehold.co/40x40?text=Cooking+channel+chef+hat+avatar+professional',
    verified: false,
    subscribers: '678K'
  }
];

export const videos: Video[] = [
  {
    id: '1',
    title: 'Building the Future of AI: Revolutionary Breakthrough in Machine Learning',
    thumbnail: 'https://placehold.co/320x180?text=Futuristic+AI+laboratory+with+holographic+displays+and+neural+networks',
    channel: channels[0],
    views: '2.1M',
    uploadTime: '2 hours ago',
    duration: '15:32',
    type: 'premiere'
  },
  {
    id: '2',
    title: 'Live Jazz Session - Relaxing Evening Music for Study and Work',
    thumbnail: 'https://placehold.co/320x180?text=Cozy+jazz+club+atmosphere+with+warm+lighting+and+musicians',
    channel: channels[1],
    views: '45K',
    uploadTime: '1 day ago',
    duration: '2:15:45',
    type: 'live'
  },
  {
    id: '3',
    title: 'Epic Gaming Montage - Best Moments from This Week',
    thumbnail: 'https://placehold.co/320x180?text=Dynamic+gaming+action+scenes+with+colorful+effects+and+characters',
    channel: channels[2],
    views: '892K',
    uploadTime: '3 days ago',
    duration: '12:28'
  },
  {
    id: '4',
    title: 'My Morning Routine That Changed My Life | Productivity Tips',
    thumbnail: 'https://placehold.co/320x180?text=Bright+morning+bedroom+with+sunlight+meditation+and+healthy+breakfast',
    channel: channels[3],
    views: '1.2M',
    uploadTime: '5 days ago',
    duration: '8:15'
  },
  {
    id: '5',
    title: 'The Mystery of Black Holes: What Happens Beyond the Event Horizon?',
    thumbnail: 'https://placehold.co/320x180?text=Space+scene+with+massive+black+hole+bending+light+and+stars',
    channel: channels[4],
    views: '3.5M',
    uploadTime: '1 week ago',
    duration: '22:10'
  },
  {
    id: '6',
    title: 'Perfect Pasta Recipes: 5 Italian Classics You Must Try',
    thumbnail: 'https://placehold.co/320x180?text=Beautiful+pasta+dishes+on+marble+counter+with+fresh+ingredients',
    channel: channels[5],
    views: '567K',
    uploadTime: '2 weeks ago',
    duration: '18:45'
  },
  {
    id: '7',
    title: 'Chill Hip Hop Mix - Perfect Background Music for Creative Work',
    thumbnail: 'https://placehold.co/320x180?text=Urban+cityscape+at+sunset+with+vinyl+records+and+music+equipment',
    channel: channels[1],
    views: '2.8M',
    uploadTime: '3 weeks ago',
    duration: '1:45:30',
    type: 'mix'
  },
  {
    id: '8',
    title: 'Revolutionary Web Development Framework - Everything You Need to Know',
    thumbnail: 'https://placehold.co/320x180?text=Clean+modern+code+editor+with+colorful+syntax+highlighting',
    channel: channels[0],
    views: '1.1M',
    uploadTime: '1 month ago',
    duration: '25:18'
  },
  {
    id: '9',
    title: 'Behind the Scenes: How We Create Our Content',
    thumbnail: 'https://placehold.co/320x180?text=Professional+video+production+setup+with+cameras+and+lighting',
    channel: channels[3],
    views: '445K',
    uploadTime: '1 month ago',
    duration: '11:22'
  }
];

export const shortsVideos: ShortsVideo[] = [
  {
    id: 's1',
    title: 'Quick Coding Tip #42',
    thumbnail: 'https://placehold.co/180x320?text=Vertical+smartphone+screen+showing+code+snippet+with+syntax+highlighting',
    views: '234K',
    channel: channels[0]
  },
  {
    id: 's2',
    title: '30 Second Recipe',
    thumbnail: 'https://placehold.co/180x320?text=Vertical+cooking+video+showing+hands+preparing+quick+meal',
    views: '1.2M',
    channel: channels[5]
  },
  {
    id: 's3',
    title: 'Gaming Fail Compilation',
    thumbnail: 'https://placehold.co/180x320?text=Vertical+gaming+screen+with+funny+character+expressions+and+effects',
    views: '567K',
    channel: channels[2]
  },
  {
    id: 's4',
    title: 'Daily Motivation',
    thumbnail: 'https://placehold.co/180x320?text=Inspiring+vertical+image+with+sunrise+and+motivational+text+overlay',
    views: '89K',
    channel: channels[3]
  },
  {
    id: 's5',
    title: 'Science Fact #15',
    thumbnail: 'https://placehold.co/180x320?text=Vertical+science+illustration+with+molecules+and+laboratory+equipment',
    views: '445K',
    channel: channels[4]
  }
];

export const categories: Category[] = [
  { id: '1', name: 'All', active: true },
  { id: '2', name: 'Music', active: false },
  { id: '3', name: 'Mixes', active: false },
  { id: '4', name: 'Podcasts', active: false },
  { id: '5', name: 'Thoughts', active: false },
  { id: '6', name: 'Live', active: false },
  { id: '7', name: 'Consciousness', active: false },
  { id: '8', name: 'Gaming', active: false },
  { id: '9', name: 'Technology', active: false },
  { id: '10', name: 'Cooking', active: false },
  { id: '11', name: 'Science', active: false },
  { id: '12', name: 'Lifestyle', active: false }
];

export const sidebarItems: SidebarItem[] = [
  { id: '1', label: 'Home', icon: '🏠', active: true, href: '/' },
  { id: '2', label: 'Shorts', icon: '⚡', active: false, href: '/shorts' },
  { id: '3', label: 'Subscriptions', icon: '📺', active: false, href: '/subscriptions' },
  { id: '4', label: 'History', icon: '🕒', active: false, href: '/history' },
  { id: '5', label: 'Playlists', icon: '📋', active: false, href: '/playlists' },
  { id: '6', label: 'Your Videos', icon: '🎬', active: false, href: '/your-videos' },
  { id: '7', label: 'Watch Later', icon: '⏰', active: false, href: '/watch-later' },
  { id: '8', label: 'Liked Videos', icon: '👍', active: false, href: '/liked' }
];