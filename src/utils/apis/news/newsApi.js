import axiosWithConfig from "../axiosWithConfig";

export const getNews = async () => {
  try {
    const response = await axiosWithConfig.get(
      `https://api-berita-indonesia.vercel.app/cnn/terbaru`
    );

    return response.data;
  } catch (error) {
    throw Error("Failed to get News");
  }
};
