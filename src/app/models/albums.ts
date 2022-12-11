export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type AlbumsState = {
  albums: Album[];
};
