function Message() { //PascalCasing
    const name = 'Owen';
    if (name)
    // JSX: JavaScript XML
        return <h1>Hello {name}</h1>; // gets compiled to javascript
    return <h1>Hello World</h1>;

}

export default Message;