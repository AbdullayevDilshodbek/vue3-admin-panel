export interface ISearch
{
  page: number,
  search: string
}

export interface IUserTableEmit
{
  (e: 'changedActive', val?: any): void
}
