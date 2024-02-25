function App() {
  return (
    <>
    
    <div>
      <p data-test-id="hello-furqan">hello furqan</p>
      <p data-test-id="hello-for">hello for</p>

      {Array.from({ length: 15 }).map((_, index) => (
        <p key={index + 1} data-test-id={`number-${index + 1}`}>
          {index + 1}
        </p>
      ))}

      <p id='fayak' data-test-id="hello-fayak">hello fayak</p>
    </div>

    </>
  );
  }
export default App
