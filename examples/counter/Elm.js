Clicks = new Meteor.Collection("clicks");

if (Meteor.isClient) {
  Meteor.startup(function () {
    elm = Elm.embed(Elm.Main, document.getElementById("counter"));
  });
  Deps.autorun(function() {
    var c = Clicks.findOne({_id:"counter"});
    if(c) elm.send('count', c.count);
  })
  Template.counter.events({
    'click input' : function () {
        Clicks.update({_id:"counter"},{$inc:{count:1}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Clicks.find({}).count() === 0) {
        Clicks.update({_id:"counter"},{$set:{count:0}}, {upsert:true});
    }
  });
}
