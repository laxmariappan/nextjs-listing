"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products } from '@/lib/data';

export default function ListingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 6;

  const allCategories = Array.from(new Set(products.map(product => product.category)));
  const allTags = Array.from(new Set(products.flatMap(product => product.tags)));

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesTags = selectedTags.length === 0 || product.tags.some(tag => selectedTags.includes(tag));
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesTags && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="mb-4"
            />
            <h3 className="font-semibold mb-2">Categories</h3>
            {allCategories.map(category => (
              <div key={category} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={`category-${category}`}>{category}</label>
              </div>
            ))}
            <h3 className="font-semibold mb-2 mt-4">Tags</h3>
            {allTags.map(tag => (
              <div key={tag} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={`tag-${tag}`}
                  checked={selectedTags.includes(tag)}
                  onCheckedChange={() => handleTagChange(tag)}
                />
                <label htmlFor={`tag-${tag}`}>{tag}</label>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProducts.map(product => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="mb-2">${product.price.toFixed(2)}</p>
                <div className="flex flex-wrap gap-1">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
        <p className="text-center mt-4">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}