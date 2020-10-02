import { Core } from "./Core";

/**
 * Base class for the Card
 * 1. description for the card
 * 2. Terms and condition in the card
 * 3. instruction associated with card
 * 4. flags that indicate the usage for the cards.
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
    this.usageFlags = {
      isSportsCard: data.usageFlags.isSportsCard,
      isOfficeCard: data.usageFlags.isOfficeCard,
      isSalonCard: data.usageFlags.isSalonCard,
      isFoodCard: data.usageFlags.isFoodCard,
    };
  }
}

export default Card;
