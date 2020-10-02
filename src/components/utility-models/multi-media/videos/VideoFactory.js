import { PLATFORMS } from "../../../../utils/constants";

/**
 * Factory class for getting proper information about the videos ingested
 * and will be used while displaying the content on the UI.
 * This will return proper Class based on the Device from which the request has
 * come with proper resolution.
 */
class VideoFactory extends Component {
  /**
   * Getting Proper instance of the Video based on the platform & bandwidth
   * 1024 p
   * 720 p
   * 640 p
   * 320 p
   * @param {*} requestParams
   */
  static getInstance(requestParams) {
    switch (requestParams.device) {
      case PLATFORMS.DESKTOP:
        return new Desktop();
      case PLATFORMS.MOBILE:
        return new Mobile();
      case PLATFORMS.APP:
        return new App();
      default:
        return new Desktop();
    }
  }
}

export default VideoFactory;
