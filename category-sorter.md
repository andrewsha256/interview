```typescript
interface NewsEntity {
  category: string;
  views: number; 
}

function newsFactory(category: string, views: number) {
  const ret : NewsEntity = {
    category,
    views,
  };
  return ret;
}

function extractCategoriesTop (list: Array<NewsEntity>) : Array<NewsEntity> {
  return [];
}

```
