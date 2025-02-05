"use client"

export const submitForm = async (formData) => {
  const response = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
    method: "POST",
    headers: {
       "Content-Type": "application/json"
    },
    body: JSON.stringify(formData),
  })
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response;
}

export const logout = async () => {
  const response = await fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
    method: "POST",
    headers: {
       "Content-Type": "application/json"
    },
  })
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response;
}

export const getBreeds = async () => {
  const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
    method: "GET",
    headers: {
       "Content-Type": "application/json",
      },
    
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  console.log(json);
  return json;
}
