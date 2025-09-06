export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: Channel;
  views: string;
  uploadTime: string;
  duration: string;
  type?: 'premiere' | 'live' | 'mix';
  description?: string;
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  verified?: boolean;
  subscribers?: string;
}

export interface Category {
  id: string;
  name: string;
  active?: boolean;
}

export interface ShortsVideo {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  channel: Channel;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  href?: string;
}