import diff from './main';

// eslint-disable-next-line no-undef
self.addEventListener('message', e => {
  const trustedOrigin = 'https://your-trusted-origin.com'; // Replace with your trusted origin
  if (e.origin !== trustedOrigin) return; // Check the origin of the message

  const instructions = diff.apply(null, e.data);
  // eslint-disable-next-line no-undef
  self.postMessage(instructions);
});
