import { PLATFORMS, IMAGE, VIDEO, DOCUMENT } from "../../../utils/constants";
import ImageFactory from "../../business-models/images copy/ImageFactory";
import VideoFactory from "./videos/VideoFactory";
import DocumentFactory from "./document/DocumentFactory";
import GenericHandler from "./general/GenericHandler";

/**
 * Factory class for handling the multimedia data associated with the card.
 */
class MultiMediaFactory extends Component {
  /**
   * getting proper instance based on the type.
   * @param {*} requestParams
   */
  static getInstance(requestParams) {
    switch (requestParams.type) {
      case IMAGE:
        return ImageFactory.getInstance(requestParams);
      case VIDEO:
        return VideoFactory.getInstance(requestParams);
      case DOCUMENT:
        return DocumentFactory.getInstance(requestParams);
      default:
        return GenericHandler.getInstance(requestParams);
    }
  }
}

export default MultiMediaFactory;
