// While galaxy apps are on their own special meteor releases, override
// Meteor.release here.
if (Meteor.isClient) {
  Meteor.release = Meteor.release ? "0.6.6" : undefined;
}
