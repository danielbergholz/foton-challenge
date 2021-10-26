interface IThumbnails {
  smallThumbnail: string
  thumbnail: string
}

export interface IVolume {
  title: string
  authors: string[]
  description: string
  imageLinks: IThumbnails
}

export interface IItem {
  volumeInfo: IVolume
}
