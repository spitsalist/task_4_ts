//      1

const sumEvenNumbers =(nums: number[]): number => {
    let sum =0
    for(let i = 0; i< nums.length; i++){
        if(nums[i] % 2 ===0){
            sum += nums[i]
        }
    }
    return sum
}    
console.log(sumEvenNumbers([2,1,4,5]))

//      2

interface StringToBooleanFunction {
    (str: string): boolean
}
const emptyString: StringToBooleanFunction = (str: string): boolean => {
    if( str === ''){
        return true
    }
    return false
}
console.log(emptyString(''))
console.log(emptyString('hello'))

//      3

type CompareStrings = (str1: string, str2: string)=> boolean

const compareStrings: CompareStrings =(str1: string, str2: string): boolean => {
    return str1 === str2
}
console.log(compareStrings('abc','abc'))
console.log(compareStrings('apple','abc'))

//      4

const getLastElement = <T>(arr: T[]):T => {
    return arr[arr.length - 1]
}
console.log(getLastElement([1,2,3,4]))

//      5

const makeTriple = <T>(t1: T, t2: T, t3: T): T[] => {
    return [t1, t2, t3]
}
console.log(makeTriple(1,2,3))
