/**
 * Class for storing the basic information for the Cards. id : unique identifier
 *
 *  1. name : name of the card will be shown on UI as well as used in the filtering
 * process.
 *
 * 2. images : array of images uploaded by the vendor or ingested data
 *    [{platform:'desktop',height:300,width:250,src:'<absolute or relative
 *    path>',alt:'alternate-txt'...}]
 *
 * 3. currency : array of objects indicating in which all
 * [{type:$, lowebound:25},{type:'Rs', lowebound:25, upperbound:100}]
 *
 * 4. type : ['eGift-card', 'Physical', 'mall' etc]
 */
export class Core {
  /**
   * Basic information for a card to be present to be termed as card.
   * @param {*} data
   */
  constructor(data) {
    this.id = id;
    this.name = name;
    this.images = new Array(data.images);
    this.currency = new Array(data.currency);
    this.type = new Array(data.type);
  }
}
