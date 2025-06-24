function useState(state: any): [any, (newState: any) => void] {
    let currentState = state;
    const changeState = (newState: any) => {
        currentState = newState;
    }

    return [currentState, changeState];
}

const [counter, changeCounter]: [number, (newState: number) => void] = useState(10);

console.log(counter); // 10
changeCounter(20);
console.log(counter); // 10
