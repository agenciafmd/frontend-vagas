import { Item } from "./styles";

interface INewsItemProps {
  title: string;
  description: string;
  url: string;
  urlImage: string;
}

const NewsDolarItem = (newsItemData: INewsItemProps) => {
  return (
    <Item>
      <img src={newsItemData.urlImage} alt='News-Img' />
      <h1>{newsItemData.title}</h1>
      <p>{newsItemData.description}</p>
      <a href={newsItemData.url}>Read more</a>
    </Item>
  );
}

export default NewsDolarItem;