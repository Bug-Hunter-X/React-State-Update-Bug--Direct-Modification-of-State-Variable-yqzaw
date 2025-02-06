```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to update the count
    count = count + 1; 
    setCount(count);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```