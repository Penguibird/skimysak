
import { GatsbyImage } from 'gatsby-plugin-image';
export default interface Aktualita {
  title: string,
  url: string,
  body: string,
  text: string,
  image?: {
    image?: React.ComponentProps<typeof GatsbyImage>['image'],

    imageAlt?: string,
  },
  date: string,
  link?: string,
}

