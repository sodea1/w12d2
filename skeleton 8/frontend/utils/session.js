// SIGN UP USER
export const postUser = user => ( 
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },
  })
);

// LOG IN
export const postSession = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    user: { user },
  })
);

// LOG OUT
export const deleteSession = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
);
