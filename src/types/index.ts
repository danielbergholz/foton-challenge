interface IThumbnails {
  smallThumbnail: string
  thumbnail: string
}

export interface IVolume {
  title: string
  authors?: string[]
  description: string
  imageLinks?: IThumbnails
  pageCount?: number
}

export interface IItem {
  id: string
  volumeInfo: IVolume
}
