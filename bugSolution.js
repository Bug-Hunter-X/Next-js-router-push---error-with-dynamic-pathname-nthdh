```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    //Ensure pathname starts with '/'
    let pathname = someDynamicPathname;
    if (!pathname.startsWith('/')) {
      pathname = '/' + pathname;
    }
    router.push(pathname);
  };

  return (
    <button onClick={handleClick}>Go</button>
  );
}
```