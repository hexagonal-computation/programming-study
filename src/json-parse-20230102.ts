type Test = {
    hoge: string
    huga: number | null
}

const isString = (obj: unknown): obj is string => {
    let hoge: string | null = null
    if (typeof obj === 'string') {
        hoge = obj
    }
    return !!hoge
}

const isTestType = (obj: unknown): obj is Test => {
    if (!obj || typeof obj !== 'object') {
        return false
    }

    let hoge: string | null = null
    if ('hoge' in obj) {
        if (isString(obj.hoge)) {
            hoge = obj.hoge
            console.log(hoge)
        }
    }

    // TODO: huga

    return !!hoge
}

const parseJsonAsTest = (jsonStr: string): Test => {
    const parsed = JSON.parse(jsonStr)
    if (isTestType(parsed)) {
        return parsed
    } else {
        throw new Error()
    }
}

const t: Test = parseJsonAsTest('{ "hoge": "aaa"}')
console.log(t)
