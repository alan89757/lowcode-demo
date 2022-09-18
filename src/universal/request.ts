interface IrequestData {
  page: string,
  schema: object,
}
// 请求
export const request2 = {
  async get(url: string, data?: IrequestData) {
    return await(
      await fetch(url)
    ).json();
  }, 
  async post(url: string, data: IrequestData) {
    return await fetch(url, {
      method: "POST",
      mode: 'cors', 
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
};
