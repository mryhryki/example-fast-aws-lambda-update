export const handler = async (): Promise<any> => {
  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({success: "BBBB"}, null, 2)
  }
}
