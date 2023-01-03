import { all } from './array'

export const isKeyContained = <TObj extends object, TKey extends keyof TObj>(
  obj: TObj,
  key: string | number | symbol,
): key is TKey => {
  return key in obj
}

export const isArray = (obj: unknown): obj is unknown[] => {
  return !!obj && typeof obj == 'object' && Array.isArray(obj)
}

export const isStringArray = (obj: unknown): obj is string[] => {
  return isArray(obj) && all(obj, (e) => typeof e === 'string')
}

export const isNumberArray = (obj: unknown): obj is number[] => {
  return isArray(obj) && all(obj, (e) => typeof e === 'number')
}

export const assertNever = (_value: never): never => {
  throw new Error()
}
