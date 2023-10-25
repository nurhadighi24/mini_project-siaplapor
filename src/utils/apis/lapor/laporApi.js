import axiosWithConfig from "../axiosWithConfig";

export const getReport = async () => {
  try {
    const response = await axiosWithConfig.get(
      `https://651a7c65340309952f0d5f71.mockapi.io/reports`
    );

    return response.data;
  } catch (error) {
    throw Error("Failed to get Reports");
  }
};

export const createReport = async (data) => {
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.post(
      "https://651a7c65340309952f0d5f71.mockapi.io/reports",
      newData
    );

    return response.data;
  } catch (error) {
    throw Error("Failed to create a new Report");
  }
};

export const deleteReport = async (id_report) => {
  try {
    const response = await axiosWithConfig.delete(
      `https://651a7c65340309952f0d5f71.mockapi.io/reports/${id_report}`
    );

    return response.data;
  } catch (error) {
    throw Error("Error to delete Report");
  }
};

export const updateReport = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
    };

    const response = await axiosWithConfig.put(
      `https://651a7c65340309952f0d5f71.mockapi.io/reports/${id}`,
      newData
    );

    return response.data;
  } catch (error) {
    throw Error("Failed to update Report");
  }
};
