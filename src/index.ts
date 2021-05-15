export const handler = async (): Promise<any> => {
  return {
    statusCode: 200,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({success: true}, null, 2)
  }
}
