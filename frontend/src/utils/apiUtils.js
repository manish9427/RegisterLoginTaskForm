const handleApiResponse = async (response) => {
  if (response.ok) {
    return response.json();
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
};

export default handleApiResponse;
