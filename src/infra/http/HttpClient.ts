import axios, { AxiosError } from "axios";
import { HttpClient, HttpRequest } from "./HttpClient.type";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const HttpClienteAxiosAdpter: HttpClient = {
  request: async function <Response = unknown>(
    request: HttpRequest
  ): Promise<Response> {
    try {
      const { data } = await api.request<Response>({
        method: request.method,
        headers: request.headers ?? {},
        data: request.body,
        url: request.endpoint,
      });

      return data;
    } catch (er) {
      const error = er as AxiosError;
      const status = error.response?.status;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  },
};
