type PointType = {
    x: number
    y: number
    z?: number // 可选属性
}

type IdType = string | number | boolean

function printIdType(id: IdType): void {
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

const idStr: IdType = "abc"
printIdType(idStr)

const idNum: IdType = 1.2345
printIdType(idNum)

const idBool: IdType = true
printIdType(idBool)
