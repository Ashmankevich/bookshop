import axios from "axios";
import { NewBooksApi } from "./types";

class Api {
  private readonly API_URL = "https://api.itbook.store/1.0/";

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getNewBooks(): Promise<NewBooksApi> {
    const { data } = await this.api.get<NewBooksApi>("/new");
    return data;
  }
}
export const bookApi = new Api();
