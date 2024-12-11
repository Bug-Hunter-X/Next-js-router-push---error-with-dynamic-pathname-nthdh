```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will cause an error if the pathname doesn't start with '/'
    router.push(someDynamicPathname);
  };

  return (
    <button onClick={handleClick}>Go</button>
  );
}
```