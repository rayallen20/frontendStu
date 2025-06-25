const messageStr: string = 'Hello World!';
const messageNum: number = (messageStr as unknown) as number;
console.log(messageNum)
console.log(typeof messageNum)