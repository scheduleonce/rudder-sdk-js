import RudderMessage from "./RudderMessage";
//Individual element class containing Rudder Message
class RudderElement {
  constructor() {
    this.message = new RudderMessage();
  }

  //Setters that in turn set the field values for the contained object
  setType(type) {
    this.message.type = type;
  }

  setProperty(rudderProperty) {
    this.message.properties = rudderProperty;
  }

  setUserProperty(rudderUserProperty) {
    this.message.user_properties = rudderUserProperty;
  }

  setUserId(userId) {
    this.message.user_id = userId;
  }

  setEventName(eventName) {
    this.message.event = eventName;
  }

  updateTraits(traits) {
    this.message.context.traits = traits;
  }

  getElementContent() {
    return this.message;
  }
}
export default RudderElement;
