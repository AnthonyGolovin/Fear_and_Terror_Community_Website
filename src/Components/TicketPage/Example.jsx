function Example() {
  return (
    <div>
      <style jsx global>{`
        .color-toggle {
          background-color: green;
        }
        .color-toggle:hover {
          background-color: pink;
        }
      `}</style>
      <div className="color-toggle">
        <p>Wouldn't it be cool if this text changed colors on hover!? It will now!</p>
      </div>
    </div>
  );
}

export default Example;