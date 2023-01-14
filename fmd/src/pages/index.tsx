import Home from 'templates/Home';
export type IndexProps = {
  data: [];
};
export default function Index({ data }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const raw = await fetch('https://dummyjson.com/products?limit=4');
  const json = await raw.json();
  const data = json.products;
  return { props: { data } };
};
