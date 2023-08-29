import ReactGA from 'react-ga4';
import mixpanel from 'mixpanel-browser';

ReactGA.initialize('G-4HTK17RPK8');
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

mixpanel.init('6e24a2975c4cfdb9a17b4232e9e459af', { debug: true });

// Set this to a unique identifier for the user performing the event.
// eg: their ID in your database or their email address.
// mixpanel.identify(/* "<USER_ID"> */)

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
// mixpanel.track('Signed Up', {
//     'Signup Type': 'Referral',
// });