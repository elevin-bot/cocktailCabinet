// import MockAdapter from 'axios-mock-adapter';
// import { waitFor, fireEvent } from '@testing-library/dom';
// import { renderChallengeList } from './challenge-list.js';

// test(`renderChallengeList should render a 'loading' indicator when waiting for the response`, () => {
//   document.body.innerHTML = '<section id="page"></section>';

//   const mockAdaptor = new MockAdapter(axios);

//   mockAdaptor.onGet('/api/challenges').replyOnce(200, [{ id: 1, name: 'challenge', decription: 'desc', address: 'address' }]);

//   renderChallengeList();

//   return waitFor(() => {
//     const challenge = document.querySelectorAll('.challenge');
//     expect(challenge.length).not.toEqual(0);
//   }).then(() => {
//     const challenge = document.querySelectorAll('.challenge');
//     expect(challenge.length).toBe(1);

//     const buttons = document.getElementsByTagName('button');

//     expect(buttons.length).toBe(2)

//     mockAdaptor.onDelete('/api/challenges/1').reply(200, {});

//     fireEvent.click(buttons[0]);

//     mockAdaptor.onGet('/api/challenges').replyOnce(200, []);

//     waitFor(() => {
//       // loading challenges again after deletion
//       const loadingChallenges = document.querySelectorAll('.loading');
//       expect(loadingChallenges.length).toBe(1);
//     }).then(() => {
//       waitFor(() => {
//         const loadingChallenges = document.querySelectorAll('.loading');
//         expect(loadingChallenges.length).toBe(0);
//       }).then(() => {
//         // successfully loaded challenges whic is empty
//         const challenge = document.querySelectorAll('.challenge');
//         expect(challenge.length).toBe(0);
//       })
//     })

//   })
// })
