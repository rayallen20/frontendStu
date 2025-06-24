const info_arr: any[] = ['Alice', 30, true];
const name_arr = info_arr[0];   // 此处IDE会提示类型为any
console.log(name_arr.length);

const info_tuple: [string, number, boolean] = ['Alice', 30, true];
const name_tuple = info_tuple[0]; // 此处IDE会提示类型为string
console.log(name_tuple.length);
