// Get role
export const getRole = async email => {
    const response = await fetch(`https://easymart-server.vercel.app/users/${email}`)
    const user = await response.json()
    return user?.role
  }