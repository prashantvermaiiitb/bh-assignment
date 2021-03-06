import { Core } from "./Core";

/**
 * Base class for the Card
 * 1. description for the card
 * 2. Terms and condition in the card
 * 3. instruction associated with card
 * 4. related cards to show-case
 * 5. sold out or not
 * 6. count remaining in the inventory
 * 7. documents list of documents associated with cards
 * 8. videos list of videos associate with cards
 * 9. flags that indicate the usage for the cards.
 * 10. Popularity used for showcase in UI as well filtering them in backend
 */
class Card extends Core {
  /**
   * constructor
   * @param {*} data
   */
  constructor(data) {
    super(data);
    this.description = data.description;
    this.tnc = data.tnc;
    this.instruction = data.instruction;
    this.relatedCards = new Array(data.Cards);
    this.documents = new Array(data.documents);
    this.videos = new Array(data.videos);
    this.isSoldOut = data.isSoldOut;
    this.count = data.count;
    this.popularityIndex = data.popularityIndex;
    this.categories = {
      isSportsCard: data.categories.isSportsCard,
      isOfficeCard: data.categories.isOfficeCard,
      isSalonCard: data.categories.isSalonCard,
      isFoodCard: data.categories.isFoodCard,
    };
  }
}

export default Card;
