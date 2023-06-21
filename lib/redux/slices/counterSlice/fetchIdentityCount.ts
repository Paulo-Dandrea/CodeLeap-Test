export const fetchIdentityCount = async (
  amount = 1
): Promise<{ data: number }> => {
  const response = await fetch('http://localhost:3000/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  })
  const result = await response.json()

  return result
}

export const fetchPosts = async (
  amount = 1
): Promise<{ data: number }> => {
  const response = await fetch('https://dev.codeleap.co.uk/careers/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json()
  console.log('result: ', result);

  return result
}
