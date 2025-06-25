function printId(id: number | string | boolean): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase())
        return
    }

    if (typeof id === "number") {
        console.log(id.toFixed(2))
        return
    }

    if (typeof id === "boolean") {
        console.log(id === true ? "true" : "false")
        return
    }
}

printId("abc")
printId(1.2345)
printId(true)
