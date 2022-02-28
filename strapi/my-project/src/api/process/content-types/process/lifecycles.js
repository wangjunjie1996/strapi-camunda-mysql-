const BpmnModdle = require("bpmn-moddle")

module.exports = {
    async beforeCreate(event) {
      const { data, where, select, populate } = event.params;
      const moddle = new BpmnModdle();
      const xmlStr =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
                          'id="empty-definitions" ' +
                          'targetNamespace="http://bpmn.io/schema/bpmn">' +
        '</bpmn2:definitions>';
        const {
          rootElement: definitions
        } = await moddle.fromXML(xmlStr);
        definitions.set('id', 'NEW ID');
        const bpmnProcess = moddle.create('bpmn:Process', { id: 'MyProcess_1' });
        definitions.get('rootElements').push(bpmnProcess);
        const {
          xml: xmlStrUpdated
        } = await moddle.toXML(definitions);
      console.log('before', definitions, xmlStrUpdated);
      event.params.data.price = event.params.data.price * 0.8;
    },
  
    afterCreate(event) {
      const { result, params } = event;
  
      // do something to the result;
      console.log('after', event);
    },
};