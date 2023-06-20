import { $api } from "../axios";

export default class ImagesService {
  static async fetchImages() {
    return await $api.get("/image");
  }
}
/*
export default class ImagesUploadService {
  static async uploadImage() {
    return await $api.get('/api/image');
  }
}
*/