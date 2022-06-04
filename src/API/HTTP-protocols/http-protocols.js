export async function registerNewUser(body) {
  await fetch(`${process.env.REACT_APP_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function validateNewUser(token) {
  const r = await fetch(
    `${process.env.REACT_APP_URL}/auth/validate?token=${token}`
  );
  return r;
}

export async function logInUser(body) {
  const r = await fetch("${process.env.REACT_APP_URL}/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${body.email}:${body.password}`,
    },
  });
  if (r.status !== 201) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getUserData(token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getAllGames() {
  const r = await fetch("${process.env.REACT_APP_URL}/api/games");

  if (r.status === 404) return r;
  else {
    const data = await r.json();
    return data;
  }
}

export async function createNewGame(body, token, email) {
  const r = await fetch(
    `${process.env.REACT_APP_URL}/api/games?email=${email}`,
    {
      method: "POST",
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (r.status === 409) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}
