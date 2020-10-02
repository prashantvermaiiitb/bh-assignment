import { Core } from "./Core";

/**
 * External card for the Project will be used in-case of Tie-up or affiliates
 */
class ExternalCard extends Core {
  constructor(data) {
    super(data);
    this.link = data.link;
  }
}

export default ExternalCard;
