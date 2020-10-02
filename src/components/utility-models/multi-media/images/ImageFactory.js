import { PLATFORMS } from "../../../../utils/constants";

/**
 * Factory class for getting proper information about the images ingested
 * and will be used while displaying the content on the UI.
 * This will return proper Class based on the Device from which the request has
 * come with proper resolution.
 * @todo Strings can be moved to constants file and can be referred from there
 */
class ImageFactory extends Component {
  /**
   * Getting Proper instance of the Image based on the resolution or device information
   * present as an attribute
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

export default ImageFactory;
