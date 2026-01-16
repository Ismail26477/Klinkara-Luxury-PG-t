export const sendContactEmail = async (formData: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  try {
    const response = await fetch("http://localhost:3001/api/send-contact-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to send email")
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}
