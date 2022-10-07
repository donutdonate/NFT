import { getRequest } from ".";
import { ApiUrls } from "./urls";

export const getCollections = async () => {
    const url = `${ApiUrls.baseUrl}${ApiUrls.collections}`
    try {
        const response = await getRequest(url);
        return response?.data || [];
      } catch (error) {
        console.error(error);
        return []
      }
}