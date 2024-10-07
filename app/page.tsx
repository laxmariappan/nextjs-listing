import ListingPage from '@/components/ListingPage';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Listings</h1>
      <ListingPage />
    </div>
  );
}