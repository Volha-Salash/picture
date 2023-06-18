import { $api } from "../axios";

export default class ImagesService {
  static async fetchImages() {
    return await $api.get("/image");
  }
}